import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Desks = ({ desks, loadDesks }) => {
  useEffect(() => {
    if (desks.length === 0) {
      loadDesks();
    }
  }, [loadDesks])

  if (desks.length > 0) {
    return (
      <div data-test='component-desks'>
        <h2>Desks</h2>
        {desks.map(desk => (
          <Link
            to={`/custodian/desks/${desk.id}`}
            data-test='desk-item'
            key={desk.id}
          >
            <p>Desk ID: {desk.id}</p>
          </Link>
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
