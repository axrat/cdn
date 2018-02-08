import {hello} from './src/js/hello'
console.log(hello);
import './src/css/test.styl'
window.onload = function() {
  document.getElementById(`hello_webpack`).innerHTML = `hello,webpack!`;
};

