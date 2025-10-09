import { Github } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const links = (
    <>
      <div className="flex flex-col md:flex-row gap-5 font-semibold">
        <NavLink to={'/'}>
          <li>Home</li>
        </NavLink>
        <NavLink to={'/apps'}>
          <li>Apps</li>
        </NavLink>
        <NavLink to={'/installation'}>
          <li>Installation</li>
        </NavLink>
      </div>
    </>
  );
  return (
    <div className=" bg-white shadow-sm ">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown mr-1">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={'/'}
            className="inline-flex items-center gap-1 text-xl font-semibold "
          >
            <img src={Logo} alt="" className="w-8 md:w-10" />{' '}
            <span className="text-base md:text-lg font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Hero Apps
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to={'https://github.com/Obaidul1545/hero-apps'}
            target="blank"
            className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
          >
            <Github size={20} /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
