import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './SignupPopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { PopupFormRow } from 'widgets/PopupFormRow/PopupFormRow';
import { Cross } from 'shared/UI/Cross/Cross';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'entities/Popups/PopupsSlice';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';

export const SignupPopup = (props) => {
    const { className } = props;

    const { popups } = useSelector(state=>state.popups)
    const dispatch = useDispatch()

    const popupName = PopupNames.SIGNUP

    return (
        <PopupWrapper>
            <PopupBoard className={ClassNames(cls.signinPopup, {}, [className])}>
                <Cross size={23} style={{top: '36.11px', right: '50.7px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
                <h1 className={cls.title}>
                    Регистрация
                </h1>
                <PopupFormRow label={"Имя"} placeholder={'Иванов Иван'} className={cls.row} />
                <PopupFormRow  label={'Почта'} placeholder={'ivanov@mail.ru'} className={cls.row} />
                <PopupFormRow  label={'Пароль'} placeholder={'ivanov11'} className={cls.row} />
                <PopupFormRow  label={'Подтвердите пароль'} placeholder={'ivanov11'} className={cls.row} />
                <Button className={cls.button} theme={ButtonTheme.DARK} >Зарегистрироваться</Button>
                <p className={cls.text}>
                        Уже есть аккаунт? <span className={cls.link} onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.SIGNIN))}>
                        Войти
                    </span>
                </p>
            </PopupBoard>
        </PopupWrapper>
 );
}