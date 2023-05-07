import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './SigninPopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { PopupFormRow } from 'components/PopupFormRow/PopupFormRow';
import { Cross } from 'UI/Cross/Cross';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice';
import { PopupBoard } from 'components/PopupBoard/PopupBoard';

export const SigninPopup = (props) => {
    const { className } = props;

    const { popups } = useSelector(state=>state.popups)
    const dispatch = useDispatch()

    const popupName = PopupNames.SIGNIN

    return (
        <PopupWrapper>
            <PopupBoard className={ClassNames(cls.signinPopup, {}, [className]) }>
                <Cross size={23} style={{top: '36.11px', right: '50.7px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
                <h1 className={cls.title}>
                    Вход
                </h1>
                <PopupFormRow label={"Почта"} placeholder={'ivanov@mail.ru'} className={cls.row} />
                <PopupFormRow  label={'Пароль'} placeholder={'ivanov11'} className={cls.row} />
                <Button className={cls.button} theme={ButtonTheme.DARK} >Войти</Button>
                <p className={cls.text}>
                    Еще не зарегистрированы? 
                    <span className={cls.link} onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.SIGNUP))}>
                        Регистрация
                    </span>
                </p>
            </PopupBoard>
        </PopupWrapper>
 );
}