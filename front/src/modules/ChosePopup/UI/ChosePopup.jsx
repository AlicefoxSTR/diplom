import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ChosePopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { Cross } from 'UI/Cross/Cross';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice';

export const ChosePopup = (props) => {


    const { 
        className,
     } = props;

    const { popups } = useSelector(state=>state.popups)
    const dispatch = useDispatch()

    const popupName = PopupNames.CHOSE

    return (
        <PopupWrapper hidden={popups.find(popup => popup.name === popupName ).hidden} >
            <div className={ClassNames(cls.chosePopup, {}, [className])}>
                <Cross style={{top: '25px', right: '25px'}} size={25} onClick={()=>dispatch(PopupsSlice.actions.closePopup(popupName))} />
                <div className={ClassNames(cls.block, {}, [className, cls.firstBlock])}>
                    <p className={cls.role}>
                        Я - ученик
                    </p>
                    <ul className={cls.list}>
                        <li className={cls.item}>
                            Проходи испытания
                        </li>
                        <li className={cls.item}>
                            Зарабатывай награды
                        </li>
                        <li className={cls.item}>
                            Получай именную грамоту
                        </li>
                    </ul>
                    <Button theme={ButtonTheme.DARK} className={cls.button} onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.SIGNIN))} >Войти как ученик</Button>
                </div>
                <div className={ClassNames(cls.block, {}, [className])}>
                    <p className={cls.role}>
                        Я - учитель
                    </p>
                    <ul className={cls.list}>
                        <li className={cls.item}>
                            Скачивай материалы
                        </li>
                        <li className={cls.item}>
                            Создавай викторины
                        </li>
                        <li className={cls.item}>
                            Отслеживай успеваемость
                        </li>
                    </ul>
                    <Button theme={ButtonTheme.DARK} className={cls.button}  onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.SIGNIN))} >Войти как учитель</Button>
                </div>
            </div>
        </PopupWrapper>    
    );
}