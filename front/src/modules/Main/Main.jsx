import React from 'react'
import { ClassNames } from '../../helpers/ClassNames/ClassNames'
import BorderButton from '../../UI/BorderButton/BorderButton'
import CustomInput from '../../UI/CustomInput/CustomInput'

import c from './Main.module.css'


export const Main = () => {
  return (
    <main className={ClassNames(c.main, {}, [])}>
        <BorderButton>
        Зарегистрироваться / Войти
        </BorderButton>
        <CustomInput type='text' placeholder='input' />
    </main>
  )
}
