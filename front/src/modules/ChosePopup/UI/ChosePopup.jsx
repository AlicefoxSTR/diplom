import React, { useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ChosePopup.module.css';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { Cross } from 'UI/Cross/Cross';

export const ChosePopup = (props) => {

    const [hidden, setHidden] = useState(true)

    const { 
        className,
     } = props;

     function close(){
        setHidden(!hidden)
     }

    return (
        <PopupWrapper hidden={hidden} >
            <div className={ClassNames(cls.chosePopup, {}, [className])}>
                <Cross style={{top: '25px', right: '25px'}} size={25} onClick={close} />
                <div className={ClassNames(cls.block, {}, [className, cls.firstBlock])}>
                    <p className={cls.role}>
                        Я - ученик
                    </p>
                    <ul className={cls.list}>
                        <li className={cls.item}>
                            Проходи испытания
                        </li>
                        <li className={cls.item}>
                            Зарабатывай награды
                        </li>
                        <li className={cls.item}>
                            Получай именную грамоту
                        </li>
                    </ul>
                    <Button theme={ButtonTheme.DARK} className={cls.button}  >Войти как ученик</Button>
                </div>
                <div className={ClassNames(cls.block, {}, [className])}>
                    <p className={cls.role}>
                        Я - учитель
                    </p>
                    <ul className={cls.list}>
                        <li className={cls.item}>
                            Скачивай материалы
                        </li>
                        <li className={cls.item}>
                            Создавай викторины
                        </li>
                        <li className={cls.item}>
                            Отслеживай успеваемость
                        </li>
                    </ul>
                    <Button theme={ButtonTheme.DARK} className={cls.button}  >Войти как учитель</Button>
                </div>
            </div>
        </PopupWrapper>    
    );
}