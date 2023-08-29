import { useUser } from '@clerk/clerk-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
        <p className='text-sm font-light'>{user.primaryEmailAddress.emailAddress}</p>
      </div>
    </div>
  );
}
export default Account;
