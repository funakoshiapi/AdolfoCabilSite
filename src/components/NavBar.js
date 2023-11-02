import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const NavBar = () => {

  const [nav, setNav] = useState(false);
  
  const links = [
      {
        id:1,
        link: 'breve apresentação',
        href: 'introdução'
      },
      {
        id:2,
        link: 'habilitações',
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
        href: 'contacto'
      }
    ];
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-blue-950 fixed z-50'>
      <Link to={'introdução'} smooth duration={500}>
          <button className='flex h-full'>
            <h1 className='text-2xl font-signature ml-2 md:text-3xl lg:text-5xl'>Adolfo Cabeia</h1>
          </button>   
      </Link>

      <ul className='hidden md:flex'>

        {links.map(({id, link, href}) =>(

            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
              <Link to={href} smooth duration={500}>{link}</Link>
            </li>
        ))}
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
           
           <a href='https://drive.google.com/drive/folders/1IT5M561YcLLwfALKDXgIQmRDI0NrfjgF?usp=sharing' target="_blank" rel="noreferrer noopener"> recursos académicos </a>
           </li>
      </ul>

      <div onClick={()=> setNav(!nav)} 
          className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (

        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b
        from-blue-950 via-blue-900 to-blue-900 text-gray-300 md:hidden'>
        {links.map(({id, link, href}) =>(

          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200'>
            <Link to={href} onClick={()=> setNav(!nav)}>{link}</Link>
          </li>
        ))}
        <li className='px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200'> 
            <a href='https://drive.google.com/drive/folders/1sErUykZa5UtqPPN4v12WNnjC8DeQrhx3?usp=drive_link' target="_blank" rel="noreferrer noopener"> recursos académicos </a>
         </li>
        </ul>
      )}    



    </div>
  )
}

export default NavBar