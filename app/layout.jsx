import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import RootContent from '@/components/RootContent'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Manaja | Find the Right Property in Nigeria',
  description: 'Search thousands of homes, land and commercial property for sale and rent across Lagos, Abuja and every major city in Nigeria with Manaja.',
  themeColor: '#16213E',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.className} bg-background`}>
      <head />
      <body className="antialiased">
        <RootContent>
          {children}
        </RootContent>
        <Analytics />
      </body>
    </html>
  )
}
