import React from 'react'

function Table({description}) {
  return (

        <div className="relative overflow-x-auto z-0 h-screen">
            <table className="w-full text-sm text-left text-gray-300 dark:text-gray-400 z-0">
                <thead className="text-xs text-gray-300 uppercase bg-[#808080] dark:bg-slate-500 dark:text-gray-400">
                    <tr className='bg-[#808080]'>
                        <th scope="col" className=" text-md px-6 py-3 md:text-lg text-gray-300">
                            Ano
                        </th>
                        <th scope="col" className=" text-md px-6 py-3 md:text-lg text-gray-300">
                            Universidade
                        </th>
                        <th scope="col" className="text-md px-6 py-3 md:text-lg text-gray-300">
                            Formação
                        </th>
                    </tr>
                </thead>
                <tbody>

                {description.map(({year, university, program}) =>( 
                  
                <tr className=" bg-blue-900 border-b dark:bg-blue-900 dark:border-cyan-700">
                    <th scope="row" className="text-md px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white md:text-lg">
                        {year}
                    </th>
                    <td className="text-md px-6 py-4 md:text-lg text-white">
                        {university}
                    </td>
                    <td className="text-md px-6 py-4 md:text-lg  text-white">
                        {program}
                    </td>
                </tr>

                ))}

                </tbody>
            </table>
        </div>

  )
}

export default Table