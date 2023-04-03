import React, { useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ClassItem.module.css';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { ReactComponent as Arrow} from 'assets/icons/arrow-top.svg'
import { useDispatch } from 'react-redux';
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice';

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

    return (
        <div className={ClassNames(cls.classItem, {}, [className])}>
            <span 
                className={ClassNames(cls.title, {[cls.active]: active}, [])} 
                onClick={()=>toggleActive()} 
            >{item.name}  <Arrow className={cls.icon} /> </span>
            <div className={ClassNames(cls.body, {[cls.active]: active}, [])}>
                {
                    item.students.map(student => (
                        <div className={cls.row} >
                            {student.fio} Логин: {student.login} Пароль: {student.password} 
                        </div> 
                    ))
                }
                <Button
                    className={cls.button} 
                    theme={ButtonTheme.DARK}
                    onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.ADD_STUDENT))} 
                >Добавить ученика</Button>
            </div>
        </div>
 );
}