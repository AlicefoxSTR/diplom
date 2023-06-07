import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './UserAuthContent.module.css';
import { SmallButton, SmallButtonTheme } from 'shared/UI/SmallButton/SmallButton';
import { useDispatch, useSelector } from 'react-redux';
import { PopupsSlice } from 'entities/Popups/redux/PopupsSlice';
import { useNavigate } from 'react-router';
import { ReactComponent as Medal } from 'app/assets/icons/active-medal-icon.svg'



export const UserAuthContent = (props) => {
    const { className } = props;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { result } = useSelector(state => state.testing)



    function BackToTestsHandler(){
        navigate('/tests')
        dispatch(PopupsSlice.actions.closePopup())
    }

    function ShowProgressHandler(){
        navigate('/progress')
        dispatch(PopupsSlice.actions.closePopup())
    }


    return (
            <>
                <h2 className={cls.title}>Поздравляем!</h2>
                <p className={cls.text}>
                    Ты прошёл испытание и заработал медаль.
                    Собери все медали, чтобы получить именную грамоту! 
                </p>
                <Medal className={cls.icon} />
                <SmallButton 
                    theme={SmallButtonTheme.DARK} 
                    className={cls.button}
                    onClick={()=>BackToTestsHandler()}
                >
                    Вернуться к испытаниям
                </SmallButton>
                <SmallButton 
                    theme={SmallButtonTheme.DARK} 
                    className={cls.button}
                    onClick={()=>ShowProgressHandler()}
                >
                    Мои награды
                </SmallButton>
            
 
            </>
    )}