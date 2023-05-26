import React, { useEffect } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './PopupWrapper.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PopupsSlice } from 'entities/Popups/redux/PopupsSlice';

export const PopupWrapper = (props) => {
    const { className, children, closeHandler, ...otherProps } = props;
    const { activePopup } = useSelector(state => state.popups)


    const dispatch = useDispatch()

    function handleKeyDown(e){
        if (e.key === 'Escape'){
            dispatch(PopupsSlice.actions.closePopup())
        }
    }

    useEffect(()=>{
        if (activePopup){
            document.addEventListener('keydown', handleKeyDown )
            document.body.style.overflow = 'hidden'
        }else{
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'auto'
            closeHandler && closeHandler()


        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto'
            closeHandler && closeHandler()

          };
        

    }, [activePopup])


    return (
        <div 
            className={ClassNames(cls.popupWrapper, {}, [className])} 
            {...otherProps} 
        >
            {children}
        </div>
 );
}