import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from 'routes';

import Layout from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => {
            return <Route key={route.id} {...route} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
