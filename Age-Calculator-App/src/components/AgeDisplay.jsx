import { useState, useEffect } from 'react'

function AgeDisplay({ years, months, days }) {
  const [animatedClassYears, setAnimatedClassYears] = useState('--')
  const [animatedClassMonths, setAnimatedClassMonths] = useState('--')
  const [animatedClassDays, setAnimatedClassDays] = useState('--')

  useEffect(() => {
    if (years === '--' || months === '--' || days === '--') return

    const animateNumber = (setAnimatedClass) => {
      let start = 0
      const end = parseFloat(setAnimatedClass === setAnimatedClassYears ? years : setAnimatedClass === setAnimatedClassMonths ? months : days)
      const duration = 2000
      const increment = (end - start) / (duration / 16)

      const runAnimation = () => {
        start += increment
        setAnimatedClass(Math.round(start).toString())
        if (start < end) {
          requestAnimationFrame(runAnimation)
        }
      }

      runAnimation()
    }

    animateNumber(setAnimatedClassYears)
    setTimeout(() => animateNumber(setAnimatedClassMonths), 300)
    setTimeout(() => animateNumber(setAnimatedClassDays), 600)
  }, [years, months, days])

  return (
    <footer className="italic font-extrabold md:text-[7rem] text-6xl py-6 mt-10 md:mt-0">
      <div className={`md:h-32`}>
        <span className="text-customPurple">{animatedClassYears}</span>
        <span> {years === 1 ? "year" : "years"}</span>
      </div>
      <div className={`md:h-32`}>
        <span className="text-customPurple">{animatedClassMonths}</span>
        <span> {months === 1 ? "month" : "months"}</span>
      </div>
      <div className={`md:h-32`}>
        <span className="text-customPurple">{animatedClassDays}</span>
        <span> {days === 1 ? "day" : "days"}</span>
      </div>
    </footer>
  )
}

export default AgeDisplay
