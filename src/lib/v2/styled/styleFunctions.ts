import { darkTheme } from './dark'
import { lightTheme } from './light'
import { BaseTheme, ThemeTypes } from './types'

export interface StyledProps {
  theme: BaseTheme
}

export function selectV2Theme(theme: ThemeTypes) {
  switch (theme) {
    case 'light':
      return lightTheme
    case 'dark':
    default:
      return darkTheme
  }
}

/* ———————————–———————————–———————————–——–——
    Text
———————————–———————————–———————————–——–—— */

export const overflowEllipsis = () => `
  flex: 1 1 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

/* ———————————–———————————–———————————–——–——
    Icon
———————————–———————————–———————————–——–—— */

/* ———————————–———————————–———————————–——–——
    Spaces
———————————–———————————–———————————–——–—— */

/* ———————————–———————————–———————————–——–——
    Background
———————————–———————————–———————————–——–—— */

/* ———————————–———————————–———————————–——–——
    Border
———————————–———————————–———————————–——–—— */

export const hideScroll = () => `
  overflow-y: scroll;

  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer 10+ */
  -ms-overflow-style: none;
  
  /* WebKit */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

/* ———————————–———————————–———————————–——–——
    Shadow
———————————–———————————–———————————–——–—— */

/* ———————————–———————————–———————————–——–——
    Button
———————————–———————————–———————————–——–—— */

/* ———————————–———————————–———————————–——–——
    Form
———————————–———————————–———————————–——–—— */

/* ———————————–———————————–———————————–——–——
    Table
———————————–———————————–———————————–——–—— */

/* ———————————–———————————–———————————–——–——
    Responsive Styles
———————————–———————————–———————————–——–—— */

export const fromMobile = ({ theme }: StyledProps) => `
  min-width: ${theme.breakpoints.mobile}px
`

export const fromTablet = ({ theme }: StyledProps) => `
  min-width: ${theme.breakpoints.tablet}px
`

export const fromLaptop = ({ theme }: StyledProps) => `
  min-width: ${theme.breakpoints.laptop}px
`

export const fromDesktop = ({ theme }: StyledProps) => `
  min-width: ${theme.breakpoints.desktop}px
`

export const underMobile = ({ theme }: StyledProps) => `
  max-width: ${theme.breakpoints.mobile}px
`

export const underTablet = ({ theme }: StyledProps) => `
  max-width: ${theme.breakpoints.tablet}px
`

export const rightSidePageLayout = () => `
  width: 100%;
  max-width: 920px;
`
