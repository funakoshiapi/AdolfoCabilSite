import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill, BsFacebook} from 'react-icons/bs'
import resume from '../assets/CV.pdf'

function SocialLinks() {

    const links =[
        {
            id:1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/adolfo-caiji-cabeia-84a176112/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                    Mail < HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:foo@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id:3,
            child: (
                <>
                    Facebook <BsFacebook size={30}/>
                </>
            ),
            href: 'https://www.facebook.com/adolfo.cabeia',
            style: 'rounded-br-md',
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style}) => (
                <li key={id} 
                    className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}>

                    
                    <a  href= {href}
                        className='flex justify-between items-center w-full text-white'
                        target='_black'
                        rel = "noreferrer"
                    >
                        
                       {child}
                        
                    </a>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default SocialLinks