import React from 'react'

function ReviewMovie({review,setReview}) {
  return (
    <>
        <h3 className='text-xl text-center mt-5 mb-2'>Review</h3>
        <textarea
        className='shadow-xl bg-gray-100 rounded-xl' 
        name="review" 
        value={review}
        onChange={e=>setReview(e.target.value)}
        rows={5}
        cols={50}/>
    </>
  )
}

export default ReviewMovie