// https://store.playstation.com/en-us/product/UP9000-CUSA10237_00-HRZCE00000000000/
// link for horizon above 
// https://store.playstation.com/en-us/product/UP9000-CUSA07408_00-00000000GODOFWAR/
// link to GOW
// https://store.playstation.com/en-us/product/UP2002-CUSA01163_00-ROCKETLEAGUENA01/
// link to Rocket leauge 
// https://store.playstation.com/en-us/category/cb1f8320-c804-44eb-bd95-a92490a510d9/1?emcid=pa-pl-415257&gclid=Cj0KCQjwu7OIBhCsARIsALxCUaM_iZuKeClISeFiQXOppxouPsA-imz4qT85gZoOFkr5TIHiSCQ6YmoaAgv6EALw_wcB&gclsrc=aw.ds
// link to playstation store


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





