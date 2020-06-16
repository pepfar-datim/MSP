/* eslint-disable */
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Welcome from './AppShell/Welcome';

import Codelist from './AppShell/Codelist';
import Sidebar from './Components/Sidebar';
import About from './AppShell/About';
import NotFound from './AppShell/NotFound';
import ReferenceIndicator from './AppShell/ReferenceIndicator';
import Indicators from './AppShell/Indicators';
import Compare from './AppShell/Compare';
import CompareIndicators from './AppShell/CompareIndicators';
import DataElementDetails from './AppShell/DataElementDetails';
import IndicatorDetails from './AppShell/IndicatorDetails';
import {StateProvider} from './ContextSetup';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import history from './history';
import {initialState} from './Context';
import {reducer} from './Reducer';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '93vh'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:"#ffffff"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#0A314D'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  topBar:{
    width:'100%',
    backgroundColor: '#002134',
    height: '30px'
  }
}));

export default function App() {

  const classes = useStyles();
  const theme = useTheme();

  
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }


    return (
      
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className={classes.root}>
          <AppBar position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <div className={classes.topBar}/>
            <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  {/* <MenuIcon /> */}
              </IconButton>         
              <Header/>
            </Toolbar>
          </AppBar>
          <Router history={history}>
            <Drawer className={classes.drawer} variant="persistent" anchor="left"  open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Sidebar/>
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />     
                  <Switch>           
                    <Redirect from="/home" to="/" /> 
                    <Route exact path="/" component={Welcome} />              
                    <Route exact path="/codelist" component={Codelist} />
                    <Route exact path="/codelist/dataElementDetail" component={DataElementDetails} />
                    <Route exact path="/indicators/indicatorDetail" component={IndicatorDetails} />               
                    <Route path="/referenceIndicator" component={ReferenceIndicator} /> 
                    <Route exact path="/indicators" component={Indicators} /> 
                    <Route path="/codelist/indicator" component={ReferenceIndicator} />
                    <Route path="/about" component={About} />
                    <Route exact path="/index.html" component={Welcome} />                    
                    <Route path="/referenceIndicator/:id" component={ReferenceIndicator} /> 
                    <Route exact path="/codelist/compare" component={Compare} /> 
                    <Route exact path="/indicators/compareIndicators" component={CompareIndicators} />
                    <Route component={NotFound} />
                  </Switch>
            </main>          
          </Router>
        </div>
      <Footer></Footer>
    </StateProvider>
    );  
}




