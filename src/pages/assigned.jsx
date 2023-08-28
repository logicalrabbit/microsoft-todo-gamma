import Todo from '@/components/todo';
import { TodoThemeProvider, todoThemes } from '@/components/todo-theme-provider';
import { User } from '@phosphor-icons/react';

function Assigned() {
  return (
    <TodoThemeProvider theme={todoThemes.purpleLight}>
      <Todo title="Assigned to me" icon={User} />
    </TodoThemeProvider>
  );
}
export { Assigned };
