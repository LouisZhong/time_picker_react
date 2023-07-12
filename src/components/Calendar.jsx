import moment from 'moment'
import { useState } from 'react';

export default function Calendar () {
  const [currentMonth, setCurrentMonth] = useState(moment().format('MMM YYYY'))
  const [currentDate,setCurrentDate] = useState(moment().format('YYYY/MM/DD'))
  const currentYearAndMonth = moment().format('YYYY/MM')
  const daysInMonth = moment(currentMonth).daysInMonth()

  // 取得當前月份的第一天是星期幾
  const firstDayOfMonth = moment(currentMonth).startOf('momth').format('d')

  // 用於填充第一天之前的空格
  const blanks = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    blanks.push(<li key={i}><span></span></li>)
  }

  const days = []
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(<li key={day}><span id={day}>{day}</span></li>)
  }

  function gotoNextMonth() {
    const nextMonth = moment(currentMonth).add(1, 'month').format('MMM YYYY')
    const momentobj = moment.parseZone(nextMonth, 'MMM YYYY')
    setCurrentMonth(nextMonth)
  }

  function gotoPrevtMonth() {
    const prevtMonth = moment(currentMonth).subtract(1, 'month').format('MMM YYYY')
    const moefwef = moment.parseZone(prevtMonth, 'MMM YYYY')
    console.log('prev',prevtMonth)
    console.log('new',moefwef)
    setCurrentMonth(prevtMonth)
  }  

  function handleDateSelect (event) {
    console.log(event.target.id)
    const datePicked = event.target.id
    const selectedDate = `${currentYearAndMonth}/${datePicked}`
    setCurrentDate(selectedDate)
  }

  return (    
    <div className='container'>
      <div className='input-container'>        
        <p className="input-header">
          <span className="material-symbols-outlined">event</span>
          入住日期 - 退房日期
        </p>
        <input value={currentDate}/>
      </div>
      <div className="date-container">
        <div className="date-header">
          <button onClick={gotoPrevtMonth}>Prev</button>
          <button>{currentMonth}</button>
          <button onClick={gotoNextMonth}>Next</button>
        </div>
        <div className="date-body">
          <ul className="week-list">
            <li><span>Sun</span></li>
            <li><span>Mon</span></li>
            <li><span>Tue</span></li>
            <li><span>Wen</span></li>
            <li><span>Thu</span></li>
            <li><span>Fri</span></li>
            <li><span>Sat</span></li>
          </ul>
          <ul className="date-list" onClick={handleDateSelect}>
            {blanks}{days}
          </ul>
        </div>        
      </div>
    </div>
  );
}

