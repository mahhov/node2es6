import {add1, double, square, two, three, Four, Five} from './output.js';

document.getElementById('add1').innerText = add1(3);
document.getElementById('double').innerText = double(3);
document.getElementById('square').innerText = square(3);
document.getElementById('two').innerText = two;
document.getElementById('three').innerText = three;
document.getElementById('four').innerText = new Four().four();
document.getElementById('five').innerText = new Five().five();
