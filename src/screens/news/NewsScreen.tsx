import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react-lite';
import { Box, Container, Typography } from '@material-ui/core';

import PageTitle from '../../base/routes/components/PageTitle';
import Loader from '../../components/UI/Loader';
import { NewsStore } from '../../modules/news/NewsStore';

const NewsListScreen: React.FC = observer(() => {
  const store = useLocalStore(() => new NewsStore());
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    store.getOne(Number(id));
  }, [id, store]);

  const renderContent = () => {
    if (store.newsData) {
      const { title, body } = store.newsData;

      return (
        <>
          <PageTitle pageTitle={title} />
          <Box mb={3}>
            <Typography variant="h3">{title}</Typography>
          </Box>
          <Typography>{body}</Typography>
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

export default NewsListScreen;
