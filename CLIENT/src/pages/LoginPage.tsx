import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';
import AppContext from '../context/AppContext';
import { FormInputType, FormValuesType } from '../types/types';
import Home from './Home';

const LoginPage = () => {
  const { setModalOpen } = useContext(AppContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValuesType>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const formInputs: FormInputType[] = [
    {
      type: 'text',
      name: 'username',
      label: 'username',
      placeholder: 'Užívateľské meno',
      autoFocus: true,
    },
    {
      type: 'password',
      name: 'password',
      label: 'password',
      placeholder: 'Heslo',
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    // send user data to server
    e.preventDefault();
    const res = await fetch(
      'https://pizza-meliora.cyclic.app/api/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formValues.username,
          password: formValues.password,
        }),
      }
    );

    // clean input fields
    setFormValues({
      username: '',
      password: '',
      confirmPassword: '',
    });

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
          {formInputs.map((input) => (
            <FormInput
              key={input.name}
              onChange={(e) => handleChange(e)}
              value={formValues[input.name]}
              {...input}
            />
          ))}
          <button type="submit">Prihlásiť</button>
          <p className="switch-form">
            Nemám účet.
            <Link to="/register">Registrovať</Link>
          </p>
        </form>
      </Modal>
    </>
  );
};
export default LoginPage;
