import { Todo } from '@/components/todo';
import { TodoProvider } from '@/components/todo-provider';
import {
  TodoThemeProvider,
  todoThemes,
} from '@/components/todo-theme-provider';
import { createTask } from '@/sanity/create-task';
import { getPlannedTasks } from '@/sanity/get-planned-tasks';
import { Article } from '@phosphor-icons/react';
function Planned() {
  const _getTasks = getPlannedTasks;
  const _createTask = createTask;
  return (
    <TodoThemeProvider theme={todoThemes.desert}>
      <TodoProvider getTasks={_getTasks} createTask={_createTask} getTasksKey={['tasks', 'planned']}>
        <Todo title="Planned" icon={Article} />
      </TodoProvider>
    </TodoThemeProvider>
  );
}
export { Planned };
