import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './AccountTestsPage.module.css';
import { Main, MainNavigation } from 'widgets/Main';
import { StudentContent } from '../StudentContent/StudentContent';
import { useSelector } from 'react-redux';
import { TeacherContent } from '../TeacherContent/TeacherContent';

export const AccountTestsPage = (props) => {
    const { className } = props;

    const {role} = useSelector(state=>state.user)


    return (
        <Main isPrivate={true}>
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