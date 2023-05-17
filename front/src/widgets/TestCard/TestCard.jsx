import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TestCard.module.css';
import { CustomLink } from 'shared/UI/CustomLink/CustomLink';
import { LinkThemes } from 'shared/UI/CustomLink/CustomLink';

export const TestCard = (props) => {
    const { 
        className,
        card
    } = props;

    return (
        <div className={ClassNames(cls.testCard, {[cls.disabled]: card.disabled}, [className])}>
            <img src={card.img} alt="" className={ClassNames(cls.img, {[cls.disabled]: card.disabled}, [])}/>
            <div className={cls.block}>
                <h2 className={cls.title}>
                    {card.title}
                </h2>
                <p className={cls.text}>
                    {card.text}
                </p>
            </div>
            <CustomLink to={`/test/${card.id}`} disabled={card.disabled} theme={LinkThemes.BUTTON_DARK} className={ClassNames(cls.button, {[cls.disabled]: card.disabled}, [])} >Начать</CustomLink>
        </div>
 );
}