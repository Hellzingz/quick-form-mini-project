
import AlertText from "./Tag/AlertText"
function UserForm({name,email,setName,setEmail,submitted,error}) {


  return (
    <>
        <section className='flex flex-col gap-2'>
                <h1 className='text-2xl text-center'>User Information</h1>
                <label htmlFor="name">Name :
                    <input
                    className="px-2 py-1 rounded-sm border-2 ml-4" 
                    type="text"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                     />
                </label>
                {error.name && !submitted && <AlertText>{error.name}</AlertText>}
                <label htmlFor="email">Email :
                    <input
                    className="px-2 py-1 rounded-sm border-2 ml-4" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)} 
                    type="text" />
                </label>
                {error.email && !submitted && <AlertText>{error.email}</AlertText>}
        </section>
    </>
  )
}

export default UserForm