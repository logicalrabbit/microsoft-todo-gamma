import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout } from '@/layouts/app-layout';
import { MyDay, Important, Planned, Assigned, Tasks } from '@/pages';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to='/my-day' replace />} />
        <Route path="my-day" element={<MyDay />} />
        <Route path="important" element={<Important />} />
        <Route path="planned" element={<Planned />} />
        <Route path="assigned" element={<Assigned />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>
    </>
  )
);

export { router };
