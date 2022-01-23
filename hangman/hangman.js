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
        console.log(miss)
    }
}


keyboard.addEventListener('click', handleKeyClick);
keyboard.addEventListener('click', missCounter);
resetButton.addEventListener('click', randomWord);
