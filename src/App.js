import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './components/Header';
import MainFeaturedPost from './components/MainFeaturedPost';
import FeaturedPost from './components/FeaturedPost';
import News from './News';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import post1 from './articles/article-post.1';
import post2 from './articles/article-post.2';
import post3 from './articles/article-post.3';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'News', url: '#' },
  { title: 'Features', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Photos', url: '#' },
];

const mainFeaturedPost = {
  title: 'Main featured post title',
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium elit orci, ac cursus elit varius at. Nulla lobortis velit id sapien bibendum tincidunt. Quisque semper nisi ac rutrum porta.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'Vivamus finibus, ante nec vehicula rutrum, est tellus scelerisque nisl, feugiat cursus tortor mauris vitae lorem.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'Curabitur non odio nec erat euismod rutrum ac nec turpis. Pellentesque risus justo, mollis vel magna eu, viverra auctor turpis.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const newsPosts = [
  {
    title: 'News post',
    date: 'Nov 12',
    description:
      'Vivamus finibus, ante nec vehicula rutrum, est tellus scelerisque nisl, feugiat cursus tortor mauris vitae lorem.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'Curabitur non odio nec erat euismod rutrum ac nec turpis. Pellentesque risus justo, mollis vel magna eu, viverra auctor turpis.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'News post',
    date: 'Nov 12',
    description:
      'Vivamus finibus, ante nec vehicula rutrum, est tellus scelerisque nisl, feugiat cursus tortor mauris vitae lorem.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'Curabitur non odio nec erat euismod rutrum ac nec turpis. Pellentesque risus justo, mollis vel magna eu, viverra auctor turpis.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Atenews is the official student publication of Ateneo de Davao University that aims to advance students\' level of consciousness on significant university and socially relevant issues and on matters of general concern by publishing online articles, tabloids, magazines, and other forms of releases.',
  archives: [
    { title: 'July 2020', url: '#' },
    { title: 'June 2020', url: '#' },
    { title: 'May 2020', url: '#' },
    { title: 'April 2020', url: '#' },
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const classes = useStyles();
  const palletType = darkMode ? 'dark' : 'light';
  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        light: '#015fa9',
        main: '#015fa9',
        dark: '#11214f',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Blog" sections={sections} toggleTheme={handleThemeChange} />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <News title="News" posts={newsPosts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
          </main>
        </Container>
        <Footer title="Atenews" description="End the silence of the gagged!" />
      </React.Fragment>
    </ThemeProvider>
  );
}