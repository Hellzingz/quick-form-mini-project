import UserForm from "./components/UserForm"
import MovieList from "./components/MovieList"
import validation from "../src/utils/vadidation"
import ReviewMovie from "./components/ReviewMovie"
import Button from "./components/common/Button"
import DisplayInfo from "./components/DisplayInfo"
import { useState } from "react"


function App() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [error,setError] =useState({})
    const [selectedTitle, setSelectedTitle] = useState("")
    const [submitted,setSubmitted] = useState(false)
    const [review,setReview] = useState("")
    const [userData,setUserData] = useState({})
    const [display,setDisplay] = useState(false)


    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true)
        const errors = validation({ name, email ,selectedTitle,submitted });
        setError(errors);
        if (Object.keys(errors).length !== 0) return;
    
            const  userData = { name: name, 
                          email: email, 
                          favorite : selectedTitle,
                          review : review}
        
        setUserData(userData)
        setName("");
        setEmail("");
        setSelectedTitle("");     
        setReview("");
        setError({});
        setSubmitted(false);
        setDisplay(true);
    }

    function handleReset(){
      setName("");
      setEmail("");
      setSelectedTitle("");
      setReview("");
      setError({});
      setSubmitted(false);
    }

  return (
    <div className="container mx-auto flex flex-col items-center">
      {!display && <div className="flex justify-center">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-[500px] rounded-md shadow-xl p-10">
          <UserForm 
          name = {name}
          email = {email}
          setName = {setName}
          setEmail = {setEmail}
          error = {error}
          />
          <MovieList
          selectedTitle={selectedTitle}
          setSelectedTitle = {setSelectedTitle}
          error={error}/>
          <ReviewMovie
          review = {review}
          setReview = {setReview}/>
          <div className="flex justify-center gap-2 mt-5">
            <Button text="Submit" type="submit" />
            <Button text="Reset" type="reset" onClick={handleReset} />
          </div>
        </form>
      </div>
      </div>}
      {display &&
      <DisplayInfo userData={userData} setDisplay={setDisplay}/>}
    </div>
  )
}

export default App
