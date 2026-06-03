import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { CounterPage } from '@/pages/CounterPage'
import { AboutPage } from '@/pages/AboutPage'
import { FormPage } from '@/pages/FormPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'counter', element: <CounterPage /> },
      { path: 'form', element: <FormPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
