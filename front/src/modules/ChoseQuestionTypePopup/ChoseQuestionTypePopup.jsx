import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ChoseQuestionTypePopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice';
import { Button } from 'UI/Button/Button';
import { Cross } from 'UI/Cross/Cross';
import { TestCreationSlice } from 'redux/TestCreation/TestCreationSlice';
import { PopupBoard } from 'components/PopupBoard/PopupBoard';

export const ChoseQuestionTypePopup = (props) => {
    const { className } = props;

    const { popups } = useSelector(state=>state.popups)
    const dispatch = useDispatch()

    const popupName = PopupNames.CHOSE_QUESTION_TYPE

    function addRandomQuestionHandler() {
        dispatch(TestCreationSlice.actions.addRandomQuestion())
        dispatch(PopupsSlice.actions.closePopup(popupName))
    }

    function openChoseTestCategoryPopup(){
        dispatch(PopupsSlice.actions.showPopup(PopupNames.CHOSE_TEST_CATEGORY))
        dispatch(PopupsSlice.actions.closePopup(popupName))
    }  


    return (
        <PopupWrapper hidden={popups.find(popup => popup.name === popupName ).hidden}>
            <PopupBoard className={ClassNames(cls.choseQuestionTypePopup, {}, [className])}>
                <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup(popupName))} />
                <h2 className={cls.title}>Какой тип вопроса вы хотите добавить?</h2>
                <Button className={cls.button} onClick={()=>addRandomQuestionHandler()} >Добавить случайный вопрос</Button>
                <Button className={cls.button} onClick={()=>openChoseTestCategoryPopup()} >Выбрать вопрос из списка</Button>
                <Button className={cls.button} onClick={()=>addRandomQuestionHandler()} >Создать свой собственный вопрос</Button>
            </PopupBoard>
        </PopupWrapper>
 );
}