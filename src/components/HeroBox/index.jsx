import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HeroBox = () => {
  // const navigate = useNavigate();
  const Theme = useSelector(state => state.ThemeReducer.theme)
  // console.log(Theme);
  return (




    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ${Theme === "#fff" ? "text-[#000]" : "text-[#fff]"}`}>It is best Complete Queue App
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className={`mb-8 leading-relaxed font-black ml-10 mt-4 text-2xl ${Theme === "#fff" ? "text-[#000]" : "text-[#fff]"}`}>Very Comfort App </p>
      <div className="flex justify-center">
        {/* <Link to="/Admin" className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${Theme === "#fff" ? "text-[#000]" : "text-[#fff]"} no-underline`}>Company</Link>
        <Link to="/User"  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg " style={{textDecoration:"none"}}>Token</Link>
       */}
       {/* <p className='text-3xl font-black ml-4 cursor-pointer'> Login To continue</p> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/991877470/photo/business-people-standing-in-queue-at-airport.jpg?s=612x612&w=0&k=20&c=dBtHFz6PrbssH6qJFLv7m9sFwfPNTMf7C5HGIBM1dk0="/>
    </div>
  </div>
</section>
  )
}

export default HeroBox