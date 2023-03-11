import React, { useEffect } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './PopupWrapper.module.css';

export const PopupWrapper = (props) => {
    const { className, children, hidden, ...otherProps } = props;

    useEffect(() => { //Блокировка скролла на странице, пока открыто модальное окно
        if(!hidden){
            document.body.style.overflow = 'hidden'
        }else {
            document.body.style.overflow = 'auto'
        }
    }, [hidden])


    return (
        <div className={ClassNames(cls.popupWrapper, {[cls.hidden]: hidden}, [className])} {...otherProps}>
            {children}
        </div>
 );
}