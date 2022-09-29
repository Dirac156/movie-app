import Meta from './Meta'
import Nav from './Nav'
const Layout = ({ children }) => {
  return (
    <div data-theme="dark">
      <Meta />
      <div>
        <Nav />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
