import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Index from '@/features/RestaurantList'
import RestaurantDetails from '@/features/RestaurantDetails'
import AppLayout from '@/AppLayout.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={'restaurants'} element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route
              path={'restaurant/:restaurantId'}
              element={<RestaurantDetails />}
            />
          </Route>
          <Route path={'*'} element={<Navigate to={'/restaurants'} />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
