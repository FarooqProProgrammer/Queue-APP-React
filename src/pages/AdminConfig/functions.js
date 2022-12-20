import {
    addDoc ,
    collection,
    getFirestore
    ,app 
} from "./index"
import {Modal} from "antd"
const db = getFirestore(app)
const SubmitInfo =async (user,company_name,company_year,stTime,edTime,country_name)=>{
   

    const docRef = await addDoc(collection(db, "Company"), {
      user:user.uid,
      Company_Name: company_name,
      StartingYear:company_year,
      Start_timing:stTime,
      End_Time:edTime,
      Country:country_name,
      Time:Date.now()
    });
    //console.log("Document written with ID: ", docRef.id);
  }


  const success = (country) => {
    Modal.success({
      content: `${country} is Founded Successfully`,
    });
  };
export {
    SubmitInfo ,
    success
}