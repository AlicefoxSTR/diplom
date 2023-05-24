import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ChoseActionForCustomTestPopup.module.css';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'entities/Popups/redux/PopupsSlice';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Cross } from 'shared/UI/Cross/Cross';
import { TestCreationSlice, testCreationApi } from 'entities/TestCreation';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';
import { useNavigate } from 'react-router';

export const ChoseActionForCustomTestPopup = (props) => {
    const { className } = props;

    const dispatch = useDispatch()
    const navigate = useNavigate()

        
    const { chosedTest } = useSelector(state => state.user)

    function ClickEditHandler(){
        dispatch(TestCreationSlice.actions.setTest(chosedTest))
        navigate('/account/create-test')
        dispatch(PopupsSlice.actions.closePopup())
    }
 

    return (
        <PopupWrapper>
            <PopupBoard className={ClassNames(cls.choseActionForCustomTest, {}, [className])}>
                <Cross size={23} style={{top: '30px', right: '30px'}} onClick={()=>dispatch(PopupsSlice.actions.closePopup())} />
                <h2 className={cls.title}>{chosedTest.title}</h2>
                <Button className={cls.button} theme={ButtonTheme.DARK} >Открыть доступ классам</Button>
                <Button className={cls.button} theme={ButtonTheme.DARK} >Просмотреть тест</Button>
                {
                    chosedTest.creator
                    ?
                    <>
                        <Button 
                            className={cls.button} 
                            theme={ButtonTheme.DARK} 
                            onClick={()=>ClickEditHandler()}
                        >
                                Изменить
                        </Button>
                        <Button className={cls.button}  theme={ButtonTheme.DARK}>Удалить</Button>
                    </>
                    :
                    null
                }
            </PopupBoard>
        </PopupWrapper>
 );
}