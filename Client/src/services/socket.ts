import { io, Socket } from 'socket.io-client';
import { store } from '../store';
import { addMessage } from '../store/slices/chatSlice';

class SocketService {
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  connect() {
    if (this.socket?.connected) return;

    this.socket = io(import.meta.env.VITE_API_URL, {
      auth: {
        token: store.getState().auth.token,
      },
      reconnection: true,
      reconnectionAttempts: this.maxReconnectAttempts,
      reconnectionDelay: 1000,
    });

    this.setupEventListeners();
  }

  private setupEventListeners() {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      console.log('Socket connected');
      this.reconnectAttempts = 0;
    });

    this.socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      this.reconnectAttempts++;

      if (this.reconnectAttempts >= this.maxReconnectAttempts) {
        console.error('Max reconnection attempts reached');
        this.disconnect();
      }
    });

    this.socket.on('message', (message) => {
      store.dispatch(addMessage(message));
    });
  }

  joinRoom(roomId: string) {
    if (!this.socket?.connected) return;
    this.socket.emit('join_room', roomId);
  }

  leaveRoom(roomId: string) {
    if (!this.socket?.connected) return;
    this.socket.emit('leave_room', roomId);
  }

  sendMessage(roomId: string, message: string) {
    if (!this.socket?.connected) return;
    this.socket.emit('message', {
      roomId,
      content: message,
      timestamp: new Date().toISOString(),
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export const socketService = new SocketService(); 