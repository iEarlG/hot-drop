import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
});

export const metadata = {
  title: 'HOT DROP',
  description: 'HOT DROP is a collection of the hottest drops in the music space.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
