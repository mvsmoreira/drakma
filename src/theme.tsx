import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      main: "#F6AD55",
      secondary: "#00B5D8",
      textOnMain: "#1A202C",
    },
    light: {
      surfacePrimary: "#EDF2F7",
      surfaceSecondary: "#E2E8F0",
      surfaceSecondaryHover: "#CBD5E0",
      textPrimary: "#1A202C",
      textSecondary: "#718096",
    },
    dark: {
      surfacePrimary: "#171923",
      surfaceSecondary: "#1A202C",
      surfaceSecondaryHover: "#2D3748",
      textPrimary: "#CBD5E0",
      textSecondary: "#718096",
    },
    semantic: {
      success: "#68D391",
      error: "#F56565",
      info: "#9F7AEA",
    }
  },
  styles: {
    global: {
      body: {
        bg: 'light.surfacePrimary',
        color: 'gray.800',
      }
    }
  },
  fonts: {
    heading: `'Roboto', 'sans-serif'`,
    body: `'Roboto', 'sans-serif'`,
  }
})

export default theme
