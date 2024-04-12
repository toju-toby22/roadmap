import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div>
        <NavigationBar/>
       <div>
         <Body/>
       </div>

       <Footer/>
    </div>
  )
}

export default Homepage