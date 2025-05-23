import React from 'react'
import style from './headline.module.scss'

type Headlines = {
    title: string
}

export default function Headlines(props: Headlines) {
  return (
    <div className={style.container}>
        <div className={style.headline}>
          <h1>{props.title}</h1>
          <span className={style.border}></span>
        </div>
    </div>
  )
}
