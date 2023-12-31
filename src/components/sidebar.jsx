import { NavLink } from 'react-router-dom';
import { Sun, House, User, Star, Article } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import {Account} from './account';
import { AccountMenu } from './account-menu';

const navigation = [
  { name: 'My Day', icon: Sun, link: '/my-day' },
  { name: 'Important', icon: Star, link: '/important' },
  { name: 'Planned', icon: Article, link: '/planned' },
  { name: 'Assigned to me', icon: User, link: '/assigned' },
  { name: 'Tasks', icon: House, link: '/tasks' },
];

function Sidebar() {
  return (
    <div className='bg-background h-full px-2 py-4 flex flex-col gap-6'>
      <AccountMenu>
        <Account />
      </AccountMenu>
      <ul className="flex flex-col gap-0.5">
        {navigation.map(({ name, ...rest }) => (
          <li key={name}>
            <SidebarLink name={name} {...rest} />
          </li>
        ))}
      </ul>
      <div className='border-b border-b-foreground/30'></div>
    </div>
  );
}

function SidebarLink({ name, icon: Icon, link }) {
  return (
    <NavLink to={link} className={navLinkStyles}>
      <Icon weight="light" />
      <span className="font-light">{name}</span>
    </NavLink>
  );

  function navLinkStyles({ isActive }) {
    return cn('flex gap-4 items-center px-2 py-2 text-foreground text-lg', {
      'border-l-4 border-l-blue-800 bg-muted': isActive,
      'border-l-4 border-l-transparent hover:bg-muted': !isActive,
    });
  }
}

export { Sidebar };
