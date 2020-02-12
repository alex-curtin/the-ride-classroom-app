import React, { useEffect } from 'react';
import Moment from 'react-moment';

const DeskDetails = ({
  desk, dates,
  students, room,
  loadDesks,
  loadStudents,
  loadDates,
  loadRooms
}) => {
  useEffect(() => {
    if (!desk) {
      loadDesks();
    }
    if (students.length === 0) {
      loadStudents();
    }
    if (dates.length === 0) {
      loadDates();
    }
    if (!room) {
      loadRooms();
    }
  })

  if (desk && room && dates.length > 0 && students.length > 0) {
    return (
      <div data-test='component-desk-details'>
        <p>Desk ID: {desk.id}</p>
        <p>
          <span>Purchased: </span>
          <Moment format='MM/DD/YYYY'>{desk.purchased}</Moment>
        </p>
        {desk.repairs.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Date Broken</th>
                <th>Date Fixed</th>
                <th>Issue</th>
                <th>Fix</th>
              </tr>
            </thead>
            <tbody>
              {desk.repairs.map(repair => (
                <tr key={repair.repairId}>
                  <td><Moment format='MM/DD/YYYY'>{repair.breakDate}</Moment></td>
                  <td><Moment format='MM/DD/YYYY'>{repair.fixDate}</Moment></td>
                  <td>{repair.issueString}</td>
                  <td>{repair.fixString}</td>
                </tr>
              ))}
            </tbody>
          </table>)}
        <hr />
      </div>
    )
  } else return (
    <div data-test='loading'>
      loading...
    </div>
  )
}

export default DeskDetails;
