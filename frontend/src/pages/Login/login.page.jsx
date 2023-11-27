import { useState } from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slices/user.slice';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(login, password));
  };

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <div className='login__page'>
      <h1 className='login__title'>Войти</h1>
      <form
        className='login__form'
        onSubmit={handleSubmit}>
        <label
          className='login__label'
          htmlFor='login'>
          Логин:
        </label>
        <input
          className='login__input'
          name='login'
          id='login'
          type='text'
          value={login}
          onChange={handleLoginChange}
          required
        />
        <label
          htmlFor='password'
          className='login__label'>
          Пароль:
        </label>
        <input
          className='login__input'
          name='password'
          id='password'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button
          className='login__submit'
          type='submit'>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
