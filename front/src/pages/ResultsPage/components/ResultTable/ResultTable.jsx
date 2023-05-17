import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ResultTable.module.css';

export const ResultTable = (props) => {
    const { 
        className,
        result
    } = props;


    return (
        <div className={ClassNames(cls.resultTable, {}, [className])}>
            {
                result.map(item => (
                    <div className={cls.row} key={`resultTableRow_${item.id}`}>
                        <span className={cls.fio}>{item.fio}</span>
                        <span className={cls.result}>Результат: {item.value}</span>
                        <span className={cls.date}>Дата: {item.date}</span>
                    </div>
                ))
            }
        </div>
 );
}