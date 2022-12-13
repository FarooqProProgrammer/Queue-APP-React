import { doc, getDoc, getFirestore, startAfter } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams ,Link } from 'react-router-dom'
import Header from '../components/Header'
import app from '../config/Firebase';




function Tokens() {

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




  return (
    <div>
      <Header/>



        <div className="container-fluid w-[80%] h-[70px] border-2 border-black flex justify-around items-center">
                <p className='text-2xl font-black'>Generate Tokens For Today</p>
                <Link className='btn btn-primary'>Generate Token</Link>
        </div>






      <div className="cards w-full h-[500px] border-2 border-black grid grid-rows-1 grid-cols-2 place-items-center">


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
    


      </div>
    </div>
  )
}

export default Tokens
