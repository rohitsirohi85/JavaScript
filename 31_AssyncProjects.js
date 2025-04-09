
// find the project on
// https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html


// work on to create random color
const randomColor = function(){
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(let i =0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
  }
  let Interval;
  let startChangeColor = function(){
    if(!Interval){
      Interval =  setInterval(changeColor,1000)
    }
   
  }
  
  // start color changing

  const changeColor = function(){
    document.body.style.backgroundColor = randomColor()
  }
  
  document.querySelector('#start').addEventListener('click',startChangeColor)
  

  // stop color changing

  const stopChangingColor = function(){
    clearInterval(Interval);
    Interval=null
  }
  document.querySelector('#stop').addEventListener('click',stopChangingColor)
  
  
  
  
  