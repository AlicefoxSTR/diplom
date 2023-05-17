import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './StudentContent.module.css';
import { Button } from 'shared/UI/Button/Button';
import { AddImageIcon } from 'shared/UI/AddImageIcon/AddImageIcon'
import { StudentForm } from '../StudentForm/StudentForm';


export const StudentContent = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.studentContent, {}, [className])}>
            <div className={cls.ProfilePage}>
                <div className={cls.row}>
                    <Button className={cls.button}><AddImageIcon className={cls.icon} /></Button>
                    <StudentForm className={cls.form} />
                </div>
                <div className={cls.row}></div>
            </div>
        </div>
 );
}