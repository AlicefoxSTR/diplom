import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './SignupPopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { PopupFormRow } from 'widgets/PopupFormRow/PopupFormRow';
import { Cross } from 'shared/UI/Cross/Cross';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'entities/Popups/PopupsSlice';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';
import { Controller, useForm } from 'react-hook-form';
import { emailRegEx, passwordRegEx } from 'shared/lib/regEx';
import { userApi } from 'entities/User/api/UserApi';

export const SignupPopup = (props) => {
    const { className } = props;

    const {
        control, 
        handleSubmit, 
        formState: {errors}, 
        watch,
        setError,
        reset
    } = useForm({mode: 'onBlur'})
    const { role, completedStages } = useSelector(state => state.user)
    const [ registerUser ] = userApi.useRegisterUserMutation()

    const dispatch = useDispatch()

    function SubmitHandler(data){
        const formData = data
        formData.role = role
        if(completedStages){
            formData.stages = completedStages
        }
        registerUser(formData)
            .then(res => {
                if (res.error?.data?.username){
                    setError(
                        'username',
                        {
                            type: 'api',
                            message: 'Такой логин уже занят.'
                        }
                    )
                }else {
                    reset()
                    dispatch(PopupsSlice.actions.showPopup(PopupNames.SIGNIN))
                }
            })
    }
    const password = watch('password', ''); // Получаем значение поля password
  

    const validatePasswordMatch = (value) => {
        if (value === password) {
          return true;
        }
        return 'Пароли должны совпадать';
      };

    return (
        <PopupWrapper>
            <PopupBoard className={ClassNames(cls.signinPopup, {}, [className])}>
                <Cross size={23} style={{top: '36.11px', right: '50.7px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
                <h1 className={cls.title}>
                    Регистрация
                </h1>
               <form onSubmit={handleSubmit(SubmitHandler)}>
                    <Controller 
                        name='fio'
                        control={control}
                        rules={{
                            required: 'Пожулайста введите имя'
                        }}
                        render={({field})=> <PopupFormRow label={"Имя"} error={errors.fio?.message} {...field} placeholder={'Иванов Иван'} className={cls.row} />}
                    />
                    <Controller 
                        name='username'
                        control={control}
                        rules={{
                            required: 'Пожулайста введите Логин'
                        }}
                        render={({field})=> <PopupFormRow label={"Логин"} error={errors.username?.message} {...field} placeholder={'ivanovIvan'} className={cls.row} />}
                    />
                    <Controller 
                        name='email'
                        control={control}
                        rules={{
                            required: 'Пожалуйста введите email',
                            pattern: {
                                value: emailRegEx,
                                message: 'Проверьте правильность введенной почты'
                            }
                        }}
                        render={({field})=> <PopupFormRow error={errors.email?.message ?? ''}  label={'Почта'} {...field} placeholder={'ivanov@mail.ru'} className={cls.row} />}
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
                    <Controller 
                        name='password2'
                        rules={{
                            required: 'Пожалуйста повторите пароль',
                            validate: validatePasswordMatch
                        }}
                        control={control}
                        render={({field})=> <PopupFormRow error={errors.password2?.message ?? ''} type={'password'} label={'Подтвердите пароль'} {...field} placeholder={'Ivanov11'} className={cls.row} />}
                    />
                    <Button type='submit' className={cls.button} theme={ButtonTheme.DARK} >Зарегистрироваться</Button>
               </form>
                <p className={cls.text}>
                        Уже есть аккаунт? <span className={cls.link} onClick={()=>dispatch(PopupsSlice.actions.showPopup(PopupNames.SIGNIN))}>
                        Войти
                    </span>
                </p>
            </PopupBoard>
        </PopupWrapper>
 );
}