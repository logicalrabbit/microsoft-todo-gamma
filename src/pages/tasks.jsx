import Todo from '@/components/todo';
import { TodoThemeProvider, todoThemes } from '@/components/todo-theme-provider';
import { House } from '@phosphor-icons/react';
function Tasks() {
  return (
    <TodoThemeProvider theme={todoThemes.library}>
      <Todo title="Tasks" icon={House}/>
    </TodoThemeProvider>
  );
}
export { Tasks };
