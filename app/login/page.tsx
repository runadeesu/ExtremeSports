"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const USERS_KEY = 'extreme-sports-users';
const SESSION_KEY = 'extreme-sports-session';

function readUsers(): Array<{ email: string; password: string }> {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    return [];
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) router.replace('/dashboard');
  }, [router]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = readUsers();
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      setError('メールアドレスまたはパスワードが違います。');
      return;
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email }));
    router.push('/dashboard');
  };

  return (
    <main style={{ maxWidth: 520, margin: '0 auto', padding: 32 }}>
      <h1>ログイン</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, marginTop: 24 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
        {error && <p>{error}</p>}
        <button type="submit">ログイン</button>
      </form>
    </main>
  );
}
