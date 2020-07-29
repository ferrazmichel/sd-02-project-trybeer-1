import React, { useEffect, useState } from 'react';

import { getData, putData } from '../../services/Request';
import './style.css';
import Header from '../../components/Header';

const URL = 'http://localhost:3001/users/profile';

const renderButton = (disable) => (
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
);

const renderInputName = (setName, setDisable, name) => (
  <div className="prof_contain">
    <label className="prof_label profile_font">Nome</label>
    <input
      type="text"
      onChange={({ target }) => {
        setName(target.value);
        setDisable(!/^([a-z ]{12,})+$/i.test(target.value));
      }}
      value={name}
      className="profile_input"
      data-testid="profile-name-input"
      required
    />
  </div>
);

const renderInputEmail = (email) => (
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
);

const renderForm = (handleSubmit, setName, setDisable, name, email, disable) => (
  <form className="profile_form" onSubmit={(e) => handleSubmit(e)}>
    <div className="profile_container_all">
      {renderInputName(setName, setDisable, name)}
      {renderInputEmail(email)}
    </div>
    {renderButton(disable)}
  </form>
);

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const request = async () => {
      const { data, error } = await getData(URL);
      if (error) return setError(error.message);
      setName(data.name);
      setEmail(data.email);
    }
    request();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    return putData(URL, { name, email }).catch((error) => setError(error));
  };

  return (
    <div> <Header title="Meu perfil" />
      {error
        ? <h2>{error}</h2>
        : renderForm(handleSubmit, setName, setDisable, name, email, disable)
      }
    </div>
  );
};

export default Profile;
