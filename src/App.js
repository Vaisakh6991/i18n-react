import { Box, Container, Grid } from '@material-ui/core';
import { Fragment } from 'react';
import RecipeReviewCard from './components/card';
import Header from './components/header';

const App = () => {
  return (
    <Fragment>
      <Box>
        <Header />
      </Box>
      <Container>
        <Grid container style={{ marginTop: 45 }} spacing={2}>
          <Grid item xs={3}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={3}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={3}>
            <RecipeReviewCard />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default App;
