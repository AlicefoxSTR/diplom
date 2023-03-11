import React, { useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './SignupPopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { PopupFormRow } from 'components/PopupFormRow/PopupFormRow';
import { Cross } from 'UI/Cross/Cross';
import { Button, ButtonTheme } from 'UI/Button/Button';

export const SignupPopup = (props) => {
    const { className } = props;

    const [hidden, setHidden ] = useState(true)

    return (
        <PopupWrapper hidden={hidden}>
            <div className={ClassNames(cls.signinPopup, {}, [className])}>
                <Cross size={23} style={{top: '36.11px', right: '50.7px'}} onClick={()=>setHidden(!hidden)} />
                <h1 className={cls.title}>
                    Регистрация
                </h1>
                <PopupFormRow label={"Имя"} placeholder={'Иванов Иван'} className={cls.row} />
                <PopupFormRow  label={'Почта'} placeholder={'ivanov@mail.ru'} className={cls.row} />
                <PopupFormRow  label={'Пароль'} placeholder={'ivanov11'} className={cls.row} />
                <PopupFormRow  label={'Подтвердите пароль'} placeholder={'ivanov11'} className={cls.row} />
                <Button className={cls.button} theme={ButtonTheme.DARK} >Зарегистрироваться</Button>
                <p className={cls.text}>
                        Уже есть аккаунт? <span className={cls.link}>
                        Войти
                    </span>
                </p>
            </div>
        </PopupWrapper>
 );
}