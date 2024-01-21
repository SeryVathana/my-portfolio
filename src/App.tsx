import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path='projects' element={<ProjectsPage />} />
      <Route path='projects/:id' element={<ProjectDetail />} />

      <Route path='/*' element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
