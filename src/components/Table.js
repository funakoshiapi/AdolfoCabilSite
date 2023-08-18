import React from 'react'

function Table({description}) {
  return (

        <div className="relative overflow-x-auto z-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 z-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className=" text-md px-6 py-3 md:text-lg">
                            Ano
                        </th>
                        <th scope="col" className=" text-md px-6 py-3 md:text-lg">
                            Universidade
                        </th>
                        <th scope="col" className="text-md px-6 py-3 md:text-lg">
                            Formação
                        </th>
                    </tr>
                </thead>
                <tbody>

                {description.map(({year, university, program}) =>( 
                  
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="text-md px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white md:text-lg">
                        {year}
                    </th>
                    <td className="text-md px-6 py-4 md:text-lg">
                        {university}
                    </td>
                    <td className="text-md px-6 py-4 md:text-lg">
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