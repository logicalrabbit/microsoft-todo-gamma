import Todo from '@/components/todo';
import { TodoThemeProvider, todoThemes } from '@/components/todo-theme-provider';
import { Article } from '@phosphor-icons/react';
function Planned() {
  return (
    <TodoThemeProvider theme={todoThemes.desert}>
      <Todo title="Planned" icon={Article} />
    </TodoThemeProvider>
  );
}
export { Planned };
