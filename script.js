function welcome() {
    document.write('Welcome to the Sunshine Page');
}

function userName() {
    let userName = prompt('Hello, what is your name?');
    if (userName === '')
        alert("Hey, Don't forget to put in your Username!");
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
    if (cuteAnimal === 'cute turtles' || cuteAnimal === 'turtles' || cuteAnimal === 'cute manatees' || cuteAnimal === 'manatees')
    console.log('They chose ' + cuteAnimal + '!');
    if (cuteAnimal !== 'cute turtles' || cuteAnimal !== 'turtles' || cuteAnimal !== 'cute manatees' || cuteAnimal !== 'manatees')
        alert('Hey, I need you to choose between Manatees or Turtles!');
    else (cuteAnimal === 'cute turtles' || cuteAnimal === 'turtles' || cuteAnimal ===  'cute manatees' || cuteAnimal === 'manatees');{ 
        let userAmount = prompt('how many ' + cuteAnimal + ' would you like to see ' + '?')};
        // checking to see if cute animal equals one of the above.

        while (cuteAnimal !== 'cute turtles' || cuteAnimal !== 'turtles' || cuteAnimal !== 'cute manatees' || cuteAnimal !== 'manatees') {
            cuteAnimal = prompt('Hey, I need you to choose between cute Turtles or cute Manatees')

            if (cuteAnimal === 'cute turtles' || cuteAnimal ===  'turtles' || cuteAnimal ===  'cute manatees' || cuteAnimal ===  'manatees') {
                let userAmount = prompt('how many ' + cuteAnimal + ' would you like to see ' + '?');
             }
             else if (console.log('They chose ' + cuteAnimal + '!'));
        }
    }


// console.log('The user chose ' + userAmount + cuteAnimal);






//     if (cuteAnimal === 'cute turtles' || 'turtles') 
//         while (cuteAnimal) {
//             for (let i = 0; i < cuteAnimal; i++); {
    
//                 document.write('<img id="image4" src="img/Turtle4.gif" alt="Racing turtles"/>');
//                 console.log(i);
//     }
//  }
// else (cuteAnimal === )
// }




