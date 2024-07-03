'use client'
import { useThemeStatus} from '@/libs/hooks/useToggleTheme'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
    const { isLight, mounted, setTheme} = useThemeStatus()

    const handleToggleTheme = () => {
        setTheme(isLight ? 'dark' : 'light')
    }

    return (
    <div className={styles.themeToggle}>
      <div
        className={`${styles.lightToggle} ${
          isLight && mounted ? styles.active : ''
        }`}
        onClick={handleToggleTheme}
      >
        <SunIcon className={styles.icon} />
        <span>Light</span>
      </div>
      <div
        className={`${styles.darkToggle} ${
          !isLight && mounted ? styles.active : ''
        }`}
        onClick={handleToggleTheme}
      >
        <MoonIcon className={styles.icon} />
        <span>Dark</span>
      </div>
    </div>
  )
}
