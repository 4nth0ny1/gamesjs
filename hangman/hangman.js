const word = document.querySelector('.word');
const secretWordArray = ['secret', 'god', 'carrot', 'spaghetti', 'guitar', 'baseball'];

//populate the secret world field 
// choose a random word 
const randomWord = () => {
    const secretWord = secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
    const letterArray = secretWord.split('');
    console.log(letterArray);
    for (var i = 0; i < letterArray.length; i++) {
        const changedWord = letterArray[i];
        const newWord = word.push(changedWord);
        console.log(newWord);
    };
}

randomWord();