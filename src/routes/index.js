import { lazy, Suspense } from 'react';

const IndexRoute = lazy(() => import('./home'));
const CarRoute = lazy(() => import('./car'));
const CubeRoute = lazy(() => import('./cube'));
const SecondCarRoute = lazy(() => import('./car2'));
const VideoRoute = lazy(() => import('./video'));
const SceneRoute = lazy(() => import('./scene'));
const SolarRoute = lazy(() => import('./solar'));

const routes = [
  {
    id: 1,
    index: true,
    label: 'Home',
    to: '/',
    element: (
      <Suspense fallback={<div></div>}>
        <IndexRoute />
      </Suspense>
    ),
  },
  {
    id: 2,
    path: 'cube',
    label: 'Cube',
    to: '/cube',
    element: (
      <Suspense fallback={<div></div>}>
        <CubeRoute />
      </Suspense>
    ),
  },
  {
    id: 3,
    path: 'car',
    label: 'Car',
    to: '/car',
    element: (
      <Suspense fallback={<div></div>}>
        <CarRoute />
      </Suspense>
    ),
  },
  {
    id: 4,
    path: 'car2',
    label: 'Car 2',
    to: '/car2',
    element: (
      <Suspense fallback={<div></div>}>
        <SecondCarRoute />
      </Suspense>
    ),
  },
  {
    id: 5,
    path: 'video',
    label: 'Video',
    to: '/video',
    element: (
      <Suspense fallback={<div></div>}>
        <VideoRoute />
      </Suspense>
    ),
  },
  {
    id: 6,
    path: 'scene',
    label: 'Scene',
    to: '/scene',
    element: (
      <Suspense fallback={<div></div>}>
        <SceneRoute />
      </Suspense>
    ),
  },
  {
    id: 7,
    path: 'solar',
    label: 'Solar',
    to: '/solar',
    element: (
      <Suspense fallback={<div></div>}>
        <SolarRoute />
      </Suspense>
    ),
  },
];

export default routes;
