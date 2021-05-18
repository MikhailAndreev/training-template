import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react-lite';
import { Box, Container, Typography } from '@material-ui/core';

import PageTitle from '../../base/routes/components/PageTitle';
import Loader from '../../components/UI/Loader';
import { UsersStore } from '../../modules/users/UsersStore';

const UserScreen: React.FC = observer(() => {
  const store = useLocalStore(() => new UsersStore());
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    store.getOneUser(Number(id));
  }, [id, store]);

  const renderContent = () => {
    if (store.userData) {
      const { id, name, userName, email, address } = store.userData;

      return (
        <>
          <PageTitle pageTitle={userName} />
          <Box mb={3}>
            <Typography variant="h3">{name}</Typography>
          </Box>

          <Typography>{email}</Typography>
        </>
      );
    }
  };

  return (
    <Container maxWidth="xl">
      {store.loading && <Loader minHeight="40vh" />}
      {!store.loading && renderContent()}
    </Container>
  );
});

export default UserScreen;
