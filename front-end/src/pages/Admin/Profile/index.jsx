import React, { useEffect, useState } from 'react';
import { getData } from '../../../services/Request';
import Message from '../../../components/Message';

const URL = "http://localhost:3001/users/profile";

const AdminProfile = () => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getData(URL)
      .then(({ data }) => setUser(data))
      .catch(({ error }) => setError(error));
  }, []);

  return (
    <React.Fragment>
      {error
        ? (
          <Message message={error} setError={setError} type="ALERT" infinity />
        )
        :
        (<div>
          <h2>Perfil</h2>
          <h3 data-testid="profile-name">Nome:{user.name}</h3>
          <h3 data-testid="profile-email">Email:{user.email}</h3>
        </div>)
      }
    </React.Fragment>
  );
}

export default AdminProfile;
