export default function HomePage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32, maxWidth: 960, margin: '0 auto' }}>
      <h1 style={{ fontSize: 40, marginBottom: 12 }}>EXTREME SPORTS</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 24 }}>
        Windows向けリアル物理アクションゲームの土台です。まずはログインして、
        セーブデータと設定を復帰できる構成にしています。
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href="/login" style={{ padding: '12px 18px', border: '1px solid #333', borderRadius: 10, textDecoration: 'none' }}>
          ログイン
        </a>
        <a href="/register" style={{ padding: '12px 18px', border: '1px solid #333', borderRadius: 10, textDecoration: 'none' }}>
          新規登録
        </a>
        <a href="/dashboard" style={{ padding: '12px 18px', border: '1px solid #333', borderRadius: 10, textDecoration: 'none' }}>
          ダッシュボード
        </a>
      </div>
    </main>
  );
}
