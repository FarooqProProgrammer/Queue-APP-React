import React,{useState} from 'react'
import './index.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Modal,Input } from 'antd';
import { GoogleAuthProvider,getAuth ,signInWithPopup} from "firebase/auth";
import {  FacebookAuthProvider,GithubAuthProvider  } from "firebase/auth";
import app from '../../config/Firebase';
import { doc, getFirestore, setDoc} from "firebase/firestore"; 
import { async } from '@firebase/util';



function Header() {
  console.log("Pakistan");
  const [name,setName] = useState(false)

  const [user_name,setUserName] = useState()
  const [user_Photo,setUserPhoto] = useState()
  

  const auth  = getAuth(app)
  const db = getFirestore(app)
  const provider = new GoogleAuthProvider();
  const provider_fb = new FacebookAuthProvider();
  const provider_gb = new GithubAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');




  // =================== Account Info ===========================

  // async function getInfo(name){
  //   const docRef = doc(db, "Users", name);
  //   const docSnap = await getDoc(docRef);
    
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }




  const Gb = ()=>{
    signInWithPopup(auth, provider_gb)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(credential);
    // The signed-in user info.
    const user = result.user;
    // console.log(user);
   

    const email = user.email
    const photoUrl = user.photoURL
    const id = user.uid

    const Name = user.reloadUserInfo.screenName
    setUserName(Name)
    setUserPhoto(photoUrl)

    console.log(email);
    console.log(photoUrl);
    console.log(id);
    console.log(Name);

    AddInfo(Name,id,email,photoUrl)
    setName(true)

  
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  }



  async function   AddInfo(Name,id,email,photoUrl){
    await setDoc(doc(db, "Users", Name), {
      name: Name,
      id: id,
      email: email,
      PhotoLink:photoUrl
    });
  }





  const fb = ()=>{
    signInWithPopup(auth, provider_fb)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
  }


  const GoogleLogin = ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  // ======================= Use State ======================================
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



  return (
    <>
    <Navbar  expand="lg" className='bg-[#3498db]'>
      <Container>
        <Navbar.Brand href="#home" className='text-[25px] font-black text-white'>Queue App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className=''>
          <Nav className="me-auto ">
            <Nav.Link href="#home" className='text-[20px] font-black text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-[20px] font-black text-white'>Link</Nav.Link>
           
          </Nav>
         {
          name == false ? <Button variant="primary" onClick={showModal} >Login</Button>:
          <>
          <div className="image w-[60px] h-[60px] border-2 border-black rounded-full">
            <img className='w-full h-full rounded-full' src={user_Photo} alt="" />

          </div>
          <p><span>{user_name}</span></p>
          </>
          }

          
        </Navbar.Collapse>
      </Container>
    </Navbar>



    <Modal title="Basic Modal" className='flex flex-col justify-around items-center' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="w-[400px] h-[300px] flex flex-col justify-around items-center">
        <Input placeholder='Enter Email' className='w-[200px]' />
        <Input placeholder='Enter Password' className='w-[200px]' />
        <Button variant="primary" >Login</Button>



        <Button className='w-full' onClick={GoogleLogin}>Login With Google</Button>
        <Button className='w-full' onClick={fb}>Login With Facebook</Button>
        <Button className='w-full' onClick={Gb}>Login With Github</Button>
        
        
        </div>

      </Modal>
        
    </>
  )
}

export default Header