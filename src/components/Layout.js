import { Drawer, Typography, makeStyles, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar, Avatar } from '@material-ui/core'
import { AddCircleOutline, Block, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { format } from 'date-fns';

const vars = {
  drawerWidth: 240
}

const useStyle = makeStyles ( (theme) => {
  return {
    page: {
      display: 'block',
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    drawer: {
      width: vars.drawerWidth,
      display: 'block',
    },
    drawerPaper: {
      width: vars.drawerWidth,
    },
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-in-between',
    },
    appBar:{
      width: `calc(100% - ${vars.drawerWidth}px)`,
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    toolbar: theme.mixins.toolbar,
    active: {
      backgroundColor: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    date: {
      flexGrow: 1,
    },
    avater: {
      marginLeft: theme.spacing(2)
    }
  }
});

const Layout = ({children}) => {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary"/>,
      path: '/'
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutline color='secondary'/>,
      path: '/create'
    },
  ]

  return (
    <div className={classes.root}>
      {/* App bar */}
      <AppBar
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            {format( new Date(),'do MMMM y')}
          </Typography>
          <Typography>
            Abdalrhman
          </Typography>
          <Avatar src='/AbdOwnPixelArt.jfif' className={classes.avater} />
        </Toolbar>
      </AppBar>

      {/* Side drawer */}
      <Drawer 
      className={classes.drawer} 
      variant='permanent'
      anchor='left'
      classes={{paper: classes.drawerPaper}}
      >
        <Typography variant='h5' className={classes.title}>
            Ninja Notes
        </Typography>

        {/* list / links */}
        <List>
          {
            menuItems.map(item => (
                          <ListItem 
                          button 
                          key={item.text}
                          onClick={() => {history.push(item.path)}}
                          className={ location.pathname == item.path ? classes.active : null}
                          >
                              <ListItemIcon> {item.icon} </ ListItemIcon >
                              <ListItemText primary={item.text} />
                          </ListItem>
                          ))
          }
        </List>
        
      </Drawer>


      {/* Content */}
      <div className={classes.page}>
      <div className={classes.toolbar} />
        {children}
      </div>

    </div>
  )
}

export default Layout