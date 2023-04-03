import React, { useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ClassItem.module.css';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { ReactComponent as Arrow} from 'assets/icons/arrow-top.svg'
import { useDispatch } from 'react-redux';
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice';
import { ClassesSlice } from 'redux/Classes/ClassesSlice';
import {ReactComponent as Edit} from 'assets/icons/edit-icon.svg'
import {ReactComponent as Cross} from 'assets/icons/cross-icon.svg'

export const ClassItem = (props) => {
    const { 
        className,
        item
    } = props;


    const [active, setActive ] = useState()

    const dispatch = useDispatch()


    function toggleActive(){
        setActive(prev => !prev)
    }

    function openPopuptHandler(class_id){
        dispatch(ClassesSlice.actions.setEditionalClass(class_id))
        dispatch(PopupsSlice.actions.showPopup(PopupNames.ADD_STUDENT))
    }

    function deleteHandler(item){
        dispatch(ClassesSlice.actions.removeStudent(item))
    }

    function editHandler(item){
        dispatch(ClassesSlice.actions.setEditionalClass(item.class))
        dispatch(ClassesSlice.actions.setEditionalStudent(item.student))
        dispatch(PopupsSlice.actions.showPopup(PopupNames.ADD_STUDENT))
    }

    return (
        <div className={ClassNames(cls.classItem, {}, [className])}>
            <span 
                className={ClassNames(cls.title, {[cls.active]: active}, [])} 
                onClick={()=>toggleActive()} 
            >{item.name}  <Arrow className={ClassNames(cls.icon, {[cls.active]: active}, [])} /> </span>
            <div className={ClassNames(cls.body, {[cls.active]: active}, [])}>
                {
                    item.students.map(student => (
                        <div className={cls.row} key={`classItemStuddent_${student.id}`} >
                            <span className={cls.fio}>{student.fio}</span> 
                            <span className={cls.login}>Логин: {student.login}</span> 
                            <span className={cls.password}>Пароль: {student.password}</span> 
                            <div className={cls.controlls}>
                                <Edit className={cls.icon} onClick={()=>editHandler({
                                    class: item.id, 
                                    student: student.id
                                })} />
                                <Cross className={cls.icon} onClick={()=>deleteHandler({
                                    class: item.id, 
                                    student: student.id
                                })} />
                            </div>
                        </div> 
                    ))
                }
                <Button
                    className={cls.button} 
                    theme={ButtonTheme.DARK}
                    onClick={()=>openPopuptHandler(item.id)} 
                >Добавить ученика</Button>
            </div>
        </div>
 );
}