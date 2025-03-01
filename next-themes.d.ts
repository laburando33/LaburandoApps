declare module 'next-themes' {
    import { ReactNode } from 'react'
  
    export interface ThemeProviderProps {
      children: ReactNode
      forcedTheme?: string
      disableTransitionOnChange?: boolean
      enableSystem?: boolean
      enableColorScheme?: boolean
      storageKey?: string
      themes?: string[]
      defaultTheme?: string
      attribute?: string
      value?: { [themeName: string]: string }
    }
  
    export function ThemeProvider(props: ThemeProviderProps): JSX.Element
  
    export function useTheme(): {
      theme: string | undefined
      setTheme: (theme: string) => void
      forcedTheme: string | undefined
      resolvedTheme: string | undefined
      themes: string[]
      systemTheme: 'dark' | 'light' | undefined
    }
  }