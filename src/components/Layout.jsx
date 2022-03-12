import { NavLink as NavLinkBase, Outlet } from 'react-router-dom';
import routes from 'routes';

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

export default function Layout() {
  return (
    <>
      <main className="h-screen flex">
        <div className="px-3 py-2 flex flex-col gap-4 border">
          <h1 className="mr-8 font-semibold">Fun with Three</h1>
          <hr />
          <nav>
            <ul className="gap-2">
              {routes.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="h-full flex-1">
          <Outlet />
        </div>
      </main>
      {/* <header className="absolute top-0 left-0 right-0 bg-white-50 text-white">
        <div className="flex px-3 py-2 bg-[#101010]/50">
          <h1 className="mr-8">Fun with Three</h1>
          <nav>
            <ul className="flex gap-2">
              {routes.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header> */}
    </>
  );
}
