import React from 'react'
import style from './MenuItems.module.css'
import { Item } from './Item/Item'
import { menuData } from './menuData'


export const MenuItems = React.memo(({ sidebar }) => {
    const [width, setWidth] = React.useState('')
    const [left, setLeft] = React.useState('')
    const indicator = (e) => {
        setLeft(e.target.offsetLeft + 'px');
        setWidth(e.target.offsetWidth + 'px');
    }

    return (
        <ul className={sidebar ? `${style.navMenu} ${style.active}` : style.navMenu}>
            {menuData.map((item, index) => {

                return <Item key={index}
                    menuItem={item}
                    indicator={indicator}
                />
            })}
            <div className={style.indicator} style={{ width, left }}></div>
        </ul>
    )
})



