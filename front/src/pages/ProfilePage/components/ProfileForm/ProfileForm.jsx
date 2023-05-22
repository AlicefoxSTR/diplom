import React, { useEffect, useState } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ProfileForm.module.css';
import { FormInputRow } from 'widgets/FormInputRow/FormInputRow';
import { Button } from 'shared/UI/Button/Button';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { emailRegEx } from 'shared/lib/regEx';

export const ProfileForm = (props) => {
    const { className, rabbitView=true } = props;
    const { firstName, secondName, email } = useSelector(state => state.user)
    const [ formDisabled, setFormDisabled ] = useState(true)    

    const {
        control, 
        handleSubmit, 
        formState: { dirtyFields}, 
        reset,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            first_name: firstName,
            last_name: secondName,

        }
    })

    function SubmitHandler(data){
        console.log(data)
        console.log(dirtyFields)
    }



    return (
        <form className={ClassNames(cls.ProfileForm, {[cls.rabbitView]: rabbitView}, [className])} onSubmit={handleSubmit(SubmitHandler)}>

            <Controller 
                name='first_name'
                control={control}
                defaultValue={firstName}
                render={({field})=>  <FormInputRow 
                    { ...field }
                    theme={'border'} 
                    id={'firstname'} 
                    placeholder='Иван' 
                    label='Имя:' 
                    className={cls.row} 
                    disabled={formDisabled}
                />}
            />

            <Controller 
                name='last_name'
                defaultValue={secondName}
                control={control}
                rules={{
                    required: 'Пожулайста введите имя'
                }}
                render={({field})=> <FormInputRow 
                    { ...field }
                    theme={'border'} 
                    id={'secondname'} 
                    placeholder='Иванов' 
                    label='Фамилия:' 
                    className={cls.row} 
                    disabled={formDisabled}
                />}
            />
           
           
            <Controller 
                name='email'
                control={control}
                defaultValue={email}
                rules={{
                    pattern: {
                        value: emailRegEx,
                        message: 'Проверьте правильность введенной почты'
                    }
                }}
                render={({field})=> <FormInputRow 
                    { ...field }
                    theme={'border'} 
                    id={'email'} 
                    placeholder='email@mail.ru' 
                    label='Почта:' 
                    className={cls.row} 
                    disabled={true}
                />}
            />
            {
                formDisabled 
                ?
                    <Button type={'button'} className={cls.button} onClick={e=>{
                        e.preventDefault()
                        setFormDisabled(false)}
                    } >Изменить данные</Button>
                :
                    dirtyFields.first_name || dirtyFields.last_name
                    ?
                    <Button type={'submit'} className={cls.button} onClick={()=>setFormDisabled(false)}  >Сохранить</Button>
                    :
                    <Button type={'submit'} className={cls.button} onClick={()=>setFormDisabled(true)}  >Отмена</Button>

            }
        </form>
 );
}