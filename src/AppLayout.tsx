import { Outlet } from 'react-router'
import TopBar from '@/components/TopBar'

const AppLayout = () => {
  return (
    <div className="mx-4 flex flex-1 flex-col [--header-height:calc(--spacing(14))]">
      <TopBar />
      <Outlet />
    </div>
  )
}

export default AppLayout
