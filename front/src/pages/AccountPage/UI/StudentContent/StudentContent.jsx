import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './StudentContent.module.css';
import { NotFoundResults } from '../NotFoundResults/NotFoundResults';
import { useSelector } from 'react-redux';
import { ResultsTable } from 'widgets/ResultsTable/ResultsTable';
import { testResultApi } from 'entities/TestResult';
import { Loader } from 'shared/UI/Loader/Loader';

export const StudentContent = (props) => {
    const { className } = props;

    const { role } = useSelector(state => state.user)
    const { data: results, isLoading } = testResultApi.useGetResultsQuery({role: role})
    


    return (
        <div className={ClassNames(cls.studentContent, {}, [className])}>
            {
               isLoading
               ?
               <Loader />
               :
               results.length > 0
                ?
                <ResultsTable results={results} className={cls.table} />
                :
                <NotFoundResults title={'Мои результаты:'} description={'Вы пока не прошли ни одного теста'} />
            }
        </div>
 );
}