const word = document.querySelector('.word');
const secretWordArray = ['secret', 'god', 'carrot', 'spaghetti', 'guitar', 'baseball'];
const keyboard = document.querySelector('.keyboard')

//populate the secret world field 
// choose a random word 
const randomWord = (letter) => {
    const secretWord = secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
    // use the word as a string and then search the characters for the the key being clicked. 
    console.log(secretWord)
    console.log(secretWord.includes(letter));
}

const handleClick = (e) => {
    
    const keyClick = e.target.textContent;
    console.log(keyClick)
    randomWord(keyClick);
}



const keys = document.querySelectorAll('.key'); // all the keys on the keyboard
keyboard.addEventListener('click', handleClick);