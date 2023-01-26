import React from 'react'
import { Footer } from '../../../../modules/Footer/Footer'
import { Header } from '../../../../modules/Header'
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
