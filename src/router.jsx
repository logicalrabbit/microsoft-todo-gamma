import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout } from '@/layouts/app-layout';
import { MyDay, Important, Planned, Assigned, Tasks } from '@/pages';
import { Navigate } from 'react-router-dom';
import { Landing } from './pages/landing';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />

      <Route path="/" element={<AppLayout />}>
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
