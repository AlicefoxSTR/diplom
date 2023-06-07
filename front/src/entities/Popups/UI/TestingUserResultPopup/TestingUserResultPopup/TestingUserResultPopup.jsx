import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TestingUserResultPopup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';
import { UserAuthContent } from '../UserAuthContent/UserAuthContent';
import { UserUnauthContent } from '../UserUnauthContent/UserUnauthContent';
import { PopupNavigation } from '../../PopupNavigation/PopupNavigation';
import { TestingSlice } from 'entities/Testing';
import { TestingFailContent } from '../TestingFailContent/TestingFailContent';

export const TestingUserResultPopup = (props) => {
    const { className } = props;
    const dispatch = useDispatch()

    const { isAuthenticate } = useSelector(state => state.user)
    const { result } = useSelector(state => state.testing)


    function CloseHandler(){
        dispatch(TestingSlice.actions.clearTesting())
    }

    return (
        <PopupBoard  className={ClassNames(cls.testingUserResultPopup, {}, [className])}>
            <PopupNavigation handler={CloseHandler} />
            {
                result.percent === 100
                ?
                    isAuthenticate
                    ?
                    <UserAuthContent/>
                    :
                    <UserUnauthContent/>
                :
                    <TestingFailContent/>
            }
        </PopupBoard>
 );
}