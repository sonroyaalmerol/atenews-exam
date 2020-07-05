import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import AtenewsBanner from '../assets/cropped-atenews-header-logo.png';
import AtenewsBannerDark from '../assets/cropped-atenews-header-logo-dark.png';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    alignItems: 'center'
  },
  toolbarTitle: {
    width: '30%',
    display: 'block',
    margin: '10px auto',
  },
  toolbarSecondary: {
    justifyContent: 'center',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(3),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { sections, toggleTheme } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <FormGroup row>
          <FormControlLabel
            control={<Switch checked={theme.palette.type === 'dark'} onChange={toggleTheme} color="primary" />}
            label="Dark Mode"
          />
        </FormGroup>
        <img class={classes.toolbarTitle} src={theme.palette.type === 'dark' ? AtenewsBannerDark : AtenewsBanner} />
        <Button
          variant="outlined"
          color="default"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};