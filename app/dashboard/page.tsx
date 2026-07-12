"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SESSION_KEY = 'extreme-sports-session';

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const sessionRaw = localStorage.getItem(SESSION_KEY);
    if (!sessionRaw) {
      router.replace('/login');
      return;
    }
    try {
      const session = JSON.parse(sessionRaw);
      setEmail(session.email || '');
    } catch {
      router.replace('/login');
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    router.push('/login');
  };

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: 32 }}>
      <h1>EXTREME SPORTS ダッシュボード</h1>
      <p>自動ログイン中: {email}</p>
      <p>ここからゲーム設定、セッションマーカー、カメラ、ステージ選択を追加できます。</p>
      <button onClick={logout}>ログアウト</button>
    </main>
  );
}
