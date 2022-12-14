import React, { ReactElement } from 'react';

// Styles
import './Footer.scss';

const Footer: React.FC = (): ReactElement => {
	const date = new Date();

	return (
		<footer className='footer'>
			<p className='footer__header'>
				Tiend de Cerveza &copy; {date.getFullYear()}
			</p>
			<p className='footer__subheader'>Design Credit to Constanine Coica</p>
		</footer>
	);
};

export default Footer;
