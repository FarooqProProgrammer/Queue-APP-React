import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import app from '../config/Firebase'


function Tokenuser() {

    const db = getFirestore(app)

    const [data,setData] = useState();

    const results = async() =>{
        const q = query(collection(db, "Company"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log({id:doc.id,... doc.data()});
        });
    }


    useEffect(()=>{
        results()
    },[])


  return (
    <div>
        <Header/>


        <div className="container-fluid h-screen border-2 border-black flex flex-col justify-around items-center">



            <div className="companies w-[90%] h-[80px] border-2 border-black flex justify-around items-center">
                
            </div>



        </div>




    </div>
  )
}

export default Tokenuser