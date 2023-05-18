import React, { useEffect } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ProfilePage.module.css';
import { Main, MainNavigation } from 'widgets/Main';
import { useDispatch, useSelector } from 'react-redux';
import { StudentContent } from '../StudentContent/StudentContent';
import { TeacherContent } from '../TeacherContent/TeacherContent';
import { UserContent } from '../UserContent/UserContent';
import { PopupNames, PopupsSlice } from 'entities/Popups/PopupsSlice';
import { useNavigate } from 'react-router';

export const ProfilePage = (props) => {
    const { className } = props;


    const {isAuthenticate, role} = useSelector(state=>state.user)
    const { activePopup } = useSelector(state=>state.popups)
    const navigate = useNavigate()
  
    const dispatch = useDispatch()
  
    //Проверяем при первом посещении страницы профиля и при попытке закрыть модалку авторизации авторизацию пользователя
    useEffect(()=>{
      if(!isAuthenticate){
        if(Boolean(!activePopup)){
          dispatch(PopupsSlice.actions.showPopup(PopupNames.SIGNIN))
          navigate('/')
        }
      }
    }, [activePopup, isAuthenticate, dispatch])
  

    return (
        <Main>
            <MainNavigation />
            <div className={ClassNames(cls.profilePage, {}, [className])}>
                {
                    role === 'student'
                    ?
                    <StudentContent />
                    :
                    role === 'teacher'
                    ?
                    <TeacherContent />
                    :
                    <UserContent />
                }
            </div>
        </Main>
 );
}