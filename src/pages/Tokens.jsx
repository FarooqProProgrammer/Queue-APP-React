import { doc, getDoc, getFirestore, startAfter,collection,addDoc,setDoc,updateDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams ,Link } from 'react-router-dom'
import Header from '../components/Header'
import app from '../config/Firebase';
import {  Modal ,Input} from 'antd';



function Tokens() {
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




    const db = getFirestore(app)
    const [single,setSingle] = useState([]);

    const {id} = useParams();
    console.log(id);


    useEffect(()=>{
        getDsata()
    },[])

 async    function getDsata(){
        const docRef = doc(db, "Company", id);
        const docSnap = await getDoc(docRef);
        const d = []
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        d.push(docSnap.data())
        setSingle(d)
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }



    const [Total,setTotal] = useState();
    const [Start,setStart] = useState()




    //  ======================= Add Token Info ==============================
    
   async function AddToken(){
      const docRef = await setDoc(doc(db, `/Company/${id}/Tokens`, `Tokens${id}`), {
        TotalTokens: Total,
        start_token: Start
      });
      console.log("Document written with ID: ", docRef.id);  
    }


    useEffect(()=> {
        token()
    })


    const [tokess,setToken] = useState([])

    const token = async() =>{
      const docRef = doc(db, `/Company/${id}/Tokens/Tokens${id}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());
        setToken(docSnap.data())
      } else {
        
        console.log("No such document!");
      }


    }




    // =====================================================================================
    const [updateToken,setupdate] = useState(tokess.TotalTokens)
    const update = async() =>{
      
      console.log(tokess.TotalTokens);
      


      if(tokess.start_token === tokess.TotalTokens){}
    
      const washingtonRef = doc(db,  `/Company/${id}/Tokens/Tokens${id}`);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        TotalTokens:tokess.TotalTokens != tokess.start_token ? tokess.TotalTokens+1 :"Token is full"
      });


    }





  return (
    <div>
      <Header/>



        <div className="container-fluid w-[80%] h-[70px] border-2 border-black flex justify-around items-center">
                <p className='text-2xl font-black'>Generate Tokens For Today</p>
                <Button onClick={showModal} className='btn btn-primary'>Generate Token</Button>
                <Button>Reset</Button>
        </div>






      <div className="cards relative w-full h-[500px] border-2 border-black grid grid-rows-1 grid-cols-2 place-items-center">


      <div class="card" style={{width:"18rem"}}>
    <ul class="list-group list-group-flush">
        {single.map((item)=>{
            return (
                <>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Company Name: </span>  {item.Company_Name}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Opening Time: </span>  {item.Start_timing}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Ending Time:  </span> {item.End_Time}</li>
                <li class="list-group-item cursor-pointer"><span className='text-xl font-black'>Starting Year </span> {item.StartingYear}</li>
                </>
            )
        })}
       
    </ul>

  



    </div>
    



    
    <div class="w-[250px]  h-[150px] ">
    <Button className="w-full bt btn btn-primary " onClick={tokess.TotalTokens != tokess.start_token ?update:""}>Update Token</Button>
         <p className='text-4xl font-black text-center'>{tokess.TotalTokens != tokess.start_token ? tokess.TotalTokens :"Token is full"}</p>
    </div>


      </div>






      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <div className='w-[100%] h-[300px] border-2 border-black flex flex-col justify-around items-center'>
            <Input className='w-[80%]' onChange={(e)=> setTotal(e.target.value)} placeholder='Enter Daily Token Start Limit'/>
            <Input className='w-[80%]' onChange={(e)=> setStart(e.target.value)}  placeholder='Enter Daily Token Limit'/>
            <Button onClick={AddToken}>Generate</Button>
      </div>

      </Modal>
    </div>
  )
}

export default Tokens
