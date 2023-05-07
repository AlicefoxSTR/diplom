import React, { useEffect, useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './Select.module.css';
import { ReactComponent as Arrow} from 'assets/icons/arrow-top.svg'
import { useDispatch } from 'react-redux';
import { NewQuestionCreateSlice } from 'redux/NewQuestionCreate';


export const Select = (props) => {
    const { className, options, activeOption } = props;
    const [active, setActive] = useState(false)

    const dispatch = useDispatch()


    function toggleHandler(e){
        e.preventDefault()
        setActive(!active)
    }

    function sortOptions(a, b){
        if (a.value === activeOption) {
            return -1; // a должно быть раньше b
          } else if (b.value === activeOption) {
            return 1; // b должно быть раньше a
          } else {
            return 0; // порядок не важен
          }
    }

    function choseOptionHandler(value){
        dispatch(NewQuestionCreateSlice.actions.setQuestionType(value))
        setActive(!active)
    }

        

    return (
        <div className={ClassNames(cls.select, {[cls.active]: active}, [className])} onClick={e=>toggleHandler(e)}>
            <div className={cls.options}>
                {
                    options.sort((a,b) => sortOptions(a, b)).map(({label, value})=>(
                        <div key={value} className={ClassNames(cls.option, {}, [])} onClick={()=>choseOptionHandler(value)}>
                            {label}
                            <Arrow className={cls.icon }/>
                        </div>
                    ))
                }
            </div>
        </div>
 );
}