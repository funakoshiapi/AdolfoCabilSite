import React from 'react'
import Table from './Table';

function Education() {
    const description = [
        {
            year: "2023" ,
            university: "ISCTE-Lisboa" ,
            program: "Doutorando em Estudos Africanos (Em formação)"
        },
        {
            year: "2022" ,
            university: "ISCTE-Lisboa" ,
            program: "Doutorando em Estudos Africanos (2° ano)"
        },
        {
            year: "2021" ,
            university: "Faculdade De Economia Da Universidade Agostinho Neto FEUAN" ,
            program: "Mestrado em Administração e Finanças"
        },
        {
            year: "2020" ,
            university: "Faculdade De Economia Da Universidade Agostinho Neto FEUAN" ,
            program: "Mestrando em Auditoria Empresarial e Pública"
        },
        {
            year: "2015" ,
            university: "Faculdade De Economia Da Lunda-Norte-ULAN" ,
            program: "Licenciatura em Economia, opção: Gestão Empresarial"
        },
    ]
  return (
   
      <div name="educação" className='h-screen  bg-blue-900'>
         <div  className="p-4  flex flex-col text-white max-w-screen-lg mx-auto">
            
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Educação
            </p> 
          </div>
        
          
        
        <Table description={description}/>
            
        </div>
          
      </div>


      

  );
};

export default Education