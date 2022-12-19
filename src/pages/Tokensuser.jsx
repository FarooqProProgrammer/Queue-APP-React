import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import app from '../config/Firebase'
import { Link } from 'react-router-dom'


function Tokenuser() {

    const db = getFirestore(app)

    const [data,setData] = useState([]);

    const results = async() =>{
        const q = query(collection(db, "Company"));
        const data = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push({id:doc.id,... doc.data()})
        console.log({id:doc.id,... doc.data()});
        setData(data)
        });
    }


    useEffect(()=>{
        results()
    },[])


  return (
    <div>
        <Header/>


        <div className="container-fluid h-[auto]  border-2 border-black flex flex-col justify-around items-center">


            {   data.map((item)=>{
                return (
                    <div className="companies mt-10 w-[90%] h-[80px] border-2 border-black flex justify-around items-center">
                            <p className='text-2xl font-black '>{item.Company_Name}</p>
                            <p className='text-2xl font-black '>{item.Country}</p>
                            <Link to={`/Token/${item.id}`} className="btn btn-secondary">View</Link>
                    </div>
    
                )
            })
                
            }

        </div>




    </div>
  )
}

export default Tokenuser