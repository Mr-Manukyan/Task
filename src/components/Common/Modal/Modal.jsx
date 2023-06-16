import React from "react"
import style from "./Modal.module.css"
import { motion } from "framer-motion"
import backIcon from '../../../assets/icons/arrow1.png'


export const Modal = React.memo(({ children, setIsShow, zIndex = 1 }) => {

  return (


    <div className={style.modalContainer} style={{ zIndex }}>

      <motion.div
        className={style.body}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: .3 }}
      >
        <img src={backIcon}
          alt='backIcon'
          className={style.backIcon}
          onClick={() => setIsShow(false)}
        />

        {children}

      </motion.div>
    </div>

  )
})
