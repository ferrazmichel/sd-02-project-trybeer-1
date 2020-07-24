import axios from 'axios';

const URL = 'http://localhost:3001/profile';

const nameAndEmail = () =>
  axios.get(URL).catch(({ message }) => ({ message }));

const postName = (info) =>
  axios.post(URL, info).catch(({ message }) => ({ message }));

export { nameAndEmail, postName };
