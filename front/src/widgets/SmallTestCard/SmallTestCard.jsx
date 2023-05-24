import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './SmallTestCard.module.css';
import { CustomLink, LinkThemes } from 'shared/UI/CustomLink/CustomLink';
import Image from 'app/assets/img/test-img.png'
import { useDispatch, useSelector } from 'react-redux';
import { SmallButton, SmallButtonTheme } from 'shared/UI/SmallButton/SmallButton';
import { PopupsSlice } from 'entities/Popups';
import { PopupNames } from 'entities/Popups/redux/PopupsSlice';
import { UserSlice } from 'entities/User';


export const SmallTestCard = (props) => {
    const { 
        className,
        test
    } = props;

    const { role } = useSelector(state=>state.user)
    const dispatch = useDispatch()

    function ClickHandler(){
        dispatch(UserSlice.actions.setChosedTest(test))
        dispatch(PopupsSlice.actions.showPopup(PopupNames.CHOSE_ACTION_FOR_CUSTOM_TEST))
    }

    return (
        <div className={ClassNames(cls.smallTestCard, {}, [className])}>
            <img src={test.img ?? Image} alt="" className={ClassNames(cls.img, {}, [])}/>
            <div className={cls.block}>
                <h2 className={cls.title}>
                    {test.title}
                </h2>
                <div className={cls.buttons}>
                    {
                        role === 'teacher'
                        ?
                        <>
                            <SmallButton 
                            theme={SmallButtonTheme.DARK} 
                            onClick={()=>ClickHandler()}>
                                Выбрать
                            </SmallButton>
                        </>
                        :
                        <CustomLink
                            to={`/test/${test.id}`} 
                            theme={LinkThemes.BUTTON_DARK} 
                            className={ClassNames(cls.button, {}, [])} 
                        >
                            Пройти
                        </CustomLink>
                    }
                </div>
                
            </div>
           
        </div>
 );
}