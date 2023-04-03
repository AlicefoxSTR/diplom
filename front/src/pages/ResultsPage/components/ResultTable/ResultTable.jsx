import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ResultTable.module.css';

export const ResultTable = (props) => {
    const { 
        className,
        result
    } = props;

    console.log(result)

    return (
        <div className={ClassNames(cls.resultTable, {}, [className])}>
            {
                result.map(item => (
                    <div className={cls.row}>
                        <span className={cls.fio}>{item.fio}</span>
                        <span className={cls.result}>Результат: {item.value}</span>
                        <span className={cls.date}>Дата: {item.date}</span>
                    </div>
                ))
            }
        </div>
 );
}