import React from 'react';
import themes from '../resources/themes';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => { },
});