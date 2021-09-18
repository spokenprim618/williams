let visibilityState = 'hidden';
const contentDiv = document.querySelector('#textsss');
const button = document.querySelector('#buttion');
contentDiv.style.visibility = visibilityState;

console.log(visibilityState)
async function toggle() {
    if (visibilityState == 'hidden') {
        visibilityState = 'visible';
        console.log(visibilityState)
    } else {
        visibilityState = 'hidden';
        console.log(visibilityState)
    }
        contentDiv.style.visibility = visibilityState;
        console.log(visibilityState)
    }

button.addEventListener('click', toggle)



 let visibilityGOWState = 'hidden';
 const cwontentDiv = document.querySelector('#textss');
 const bwutton = document.querySelector('#button');
 cwontentDiv.style.visibility = visibilityGOWState;

 function dog() {
     
     if (visibilityGOWState == 'hidden') {
         visibilityGOWState = 'visible';
     } else {
         visibilityGOWState = 'hidden';
     }
          cwontentDiv.style.visibility = visibilityGOWState;
}

bwutton.addEventListener('click', dog)



 let visibilityHState = 'hidden';
  const csontentDiv = document.querySelector('#texts');
 const bsutton = document.querySelector('#button2');
 csontentDiv.style.visibility = visibilityHState;

 function cat() {
     if (visibilityHState == 'hidden') {
         visibilityHState = 'visible';
     } else {
         visibilityHState = 'hidden';
     }
     csontentDiv.style.visibility = visibilityHState;
}

 bsutton.addEventListener('click', cat)