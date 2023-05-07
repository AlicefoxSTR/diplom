import React, { useEffect, useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './InputWithCheckbox.module.css';
import { Checkbox } from 'UI/Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { NewQuestionCreateSlice } from 'redux/NewQuestionCreate';

export const InputWithCheckbox = (props) => {
    const { className, placeholder, deleteHandler, value, id } = props;
    const dispatch = useDispatch()
    const { correctAnswers } = useSelector(state => state.newQuestionCreate)
    const [input, setInput ] = useState(value ?? '')
    const [checked, setChecked ] = useState(Boolean(correctAnswers.find((answer)=>answer.id === id)))

    function BlurHandler(){
        dispatch(NewQuestionCreateSlice.actions.checkboxAnswersHandler({
            id: id,
            value: input,
            checked: checked
        }))
        setInput('')
    }


    useEffect(()=>{
        setChecked(Boolean(correctAnswers.find((answer)=>answer.id === id)))
    }, [correctAnswers])

    return (
        <div className={ClassNames(cls.inputWithCheckbox, {}, [className])}>
            <Checkbox 
                className={cls.checkbox} 
                id={id} 
                checked={checked}
                onChange = {()=> dispatch(NewQuestionCreateSlice.actions.toggleCorrectAnswer({
                    id: id,
                    value: input
                }))}
            />
            <input 
                type="text" 
                className={cls.input} 
                placeholder={placeholder} 
                value={value ?? input}
                disabled={value ?? false}
                onChange={e=>setInput(e.target.value)}
                onBlur={e=>BlurHandler()}
            />
            {
                
                deleteHandler &&  <button 
                    className={cls.button}
                    onClick={() => dispatch(NewQuestionCreateSlice.actions.checkboxAnswersHandler({
                        id: id,
                        value: ''
                    }))}
                >
                    Удалить
                </button>
            }
        </div>
 );
}