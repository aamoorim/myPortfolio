import image from "/assets/profile.jpg"
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full
     items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
        initial={{y: -50, opacity:0}}
        animate={{y: 0 ,opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
        >
          <img src={image} alt="Imagem de Mariana Amorim" className="w-[300px] cursor-pointer
          rounded-full shadow-xl shadow-indigo-900 transition-all duration-600 hover:-translate-y-1 
          hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"/>
        </motion.div>

        <motion.div 
        initial={{y: 50, opacity:0}}
        animate={{y: 0 ,opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}

        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 pt-3 bg-clip-text text-transparent 
          text-5xl font-light md:text-7xl">Mariana Amorim</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent 
          text-2xl md:text-3xl">Front-end Developer</h3>
          <p className="md:text-base text-pretty pt-6 text-md text-gray-300">
          Olá! Me chamo Mariana Amorim, atualmente tenho 17 anos e estudo desenvolvimento front-end desde os 13 anos!
          Sou muito curiosa e o que me motiva é sempre aprender mais e evoluir minhas habilidades. Quer conhecer mais sobre mim? 
          Role para baixo!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero