import React from 'react'
import HeroImage from '../assets/photo-12.jpeg'
function Home() {
  return (
    <div name="introdução" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-32'>
            <div className='flex flex-col justify-center h-full md:mr-4'>
                <h2 className='text-white text-4xl sm:text-7xl font-bold mt-8'>
                    Olá! Bem-Vindo
                </h2>
                <p className='text-sm text-gray-400 py-4 w-full md:text-lg'>
                Adolfo Cabeia, um profissional de destaque formando em Auditoria Empresarial e Pública pelo ISCAC/Coimbra Business School; em Administração e Finanças pela Faculdade de Economia da UAN/Luanda; Licenciado em Gestão Empresarial pela Faculdade de Economia da ULAN. Doutorando em Estudos Africanos, na especialidade de Empreendedorismo pelo ISCTE/Lisboa. Com uma sólida formação académica e uma carreira repleta de realizações, Adolfo é uma figura respeitada no cenário acadêmico e profissional.
                </p>
                <div>
            </div>
            </div>


            <div>
                <img src={HeroImage} 
                    alt="hero"
                    className='rounded-2xl mx-auto w-2/3 md:w-full object-fill'
                />
            </div>
        </div>
        


    </div>
  )
}

export default Home
