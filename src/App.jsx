import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import IndexRoute from './routes';
import CarRoute from './routes/car';
import CubeRoute from './routes/cube';

const routes = [
  { id: 1, index: true, element: <IndexRoute /> },
  { id: 2, path: 'cube', element: <CubeRoute /> },
  { id: 3, path: 'car', element: <CarRoute /> },
  { id: 4, path: 'car2', element: <CarRoute /> },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route {...route} key={route.id} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
