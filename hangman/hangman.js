const word = document.querySelector('.word');
const secretWordArray = ['secret', 'god', 'carrot', 'spaghetti', 'guitar', 'baseball'];
const keyboard = document.querySelector('.keyboard');
const resetButton = document.querySelector('.reset-button');

let secretWord;         // by declaring these variables we can use them 
let letterByLetter;

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
        // append the hidden letter to the DOM
        word.append(letter)
    }
}

const handleKeyClick = (e) => { 
    if (secretWord.includes(e.target.textContent)){
        // if this is true then find all the letters in the secret word that === e.target.texContent (aka the button the user pressed)

    }
}



const keys = document.querySelectorAll('.key'); // all the keys on the keyboard
keyboard.addEventListener('click', handleKeyClick);
resetButton.addEventListener('click', randomWord);