"use client";

import { useState, useEffect } from 'react';
import { useSignup } from '@/hooks/useSignup';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useRouter } from 'next/navigation';

import styles from './signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error } = useSignup();

  const { state: userState } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (userState.user) {
      router.push('/');
    }
  }, [userState, router]);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    await signup(email, password);
  }

  return (
    <form className={styles.signup}>
      <label>Email:</label>
      <input 
        type='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input 
        type='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading} onClick={handleSubmit}>Sign Up</button>
      {error && <div className={styles.errorMsg}>{error}</div>}
    </form>
  )
}

export default Signup;