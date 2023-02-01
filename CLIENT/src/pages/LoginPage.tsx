import { SyntheticEvent, useState } from 'react';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e: SyntheticEvent) => {
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

    const data = await res.json();
    localStorage.setItem(
      'currentUser',
      JSON.stringify({ name: data.name, token: data.token })
    );
    setLoginData({ username: '', password: '' });
  };

  return (
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
            setLoginData({ ...loginData, username: e.target.value })
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
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <span className="error-message">* Error message</span>
      </label>

      <button type="submit">Prihlásiť</button>
    </form>
  );
};
export default LoginPage;
