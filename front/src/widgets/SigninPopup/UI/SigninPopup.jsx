import React, { useEffect } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './SigninPopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { PopupFormRow } from 'widgets/PopupFormRow/PopupFormRow';
import { Cross } from 'shared/UI/Cross/Cross';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'entities/Popups/PopupsSlice';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';
import { Controller, useForm } from 'react-hook-form';
import { passwordRegEx } from 'shared/lib/regEx';
import { userApi } from 'entities/User/api/UserApi';
import { UserSlice } from 'entities/User';
import { useNavigate } from 'react-router';

export const SigninPopup = (props) => {
    const { className } = props;

   
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
              
    const [ createToken] = userApi.useCreateTokenMutation()

    const {
        control, 
        handleSubmit, 
        formState: {errors}, 
        setError,
        reset
    } = useForm({mode: 'onBlur'})

    function SubmitHandler(data){
        createToken(data).then(
            res => {
                if (res.error?.data?.detail){
                    setError('username',
                        {
                            type: 'api',
                            message: 'Пользователь с таким логином и паролем не найден.'
                        }
                    )
                    setError('password',
                        {
                            type: 'api',
                            message: 'Проверьте правильность введенных данных.'
                        }
                    )
                }else if(res.data){
                    dispatch(UserSlice.actions.login({
                        'access_token': res.data.access,
                        'refresh_token': res.data.refresh
                    }))   
                    reset()                 
                    navigate(-1)
                    dispatch(PopupsSlice.actions.closePopup())
                }
            }
        )
    }

    return (
        <PopupWrapper>
            <PopupBoard className={ClassNames(cls.signinPopup, {}, [className]) }>
                <Cross size={23} style={{top: '36.11px', right: '50.7px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
                <h1 className={cls.title}>
                    Вход
                </h1>
                <form onSubmit={handleSubmit(SubmitHandler)}>
                    <Controller 
                            name='username'
                            control={control}
                            rules={{
                                required: 'Пожулайста введите Логин'
                            }}
                            render={({field})=> <PopupFormRow label={"Логин"} error={errors.username?.message} {...field} placeholder={'ivanovIvan'} className={cls.row} />}
                        />
                    <Controller 
                            name='password'
                            rules={{
                                required: 'Пожалуйста введите пароль',
                                pattern: {
                                    value: passwordRegEx,
                                    message: 'Проверьте правильность введенного пароля'
                                }
                            }}
                            control={control}
                            render={({field})=> <PopupFormRow error={errors.password?.message ?? ''} type={'password'}  label={'Пароль'} {...field}  placeholder={'Ivanov11'} className={cls.row} />}
                        />
                    <Button className={cls.button} theme={ButtonTheme.DARK} >Войти</Button>
                </form>
                <p className={cls.text}>
                    Еще не зарегистрированы? 
                    <span className={cls.link} onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.SIGNUP))}>
                        Регистрация
                    </span>
                </p>
            </PopupBoard>
        </PopupWrapper>
 );
}