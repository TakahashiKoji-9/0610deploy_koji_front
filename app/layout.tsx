import '../styles/globals.css'

export const metadata = {
  title: 'POS System',
  description: 'POS検索画面',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 font-sans">{children}</body>
    </html>
  )
}
