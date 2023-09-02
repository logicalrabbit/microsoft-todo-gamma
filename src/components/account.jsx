import { useUser } from '@clerk/clerk-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CaretUpDown } from '@phosphor-icons/react';

function Account() {
  const { user } = useUser();

  return (
    <div className='flex gap-3 items-center hover:cursor-pointer'>
      <Avatar>
        <AvatarImage src={user.imageUrl} />
        <AvatarFallback>{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback>
      </Avatar>
      <div>
        <p>{user.fullName}</p>
        <p className='text-sm font-light flex items-center'>{user.primaryEmailAddress.emailAddress} <CaretUpDown className='lg:mt-1' /></p>
      </div>
    </div>
  );
}
export {Account};
