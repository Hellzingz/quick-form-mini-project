
export default function validation( { name, email } ){
    const noValid = {}
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!name){
        noValid.name = "Name is require."
    }
    if(!email){
        noValid.email = "Email is require"
    }else if(!regex.test(email)){
        noValid.email = "Email is not valid"
    }
    return noValid;
    
}