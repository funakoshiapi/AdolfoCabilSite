import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const NavBar = () => {

  const [nav, setNav] = useState(false);
  
  const links = [
      {
        id:1,
        link: 'introdução',
        href: 'introdução'
      },
      {
        id:2,
        link: 'educação',
        href: 'educação'
      },
      {
        id:3,
        link: 'biografia',
        href: 'biografia'
      },

      {
        id:4,
        link: 'contacto',
        href: 'biografia'
      }
    ];
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black  fixed z-50 '>
      <Link to={'introdução'} smooth duration={500}>
          <button>
            <h1 className='text-lg font-signature ml-2 md:text-5xl'>Adolfo Cabeia</h1>
          </button>   
      </Link>

      <ul className='hidden md:flex'>

        {links.map(({id, link}) =>(

            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
           
           <a href='https://drive.google.com/drive/folders/1xlwLp3HG3uzULqvBl2mrSAZ1ybiAKnMG?usp=sharing' target="_blank" rel="noreferrer noopener"> recursos académicos </a>
           </li>
      </ul>

      <div onClick={()=> setNav(!nav)} 
          className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (

        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden'>
        {links.map(({id, link}) =>(

          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200'>
            {link}
          </li>
        ))}
        <li className='px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200'> recursos académicos </li>
        </ul>
      )}    




    </div>
  )
}

export default NavBar