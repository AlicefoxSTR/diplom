import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TeacherContent.module.css';

export const TeacherContent = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.teacherContent, {}, [className])}>
            
        </div>
 );
}