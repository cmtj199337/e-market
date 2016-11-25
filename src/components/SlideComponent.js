'use strict';

require('styles/slide.css');

import React from 'react';
import SlickCarousel from 'react-slick';

export default class SlideComponent extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    static defaultProps = {
        dots: true,
        autoplay: true,
        infinite: true,         //循环
        speed: 500,
        fade: false,
        clickInto : true
    }
    componentDidMount() {
        this.setState({
            items : this.props.data
        });
    }
	render(){
		var thiz = this;
        let props = this.props;
        let lis = [];
        this.state.items.forEach((rowData, index) => {
            if (this.props.link) {
                var arr = this.props.link.match(/\[[^\]]*?\]/g), href=this.props.link;
                if (arr) {
                    arr.forEach(function(val){
                        var arrVal=val.replace('[','').replace(']','');
                        href=href.replace(val,( typeof rowData[arrVal]!='undefined')?rowData[arrVal]:'');
                    })
                    if (this.props.clickInto) {
                        lis.push(
                            <div key={index}><a href={href}><img src={rowData.imageURL}/></a></div>
                        );
                    }else {
                        lis.push(
                            <div key={index} onClick={this.props.click.bind(thiz,index,href)}><img src={rowData.imageURL}/></div>
                        );
                    }
                }
            }else {
                lis.push(
                    <div key={index} onClick={this.props.click.bind(thiz,index,'')}><img src={rowData.imageURL}/></div>
                );
            }
        })
        if (lis.length == 0) {
            return <a className='loading-carousel'>loading...</a>;
        }else {
          return (
              <div className='f-carousel'>
                  <SlickCarousel className='slider' {...props} draggable={!props.fade}>
                      {lis}
                  </SlickCarousel>
              </div>
          );
        }
    }
}
