import { Plus, Circle } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newTaskFormSchema } from '@/lib/validate-new-task-form';

function NewTaskForm() {
  const { register, handleSubmit: hookFormSubmit } = useForm({
    resolver: zodResolver(newTaskFormSchema),
  });

  return (
    <form
      onSubmit={hookFormSubmit(handleSubmit)}
      className="flex flex-row-reverse items-center gap-3 relative text-foreground"
    >
      <input
        type="text"
        className="peer text-lg font-light py-3 ps-10 pe-2 flex-1 bg-gray-50 dark:bg-slate-950 bg-opacity-70 backdrop-blur-sm dark:bg-opacity-70 dark:backdrop-blur-sm placeholder:text-gray-800 dark:placeholder:text-gray-300 shadow-md rounded-sm focus:outline-none focus:bg-opacity-90 dark:focus:bg-opacity-90"
        placeholder="Add a task"
        size={1}
        {...register('task')}
      />
      <Plus size={24} className="peer-focus:hidden absolute left-2" />
      <Circle size={24} className="hidden peer-focus:block absolute left-2" />
    </form>
  );

  function handleSubmit(data) {
    console.log(data);
  }
}
export { NewTaskForm };
