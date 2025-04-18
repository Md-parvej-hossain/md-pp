import { Link, NavLink } from 'react-router';

const Navber = () => {
  const navber = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li> */}
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Servise</NavLink>
      </li>
      <li>
        <NavLink>Projact</NavLink>
      </li>
      <li>
        <NavLink>Contect</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  shadow-sm fixed z-50 top-2">
      <div className="navbar-start">
        <Link className=" text-xl font-bold">Md Parvej .</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-2 bg-[#2e2a29] rounded-4xl  font-medium
"
        >
          {navber}
        </ul>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 p-2 shadow"
        >
          {navber}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#F8B90C] rounded-3xl ml-2 font-bold text-white">
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default Navber;
