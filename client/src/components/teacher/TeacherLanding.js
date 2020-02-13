import React from 'react';
import { Link } from 'react-router-dom';

const TeacherLanding = () => {
  return (
    <div data-test='component-teacher-landing'>
      <h2 className='page-headline'>Welcome Teacher!</h2>
      <div>
        Use this app to pull up information by{' '}
        <Link to='/teacher/students'>Student</Link>
        {' '}or by{' '}
        <Link to='/teacher/dates'>Date</Link>
      </div>
    </div>
  )
}

export default TeacherLanding;
