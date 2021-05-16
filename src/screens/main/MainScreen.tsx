import { Container, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MainScreen: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Стартовый шаблон CRA</Typography>

      <Box mt={5}>
        <Link to="/design">To design</Link>
      </Box>
    </Container>
  );
};

export default MainScreen;
