import { Plus, Circle } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newTaskFormSchema } from '@/lib/validate-new-task-form';
import { useTodo } from './todo-provider';
import { useAuth } from '@clerk/clerk-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function NewTaskForm() {
  const { register, handleSubmit: hookFormSubmit, reset } = useForm({
    resolver: zodResolver(newTaskFormSchema),
  });
  const { userId } = useAuth();
  const { createTask, getTasksKey } = useTodo();
  const queryClient = useQueryClient();

  const createTaskMutation = useMutation((task) =>
    createTask({ userId, ...task }), {onSuccess: taskMutationSuccess}
  );

  if (!createTask) return null;

  return (
    <form
      onSubmit={hookFormSubmit(handleSubmit)}
      className="flex flex-row-reverse items-center gap-3 relative text-foreground"
    >
      <input
        type="text"
        className="peer text-lg font-light py-3 ps-10 pe-2 flex-1 bg-gray-50 dark:bg-slate-800 bg-opacity-70 backdrop-blur-sm focus:backdrop-blur-none dark:bg-opacity-70 dark:backdrop-blur-sm placeholder:text-gray-800 dark:placeholder:text-gray-300 shadow-md rounded-sm focus:outline-none focus:bg-opacity-100 dark:focus:bg-opacity-100 dark:focus:backdrop-blur-none"
        placeholder="Add a task"
        size={1}
        {...register('title')}
        disabled={createTaskMutation.isLoading}
      />
      <Plus size={24} className="peer-focus:hidden absolute left-2" />
      <Circle size={24} className="hidden peer-focus:block absolute left-2" />
    </form>
  );

  function handleSubmit(task) {
    createTaskMutation.mutate(task);
  }

  function taskMutationSuccess() {
    reset();
    queryClient.invalidateQueries(getTasksKey)
  }
}
export { NewTaskForm };
