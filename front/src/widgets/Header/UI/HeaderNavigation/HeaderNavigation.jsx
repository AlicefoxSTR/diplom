import React from 'react'
import { CustomLink } from '../../../../shared/UI/CustomLink/CustomLink'
import cls from './HeaderNavigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { SmallButton, SmallButtonTheme } from 'shared/UI/SmallButton/SmallButton'
import { UserSlice } from 'entities/User'
import { useNavigate } from 'react-router'
import { ClassNames } from 'shared/lib/ClassNames/ClassNames'
import { HeaderSocial } from '../HeaderSocial/HeaderSocial'


export const HeaderNavigation = (props) => {
  const { className, ...otherProps } = props
  const { isAuthenticate, role } = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LogoutHandler = () => {
    dispatch(UserSlice.actions.logout())
    navigate('/')
  }
  return (
    <nav className={ClassNames(cls.nav, {}, [className])} {...otherProps}>
        <HeaderSocial className={'_mob'} />
        <CustomLink theme="header" className={[cls.link]} to='/'>Главная</CustomLink>
        {
          role==='user' && <CustomLink theme="header" className={[cls.link]} to='/progress'>Достижения</CustomLink>
        }
        
        <CustomLink theme="header" className={[cls.link]} to='/profile'>Профиль</CustomLink>
        {
          isAuthenticate && <SmallButton 
            theme={SmallButtonTheme.LIGHT} 
            onClick={LogoutHandler} 
            className={cls.link}
          >
            Выход
          </SmallButton> 
        }
    </nav>
  )
}
