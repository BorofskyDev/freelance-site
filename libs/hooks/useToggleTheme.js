import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export function useThemeStatus() {
    const { theme, setTheme, systemTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    const isLight =
      theme === 'light' || (theme === 'system' && systemTheme === 'light')

    return { isLight, mounted, setTheme }
}