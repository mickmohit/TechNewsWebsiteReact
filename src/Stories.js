import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from './context'

const Stories = () => {


    const {hits,nbPages,isLoading, removePost}= useContext(AppContext);

    if(isLoading){
        return (
            <>
             <h1>Loading...</h1>
            </>
        );
    }
   

  return (
    <>
      <div className='stories-div'>
      {hits.map( (currEle) => {

        const {title, author, objectID, url, num_comments} = currEle;

          return(
       
          
           <div className="card" key={objectID}>
            <h2>{ title }</h2> 
            <p> By  <span>{author}</span> | <span>{num_comments}</span> comments </p> 
             <div className="card-button">
                 <a href={url} target="_blank">Read More</a>
                 <a href="#" onClick={() => removePost(objectID)}>Remove</a>
             </div> 
            </div> 
           
          
          );
      })}
      </div>
    </>
  )
}

export default Stories
