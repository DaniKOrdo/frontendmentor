import { useState } from 'react'
import { IconArrow } from './utils/icons'
import AgeDisplay from './components/AgeDisplay'
import AgeForm from './components/AgeForm'

const monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function App() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });

  function calculateRealAge(year, month, day) {
    const actualDate = new Date();
    let actualYear = actualDate.getFullYear();
    let actualMonth = actualDate.getMonth() + 1;
    let actualDay = actualDate.getDate();

    const result = { years: 0, months: 0, days: 0 };

    if (actualDay < day) {
      actualMonth--;
      const actualDays = actualDay + monthArr[actualMonth];
      result.days = actualDays - day;
    } else {
      result.days = actualDay - day;
    }

    if (actualMonth < month) {
      actualYear--;
      actualMonth += 12;
    }

    result.months = actualMonth - month;
    result.years = actualYear - year;

    setAge(result);
  }

  return (
    <main className="bg-white w-full md:w-[60rem] md:h-[46rem] md:rounded-br-[250px] rounded-br-[8rem] rounded-2xl md:p-16 py-12 px-6 mx-4">
      <AgeForm calculateAge={calculateRealAge} />
      <AgeDisplay years={age.years} months={age.months} days={age.days} />
    </main>
  );
}

export default App;