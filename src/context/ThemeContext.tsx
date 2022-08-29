import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

const theme = {
  isDark: false,
  themeColors: {
    primary: {
      background: '#fff',
      foreground: '#000',
    },
    secondary: {
      background: '#000',
      foreground: '#fff',
    },
  },
}

export const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }
  return 'dark'
}

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextProps = {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
  currentTheme: string
  setCurrentTheme: Dispatch<SetStateAction<string>>
  themeColors: {
    primary: {
      background: string
      foreground: string
    }
    secondary: {
      background: string
      foreground: string
    }
  }
}

const initialTheme = {
  currentTheme: 'primary',
  setCurrentTheme: () => {},
  isDark: false,
  setIsDark: () => {},
  themeColors: {
    primary: {
      background: '#fff',
      foreground: '#000',
    },
    secondary: {
      background: '#000',
      foreground: '#fff',
    },
  },
}

export const ThemeContext = createContext<ThemeContextProps>(initialTheme)

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState('primary')
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark,
        currentTheme,
        setCurrentTheme,
        themeColors: {
          primary: {
            background: '#fff',
            foreground: '#000',
          },
          secondary: {
            background: '#000',
            foreground: '#fff',
          },
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
