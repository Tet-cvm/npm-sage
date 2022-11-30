## Install
```bash
$ npm install sage-utils

$ yarn add sage-utils
```

```javascript
import { name, age, sex, welcome } from 'sage-utils';

console.log(name('lxm'))
console.log(age(12))
console.log(sex('male'))
welcome();

import lunar from 'sage-utils/dist/lunar';

lunar()


// 日历 - 阴历节气
import Calendar from 'sage-utils/dist/calendar';

const calen = new Calendar();
const year = calen._getYear(); // 获取当前年
const month = calen._getMonth(); // 获取当前月
const current = calen._initial(); // 初始化当前月份数据
const appoint = calen._library(2019, 10); // 初始化指定年月数据

```

## Classify
src/usual 常用函数  
src/usage 备用函数  
src/weird 其他函数/类