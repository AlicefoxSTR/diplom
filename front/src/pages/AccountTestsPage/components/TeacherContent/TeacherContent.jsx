import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './TeacherContent.module.css';
import { useSelector } from 'react-redux';
import { TestCardsList } from 'modules/TestCardsList/TestCardsList';
import { NotFoundResults } from 'pages/AccountPage/components/NotFoundResults/NotFoundResults';
import { Button, ButtonTheme } from 'UI/Button/Button';
import { CustomLink, LinkThemes } from 'UI/CustomLink/CustomLink';

export const TeacherContent = (props) => {
    const { className } = props;

    const { tests }  = useSelector(state => state.studentTests)  


    return (
        <div className={ClassNames(cls.teacherContent, {}, [className])}>
            {
                tests.length > 0
                ?
                <TestCardsList tests={tests} />
                :
                <NotFoundResults title={"Мои тесты:"} description={"Тесты не были найдены"} />
            }
            <CustomLink to="/account/create-test" theme={LinkThemes.BUTTON} className={cls.button}>Создать свой тест</CustomLink>

        </div>
 );
}