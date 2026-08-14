import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import RootContent from '@/components/RootContent'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Manaja Solutions | Premium and verified Real Estate in Nigeria',
  description: 'Discover exclusive properties across Nigeria\'s prime locations. From luxury apartments to investment opportunities, find your perfect space with Manaja Solutions.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
}

export const viewport = {
  themeColor: '#1A4C9E',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.className} bg-background`}>
      <body className="antialiased">
        <RootContent>
          {children}
        </RootContent>
        <Analytics />
      </body>
    </html>
  )
}
