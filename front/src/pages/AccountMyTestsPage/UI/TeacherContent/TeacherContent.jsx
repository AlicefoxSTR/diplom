import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TeacherContent.module.css';
import { TestCardsList } from 'widgets/TestCardsList/TestCardsList';
import { NotFoundResults } from 'pages/AccountPage/Ui/NotFoundResults/NotFoundResults';
import { CustomLink, LinkThemes } from 'shared/UI/CustomLink/CustomLink';
import { testsApi } from 'entities/Tests';
import { Loader } from 'shared/UI/Loader/Loader';
import { useSelector } from 'react-redux';

export const TeacherContent = (props) => {
    const { className } = props;

    const { role } = useSelector(state=>state.user)


    const { data, isLoading } = testsApi.useFetchCustomTestsQuery({
        "custom": true,
        "role": role
    })




    return (
        <div className={ClassNames(cls.teacherContent, {}, [className])}>
            {
                !isLoading
                    ?
                    data && data.length > 0
                        ?
                        <TestCardsList tests={data}  />
                        :
                        <NotFoundResults title={"Мои тесты:"} description={"Тесты не были найдены"} />
                    :
                    <Loader />
            }
            <CustomLink to="/account/create-test" theme={LinkThemes.BUTTON} className={cls.button}>Создать свой тест</CustomLink>

        </div>
 );
}