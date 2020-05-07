const words = [
    "abandonable",
    "abandoned",
    'abandonedly',
    'abandonee',
    'abandoner',
    'abandoners',
    'abandoning',
    'abandonment',
    'abandonments',
    'spunk',
    'spunked',
    'spunky',
    'spunkie',
    'spunkier',
    'spunkies',
    'spunkiest',
    'spunkily',
    'spunkiness',
    'spurts',
    'spurway',
    'spurwing',
    'spur-wing',
    'spurwinged',
    'Wolsky',
    'wolter',
    'wolve',
    'wolveboon',
    'wolver',
    'wolverene',
    'Wolverhampton',
    'Wolverine',
    'wolverines',
    'wolvers',
    'Wolverton',
    'wolves',
    'wolvish',
    'Womack',
    'woman',
    'woodcraftiness',
    'woodcrafts',
    'woodcraftsman',
    'woodcreeper',
    'Zweig',
    'Zwick',
    'Zwickau',
    'Zwicky',
    'Zwieback',
    'zwiebacks',
    'Zwiebel',
    'zwieselite',
    'Zwingle',
    'Zwingli',
    'Zwinglian',
    'Zwinglianism',
    'Zwinglianist',
    'zwitter',
    'zwitterion',
    'vicennial',
    'Vicente',
    'Vicenza',
    'vibraharpist',
    'vibraharps',
    'vibrance',
    'vibrances',
    'vibrancy',
    'vibrancies',
    'vibrant',
    'vibrantly',
    'vibrants',
    'vibraphone',
    'vibraphones',
    'vibraphonist',
    'vibrate',
    'vibrated',
    'vibrates',
    'vibratile',
    'vibratility',
    'vibrating',
    'vibratingly',
    'transudate',
    'transudation',
    'transudative',
    'transudatory',
    'transude',
    'transuded',
    'transudes',
    'transuding',
    'transume',
    'transumed',
    'transuming',
    'transumpt',
    'transumption',
    'transumptive',
    'Trans-ural',
    'trans-Uralian',
    'transuranian',
    'Trans-uranian',
    'transuranic',
    'transuranium',
    'transurethral',
    'transuterine',
    'Transvaal',
    'Transvaaler',
    'Transvaalian',
    'transvaluate',
    'transvaluation',
    'transvalue',
    'transvalued',
    'refly',
    'reflies',
    'reflying',
    'refling',
    'refloat',
    'refloatation',
    'refloated',
    'refloating',
    'refloats',
    'reflog',
    'reflood',
    'reflooded',
    'reflooding',
    'refloods',
    'refloor',
    "babble",
    "badges",
    "bagels",
    "badman",
    "barbie",
    "bedbug",
    "before",
    "bigots",
    "boiler",
    "bomber",
    "brooms",
    "bureau",
    "burrow",
    "bylaws"


];

var correct = 0;
let score = 0;
var level = 1;
var randomData;
var myInterval;
var playerScore;
var wordLength;



function randomWord(words) {
    myStopFunction();
    timerFunction();
    var copy = words.slice(0);
    ( function() {
        if (copy.length < 1) { copy = words.slice(0); }
            var index = Math.floor(Math.random() * copy.length);
            randomData = copy[index];
            console.log(randomData);
            copy.splice(index, 1);
          
    })();
    
}

function shuffled(randomWord) {

    let shuffledWord = (randomWord.split('').sort(function () { return 0.5 - Math.random() }).join('')).toUpperCase();
    const wordSplit = [...shuffledWord];
    wordLength = wordSplit.length;
    let scrambleOutput = document.getElementById('scrambled-word');
    scrambleOutput.innerHTML = `<table style="border:solid 1px; pull-left:50%" ;width:40%><tr><td>${wordSplit}</td></tr><table>`;
    return shuffledWord
}

function handleChange(){

    document.getElementById('user-guess').setAttribute('maxlength',wordLength);
}
function clearField() {

    document.getElementById('user-guess').value = "";

}

function checkAnswer() {

    var userGuess = document.getElementById("user-guess").value;

    myStopFunction();
    if ((userGuess.toLowerCase()) === randomData.toLowerCase()) {

        correct += 1;
        playerScore = ( 5 * level);
        score += playerScore;
        if (correct >= 5) {
            level += 1;
            myStopFunction();
            correct = 0;
            document.getElementById('level').innerText = level;
            document.getElementById('info').innerHTML = "";

        }
        localStorage.setItem("score", score);
        localStorage.setItem("highestScore", score);
        document.getElementById('info').innerHTML = `<span style="color:green;" >CORRECT</span>`;
        levelSetting();
        clearField();

    } else {

        info.innerHTML = `<span style="color:red";>WRONG</span>`;
        alert('Oops ....!,Wrong word')
        window.location.href = "score.html";
        
    }
}

function levelSetting() {
        randomWord( words);
        shuffled(randomData);
    
} 

levelSetting();

function quitButton() {

    window.location.href = 'score.html';

}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (minutes === "00" && seconds === "00") {
            alert('Oops...!Time up ')
            window.location.href = "score.html";
        }
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    myInterval
}

function myStopFunction() {
    clearInterval(myInterval);
}

function timerFunction() {
    var totalMinutes =  70 - (10 * level) 
    var timeMinutes = totalMinutes <= 10 ? 10 : totalMinutes,
    
        display = document.querySelector('#time');

    startTimer(timeMinutes, display);

};





