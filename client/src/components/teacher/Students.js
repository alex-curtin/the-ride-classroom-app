import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional React component for list of all students.
 * @user Teacher
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or 'loading' if students prop has not loaded).
 */
const Students = ({ students, getStudents }) => {
  useEffect(() => {
    getStudents();
  }, [getStudents]);

  if (students.length > 0) {
    return (
      <div data-test='component-students'>
        <h2>Students</h2>
        {students.map(student => (
          <div key={student.id} data-test='student-item'>
            <Link to={`/students/${student.id}`}>
              <p>{student.bio.givenName} {student.bio.familyName}</p>
            </Link>
          </div>
        ))}
      </div>
    )
  } else return (
    <div data-test='loading'>
      loading...
    </div>
  )
}

export default Students;
