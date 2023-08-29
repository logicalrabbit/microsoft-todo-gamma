import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SignOutButton } from '@clerk/clerk-react';

function AccountMenu({ children }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='text-start'>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem><SignOutButton /></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export { AccountMenu };
