import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import RestaurantList from '@/features/restaurantList/RestaurantList.tsx'
import RestaurantDetails from '@/features/restaurantDetails/RestaurantDetails.tsx'
import AppLayout from '@/AppLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'restaurants'} element={<AppLayout />}>
          <Route index element={<RestaurantList />} />
          <Route path={'restaurant/:id'} element={<RestaurantDetails />} />
        </Route>
        <Route path={'*'} element={<Navigate to={'/restaurants'} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
