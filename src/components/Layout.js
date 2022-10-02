import Meta from './Meta'
import Nav from './Nav'
const Layout = ({ children }) => {
  return (
    <div data-theme="dark">
      <Meta />
      <div>
        <header className="md:pt-5">
          <Nav />
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
