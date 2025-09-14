import { Outlet } from 'react-router'
import TopBar from '@/components/TopBar'

const AppLayout = () => {
  return (
    <div className="m-4">
      <TopBar />
      <Outlet />
    </div>
  )
}

export default AppLayout
