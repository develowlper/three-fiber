import { NavLink as NavLinkBase, Outlet } from 'react-router-dom';

const NavLink = (props) => {
  return (
    <NavLinkBase
      {...props}
      className={({ isActive }) => {
        return isActive ? 'underline' : '';
      }}
    />
  );
};

const links = [
  { label: 'Home', path: '/' },
  { label: 'Cube', path: '/cube' },
  { label: 'Car', path: '/car' },
  { label: 'Car 2', path: '/car2' },
];

export default function Layout() {
  return (
    <div className="w-screen h-screen grid grid-cols-layout grid-rows-layout bg-slate-800 text-white">
      <header className="px-3 py-2 col-span-2 bg-slate-800">
        <h1>Fun with Three</h1>
      </header>
      <aside className="p-2 bg-slate-700">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 h-full">
        <div className="h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
