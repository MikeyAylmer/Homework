const form = document.querySelector('#add-todo');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');


todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    };
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText =  'X';
    newTodo.innerText = input.value;
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
    input.value = '';
})

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


