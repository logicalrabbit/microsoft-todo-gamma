import { Todo } from '@/components/todo';
import { TodoProvider } from '@/components/todo-provider';
import {
  TodoThemeProvider,
  todoThemes,
} from '@/components/todo-theme-provider';
import { createTask } from '@/sanity/create-task';
import { getDayTasks } from '@/sanity/get-day-tasks';
import { Sun } from '@phosphor-icons/react';
function MyDay() {
  const _createTask = (task) => createTask({ ...task, myDay: true });
  return (
    <TodoThemeProvider theme={todoThemes.desk}>
      <TodoProvider getTasks={getDayTasks} createTask={_createTask} getTasksKey={['tasks', 'my-day']}>
        <Todo title="My Day" icon={Sun} />
      </TodoProvider>
    </TodoThemeProvider>
  );
}
export { MyDay };
