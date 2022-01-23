// declaring a let variable because i want to remove elements from this array and then use that array for the next round.
let array = [
    '2c','2d','2h','2s',
    '3c','3d','3h','3s',
    '4c','4d','4h','4s',
    '5c','5d','5h','5s',
    '6c','6d','6h','6s',
    '7c','7d','7h','7s',
    '8c','8d','8h','8s',
    '9c','9d','9h','9s',
    '10c','10d','10h','10s',
    'Jc','Jd','Jh','Js',
    'Qc','Qd','Qh','Qs',
    'Kc','Kd','Kh','Ks',
    'Ac','Ad','Ah','As',    
];
let hand; 

// fisher-yates shuffle ( o(n) : time complexity ) the array, then pop the last five elements.
const shuffle = () => {
    // declare a variable to rep previous element
    let prevElement;
    // loop through the array backwards starting from the last element then going to the 2nd element one at a time
    for (let i = array.length - 1; i > 0; i--) {
      // declard a variable for a random number using the index of each value in the array + 1
      let rand = Math.floor(Math.random() * (i + 1));
      // set the previous element to the array value
      prevElement = array[i];
      // set the array value to the array value using the random numnber as an index
      array[i] = array[rand];
      // set the array value with the random number as index to the previous element
      array[rand] = prevElement;
      // repeat until all the elements are done
    }
    // return the new array
    return array;
} 

// create a deal function using the new shuffled array
const deal = () => {
    // declare how many cards i want to take out of the deck
    let len = 5;
    // slice the first 5 cards from the deck and store them in a hand variable
    hand = array.slice(0,len)
    return hand;
};

const renderHand = () => {
    const cardContainer = document.querySelector('.card-container');
    for (let i = 0; i < hand.length; i++) {
        const newCard = document.createElement('div');
        newCard.textContent = hand[i];
        newCard.classList.add('card');
        cardContainer.append(newCard);
        const cardButton = document.createElement('div');
        cardButton.textContent = 'discard';
        cardButton.classList.add('card-button');
        cardContainer.append(cardButton);
    }
}


const dealButton = document.querySelector('.button');
dealButton.addEventListener('click', shuffle);
dealButton.addEventListener('click', deal);
dealButton.addEventListener('click', renderHand);