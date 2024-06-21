"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/hooks/useAuthContext";

import styles from './login.module.css';
import { useLogin } from '@/hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading, error } = useLogin();
  const { state: userState } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (userState.user) {
      router.push('/');
    }
  }, [userState, router]);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    await login(email, password);
    router.push('/');
  }

  return (
    <>
      <main className='bg-gray-500'>
        <div>
          <form className={styles.login}>
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

            <button disabled={isLoading} onClick={handleSubmit}>Log in</button>
            {error && <div className={styles.errorMsg}>{error}</div>}
          </form>
        </div>
        
      </main>
    </>
  )
}

export default Login;