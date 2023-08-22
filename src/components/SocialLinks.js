import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'

function SocialLinks() {

    const links =[
        {
            id:1,
            child: (
                <>
                   <FaLinkedin size={30}/> Linkedin 
                </>
            ),
            href: 'https://www.linkedin.com/in/adolfo-caiji-cabeia-84a176112/',
            style: 'rounded-tl-md'
        },
        {
            id:2,
            child: (
                <>
                 < HiOutlineMail size={30}/>Email   
                </>
            ),
            href: 'mailto:foo@gmail.com',
            style: 'rounded-tl-md'
        },
        {
            id:3,
            child: (
                <>
                   <BsFacebook size={30}/> Facebook 
                </>
            ),
            href: 'https://www.facebook.com/adolfo.cabeia',
            style: 'rounded-bl-md',
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[45%] -right-24 fixed z-50'>
        <ul>
            {links.map(({id, child, href, style}) => (
                <li key={id} 
                    className={`flex justify-between items-center w-40 h-14 px-4 ml-[100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300  ${style}`}>
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