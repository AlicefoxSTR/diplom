import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './PopupBoard.module.css';

export const PopupBoard = (props) => {
    const { className, children } = props;

    return (
        <div className={ClassNames(cls.popupBoard, {}, [className])}>
            {children}
        </div>
 );
}