import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './StudentContent.module.css';
import { NotFoundResults } from '../NotFoundResults/NotFoundResults';
import { useSelector } from 'react-redux';
import { ResultsTable } from 'widgets/ResultsTable/ResultsTable';

export const StudentContent = (props) => {
    const { className } = props;

    const { results } = useSelector(state=>state.testResult)

    return (
        <div className={ClassNames(cls.studentContent, {}, [className])}>
            {
                results.length > 0
                ?
                <ResultsTable results={results} className={cls.table} />
                :
                <NotFoundResults title={'Мои результаты:'} description={'Вы пока не прошли ни одного теста'} />
            }
        </div>
 );
}