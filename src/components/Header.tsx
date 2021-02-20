import { AppBar, Box, Container, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { routes } from '../screens/routes';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box mb={5}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <nav>
            <ul className={classes.menu}>
              <li className={classes.menuItem}>
                <Link to={routes.MainScreen.path}>
                  <Typography>{routes.MainScreen.label}</Typography>
                </Link>
              </li>
              <li className={classes.menuItem}>
                <Link to={routes.NewsListScreen.path}>
                  <Typography>{routes.NewsListScreen.label}</Typography>
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    padding: 0,
  },
  menuItem: {
    '&:not(&:last-child)': {
      paddingRight: theme.spacing(4),
    },
    '& > a': {
      display: 'inline-block',
      color: '#fff',
      textDecoration: 'none',
      transition: 'all .4s ease',
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
}));
