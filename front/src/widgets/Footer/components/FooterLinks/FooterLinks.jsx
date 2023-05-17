import React from 'react'
import { CustomLink } from '../../../../shared/UI/CustomLink/CustomLink'
import cls from './FooterLinks.module.css'

const FooterLinks = () => {
  return (
    <div className={cls.links}>
        <CustomLink theme={'footer'} className={cls.link} to={'/'}>Главная</CustomLink>
        <CustomLink theme={'footer'} className={cls.link} to={'/progress'}>Достижения</CustomLink>
        <CustomLink theme={'footer'} className={cls.link} to={'/profile'}>Профиль</CustomLink>
        <CustomLink theme={'footer'} className={cls.link} to={'/tests'}>Испытания</CustomLink>
        <CustomLink theme={'footer'} className={cls.link} to={'/for-parents'}>Для родителей</CustomLink>
        <CustomLink theme={'footer'} className={cls.link} to={'/for-teachers'}>Для учителей</CustomLink>
    </div>
  )
}

export default FooterLinks