import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const IndexRoute = lazy(() => import('./routes/index'));
const CarRoute = lazy(() => import('./routes/car'));
const CubeRoute = lazy(() => import('./routes/cube'));
const SecondCarRoute = lazy(() => import('./routes/car2'));

const routes = [
  {
    id: 1,
    index: true,
    element: (
      <Suspense fallback={<div></div>}>
        <IndexRoute />
      </Suspense>
    ),
  },
  {
    id: 2,
    path: 'cube',
    element: (
      <Suspense fallback={<div></div>}>
        <CubeRoute />
      </Suspense>
    ),
  },
  {
    id: 3,
    path: 'car',
    element: (
      <Suspense fallback={<div></div>}>
        <CarRoute />
      </Suspense>
    ),
  },
  {
    id: 4,
    path: 'car2',
    element: (
      <Suspense fallback={<div></div>}>
        <SecondCarRoute />
      </Suspense>
    ),
  },
];

export default function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => (
              <Route {...route} key={route.id} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
