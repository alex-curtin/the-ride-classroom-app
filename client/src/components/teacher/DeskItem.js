import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional React component diplaying a classroom desk.
 *  Child of DateDetails component.
 * @user Teacher
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const DeskItem = ({ student }) => {
  if (student) {
    const { id, bio: { givenName, familyName } } = student;
    return (
      <Link to={`/teacher/students/${id}`}>
        <p data-test='student-name'>{givenName} {familyName}</p>
      </Link>
    )
  } else return (<div data-test='empty-desk'></div>)
};

export default DeskItem;