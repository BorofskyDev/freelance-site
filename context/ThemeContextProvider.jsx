'use client'

import { ThemeProvider } from 'next-themes'

export default function ThemeContextProvider({ children }) {
  return (
    <ThemeProvider attribute='data-theme' default-theme='system' enableSystem>
      {children}
    </ThemeProvider>
  )
}
