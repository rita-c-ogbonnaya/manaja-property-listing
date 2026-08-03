'use client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { StateProvider } from '@/components/StateProvider'
import theme from '@/lib/theme'

export default function RootContent({ children }) {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </StateProvider>
  )
}
