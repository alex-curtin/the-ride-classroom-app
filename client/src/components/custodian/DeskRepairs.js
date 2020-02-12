import React from 'react';
import Moment from 'react-moment';

const DeskRepairs = ({ repairs }) => {
  return (
    <table data-test='component-desk-repairs'>
      <thead>
        <tr>
          <th>Date Broken</th>
          <th>Date Fixed</th>
          <th>Issue</th>
          <th>Fix</th>
        </tr>
      </thead>
      <tbody>
        {repairs.map(repair => (
          <tr key={repair.repairId} data-test='repair-item'>
            <td><Moment format='MM/DD/YYYY'>{repair.breakDate}</Moment></td>
            <td><Moment format='MM/DD/YYYY'>{repair.fixDate}</Moment></td>
            <td>{repair.issueString}</td>
            <td>{repair.fixString}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DeskRepairs;
