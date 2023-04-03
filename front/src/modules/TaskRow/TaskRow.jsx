import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './TaskRow.module.css';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { TestCreationSlice } from 'redux/TestCreation/TestCreationSlice';
import { useDispatch } from 'react-redux';

export const TaskRow = (props) => {
    const { 
        className,
        task,
        index
    } = props;

    const dispatch = useDispatch()

    function deleteTaskHandler(){
        dispatch(TestCreationSlice.actions.deleteTaskFromList(task.id))
    }

    return (
        <div className={ClassNames(cls.taskRow, {}, [className])}>
            <span className={cls.number}>{index + 1} Вопрос</span>
            <span className={cls.question}>{task.question}</span>
            {task.isPersonal && <Button theme={ButtonTheme.DARK}>Редактировать</Button>}
            <Button theme={ButtonTheme.CLEAR}>Просмотреть</Button>
            <Button theme={ButtonTheme.CLEAR} onClick={()=>deleteTaskHandler()}>Удалить</Button>
        </div>
 );
}