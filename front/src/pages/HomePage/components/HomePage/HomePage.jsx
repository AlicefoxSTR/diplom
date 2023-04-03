import React from 'react'
import { Main, MainNavigation } from 'modules/Main'
import { Button } from 'UI/Button/Button'
import cls from './HomePage.module.css'
import { HomeBorder } from '../../UI/HomeBorder/HomeBorder'
import { useDispatch } from 'react-redux'
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice'


export const HomePage = () => {


  const dispatch = useDispatch()



  return (
    <Main className={cls.homeMain}>
      <MainNavigation /> 
      <div className={cls.block}>
        <HomeBorder />
        <Button className={cls.btn} onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.CHOSE))}>
          Зарегистрироваться / Войти
        </Button> 
      </div>
    </Main>
  )
}
