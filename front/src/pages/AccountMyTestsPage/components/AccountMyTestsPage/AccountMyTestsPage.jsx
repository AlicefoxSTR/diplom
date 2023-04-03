import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './AccountMyTestsPage.module.css';
import { Main, MainNavigation } from 'modules/Main';
import { TeacherContent } from '../TeacherContent/TeacherContent';

export const AccountMyTestsPage = (props) => {
    const { className } = props;



    return (
        <Main>
            <MainNavigation />
            <div className={ClassNames(cls.accountTestsPage, {}, [className])}>
                {
                    <TeacherContent />
                }
            </div>
        </Main>
 );
}