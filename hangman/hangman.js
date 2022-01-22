const word = document.querySelector('.word');
const secretWordArray = ['secret', 'god', 'carrot', 'spaghetti', 'guitar', 'baseball'];
const keyboard = document.querySelector('.keyboard');
const resetButton = document.querySelector('.reset-button');

let secretWord;
let letterByLetter;

//populate the secret world field 
// choose a random word 
const randomWord = (keyClick) => {
    secretWord = secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
    // use the word as a string and then search the characters for the the key being clicked. 
}

const handleKeyClick = (e) => { 
    if (secretWord.includes(e.target.textContent)){
        word.append(e.target.textContent);
    }
}



const keys = document.querySelectorAll('.key'); // all the keys on the keyboard
keyboard.addEventListener('click', handleKeyClick);
resetButton.addEventListener('click', randomWord);