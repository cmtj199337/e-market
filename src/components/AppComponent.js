'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TopbarComponent from './TopbarComponent.js';
import MyCarousel from './MyCarousel.js';
import ModComponent from './ModComponent.js';
import RecomComponent from './RecomComponent.js';
import SpecComponent from './SpecComponent.js';

var AppComponent = React.createClass({

	render:function(){
		
		return(
			<section className="wrapper">
				<TopbarComponent />
				<MyCarousel />
				<ModComponent />
				<RecomComponent />
				<SpecComponent username="cmtj199337"/>
			</section>
		)
	}
});

export default AppComponent;
