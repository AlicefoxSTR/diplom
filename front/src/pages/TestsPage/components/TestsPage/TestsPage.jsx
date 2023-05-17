import React from 'react'
import { Main, MainNavigation } from '../../../../widgets/Main'
import { TestCard } from 'widgets/TestCard/TestCard'
import cls from './TestsPage.module.css'
import { useSelector } from 'react-redux'


export const TestsPage = () => {

  const { cards } = useSelector(state => state.tests)


  return (
    <Main>
      <MainNavigation />
      <div className={cls.content}>
        {
          cards.map(card => (
            <TestCard  className={cls.card} card={card} key={`TestCard_${card.id}`}/>
          ) )
        }
      </div>
    </Main>
  )
}
