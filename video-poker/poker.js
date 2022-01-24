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

const pointValues = {
    "JJ or better": 5,
    "Two-pair": 10, 
    "3 of a kind": 20, 
    "Straight": 30, 
    "Flush": 50, 
    "Full House": 75, 
    "4 of a kind": 100, 
    "Straight Flush": 150, 
    "Royal Flush": 250
};

let hand; 
let discardButtons = [];
let points = 1000;

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
    // splice the first 5 cards from the deck and store them in a hand variable. splice as opposed to slice will remove the cards from the deck.
    hand = array.splice(0,5)
    // if (hand.length > 0) {
    //     dealAgain();
    // }
    points -= 10;
    handAnalyzer(hand);
    return hand;
};

const renderHand = () => {
    const cardContainer = document.querySelector('.card-container');
    for (let i = 0; i < hand.length; i++) {
        const indyCardContainer = document.createElement('div');
        const newCard = document.createElement('div');
        const cardButton = document.createElement('div');
        indyCardContainer.classList.add('individual-card');
        newCard.textContent = hand[i];
        newCard.classList.add('card');
        indyCardContainer.append(newCard);
        cardButton.textContent = 'discard';
        cardButton.classList.add('card-button');
        indyCardContainer.append(cardButton);
        cardContainer.append(indyCardContainer);
        discardButtons.push(cardButton);
    }
    discardButtons.forEach(card => {
        card.addEventListener('click', discardAndDraw);
    });
}

const discardAndDraw = (e) => {
    const cardContainer = document.querySelector('.card-container');
    const indyCardContainer = document.createElement('div');
    
    let drawCard = array.splice(0, 1)
    hand.push(drawCard) 

    let newCard = document.createElement('div');
    newCard.textContent = drawCard; 
    newCard.classList.add('card');
    indyCardContainer.classList.add('individual-card');
    indyCardContainer.append(newCard);
    cardContainer.append(indyCardContainer);
   
    // removes the card and the button from the dom, by targeting the button's previousSibling, which is the card.
    const previousSibling = e.target.previousSibling;
    if (hand.includes(previousSibling.textContent)) {
        const index = hand.indexOf(previousSibling.textContent);
        hand.splice(index, 1);
    }
    previousSibling.remove();
    e.target.remove();  

    handAnalyzer(hand.flat());
}

const dealAgain = () => {
    // sets variables for the parent and child of the card container
    const cardContainer = document.querySelector('.card-container');
    const childNodes = cardContainer.querySelectorAll('.individual-card');
    // loop through the children
    for (let i = 0; i < childNodes.length; i++) {
        // then remove the children from the parent
        cardContainer.removeChild(childNodes[i]);
    }

    // reset the deck back to 52 cards
    array = [
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
}

const pointCounter = () => {
    const pointTotal = document.querySelector('.point-total');
    pointTotal.textContent = `Points: ${points}`;
}

const handAnalyzer = (handArray) => {
    duplicateChecker(handArray);
    checkFlush(handArray);

}

const checkFlush = (arr) => {
    let suits = [];
    for (let i = 0; i < arr.length; i++) {
        const last = arr[i].charAt(arr[i].length - 1);
        suits.push(last)
    }
    if (allEqual(suits)) {
        console.log('you have a flush')
    };
    
}

const duplicateChecker = (hArray) => {
    let duplicates = [];
    let firstValArray = [];

    for (let i = 0; i < hArray.length; i++) {
        const suitRemoved = hArray[i].slice(0, -1);
        firstValArray.push(suitRemoved);
    }

    for (let i = 0; i < firstValArray.length; i++) {
        for (let j = 0; j < firstValArray.length; j++) {
            if (i !== j) {
                if (firstValArray[i] === firstValArray[j]) {
                    duplicates.push(firstValArray[i])
                }
            }
        }
    }
 
    if (duplicates.length === 2) {
        console.log('pair')
    }

    // this actually was fixed by going with the error on line 204. since it's doubled in the duplicate array and 3 of a kind is the only one that produces that response then making it equal to 6 allows it to work. 
    if (duplicates.length === 3) {
        console.log('3 of a kind')
    }

    if (duplicates.length === 4) {
        if (allEqual(duplicates)){
            console.log('4 of a kind')
        } else {
            console.log('two pair')
        };
    }

    if (duplicates.length === 5) {
        console.log('full house')
    }

    if (duplicates.length === 6) {
        console.log('3 of a kind')
    }
}

const allEqual = arr => arr.every(val => val === arr[0]);

const dealButton = document.querySelector('.button');
const reset = document.querySelector('.reset');

dealButton.addEventListener('click', shuffle);
dealButton.addEventListener('click', deal);
dealButton.addEventListener('click', renderHand);
// dealButton.addEventListener('click', pointCounter);
reset.addEventListener('click', dealAgain);

