import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ResultsPage.module.css';
import { Main, MainNavigation } from 'widgets/Main';
import { ResultClassesFilter } from '../ResultClassesFilter/ResultClassesFilter';
import { useSelector } from 'react-redux';
import { ResultTestsFilter } from '../ResultTestsFilter/ResultTestsFilter';
import { ResultTable } from '../ResultTable/ResultTable';

export const ResultsPage = (props) => {
    const { className } = props;

    const { classes } = useSelector(state => state.classes)
    const { tests } = useSelector(state => state.tests)
    const { results } = useSelector(state => state.results)

    return (
        <Main isPrivate={true}>
            <MainNavigation />
            <div className={ClassNames(cls.resultsPage, {}, [className])}>
                <ResultTestsFilter items={tests} placeholder={"Выберите тест"} />
                <ResultClassesFilter classes={classes} className={cls.classFilter} />
                <ResultTable result={results} className={cls.table} />
            </div>
        </Main>
 );
}