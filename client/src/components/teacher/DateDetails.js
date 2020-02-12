import React, { useEffect } from 'react';
import Moment from 'react-moment';

import DeskItem from './DeskItem';
import { getStudentByPositionId, getAbsentStudents } from '../../services/helpers';

const DateDetails = ({ date, students, room, loadRooms, loadStudents }) => {
  useEffect(() => {
    if (!room) {
      loadRooms();
    };
    if (students.length === 0) {
      loadStudents();
    }
  });

  const renderDesks = () => (room.positions.map(position => (
    <div data-test='desk-item' key={position}>
      <DeskItem
        student={getStudentByPositionId(position, date, students)}
      />
    </div>
  )));

  const renderAbsentStudents = () => (getAbsentStudents(date, students).map(student => (
    <p key={student.id} data-test='absent-student'>
      {student.bio.givenName} {student.bio.familyName}
    </p>
  )));

  if (date && room && students.length > 0) {
    return (
      <div data-test='component-date-details'>
        <h2>
          <Moment format='ddd, MMMM Do YYYY'>{date.date}</Moment>
        </h2>

        <div className='desks'>
          {renderDesks()}
        </div>

        <h3>Absent Students</h3>
        {renderAbsentStudents()}

      </div>
    )
  } else return (
    <div data-test='loading'>
      loading...
    </div>
  )
}

export default DateDetails;
