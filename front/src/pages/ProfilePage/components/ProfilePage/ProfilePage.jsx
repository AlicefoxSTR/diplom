import React from 'react'
import { Main, MainNavigation } from '../../../../modules/Main'
import { ProfileForm } from '../ProfileForm/ProfileForm'

export const ProfilePage = () => {
  return (
    <Main>
      <MainNavigation />
      <ProfileForm />
    </Main>
  )
}
