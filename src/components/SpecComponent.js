'use strict'

import React from 'react';
import ajax from '../utils/ajax.js'

export default class SpecComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			'loading':true,
			'list':[]
		}
		let url = 'https://api.github.com/search/users?q=all';
		
		ajax(url).then((data)=>{
			// 更新本组件的state
			this.setState({'loading':false,'list':data.items});
		}).catch((error)=>{
			return (
				<p>{error}</p>
			)
		});
	}
	render(){
		return (
			<div>
				{this.state.list.map(result=>{
					return(
						<ul key={result.id}>
							<li><input type='text' placeholder={result.login} /></li>
						</ul>
					)
				})}
				
			</div>
		)
	}
}

