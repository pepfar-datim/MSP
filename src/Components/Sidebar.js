import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import './Sidebar.css';


const buttonGroupStyle = {
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column'

};
const sidebarButton = {
  width: '100%',
  padding: '0.5em',
  borderBottom: '1px solid #cdcdcd',
  textAlign: 'center',
  color: color_palette.PRIMARY_TEXT
}
const SidebarLogo = styled.img`

width: 200px;
`
const SidebarContainer = styled.div`
border-right: 1px solid ${color_palette.GREY};
width: '100%';
padding: 2em;
padding-top: 1em;
height: 100%;
min-height: 100vh;
text-align: center;

@media (max-width: 768px){
    height: auto;
    min-height: 0;
    border-right: 0;
    border-bottom: 1px solid ${color_palette.GREY};
}
`



class Sidebar extends Component {
  render() {
    return (
        <SidebarContainer>
        <SidebarLogo src="./assets/pepfar.jpg"></SidebarLogo>
        <div style={buttonGroupStyle}>

      <NavLink exact to="/" style={sidebarButton} activeClassName="sidebarActive">Welcome</NavLink>
      <NavLink to="/codelist" style={sidebarButton} activeClassName="sidebarActive">Codelist</NavLink>


      <NavLink to="/basic" style={sidebarButton} activeClassName="sidebarActive">Basic</NavLink>
      <NavLink to="/inputs" style={sidebarButton} activeClassName="sidebarActive">Inputs</NavLink>
      <NavLink to="/indicator" style={sidebarButton} activeClassName="sidebarActive">Indicator</NavLink>
      </div>
      </SidebarContainer>
    );
  }
}




export default Sidebar;