import React, { useState } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './AddClassPopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { Cross } from 'shared/UI/Cross/Cross';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'entities/Popups/PopupsSlice';
import { Input, InputTheme } from 'shared/UI/Input/Input';
import { ClassesSlice } from 'entities/Classes/ClassesSlice';

export const AddClassPopup = (props) => {
    const { className } = props;
    const [ input, setInput ] = useState('')

    const { popups } = useSelector(state=>state.popups)
    const dispatch = useDispatch()

    const popupName = PopupNames.ADD_CLASS

    function saveHandler() {
        dispatch((ClassesSlice.actions.saveClass(input)))
        dispatch(PopupsSlice.actions.closePopup())
    }

    return (
        <PopupWrapper>
            <div className={ClassNames(cls.addClassPopup, {}, [className])}>
                <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
                <h2 className={cls.title}>Введите название класса:</h2>
                <Input 
                    theme={InputTheme.CLEAR} 
                    placeholder={'5a'} 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    className={cls.input} />
                <Button className={cls.button} theme={ButtonTheme.DARK} onClick={()=>saveHandler()} >Сохранить</Button>
            </div>
        </PopupWrapper>
 );
}