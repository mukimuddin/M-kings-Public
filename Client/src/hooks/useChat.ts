import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  setActiveRoom,
  addRoom,
  removeRoom,
  addMessage,
  setMessages,
  setLoading,
  setError,
} from '../store/slices/chatSlice';
import { chatApi } from '../services/api';
import { socketService } from '../services/socket';

export const useChat = () => {
  const dispatch = useDispatch();
  const {
    activeRoom,
    rooms,
    messages,
    loading,
    error,
  } = useSelector((state: RootState) => state.chat);

  const loadRooms = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await chatApi.getRooms();
      response.data.forEach((room: any) => {
        dispatch(addRoom(room));
      });
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const createRoom = useCallback(async (name: string, participants: string[]) => {
    try {
      dispatch(setLoading(true));
      const response = await chatApi.createRoom({ name, participants });
      dispatch(addRoom(response.data));
      return response.data;
    } catch (error: any) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const joinRoom = useCallback((roomId: string) => {
    dispatch(setActiveRoom(roomId));
    socketService.joinRoom(roomId);
  }, [dispatch]);

  const leaveRoom = useCallback((roomId: string) => {
    dispatch(setActiveRoom(''));
    socketService.leaveRoom(roomId);
  }, [dispatch]);

  const loadMessages = useCallback(async (roomId: string) => {
    try {
      dispatch(setLoading(true));
      const response = await chatApi.getMessages(roomId);
      dispatch(setMessages({ roomId, messages: response.data }));
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const sendMessage = useCallback(async (roomId: string, content: string) => {
    try {
      const response = await chatApi.sendMessage(roomId, content);
      dispatch(addMessage(response.data));
      socketService.sendMessage(roomId, content);
    } catch (error: any) {
      dispatch(setError(error.message));
      throw error;
    }
  }, [dispatch]);

  const clearError = useCallback(() => {
    dispatch(setError(null));
  }, [dispatch]);

  return {
    activeRoom,
    rooms,
    messages,
    loading,
    error,
    loadRooms,
    createRoom,
    joinRoom,
    leaveRoom,
    loadMessages,
    sendMessage,
    clearError,
  };
}; 