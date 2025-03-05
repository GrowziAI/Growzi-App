import 'styled-components/native'
import { ThemeType } from './globals'

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}