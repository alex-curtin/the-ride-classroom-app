import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moment } from 'react-moment';

const Dates = ({ dates, loadDates }) => {
  useEffect(() => {
    loadDates();
  }, [loadDates]);

  if (dates.length > 0) {
    return (
      <div data-test='component-dates'>
        <h2>Dates</h2>
        <ul>
          {dates.map(date => (
            <li key={date.date} data-test='date-item'>
              <Link to={`/dates/${date.date}`}>
                <Moment format='ddd, MMMM Do YYYY' date={date.date} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  } else return (
    <div data-test='loading'>
      loading...
    </div>
  )
}

export default Dates;
