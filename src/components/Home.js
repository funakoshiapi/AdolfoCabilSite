import React from 'react'
import HeroImage from '../assets/photo-12.jpeg'
import { FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'
function Home() {
  return (
   
        <div name="introdução" className='flex justify-center items-start h-full w-full bg-gradient-to-b
        from-blue-950 via-blue-900 to-blue-900'>
            <div className='h-full max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row pt-14'>
                <div className='h-screen flex flex-col justify-center md:mr-4 ' >
                    <h2 className='text-white text-2xl md:text-7xl font-bold mt-12'>
                        Olá! Bem-Vindo
                    </h2>
                    <p className='text-sm text-gray-300 py-4 w-full md:text-lg'>
                    Adolfo Cabeia é docente na Faculdade de Economia e no ISPLS da ULAN, co-fundador da Jofaz & AC. Cabeia, Lda, um dos mais proeminentes escritórios no ramo de contabilidade nas províncias de Luanda, Lunda-Norte e Lunda-Sul. Sob sua liderança, o escritório firma contratos com empresas públicas e privadas. Ele lidera a implementação de um escritório de auditoria na cidade de Luanda, a capital, e tem como ambição torná-lo, em um prazo de cinco anos, um dos melhores no ramo de auditoria em Angola. Além disso, o projeto inclui a criação de um Centro de Formação Profissional para capacitar os jovens em atuação, permitindo a formação de uma classe empreendedora com conhecimentos sólidos para enfrentar os desafios dos tempos atuais.                    </p>
                    <div>
                    <div className='lg:hidden flex justify-center items-center text-sm m-2 '>
                        <ul className='flex flex-row  text-white justify-center '>
                            <li className=' mr-5 text-align-middle'>
                            <a href='https://www.linkedin.com/in/adolfo-caiji-cabeia-84a176112/'> <FaLinkedin size={30}/></a> 
                            </li>
                    
                            <li className=' mr-5'>
                                <a href='mailto:foo@gmail.com'>
                                    <HiOutlineMail size={30}/>
                                </a>
                            </li>
                
                            <li className=' mr-5'>
                            <a href='https://www.facebook.com/adolfo.cabeia'> <BsFacebook size={30}/></a> 
                            </li>
                        </ul>
                    </div>
                </div>
                </div>


                <div className='flex mb-[20%] md:mb-0'>
                    <img src={HeroImage} 
                        alt="hero"
                        className='rounded-2xl mx-auto w-2/3 md:w-[300rem] object-fill'
                    />
                </div>
            </div>
            


        </div>
  )
}

export default Home
