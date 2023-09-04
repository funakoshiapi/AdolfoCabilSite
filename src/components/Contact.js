import React from "react";

const Contact = () => {
  return (
    <div
      name="contacto"
      className="w-full h-full bg-gradient-to-b from-blue-900 to-blue-950 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contacto
          </p>
          <p className="py-6">Entre em contacto comigo</p>
        </div>

        <div className=" flex justify-center items-center h-full">
          <form
            action="https://getform.io/f/f0753c2d-d8de-4277-9e8d-39c9c4800c13"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-md"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-md"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-md"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Contactar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;