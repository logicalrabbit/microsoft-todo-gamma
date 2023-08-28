import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DotsThree } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { todoThemes, useTodoTheme } from '@/components/todo-theme-provider';


const themes = Object.values(todoThemes);

function TodoThemeSelect() {

  const {todoTheme: currentTheme, setTodoTheme} = useTodoTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="xs" className="text-inherit">
          <DotsThree size={30} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="grid grid-cols-5 gap-0.5">
          {themes.map((theme) => (
            <DropdownMenuItem
              key={theme}
              onClick={() => setTodoTheme(theme)}
              className={cn(
                'p-0.5 border-2 rounded-sm border-transparent hover:cursor-pointer hover:border-blue-800',
                {
                  'border-blue-800': currentTheme === theme,
                }
              )}
            >
              <div className={cn('w-12 h-12 border-2', theme, 'bg-cover bg-no-repeat')}></div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export { TodoThemeSelect };
