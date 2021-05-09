import React from 'react'


export const Nav = () => {
    return (
        <>
            <nav className=' nav-bar'>
                <ul className='nav'>
                    <a href='#Home'><li className='nav-link animate__animated animate__zoomIn animate__delay-.4s'>Home</li></a>
                    <a href='#Skills'><li className='nav-link animate__animated animate__zoomIn animate__delay-.8s'>Skils</li></a>
                    <a href='#Portfolio'><li className='nav-link animate__animated animate__zoomIn animate__delay-1.2s'>Portfolio</li></a>
                    <a href='#About'><li className='nav-link animate__animated animate__zoomIn animate__delay-1.6s'>About</li></a>
                    <a href='#Contacto'><li className='nav-link animate__animated animate__zoomIn animate__delay-2.4s'>Contacto</li></a>
                    {/* <a href='./cv.pdf' download ><li className='nav-link btn btn-primary-outline'>Bajar CV</li></a> */}

                </ul>




                
            </nav>
        </>
    )
}
export default Nav;