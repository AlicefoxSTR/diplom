import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TestingTable.module.css';
import { CheckboxAnswers } from '../../pages/TestingPage/UI/CheckboxAnswers/CheckboxAnswers';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { questionTypes } from 'shared/models/TestModels';
import { TestingSlice, TestingTypes } from 'entities/Testing/TestingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SmallButton, SmallButtonTheme } from 'shared/UI/SmallButton/SmallButton';

export const TestingTable = (props) => {
    const { 
        className
    } = props;

    const { test, activeTask, taskIndex, testingType } = useSelector(state => state.testing)

    const dispatch = useDispatch()

    function ClickNextHandler(){
        dispatch(TestingSlice.actions.nextTask())
    }
    
    function ClickPrevHandler(){
        dispatch(TestingSlice.actions.prevTask())
    }
    
    console.log(taskIndex < test.tasks.length )


    return (
        <div className={ClassNames(cls.testingTable, {}, [className])}>
            <h2 className={cls.title}>{taskIndex+1} Вопрос</h2>
            <h2 className={cls.title}>{activeTask.question}</h2>
            <div className={cls.answers}>
                {
                    activeTask.type === questionTypes.CHECKBOX
                    ?
                    <CheckboxAnswers answers={activeTask.answers}/>
                    :
                    activeTask.type === questionTypes.RADIO
                    ?
                    <CheckboxAnswers answers={activeTask.answers}/>
                    :
                    <CheckboxAnswers answers={activeTask.answers}/>

                    
                }
            </div>
            {
                testingType === TestingTypes.VIEW
                ?
                    <div>
                        <SmallButton disabled={taskIndex === 0} theme={SmallButtonTheme.DARK} className={cls.button} onClick={ClickPrevHandler}>Назад</SmallButton>

                        <SmallButton disabled={taskIndex === test.tasks.length - 1} theme={ButtonTheme.DARK} className={cls.button} onClick={ClickNextHandler}>Дальше</SmallButton>
                    </div>
                :
                    <Button theme={ButtonTheme.DARK} className={cls.button}>Ответить</Button>
            }
            
        </div>
 );
}