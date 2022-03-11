import React, { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from "@mui/styles";
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import myLogo from "../images/butter.png"
import SearchIcon from '@mui/icons-material/Search';
import {SocialIcon}  from 'react-social-icons';
import '../assets/styles/nav.css';
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
const pages = ['Today', 'Hot Topics', 'Categories'];
const settings2 = ['Login', 'Register'];
export function NotCurrentUserBox() {
    const [anchorEl, setAnchorEl] = useState(null);
  
    return (
      <Box sx={{ flexGrow: 0 }}>

      <Button id="btnDen" onClick={(event) => setAnchorEl(event.currentTarget)} sx={{ p: 0 }}
        aria-label="account of current user"
        aria-controls="menu-appbar2"
        aria-haspopup="true"
      >
        <AccountCircleIcon className="accIcon"/>&nbsp;
        <p  
        
        style={{ my: 2, color: '#BAA89B', textDecoration: 'none', display: 'block',
        fontFamily: 'Poppins',fontWeight: 600,fontSize:"0.8rem",textTransform:'lowercase'   }} >account </p>
      
      </Button>
  
      <Menu
      
        id="menu-appbar2"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        
    >
      {settings2.map((setting) => (
       
        <MenuItem key={setting}  
          component={RouterLink} to={"/" + setting}
          onClick={() => setAnchorEl(null)}
        >
          <Typography key={setting} textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
    
    
  </Box>
 
    )
  }
export default function NavbarGuest(){
    const useStyles = makeStyles({
        addButton: {
          "&:hover": {
            color: "#f88d13",
            background: '#2a5a51',
          },
        }
      });
      const classes = useStyles();
    return(
        <AppBar position="static"  style={{ background:'#1E293B'}}>
                      <Container maxWidth="xl">
                       <Toolbar disableGutters>
                          <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        
                            style={{ textDecoration: 'none' }}
                          >
                            <img src={myLogo}  className="nav--icon"/>
                            <Link component={RouterLink} to="/" underline="none" color="inherit" >
                            
                              
                              <div className="grid">
                                <h3 className="nav--logo_text elegantshadow">TRANSFORMATIONS </h3>
                                <h4 className="nav--subtitle">BEFORE & AFTER PHOTOS</h4>  
                              </div>
                            
                            </Link>
                          </Typography>
                              
             
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      
                      <Button
                        key={page}
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        component={RouterLink} to={"/" + page}
                        sx={{ my: 2, color: '#BAA89B', textDecoration: 'none', display: 'block',fontFamily: 'Nanum Gothic',fontWeight: 600,fontSize:"1rem"   }}
                        className={classes.addButton} 
                        
                      >
                        {page}
                      </Button>
                      
                    ))}
                  </Box>


                  <div className='grid0'>
                        <SocialIcon className="nav--social" url="https://twitter.com/jaketrent" 
                        style={{ height: 28, width: 28 }} bgColor="#f88d13"  />
                        <SocialIcon className="nav--social" url="https://facebook.com/jaketrent" 
                        style={{ height: 28, width: 28 }}  bgColor="#f88d13" />
                        <SocialIcon className="nav--social" url="https://instagram.com/jaketrent" 
                        style={{ height: 28, width: 28 }}  bgColor="#f88d13" />	
                        <SocialIcon className="nav--social" url="https://youtube.com/jaketrent" 
                        style={{ height: 28, width: 28 }}  bgColor="#f88d13" />															
                  </div>	

                  <Search style={{ backgroundColor: '#1E293B', color: '#BAA89B',
                  border:'0.1em solid #2a5a51'}} >
                    <SearchIconWrapper>
                      <SearchIcon style={{ color: '#2a5a51'}} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      
                      
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                  
                 
                    <NotCurrentUserBox/> 
        
                </Toolbar>
                
              </Container>
            </AppBar>



    );
}
