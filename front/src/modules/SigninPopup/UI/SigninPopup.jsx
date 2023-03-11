import React, { useEffect, useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './SigninPopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { PopupFormRow } from 'components/PopupFormRow/PopupFormRow';
import { Cross } from 'UI/Cross/Cross';
import { Button, ButtonTheme } from 'UI/Button/Button';

export const SigninPopup = (props) => {
    const { className } = props;

    const [hidden, setHidden ] = useState(true)


    return (
        <PopupWrapper hidden={hidden}>
            <div className={ClassNames(cls.signinPopup, {}, [className]) }>
                <Cross size={23} style={{top: '36.11px', right: '50.7px'}} onClick={()=>setHidden(!hidden)} />
                <h1 className={cls.title}>
                    Вход
                </h1>
                <PopupFormRow label={"Почта"} placeholder={'ivanov@mail.ru'} className={cls.row} />
                <PopupFormRow  label={'Пароль'} placeholder={'ivanov11'} className={cls.row} />
                <Button className={cls.button} theme={ButtonTheme.DARK} >Войти</Button>
                <p className={cls.text}>
                    Еще не зарегистрированы? 
                    <span className={cls.link}>
                        Регистрация
                    </span>
                </p>
            </div>
        </PopupWrapper>
 );
}