import React from 'react'
import Header from '../components/Header'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import { Button,Input, Modal } from 'antd';
import { useState } from 'react';
import app from '../config/Firebase';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref ,uploadBytes } from "firebase/storage";
import Companies from '../components/All Companies/Companies';

function Admin() {

    const storage = getStorage(app)
    const db = getFirestore(app)


// ===================================================================================================
    const [company_name,setCompanyName] = useState();
    const [company_year,setCompanyYear] = useState();
    const [stTime,setTiming] = useState()
    const [edTime,setEndTime] = useState()

    const Company_Name = (e)=>{
        setCompanyName(e.target.value)
        console.log(e.target.value);
    }
    const Company_year = (e)=>{
        setCompanyYear(e.target.value)
    }
    const start_timing = (e)=>{
        setTiming(e.target.value)
    }
    const End_Time = (e)=>{
        setEndTime(e.target.value)
    }


    const SubmitInfo =async ()=>{
      console.log(company_name);
      console.log(company_year);
      console.log(stTime);
      console.log(edTime);
      const docRef = await addDoc(collection(db, "Company"), {
        Company_Name: company_name,
        StartingYear:company_year,
        Start_timing:stTime,
        End_Time:edTime
      });
      console.log("Document written with ID: ", docRef.id);
    }


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);






    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

// =====================================================================================================

// ========================================================================================================
const handleChange = (e)=>{
    console.log(e.target.files[0]);
    const name = e.target.files[0].name
    console.log(name);
}


  return (
    <div>
        <Header/>


        <div className='container w-[80%] h-[100px] border-2 border-black mt-5 flex justify-around items-center' >
                <p className='text-[30px] font-black'>Add Your Company</p>
                <BsFillPlusSquareFill onClick={showModal} className='text-[30px] font-black cursor-pointer'/>
        </div>



      <Companies/>



{/* ================================================================================================ */}


        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className='w-full h-[400px] flex flex-col justify-around items-center'>

                        <Input onChange={Company_Name} placeholder='Enter Your Company Name' />
                        <Input onChange={Company_year} placeholder='Company Starting Year' />
                        {/* <Input type='file' onChange={handleChange}/> */}
                        <Input onChange={start_timing} placeholder='Enter Start Timing'/>
                        <Input onChange={End_Time} placeholder='Enter Close Timing'/>

                        <Button onClick={SubmitInfo}>Submit Information</Button>

            </div>
        </Modal>
    </div>
  )
}

export default Admin