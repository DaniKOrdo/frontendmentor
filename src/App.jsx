import { DKLogo, FrontendMentor, X } from "./utils/Icons"
import Project from "./components/Project"
import { projects } from "./data/projects.js"

function App() {
  return (
    <>
      <header className="flex items-center gap-4 my-8 md:my-16">
        <a href="https://www.frontendmentor.io/profile/DaniKOrdo" target="_blank" rel="noopener noreferrer">
          <FrontendMentor />
        </a>
        <X />
        <a href="https://danik.dev/" target="_blank" rel="noopener noreferrer">
          <DKLogo />
        </a>
      </header>

      <main className="grid max-w-6xl grid-cols-1 gap-16 p-4 mb-32 md:p-0 md:gap-4 md:mt-10 xl md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </main>
    </>
  )
}

export default App
