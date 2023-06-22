import React, { useState } from 'react'
import style from './SearchTaskByDate.module.css'
import { dateFormatter } from '../../../helpers/helpers'
import { AnimatePresence } from 'framer-motion'
import { ModalCalendar } from '../ModalCalendar/ModalCalendar'
import { MyCalendar } from '../Calendar/Calendar'
import calendarIcon from '../../../assets/icons/calendar-icon.png'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'


export const SearchTaskByDate = ({ searchTaskByDate }) => {

    const [isShowStartCalendar, setIsShowStartCalendar] = useState(false)
    const [isShowEndCalendar, setIsShowEndCalendar] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isShowDateInfoModal, setIsShowDateInfoModal] = useState(false)


    const setNewStartDate = (date) => {
        setStartDate(dateFormatter(date))
    }

    const setNewEndDate = (date) => {
        setEndDate(dateFormatter(date))
    }

    const searchByDate = () => {
        if (!startDate && !endDate) {
            setIsShowDateInfoModal(true)
        } else {
            searchTaskByDate(startDate, endDate)
            setStartDate('')
            setEndDate('')
        }




    }

    return (
        <div className={style.container}>
            <h3>Search By Date</h3>
            <AnimatePresence>
                {isShowStartCalendar &&
                    <ModalCalendar setIsShow={setIsShowStartCalendar} zIndex={2}>
                        <MyCalendar setIsShowCalendar={setIsShowStartCalendar} setNewDate={setNewStartDate} />
                    </ModalCalendar>
                }
                {isShowEndCalendar &&
                    <ModalCalendar setIsShow={setIsShowEndCalendar} zIndex={2}>
                        <MyCalendar setIsShowCalendar={setIsShowEndCalendar} setNewDate={setNewEndDate} />
                    </ModalCalendar>
                }
            </AnimatePresence>
            {

            }
            {
                isShowDateInfoModal &&
                <AnimatePresence>
                    <Modal setIsShow={setIsShowDateInfoModal}>
                        <p className={style.startInfo}>Please select Start and End date</p>
                    </Modal>
                </AnimatePresence>
            }
            <div className={style.calendarWrapper}>
                <div className={style.starDateCalendar}>
                    <p className={style.startDate}>Start Date</p>
                    <img src={calendarIcon}
                        className={style.calendar}
                        alt='calendarStart'
                        onClick={() => setIsShowStartCalendar(true)}
                    />
                    <p className={style.startDateText}>{startDate}</p>
                </div>
                <div className={style.endDateCalendar}>
                    <p className={style.endDate}>End Date</p>
                    <img src={calendarIcon}
                        className={style.calendar}
                        alt='calendarEnd'
                        onClick={() => setIsShowEndCalendar(true)}
                    />
                    <p className={style.endDateText}>{endDate}</p>
                </div>
                <Button buttonBlueStyle name='Search' callBack={searchByDate} />
            </div>
        </div>
    )
}
