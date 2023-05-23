import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './StudentContent.module.css';
import { NotFoundResults } from 'pages/AccountPage/Ui/NotFoundResults/NotFoundResults';
import { useSelector } from 'react-redux';
import { TestCardsList } from 'widgets/TestCardsList/TestCardsList';

export const StudentContent = (props) => {
    const { className } = props;

    const { tests }  = useSelector(state => state.studentTests)  

    return (
        <div className={ClassNames(cls.studentContent, {}, [className])}>
            {
                tests.length > 0
                ?
                <TestCardsList tests={tests} />
                :
                <NotFoundResults title={"Мои тесты:"} description={"Тесты не были найдены"} />
            }
        </div>
 );
}