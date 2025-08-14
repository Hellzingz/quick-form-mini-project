
export default function validation( { name, email , selectedTitle } ){
    const noValid = {}
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!name){
        noValid.name = "โปรดใส่ชื่อของคุณ"
    }
    if(!email){
        noValid.email = "โปรดใส่อีเมลของคุณ"
    }else if(!regex.test(email)){
        noValid.email = "รูปแบบอีเมลไม่ถูกต้อง"
    }
    if(!selectedTitle){
        noValid.selectedTitle = "กรุณาเลือกหนังที่คุณชอบ"
    }
    return noValid;
    
}