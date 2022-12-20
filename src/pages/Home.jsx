import React ,{useState} from 'react'
import { Header } from './AdminConfig'
import { HeroBox,Footer } from './HomeConfig'
import moment from "moment"

console.log(moment().format('LTS'))


function Home() {

 
  
  return (
    <div>
        <Header />
        <HeroBox/>
        <Footer/>
    </div>
  )
}

export default Home