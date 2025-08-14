import React from 'react'
import Button from './common/Button';

function DisplayInfo({ userData,setDisplay }) {

  
    return (
      <div className="flex flex-col w-[500px] rounded-md shadow-xl mt-5 p-10">
        <h2 className='text-2xl mb-5'>User Information</h2>
        <p><span className='font-bold text-gray-700'>Name : </span>{userData.name}</p>
        <p><span className='font-bold text-gray-700'>Email : </span>{userData.email}</p>
        <p><span className='font-bold text-gray-700'>Favorite : </span>{userData.favorite}</p>
        <p><span className='font-bold text-gray-700'>Review : </span>{userData.review}</p>
        <Button className text="Home" onClick={e=>setDisplay(false)}/>
      </div>
    );
  }

export default DisplayInfo