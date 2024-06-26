import React from 'react'
import "../Styles/Navigation.css"

const NavigationBar = () => {
  return (
    <div>
        <nav>
      <div className="home-link" href="index.html">
        <h2 className='logo'>RoadMap</h2>
        </div> 

    <div className='sidebar'>
    <input type="checkbox" id="sidebar-active"/>
    <label for="sidebar-active" className="open-sidebar-button">
      {/* <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> */}
    </label>
    <label id="overlay" for="sidebar-active"></label>
    <div className="links-container">
      <label for="sidebar-active" className="close-sidebar-button">
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> */}
      </label>

      {/* <!-- NOT IN TUTORIAL: The <a> tags are linked to the subpages --> */}
      {/* <a className="home-link" href="index.html">Home</a>  */}
      <a href="about.html">About</a> 
      <a href="products.html">Products</a>
      <a href="blog.html">Blog</a>
      <a href="login.html">Login</a>
      
    </div>
    </div>
  </nav>
    </div>
  )
}

export default NavigationBar