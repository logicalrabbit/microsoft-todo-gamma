import { Todo } from '@/components/todo';
import { TodoProvider } from '@/components/todo-provider';
import {
  TodoThemeProvider,
  todoThemes,
} from '@/components/todo-theme-provider';
import { getListTasks } from '@/sanity/get-list-tasks';
import { User } from '@phosphor-icons/react';

function Assigned() {
  const _getTasks = getListTasks;
  return (
    <TodoThemeProvider theme={todoThemes.purpleLight}>
      <TodoProvider getTasks={_getTasks} getTasksKey={['tasks', 'assigned']}>
        <Todo title="Assigned to me" icon={User} />
      </TodoProvider>
    </TodoThemeProvider>
  );
}
export { Assigned };
