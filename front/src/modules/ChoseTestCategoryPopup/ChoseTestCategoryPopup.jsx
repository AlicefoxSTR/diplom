import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './ChoseTestCategoryPopup.module.css';
import { PopupBoard } from 'components/PopupBoard/PopupBoard';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'redux/Popups/PopupsSlice';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { TestCreationSlice } from 'redux/TestCreation/TestCreationSlice';

export const ChoseTestCategoryPopup = (props) => {

    const { className } = props;

    const { popups } = useSelector(state=>state.popups)
    const { tests } = useSelector(state=>state.tests)
    const dispatch = useDispatch()

    const popupName = PopupNames.CHOSE_TEST_CATEGORY

    function openChoseQuestionPopupHandler(test_id){
        dispatch(TestCreationSlice.actions.setActiveTestCategory(test_id))
        dispatch(PopupsSlice.actions.showPopup(PopupNames.CHOSE_QUESTION))
        dispatch(PopupsSlice.actions.closePopup())
    }

    return (
        <PopupWrapper hidden={popups.find(popup=> popup.name === popupName ).hidden}>
            <PopupBoard className={ClassNames(cls.choseTestCategoryPopup, {}, [className])}>
                <h2 className="popupTitle">
                    Выберите категорию
                </h2>
                <div className={cls.cards}>
                    {
                        tests.map(test => (
                            <div className={cls.card} key={`choseTestCategoryPopupCard_${test.id}`}>
                                <span className={cls.cardText}>{ test.title }</span>
                                <Button 
                                    className={cls.button} 
                                    theme={ButtonTheme.LIGHT} 
                                    onClick={()=>openChoseQuestionPopupHandler(test.id)}
                                >
                                    Выбрать
                                </Button>
                            </div>
                        ))
                    }
                </div>
            </PopupBoard>
        </PopupWrapper>
        
 );
}