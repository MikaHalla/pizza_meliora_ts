import { SyntheticEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import AppContext from '../context/AppContext';
import Home from './Home';

const LoginPage = () => {
  const { setModalOpen } = useContext(AppContext);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    // send user data to server
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: loginData.username,
        password: loginData.password,
      }),
    });

    // clean input fields
    setLoginData({ username: '', password: '' });

    // if success, store user/token, close modal and navigate to home
    if (res.status === 200) {
      setModalOpen(false);
      const data = await res.json();
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ name: data.name, token: data.token })
      );
      navigate('/');

      // if error
    } else {
      console.log(res);
    }
  };

  return (
    <>
      <Home />
      <Modal>
        <form
          className="login-form form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>
            Meno
            <input
              type="text"
              value={loginData.username}
              placeholder="Meno"
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  username: e.target.value,
                })
              }
            />
            <span className="error-message">* Error message</span>
          </label>

          <label>
            Heslo
            <input
              type="password"
              className="error"
              value={loginData.password}
              placeholder="Heslo"
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            />
            <span className="error-message">* Error message</span>
          </label>

          <button type="submit">Prihlásiť</button>
        </form>
      </Modal>
    </>
  );
};
export default LoginPage;
