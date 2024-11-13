import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
      <div className='bg-gray-800 border border-gray-700 rounded-xl p-10 shadow-lg'>
        <h2 className='text-3xl font-bold text-white mb-8 text-center'>Login</h2>
        <form
          onSubmit={(e) => submitHandler(e)}
          className='flex flex-col items-center justify-center space-y-6'
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='outline-none bg-gray-700 text-white border border-gray-600 font-medium text-lg py-3 px-6 rounded-full focus:ring-2 focus:ring-emerald-500 w-80 placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='outline-none bg-gray-700 text-white border border-gray-600 font-medium text-lg py-3 px-6 rounded-full focus:ring-2 focus:ring-emerald-500 w-80 placeholder:text-gray-400'
            type='password'
            placeholder='Enter your password'
          />
          <button
            className='mt-7 text-white font-semibold bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 transition duration-200 py-3 px-8 w-full rounded-full text-lg'
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
