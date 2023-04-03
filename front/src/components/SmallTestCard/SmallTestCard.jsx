import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './SmallTestCard.module.css';
import { CustomLink, LinkThemes } from 'UI/CustomLink/CustomLink';

export const SmallTestCard = (props) => {
    const { 
        className,
        test
    } = props;
    console.log(test)

    return (
        <div className={ClassNames(cls.smallTestCard, {}, [className])}>
            <img src={test.img} alt="" className={ClassNames(cls.img, {}, [])}/>
            <div className={cls.block}>
                <h2 className={cls.title}>
                    {test.name}
                </h2>
                <CustomLink
                    to={`/test/${test.id}`} 
                    theme={LinkThemes.BUTTON_DARK} 
                    className={ClassNames(cls.button, {}, [])} 
                >
                    Пройти
                </CustomLink>
            </div>
           
        </div>
 );
}