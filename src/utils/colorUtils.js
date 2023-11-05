export function getTagColor(tag) {
  tag = tag.toUpperCase()
  switch (tag) {
    case "HTML":
      return "text-orange-600"
    case "CSS":
      return "text-blue-600"
    case "JS":
      return "text-amber-500"
    case "REACT":
      return "text-sky-600"
    case "VITE":
      return "text-fuchsia-600"
    case "TAILWIND":
      return "text-cyan-400"
  }
}

export function getLevelColor(level) {
  level = level.toUpperCase()
  switch (level) {
    case "NEWBIE":
      return "text-cyan-500 bg-cyan-500 border-cyan-500"
    case "JUNIOR":
      return "text-lime-500 bg-lime-500 border-lime-500"
    case "INTERMEDIATE":
      return "text-yellow-500 bg-yellow-500 border-yellow-500"
    case "ADVANCED":
      return "text-amber-500 bg-amber-500 border-amber-500"
    case "GURU":
      return "text-rose-500 bg-rose-500 border-rose-500"
  }
}

export function getLevelNumber(level) {
  level = level.toUpperCase()
  switch (level) {
    case "NEWBIE":
      return "1"
    case "JUNIOR":
      return "2"
    case "INTERMEDIATE":
      return "3"
    case "ADVANCED":
      return "4"
    case "GURU":
      return "5"
  }
}