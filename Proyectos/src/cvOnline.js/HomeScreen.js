import React from 'react';

import Nav from './Nav';
import Description from './Description.js';
import Skills from './Skills';
import Portfolio from './Portfolio.js';
import About from './About.js';
import Contacto from './Contacto.js';
import BurguerNav from './BurguerNav';



export const HomeScreen = () => {
    return (
        <>


<section id='Home' className='body-app'>

            <Nav/>
        
            <BurguerNav/>
            
            <Description/>

            <Skills/>

            <Portfolio/>

            <About/>

             <Contacto/>    

             
                            
            </section> 
           

        </>
    )
}
