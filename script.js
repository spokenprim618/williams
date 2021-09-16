let visibilityState = 'hidden';
const contentDiv = document.querySelector('#textsss');
const button = document.querySelector('#buttion');

function toggle() {
    if (visibilityState == 'hidden') {
        visibilityState = 'visible';
    } else {
        visibilityState = 'hidden';
    }
        contentDiv.style.visibility = visibilityState;
}

button.addEventListener('click', toggle)



 let visibilityGOWState = 'hidden';
 const cwontentDiv = document.querySelector('#textss');
 const bwutton = document.querySelector('#button');

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

 function cat() {
     if (visibilityHState == 'hidden') {
         visibilityHState = 'visible';
     } else {
         visibilityHState = 'hidden';
     }
     csontentDiv.style.visibility = visibilityHState;
}

 bsutton.addEventListener('click', cat)