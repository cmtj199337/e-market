'use strict'

import React from 'react';

var Avatar = React.createClass({
	render(){
		return (
			<div>
				<ProfilePic key={this.props.id} username={this.props.username} />
				<ProfileLink jey={this.props.id} username={this.props.username} />
			</div>
		);
	}
});

var ProfilePic = React.createClass({
	render(){
		return(
			<img src={'http://graph.facebook.com/' + this.props.username + '/picture'} />
		);
	}
});

var ProfileLink = React.createClass({
	render(){
		return(
			<a href={'http://www.github.com/' + this.props.username} ></a>
			
		);
	}
});

export default Avatar;

