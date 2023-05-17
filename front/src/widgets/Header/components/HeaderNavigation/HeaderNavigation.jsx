import React from 'react'
import { CustomLink } from '../../../../shared/UI/CustomLink/CustomLink'
import cls from './HeaderNavigation.module.css'


export const HeaderNavigation = () => {
  return (
    <nav className={cls.nav}>
        <CustomLink theme="header" className={[cls.link]} to='/'>Главная</CustomLink>
        <CustomLink theme="header" className={[cls.link]} to='/progress'>Достижения</CustomLink>
        <CustomLink theme="header" className={[cls.link]} to='/profile'>Профиль</CustomLink>
    </nav>
  )
}
