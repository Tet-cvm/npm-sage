function lunar() {
  console.log('lunar');
}
export default lunar;


// // 全局水印
// class WaterMark {
//   constructor() {
//     this.contxt = null;
//     this.ratio  = window.devicePixelRatio;
//     this.width = window.innerWidth;
//     this.height = window.innerHeight;
//     this.onInit()
//   }
//   onInit() {
//     // 插入canvas节点
//     const room = document.createElement('canvas');
//     const text = document.createTextNode('您的浏览器不支持 HTML5 canvas 标签。');
//     room.appendChild(text);
//     room.width = this.width * this.ratio;
//     room.height = this.height * this.ratio;
//     room.style.position = 'absolute';
//     room.style.top = 0;
//     room.style.left = 0;
//     room.style.width = this.width + 'px';
//     room.style.height = this.height + 'px';
//     // room.style.backgroundColor = 'red';
//     // room.style.opacity = '0.38';
//     room.style.zIndex = '999';
//     room.style.pointerEvents = 'none';
//     document.body.appendChild(room);

//     // 初始化设置画布
//     this.contxt = room.getContext('2d');
//     console.log(this.contxt, '@@ this.contxt')
//     this.contxt.scale(this.ratio, this.ratio);


//     // 横屏竖屏适配
//     window.addEventListener('resize', function() {
//       room.width = this.width * this.ratio;
//       room.height = this.height * this.ratio;
//       room.style.width = this.width + 'px';
//       room.style.height = this.height + 'px';
//     })
//     this.onMark();
//   }
//   onMark() {
//     const row = 3; // 行
//     const col = 2; // 列
//     // this.contxt.rotate(30)
//     this.contxt.font = '14px Arial';
//     this.contxt.fillStyle = '#FFC82C';
//     this.contxt.textAlign = 'center';
//     this.contxt.textBaseline = 'middle';
//     for (let i = 0; i < row; i++) {
//       for (let j = 0; j < col; j++) {
//         console.log(i, j, '@@ 打印坐标', this.width / col * j, this.height / row * i);
//         // console.log(i, j, '@@ 打印坐标', -20 * Math.PI / 180)
//         // this.contxt.rotate(-20 * Math.PI / 180);
//         this.contxt.fillText('大众小程序水印', this.width / col * j, this.height / row * i);
//       }
//     }
//   }
// }
// export default WaterMark;