import React from 'react';
import { Link } from 'react-router-dom';

const CustodianLanding = () => {
  return (
    <div data-test='component-custodian-landing' className='landing-page'>
      <h2 className='page-headline'>Welcome Custodian!</h2>
      <div>
        Use this app to pull up information about{' '}
        <Link to='/custodian/desks'>Desks</Link>
      </div>
    </div>
  )
};

export default CustodianLanding;
