import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { List } from '@phosphor-icons/react';
import { Sidebar } from './sidebar';

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="w-min md:hidden mb-3 p-2">
        <List size={26} className='text-inherit' />
      </SheetTrigger>
      <SheetContent className='w-80 p-0' side='left'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
export { MobileSidebar };
