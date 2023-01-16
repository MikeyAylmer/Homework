// Answer #1
document.getElementById('container');
// Answer #2
document.querySelector('#container');
// Answer #3
document.getElementsByClassName('second');
// Answer #4
document.querySelector('ol, .third');
// Answer #5
const newText = document.querySelector('#container');
newText.innerText = 'HELLO!';
// Answer #6
const newFooter = document.querySelector('.footer');
newFooter.classList.add('Main');
// Answer #7
// const newFooter = document.querySelector('.footer');
newFooter.classList.remove('Main');
// Answer #8
const newLi = document.createElement('li');
// Answer #9
newLi.innerText = 'Four';
// Answer #10
const ul = document.querySelector('ul');
ul.append(newLi);
// Answer #11
const olLi = document.querySelectorAll('ol li');
for(let i = 0; i < olLi.length; i++){
    olLi[i].style.backgroundColor = 'green'
}
// Answer #12
newFooter.remove();