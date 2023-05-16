import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './0044.jpg';
import NavBar from './NavBar' ; 
import 'bootstrap/dist/css/bootstrap.min.css';


function profil () {
    let firstname ="Eya Laaribi"

    let age= 60
    let adresse="eiia.aariibii@gmail.com"

    return (

<div className="profil">
    
    


<p>{firstname}</p>
<p>{age}</p>
<p>{adresse}</p>
        
<img  id='img'src={Image}/>


        
        
        
</div>
    );
}


export default profil;

