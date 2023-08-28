import { useTodoTheme } from '@/components/todo-theme-provider';
import { TodoThemeSelect } from './todo-theme-select';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import { NewTaskForm } from '@/components/new-task-form';
import { MobileSidebar } from './mobile-side-bar';

function Todo({ title, icon }) {
  const { todoTheme } = useTodoTheme();

  const todoStyle = cn(
    'flex flex-col bg-fixed bg-center bg-cover min-h-screen max-h-screen pb-9 pt-2 md:pt-9 bg-gray-800 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16',
    todoTheme
  );

  return (
    <div className={todoStyle}>
      <MobileSidebar />
      <TodoHeader title={title} icon={icon} />
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto text-foreground"></div>
        <NewTaskForm />
      </div>
    </div>
  );
}
export default Todo;

function TodoHeader({ icon: Icon, title }) {
  return (
    <header className="flex items-center gap-2">
      <div className="flex items-center text-3xl gap-2 font-semibold">
        <Icon weight="bold" className="relative top-0.5" />
        <span>{title}</span>
      </div>
      <div className="flex-1"></div>
      <ModeToggle />
      <TodoThemeSelect />
    </header>
  );
}
