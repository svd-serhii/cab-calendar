import React from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import { ContentWrapper, Main } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const Layout = () => {
  return (
    <ContentWrapper>
      <Header />
      <Main>
        <SideBar />
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </ContentWrapper>
  );
};

export default Layout;
