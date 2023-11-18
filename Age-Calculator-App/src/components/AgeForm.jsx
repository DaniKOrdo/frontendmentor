import { useState } from 'react';
import { IconArrow } from '../utils/icons';

const longMonths = [1, 3, 5, 7, 8, 10, 12];
const actualYear = new Date().getFullYear();

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isValidDay(day, month, year) {
  const parsedDay = parseInt(day, 10);
  const parsedMonth = parseInt(month, 10);
  const parsedYear = parseInt(year, 10);

  if (parsedMonth === 2) {
    if (isLeapYear(parsedYear)) {
      return parsedDay >= 1 && parsedDay <= 29;
    } else {
      return parsedDay >= 1 && parsedDay <= 28;
    }
  } else if (longMonths.includes(parsedMonth)) {
    return parsedDay >= 1 && parsedDay <= 31;
  } else {
    return parsedDay >= 1 && parsedDay <= 30;
  }
}

function isDateValid(year, month, day) {
  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  return inputDate <= currentDate;
}

function AgeForm({ calculateAge }) {
  const [errorDay, setErrorDay] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { year, month, day } = e.target.elements;

    if (!errorDay && !errorMonth && !errorYear && !errorDate && isValidDay(day.value, month.value, year.value)) {
      calculateAge(year.value, month.value, day.value);
    }
  }

  function handleValidations(e) {
    const { day, month, year } = e.target.form.elements;
    const inputYear = year.value;
    const inputMonth = month.value;
    const inputDay = day.value;

    if (inputDay < 1 || inputDay > 31 || !isValidDay(inputDay, inputMonth, inputYear)) {
      setErrorDay(true);
    } else {
      setErrorDay(false);
    }

    if (inputMonth && (inputMonth < 1 || inputMonth > 12)) {
      setErrorMonth(true);
    } else {
      setErrorMonth(false);
    }

    if (inputYear && (inputYear < 1900 || inputYear > actualYear)) {
      setErrorYear(true);
    } else {
      setErrorYear(false);
    }

    if (!isDateValid(inputYear, inputMonth, inputDay)) {
      setErrorDate(true);
    } else {
      setErrorDate(false);
    }
  }

  const isAnyError = errorDay || errorMonth || errorYear || errorDate;

  return (
    <form className="flex md:gap-8 gap-4 border-b-[1px] md:h-40 h-36 relative" onSubmit={handleSubmit} onChange={handleValidations}>
      <div className="flex flex-col">
        <label htmlFor="day" className={`custom-label ${errorDay || errorDate ? 'text-red-500' : 'text-gray-500'}`} >DAY</label>
        <input type="number" name="day" className={`${errorDay || errorDate ? "date-input-error" : "date-input"}`} placeholder="DD" required />
        {errorDay && <span className="italic text-red-500">Must be a valid day</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="month" className={`custom-label ${errorMonth || errorDate ? 'text-red-500' : 'text-gray-500'}`} >MONTH</label>
        <input type="number" name="month" className={`${errorMonth || errorDate ? "date-input-error" : "date-input"}`} placeholder="MM" required />
        {errorMonth && <span className="italic text-red-500">Must be a valid month</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="year" className={`custom-label ${errorYear || errorDate ? 'text-red-500' : 'text-gray-500'}`} >YEAR</label>
        <input type="number" name="year" className={`${errorYear || errorDate ? "date-input-error" : "date-input"}`} placeholder="YYYY" required />
        {errorYear && <span className="italic text-red-500">Must be between 1900 and {actualYear}</span>}
        {errorDate && <span className="italic text-red-500">Must be in the past</span>}
      </div>

      <button className={`arrow-button ${isAnyError ? 'disabled cursor-not-allowed' : ''}`} disabled={isAnyError}>
        <IconArrow className={'w-7 md:w-auto'} />
      </button>
    </form>
  );
}

export default AgeForm;
