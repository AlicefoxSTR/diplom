import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './CustomLink.module.css';
import { Link, useLocation } from 'react-router-dom';

export const CustomLink = (props) => {

  const LinkThemes  = {
    SIMPLE: 'simple',
    BUTTON: 'button',
    HEADER: 'header',
    FOOTER: 'footer',
  }

  const location = useLocation()

  const { 
    className,
    to,
    theme=LinkThemes.SIMPLE,
    children,
    ...otherProps
  
  } = props;

  

  return (
    <Link 
    to={to} 
    className={
      ClassNames(
        cls.CustomLink, 
        {[cls.active]: location.pathname===to}, 
        [className, cls[theme]]
      )
    }
    {...otherProps}
    >
        {children}
    </Link>
  )

}