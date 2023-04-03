import React, { useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './QuestionConstructorPopup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames } from 'redux/Popups/PopupsSlice';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { PopupBoard } from 'components/PopupBoard/PopupBoard';
import { Input } from 'UI/Input/Input';

export const QuestionConstructorPopup = (props) => {
    const { className } = props;


    const [input, setInput] = useState()
    const { popups } = useSelector(state=>state.popups)
    const dispatch = useDispatch()

    const popupName = PopupNames.QUESTION_CONSTRUCTOR
    console.log(popups.find(popup=> popup.name === popupName ).hidden)
    return (
        <PopupWrapper hidden={popups.find(popup=> popup.name === popupName ).hidden}>
            <PopupBoard className={ClassNames(cls.choseTestCategoryPopup, {}, [className])}>
                <h2 className="popupTitle">
                    Новый вопрос
                </h2>
                <label htmlFor="question" className={cls.label}>
                    Введите вопрос
                </label>
                <Input 
                    name={'question'} 
                    id={'question'}
                    placeholder={"Вопрос без заголовка"} 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    className={cls.input}
                />

               
            </PopupBoard>
        </PopupWrapper>
 );
}