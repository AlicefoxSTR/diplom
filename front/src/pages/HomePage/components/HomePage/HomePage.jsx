import React from 'react'
import { Main, MainNavigation } from 'modules/Main'
import { Button } from 'UI/Button/Button'
import cls from './HomePage.module.css'
import { HomeBorder } from '../../UI/HomeBorder/HomeBorder'


export const HomePage = () => {
  return (
    <Main classes={[cls.homeMain]}>
      <MainNavigation /> 
      <div className={cls.block}>
        <HomeBorder />
        <Button className={cls.btn}>
          Зарегистрироваться / Войти
        </Button> 
      </div>
    </Main>
  )
}
