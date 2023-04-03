import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './StudentProfilePage.module.css';
import { Main } from 'modules/Main';

export const StudentProfilePage = (props) => {
    const { className } = props;

    return (
        <Main>
            <div className={ClassNames(cls.studentProfilePage, {}, [className])}>
                
            </div>
        </Main>
 );
}