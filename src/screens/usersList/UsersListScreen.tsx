import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react-lite';
import { Box, Container, Grid, Typography } from '@material-ui/core';

import PageTitle from '../../base/routes/components/PageTitle';
import Loader from '../../components/UI/Loader';
import { UsersStore } from '../../modules/users/UsersStore';
import UsersCard from './components/UsersCard';

const UsersListScreen: React.FC = observer(() => {
  const store = useLocalStore(() => new UsersStore());
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    store.getAllUsers();
  }, [store]);

  return (
    <Container maxWidth="xl">
      <Box mb={4}>
        <Typography variant="h2">Пользователи</Typography>
      </Box>

      <Grid container spacing={5}>
        {store.loading && <Loader minHeight="40vh" />}
        {!store.loading && store.usersList.map(item => <UsersCard data={item} key={item.id} />)}
      </Grid>
    </Container>
  );
});

export default UsersListScreen;
