import React from 'react';
import { ThemeProvider, light } from 'decentraland-ui2/dist/theme';

interface DecentralandThemeProviderProps {
  children: React.ReactNode;
}

const DecentralandThemeProvider: React.FC<DecentralandThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      {children}
    </ThemeProvider>
  );
};

export default DecentralandThemeProvider; 