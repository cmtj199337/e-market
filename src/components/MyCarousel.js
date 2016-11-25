import React from 'react';
import SlideComponent from './SlideComponent.js';

//获取图片相关json
var imageDatas = require('../data/imageData.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
  }
  handleItemClick() {
    
  }
  render() {
     
    return (
      <SlideComponent data={imageDatas} autoplay link='[url]/[id]' click={this.handleItemClick}/>
    );
  }
}
