import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './StudentForm.module.css';
import { FormInputRow } from 'widgets/FormInputRow/FormInputRow';

export const StudentForm = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.ProfileForm, {}, [className])}>
            <FormInputRow 
                theme={'border'} 
                id={'firstname'} 
                name={'firstname'} 
                placeholder='Иван' 
                label='Имя:' 
                className={cls.row} 
            />
            <FormInputRow 
                theme={'border'} 
                id={'secondname'} 
                name={'secondname'} 
                placeholder='Иванов' 
                label='Фамилия:' 
                className={cls.row} 
            />
        </div>
 );
}