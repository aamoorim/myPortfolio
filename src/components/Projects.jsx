import * as React from "react";
import { Dialog } from "radix-ui";
import { FiX } from "react-icons/fi";
import image1 from "/assets/devlinks.png"
import image2 from "/assets/nlwesports.png"
import image3 from "/assets/nlwpocket.png"
import image4 from "/assets/quicklist.png"
import image5 from "/assets/icecreamshop.png"
import { motion } from "motion/react"

const projectsData = [
  {
    image: image1,
    title: "DevLinks",
    description: "O projeto DevLinks foi desenvolvido ao decorrer do curso Discover, disponível na plataforma Rocketseat, que consiste em uma página que unifica links de sua preferência, funcionando como cartão de visitas online.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    repo: "https://github.com/aamoorim/DevLinks",
    site: "https://mariana-devlinks.vercel.app",
  },

  {
    image: image2,
    title: "NLW e-Sports (Trilha Explorer)",
    description: "O projeto NLW e-Sports foi desenvolvido durante a Next Level Week da Rocketseat, em 2022. Ele consiste em uma página responsiva que exibe os seus jogos favoritos e seus criadores de conteúdo prediletos, utilizando tecnologias modernas e boas práticas de desenvolvimento.",
    technologies: ["HTML5", "CSS3", "Figma"],
    repo: "https://github.com/aamoorim/NLW-eSports-Explorer",
    site: "https://mariana-nlwesports.vercel.app",
},

{
    image: image3,
    title: "NLW Pocket",
   description: "O projeto NLW Pocket foi desenvolvido durante a Next Level Week da Rocketseat, no final de 2024. O projeto consiste em um programa que roda em terminal, onde o usuário pode adicionar, remover e visualizar suas metas.",
   technologies: ["JavaScript", "NodeJS"],
   repo: "https://github.com/aamoorim/NLW-POCKET-JS",
},

  {
    image: image4,
    title: "QuickList",
    description: "QuickList é um projeto criado durante o curso de programação front-end do BetaHub em parceria com a Rocketseat. Consiste em uma página web cujas funções são adicionar, listar e remover produtos de uma lista de compras.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    repo: "https://github.com/aamoorim/QuickList",
    site: "https://mariana-quicklist.vercel.app",
  },

  {
    image: image5,
    title: "Ice Cream Dream",
    description: "Ice Cream Dream é um formulário desenvolvido durante o curso Formação Front-End na Udemy. Nele você pode criar a sua loja de sorvetes dos sonhos e planejá-la do seu modo. O Ice Cream Dreams foi desenvolvido, principalmente, para fins de consolidação de aprendizado a respeito de formulários HTML",
    technologies: ["HTML5", "CSS3"],
    repo: "https://github.com/aamoorim/IceCream-Forms",
    site: "https://mariana-icdream.vercel.app",
  },
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.8}}    
    
    >
      {children}
    </motion.div>
  )

}

const ProjectCard = ({project}) => {
  return(
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        
        {/* Dialog para imagem + nome + links */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <img src={project.image} alt={project.title} className="w-full rounded-2xl transition-all duration-400 hover:scale-105 md:w-[300px] cursor-pointer"/>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
            <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl
            bg-zinc-900 p-6 shadow-lg space-y-4 text-white flex flex-col items-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl
              bg-zinc-900 p-6 shadow-lg text-white space-y-4 flex flex-col items-center">

                <Dialog.Title className="text-2xl font-semibold">{project.title}</Dialog.Title>
                <img src={project.image} alt={project.title} className="rounded w-full max-h-[400px] object-contain"/>

                <div className="flex gap-4 pt-4 border-t-1 border-gray-300">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="bg-fuchsia-800 border-2 border-fuchsia-800 md:text-lg px-4 py-2 rounded
                  hover:bg-transparent transition-all duration-400">
                    Ver repositório
                  </a>

                  {project.site && (
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="bg-violet-800 md:text-lg px-4 py-2 rounded
                    hover:bg-transparent border-2 border-violet-800 transition-all duration-500">
                      Ver Site
                    </a>
                )}
                </div>

                <Dialog.Close className="cursor-pointer absolute top-4 right-4 text-white hover:text-violet-400 transition-all duration-200 text-2xl outline-0">
                  <FiX size={28}/>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <div className="flex flex-col gap-5 ">

          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-indigo-900 p-3 hover:scale-105 transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))
            }
          </div>

        </div>

      </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center
    justify-center gap-16 p-4 md:px-14 md:py-24">

      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Meus Projetos</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects