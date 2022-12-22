/**
 * 注入js文件
 * @url 注入地址
**/
function Inject(url) {
  return new Promise((ret, rej) => {
    let fileSdk = document.createElement("script");
    fileSdk.type = "text/javascript";
    fileSdk.src = url;
    document.body.appendChild(fileSdk);

    fileSdk.onload = fileSdk.onreadystatechange = function () {
      if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
        ret(true);
      } else {
        rej(false);
      }
      fileSdk.onload = fileSdk.onreadystatechange = null;
    }
  })
}

export default Inject;