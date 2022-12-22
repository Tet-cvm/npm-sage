/**
 * 异步加载资源
**/

function Loader () {
  return new Promise((ret, rej) => {
    const state = true;
    if (state) {
      ret('true')
    } else {
      rej('false')
    }
  })
}
export default Loader;