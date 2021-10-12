import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    
    background:{
        primary: string,
        secundary: string
    },
    colors: {
        primary: string,
        secundary: string
    },
    shadow: {
        primary: string,
        secundary: string
    }
  }
}