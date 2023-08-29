import { Auth } from '@/components/auth';
import { Sidebar } from '@/components/sidebar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="h-screen max-h-screen flex">
      <div className="max-w-xs w-full sticky top-0 overflow-y-auto hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto relative">
        <Outlet />
      </div>
    </div>
  );
}

function ProtectedAppLayout() {
  return (
    <Auth>
      <AppLayout />
    </Auth>
  );
}

export { ProtectedAppLayout as AppLayout };
