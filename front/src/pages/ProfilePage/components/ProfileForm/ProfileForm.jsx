import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ProfileForm.module.css';
import { FormInputRow } from 'components/FormInputRow/FormInputRow';

export const ProfileForm = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.profileForm, {}, [className])}>
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
            <FormInputRow 
                theme={'border'} 
                id={'email'} 
                name={'email'} 
                placeholder='email@mail.ru' 
                label='Почта:' 
                className={cls.row} 
            />
        </div>
 );
}