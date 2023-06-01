import React, { useEffect } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TestingPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ProgressBar } from 'widgets/ProgressBar/ProgressBar';
import { Main } from 'widgets/Main';
import { TestingTable } from 'pages/TestingPage/UI/TestingTable/TestingTable';
import { CustomLink, LinkThemes } from 'shared/UI/CustomLink/CustomLink';
import { TestingSlice, TestingTypes } from 'entities/Testing/redux/TestingSlice';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useNavigate } from 'react-router';
import { SmallButton } from 'shared/UI/SmallButton/SmallButton';
import { TestingResult } from 'features/TestingResult/TestingResult';
import { PopupsSlice } from 'entities/Popups';
import { PopupNames } from 'entities/Popups/redux/PopupsSlice';

export const TestingPage = (props) => {
    const { 
        className
    } = props;

    const {test, activeTask, testingType, taskIndex} = useSelector(state => state.testing)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    async function EndTestHandler(){
        dispatch(TestingSlice.actions.saveAnswers())
        dispatch(TestingSlice.actions.finishTest())
        dispatch(PopupsSlice.actions.showPopup(PopupNames.TESTING_RESULT))

    }


    return (
        <Main className={cls.testigPage}>
            <div className={ClassNames(cls.testingPage, {}, [className])}>
                <ProgressBar tasks={test.tasks} activeIndex={activeTask.id} className={cls.progressBar} />
                <TestingTable 
                    className={cls.testingTable}
                />
            </div>
            {
                testingType === TestingTypes.VIEW || testingType === TestingTypes.RESULTS
                ?
                    <Button onClick={()=>navigate(-1)} theme={ButtonTheme.LIGHT} className={cls.link} >Завершить просмотр</Button>
                :
                testingType === TestingTypes.USER_TESTING
                ?
                    <>
                        <CustomLink to="/tests" theme={LinkThemes.BUTTON} className={cls.link} >Вернуться к теории</CustomLink>
                        {
                            taskIndex === test.tasks.length - 1 && <SmallButton className={cls.link} onClick={EndTestHandler}> Закончить тест </SmallButton>
                        }
                    </>
                :
                testingType === TestingTypes.STUDENT_TESTING
                ?
                
                    taskIndex === test.tasks.length - 1 && <SmallButton className={cls.link} onClick={EndTestHandler}> Закончить тест </SmallButton>
                :
                    null
            }
            

        </Main>
 );
}