import React, { useEffect, useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './AddStudentPopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { Cross } from 'UI/Cross/Cross';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { PopupsSlice } from 'redux/Popups/PopupsSlice';
import { Input } from 'UI/Input/Input';
import { editStudentAction, saveStudentAction } from 'redux/Classes/ClassesActions';
import { ClassesSlice } from 'redux/Classes/ClassesSlice';

export const AddStudentPopup = (props) => {
    const { className } = props;
    const [ input, setInput ] = useState('')

    const { editionalClass, editionalStudent, classes } = useSelector(state=>state.classes)
    const dispatch = useDispatch()

    function saveHandler() {
        if(editionalClass.length > 0 && editionalStudent.length > 0){
            dispatch(editStudentAction({fio: input, class: editionalClass, student: editionalStudent}))
            dispatch(PopupsSlice.actions.closePopup())
            setInput('')
        }else{
            dispatch(saveStudentAction(input))
            dispatch(PopupsSlice.actions.closePopup())
            setInput('')
        }
    }

    function closePopupHandler(){
        dispatch(ClassesSlice.actions.removeEditionalClass())
        dispatch(ClassesSlice.actions.removeEditionalSudent())
        dispatch(PopupsSlice.actions.closePopup())
        setInput('')
    }

    useEffect(()=>{
        if(editionalStudent.length !== 0){
            setInput(
                classes
                    .find(item => editionalClass === item.id).students
                    .find(student => editionalStudent === student.id).fio
            )
        }
    }, [editionalStudent])

    return (
        <PopupWrapper closeHandler={closePopupHandler}>
            <div className={ClassNames(cls.addClassPopup, {}, [className])}>
                <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>closePopupHandler()} />
                <h2 className={cls.title}>Введите данные ученика:</h2>
                <Input 
                    className={cls.input} 
                    placeholder={'Иванов Иван'} 
                    value={input} 
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }} 
                />
                <Button className={cls.button} theme={ButtonTheme.DARK} onClick={()=>saveHandler()} >Сохранить</Button>
            </div>
        </PopupWrapper>
 );
}