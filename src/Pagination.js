
import React, { useContext } from 'react'
import { AppContext } from './context'

export const Pagination = () => {

    const {page, nbPages,getPrevPage,getNextPage} = useContext(AppContext);
  return (
    <>
    <div className='pagination-btn'>
        <button onClick={() => getPrevPage()}>Prev</button>
        <p>{page+1} of {nbPages}</p>
        <button onClick={() => getNextPage()}>Next</button>
    </div>

    </>
  )
}
