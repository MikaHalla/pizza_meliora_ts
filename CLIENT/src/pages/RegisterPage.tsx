import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';
import { FormInputType, FormValuesType } from '../types/types';
import Home from './Home';

const RegisterPage = () => {
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
      errorMessage:
        'Meno musí mať 3-16 znakov a nesmie obsahovať špeciálne symboly.',
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$',
      autoFocus: true,
    },
    {
      type: 'password',
      name: 'password',
      label: 'password',
      placeholder: 'Heslo',
      errorMessage:
        'Heslo musí mať aspoň 8 znakov a musí obsahovať aspoň 1 číslo.',
      required: true,
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$`,
    },
    {
      type: 'password',
      name: 'confirmPassword',
      label: 'confirmPassword',
      placeholder: 'Opakovať heslo',
      errorMessage: 'Heslá sa musia zhodovať.',
      required: true,
      pattern: formValues.password,
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formValues;

    if (!username || !password || !confirmPassword) {
      console.log('Incomplete credentials.');
      return;
    }

    if (password !== confirmPassword) {
      console.log(`Passwords don't match.`);
      return;
    }

    fetchUserData(username, password);

    setFormValues({
      username: '',
      password: '',
      confirmPassword: '',
    });
  };

  const fetchUserData = async (
    username: string,
    password: string
  ) => {
    const res = await fetch(
      'http://localhost:5000/api/users/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: username,
          password,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  const resetFields = () => {};

  return (
    <>
      <Home />
      <Modal>
        <form
          className="register-form form"
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
          <button>Registrovať</button>
          <p className="switch-form">
            Už mám účet.
            <Link to="/login">Prihlásiť</Link>
          </p>
        </form>
      </Modal>
    </>
  );
};
export default RegisterPage;
