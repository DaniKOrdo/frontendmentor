function AgeDisplay({ years, months, days }) {
  return (
    <footer className="italic font-extrabold md:text-[7rem] text-6xl py-6 mt-10 md:mt-0">
      <div className="md:h-32">
        <span className="text-customPurple">{years}</span>
        <span> {years === 1 ? "year" : "years"}</span>
      </div>
      <div className="md:h-32">
        <span className="text-customPurple">{months}</span>
        <span> {months === 1 ? "month" : "months"}</span>
      </div>
      <div className="md:h-32">
        <span className="text-customPurple">{days}</span>
        <span> {days === 1 ? "day" : "days"}</span>
      </div>
    </footer>
  );
}

export default AgeDisplay