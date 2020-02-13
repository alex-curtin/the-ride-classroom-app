import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional React component for teacher landing page.
 * @user Teacher
 * @returns {JSX.Element} - Rendered component.
 */
const TeacherLanding = () => {
  return (
    <div data-test='component-teacher-landing' className='landing-page'>
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
