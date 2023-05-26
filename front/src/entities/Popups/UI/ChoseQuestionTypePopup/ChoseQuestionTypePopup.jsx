import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ChoseQuestionTypePopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'entities/Popups/redux/PopupsSlice';
import { Button } from 'shared/UI/Button/Button';
import { Cross } from 'shared/UI/Cross/Cross';
import { TestCreationSlice, testCreationApi } from 'entities/TestCreation';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';

export const ChoseQuestionTypePopup = (props) => {
    const { className } = props;

    const dispatch = useDispatch()

        
    const [ getQuestion ] = testCreationApi.useGetQuestionMutation()
    const { tasks } = useSelector(state => state.testCreation)
 

    function addRandomQuestionHandler() {
        // dispatch(TestCreationSlice.actions.addRandomQuestion())
        getQuestion({random: true, tasks_id: [tasks.map(task => (task.id))]}).then(res => {
            if (res.data){
                dispatch(TestCreationSlice.actions.addQuestionToTasks(res.data))
            }
            if(res.error){
            }
            dispatch(PopupsSlice.actions.closePopup())
        })

    }

    function openChoseTestCategoryPopup(){
        dispatch(PopupsSlice.actions.closePopup())
        dispatch(PopupsSlice.actions.showPopup(PopupNames.CHOSE_TEST_CATEGORY))
    }  
    function openQuestionConstructorPopup(){
        dispatch(PopupsSlice.actions.closePopup())
        dispatch(PopupsSlice.actions.showPopup(PopupNames.QUESTION_CONSTRUCTOR))
    }  


    return (
        <PopupBoard className={ClassNames(cls.choseQuestionTypePopup, {}, [className])}>
            <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
            <h2 className={cls.title}>Какой тип вопроса вы хотите добавить?</h2>
            <Button className={cls.button} onClick={()=>addRandomQuestionHandler()} >Добавить случайный вопрос</Button>
            <Button className={cls.button} onClick={()=>openChoseTestCategoryPopup()} >Выбрать вопрос из списка</Button>
            <Button className={cls.button} onClick={()=>openQuestionConstructorPopup()} >Создать свой собственный вопрос</Button>
        </PopupBoard>
 );
}