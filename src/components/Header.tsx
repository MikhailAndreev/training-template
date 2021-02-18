import { Box, Container, Typography } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box py={3}>
        <Typography>Header</Typography>
        {/* <Link to={routes.NotFoundScreen.path}>{routes.NotFoundScreen.label}</Link> */}
      </Box>
    </Container>
  );
};

export default Header;
