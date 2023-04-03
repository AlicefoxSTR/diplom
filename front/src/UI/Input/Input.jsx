import { ClassNames } from 'helpers/ClassNames/ClassNames'
import React from 'react'
import cls from './Input.module.css'


export const InputTheme = {
  BORDER: 'border',
  CLEAR: 'clear'
}

export const Input = (props) => {

  
  const {
    className,
    theme=InputTheme.CLEAR,
    ...otherProps
  } = props

  return (
    <input
      className={ClassNames(cls.Input, {}, [className, cls[theme]])} 
      {...otherProps}
    />
  )
}
