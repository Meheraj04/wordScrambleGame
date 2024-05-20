let time = 120;
let scrambleArray = [];
let words = [
    { word: 'APPLE', hint: 'It Is A Fruit' },
    { word: 'ELEPHANT', hint: 'It Is An Animal' },
    { word: 'EARTH', hint: 'It Is A Planet' },
    { word: 'KEYBOARD', hint: 'It Is An Input Device' },
    { word: 'DECEMBER', hint: 'It Is A Month' },
    { word: 'PURPLE', hint: 'It Is A Color' },
    { word: 'CARROT', hint: "It Is A Vegetable" },
    { word: 'EAGLE', hint: 'It Is A Bird' },
    { word: 'CRICKET', hint: "It Is A Sport" }
];

document.getElementById('timer').innerHTML = time;
let myInterval;

function timer() {
    document.getElementById('timer').innerHTML = time;
    time -= 1;
    if (time == -1) {
        document.getElementById('timer').innerHTML = 0;
        clearInterval(myInterval);
        alert('Game Over');
    }
}

function startTimer() {
    clearInterval(myInterval);
    time = 120;
    document.getElementById('timer').innerHTML = time;
    myInterval = setInterval(timer, 1000);
}

let randomElement;

function newWord() {
    startTimer();
    randomElement = words[Math.floor(Math.random() * words.length)];
    document.getElementById('hints').innerHTML = randomElement.hint;
    let randomArray = randomElement.word.split('');
    for (let i = randomArray.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
    }
    let scrambleWord = randomArray.join('');
    document.getElementById('random').innerHTML = scrambleWord;
    document.getElementById('input').value = '';
    // console.log(randomElement.word)
}

newWord();

document.getElementById('reset').addEventListener('click', function resetWord() {
    newWord();
});

document.getElementById('submit').addEventListener('click', function () {
    let input = document.getElementById('input').value.toUpperCase();
    // console.log(input)
    if (input === randomElement.word) {
        alert('Correct!!! You Win');
    } else {
        alert('Wrong!!! You Lose');
    }
    newWord();
});


