import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

import { CleanLink } from './styles';
import smallLogo from '../images/leopard-57.png';
import AppHeaderAuthButton from './AppHeaderAuthButton';


const HeaderWrapper = styled(Toolbar)`
  justify-content: space-between;
`;

const LogoAndTitleWrapper = styled(CleanLink)`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const BodyWrapper = styled.div`
  margin-top: 2rem;
`;

const AppLayout = ({ children }) => (
  <>
    <AppBar position="static">
      <HeaderWrapper>
        <LogoAndTitleWrapper to="/">
          <HeaderLogo src={smallLogo} />
          <Typography variant="h6">
            Leopard Lounge
          </Typography>
        </LogoAndTitleWrapper>
        <AppHeaderAuthButton />
      </HeaderWrapper>
    </AppBar>
    <BodyWrapper>
      {children}
    </BodyWrapper>
  </>
);

export default AppLayout;
