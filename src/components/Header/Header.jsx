import { MenuItems } from './MenuItems/MenuItems'
import taskIcon from '../../assets/icons/taskIcon.png'
import style from './Header.module.css'


export const Header = () => {

    return (

        <div className={style.container}>
            <div className={style.iconWrapper}>
                <img src={taskIcon} alt='taskIcon' className={style.taskIcon} />
            </div>
            <MenuItems />

            {/* 
            <div className={style.createUserButtonWrapper} onClick={() => setIsShowCreateUserModal(true)}>
                <img src={createUserIcon} className={style.createUserIcon} alt='taskIcon' />
            </div> */}
        </div>
    )
}

