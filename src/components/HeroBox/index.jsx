import React from 'react'

const HeroBox = () => {
  return (
    <div className='w-full h-[500px] border-2 border-black grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center	'>
                
                <div className="IMG w-[500px] h-[400px] border-2 border-black ">

                </div>

                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Are You Company</button>
                <button type="button" class="btn btn-primary">Are You Finding a Token</button>
                </div>
        
    </div>
  )
}

export default HeroBox