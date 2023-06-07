import React from 'react'
import { Main, MainNavigation } from '../../widgets/Main'
import { TestCard } from 'widgets/TestCard/TestCard'
import cls from './TestsPage.module.css'
import { testsApi } from 'entities/Tests'
import { Loader } from 'shared/UI/Loader/Loader'


export const TestsPage = () => {


  const { data: stages, isLoading, isError, error } = testsApi.useFetchStagesQuery({refetchOnFocus: true})

  console.log(error)


  return (
    <Main>
      <MainNavigation />
      <div className={cls.content}>
        {
         isLoading
         ?
         <Loader />
         :
         isError
         ?
         <span>{error.data.detail ?? ''}</span>
         :
          stages && stages.map(card => (
            <TestCard  className={cls.card} card={card} key={`TestCard_${card.id}`}/>
          ))
        }
      </div>
    </Main>
  )
}
