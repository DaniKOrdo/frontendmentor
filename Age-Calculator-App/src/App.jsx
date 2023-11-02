import { useState } from 'react'
import { IconArrow } from './utils/icons'

const monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const longMonths = [1, 3, 5, 7, 8, 10, 12]
const actualYear = new Date().getFullYear()

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function isValidDay(day, month, year) {
  const parsedDay = parseInt(day, 10)
  const parsedMonth = parseInt(month, 10)
  const parsedYear = parseInt(year, 10)

  if (parsedMonth === 2) {
    if (isLeapYear(parsedYear)) {
      return parsedDay >= 1 && parsedDay <= 29
    } else {
      return parsedDay >= 1 && parsedDay <= 28
    }
  } else if (longMonths.includes(parsedMonth)) {
    return parsedDay >= 1 && parsedDay <= 31
  } else {
    return parsedDay >= 1 && parsedDay <= 30
  }
}

function isDateValid(year, month, day) {
  const inputDate = new Date(year, month - 1, day)
  const currentDate = new Date()
  return inputDate <= currentDate
}

function App() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' })
  const [errorDay, setErrorDay] = useState(false)
  const [errorMonth, setErrorMonth] = useState(false)
  const [errorYear, setErrorYear] = useState(false)
  const [errorDate, setErrorDate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const { year, month, day } = e.target.elements

    if (!errorDay && !errorMonth && !errorYear && !errorDate && isValidDay(day.value, month.value, year.value)) {
      calculateRealAge(year.value, month.value, day.value)
    }
  }

  function handleValidations(e) {
    const { day, month, year } = e.target.form.elements
    const inputYear = year.value
    const inputMonth = month.value
    const inputDay = day.value

    if (inputDay < 1 || inputDay > 31 || !isValidDay(inputDay, inputMonth, inputYear)) {
      setErrorDay(true)
    } else {
      setErrorDay(false)
    }

    if (inputMonth < 1 || inputMonth > 12) {
      setErrorMonth(true)
    } else {
      setErrorMonth(false)
    }

    if (inputYear < 0 || inputYear > actualYear) {
      setErrorYear(true)
    } else {
      setErrorYear(false)
    }

    if (!isDateValid(inputYear, inputMonth, inputDay)) {
      setErrorDate(true)
    } else {
      setErrorDate(false)
    }
  }

  function calculateRealAge(year, month, day) {
    const actualDate = new Date()
    let actualYear = actualDate.getFullYear()
    let actualMonth = actualDate.getMonth() + 1
    let actualDay = actualDate.getDate()

    const result = { years: 0, months: 0, days: 0 }

    if (actualDay < day) {
      actualMonth--
      const actualDays = actualDay + monthArr[actualMonth]
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

  const isAnyError = errorDay || errorMonth || errorYear || errorDate

  return (
    <main className="bg-white w-full md:w-[60rem] md:h-[46rem] md:rounded-br-[250px] rounded-br-[8rem] rounded-2xl md:p-16 py-12 px-6 mx-4">
      <form className="flex md:gap-8 gap-4 border-b-[1px] md:h-40 h-36 relative" onSubmit={handleSubmit} onChange={handleValidations}>
        <div className="flex flex-col">
          <label htmlFor="day" className={`custom-label ${errorDay ? 'text-red-500' : 'text-gray-500'}`} >DAY</label>
          <input type="number" name="day" className={`${errorDay ? "date-input-error" : "date-input"}`} placeholder="DD" required />
          {errorDay && <span className="italic text-red-500">Must be a valid day</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="month" className={`custom-label ${errorMonth ? 'text-red-500' : 'text-gray-500'}`} >MONTH</label>
          <input type="number" name="month" className={`${errorMonth ? "date-input-error" : "date-input"}`} placeholder="MM" required />
          {errorMonth && <span className="italic text-red-500">Must be a valid month</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="year" className={`custom-label ${errorYear ? 'text-red-500' : 'text-gray-500'}`} >YEAR</label>
          <input type="number" name="year" className={`${errorYear ? "date-input-error" : "date-input"}`} placeholder="YYYY" required />
          {errorYear && <span className="italic text-red-500">Must be in the past</span>}
          {errorDate && <span className="italic text-red-500 ">Must be a valid date</span>}

        </div>


        <button className={`arrow-button ${isAnyError ? 'disabled cursor-not-allowed' : ''}`} disabled={isAnyError}>
          <IconArrow className={'w-7 md:w-auto'} />
        </button>
      </form>

      <footer className="italic font-extrabold md:text-[7rem] text-6xl py-6 mt-10 md:mt-0">
        <div className="md:h-32">
          <span className="text-customPurple">{age.years}</span>
          <span> {age.years === 1 ? "year" : "years"}</span>
        </div>
        <div className="md:h-32">
          <span className="text-customPurple">{age.months}</span>
          <span> {age.months === 1 ? "month" : "months"}</span>
        </div>
        <div className="md:h-32">
          <span className="text-customPurple">{age.days}</span>
          <span> {age.days === 1 ? "day" : "days"}</span>
        </div>
      </footer>
    </main>
  )
}

export default App
