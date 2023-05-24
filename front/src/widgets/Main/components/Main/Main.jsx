import React, { useEffect } from 'react'
import { ClassNames } from '../../../../shared/lib/ClassNames/ClassNames'

import c from './Main.module.css'
import { PopupNames, PopupsSlice } from 'entities/Popups/PopupsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


export const Main = (props) => {

  const {children, className, isPrivate=false, ...otherProps} = props

  const {isAuthenticate } = useSelector(state=>state.user)
    const { activePopup } = useSelector(state=>state.popups)
    const navigate = useNavigate()
  
    const dispatch = useDispatch()
  
    //Проверяем при первом посещении страницы профиля и при попытке закрыть модалку авторизации авторизацию пользователя
    useEffect(()=>{
      if(isPrivate){
        if(!isAuthenticate){
          if(Boolean(!activePopup)){
            dispatch(PopupsSlice.actions.showPopup(PopupNames.CHOSE_ROLE))
            navigate('/')
          }
        }
      }
    }, [activePopup, isAuthenticate, dispatch])

  // useEffect(()=>{
  //   console.log(isPrivate)
  // }, [])

  return (
    <main className={ClassNames(c.main, {}, ['container', className])} {...otherProps}>
        {children}
    </main>
  )
}
