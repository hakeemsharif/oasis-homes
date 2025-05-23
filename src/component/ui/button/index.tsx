import React from 'react'
import style from './button.module.scss'
export default function ButtonContainer() {
  return (
    <div className={style.button_container}>
        <button className={style.button}>Load More</button>
    </div>
  )
}
