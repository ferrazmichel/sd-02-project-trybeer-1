import React from 'react';

const NotFound = ({ history }) => {
  setTimeout(()=> history.push('/'),5500);
  return (
    <div className="not_found">
      <h1>Pagina não encontrada</h1>
      <img className="giphy_not_found" src="https://media2.giphy.com/media/njYrp176NQsHS/giphy-downsized-large.gif" />
    </div>
  )
};
export default NotFound;
