import React from 'react';
import Moment from 'react-moment'

const DeskHistory = ({ dates }) => {
  return (
    <div data-test='component-desk-history'>
      {dates.map(date => (
        <div key={date.date} data-test='date-item'>
          <Moment format="MM/DD/YYYY">{date.date}</Moment>
        </div>
      ))}
    </div>
  )
}

export default DeskHistory;
