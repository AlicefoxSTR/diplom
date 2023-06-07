import React from 'react';
import cls from './TestingFailContent.module.css';
import { SmallButton, SmallButtonTheme } from 'shared/UI/SmallButton/SmallButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { PopupsSlice } from 'entities/Popups/redux/PopupsSlice';

export const TestingFailContent = (props) => {
    const { } = props;

    function BackToTheoryHandler(){
        navigate('/stage')
        dispatch(PopupsSlice.actions.closePopup())
    }


   
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            <h2 className={cls.title}>К сожалению, ты не ответил на все вопросы правильно.</h2>
            <p className={cls.text}>
                Но не расстраивайся, количество попыток не ограниченно!
                Возвращайся  к теории, изучи ее еще раз и попробуй пройти испытание
            </p>
            <SmallButton 
                theme={SmallButtonTheme.DARK} 
                className={cls.button}
                onClick={()=>BackToTheoryHandler()}
            >
                Вернуться к теории
            </SmallButton>
        </>
 );
}