import React from 'react'
import { Main } from './Main'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet, useLocation } from 'react-router'

export function Layout(): React.ReactElement {
  const location = useLocation()
  const hideOnPaths = ['/auth/sign-in', '/auth/sign-up']
  const showHeader = !hideOnPaths.includes(location.pathname)

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">

      {showHeader && <Header />}

      <div className="flex-1 w-full mb-5 pt-7">
        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </div>
  )
}
