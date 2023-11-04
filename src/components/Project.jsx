function getTagColor(tag) {
    tag = tag.toUpperCase()
    switch (tag) {
        case "HTML":
            return "text-orange-600"
        case "CSS":
            return "text-blue-600"
        case "JS":
            return "text-amber-500"
        case "REACT":
            return "text-sky-500"
        case "VITE":
            return "text-fuchsia-600"
        case "TAILWIND":
            return "text-cyan-500"
    }
}

function getLevelColor(level) {
    level = level.toUpperCase()
    console.log(level)
    switch (level) {
        case "NEWBIE":
            return ""
        case "JUNIOR":
            return "text-lime-500 bg-lime-500 border-lime-500"
        case "INTERMEDIATE":
            return "text-amber-500 bg-amber-500 border-amber-500"
        case "ADVANCED":
            return "bg-red-400"
    }
}


export default function Project({ img, title, tags, number, level, description, link }) {
    return (
        <article className="flex flex-col overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
            <a href={link} target="_blank" rel="noopener noreferrer" className="overflow-hidden">
                <img src={img} alt={title} className="object-cover duration-300 hover:scale-105" />
            </a>
            <div className="p-6 ">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-xl font-bold">{title}</h2>
                </a>
                <div className="flex justify-between py-5 font-bold uppercase">
                    <div className="flex gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className={getTagColor(tag)}>{tag} </span>
                        ))}
                    </div>
                    <div className={`flex text-sm font-bold text-center  border rounded ${getLevelColor(level)}`}>
                        <span className="px-2 text-white ">{number}</span>
                        <span className="px-2 bg-white rounded-r">{level}</span>
                    </div>
                </div>
                <p className="text-gray-600">
                    {description}
                </p>
                <footer>
                    
                </footer>
            </div>
        </article >
    )
}