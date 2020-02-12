import React from 'react';
import { Link } from 'react-router-dom';

const Desk = ({ student }) => {
  if (student) {
    const { id, bio: { givenName, familyName } } = student;
    return (
      <div className='desk'>
        <Link to={`/teacher/students/${id}`}>
          <p data-test='student-name'>{givenName} {familyName}</p>
        </Link>
      </div>
    )
  } else return (<div data-test='empty-desk' className='desk'></div>)
};

export default Desk;