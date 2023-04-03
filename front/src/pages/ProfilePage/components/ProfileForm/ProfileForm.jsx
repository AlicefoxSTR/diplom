import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ProfileForm.module.css';
import { FormInputRow } from 'components/FormInputRow/FormInputRow';
import { Button } from 'UI/Button/Button';

export const ProfileForm = (props) => {
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
            <FormInputRow 
                theme={'border'} 
                id={'email'} 
                name={'email'} 
                placeholder='email@mail.ru' 
                label='Почта:' 
                className={cls.row} 
            />
            <Button className={cls.button} >Изменить данные</Button>
        </div>
 );
}