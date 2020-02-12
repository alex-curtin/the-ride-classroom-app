import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Dates = ({ dates, loadDates }) => {
  useEffect(() => {
    if (dates.length === 0) {
      loadDates();
    }
  }, [loadDates, dates]);

  if (dates.length > 0) {
    return (
      <div data-test='component-dates'>
        <h2 className='page-headline'>Dates</h2>
        <h4>click on a date to get details</h4>
        <ul>
          {dates.map(date => (
            <li key={date.date} data-test='date-item' className='list-item'>
              <Link to={`/teacher/dates/${date.date}`}>
                <Moment format='ddd, MMMM Do YYYY' date={date.date} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return (
      <div data-test='loading'>
        loading...
    </div>
    )
  }
}

export default Dates;
