const word = document.querySelector('.word');
const secretWordArray = ['secret', 'god', 'carrot', 'spaghetti', 'guitar', 'baseball'];
const keyboard = document.querySelector('.keyboard');
const resetButton = document.querySelector('.reset-button');

let secretWord;         // by declaring these variables we can use them in other functions
let hiddenLetters;
let miss = 0;

const randomWord = (keyClick) => {
    secretWord = secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
    // loop through the secret word.
    for (let i = 0; i < secretWord.length; i++ ){
        // then create a html element for each letter of the secret word
        const letter = document.createElement('p');
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
    if (!secretWord.includes(e.target.textContent)) {
        miss++;
        addBodyPart()
        console.log(miss)
    }
}

const addBodyPart = () => {
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
    } 
}

keyboard.addEventListener('click', handleKeyClick);
keyboard.addEventListener('click', missCounter);
resetButton.addEventListener('click', randomWord);
