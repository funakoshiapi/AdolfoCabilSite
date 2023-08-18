import React from "react";
import '../index.css'

function Footer(){
    return (
        <footer classNameName="text-center text-white flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 " >
            <div
                className="p-8 md:p-4 text-center bg-gray-700 h-max text-white"  >
                
                <a className="text-white" href="https://www.linkedin.com/in/silvafunakoshi/"
                > © {new Date().getFullYear() } Copyright: Criado por Funakoshi Silva</a
                >
            </div>
        </footer>
    )
}

export default Footer;