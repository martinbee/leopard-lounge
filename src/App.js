import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  ThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/auth';
import AppHeader from './components/AppHeader';
import RootRouter from './components/RootRouter';

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <AuthContextProvider>
              <AppHeader>
                <RootRouter />
              </AppHeader>
            </AuthContextProvider>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
