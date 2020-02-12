import React from 'react';
import { Link } from 'react-router-dom';

const Desk = ({ student }) => {
  if (student) {
    const { id, bio: { givenName, familyName } } = student;
    return (
      <Link to={`/teacher/students/${id}`}>
        <p data-test='student-name'>{givenName} {familyName}</p>
      </Link>
    )
  } else return (<div data-test='empty-desk'></div>)
};

export default Desk;