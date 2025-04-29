import { useState } from "react"
import { Typewriter } from 'react-simple-typewriter';
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { BiMenu, BiX } from "react-icons/bi"

const Navbar = () => {

  const[isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center 
     justify-between border-b border-b-gray-700 bg-black/70 
     px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
    
      <a href="#home" className="bg-gradient-to-r from-blue-500
       to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl
       font-semibold transition-all duration-300 hover:opacity-100">

        {/* NOME COM ANIMAÇÃO */}
        <div className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent min-w-[200px]">
          {/* Mobile: só "Mariana" */}
          <span className="block md:hidden">
            <Typewriter
              words={["</Mariana>"]}
              loop={true}
              cursor={true}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>

          {/* Desktop: "Mariana Amorim" */}
          <span className="hidden md:block">
            <Typewriter
              words={["</Mariana Amorim>"]}
              loop={true}
              cursor={true}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>  
        </div>
      </a>

      <ul className="hidden md:flex gap-10 pr-5">
        <li>
          <a href="#home" className="cursor-pointer opacity-70 
          transition-all duration-300 hover:opacity-100">Home</a>
        </li>

        <li>
          <a href="#tech" className="cursor-pointer opacity-70 
          transition-all duration-300 hover:opacity-100">Tech</a>
        </li>

        <li>
          <a href="#projects" className="cursor-pointer opacity-70 
          transition-all duration-300 hover:opacity-100">Projects</a>
        </li>

        <li>
          <a href="#contact" className="cursor-pointer opacity-70 
          transition-all duration-300 hover:opacity-100">Contact</a>
        </li>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li>
          <a href="https://www.linkedin.com/in/mariana-amorim-a041432aa/" target="_blank">
            <BsLinkedin className="cursor-pointer text-x1 opacity-70 transition-all
            duration-300 hover:text-blue-500 hover:opacity-100"/>
          </a>
        </li>

        <li>
          <a href="https://instagram.com/bemaryae" target="_blank">
            <BsInstagram className="cursor-pointer text-x1 opacity-70 transition-all
            duration-300 hover:text-pink-500 hover:opacity-100"/>
          </a>
        </li>

        <li>
          <a href="https://wa.me/5585989273173?text=Olá Mariana, tudo bem?" target="_blank">
            <BsWhatsapp className="cursor-pointer text-x1 opacity-70 transition-all
            duration-300 hover:text-green-500 hover:opacity-100"/>
          </a>
        </li>

        <li>
          <a href="https://github.com/aamoorim" target="_blank">
            <BsGithub className="cursor-pointer text-x1 opacity-70 transition-all
            duration-300 hover:text-white-500 hover:opacity-100"/>  
          </a>
        </li>        
      </ul>

      {/* MOBILE NAVBAR ICONS */}
      {isOpen ? (
        <BiX className="cursor-pointer block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="cursor-pointer block md:hidden text-4xl" onClick={menuOpen}/>
      )}
      
      {/* MOBILE NAVBAR */}
      <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col 
       items-start justify-start gap-10 border-l border-gray-800 bg-black/90 
       p-12 transform transition-all duration-700 ease-in-out delay-80
              
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} md:hidden`}>

        <ul className="flex flex-col gap-8">
          <li>
            <a href="#home" className="cursor-pointer opacity-70 
            transition-all duration-300 hover:opacity-100">Home</a>
          </li>

          <li>
            <a href="#tech" className="cursor-pointer opacity-70 
            transition-all duration-300 hover:opacity-100">Tech</a>
          </li>

          <li>
            <a href="#projects" className="cursor-pointer opacity-70 
            transition-all duration-300 hover:opacity-100">Projects</a>
          </li>

          <li>
            <a href="#contact" className="cursor-pointer opacity-70 
            transition-all duration-300 hover:opacity-100">Contact</a>
          </li>
        </ul>

        <ul className="flex flex-wrap gap-5">
          <li>
            <a href="https://www.linkedin.com/in/mariana-amorim-a041432aa/" target="_blank">
              <BsLinkedin className="cursor-pointer text-x1 opacity-70 transition-all
              duration-300 hover:text-blue-500 hover:opacity-100"/>
            </a>
          </li>

          <li>
            <a href="https://instagram.com/bemaryae" target="_blank">
              <BsInstagram className="cursor-pointer text-x1 opacity-70 transition-all
              duration-300 hover:text-pink-500 hover:opacity-100"/>
            </a>
          </li>

          <li>
            <a href="https://wa.me/5585989273173?text=Olá Mariana, tudo bem?" target="_blank">
              <BsWhatsapp className="cursor-pointer text-x1 opacity-70 transition-all
              duration-300 hover:text-green-500 hover:opacity-100"/>
            </a>
          </li>

          <li>
            <a href="https://github.com/aamoorim" target="_blank">
              <BsGithub className="cursor-pointer text-x1 opacity-70 transition-all
              duration-300 hover:text-white-500 hover:opacity-100"/>  
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar