import React from 'react'
import images from '../images.js';


export const Portfolio = () => {
    return (
        <>
        <div id='Portfolio' className='portfolio-container'>

            <div className='container-portfolio'>
                <p className='portfolio'>Portfolio</p>
            </div>

            <div className='container-portfolio-images'>
                <div className='card-container'></div>    
                <div className="cards card1">
                    <h5>Proyecto 1</h5>
                    <p>Pagina sobre un proyecto de prueba</p>
                </div>
                <div className="cards card2">
                    <h5>Proyecto 2</h5>
                    <p>Pagina sobre un proyecto de prueba</p>
                </div>
                <div className="cards card3">
                    <h5>Proyecto 3</h5>
                    <p>Pagina sobre un proyecto de prueba</p>
                </div>
                <div className="cards card4">
                    <h5>Proyecto 4</h5>
                    <p>Pagina sobre un proyecto de prueba</p>
                </div>  
        </div>    
    </div>

    </>
    )
}

export default Portfolio; 