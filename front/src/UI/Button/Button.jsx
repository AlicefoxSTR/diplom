import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './Button.module.css';

export const ButtonTheme = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const Button = (props) => {
  const { 
    className,
    children,
    theme=ButtonTheme.LIGHT,
    ...otherProps
  } = props;

  return (
    <button 
      className={ClassNames(cls.btn, {}, [className, cls[theme]])} 
      {...otherProps}
    >
      {children}
    </button>
 );
}