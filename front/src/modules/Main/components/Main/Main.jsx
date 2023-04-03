import React from 'react'
import { ClassNames } from '../../../../helpers/ClassNames/ClassNames'

import c from './Main.module.css'


export const Main = (props) => {

  const {children, className, ...otherProps} = props

  return (
    <main className={ClassNames(c.main, {}, ['container', className])} {...otherProps}>
        {children}
    </main>
  )
}
