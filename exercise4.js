const box = document.querySelector('.box');
box.addEventListener('click', (event) => {


  // BUG: this.classList.add('active') throws an error
  event.currentTarget.classList.add('active');
});

/*The reason why this won't run is because the arrow function does not have its own 'this' context. 
In an arrow function, 'this' refers to the surrounding lexical context, which in this case is the global scope (window object). 
Therefore, when you try to access 'this.classList', it throws an error because 'this' does not refer to the clicked element (box) as intended. 
To fix this issue, we must use event.currentTarget instead of 'this' to refer to the element that the event listener is attached to, which is the box element.*/

/* event.currentTarget returns the element to which the event handler has been attached, while 'this' in an arrow function refers to the surrounding lexical context. 
It solves the problem because it correctly references the element that was clicked, allowing us to add the 'active' class without throwing an error. */