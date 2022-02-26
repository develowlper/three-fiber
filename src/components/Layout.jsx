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
  { label: 'Video', path: '/video' },
];

export default function Layout() {
  return (
    <>
      <main className="flex-1 h-full absolute top-0 left-0 right-0 bottom-0 bg-[#101010]">
        <div className="h-full">
          <Outlet />
        </div>
      </main>
      <header className="col-span-2 absolute top-0 left-0 right-0 bg-white-50 text-white">
        <div className="flex px-3 py-2 bg-[#101010]/50">
          <h1 className="mr-8">Fun with Three</h1>
          <nav>
            <ul className="flex gap-2">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
