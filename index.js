require('./src/css/test.styl');
var hello = require('./src/js/hello');
window.onload = function () {
  hello();
  document.getElementById('hello_webpack').innerHTML = 'hello,webpack!';
};
