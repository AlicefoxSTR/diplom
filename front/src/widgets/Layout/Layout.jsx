import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../../widgets/Footer'
import { Header } from '../../widgets/Header'

export const Layout = (props) => {
  return (
    <div className='wrapper'>
     <Header />  
     <Outlet />
     <Footer />   
    </div>
  )
}
