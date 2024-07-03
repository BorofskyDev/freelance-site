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
        {mounted &&
          (isLight ? (
            <div
              className={`${styles.darkToggle} ${styles.active}`}
              onClick={handleToggleTheme}
            >
              <MoonIcon className={styles.icon} />
              <span>Dark</span>
            </div>
          ) : (
            <div
              className={`${styles.lightToggle} ${styles.active}`}
              onClick={handleToggleTheme}
            >
              <SunIcon className={styles.icon} />
              <span>Light</span>
            </div>
          ))}
      </div>
    )
}
