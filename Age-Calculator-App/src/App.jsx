import { useState } from 'react'
import { IconArrow } from './utils/icons'

const monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function App() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' })

  const handleSubmit = (e) => {
    e.preventDefault()

    const { year, month, day } = e.target.elements

    calculateRealAge(year.value, month.value, day.value, monthArr)
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
    <main className='bg-white w-[950px] h-[735px] rounded-br-[250px] rounded-2xl p-16'>
      <form className="flex gap-8 border-b-[1px] h-40 relative" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="day" className="custom-label" >DAY</label>
          <input type="text" name="day" className="date-input" placeholder="DD" />
        </div>

        <div>
          <label htmlFor="month" className="custom-label" >MONTH</label>
          <input type="text" name="month" className="date-input" placeholder="MM" />
        </div>

        <div>
          <label htmlFor="year" className="custom-label" >YEAR</label>
          <input type="text" name="year" className="date-input" placeholder="YYYY" />
        </div>

        <button className='absolute right-0 flex items-center justify-center w-24 h-24 rounded-full -bottom-12 bg-customPurple hover:bg-violet-600'>
          <IconArrow />
        </button>
      </form>

      <footer className='italic font-extrabold text-[7rem] py-6'>
        <div className='h-32'>
          <span className='text-customPurple'>{age.years}</span>
          <span> {age.years === 1 ? 'year' : 'years'}</span>
        </div>
        <div className='h-32'>
          <span className='text-customPurple'>{age.months}</span>
          <span> {age.months === 1 ? 'month' : 'months'}</span>
        </div>
        <div className='h-32'>
          <span className='text-customPurple'>{age.days}</span>
          <span> {age.days === 1 ? 'day' : 'days'}</span>
        </div>
      </footer>
    </main>
  )
}

export default App
