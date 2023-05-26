import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TestingPage.module.css';
import { useSelector } from 'react-redux';
import { ProgressBar } from 'widgets/ProgressBar/ProgressBar';
import { Main } from 'widgets/Main';
import { TestingTable } from 'pages/TestingPage/UI/TestingTable/TestingTable';
import { CustomLink, LinkThemes } from 'shared/UI/CustomLink/CustomLink';
import { TestingTypes } from 'entities/Testing/TestingSlice';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useNavigate } from 'react-router';

export const TestingPage = (props) => {
    const { 
        className
    } = props;

    const {test, activeTask, testingType} = useSelector(state => state.testing)
    const navigate = useNavigate()


    return (
        <Main className={cls.testigPage}>
            <div className={ClassNames(cls.testingPage, {}, [className])}>
                <ProgressBar tasks={test.tasks} activeIndex={activeTask.id} className={cls.progressBar} />
                <TestingTable 
                    className={cls.testingTable}
                />
            </div>
            {
                testingType === TestingTypes.VIEW
                ?
                    <Button onClick={()=>navigate(-1)} theme={ButtonTheme.LIGHT} className={cls.link} >Завершить просмотр</Button>
                :
                testingType === TestingTypes.USER_TESTING
                ?
                    <CustomLink to="/tests" theme={LinkThemes.BUTTON} className={cls.link} >Вернуться к теории</CustomLink>
                :
                    null
            }
        </Main>
 );
}