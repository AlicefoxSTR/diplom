import React from 'react'
import { CustomLink } from '../../../../shared/UI/CustomLink/CustomLink'
import cls from './FooterLinks.module.css'
import { useSelector } from 'react-redux'
import { ClassNames } from 'shared/lib/ClassNames/ClassNames'

const FooterLinks = (props) => {

  const { className } = props


  const { role } = useSelector(state=>state.user)


  return (
    <div className={ClassNames(cls.links, {}, [className])}>
        <CustomLink theme={'footer'} className={cls.link} to={'/'}>Главная</CustomLink>
        {
          role==='user' && <CustomLink theme={'footer'} className={cls.link} to='/progress'>Достижения</CustomLink>
        }
        <CustomLink theme={'footer'} className={cls.link} to={'/profile'}>Профиль</CustomLink>
        <CustomLink theme={'footer'} className={cls.link} to={'/tests'}>Испытания</CustomLink>
        <CustomLink theme={'footer'} className={cls.link} to={'/for-parents'}>Для родителей</CustomLink>
    </div>
  )
}

export default FooterLinks