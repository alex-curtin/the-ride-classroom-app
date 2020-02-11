import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, toggleUser }) => {
  const teacherLinks = (
    <ul data-test='teacher-links'>
      <li>
        <Link to='/students'>
          Students
      </Link>
      </li>

      <li>
        <Link to='/dates'>
          Dates
          </Link>
      </li>
    </ul>
  );

  const custodianLinks = (
    <ul data-test='custodian-links'>
      <li>
        <Link to='/desks'>
          Desks
          </Link>
      </li>
    </ul>
  )

  return (
    <nav data-test='component-navbar'>
      <Link to='/' ><h1>Classroom App</h1></Link>
      <div className='nav-user'>
        <i className='fas fa-user-circle fa-2x'></i>
        <h2>
          {user}
        </h2>
      </div>

      {user === 'teacher' ? teacherLinks : custodianLinks}

      <button onClick={toggleUser} data-test='toggle-user-button'>
        Switch to {user === 'teacher' ? 'Custodian' : 'Teacher'}
      </button>
    </nav>
  )
}

export default Navbar;
