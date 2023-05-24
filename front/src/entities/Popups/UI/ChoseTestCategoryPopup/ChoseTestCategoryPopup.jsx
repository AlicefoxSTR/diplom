import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ChoseTestCategoryPopup.module.css';
import { PopupBoard } from 'widgets/PopupBoard/PopupBoard';
import { PopupWrapper } from 'widgets/PopupWrapper/PopupWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { PopupNames, PopupsSlice } from 'entities/Popups/redux/PopupsSlice';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { TestCreationSlice, testCreationApi } from 'entities/TestCreation';
import { Loader } from 'shared/UI/Loader/Loader';

export const ChoseTestCategoryPopup = (props) => {

    const { className } = props;

    // const { tests } = useSelector(state=>state.tests)
    const dispatch = useDispatch()
    const { data: tests, isLoading } = testCreationApi.useGetAllStagesQuery()



    function openChoseQuestionPopupHandler(test_id){
        dispatch(TestCreationSlice.actions.setActiveTestCategory(test_id))
        dispatch(PopupsSlice.actions.showPopup(PopupNames.CHOSE_QUESTION))
    }


    return (
        <PopupWrapper>
            <PopupBoard className={ClassNames(cls.choseTestCategoryPopup, {}, [className])}>
                <h2 className="popupTitle">
                    Выберите категорию
                </h2>
                <div className={cls.cards}>
                    {
                        isLoading
                        ?
                        <Loader />
                        :
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