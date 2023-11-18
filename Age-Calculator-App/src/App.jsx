import { useState } from 'react';
import AgeDisplay from './components/AgeDisplay';
import AgeForm from './components/AgeForm';

function App() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });

  function calculateRealAge(year, month, day) {
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);
    const ageDifference = currentDate - birthDate;

    const ageInYears = Math.floor(ageDifference / (365.25 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor((ageDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor((ageDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    setAge({ years: ageInYears, months: ageInMonths, days: ageInDays });
  }

  return (
    <main className="bg-white w-full md:w-[60rem] md:h-[46rem] md:rounded-br-[250px] rounded-br-[8rem] rounded-2xl md:p-16 py-12 px-6 mx-4">
      <AgeForm calculateAge={calculateRealAge} />
      <AgeDisplay years={age.years} months={age.months} days={age.days} />
    </main>
  );
}

export default App;
