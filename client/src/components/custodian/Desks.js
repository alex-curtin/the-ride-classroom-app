import React, { useEffect } from 'react';

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
          <div data-test='desk-item' key={desk.id}>

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
