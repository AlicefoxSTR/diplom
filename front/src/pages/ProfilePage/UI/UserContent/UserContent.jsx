import React from 'react'
import { Main } from 'widgets/Main'
import { ProfileForm } from '../ProfileForm/ProfileForm'
import cls from './UserContent.module.css'
import { Button } from 'shared/UI/Button/Button'
import { AddImageIcon } from 'shared/UI/AddImageIcon/AddImageIcon'

export const UserContent = () => {

 
  return (
    <Main>
      <div className={cls.ProfilePage}>
        <div className={cls.row}>
          <Button className={cls.button}>
            <AddImageIcon className={cls.icon} />
          </Button>
          <ProfileForm className={cls.form} />
        </div>
      </div>
    </Main>
  )
}
