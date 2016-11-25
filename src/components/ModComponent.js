'use strict'

require('styles/mod.css');
import React from 'react';

var ModComponent = React.createClass({

	render:function(){

		return (
			<div className="mod-con0">
                <div className="mod-nav0 mod-nav0-col3">
                    <div className="opt opt-necessary">
                        <a href="javascript:;">
                            <span className="pic"></span>
                            <span className="txt">必备</span>
                        </a>
                    </div>
                    <div className="opt opt-free">
                        <a href="javascript:;">
                            <span className="pic"></span>
                            <span className="txt">限时免费</span>
                        </a>
                    </div>
                    <div className="opt opt-zhuanti">
                        <a href="javascript:;">
                            <span className="pic"></span>
                            <span className="txt">专题</span>
                        </a>
                    </div>
                </div>
            </div>
		)
	}

})

export default ModComponent;