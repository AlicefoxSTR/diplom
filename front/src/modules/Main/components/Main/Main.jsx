import React from 'react'
import { ClassNames } from '../../../../helpers/ClassNames/ClassNames'

import c from './Main.module.css'


export const Main = ({children, ...props}) => {
  return (
    <main className={ClassNames(c.main, {}, ['container', ...props.classes])}>
        {children}
    </main>
  )
}
