import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TeacherContent.module.css';
import { TestCardsList } from 'widgets/TestCardsList/TestCardsList';
import { NotFoundResults } from 'pages/AccountPage/components/NotFoundResults/NotFoundResults';
import { CustomLink, LinkThemes } from 'shared/UI/CustomLink/CustomLink';
import { testsApi } from 'entities/Tests';

export const TeacherContent = (props) => {
    const { className } = props;


    const { data, isLoading } = testsApi.useFetchTestsQuery({'custom': true})




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