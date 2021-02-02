import { FC } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';

const Header: FC = () => {
  return (
    <Container maxWidth="xl">
      <Box py={3}>
        <Typography>Header</Typography>
        <Box display="flex" flexDirection="column">
          <Link to={routes.SecretScreen.path}>{routes.SecretScreen.label}</Link>
          <Link to={routes.MainScreen.path}>{routes.MainScreen.label}</Link>
          <Link to={routes.NotFoundScreen.path}>{routes.NotFoundScreen.label}</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
