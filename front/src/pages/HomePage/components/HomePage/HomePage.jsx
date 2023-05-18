import React from 'react'
import { Main, MainNavigation } from 'widgets/Main'
import { Button } from 'shared/UI/Button/Button'
import cls from './HomePage.module.css'
import { HomeBorder } from '../../UI/HomeBorder/HomeBorder'
import { useDispatch } from 'react-redux'
import { PopupNames, PopupsSlice } from 'entities/Popups/PopupsSlice'


export const HomePage = () => {


  const dispatch = useDispatch()



  return (
    <Main className={cls.homeMain}>
      <MainNavigation /> 
      <div className={cls.block}>
        <HomeBorder />
        <Button className={cls.btn} onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.CHOSE_ROLE))}>
          Зарегистрироваться / Войти
        </Button> 
      </div>
    </Main>
  )
}
