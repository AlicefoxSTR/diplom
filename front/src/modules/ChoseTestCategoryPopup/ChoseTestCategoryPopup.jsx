import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ChoseTestCategoryPopup.module.css';
import { PopupBoard } from 'components/PopupBoard/PopupBoard';

export const ChoseTestCategoryPopup = (props) => {
    const { className } = props;

    return (
        <PopupBoard className={ClassNames(cls.choseTestCategoryPopup, {}, [className])}>
            

        </PopupBoard>
 );
}