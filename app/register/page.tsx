"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const USERS_KEY = 'extreme-sports-users';
const SESSION_KEY = 'extreme-sports-session';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    if (users.some((u: { email: string }) => u.email === email)) {
      setError('このメールアドレスは既に登録されています。');
      return;
    }
    const nextUsers = [...users, { email, password }];
    localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email }));
    router.push('/dashboard');
  };

  return (
    <main style={{ maxWidth: 520, margin: '0 auto', padding: 32 }}>
      <h1>新規登録</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, marginTop: 24 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
        {error && <p>{error}</p>}
        <button type="submit">登録</button>
      </form>
    </main>
  );
}
