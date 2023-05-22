import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './SmallTestCard.module.css';
import { CustomLink, LinkThemes } from 'shared/UI/CustomLink/CustomLink';
import Image from 'app/assets/img/test-img.png'


export const SmallTestCard = (props) => {
    const { 
        className,
        test
    } = props;


    return (
        <div className={ClassNames(cls.smallTestCard, {}, [className])}>
            <img src={test.img ?? Image} alt="" className={ClassNames(cls.img, {}, [])}/>
            <div className={cls.block}>
                <h2 className={cls.title}>
                    {test.title}
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