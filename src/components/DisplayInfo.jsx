import React from 'react'
import Button from './common/Button';

function DisplayInfo({ userData,setDisplay }) {

  
    return (
      <div className="flex flex-col w-[500px] rounded-md shadow-xl mt-5 p-10">
        <h2 className='text-2xl mb-5'>User Information</h2>
        <p><span className='font-bold text-gray-700'>Name : </span>{userData.name}</p>
        <p><span className='font-bold text-gray-700'>Email : </span>{userData.email}</p>
        <p><span className='font-bold text-gray-700'>Favorite : </span>{userData.favorite}</p>
        {userData.review && <p><span className='font-bold text-gray-700'>Review : </span>{userData.review}</p>}
        <Button text="Back" onClick={e=>setDisplay(false)}className='mt-5'/>
      </div>
    );
  }

export default DisplayInfo