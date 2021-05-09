import React from 'react'

export const BurguerNav = () => {
    return (
        <>

             <nav className='navbar'>

                <a href='#' className='toggle-button'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>

                </a>
                <div className='navbar-links'>
                    <ul>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#Skills'>Skils</a></li>
                        <li><a href='#Portfolio'>Portfolio</a></li>
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Contacto'>Contacto</a></li>
                    </ul>

                </div>

            </nav> 



        </>
    )
}
export default BurguerNav;