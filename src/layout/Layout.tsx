import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
