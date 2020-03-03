import React from 'react'
import WhiteLogo from '../../assets/images/white-logo.png';
import BlackLogo from '../../assets/images/black-logo.png';

const Header = (props) => {
	return(
		<div id='header'>
			<header className='main-header' data-test='main-header'>
				<img data-test='logo-img' src={WhiteLogo}  alt='Black Logo'/>
				<h2>Sample Test Jest</h2>
			</header>
		</div>
	)
};

export default Header;