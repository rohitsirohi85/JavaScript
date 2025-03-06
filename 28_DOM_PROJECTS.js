// Projects related to DOM

//project link
//  (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


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

// project 2    bmi calculator with weight and height

const form = document.querySelector('form');
form.addEventListener('submit',function(event){
  event.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(weight == '' || weight<0 || isNaN(weight)){
    alert("invalid weight");
  }else if(height == '' || height<0 || isNaN(height)){
    alert("invalid height");
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){
      result.innerHTML=`you are underweight your bmi : ${bmi}`
    }else if (bmi<=24.9 && bmi>=18.6){
      result.innerHTML=`you have normal bmi ${bmi}`
    }else if(bmi>24.9){
      result.innerHTML=`over weight bmi ${bmi}`
    }
  }
})


