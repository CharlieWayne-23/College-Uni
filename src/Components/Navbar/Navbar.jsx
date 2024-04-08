import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
// nav darkChangeStates
    const [sticky, setSticky] = useState(false);

// This function runs only ones when the page is loaded
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    },[])

// Responsiveness for mobile togglling menu
const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

  return (
    <nav className={`container ${sticky ? 'dark-nav' : '' } `}>
        <img src={logo} alt=''className='logo'/>
        
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li>
                <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link>
            </li>
        </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar

// sicky becomes false by default
// when we scroll down we activate the dark nav darkstyles using the setSticky func



//The function in  useEffect function is ran only ones when the component is loaded
// When we scroll that function will be executed
// window scrollY will provide the value of the scroll position from the top.
// if greater than 50 sticky will be true and if less < 50 sticky will be false

// its is the passed in the nav as a style prop in conditional statements


// Link to uses the react scroll features to target specific scroll links and pages on one page .....214min