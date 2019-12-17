import React from 'react';

import styled from 'styled-components';
import { Grid, Container} from '@material-ui/core';
import {useStateValue} from '../ContextSetup';

import { makeStyles} from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';

import AccountIcon from '@material-ui/icons/AccountCircle';





const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    minWidth: '300px'
  },
  button: {
    float: 'right',
    color: '#0A314D'
  },
  textField: {
    width: '100%'
  },
  formContainer:{
    display:'flex',
    flexDirection: 'column'
  },
  formItem:{
    marginBottom: '20px'
  },
  submitButton:{

  },
  logo:{
    textAlign: 'center',
    maxWidth: '200px',
    maxHeight: '100px',
    position: 'absolute',
    left: '70px',
    top: '-20px'
  },
  title:{
    color: "#000000",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText:{
    paddingLeft: '10vh'
  },
  accountIcon:{
    paddingRight: 10
  },
  [theme.breakpoints.down('xs')]: {
    logo:{
      
    }

  }
  
 
}));



export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [{ user }, dispatch] = useStateValue();

  const [form, setValues] = React.useState({
    username: '',
    password: ''
  });



  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
    dispatch({
      type: 'changeUserPassword',
      newUser: {user: form.username, password: form.password}
    })
    setValues({
      username: '',
      password: ''
    })
   
    setOpen(false);
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const onClick = () => this.props.history.push("/");
 
    return (
      <HeaderContainer>
      
      <Container maxWidth="lg">
      
      <Grid container alignItems="center" >
      
     
          <Grid item xs={10}>
         
            <Title className={classes.title} > 
           <a href="/">
            <img src='https://www.icfcreative.com/2019/datim/images/logo.png' className={classes.logo} alt="DATIM logo"/>
            </a>  
            </Title>
         
         
          </Grid>
     
          <Grid item xs={2}>
          {/* <Button type="button" className={classes.button} onClick={handleOpen}>
          <AccountIcon className={classes.accountIcon}/>
         {user==='' ? 'Login': user}
        </Button> */}

          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Login</h2>
           
            <form onSubmit={printValues} className={classes.formContainer}>

            
            <TextField
          value={form.username}
          label="User Name"
          name="username"
          onChange={updateField}
          className={classes.formItem}
        />

       <TextField
          value={form.password}
          label="Password"
          name="password"
          type="password"
          onChange={updateField}
          className={classes.formItem}
        />
      <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>Submit</Button>
            </form>
           
          </div>
        </Fade>
      </Modal>


          </Grid>
       
      </Grid>
      </Container>

    


      </HeaderContainer>

      
    );
  
}



const HeaderContainer = styled.div`
  width: 100%;
 
`
const Title = styled.h3`
  color: white;
  float: left;
  font-size: 28px;
`



