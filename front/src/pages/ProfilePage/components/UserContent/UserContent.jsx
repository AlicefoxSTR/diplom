import React from 'react'
import { Main } from 'widgets/Main'
import { ProfileForm } from '../ProfileForm/ProfileForm'
import cls from './UserContent.module.css'
import { Button } from 'shared/UI/Button/Button'
import { AddImageIcon } from 'shared/UI/AddImageIcon/AddImageIcon'
import { CustomLink } from 'shared/UI/CustomLink/CustomLink'

export const UserContent = () => {

 
  return (
    <Main>
      <div className={cls.ProfilePage}>
        <div className={cls.row}>
          <Button className={cls.button}><AddImageIcon className={cls.icon} /></Button>
          <ProfileForm className={cls.form} />
          <p className={cls.resetPassword}>
            Забыли пароль? <br />
            <CustomLink className={cls.link} to="reset">Нажмите, чтобы восстановить</CustomLink>
          </p>
        </div>
        <div className={cls.row}></div>
      </div>
    </Main>
  )
}
