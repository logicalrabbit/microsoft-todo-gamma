import { createContext, useContext, useState } from 'react';

const TodoThemeContext = createContext();

function TodoThemeProvider({ theme, children }) {
  const [todoTheme, setTodoTheme] = useState(theme);
  return (
    <TodoThemeContext.Provider value={{ todoTheme, setTodoTheme }}>
      {children}
    </TodoThemeContext.Provider>
  );
}

function useTodoTheme() {
  const context = useContext(TodoThemeContext);

  if (context === undefined) {
    throw new Error('useTodoTheme must be used within a TodoThemeProvider');
  }

  return context;
}

const todoThemes = {
  rose: 'todo-theme-rose',
  blue: 'todo-theme-blue',
  lime: 'todo-theme-lime',
  green: 'todo-theme-green',
  purple: 'todo-theme-purple',
  roseLight: 'todo-theme-rose-light',
  blueLight: 'todo-theme-blue-light',
  limeLight: 'todo-theme-lime-light',
  greenLight: 'todo-theme-green-light',
  purpleLight: 'todo-theme-purple-light',
  desk: 'todo-theme-desk',
  desert: 'todo-theme-desert',
  nightSky: 'todo-theme-night-sky',
  library: 'todo-theme-library',
  forest: 'todo-theme-forest',
};

export { TodoThemeProvider, useTodoTheme, todoThemes };
