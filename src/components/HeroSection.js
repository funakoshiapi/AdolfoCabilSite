import Carousel from "./Carousel";
import photo1 from '../assets/photo-1.jpeg'
import photo2 from '../assets/photo-2.jpeg'
import photo3 from '../assets/photo-3.jpeg'
import photo4 from '../assets/photo-4.jpeg'
import photo5 from '../assets/photo-5.jpeg'
import photo6 from '../assets/photo-6.jpeg'
import photo7 from '../assets/photo-7.jpeg'
import photo8 from '../assets/photo-8.jpeg'
import photo9 from '../assets/photo-9.jpeg'
import photo10 from '../assets/photo-10.jpeg'
import photo11 from '../assets/photo-11.jpeg'
import photo12 from '../assets/photo-12.jpeg'
import photo13 from '../assets/photo-13.jpeg'
import photo14 from '../assets/photo-14.jpeg'
import photo15 from '../assets/photo-15.jpeg'
import cv from '../assets/CV.pdf';




function HeroSection(){
    const images =[
        {url: photo1 },
        {url: photo2 },
        {url: photo3 },
        {url: photo4 },
        {url: photo5 },
        {url: photo6 },
        {url: photo7 },
        {url: photo8 },
        {url: photo9 },
        {url: photo10 },
        {url: photo11 },
        {url: photo12 },
        {url: photo13 },
        {url: photo14 },
        {url: photo15 },
        
    ];


    return(
        <section className="max-h-screen" id="hero">
            <div className="flex flex-col items-center justify-center mb-12 md:h-screen">
                <div className=" items-center justify-center container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row  md:space-y-0">
                    <div className="h-96 w-96 flex flex-col mb-32 space-y-2 md:w-1/2 md:h-96">
                        <Carousel images={images} />
                    </div>
                    <div className=" m-12 flex flex-col w-96 h-96 sm: mb-32 space-y-5 md:w-max md:h-96" >
                        <h1 className="max-w-md text-6xl font-bold text-center md:text-7xl md:text-left">
                            Olá!
                            </h1>
                            <h2 className="max-w-md text-xl font-bold text-center md:text-2xl md:text-left">
                            Um pouco sobre mim
                            </h2>
                            <p1 className="max-w-sm text-center text-gray md:text-left">
                                Adolfo Cabeia, um profissional de destaque no campo da auditoria pública e administração de negócios. Com uma sólida formação acadêmica e uma carreira repleta de realizações, Adolfo é uma figura respeitada no cenário acadêmico e profissional.
                            </p1>
                            <div className="flex justify-center md:justify-start">
                                <a className="mr-2 p-3 px-6 pt-2 text-white inline-block rounded-full bg-cyan-500 hover:bg-blue-500 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2
                                    focus:ring-blue-600 ring-offset-2 outline-none focus:bg-blue-800
                                    focus:shadow-lg active:bg-blue-900 md:mr-5" href={cv} target = "_blank">
                                    Currículo
                                </a>
 
                                <a className="mr-2 p-3 px-6 pt-2 text-white inline-block rounded-full bg-cyan-500 hover:bg-blue-500 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2
                                    focus:ring-blue-600 ring-offset-2 outline-none focus:bg-blue-800
                                    focus:shadow-lg active:bg-blue-900  md:mr-5" href="https://www.linkedin.com/in/adolfo-caiji-cabeia-84a176112/">
                                    Linkedin
                                </a>
                            </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection;