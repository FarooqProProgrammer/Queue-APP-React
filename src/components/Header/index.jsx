import React,{useState} from 'react'
import './index.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Modal,Input } from 'antd';
import { GoogleAuthProvider,getAuth ,signInWithPopup} from "firebase/auth";
import app from '../../config/Firebase';

function Header() {

  const auth  = getAuth(app)
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');



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
        <Navbar.Brand href="#home" className='text-[25px] font-black text-white'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className=''>
          <Nav className="me-auto ">
            <Nav.Link href="#home" className='text-[20px] font-black text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-[20px] font-black text-white'>Link</Nav.Link>
           
          </Nav>
          <Button variant="primary" onClick={showModal} >Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    <Modal title="Basic Modal" className='flex flex-col justify-around items-center' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="w-[400px] h-[300px] flex flex-col justify-around items-center">
        <Input placeholder='Enter Email' className='w-[200px]' />
        <Input placeholder='Enter Password' className='w-[200px]' />
        <Button variant="primary" >Login</Button>



        <Button className='w-full' onClick={GoogleLogin}>Login With Google</Button>
        <Button className='w-full'>Login With Facebook</Button>
        
        </div>

      </Modal>
        
    </>
  )
}

export default Header