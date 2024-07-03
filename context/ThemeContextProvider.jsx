'use client'

import { ThemeProvider } from 'next-themes'

export default function ThemeContextProvider({children}) {
     return <ThemeProvider>{children}</ThemeProvider>
}