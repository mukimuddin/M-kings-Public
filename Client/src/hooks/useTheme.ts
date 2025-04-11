import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleDarkMode, setDarkMode } from '../store/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme === null && prefersDark) {
      dispatch(setDarkMode(true));
    }
  }, [dispatch]);

  const toggle = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);

  const set = useCallback((isDark: boolean) => {
    dispatch(setDarkMode(isDark));
  }, [dispatch]);

  return {
    darkMode,
    toggle,
    set,
  };
}; 