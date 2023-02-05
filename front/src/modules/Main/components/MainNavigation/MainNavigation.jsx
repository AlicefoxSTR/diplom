import React from 'react'
import { CustomLink } from 'UI/CustomLink/CustomLink'
import cls from './MainNavigation.module.css'

export const MainNavigation = () => {
  return (
    <nav className={cls.nav}>
        <CustomLink className={cls.link} theme="button" to='/tests'>Испытания</CustomLink>
        <CustomLink className={cls.link} to='/for-parents'>Для родителей</CustomLink>
        <CustomLink className={cls.link} to='/for-teachers'>Для учителей</CustomLink>
    </nav>
  )
}
