import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div className="m-4">
      <Outlet />
    </div>
  )
}

export default AppLayout
