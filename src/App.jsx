import { DKLogo, FrontendMentor, X } from "./assets/Icons"
import Project from "./components/Project"

const projects = [
  {
    img: "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1680193709%2FChallenges%2Fmwjogovjjnkz6f6yzdkp.jpg&w=384&q=75",
    title: "Age calculator app",
    tags: ["react", "vite", "tailwind"],
    number: "2",
    level: "Junior",
    description: "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!.",
    linkDemo: "",
    linkGithub: "",
    linkFrontendMentor: "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1680193709%2FChallenges%2Fmwjogovjjnkz6f6yzdkp.jpg&w=384&q=75",
  },
  {
    img: "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1633619397%2FChallenges%2Ffhzpdnabrek50hvhftnl.jpg&w=384&q=75",
    title: "E-commerce product page",
    tags: ["react", "vite", "tailwind"],
    number: "3",
    level: "Intermediate",
    description: "In this challenge, you'll build a beautiful product page. We'll be putting your JS skills to the test with a lightbox product gallery and cart functionality!",
    linkDemo: "",
    linkGithub: "",
    linkFrontendMentor: "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1680193709%2FChallenges%2Fmwjogovjjnkz6f6yzdkp.jpg&w=384&q=75",
  },
  {
    img: "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1680193709%2FChallenges%2Fmwjogovjjnkz6f6yzdkp.jpg&w=384&q=75",
    title: "Test",
    tags: ["react", "vite", "tailwind"],
    number: "2",
    level: "Advanced",
    description: "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!.",
    linkDemo: "",
    linkGithub: "",
    linkFrontendMentor: "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1680193709%2FChallenges%2Fmwjogovjjnkz6f6yzdkp.jpg&w=384&q=75",
  },
  {
    img: "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1680193709%2FChallenges%2Fmwjogovjjnkz6f6yzdkp.jpg&w=384&q=75",
    title: "Age calculator app",
    tags: ["react", "vite", "tailwind"],
    number: "2",
    level: "Intermediate",
    description: "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!.",
    linkDemo: "",
    linkGithub: "",
    linkFrontendMentor: "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1680193709%2FChallenges%2Fmwjogovjjnkz6f6yzdkp.jpg&w=384&q=75",
  },
]

function App() {
  return (
    <>
      <header className="flex items-center gap-4 my-7">
        <a href="https://www.frontendmentor.io/profile/DaniKOrdo" target="_blank" rel="noopener noreferrer">
          <FrontendMentor />
        </a>
        <X />
        <a href="https://danik.dev/" target="_blank" rel="noopener noreferrer">
          <DKLogo />
        </a>
      </header>

      <main className="grid max-w-6xl grid-cols-1 gap-16 p-4 md:gap-4 md:mt-10 xl md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </main>
    </>
  )
}

export default App
