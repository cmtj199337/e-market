'use strict'

require('styles/recom.css');

import React from 'react';
import get from '../utils/ajax.js';

export default class RecomComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			'loading':true,
			'list':[]
		}
		//发送AJAX请求
		let url = 'https://api.github.com/search/users?q=all';
		
		get(url).then((data)=>{
			// 更新本组件的state
			this.setState({'loading':false,'list':data.items});
		}).catch((error)=>{
			console.error(error);
		});
		
	}
	render(){
		if(this.state.loading){
			return (
				<h2>loading result...</h2>
			)
		} else{
			if(this.state.list.length === 0){
				return (
					<h2>No result.</h2>
				)
			}else{
				return(
					<div className='mod-List'>
						<h2 className='titl'>精品推荐</h2>
						<ul className='list-app0'>
						{this.state.list.map(people=>{
							return (
								<li>
									<a href={people.html_url}>
										<div className='pic'>
											<img src={people.avatar_url} />
										</div>
										<div className="txt">
											<span className="tit">{people.login}</span>
											<div className="info">
												{people.score}
											</div>
											<span className="intro">{people.html_url}</span>
										</div>
									</a>
									<div className="mod-btn mod-btn-official">
										<a className="btn-install appdown">安装</a>
										<a className="btn-official appdownofficial">↓官方下载</a>
									</div>
								</li>
							)
						})}
						</ul>
					</div>
				)
			}
		}
	}
}