require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');//引用图片文件
//获取图片相关的数据
let  imageDatas=require('../data/imagesDatas.json');
//利用自执行=函数，将图片信息转化为图片URL路径信息
  imageDatas=(function (imageDataArr) {
    for (let i=0,j=imageDataArr.length;i<j;i++) {
     let singleImageData=imageDataArr[i];
      singleImageData.imageURL=require('../images/'+singleImageData.fileName);
      imageDataArr[i]=singleImageData
    }
    return imageDataArr;
  })(imageDatas)
class AppComponent extends React.Component {
  render() {
    return (
        <section className="stage">
            <section className="img-sec">

            </section>
          <nav className="controller-nav"></nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
