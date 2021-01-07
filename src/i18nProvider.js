import React from 'react';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100vh',
  },
}));

const I18nProvider = ({ children }) => {
  const classes = useStyles();
  const { ready } = useTranslation(null, { useSuspense: false });
  if (ready) {
    return children;
  }
  return (
    <Box className={classes.root}>
      <CircularProgress size={24} />
    </Box>
  );
};

export default I18nProvider;
