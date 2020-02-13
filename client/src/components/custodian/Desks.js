import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional React component diplaying list of all desks.
 * @user Custodian
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const Desks = ({ desks, loadDesks }) => {
  useEffect(() => {
    if (desks.length === 0) {
      loadDesks();
    }
  }, [loadDesks, desks])

  if (desks.length > 0) {
    return (
      <div data-test='component-desks' className='component-desks'>
        <h2 className='page-headline'>Desks</h2>
        {desks.map(desk => (
          <div className='list-item' key={desk.id} data-test='desk-item'>
            <Link to={`/custodian/desks/${desk.id}`}>
              <p>Desk ID: {desk.id}</p>
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

export default Desks;
