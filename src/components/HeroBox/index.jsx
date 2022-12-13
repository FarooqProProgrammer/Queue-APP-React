import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const HeroBox = () => {
  // const navigate = useNavigate();
  return (
    <div className='w-full h-[500px] border-2 border-black grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center	'>
                
                <div className="IMG w-[500px] h-[400px] border-2 border-black ">
                        <img className='w-full h-full' src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

                <div class="btn-group" role="group" aria-label="Basic example">
                <Link to="/Admin" type="button" class="btn btn-primary" >Are You Company</Link>
                <Link to="/Admin" type="button" class="btn btn-primary">Are You Finding a Token</Link>
                </div>
        
    </div>
  )
}

export default HeroBox