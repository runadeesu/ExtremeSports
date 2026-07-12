export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, background: '#0b0b0f', color: '#f5f5f5' }}>{children}</body>
    </html>
  );
}
