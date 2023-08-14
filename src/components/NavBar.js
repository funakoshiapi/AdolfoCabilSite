import logo from '../assets/network-svgrepo-com.svg'
import cv from '../assets/CV.pdf'

function NavBar(){
    return (
     
          <div className='shadow-sm bg-gray-80 px-10'>
          <nav className="py-5 mb-2 flex justify-between ">
            <div className='flex'>
              <img className='mr-5' src={logo} width="40" height="4" alt='loga' />
              <button className='text-3xl font-bold font-montserrat  ' > Adolfo Cabeia</button>
            </div>

          <ul className='flex items-center'>
            <li>
            <a className="mr-2 p-3 px-6 pt-2 text-white inline-block rounded-full bg-cyan-500 hover:bg-blue-500 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2
                                    focus:ring-blue-600 ring-offset-2 outline-none focus:bg-blue-800
                                    focus:shadow-lg active:bg-blue-900 md:mr-5" href={cv} >
                                    Currículo
            </a>
            </li>
          </ul>
          </nav>
          </div>
    )
}

export default NavBar;
