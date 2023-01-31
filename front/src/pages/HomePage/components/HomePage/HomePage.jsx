import React from 'react'
import { Main } from '../../../../modules/Main'
import BorderButton from '../../../../UI/BorderButton/BorderButton'
import CustomInput from '../../../../UI/CustomInput/CustomInput'

export const HomePage = () => {
  return (
    <Main>
      <BorderButton>
        Зарегистрироваться / Войти
      </BorderButton>
      <CustomInput type='text' placeholder='input' />
    </Main>
  )
}
