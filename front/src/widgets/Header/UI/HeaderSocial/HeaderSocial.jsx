import React from 'react'
import { CustomLink } from '../../../../shared/UI/CustomLink/CustomLink'
import IconTG from '../../../../shared/UI/IconTG/IconTG'
import IconVK from '../../../../shared/UI/IconVK/IconVK'
import cls from './HeaderSocial.module.css'


export const HeaderSocial = () => {
  return (
    <div className={cls.social}>
        <CustomLink to='https://vk.com/lisooooooo'  className={cls.link}>
          <IconVK className={cls.icon} size={'28px'} />
        </CustomLink>
        <CustomLink to='https://t.me/sheverdin_mikhail'  className={cls.link}>
          <IconTG className={cls.icon} size={'22.61px'} />
        </CustomLink>
    </div>
  )
}
