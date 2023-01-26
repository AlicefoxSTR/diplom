import React from 'react'
import c from './TextH1.module.css'


export const TextH1 = ({children}) => {
  return (
    <h1 className={c.TextH1}>{children}</h1>
  )
}
