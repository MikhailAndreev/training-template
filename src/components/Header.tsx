import { FC } from 'react';
import { Box, Container, Typography } from '@material-ui/core';

const Header: FC = () => {
  return (
    <Container maxWidth="xl">
      <Box py={3}>
        <Typography>Header</Typography>
        {/* <Link to={routes.NOT_FOUND_SCREEN.path}>{routes.NOT_FOUND_SCREEN.label}</Link> */}
      </Box>
    </Container>
  );
};

export default Header;
