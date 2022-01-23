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

// fisher-yates shuffle ( o(n) : time complexity ) the array, then pop the last five elements.
const shuffle = () => {
    let prevElement;
    for (let i = array.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      prevElement = array[i];
      array[i] = array[rand];
      array[rand] = prevElement;
    }
    return array;
} 

const deal = () => {
    let len = 5;
    const hand = array.slice(0,len)
    console.log(hand)
};

const dealButton = document.querySelector('.button');
dealButton.addEventListener('click', shuffle);
dealButton.addEventListener('click', deal);