import { useState } from 'react'
import { IconArrow } from './utils/icons'

const monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const longMonths = ['1', '3', '5', '7', '8', '10', '12']
const actualYear = new Date().getFullYear()

function App() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' })
  const [errorDay, setErrorDay] = useState(false)
  const [errorMonth, setErrorMonth] = useState(false)
  const [errorYear, setErrorYear] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const { year, month, day } = e.target.elements

    calculateRealAge(year.value, month.value, day.value, monthArr)
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  function checkErrors(e) {
    const { day, month, year } = e.target.form.elements
    console.log(day.value)

    if (day.value < 1 || day.value > 31) {
      setErrorDay(true)
    } else {
      setErrorDay(false)
    }

    if (month.value < 1 || month.value > 12) {
      setErrorMonth(true)
    } else {
      setErrorMonth(false)
    }

    if (year.value < 0 || year.value > actualYear) {
      setErrorYear(true)
    } else {
      setErrorYear(false)
    }

  }

  function calculateRealAge(year, month, day, monthArr) {
    const actualDate = new Date()
    let actualDay = actualDate.getDate()
    let actualMonth = actualDate.getMonth() + 1
    let actualYear = actualDate.getFullYear()

    const result = { years: 0, months: 0, days: 0 }

    if (actualDay < day) {
      actualMonth--
      const actualDays = actualDay + monthArr[actualMonth + 1]
      result.days = actualDays - day
    } else {
      result.days = actualDay - day
    }

    if (actualMonth < month) {
      actualYear--
      actualMonth += 12
    }

    result.months = actualMonth - month
    result.years = actualYear - year

    setAge(result)
  }

  return (
    <main className="bg-white w-[950px] h-[735px] rounded-br-[250px] rounded-2xl p-16">
      <form className="flex gap-8 border-b-[1px] h-40 relative" onSubmit={handleSubmit} onChange={checkErrors}>
        <div className="flex flex-col">
          <label htmlFor="day" className="custom-label" >DAY</label>
          <input type="number" name="day" className={errorDay ? "date-input ring-red-500" : "date-input"} placeholder="DD" />
          {errorDay && <span className="italic text-red-500">Must be a valid day</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="month" className="custom-label" >MONTH</label>
          <input type="number" name="month" className="date-input" placeholder="MM" />
          {errorMonth && <span className="italic text-red-500">Must be a valid month</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="year" className="custom-label" >YEAR</label>
          <input type="number" name="year" className="date-input" placeholder="YYYY" />
          {errorYear && <span className="italic text-red-500">Must be in the past</span>}
        </div>

        <button className="arrow-button" >
          <IconArrow />
        </button>
      </form>

      <footer className="italic font-extrabold text-[7rem] py-6">
        <div className="h-32">
          <span className="text-customPurple">{age.years}</span>
          <span> {age.years === 1 ? "year" : "years"}</span>
        </div>
        <div className="h-32">
          <span className="text-customPurple">{age.months}</span>
          <span> {age.months === 1 ? "month" : "months"}</span>
        </div>
        <div className="h-32">
          <span className="text-customPurple">{age.days}</span>
          <span> {age.days === 1 ? "day" : "days"}</span>
        </div>
      </footer>
    </main>
  )
}

export default App
