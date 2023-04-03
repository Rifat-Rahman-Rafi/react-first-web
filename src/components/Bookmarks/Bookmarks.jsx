import React from 'react';

const Bookmarks = ({ cart }) => {
  return (
    <div className='bookmarks'>
      <h2>Bookmarked Items</h2>
      {cart.length === 0 ? (
        <p>No items bookmarked yet.</p>
      ) : (
        <ul>
          {cart.map((item) => (
        <></>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookmarks;
