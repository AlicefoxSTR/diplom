import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ChoseTestCategoryPopup.module.css';
import { PopupBoard } from 'components/PopupBoard/PopupBoard';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames } from 'redux/Popups/PopupsSlice';
import { Button, ButtonTheme } from 'UI/Button/Button';

export const ChoseTestCategoryPopup = (props) => {

    const { className } = props;

    const { popups } = useSelector(state=>state.popups)
    const { cards } = useSelector(state=>state.tests)
    const dispatch = useDispatch()

    const popupName = PopupNames.CHOSE_QUESTION_TYPE

    return (
        <PopupWrapper hidden={popups.find(popup=> popup.name === popupName ).hidden}>
            <PopupBoard className={ClassNames(cls.choseTestCategoryPopup, {}, [className])}>
                <h2 className="popupTitle">
                    Выберите категорию
                </h2>
                <div className={cls.cards}>
                    {
                        cards.map(test => (
                            <div className={cls.card}>
                                <span className={cls.cardText}>{ test.title }</span>
                                <Button className={cls.button} theme={ButtonTheme.LIGHT} >Выбрать</Button>
                            </div>
                        ))
                    }
                </div>
            </PopupBoard>
        </PopupWrapper>
        
 );
}