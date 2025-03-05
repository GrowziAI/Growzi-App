// -------------------------------------------------
// Theme
// -------------------------------------------------

import createGlobalStyle from "styled-components/native"

const common = {
    breakpoints: {
        mobile: '0px',
        tablet: '768px',
        desktop: '1024px',
        large: '1400px',
    },
    spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
    },


}

export const theme = {
    colors: {
        green: '#a2b6a1',
        lilac: '#d9cad3',
        pink: '#edd5db',
        brown: '#c2b0b0'
    },
    backgrounds: {
        dark: {
            primary: '#1a1a1a',
            secondary: '#333333',
        },
        light: {
            primary: '#f2f2f2',
            secondary: '#ffffff',
        }
    },
    ...common
}