import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import RootContent from '@/components/RootContent'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Manaja Solutions | Premium Real Estate in Nigeria',
  description: 'Discover exclusive properties across Nigeria\'s prime locations. From luxury apartments to investment opportunities, find your perfect space with Manaja Solutions.',
  themeColor: '#0A1628',
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
