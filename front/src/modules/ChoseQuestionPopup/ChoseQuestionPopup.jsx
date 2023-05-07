import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ChoseQuestionPopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { PopupBoard } from 'components/PopupBoard/PopupBoard';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice';
import { Button } from 'UI/Button/Button';
import { TestCreationSlice } from 'redux/TestCreation/TestCreationSlice';

export const ChoseQuestionPopup = (props) => {
    const { className } = props;

    const { popups } = useSelector(state=>state.popups)
    const { tests } = useSelector(state=>state.tests)
    const { activeTestCategory } = useSelector(state=>state.testCreation)
    const dispatch = useDispatch()

    const popupName = PopupNames.CHOSE_QUESTION


    function addQuestionToListHandler(id){
        const test = tests.find(item => item.id === activeTestCategory)
        const task = test.tasks.find(task => task.id === id)
        dispatch(TestCreationSlice.actions.addQuestionToTasks(task))
        dispatch(PopupsSlice.actions.closePopup())
    }


    return (
        <PopupWrapper hidden={popups.find(popup=> popup.name === popupName ).hidden} >
            <PopupBoard className={ClassNames(cls.choseQuestionPopup, {}, [className])}>
                <h2 className={'popupTitle'}>Выберите вопрос</h2>
                <div className={cls.cards}>
                    {
                        tests.find(item => item.id === activeTestCategory)
                        ?
                        tests.find(item => item.id === activeTestCategory).tasks.map(task => (
                            
                            <div className={cls.card} key={`chooseQuestionPopupCard_${task.id}`}>
                                <span className={cls.question}>{task.question}</span>
                                    <Button onClick={()=>addQuestionToListHandler(task.id)}>
                                    Выбрать
                                </Button>
                            </div>
                        ))   
                        :
                        null
                    }
                </div>
            </PopupBoard>
        </PopupWrapper>
        
 );
}