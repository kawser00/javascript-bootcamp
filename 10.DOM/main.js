const body = document.querySelector('body');

//add container div
const container = document.createElement('div');
container.className = 'container mt-5';
container.setAttribute('id', 'container');
body.appendChild(container);

//add h1 element
container.insertAdjacentHTML('afterbegin', '<h1 class="h1">Product List</h1>')

//add ul element
const ul = document.createElement('ul');
container.insertAdjacentElement('beforeend', ul)
ul.className = 'product-collection'
ul.classList.add('mb-3');

//add li element
const li = document.createElement('li');
li.className = 'product-collection-item';
li.setAttribute('id', 'sample');
li.appendChild(document.createTextNode('Shoes'));
ul.appendChild(li);

//add another li element
const anotherList = document.createElement('li');
anotherList.innerText = "T-shirt";
const parentDiv = li.parentNode;
parentDiv.insertBefore(anotherList, li);




