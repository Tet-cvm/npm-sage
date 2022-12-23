## Install
```bash
$ npm install sage-utils

$ yarn add sage-utils
```

```javascript
// 常用函数
import {
  Request,
  Inject,
  SeaScreen,
  Debounce, Throttle,
  UrlParam, StrParam,
  SetItem, GetItem, DelItem,
  SetCookie, GetCookie, DelCookie,
  IsWechat, IsSafari, IsIos, IsMobile,
  VerifyMobile, VerifyEmail, VerifyCard,
  DateFormat,
} from 'sage-utils';

Request().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

Inject('./inject.js').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

SeaScreen()

const func = Debounce(fn, 1000)
const func = Throttle(fn, 3000)

VerifyMobile(13601880011)
VerifyEmail('13601880011@163.com')
VerifyCard('450922199604103679')

UrlParam('name')
StrParam('http://baidu.com?name=sage', 'name')

SetItem('name', 123);
GetItem('name')
DelItem('name')

SetCookie('Jon', 456, 10)
GetCookie('Jon')

if (IsWechat()) {
  //微信 
}
if (IsSafari()) {
  // Safari浏览器
}
if (IsIos()) {
  // ios系统
}
if (IsMobile()) {
  // 移动端
}

console.log(DateFormat('YYYY年MM月DD日 hh小时mm分ss秒'))
console.log(DateFormat('YYYY年MM月DD日'))
console.log(DateFormat('DD/MM/YYYY'))
console.log(DateFormat('YYYYMMDD'))
console.log(DateFormat('YYYY-MM-DD hh:mm:ss'))

// 异步加载资源
import Loader from 'sage-utils/dist/loader';

Loader().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 日历 - 阴历节气
import Calendar from 'sage-utils/dist/calendar';

const calen = new Calendar();
const year = calen.getYear(); // 获取当前年
const month = calen.getMonth(); // 获取当前月
const current = calen.initial(); // 初始化当前月份数据
const appoint = calen.library(2019, 10); // 初始化指定年月数据

import lunar from 'sage-utils/dist/lunar';

lunar()

```

## Classify
src/usual 常用函数  
src/usage 备用函数  
src/weird 其他函数/类
src/public 公共组件