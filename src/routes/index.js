import { lazy, Suspense } from 'react';

const IndexRoute = lazy(() => import('./home'));
const CarRoute = lazy(() => import('./car'));
const CubeRoute = lazy(() => import('./cube'));
const SecondCarRoute = lazy(() => import('./car2'));
const VideoRoute = lazy(() => import('./video'));
const SceneRoute = lazy(() => import('./scene'));
const SolarRoute = lazy(() => import('./solar'));
const ShoesRoute = lazy(() => import('./shoes'));
const StageRoute = lazy(() => import('./stage'));
const SpotsRoute = lazy(() => import('./spots'));
const KleinzRoute = lazy(() => import('./kleinz'));

const routes = [
  {
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
    path: 'solar',
    label: 'Solar',
    to: '/solar',
    element: (
      <Suspense fallback={<div></div>}>
        <SolarRoute />
      </Suspense>
    ),
  },
  {
    path: 'shoes',
    label: 'Shoes',
    to: '/shoes',
    element: (
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <ShoesRoute />
      </Suspense>
    ),
  },
  {
    path: 'stage',
    label: 'Stage',
    to: '/stage',
    element: (
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <StageRoute />
      </Suspense>
    ),
  },
  {
    path: 'spots',
    label: 'Spots',
    to: '/spots',
    element: (
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <SpotsRoute />
      </Suspense>
    ),
  },
  {
    path: 'kleinz',
    label: 'Kleinz',
    to: '/kleinz',
    element: (
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <KleinzRoute />
      </Suspense>
    ),
  },
].map((x, index) => ({ ...x, id: index + 1 }));

export default routes;
