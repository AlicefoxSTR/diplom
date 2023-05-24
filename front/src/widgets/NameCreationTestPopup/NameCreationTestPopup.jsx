import React from 'react';
import cls from './NameCreationTestPopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { Cross } from 'shared/UI/Cross/Cross';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { PopupsSlice } from 'entities/Popups/PopupsSlice';
import { PopupFormRow } from 'widgets/PopupFormRow/PopupFormRow';
import { TestCreationSlice, testCreationApi } from 'entities/TestCreation';
import { InputTheme } from 'shared/UI/Input/Input';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useNavigate } from 'react-router';
import { testsApi } from 'entities/Tests';

export const NameCreationTestPopup = (props) => {
    const { className } = props;

    const dispatch = useDispatch()

    const {
        control, 
        handleSubmit, 
        formState: {errors}, 
        reset
    } = useForm({mode: 'onBlur'})
    const [ saveTest ] = testCreationApi.useSaveTestMutation()
    const [ saveCustomTasksFromApi ] = testCreationApi.useSaveCustomTasksFromApiMutation()
    const { role } = useSelector(state=>state.user)

    const navigate = useNavigate()

    const [ fetchCustomTests ] = testsApi.useLazyFetchCustomTestsQuery()
    const { tasks, name } = useSelector(state => state.testCreation)



    async function saveHandler(data) {
        dispatch(TestCreationSlice.actions.setTestName(data.name))
        const tasksFromApi = tasks.filter(task => task.isPersonal && task.fromApi)
        if(tasksFromApi.length > 0){
            saveCustomTasksFromApi(tasksFromApi)
        }
        saveTest({name: data.name, tasks: [...tasks]})
            .then(res => {
                if(res.data){
                    dispatch(TestCreationSlice.actions.clearTestCreation())
                    fetchCustomTests({custom:true, role:role})
                    reset()
                    navigate('/account/my-tests')
                }
            })
        dispatch(PopupsSlice.actions.closePopup())
        
    }


    return (
        <PopupWrapper>
            <div className={ClassNames(cls.nameCreationTestPopup, {}, [className])}>
                <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
                <h2 className={cls.title}>Введите название теста:</h2>
                <form onSubmit={handleSubmit(saveHandler)} className={cls.form}>
                    <Controller 
                        name='name'
                        control={control}
                        defaultValue={name}
                        rules={{
                            required: 'Пожулайста введите название теста'
                        }}
                        render={
                            ({field})=> <PopupFormRow 
                                { ...field }
                                theme={InputTheme.CLEAR} 
                                error={errors.class_name?.message}
                                placeholder={'Название теста'} 
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