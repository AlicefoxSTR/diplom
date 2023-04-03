import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ResultsTable.module.css';

export const ResultsTable = (props) => {
    const { 
        className,
        results
    } = props;

    return (
        <div className={ClassNames(cls.resultsTable, {}, [className])}>
             <div className={cls.tableHeader}>
                <div className={cls.row}>
                    <div className={cls.col}>
                        <span>Тест</span>
                    </div>
                    <div className={ClassNames(cls.col, {}, [cls.centerCol])}>
                        <span>Дата прохождения</span>
                    </div>
                    <div className={cls.col}>
                        <span>Результат</span>
                    </div>
                </div>
             </div>
            <div className={cls.tableBody}>
                {
                    results.map((item) => (
                        <div className={cls.row} key={`resultTableRow_${item.id}`}>
                            <div className={cls.col}>
                                <span>{item.name}</span>
                            </div>
                            <div className={ClassNames(cls.col, {}, [cls.centerCol])}>
                                <span>{item.date}</span>
                            </div>
                            <div className={cls.col}>
                                <span>{item.value}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
 );
}