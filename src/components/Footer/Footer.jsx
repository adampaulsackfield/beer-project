import './Footer.scss';

const Footer = () => {
	const date = new Date();

	return (
		<footer className='footer'>
			<p className='footer__header'>Cerveza {date.getFullYear()}&copy;</p>
			<p className='footer__subheader'>Design Credit to Constanine Coica</p>
		</footer>
	);
};

export default Footer;
