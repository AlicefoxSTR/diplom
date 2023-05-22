import React, { useEffect } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TeacherContent.module.css';
import { useSelector } from 'react-redux';
import { TestCardsList } from 'widgets/TestCardsList/TestCardsList';
import { NotFoundResults } from 'pages/AccountPage/components/NotFoundResults/NotFoundResults';
import { CustomLink, LinkThemes } from 'shared/UI/CustomLink/CustomLink';
import { testsApi } from 'entities/Tests';

export const TeacherContent = (props) => {
    const { className } = props;

    const { tests }  = useSelector(state => state.tests)  

    const { data, isLoading } = testsApi.useFetchTestsQuery()



    return (
        <div className={ClassNames(cls.teacherContent, {}, [className])}>
            {
                !isLoading
                    ?
                    data.length > 0
                        ?
                        <TestCardsList tests={data} />
                        :
                        <NotFoundResults title={"Мои тесты:"} description={"Тесты не были найдены"} />
                    :
                    "Загрузка..."
            }
            <CustomLink to="/account/create-test" theme={LinkThemes.BUTTON} className={cls.button}>Создать свой тест</CustomLink>

        </div>
 );
}