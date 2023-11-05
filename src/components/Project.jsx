import { FrontendMentorIcon, Github, Website } from "../utils/Icons"
import { getLevelColor, getLevelNumber, getTagColor } from "../utils/colorUtils"

export default function Project({ img, title, tags, level, description, linkDemo, linkGithub, linkFrontendMentor }) {
  return (
    <article className="flex flex-col max-w-sm overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
      <a href={linkDemo} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10 w-full opacity-50 pointer-events-none h-1/3 bg-gradient-to-b from-gray-400 to-transparent hover:opacity-100"></div>
        <img src={img} alt={title} className="object-cover duration-300 hover:scale-105" />
      </a>

      <div className="p-6">
        <a href={linkDemo} target="_blank" rel="noopener noreferrer" className="inline-block duration-300 hover:underline">
          <h2 className="text-2xl font-semibold">{title}</h2>
        </a>
        <div className="flex flex-wrap justify-between py-5 font-bold uppercase">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span key={index} className={getTagColor(tag)}>{tag} </span>
            ))}
          </div>
          <div className={`flex text-sm font-bold text-center  border rounded ${getLevelColor(level)}`}>
            <span className="px-2 text-white ">{getLevelNumber(level)}</span>
            <span className="px-2 bg-white rounded-r">{level}</span>
          </div>
        </div>

        <p className="mb-6 text-gray-600">
          {description}
        </p>

        <footer className="flex justify-center gap-8">
          <a href={linkDemo} target="_blank" rel="noopener noreferrer" className="p-2 duration-300 rounded-full hover:bg-sky-200 hover:text-sky-700">
            <Website />
          </a>
          <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="p-2 duration-300 rounded-full hover:bg-sky-900 hover:text-sky-50">
            <Github />
          </a>
          <a href={linkFrontendMentor} target="_blank" rel="noopener noreferrer" className="p-2 duration-300 rounded-full hover:bg-sky-600 hover:text-sky-300">
            <FrontendMentorIcon />
          </a>
        </footer>
      </div>
    </article >
  )
}