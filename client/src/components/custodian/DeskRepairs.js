import React from 'react';
import Moment from 'react-moment';

/**
 * Functional React component to render all repairs for a single desk.
 * Child of DeskDetails component.
 * @user Custodian
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const DeskRepairs = ({ repairs }) => {
  return (
    <>
      <h4>Desk Repair Data</h4>
      {repairs.length > 0 ? (
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
        </table>) : (
          <div data-test='no-repairs'>No repairs</div>
        )
      }
    </>
  );
};

export default DeskRepairs;
