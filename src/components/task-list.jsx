import { useQuery } from '@tanstack/react-query';
import { useTodo } from './todo-provider';
import { useAuth } from '@clerk/clerk-react';

function TaskList() {
  const { getTasks, getTasksKey } = useTodo();
  const {userId} = useAuth();
  const getTasksQuery = useQuery(getTasksKey, () => getTasks({userId}));

  return (
    <div className='flex flex-col gap-1 py-4'>
      {getTasksQuery.isSuccess && renderTasks()}
    </div>
  );

  function renderTasks() {
    return getTasksQuery.data.map(task => <TaskListItem key={task._id} task={task} />);
  }
}

function TaskListItem({task}) {
  return <div className='bg-white text-black text-lg font-light p-3.5 rounded-sm shadow-sm'>
    {task.title}
  </div>;
}

export { TaskList };
