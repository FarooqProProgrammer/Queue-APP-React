import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, getFirestore, where } from "firebase/firestore";
import app from '../../config/Firebase';
import { Link } from 'react-router-dom';
import { getAuth,onAuthStateChanged } from 'firebase/auth';

const Companies = () => {

  const db = getFirestore(app)
  const auth = getAuth(app)
  
  const [Companies,setCompanies ] = useState([])
  //console.log(Companies);
  //console.log(typeof(Companies));


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // //console.log(uid);
        //console.log(user);
        localStorage.setItem("uid",JSON.stringify(user.uid))
    
      } else {
      }
    });

    data()
  },[])

  // ,where("user","==",auth.currentUser.uid)

  function data (){
    const uid = JSON.parse(localStorage.getItem("uid"))
    const q = query(collection(db, "Company"),where("user","==",uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
          cities.push({id:doc.id,...doc.data()});
          setCompanies(cities)
      });
      //console.log(Companies);
    });
  }

  return (
    <div className='container h-[auto] border-2 border-black'>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Company_Name</th>
      <th scope="col">Start_timing</th>
      <th scope="col">End_Time</th>
      <th scope='col'>StartingYear</th>
      <th scope='col'>View</th>
    </tr>
  </thead>
  <tbody>
  {Companies.map((item)=>{

    return (
            <tr>
              <td>{item.Company_Name}</td>
              <td>{item.Start_timing}</td>
              <td>{item.End_Time}</td>
              <td>{item.StartingYear}</td>
              <td><Link to={`/Token/${item.id}`} className="btn btn-primary">Tokens</Link></td>
            </tr>
    )
  })}
  </tbody>
</table>

    </div>
  )
}

export default Companies