import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';

import smallLogo from '../images/leopard-57.png';


const HeaderWrapper = styled(Toolbar)`
  justify-content: space-between;
`;

const LogoAndTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const AppHeader = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <HeaderWrapper>
          <LogoAndTitleWrapper>
            <HeaderLogo src={smallLogo} />
            <Typography variant="h6">
              Leopard Lounge
            </Typography>
          </LogoAndTitleWrapper>
          <Button color="inherit">Login</Button>
        </HeaderWrapper>
      </AppBar>
      {children}
    </>
  );
};

export default AppHeader;
