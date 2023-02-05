import { ClassNames } from 'helpers/ClassNames/ClassNames'
import React from 'react'
import cls from './Input.module.css'


export const Input = (props) => {

  const InputTheme = {
    BORDER: 'border',
    CLEAR: 'clear'
  }

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
