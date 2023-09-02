import { useContext } from 'react';
import { createContext } from 'react';

const TodoContext = createContext();

function TodoProvider({ getTasks, createTask, getTasksKey, children }) {
  return (
    <TodoContext.Provider value={{ getTasks, createTask, getTasksKey }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodo };
