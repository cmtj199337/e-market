'use strict';

require('styles/topbar.css');

import React from 'react';
var TopbarComponent = React.createClass({
	render:function(){
		return (
			<section className="topbar">
				<div className="mod-nav">
					<a href='javascript:;' className='on'>推荐</a>
					<a href='javascript:;'>软件</a>
					<a href='javascript:;'>游戏</a>
					<a href='javascript:;'>榜单</a>
				</div>
				<a className='btn-search0' href='javascript:;'></a>
			</section>
		)
	}
});

export default TopbarComponent;
