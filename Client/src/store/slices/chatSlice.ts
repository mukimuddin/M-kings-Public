import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: string;
  roomId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
}

interface Room {
  id: string;
  name: string;
  participants: string[];
  lastMessage?: Message;
}

interface ChatState {
  activeRoom: string | null;
  rooms: Room[];
  messages: { [roomId: string]: Message[] };
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  activeRoom: null,
  rooms: [],
  messages: {},
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveRoom: (state, action: PayloadAction<string>) => {
      state.activeRoom = action.payload;
    },
    addRoom: (state, action: PayloadAction<Room>) => {
      if (!state.rooms.find(room => room.id === action.payload.id)) {
        state.rooms.push(action.payload);
        state.messages[action.payload.id] = [];
      }
    },
    removeRoom: (state, action: PayloadAction<string>) => {
      state.rooms = state.rooms.filter(room => room.id !== action.payload);
      delete state.messages[action.payload];
      if (state.activeRoom === action.payload) {
        state.activeRoom = null;
      }
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const { roomId } = action.payload;
      if (!state.messages[roomId]) {
        state.messages[roomId] = [];
      }
      state.messages[roomId].push(action.payload);
      
      // Update last message in room
      const room = state.rooms.find(r => r.id === roomId);
      if (room) {
        room.lastMessage = action.payload;
      }
    },
    setMessages: (state, action: PayloadAction<{ roomId: string; messages: Message[] }>) => {
      const { roomId, messages } = action.payload;
      state.messages[roomId] = messages;
      
      // Update last message in room
      const room = state.rooms.find(r => r.id === roomId);
      if (room && messages.length > 0) {
        room.lastMessage = messages[messages.length - 1];
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setActiveRoom,
  addRoom,
  removeRoom,
  addMessage,
  setMessages,
  setLoading,
  setError,
} = chatSlice.actions;

export default chatSlice.reducer; 