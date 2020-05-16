import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:20
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          
          <Typography variant="h4" className={classes.title}>
            JR SWE JOBS
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
