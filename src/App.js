import React from 'react';
import './App.css';
import imageInSrc from './imageInSrc.jpg'


function App() {
  return (
    <div >
          <div style={{border: "solid 1px black" , maxWidth: "100vw"}}>  
          
          <h1 class="title red">Your name here</h1>  

                <img src={imageInSrc} alt="image1"/>
                <br/>

                <img src="/imageInPublic.jpg" alt="image1"/>  
                <br/>
          </div>  
          <video width={320} height={240} controls>  
            <source src="myVideo.mp4" type="video/mp4" /> 
          </video> 
    </div>
  );
}

export default App;
