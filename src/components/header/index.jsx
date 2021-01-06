import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';
import { Box, FormControlLabel, Switch } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { I18N_CACHE, LANG } from '../../constants/constants';

export default function ButtonAppBar() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const language = localStorage.getItem(I18N_CACHE.LOCAL_STORAGE);
  const [checked, setChecked] = useState(language === LANG.EN ? false : true);

  const handleChange = event => {
    const { checked } = event.target;
    setChecked(checked);
    i18n.changeLanguage(checked ? LANG.JP : LANG.EN);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {t('project_title')}
          </Typography>
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  name='languageSwitch'
                  color='default'
                />
              }
              label={t('language')}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
