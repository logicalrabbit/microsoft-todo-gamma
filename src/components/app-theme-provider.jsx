import { createContext, useContext, useEffect, useState } from 'react';

const initialState = {
  theme: 'system',
  setAppTheme: () => null,
};

const AppThemeContext = createContext(initialState);

export function AppThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}) {
  const [appTheme, setAppTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (appTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(appTheme);
  }, [appTheme]);

  const value = {
    appTheme,
    setAppTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setAppTheme(theme);
    },
  };

  return (
    <AppThemeContext.Provider {...props} value={value}>
      {children}
    </AppThemeContext.Provider>
  );
}

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
