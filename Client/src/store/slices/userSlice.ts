import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  profile: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
    preferences: {
      language: string;
      notifications: boolean;
    };
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserState['profile']>) => {
      state.profile = action.payload;
    },
    updateUserProfile: (state, action: PayloadAction<Partial<UserState['profile']>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearUserProfile: (state) => {
      state.profile = null;
      state.error = null;
    },
  },
});

export const {
  setUserProfile,
  updateUserProfile,
  setLoading,
  setError,
  clearUserProfile,
} = userSlice.actions;

export default userSlice.reducer; 