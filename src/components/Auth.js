// filepath: /c:/Users/PC/Desktop/LaburoApp/src/components/Auth.js
import React, { useState } from 'react';
import { supabase } from '../supabase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) setError(error.message);
    else setMessage('Check your email for the confirmation link.');
  };

  const handleSignIn = async () => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) setError(error.message);
    else setMessage('You have signed in successfully.');
  };

  return (
    <div>
      <h2>Auth Component</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Auth;