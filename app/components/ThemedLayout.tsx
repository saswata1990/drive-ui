import React from 'react'
import {ThemeProvider} from 'next-themes'

function ThemedLayout({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default ThemedLayout