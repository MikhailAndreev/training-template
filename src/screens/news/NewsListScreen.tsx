import { useEffect } from 'react';
import { observer, useLocalStore } from 'mobx-react-lite';
import { Box, Container, Grid, Typography } from '@material-ui/core';

import Loader from '../../components/UI/Loader';
import { NewsStore } from '../../modules/news/NewsStore';
import NewsCard from './components/NewsCard';

const NewsListScreen: React.FC = observer(() => {
  const store = useLocalStore(() => new NewsStore());

  useEffect(() => {
    store.getAll();
  }, [store]);

  return (
    <Container maxWidth="xl">
      <Box mb={4}>
        <Typography variant="h2">Новости</Typography>
      </Box>

      <Grid container spacing={5}>
        {store.loading && <Loader minHeight="40vh" />}
        {!store.loading && store.newsList.map(item => <NewsCard data={item} key={item.id} />)}
      </Grid>
    </Container>
  );
});

export default NewsListScreen;
