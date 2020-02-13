import React from 'react';
import Moment from 'react-moment'

import { getStudentByDeskAndDate } from '../../services/helpers';

/**
 * Functional React component to render data by date for a single desk.
 * Child of DeskDetails component.
 * @user Custodian
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const DeskHistory = ({ dates, desk, students }) => {
  return (
    <table data-test='component-desk-history'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Status</th>
          <th>Student</th>
        </tr>
      </thead>
      <tbody>
        {dates.map(date => (
          <tr key={date.date} data-test='date-item'>
            <td>
              <Moment format="MM/DD/YYYY">{date.date}</Moment>
            </td>
            <td>{date.desks.find(el => el.deskId === desk.id).status}</td>
            <td>{getStudentByDeskAndDate(date, students, desk.id)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DeskHistory;
