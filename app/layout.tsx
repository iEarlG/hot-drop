import Sidebar from '@/components/Sidebar';
import './globals.css'
import { Roboto } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider';

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
      <body className={roboto.className}>
        <SupabaseProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  )
}
