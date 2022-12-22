/**
 * 校验类函数集合
 * @VerifyMobile 手机号验证
 * @VerifyEmail  邮箱验证
 * @VerifyCard   身份证验证
**/

function VerifyMobile(value) {
  return /0?(13|14|15|17|18|19)[0-9]{9}/.test(value);
}

function VerifyEmail(value) {
  return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(value)
}

function VerifyCard(value) {
  return /\d{17}[\d|x]|\d{15}/.test(value)
}

export {
  VerifyMobile,
  VerifyEmail,
  VerifyCard
}