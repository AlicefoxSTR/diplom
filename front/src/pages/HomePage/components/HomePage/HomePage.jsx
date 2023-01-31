import React from 'react'
import { Footer } from '../../../../modules/Footer/components/Footer/Footer'
import { Header } from '../../../../modules/Header/components/Header/Header'
import { Main } from '../../../../modules/Main/Main'

export const HomePage = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <Main />
        <Footer />
    </div>
  )
}
