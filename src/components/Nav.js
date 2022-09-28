import logo from '../../public/assets/logo.svg'
const Nav = () => {
  return (
    <nav className="navbar bg-semiDarkBlue">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo.src} />
        </a>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>Parent</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
      </div>
    </nav>
  )
}

export default Nav
