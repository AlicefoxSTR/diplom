import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ClassList.module.css';
import { ClassItem } from 'modules/ClassItem/ClassItem';

export const ClassList = (props) => {
    const { 
        className,
        classes
    } = props;

    return (
        <div className={ClassNames(cls.classList, {}, [className])}>
            {
                classes.map((item)=>(
                    <ClassItem className={cls.item} item={item} key={`classItem_${item.id}`}/>
                ))
            }
        </div>
 );
}