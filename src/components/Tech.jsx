import { BiLogoCss3, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "motion/react";

const Tech = () => {

  const variants = {
    hidden:{opacity:0 , y: 50},
    visible:{opacity:1 , y: 0}
  }

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center
     justify-center gap-16 md:gap-32">
        <motion.h1 

        variants= {variants}
        initial= "hidden"
        whileInView= "visible"
        transition={{duration: 0.5}}

        className="text-4xl font-light text-white md:text-6xl">Tecnologias</motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <motion.div
          variants= {variants}
          initial= "hidden"
          whileInView= "visible"
          transition={{duration: 0.5}}> 
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
             <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-900 hover:text-orange-600 transition-all
             duration-600 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
            </a>
          </motion.div>

          <motion.div
          variants= {variants}
          initial= "hidden"
          whileInView= "visible"
          transition={{duration: 0.5}}>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
            <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-900 hover:text-blue-500 transition-all
             duration-600 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
             </a>
          </motion.div>

          <motion.div
          variants= {variants}
          initial= "hidden"
          whileInView= "visible"
          transition={{duration: 0.5}}>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
             <BiLogoJavascript className="cursor-pointer text-[80px] text-amber-800 hover:text-amber-300 transition-all
             duration-600 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
            </a>
          </motion.div>

          <motion.div
          variants= {variants}
          initial= "hidden"
          whileInView= "visible"
          transition={{duration: 0.5}}>
            <a href="https://nodejs.org/en" target="_blank"> 
              <BiLogoNodejs className="cursor-pointer text-[80px] text-green-700 hover:text-green-500 transition-all
             duration-600 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
            </a>
          </motion.div>

          <motion.div
          variants= {variants}
          initial= "hidden"
          whileInView= "visible"
          transition={{duration: 0.5}}>
            <a href="https://react.dev" target="_blank">
             <BiLogoReact className="cursor-pointer text-[80px] text-cyan-600 hover:text-cyan-400 transition-all
             duration-600 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
            </a>
          </motion.div>

          <motion.div
          variants= {variants}
          initial= "hidden"
          whileInView= "visible"
          transition={{duration: 0.5}}>
            <a href="https://git-scm.com" target="_blank">
              <BiLogoGit className="cursor-pointer text-[80px] text-red-800 hover:text-red-500 transition-all
              duration-600 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
            </a>
          </motion.div>

          <motion.div
          variants= {variants}
          initial= "hidden"
          whileInView= "visible"
          transition={{duration: 0.5}}>
            <a href="https://tailwindcss.com" target="_blank">
             <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-600 hover:text-sky-400 transition-all
             duration-600 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
            </a>
          </motion.div>
        </div>
     </div>
  )
}

export default Tech