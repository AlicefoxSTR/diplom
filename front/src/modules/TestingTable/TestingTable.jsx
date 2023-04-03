import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './TestingTable.module.css';
import { CheckboxAnswers } from '../../pages/TestingPage/components/CheckboxAnswers/CheckboxAnswers';
import { Button, ButtonTheme } from 'UI/Button/Button';

export const TestingTable = (props) => {
    const { 
        className,
        task,
        index
    } = props;

    return (
        <div className={ClassNames(cls.testingTable, {}, [className])}>
            <h2 className={cls.title}>{index} Вопрос</h2>
            <h2 className={cls.title}>{task.question}</h2>
            <div className={cls.answers}>
                {
                    task.type === 'checkbox'
                    ?
                    <CheckboxAnswers answers={task.answers}/>
                    :
                    null
                }
            </div>
            <Button theme={ButtonTheme.DARK} className={cls.button}>Ответить</Button>
        </div>
 );
}