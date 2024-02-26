import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary_500: string
      primary_100: string

      secondary_500: string

      neutral_500: string
      neutral_100: string
      neutral_white: string
    }
    breakpoints: {
      minSM: string
      minMD: string
      minLG: string
      minXL: string
    }
  }
}
