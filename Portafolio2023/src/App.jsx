import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-gray-200 shadow-lg rounded-lg font-sans">
      <div className="w-full flex justify-between items-center px-4 py-2">
        <div className="navbar-brand text-xl font-bold">Mi portfolio</div>
        <ul className="hidden md:flex items-center">
          <li className="mr-6">
            <a href="#about" className="text-gray-800 hover:text-gray-900">About</a>
          </li>
          <li className="mr-6">
            <a href="#projects" className="text-gray-800 hover:text-gray-900">Proyectos</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-800 hover:text-gray-900">Contacto</a>
          </li>
        </ul>
        <button className="md:hidden block text-gray-800 hover:text-gray-900 focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

function ProjectCard({ title, description }) {
  return (
  <div className="w-full shadow-lg rounded-lg my-4">
  <div className="px-4 py-2 bg-gray-200">
  <h3 className="text-xl font-bold text-gray-800">{title}</h3>
  <p className="text-sm text-gray-600">{description}</p>
  </div>
  </div>
  )
  }
  
  function App() {
  return (
  <div className="mx-auto py-8">
  <Navbar />
  <section id="about" className="mb-8">
  <h2 className="text-xl font-bold mb-4">Sobre mí</h2>
  <p className="text-lg leading-relaxed mb-4">
  Soy un desarrollador web con experiencia en crear sitios y aplicaciones web atractivas y funcionales utilizando tecnologías como HTML, CSS y JavaScript. Me encanta aprender y siempre estoy buscando nuevos desafíos y oportunidades para mejorar mis habilidades y conocimientos. Actualmente, estoy buscando oportunidades de trabajo en empresas innovadoras y en equipos de desarrollo ágiles.
  </p>
  </section>
  <section id="projects" className="mb-8">
  <h2 className="text-xl font-bold mb-4">Proyectos destacados</h2>
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold mb-2">Sitio web de empresa</h3>
            <p className="text-sm leading-relaxed mb-4">
              Desarrollé un sitio web para una empresa local utilizando
              React, Next.js y Tailwind CSS.
            </p>
            <a href="#" className="inline-block py-2 px-4 rounded-full bg-blue-500 text-white text-sm font-bold uppercase hover:bg-blue-600">Ver más</a>
</div>
<div className="bg-white rounded-lg shadow-md p-4">
<h3 className="text-xl font-bold mb-2">Aplicación de lista de tareas</h3>
<p className="text-sm leading-relaxed mb-4">
Desarrollé una aplicación de lista de tareas utilizando React y Redux para gestionar el estado de la aplicación. También utilicé Firebase para almacenar y sincronizar las tareas en tiempo real.
</p>
<a href="#" className="inline-block py-2 px-4 rounded-full bg-blue-500 text-white text-sm font-bold uppercase hover:bg-blue-600">Ver más</a>
</div>
<div className="bg-white rounded-lg shadow-md p-4">
<h3 className="text-xl font-bold mb-2">Sitio de recetas</h3>
<p className="text-sm leading-relaxed mb-4">
Desarrollé un sitio web de recetas utilizando React y una API externa para obtener y mostrar las recetas. También utilicé técnicas de SEO para mejorar la visibilidad del sitio en los motores de búsqueda.
</p>
<a href="#" className="inline-block py-2 px-4 rounded-full bg-blue-500 text-white text-sm font-bold uppercase hover:bg-blue-600">Ver más</a>
</div>
</div>

  </section>
  
  <section id="contact" className="mb-8">
  <h2 className="text-xl font-bold mb-4">Contacto</h2>
  <p className="text-lg leading-relaxed mb-4">
  Si tienes alguna pregunta o quieres trabajar conmigo, puedes contactarme a través de mi correo electrónico o redes sociales.
  </p>
  <form className="w-full max-w-sm">
<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
Nombre
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
</input>
</div>
<div className="w-full md:w-1/2 px-3">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
Apellido
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
</input>
</div>
</div>
<div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Correo electrónico
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="jane.doe@example.com">
              </input>
              <p className="text-gray-600 text-xs italic">Por favor, proporcione una dirección de correo electrónico válida para poder responderle.</p>
            </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
                Mensaje
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" rows="4" placeholder="Escribe tu mensaje aquí...">
              </textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Enviar mensaje
              </button>
            </div>
          </div>
        </form>
      </section>
      <footer className="bg-gray-300 py-4 font-sans text-center text-sm text-gray-600">
        &copy; 2021 Mi portfolio. Todos los derechos reservados.
      </footer>
    </div>
  )
}
export default App
