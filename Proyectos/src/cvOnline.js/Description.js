import React from 'react';
import images from '../images.js';





export const Description = () => {

    

    return (
        <>
            <div  className='home'>
            <div className='row'>
                <div className='col-sm nombre '>
                    <h1 className='animate__animated animate__fadeIn animate__delay-1.2s'>Gianfranco Lofeudo,</h1>
                    <h3 className='animate__animated animate__fadeIn animate__delay-.8s'>Web Developer.</h3>
                </div>
                <div className='col-3 imagen  animate__fadeInDown'>
                    <img className=' imagen-conjunto animate__animated animate__fadeIn animate__delay-1.8s' src={images.img4} alt='CONJUNTO PC'/>
                </div>
            </div>
        </div> 
        </>
    )
}
export default Description;