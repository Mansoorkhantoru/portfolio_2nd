
import React, { useEffect, useState } from 'react';
import './App.css';
import pic from "./IMG-20241111-WA0109[2].png";
import calculator from "./WhatsApp Image 2024-11-12 at 01.06.26_bd0a7f66.jpg"
import paper from "./WhatsApp Image 2024-11-12 at 01.06.24_0aa9494b.jpg"
import wha from "./whatsapp.png"
function Order_button(){
  const [order , setbut] = useState();
  const remove = () => setbut(false);
  const but =()=>{
    const x = (
      <form action="" className='form-1'>
        <button onClick={remove} className='X'>X</button>
        <h5>NAME :</h5>
        <input type="text" placeholder='Eneter your name '/>
        <h5>EMAIL : </h5>
        <input type="email" placeholder='Eneter your Email'/>
        <h5>DISCRIPTION :</h5>
        <textarea name="description" rows={10} cols={30} id="" placeholder='Eneter Description for Website...'></textarea>
        <br />
        <button type="submit" className='sub'>SUBMIT</button>
      </form>
    );
    setbut(x);
  }
  return(
    <>
    <button onClick={but} className='order-butto'>ORDER NOW</button>
    <h4>{order}</h4>
    </>
  );
}
function Home(){
  const [content , setcon] = useState(false);
  useEffect(() =>{
    setcon(true);
  } , []);
  return(
    <>
    <h2 className={`container ${Home ? 'fade-in' : ''}`}>Hi! I'm Mansoor khan
Front-End Web Developer
Empowering your digital presence , I'm a Professional Web Developer dedicated to crafting robust and user-centric web solution.
<img src={pic} height={"300px"} alt='my pic'/>

 
</h2>
    </>
  );
}
function Services(){
  return(
    <>
    <div className="ser">
     
      <a href="https://shiny-pixie-1b3a85.netlify.app/"><img src={calculator} alt="" height={"300px"} />  </a>
      <a href="https://66e4989286a96873a65cdea6--splendorous-dolphin-0c19c3.netlify.app/"><img src={paper} height={"300px"} alt="" /></a> 
      {/* ROCK PAPER SCISSOR <br />GAME */}
    </div>
    </>
  );
}
function App(){
  const [side , setside] = useState("");
  const rem = () => setside(false);
  const sid = () =>{
    const x = (
      <div className="linkk">
        <div className="lo">
          <b><span >M</span>
          <span className='k'>K</span>
          </b>
        </div>
        <button onClick={rem} className='remo'>X</button>
        
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#services">SERVICES</a>
        <ul href="" className='contactt'><li>CONTACT 
        <div className="conn">
            <a href="">WHATSAPP</a>
            <a href="">LINKDIN</a>
          </div>
          </li>
        </ul>
      </div>
    )
    setside(x);
  }
  return( <>
    <nav>
      <div className="logo">
       <b>
       <span className='m'>M</span>
       <span className='k'>k</span>
       </b>
      </div>
      <div className="order-but">
        <Order_button/>
      </div>
      <div className="side_bar">
        <button onClick={sid}>___
          <br />
          ___
          <br />
          ___
        </button>
        <h4>
          {side}
        </h4>
      </div>
    
      <div className="link">
        
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#services">SERVICES</a>
        <ul href="" className='contact'>CONTACT 
        <div className="con">
            <a href="">WHATSAPP</a>
            <a href="">LINKDIN</a>
          </div>
        </ul>
      </div>
    </nav>
    <div id="home">
      <Home />
    </div>
    <div id="about">
      <h1>ABOUT ME</h1>
      <h4>Let's talk
ABOUT ME!
I have a strong background in web development, having worked in a 
front-end developer for several years . My skills include HTML, CSS, JavaScript .
 I am also familiar with popular framework such as Bootstrap.</h4>
    </div>
    <div id="skills">
      <h3>
      Frontend Development:
      </h3>
    <ul>
      <li>React.js</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li> Bootstrap</li>
      <li>JavaScript (ES6+)</li>
    </ul>

<h3>
Version Control:
</h3>
<ul><li>
GitHub</li>
</ul>
    </div>
    <div id="services">
    <h1>SERVICES</h1>
    <Services />
    </div>
    <div className="what">
      <a href="">
        <img src={wha} alt="" />
      </a>
    </div>
  </>);
}
export default App;