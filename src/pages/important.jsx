import { Todo } from '@/components/todo';
import { TodoProvider } from '@/components/todo-provider';
import {
  TodoThemeProvider,
  todoThemes,
} from '@/components/todo-theme-provider';
import { createTask } from '@/sanity/create-task';
import { getImportantTasks } from '@/sanity/get-important-tasks';
import { Star } from '@phosphor-icons/react';

function Important() {
  const _getTasks = getImportantTasks;
  const _createTask = (task) => createTask({ ...task, important: true });

  return (
    <TodoThemeProvider theme={todoThemes.nightSky}>
      <TodoProvider getTasks={_getTasks} createTask={_createTask} getTasksKey={['tasks', 'important']}>
        <Todo title="Important" icon={Star} />
      </TodoProvider>
    </TodoThemeProvider>
  );
}
export { Important };
