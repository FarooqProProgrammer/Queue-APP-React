import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const HeroBox = () => {
  // const navigate = useNavigate();
  return (
    // <div className='w-full h-[500px] border-2 border-black grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center	'>
                
    //             <div className="IMG w-[500px] h-[400px] border-2 border-black ">
    //                     <img className='w-full h-full' src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
    //             </div>

    //             <div class="btn-group" role="group" aria-label="Basic example">
    //             <Link to="/Admin" type="button" class="btn btn-primary" >Are You Company</Link>
    //             <Link to="/User" type="button" class="btn btn-primary">Are You Finding a Token</Link>
    //             </div>
        
    // </div>



    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <Link to="/Admin" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg  " style={{textDecoration:"none"}}>Company</Link>
        <Link to="/User"  class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg " style={{textDecoration:"none"}}>Token</Link>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
    </div>
  </div>
</section>
  )
}

export default HeroBox