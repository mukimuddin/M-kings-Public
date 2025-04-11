import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark] = useState(true);

  return {
    isDark,
    colors: {
      primary: '#60A5FA',
      background: '#111827',
      text: '#FFFFFF',
    },
  };
}; 