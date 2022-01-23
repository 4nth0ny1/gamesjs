const word = document.querySelector('.word');
const secretWordArray = ['secret', 'god', 'carrot', 'spaghetti', 'guitar', 'baseball', 'basketball', 'rigatoni', 'nirvana', 'passive', 'tool', 'palindrome', 'tennis', 'bucatini', 'pasta'];
const keyboard = document.querySelector('.keyboard');
const resetButton = document.querySelector('.reset-button');

let secretWord;         // declared so we can use it in the randomWord function and the missCounter function
let hiddenLetters;      // declared so we can use it in the randomWord function and the handleKeyClick function
let miss = 0;           // declared so we can use it in the missCounter function and the addBodyPart function

const randomWord = () => {
    secretWord = secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
    // loop through the secret word.
    for (let i = 0; i < secretWord.length; i++ ){
        // then create a html element for each letter of the secret word
        letter = document.createElement('p');
        // add the letter to the element
        letter.append(secretWord[i]);
        // give the element a class which will hide the letter 
        letter.classList.add('hide');
        // add the hidden letter to the DOM
        word.append(letter)
    }
    // create a variable that holds all the elements we created (which are the hidden letters)
    hiddenLetters = document.querySelectorAll('.hide');
}

const handleKeyClick = (e) => { 
    // loop through the hiddenLetters
    for (let i = 0; i < hiddenLetters.length; i++){
        // check to see if the key pressed (e.target.textContent) === the textContent of each letter in the secret word
        if (hiddenLetters[i].textContent === e.target.textContent){
            // if this is true then change the class of the letter from .hide to .show
            hiddenLetters[i].classList.add('show')
        } 
    }
}

const missCounter = (e) => {
    // check if the secret word include the letter presses on the keyboard
    if (!secretWord.includes(e.target.textContent)) {
        // if not, then increase the miss counter by one
        miss++;
        // and, add a body part 
        addBodyPart()
    }
}

const addBodyPart = () => {
    // based on the miss counter, add a body part starting with the head by adding a class to the html div. it will only add a body part if the counter is 1-6.
    if (miss === 1) {
        const head = document.querySelector('.head');
        head.classList.add('body-show')
    } else if (miss === 2) {
        const body = document.querySelector('.body');
        body.classList.add('body-show')
    } else if (miss === 3) {
        const armOne = document.querySelector('.arm-one');
        armOne.classList.add('body-show')
    } else if (miss === 4) {
        const armTwo = document.querySelector('.arm-two');
        armTwo.classList.add('body-show')
    } else if (miss === 5) {
        const legOne = document.querySelector('.leg-one');
        legOne.classList.add('body-show')
    } else if (miss === 6) {
        const legTwo = document.querySelector('.leg-two');
        legTwo.classList.add('body-show')
        resetButton.remove();
    } 
}

keyboard.addEventListener('click', handleKeyClick);
keyboard.addEventListener('click', missCounter);
resetButton.addEventListener('click', randomWord);
