import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './AccountMyTestsPage.module.css';
import { Main, MainNavigation } from 'widgets/Main';
import { TeacherContent } from '../TeacherContent/TeacherContent';

export const AccountMyTestsPage = (props) => {
    const { className } = props;



    return (
        <Main isPrivate={true}>
            <MainNavigation />
            <div className={ClassNames(cls.accountTestsPage, {}, [className])}>
                {
                    <TeacherContent />
                }
            </div>
        </Main>
 );
}