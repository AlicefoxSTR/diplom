import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TeacherContent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NotFoundResults } from '../NotFoundResults/NotFoundResults';
import { Button } from 'shared/UI/Button/Button';
import { PopupNames, PopupsSlice } from 'entities/Popups/PopupsSlice';
import { ClassList } from 'widgets/ClassList/ClassList';

export const TeacherContent = (props) => {
    const { className } = props;

    const { classes } = useSelector(state => state.classes)
    const dispatch = useDispatch()

    return (
        <div className={ClassNames(cls.teacherContent, {}, [className])}>
            {
                classes.length > 0
                ?
                <>
                    <h2 className={cls.title}>Мои классы:</h2>
                    <ClassList classes={classes} />
                    <Button className={cls.button} onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.ADD_CLASS))} >Добавить класс</Button>
                    
                </>
                :
                <NotFoundResults title={'Мои классы:'} description={'Вы еще не добавили ни одного класса'} >
                    <Button onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.ADD_CLASS))} >Добавить класс</Button>
                </NotFoundResults>
            }
        </div>
 );
}