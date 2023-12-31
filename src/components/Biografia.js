import React from 'react'
import Carousel from "./Carousel";
import photo1 from '../assets/photo-1.jpeg'
import photo2 from '../assets/photo-2.jpeg'
import photo3 from '../assets/photo-3.jpeg'
import photo5 from '../assets/photo-5.jpeg'
import photo6 from '../assets/photo-6.jpeg'
import photo7 from '../assets/photo-7.jpeg'
import photo8 from '../assets/photo-8.jpeg'
import photo9 from '../assets/photo-9.jpeg'
import photo10 from '../assets/photo-10.jpeg'
import photo11 from '../assets/photo-11.jpeg'
import photo13 from '../assets/photo-13.jpeg'
import photo14 from '../assets/photo-14.jpeg'
import photo15 from '../assets/photo-15.jpeg'
import photo16 from '../assets/photo-16.jpeg'
import photo17 from '../assets/photo-17.jpeg'
import photo18 from '../assets/photo-18.jpeg'
import photo19 from '../assets/photo-19.jpeg'
import photo20 from '../assets/photo-20.jpeg'



function Biografia() {

  const images =[
    {url: photo1, notes: "2009 Formador De Contabilidade E Gestão . Centro Profissional INEFOP" },
    {url: photo2,  notes: "2009 Formador De Contabilidade E Gestão . Centro Profissional INEFOP"},
    {url: photo15 , notes: "Finalista Escola De Magisterio Do Lucapa 2009- 2010" },
    {url: photo3 ,  notes: "Finalista Escola De Magisterio Do Lucapa 2009- 2010" },
    {url: photo5 , notes: "2015 Conclusão, Licenciatura em Economia e Gestão Empresarial Faculdade De Economia Da Lunda-Norte-ULAN" },
    {url: photo6 , notes: "2015 Conclusão, Licenciatura em Economia e Gestão Empresarial Faculdade De Economia Da Lunda-Norte-ULAN" },
    {url: photo7 , notes: "2015 Conclusão, Licenciatura em Economia e Gestão Empresarial Faculdade De Economia Da Lunda-Norte-ULAN" },
    {url: photo8 , notes: "2015 Conclusão, Licenciatura em Economia e Gestão Empresarial Faculdade De Economia Da Lunda-Norte-ULAN" },
    {url: photo9 , notes: "2015 Conclusão, Licenciatura em Economia e Gestão Empresarial Faculdade De Economia Da Lunda-Norte-ULAN" },
    {url: photo10 , notes: "2021 Conclusão, Mestrado em Administração e Finanças" },
    {url: photo11 , notes: "2021 Conclusão, Mestrado em Administração e Finanças" },
    {url: photo13 , notes: "2021 Conclusão, Mestrado em Administração e Finanças" },
    {url: photo14 , notes: "2021 Conclusão, Mestrado em Administração e Finanças" },
    {url: photo16 , notes: "2023 Conclusão Mestrado em Auditoria Empresarial e publica, Coimbra Business School" },
    {url: photo17 , notes: "Mesa redonda sobre empreendedorismo em Africa, organizado pelo ISCTE" },
    {url: photo18 , notes: "Aulas no ISCTE" },
    {url: photo19 , notes: "Apos defesa de mestrado na FEUAN" },
    {url: photo20 , notes: "Junho de 2023 seminário sobre inteligência emocional animado por Derose no Iscac" },
  
  
];
  return (
    <div
      name="biografia"
      className="w-full h-full bg-blue-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Biografia
          </p>
        </div>
        <div>
          <Carousel images={images} />
        </div>

        
      </div>
    </div>
  );
};

export default Biografia