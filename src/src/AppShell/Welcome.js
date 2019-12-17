/* eslint-disable no-unused-vars */
import React from 'react';
import * as headings from '../Styles/Text';

import { makeStyles} from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';

import {useStateValue} from '../ContextSetup';

import Button from '@material-ui/core/Button';

import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';




const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContainer:{
    height: '90vh',
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://www.icfcreative.com/2019/datim/images/GettyImages-904833344.png)'
  },
  heading:{
    width: '100%',
    textAlign: 'left',
    marginTop: '50px',
    marginBottom: '0px',
    color: '#ffffff',
    fontFamily: 'EB Garamond',
    fontWeight: 500
  },
  buttonContainer:{
    display: 'flex',
    paddingBottom: '10px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: '20px'
  },
  button:{
    width: '100%',
    float: 'left',
    padding: '10px',
    border: '1px solid #ffffff',
    backgroundColor: 'rgba(0,0,0,0.3)',

    '&:hover, &:focus':{
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  
  buttonNav:{
    width: '100%',
    float: 'left',
    paddingBottom: '10px'
  },
  card: {
    maxWidth: '345px',
    margin: '0 auto',
    marginBottom: '30px'
  },
  media: {
    height: 150,
  },
  container:{
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '50px',
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  heroContentContainer:{
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '80px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '80px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '50vh'
  },
  darken:{
    position: "absolute",
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  heroContent:{
    zIndex: '10',
    minWidth: '500px'
  },
  headPara:{
    color: '#ffffff'
  },
  divider:{
    width: '70px',
    height: '3px',
    marginTop: '1em',
    backgroundColor: '#C1A783'
  },
  cardDivider:{
    width: '50px',
    height: '3px',
    marginTop: '1em',
    backgroundColor: '#C1A783',
    marginBottom: '1em'
  },
  cardSection:{
    backgroundColor: '#F7F7F7'
  },
  cardTitle:{
    marginTop: 0,
    paddingTop: '50px',
    textAlign: 'center',
    fontFamily: 'EB Garamond',
    fontSize: '30px',
    fontWeight: 500,
    color: '#303030'
  },
  dividerCardTitle:{
    margin: '0 auto',
    width: '70px',
    height: '3px',
    marginTop: '1em',
    backgroundColor: '#C1A783'
  },
  cardContent:{
    borderTop: '3px solid #D55804'
  },
  cardContentTitle:{
    fontSize: '16px',
    fontWeight: '600',
    color: '#1E3351'
  },
  cardGrid:{
    padding: '0px 20px'
  }
 
}));






export default function Welcome(){
  const classes = useStyles();
  const [{ user }, dispatch] = useStateValue();


    return (
      <div>
      <div className={classes.heroContainer}>
      <div className={classes.heroContentContainer}>
      <div className={classes.darken}></div>
      <Grid container  alignItems="center" className={classes.heroContent}>
   
      <Grid item xs={12} md={7}>

        <headings.H1 className={classes.heading}>Welcome to OCL Metadata Browser {user === '' ? '' : ", "+ user}</headings.H1>
        <div className={classes.divider}/>
        <p className={classes.headPara}>
        Nisi orci lacinia voluptate molestias etiam massa odit iste! Temporibus quidem eveniet, 
        turpis veritatis quia neque? Consectetuer lorem duis imperdiet? Class aliquip, lacus lectus, 
        montes voluptatibus, sociosqu exercitationem! Ducimus? Ligula? Facilis.
        </p>

        <Grid container>
        <Grid item xs={12} md={6}  className={classes.buttonContainer}>
        <NavLink to="/codelist" activeClassName="sidebarActive" className={classes.buttonNav}>
        <Button variant="contained" color="primary" className={classes.button} >
        DATA ELEMENTS
      </Button>
      </NavLink>
      </Grid>
      <Grid item xs={12} md={6}  className={classes.buttonContainer}>
      <NavLink to="/indicator" activeClassName="sidebarActive" className={classes.buttonNav}>
      <Button variant="contained" color="primary" className={classes.button}>
      INDICATORS
      </Button>
      </NavLink>
      </Grid>
      </Grid>

      </Grid>


     </Grid>
     </div>
     </div>
     {/* BELOW ARE THE CARDS THAT WE MIGHT USE LATER
     
     <div className={classes.cardSection}>
     <h2 className={classes.cardTitle}>RESOURCES</h2>
     <div className={classes.dividerCardTitle}/>
      <div className={classes.container}>

     

      <Grid item xs={10} sm={6} md={4} className={classes.cardGrid}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://www.icfcreative.com/2019/datim/images/cardImage1.png'
          title="Media Title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardContentTitle}>
          What’s New in DATIM
          </Typography>
          <div className={classes.cardDivider}/>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Grid>

<Grid item xs={10} sm={6} md={4} className={classes.cardGrid}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://www.icfcreative.com/2019/datim/images/cardImage2.png'
          title="Media Title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardContentTitle}>
          DATIM Training & Tutorials
          </Typography>
          <div className={classes.cardDivider}/>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
      </Grid>

      <Grid item xs={10} sm={6} md={4} className={classes.cardGrid}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://www.icfcreative.com/2019/datim/images/cardImage1.png'
          title="Media Title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardContentTitle}>
          PEPFAR Guidance
          </Typography>
          <div className={classes.cardDivider}/>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
      </Grid>

      <Grid item xs={10} sm={6} md={4} className={classes.cardGrid}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://www.icfcreative.com/2019/datim/images/cardImage2.png'
          title="Media Title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardContentTitle}>
          Frequently Asked Questions (FAQ)
          </Typography>
          <div className={classes.cardDivider}/>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
      </Grid>

      <Grid item xs={10} sm={6} md={4} className={classes.cardGrid}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://www.icfcreative.com/2019/datim/images/cardImage1.png'
          title="Media Title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardContentTitle}>
          Data Import and Systems Administration
          </Typography>
          <div className={classes.cardDivider}/>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      </Grid>

      <Grid item xs={10} md={4} sm={6} className={classes.cardGrid}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://www.icfcreative.com/2019/datim/images/cardImage2.png'
          title="Media Title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardContentTitle}>
          PEPFAR/MOH Data Alignment Activity
          </Typography>
          <div className={classes.cardDivider}/>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      </Grid>

     </div>


    </div> */}

     </div>
    );
  
    }




