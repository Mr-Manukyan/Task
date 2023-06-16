import React from 'react'
import style from './Pagination.module.css'



export const Pagination = ({ portionSize = 3, portionNumber, setPortionNumber,
  pageSize, totalItemsCount, currentPage, onPageChanged
}) => {



  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  const minusPortionNumber = () => {
    setPortionNumber(portionNumber - 1)
  }

  const plusPortionNumber = () => {
    setPortionNumber(portionNumber + 1)
  }

  const setPageChanged = (p) => {
    onPageChanged(p)
  }


  return (
    <div className={style.buttonPageWrapper}>
      {portionNumber > 1 &&
        <button onClick={minusPortionNumber} className={style.prev}>
          {'<<<'}
        </button>}
      {
        pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
            return (
              <button className={currentPage === p ? style.buttonCurrentPage : style.buttonPage}
                onClick={() => { setPageChanged(p) }} key={p}>{p}
              </button>
            )
          })

      }
      {portionCount > portionNumber &&
        <button onClick={plusPortionNumber} className={style.next}>
          {'>>>'}
        </button>
      }
    </div>
  )
}






