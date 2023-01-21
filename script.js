function welcome() {
    document.write('Welcome to the Sunshine Page');
}

function userName() {
    let userName = prompt('Hello, what is your name?');
    if (userName === '')
        alert("Hey Don't forget to put in your Username!")
    if (userName === '')
        console.log('User left their name blank');
    else console.log('Their username is', userName);

    while (userName === '') {
        userName = prompt('You need to input a name to continue');
        if (userName === '')
            console.log('User left their name blank');
        else console.log('Their username is', userName);
    }
}

// function cuteTurtles() {
//     let cuteTurtles = prompt('Would you rather see cute Turtles or cute Manatees?');
//     console.log(userName, ' chose ', cuteTurtles)
   
// }

