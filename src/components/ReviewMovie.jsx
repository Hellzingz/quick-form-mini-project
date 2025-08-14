import React from 'react'

function ReviewMovie({review,setReview}) {
  return (
    <div>
        <textarea 
        name="review" 
        value={review}
        onChange={e=>setReview(e.target.value)}
        rows={5}
        cols={50}/>
    </div>
  )
}

export default ReviewMovie