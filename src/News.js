import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './components/Markdown';
import FeaturedPost from './components/FeaturedPost';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  }
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Divider />
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={2}>
        {posts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};

/*
{posts.map((post) => {
        return (
          <Markdown className={classes.markdown} key={post.substring(0, 40)}>
            {post}
          </Markdown>
        )
      })}
*/