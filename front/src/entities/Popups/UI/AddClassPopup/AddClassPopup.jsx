import React, { useState } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './AddClassPopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { Cross } from 'shared/UI/Cross/Cross';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { PopupsSlice } from 'entities/Popups/redux/PopupsSlice';
import { Input, InputTheme } from 'shared/UI/Input/Input';
import { ClassesSlice, classesApi } from 'entities/Classes';
import { Controller, useForm } from 'react-hook-form';
import { FormInputRow } from 'widgets/FormInputRow/FormInputRow';
import { PopupFormRow } from 'widgets/PopupFormRow/PopupFormRow';

export const AddClassPopup = (props) => {
    const { className } = props;

    const dispatch = useDispatch()
    const [ saveClassRoom ] = classesApi.useSaveClassRoomMutation()

    const {
        control, 
        handleSubmit, 
        formState: {errors}, 
        reset
    } = useForm({mode: 'onBlur'})



    function saveHandler(data) {
        saveClassRoom(data)
        dispatch(PopupsSlice.actions.closePopup())
        reset()
    }



    return (
        <PopupWrapper>
            <div className={ClassNames(cls.addClassPopup, {}, [className])}>
                <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
                <h2 className={cls.title}>Введите название класса:</h2>
                <form onSubmit={handleSubmit(saveHandler)} className={cls.form}>
                    <Controller 
                        name='class_name'
                        control={control}
                        rules={{
                            required: 'Пожулайста введите название класса'
                        }}
                        render={
                            ({field})=> <PopupFormRow 
                                { ...field }
                                theme={InputTheme.CLEAR} 
                                error={errors.class_name?.message}
                                placeholder={'5 А'} 
                                className={cls.input} 
                                />
                            }
                    />
                    <Button className={cls.button} theme={ButtonTheme.DARK} >Сохранить</Button>
                </form>
            </div>
        </PopupWrapper>
 );
}