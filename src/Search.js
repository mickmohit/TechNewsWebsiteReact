import React, { useContext } from 'react'
import { AppContext } from './context'

export const Search = () => {

    const {query, searchPost} = useContext(AppContext);

  return (
    <>
    <div>
      <h1 className='pagination-btn'>Tech New on the Go</h1>
      <form action=''>
       <div className='pagination-btn'>
            <input type="text" placeholder='search Here' value={query} 
                   onChange={(e)=> searchPost(e.target.value)}/>

       </div>

      </form>
    </div>
    </>
  )
}
