'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { StateProvider } from '@/components/StateProvider'
import { ThemeProvider } from '@/components/ThemeProvider'
import { useTheme } from '@/components/ThemeProvider'
import getTheme from '@/lib/theme'

function ThemeWrapper({ children }) {
  const { mode } = useTheme()
  const theme = getTheme(mode)
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default function RootContent({ children }) {
  return (
    <StateProvider>
      <ThemeProvider>
        <ThemeWrapper>
          <Navbar />
          {children}
          <Footer />
        </ThemeWrapper>
      </ThemeProvider>
    </StateProvider>
  )
}
