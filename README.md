# Install
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

import Calendar from 'sage-utils/dist/calendar';
const a = new Calendar();
      a.ggg();
```


# Classify
src/usual 常用函数
src/usage 备用函数
src/weird 其他函数/类