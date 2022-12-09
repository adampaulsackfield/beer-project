import React, { ReactElement } from 'react';
import './App.scss';

import LayoutContainer from './containers/LayoutContainer/LayoutContainer';

const App: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<LayoutContainer />
		</div>
	);
};

export default App;
