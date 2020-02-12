import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional React component for list of all students.
 * @user Teacher
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or 'loading' if students prop has not loaded).
 */
const Students = ({ students, loadStudents }) => {
  useEffect(() => {
    if (students.length === 0) {
      loadStudents();
    }
  }, [loadStudents]);

  if (students.length > 0) {
    return (
      <div data-test='component-students' className='component-students'>
        <h2 className='page-headline'>Students</h2>
        <h4>click on a student to get details</h4>
        {students.map(student => (
          <div key={student.id} data-test='student-item' className='list-item'>
            <Link to={`/teacher/students/${student.id}`}>
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
