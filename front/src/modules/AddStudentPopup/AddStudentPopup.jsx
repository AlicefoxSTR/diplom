import React, { useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './AddStudentPopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { Cross } from 'UI/Cross/Cross';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice';
import { InputTheme } from 'UI/Input/Input';
import { ClassesSlice } from 'redux/Classes/ClassesSlice';
import { FormInputRow } from 'components/FormInputRow/FormInputRow';

export const AddStudentPopup = (props) => {
    const { className } = props;
    const [ input, setInput ] = useState('')

    const { popups } = useSelector(state=>state.popups)
    const dispatch = useDispatch()

    const popupName = PopupNames.ADD_STUDENT

    function saveHandler() {
        dispatch((ClassesSlice.actions.saveStudent(input)))
        dispatch(PopupsSlice.actions.closePopup(popupName))
    }

    return (
        <PopupWrapper hidden={popups.find(popup => popup.name === popupName ).hidden}>
            <div className={ClassNames(cls.addClassPopup, {}, [className])}>
                <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup(popupName))} />
                <h2 className={cls.title}>Введите название класса:</h2>
                <FormInputRow 
                    theme={InputTheme.CLEAR} 
                    label={'Имя'} 
                    value={input} 
                    id={'name'} 
                    onChange={e => setInput(e.target.value)}

                />
                <Button className={cls.button} theme={ButtonTheme.DARK} onClick={()=>saveHandler()} >Сохранить</Button>
            </div>
        </PopupWrapper>
 );
}