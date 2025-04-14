import { div, span } from "motion/react-client"
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
  },

  {
    image: image2,
    title: "NLW e-Sports (Trilha Explorer)",
    description: "O projeto NLW e-Sports foi desenvolvido durante a Next Level Week da Rocketseat, em 2022. Ele consiste em uma página responsiva que exibe os seus jogos favoritos e seus criadores de conteúdo prediletos, utilizando tecnologias modernas e boas práticas de desenvolvimento.",
    technologies: ["HTML5", "CSS3", "Figma"],
},

{
    image: image3,
    title: "NLW Pocket",
   description: "O projeto NLW Pocket foi desenvolvido durante a Next Level Week da Rocketseat, no final de 2024. O projeto consiste em um programa que roda em terminal, onde o usuário pode adicionar, remover e visualizar suas metas.",
   technologies: ["JavaScript", "NodeJS"],
},

  {
    image: image4,
    title: "QuickList",
    description: "QuickList é um projeto criado durante o curso de programação front-end do BetaHub em parceria com a Rocketseat. Consiste em uma página web cujas funções são adicionar, listar e remover produtos de uma lista de compras.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
  },

  {
    image: image5,
    title: "Ice Cream Dream",
    description: "Ice Cream Dream é um formulário desenvolvido durante o curso Formação Front-End na Udemy. Nele você pode criar a sua loja de sorvetes dos sonhos e planejá-la do seu modo. O Ice Cream Dreams foi desenvolvido, principalmente, para fins de consolidação de aprendizado a respeito de formulários HTML",
    technologies: ["HTML5", "CSS3"],
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
        
        <img src={project.image} alt="" className="w-full cursor-pointer 
        rounded-2xl transition-all duration-400 hover:scale-105 md:w-[300px]"/>

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