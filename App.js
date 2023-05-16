import React, { Component } from 'react';
import './App.css';
import  './profil';
import Image  from './0044.jpg';
import NavBar from './NavBar';


import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
    let firstname ="Eya Laaribi"

    let age= 60
    let adresse="eiia.aariibii@gmail.com"

    return (

<div className="App">
    
    


<p>{firstname}</p>
<p>{adresse}</p>
<p>{age}</p>
        
<img  id='img'src={Image}/>


        
        
        
</div>
    );
}


export default App ;



