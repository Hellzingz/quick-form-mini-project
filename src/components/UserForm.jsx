import React, { useState } from 'react'
import validation from '../utils/vadidation'

function UserForm() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [error,setError] =useState({})


    function handleSubmit(e) {
        e.preventDefault();
        const errors = validation({ name, email });
        setError(errors);
        if (Object.keys(errors).length !== 0) return;
    
        const userData = { Name: name, Email: email };
        alert(JSON.stringify(userData));
        setName("");
        setEmail("");
    }

  return (
    <>
        <section className='container mx-auto p-5 flex justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-[300px] px-4 py-5 rounded-md border-1'>
                <h1 className='text-2xl text-center'>User Information</h1>
                <label htmlFor="">Name :
                    <input 
                    type="text"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                     />
                </label>
                {error.name && <>{error.name}</>}
                <label htmlFor="">Email :
                    <input
                    value={email}
                    onChange={e=>setEmail(e.target.value)} 
                    type="text" />
                </label>
                {error.email && <>{error.email}</>}
                <button>Submit</button>
            </form>
        </section>
    </>
  )
}

export default UserForm