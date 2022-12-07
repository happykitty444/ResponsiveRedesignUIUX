import * as React from "react"
import './Header.css'

// importing material UI components
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import logo from "./assets/images/logo.png"
const Spacer = require('react-spacer')

function Header() {
return (
	<AppBar position="static">
		<Toolbar className="toolbar">
		
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="end"
			color="inherit"
			aria-label="menu" 
			sx={{ mr: 2 }}
		>
			{/*A set of Icons wrapped in Icon */}
			<img className="logo" src={logo} alt="logo"></img>

			<HomeIcon />
			<p className="text-header">Home</p>
			
			<SearchIcon />
			<p className="text-header">Search</p>
			
			<ThumbsUpDownIcon />
			<p className="text-header">Trade</p>

			<Spacer width='35rem' />

			<PersonAddIcon />
			<p className="text-header">Join</p>

			<AccountCircleIcon />
			<p className="text-header">Sign In</p>

		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		
		</Toolbar>
	</AppBar>
);
}
export default Header;
