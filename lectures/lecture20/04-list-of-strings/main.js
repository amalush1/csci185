const names = [
    "Sarah", "Anna", "Josie", "Scoobert Doobert", "Doug Dimmadome",
    "Ash Ketchum", "Jesus Himself", "Thing 1", "Thing 2", "Twilight Sparkle", "Mordecai"
];



const outputElement = document.querySelector('#output');
let i = 0;
while (i < names.length){
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`)
    i++;
}

// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[4]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[5]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[6]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[7]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[8]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[9]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[10]}!</p>`);





