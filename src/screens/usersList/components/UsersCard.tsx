import { Box, Grid, makeStyles, Paper, Typography, Theme } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import { makePath } from '../../../base/routes/utils/makePath';
import { useCommonStyles } from '../../../styles/CommonStyles';
import { Users } from '../../../modules/users/models/Users';

interface IUsersCardProps {
  data: Users;
}

const UsersCard: React.FC<IUsersCardProps> = ({ data }) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const { id, name, userName, address, email } = data;

  return (
    <Grid item xs={4}>
      <Paper elevation={2} className={classes.paper}>
        <Link to={makePath(routes.UserScreen.path, id)} className={commonClasses.routerLink}>
          <Box className={classes.image}>
            <ImageOutlinedIcon fontSize="large" color="disabled" />
          </Box>
          <Box p={2}>
            <Box mb={2}>
              <Typography variant="h4" color="textPrimary">
                {name}
              </Typography>
            </Box>
            <Typography color="textSecondary"> {email}</Typography>
          </Box>
        </Link>
      </Paper>
    </Grid>
  );
};

export default UsersCard;

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    cursor: 'pointer',
    height: '100%',
    transition: 'all .4s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: theme.palette.divider,
  },
}));
