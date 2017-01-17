'use strict'

import React from 'react';

var FancyCheckBox = React.createClass({
	render:function(){
		var fancyclass = this.props.checked ? 'FancyChecked' : 'FancyUnChecked';
		return(
			<div className={fancyclass} onClick={this.props.onClick}>
				{this.props.children}
			</div>
		)
	}
})

React.render(
	<FancyCheckBox checked={true} onClick={console.log.bind(console)}>
		Hello World!
	</FancyCheckBox>
)

export default FancyCheckBox;