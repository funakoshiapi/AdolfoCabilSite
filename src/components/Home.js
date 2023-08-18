import React from 'react'
import HeroImage from '../assets/photo-12.jpeg'
import { RiArrowRightSLine } from 'react-icons/ri'
function Home() {
  return (
    <div name="introdução" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full mt-8 md:mr-4'>
                <h2 className='text-white text-4xl sm:text-7xl font-bold'>
                    Olá! Bem-Vindo
                </h2>
                <p className='text-gray-400 py-4 w-full'>
                Adolfo Cabeia, um profissional de destaque formando em Auditoria Empresarial e Pública pelo ISCAC/Coimbra Business School; em Administração e Finanças pela Faculdade de Economia da UAN/Luanda; Licenciado em Gestão Empresarial pela Faculdade de Economia da ULAN. Doutorando em Estudos Africanos, na especialidade de Empreendedorismo pelo ISCTE/Lisboa. Com uma sólida formação académica e uma carreira repleta de realizações, Adolfo é uma figura respeitada no cenário acadêmico e profissional.
                </p>
                <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Continuar
                    <span className='group-hover:rotate-90 duration-300'>
                        <RiArrowRightSLine size = '25px' className='ml-1'/>
                    </span>
                </button>
            </div>
            </div>


            <div>
                <img src={HeroImage} 
                    alt="hero"
                    className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
        </div>
        


    </div>
  )
}

export default Home
