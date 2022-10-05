import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<header className='header' id='header'>
			Header
			<nav className='nav container'>
				<Link to='/' className='nav__logo'>LanaDesign</Link>

				<div className='nav__menu' id='nav-menu'>
					<ul className='nal__list grid'></ul>
				</div>
			</nav>
		</header>
	)
}

export default Header