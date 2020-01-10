import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import logo from './images/leopard-152.png';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Button onClick={() => {}} variant="contained">Hello</Button>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
