import React from 'react'
import { Main, MainNavigation } from 'modules/Main'
import { ProfileForm } from '../ProfileForm/ProfileForm'
import cls from './ProfilePage.module.css'
import { Button } from 'UI/Button/Button'
import { AddImageIcon } from 'UI/AddImageIcon/AddImageIcon'
import { CustomLink } from 'UI/CustomLink/CustomLink'

export const ProfilePage = () => {
  return (
    <Main>
      <MainNavigation />
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
