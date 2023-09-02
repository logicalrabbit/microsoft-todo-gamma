import { Todo } from '@/components/todo';
import { TodoProvider } from '@/components/todo-provider';
import {
  TodoThemeProvider,
  todoThemes,
} from '@/components/todo-theme-provider';
import { createTask } from '@/sanity/create-task';
import { getListTasks } from '@/sanity/get-list-tasks';
import { House } from '@phosphor-icons/react';
function Tasks() {
  const _getTasks = getListTasks;
  const _createTask = createTask;

  return (
    <TodoThemeProvider theme={todoThemes.library}>
      <TodoProvider
        getTasks={_getTasks}
        createTask={_createTask}
        getTasksKey={['tasks', 'tasks']}
      >
        <Todo title="Tasks" icon={House} />
      </TodoProvider>
    </TodoThemeProvider>
  );
}
export { Tasks };
