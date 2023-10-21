import { IconArrow } from './utils/icons'

function App() {
  return (
    <main className='bg-white w-[950px] h-[735px] rounded-br-[250px] rounded-2xl p-16'>
      <form className="flex gap-8 border-b-[1px] h-40 relative">
        <div>
          <label htmlFor="day" className="block mb-2 font-bold tracking-[0.2em] text-gray-500" >DAY</label>
          <input type="text" name="day" required className="px-6 py-4 text-4xl font-bold placeholder-gray-400 rounded-lg w-44 ring-1 ring-inset ring-gray-300 text focus:ring-customPurple focus:ring-2 focus-visible:outline-none" placeholder="DD" />
        </div>

        <div>
          <label htmlFor="month" className="block mb-2 font-bold tracking-[0.2em] text-gray-500" >MONTH</label>
          <input type="text" name="month" required className="px-6 py-4 text-4xl font-bold placeholder-gray-400 rounded-lg w-44 ring-1 ring-inset ring-gray-300 text focus:ring-customPurple focus:ring-2 focus-visible:outline-none" placeholder="MM" />
        </div>

        <div>
          <label htmlFor="year" className="block mb-2 font-bold tracking-[0.2em] text-gray-500" >YEAR</label>
          <input type="text" name="year" required className="px-6 py-4 text-4xl font-bold placeholder-gray-400 rounded-lg w-44 ring-1 ring-inset ring-gray-300 text focus:ring-customPurple focus:ring-2 focus-visible:outline-none" placeholder="YYYY" />
        </div>

        <button className='absolute right-0 flex items-center justify-center w-24 h-24 rounded-full -bottom-12 bg-customPurple'>
          <IconArrow />
        </button>
      </form>

      <footer className='italic font-extrabold text-[7rem] py-6'>
        <div className='h-32'>
          <span className='text-customPurple'>- - </span>
          <span>years</span>
        </div>
        <div className='h-32'>
          <span className='text-customPurple'>- - </span>
          <span>months</span>
        </div>
        <div className='h-32'>
          <span className='text-customPurple'>- - </span>
          <span>days</span>
        </div>
      </footer>
    </main>
  )
}

export default App
