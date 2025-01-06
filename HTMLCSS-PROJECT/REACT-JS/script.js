// Js--
let h1 = document.createElement('h1');
h1.innerText = 'hello react..';

let root = document.querySelector(".parent");

root.appendChild(h1);

// React--
let h2 = React.createElement('h2', null, 'Hii js...');
let parent = document.querySelector('.parent');

let root2 = ReactDOM.createRoot(parent)

root2.render(h2)
