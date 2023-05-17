import React from 'react';
import { useSelector } from 'react-redux';
import { PopupBodies } from 'entities/Popups/PopupsSlice';

export const Popups = (props) => {

    const { activePopup} = useSelector(state => state.popups)

    
    const SomePopup = activePopup !== null ? PopupBodies[activePopup] : null

    return (
        <>
            {
                SomePopup ? <SomePopup {...props}/> : null
            }
        </>
    )
}