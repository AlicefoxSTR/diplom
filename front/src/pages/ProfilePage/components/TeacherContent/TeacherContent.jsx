import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TeacherContent.module.css';
import { ProfileForm } from '../ProfileForm/ProfileForm';
import { Button } from 'shared/UI/Button/Button';
import { AddImageIcon } from 'shared/UI/AddImageIcon/AddImageIcon';

export const TeacherContent = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.teacherContent, {}, [className])}>
             <div className={cls.row}>
                <Button className={cls.button}><AddImageIcon className={cls.icon} /></Button>
                <ProfileForm className={cls.form} rabbitView={false}/>
            </div>
            <div className={cls.row}></div>
        </div>
 );
}