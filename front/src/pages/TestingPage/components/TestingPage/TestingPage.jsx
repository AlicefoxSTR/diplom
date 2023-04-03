import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './TestingPage.module.css';
import { useSelector } from 'react-redux';
import { ProgressBar } from 'modules/ProgressBar/ProgressBar';
import { Main } from 'modules/Main';
import { TestingTable } from 'modules/TestingTable/TestingTable';
import { CustomLink, LinkThemes } from 'UI/CustomLink/CustomLink';

export const TestingPage = (props) => {
    const { 
        className
    } = props;

    const {tasks, activeTaskId} = useSelector(state => state.testing)

    return (
        <Main className={cls.testigPage}>
            <div className={ClassNames(cls.testingPage, {}, [className])}>
                <ProgressBar tasks={tasks} activeIndex={activeTaskId} className={cls.progressBar} />
                <TestingTable 
                    className={cls.testingTable}
                    task={tasks.find( task=>task.id===activeTaskId )} 
                    index={tasks.findIndex( task=>task.id===activeTaskId )+1}
                />
            </div>
            <CustomLink to="/" theme={LinkThemes.BUTTON} className={cls.link} >Вернуться к теории</CustomLink>
        </Main>
 );
}