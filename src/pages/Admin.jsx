import React, { useEffect } from 'react'
import Header from '../components/Header'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import { Button,Input, Modal ,Space} from 'antd';
import { useState } from 'react';

import app from '../config/Firebase';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref ,uploadBytes,getDownloadURL,uploadBytesResumable } from "firebase/storage";
import Companies from '../components/All Companies/Companies';
import { Country, State, City }  from 'country-state-city';
import { AudioOutlined } from '@ant-design/icons';
import { getAuth } from 'firebase/auth';
function Admin() {

    const storage = getStorage(app)
    const db = getFirestore(app)
    const auth = getAuth(app)

    const user = auth.currentUser;
    console.log(user);

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
      // console.log(company_name);
      // console.log(company_year);
      // console.log(stTime);
      // console.log(edTime);

      //  let url = uploadImage(img)
      
      // console.log(url);


      const docRef = await addDoc(collection(db, "Company"), {
        user:user.uid,
        Company_Name: company_name,
        StartingYear:company_year,
        Start_timing:stTime,
        End_Time:edTime,
        Country:country_name,
        Time:Date.now()
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
  const [country,setCountry] = useState([])    
useEffect(()=>{
      
      // console.log(Country.getAllCountries())
      setCountry(Country.getAllCountries())
      console.log(State.getAllStates())
    },[])


    const { Search } = Input;
    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );
    const success = (country) => {
      Modal.success({
        content: `${country} is Founded Successfully`,
      });
    };


    const [country_name,setCountryName] = useState()
    const onSearch = (value)=>{
      setCountryName(value)
        let flag = false
        for(let i =0;i<country.length;i++){
            if(country[i].name === value){
              // console.log(i);
                console.log(country[i].name);
                success(country[i].name)
            }
            flag = true
        }


      console.log("Search");
    }

    const [img,setImage] = useState(null);
    const [url,setUrl] = useState();

    const handleChange = (e)=>{
        setImage(e.target.files[0])
       
    }


 
    async function uploadImage(image){
        
          const imageRef = ref(storage,`images/${image.name}`)
         const snapshot = await uploadBytes(imageRef,img).then(()=>{
            alert("Upload Successully")
          })

          getDownloadURL(snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
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
                        <Input type='file' onChange={handleChange} />
                        <Input onChange={start_timing} placeholder='Enter Start Timing'/>
                        <Input onChange={End_Time} placeholder='Enter Close Timing'/>
                        <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />

                        <Button onClick={
                          SubmitInfo
                          // uploadImage
                          }>Submit Information</Button>

            </div>
        </Modal>
    </div>
  )
}

export default Admin