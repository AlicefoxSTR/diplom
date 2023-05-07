import React, { useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './AddTextAnswers.module.css';
import { Input } from 'UI/Input/Input';
import { NewQuestionCreateSlice } from 'redux/NewQuestionCreate';
import { useSelector } from 'react-redux';

export const AddTextAnswers = (props) => {
    const { className } = props;

    const [input, setInput] = useState('')

    const { answers } = useSelector(state => state.newQuestionCreate)

    function BlurHandler(e){

    }

    function FocusHandler(e){

    }

    function ChangeHandler(e){

    }

    return (
        <div className={ClassNames(cls.addTextAnswers, {}, [className])}>

                {
                    answers.length > 0 
                    ?
                        answers.map((value, index)=>(
                            <Input className={cls.input} value={value} key={index} onChange={e=>console.log(e.target)} />
                        ))
                    :
                <Input className={cls.input} placeholder="Введите возможный вариант ответа" onChange={e=>console.log(e.target.value)} />

                    
                }
                <Input className={cls.input} placeholder="Дополнительный вариант*" onChange={e=>console.log(e.target)} />

                <span className={cls.help}>*  - Необязательно для заполнения</span>

        </div>
 );
}