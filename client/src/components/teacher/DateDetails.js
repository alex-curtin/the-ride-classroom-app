import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import DeskItem from './DeskItem';
import { getStudentByPositionId, getAbsentStudents } from '../../services/helpers';

/**
 * Functional React component for displaying classroom layout for a specific date.
 * @user Teacher
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const DateDetails = ({ date, students, room, loadRooms, loadStudents }) => {
  useEffect(() => {
    if (!room) {
      loadRooms();
    }
    if (students.length === 0) {
      loadStudents();
    }
  }, [loadRooms, loadStudents]);

  /**
   * Renders a DeskItem for each position in room prop.
   * @returns {JSX.Element}
   */
  const renderDesks = () => (room.positions.map(position => (
    <div data-test='desk-item' key={position} className='desk'>
      <DeskItem
        student={getStudentByPositionId(position, date, students)}
      />
    </div>
  )));

  /**
   * Renders list of absent students.
   * @returns {JSX.Element}
   */
  const renderAbsentStudents = () => (getAbsentStudents(date, students).map(student => (
    <p key={student.id} data-test='absent-student'>
      <Link to={`/teacher/students/${student.id}`}>
        {student.bio.givenName} {student.bio.familyName}
      </Link>
    </p>
  )));

  if (date && room && students.length > 0) {
    return (
      <div data-test='component-date-details'>
        <Link to='/teacher/dates'>
          <i className='fas fa-angle-left back-link'></i>
          {' '}all dates
          </Link>
        <h2 className='page-headline'>
          <Moment format='ddd, MMMM Do YYYY'>{date.date}</Moment>
        </h2>

        <h4>classroom</h4>
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
