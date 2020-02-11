import React from 'react';

/**
 * Functional React component for a single student details.
 * @user Teacher
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const StudentDetails = ({
  student: {
    id,
    bio: {
      givenName,
      familyName,
      nickName,
      email,
      age,
      grade
    },
    history: {
      absences,
      gpa
    },
    grades
  }
}) => {
  return (
    <div data-test='component-student-details'>
      <h2>{givenName} {familyName}</h2>
      <p>Student id: <span>{id}</span></p>
      <p>Grade: <span>{grade}</span></p>
      <p>Age: <span>{age}</span></p>
      <p>Email: <span>{email}</span></p>
      <p>Nickname: <span>'{nickName}'</span></p>
      <p>GPA: <span>{gpa}</span></p>
      <p>Number of absences: <span>{absences}</span></p>
      <div>
        <h3>Grades</h3>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(grades).map(grade => (
              <tr key={grade}>
                <td>{grade}</td>
                <td>{grades[grade]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentDetails;
