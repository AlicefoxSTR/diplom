import React from 'react';
import cls from './MessagePopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';
import { PopupsSlice } from 'entities/Popups/redux/PopupsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Cross } from 'shared/UI/Cross/Cross';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

export const MessagePopup = (props) => {
    const { className } = props;
    const { message } = useSelector(state => state.popups)

    const dispatch = useDispatch()


    return (
        <PopupBoard className={ClassNames(cls.messagePopup, {}, [className])}>
            <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
            
            <h2 className={cls.text}>{message}</h2>

        </PopupBoard>
 );
}