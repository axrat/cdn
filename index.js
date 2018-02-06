import {hello} from './src/js/hello'
console.log(hello);
window.onload = function() {
  document.getElementById(`hello_webpack`).innerHTML = `hello,webpack!`;
};

