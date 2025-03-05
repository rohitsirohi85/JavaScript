// Projects related to DOM

//project link
//  (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

// # Solution code

// ## project 1  (bg-Color changer)



const buttons = document.querySelectorAll('.button');  // first select all the buttons which include it's class name and also i has id
buttons.forEach(function (item) {    // use for each loop to select and apply event listener on each button
  item.addEventListener('click', function (event) {   // add click event listener on each button so we can do something when click happen
     console.log(event.target);    // it will give the clicked button with classname and id
     if(event.target.id=='grey'){    // if clicked button was grey then change the background color to grey
       document.body.style.backgroundColor='grey'
     }
     if(event.target.id=='white'){
      document.body.style.backgroundColor='white'
    }
    if(event.target.id=='blue'){
      document.body.style.backgroundColor='blue'
    }
    if(event.target.id=='yellow'){
      document.body.style.backgroundColor='yellow'
    }
  });
});


