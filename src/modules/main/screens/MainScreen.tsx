import { FC } from 'react';
import { Container, Typography } from '@material-ui/core';

const MainScreen: FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Стартовый шаблон CRA</Typography>
      {/* <Link to={routes.ResComplexScreen.path}>{routes.ResComplexScreen.label}</Link> */}
    </Container>
  );
};

export default MainScreen;
