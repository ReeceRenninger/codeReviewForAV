function welcome() {
    document.write('Welcome to the Sunshine Page');
}

function userName() {
    let userName = prompt('Hello, what is your name?');
    if (userName === '')
        alert("Hey Don't forget to put in your Username!");
    if (userName === '')
        console.log('User left their name blank');
    else console.log('Their username is', userName);

    while (userName === '') {
        userName = prompt('You need to input a name to continue');
        if (userName === '')
            console.log('User left their name blank');
        else if (console.log('Their username is', userName));



    }
}
// The while statement is not working
function cuteAnimal() {
    let cuteAnimal = prompt('Would you rather see cute Turtles or cute Manatees?');

     console.log('They chose ' + cuteAnimal + '!');
     if (!(cuteAnimal === 'cute turtles' ||'turtles' || 'cute manatees' || 'manatees')); 
      alert('Hey I need you to choose between Manatees or Turtles!');

      while (cuteAnimal !== 'cute turtles' ||'turtles' || 'cute manatees' || 'manatees'){
 cuteAnimal = prompt('Hey I need you to choose between cute Turtles or cute Manatees')
      }
     if (cuteAnimal === 'cute turtles' || 'turtles' || 'cute manatees' || 'manatees' ) {
         let userAmount = prompt('how many ' + cuteAnimal + ' would you like to see ' + '?');
        }



// console.log('The user chose ' + userAmount + cuteAnimal);

}




//     if (cuteAnimal === 'cute turtles' || 'turtles') 
//         while (cuteAnimal) {
//             for (let i = 0; i < cuteAnimal; i++); {
    
//                 document.write('<img id="image4" src="img/Turtle4.gif" alt="Racing turtles"/>');
//                 console.log(i);
//     }
//  }
// else (cuteAnimal === )
// }




