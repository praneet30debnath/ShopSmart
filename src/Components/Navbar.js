import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shopSmartLogo from './HomepageComponents/Pics/cropShopSmartLogo.png';
import './Navbar.css'; // You can create a separate CSS file for styling


import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { loggedIn } from '../Redux/Store';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const dispatch = useDispatch();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    dispatch(loggedIn({ value: false }));
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links-brandname ${isOpen ? 'active' : ''}`}>
        <a href="/" onClick={toggleNavbar} style={{margin: "0.2rem 0 0 0"}}>
          <img src={shopSmartLogo} alt="" className='shopSmartLogo' />
        </a>
        <a href="/" onClick={toggleNavbar}>ShopSmart</a>
      </div>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        Menu
      </button>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="shop" onClick={toggleNavbar}>
          Shop
        </a>
        <a href="#blog" onClick={toggleNavbar}>
          Blog
        </a>
        <a href="#contact" onClick={toggleNavbar}>
          Contact Us
        </a>

        {/* Conditionally render "My Account" link if loggedIn is true */}
        {isLoggedIn ? (
          <div className='dropdown'>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 1, height: 1 }}>M</Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div>
            <a href="signup" onClick={toggleNavbar}>
              Sign Up
            </a>
            <a href="signin" onClick={toggleNavbar}>
              Sign In
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;