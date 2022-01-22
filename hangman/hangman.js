const word = document.querySelector('.word');
const secretWordArray = ['secret', 'god', 'carrot', 'spaghetti', 'guitar', 'baseball'];

//populate the secret world field 
// choose a random word 
const randomWord = () => {
    const secretWord = secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
    word.textContent = secretWord;
}

randomWord();