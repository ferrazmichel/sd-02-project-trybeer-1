import React, { useEffect, useState } from 'react';

import { nameAndEmail, postName } from './services';
import './style.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const request = async () => {
      const { data } = await nameAndEmail();
      if (data.error) return setError(data.error);
      setName(data.name);
      setEmail(data.email);
    }
    request();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    return postName({ name, email }).catch((error) => setError);
  };

  return (
    <div>
      {error ? <h2>{error.message}</h2> :
        <form className="profile_form" onSubmit={(e) => handleSubmit(e)}>
          <div className="profile_container_all">
            <div className="prof_contain">
              <label className="prof_label profile_font">Nome</label>
              <input
                type="text"
                onChange={({ target }) => {
                  setName(target.value);
                  setDisable(false);
                }}
                value={name}
                className="profile_input"
                data-testid="profile-name-input"
                required
              />
            </div>
            <div className="prof_contain" >
              <label className="prof_label profile_font">Email</label>
              <input
                type="text"
                defaultValue={email}
                data-testid="profile-email-input"
                className="profile_input"
                readOnly
              />
            </div>
          </div>
          <div className="prof_contain_submit profile_font">
              <button
                data-testid="profile-save-btn"
                type="submit"
                disabled={disable}
                className={`profile_submit profile_font ${disable ? 'red_background' : 'green_background'}`}
              >
                Salvar
              </button> 
          </div>
        </form>
      }
    </div>
  );
};

export default Profile;
