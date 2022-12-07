import * as React from "react";
import './Header.css';

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
return (
	<AppBar position="static">
		<Toolbar className="toolbar">
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu" 
			sx={{ mr: 2 }}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			<MenuIcon />
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		<h1>Tilly</h1>
		<Button className="toolbar-button">Login</Button>
		</Toolbar>
	</AppBar>
);
}
export default Header;
