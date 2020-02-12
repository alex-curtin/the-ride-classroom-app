import React, { useEffect } from 'react';
import Moment from 'react-moment';

import DeskRepairs from './DeskRepairs';
import DeskHistory from './DeskHistory';

const DeskDetails = ({
  desk, dates,
  students, room,
  loadDesks,
  loadStudents,
  loadDates,
  loadRooms
}) => {
  useEffect(() => {
    if (!desk) {
      loadDesks();
    }
    if (students.length === 0) {
      loadStudents();
    }
    if (dates.length === 0) {
      loadDates();
    }
    if (!room) {
      loadRooms();
    }
  })

  if (desk && room && dates.length > 0 && students.length > 0) {
    return (
      <div data-test='component-desk-details'>
        <h2 className='page-headline'>Desk ID: {desk.id}</h2>
        <p>
          <span>Purchased: </span>
          <Moment format='MM/DD/YYYY'>{desk.purchased}</Moment>
        </p>
        <h4>Desk Repair Data</h4>
        {desk.repairs.length > 0 && (<DeskRepairs repairs={desk.repairs} />)}
        <h4>Desk History</h4>
        <DeskHistory dates={dates} desk={desk} students={students} />
        <hr />
      </div>
    )
  } else return (
    <div data-test='loading'>
      loading...
    </div>
  )
}

export default DeskDetails;
