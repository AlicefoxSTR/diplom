import { testsApi } from 'entities/Tests'
import React, { useEffect } from 'react'
import { Loader } from 'shared/UI/Loader/Loader'
import { Main, MainNavigation } from 'widgets/Main'
import cls from './ProgressPage.module.css'
import { ReactComponent as ActiveMedal } from 'shared/assets/icons/active-medal-icon.svg'
import { ReactComponent as UnactiveMedal } from 'shared/assets/icons/unactive-medal-icon.svg'
import Certificate from 'shared/assets/img/certificate.png'
import { ClassNames } from 'shared/lib/ClassNames/ClassNames'
import { useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/UI/Button/Button'


export const ProgressPage = () => {

  const [fetchStages, { data: stages, isLoading, isError, error }] = testsApi.useLazyFetchAllStagesQuery({refetchOnFocus: true})
  const [fetchCompletedStages, { data: completedStages }] = testsApi.useLazyFetchCompletedStagesQuery()

  const { certificate } = useSelector(state => state.user)

  useEffect(()=>{
    fetchStages()
    fetchCompletedStages()
  },[completedStages, stages])


  return (
    <Main isPrivate={true} className={cls.progressPage} >
      <MainNavigation />
        <div className={cls.content}>
          <h2 className={cls.subtitle}>Проходи испытания, собирай награды и получи именной сертификат!</h2>
          <div className={cls.medals}>
            {
            isLoading
            ?
            <Loader />
            :
            isError
            ?
            <span>{error.data.detail ?? ''}</span>
            :
              stages && stages.map((stage) => (
                completedStages && completedStages.find(({id}) => id === stage.id) 
                ? <ActiveMedal className={cls.medal} key={`medalIcon_${stage.id}`}/> 
                : <UnactiveMedal className={cls.medal} key={`medalIcon_${stage.id}`}/>
              ))
            }
          </div>
          <p className={cls.text}>Твой сертификат:</p>
          <div className={cls.imgContainer}>
            <img src={Certificate} className={ClassNames(cls.certificate, {}, [])} alt="" />
            { !certificate && <div className={ClassNames(cls.disabled, {}, [])}></div> }
          </div>
          { certificate && <Button className={cls.button}  theme={ButtonTheme.LIGHT} > Скачать сертификат </Button> }
        </div>
    </Main>
  )
}
