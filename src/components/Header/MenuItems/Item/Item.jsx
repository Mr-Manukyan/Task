import React from 'react'
import style from './Item.module.css'
import { NavLink } from 'react-router-dom'


export const Item = React.memo(({ menuItem, indicator }) => {

    return (

        <li className={style.linkWrapper}>
            <NavLink to={menuItem.path}
                onMouseMove={indicator} data-text={menuItem.title}
                className={({ isActive }) => isActive ? style.activeLink : style[menuItem.cName]}
            >
                {menuItem.title}
            </NavLink>
        </li>
    )
})



