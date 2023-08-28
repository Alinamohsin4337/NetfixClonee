import React from 'react';

const NotAvailable = ({ type }) => {
  return (
    <h1 className='notAvailable'>
      {type === 'tv' ? 'No TV shows available for selected genre' : 'No movies available for selected genre'}
    </h1>
  );
}

export default NotAvailable;


