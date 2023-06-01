import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TestResultPopup.module.css';
import { Cross } from 'shared/UI/Cross/Cross';
import { SmallButton, SmallButtonTheme } from 'shared/UI/SmallButton/SmallButton';
import { useDispatch, useSelector } from 'react-redux';
import { PopupsSlice } from 'entities/Popups/redux/PopupsSlice';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';
import { testResultApi } from 'entities/TestResult';
import { TestingSlice } from 'entities/Testing';
import { useNavigate } from 'react-router';
import { TestingTypes } from 'entities/Testing/redux/TestingSlice';
import { PopupCloser } from 'features/PopupCloser/PopupCloser';
import { PopupNavigation } from '../PopupNavigation/PopupNavigation';

export const TestResultPopup = (props) => {
    const { className } = props;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { result } = useSelector(state => state.testing)
    const [ sendResults] = testResultApi.useSendResultsMutation()

    function FinishTestingHandler(){
        sendResults(result).then(() => {
            navigate('/account/tests')
            dispatch(TestingSlice.actions.clearTesting())
            dispatch(PopupsSlice.actions.closePopup())
        })
    }

    function ShowResultsHandler(){
        dispatch(TestingSlice.actions.showResults())
        dispatch(PopupsSlice.actions.closePopup())
    }

    return (
        <PopupBoard className={ClassNames(cls.testResultPopup, {}, [className])}>
            <PopupNavigation />
            <h2 className={cls.title}>Поздравляем!</h2>
            <p className={cls.text}>Ты прошёл тест на {result.correctAnweredQuestions}/{result.totalQuestions}</p>
            <SmallButton 
                theme={SmallButtonTheme.DARK} 
                className={cls.button}
                onClick={()=>FinishTestingHandler()}
            >
                Завершить
            </SmallButton>
            <SmallButton 
                theme={SmallButtonTheme.DARK} 
                className={cls.button}
                onClick={()=>ShowResultsHandler()}
            >
                Просмотреть результат
            </SmallButton>
        </PopupBoard>
 );
}