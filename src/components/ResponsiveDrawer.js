import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ViewListIcon from '@material-ui/icons/ViewList';
import GroupIcon from '@material-ui/icons/Group';
import ListItemText from '@material-ui/core/ListItemText';
import TuneIcon from '@material-ui/icons/Tune';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import logo from '../assets/log.png'

import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img src={logo} alt="" style={{ marginTop: 40, marginLeft: 20 }} />

      <div className={classes.toolbar} />

      <Divider />
      <List>
        <a href="/DashBoard">
          <ListItem button key="Add Item">
            <ListItemIcon>{<AddIcon />}</ListItemIcon>
            <ListItemText primary="Add Item" />
          </ListItem>
        </a>
        <a href="/ViewItem">
          <ListItem button key="View Item">
            <ListItemIcon>{<ViewListIcon />}</ListItemIcon>
            <ListItemText primary="View Item" />
          </ListItem>
        </a>

        <a href="/Orders">
          <ListItem button key="Orders">
            <ListItemIcon>{<LocalMallIcon />}</ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </a>
        <a href="/Users">
          <ListItem button key="Users">
            <ListItemIcon>{<GroupIcon />}</ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
        </a>
        <a href="/Slider">
          <ListItem button key="Slider">
            <ListItemIcon>{<TuneIcon />}</ListItemIcon>
            <ListItemText primary="Slider" />
          </ListItem>
        </a>
        <a href="/Coupon">
          <ListItem button key="Coupon">
            <ListItemIcon>{<LocalAtmIcon />}</ListItemIcon>
            <ListItemText primary="Coupons" />
          </ListItem>
        </a>


      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
