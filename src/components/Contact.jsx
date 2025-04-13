const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center
    justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-800 to-blue-500 
          bg-clip-text text-transparent">Fale Comigo</span>
        </h1>

        <p className="text-center text-lg font-semibold text-gray-400">
          Quer conversar? Me envie um e-mail, respondo assim que possível! :)
        </p>

        <a href="https://mail.google.com/mail/?view=cm&to=mariamorim.mas@gmail.com" target="_blank" className="text-nowrap rounded-lg border-2
        border-indigo-600 bg-transparent px-5 py-3 text-lg font-bold text-white
        shadow-indigo-700 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">Mandar E-Mail</a>

      </div>
    </div>
  )
}

export default Contact