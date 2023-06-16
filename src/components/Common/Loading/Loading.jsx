import React from "react"
import style from './Loading.module.css'



export const Loading = () => {
  return (
    <div className={style.loadigWrapper}>
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}


