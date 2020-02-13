import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional React component for custodian landing page.
 * @user Custodian
 * @returns {JSX.Element} - Rendered component.
 */
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
