import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './AccountTestsPage.module.css';
import { Main, MainNavigation } from 'modules/Main';
import { StudentContent } from '../StudentContent/StudentContent';
import { useSelector } from 'react-redux';
import { TeacherContent } from '../TeacherContent/TeacherContent';

export const AccountTestsPage = (props) => {
    const { className } = props;

    const {role} = useSelector(state=>state.user)


    return (
        <Main>
            <MainNavigation />
            <div className={ClassNames(cls.accountTestsPage, {}, [className])}>
                {
                    role === 'student'
                    ?
                    <StudentContent />
                    :
                    <TeacherContent />
      
                }
            </div>
        </Main>
 );
}