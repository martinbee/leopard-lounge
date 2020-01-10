import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import AppHeader from './components/AppHeader';
import Router from './components/Router';

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppHeader>
          <Router />
        </AppHeader>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
