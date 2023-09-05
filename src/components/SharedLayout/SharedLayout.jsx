import Loader from 'components/Loader/Loader';

import { Outlet } from 'react-router';
import { Suspense } from 'react';

import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/Cinema_City.svg"
            alt="logo"
          />
          Inside cinema world
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
