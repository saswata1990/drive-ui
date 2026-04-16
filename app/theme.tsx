// src/theme.tsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Explicitly force light mode
  },
});

export default theme;