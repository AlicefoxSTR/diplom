import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './StudentContent.module.css';
import { NotFoundResults } from 'pages/AccountPage/Ui/NotFoundResults/NotFoundResults';
import { useSelector } from 'react-redux';
import { TestCardsList } from 'widgets/TestCardsList/TestCardsList';
import { testsApi } from 'entities/Tests';
import { Loader } from 'shared/UI/Loader/Loader';

export const StudentContent = (props) => {
    const { className } = props;

    const { role } = useSelector(state=>state.user)


    const { data, isLoading } = testsApi.useFetchCustomTestsQuery({
        "custom": true,
        "role": role
    })


    return (
        <div className={ClassNames(cls.studentContent, {}, [className])}>
             {
                !isLoading
                    ?
                    data && data.length > 0
                        ?
                        <TestCardsList tests={data}  />
                        :
                        <NotFoundResults title={"Доступные тесты:"} description={"Тесты не найдены"} />
                    :
                    <Loader />
            }
        </div>
 );
}