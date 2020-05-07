const wordslv1 = [
    "target",
    "sugar",
    "conference",
    "professional",
    "butterfly",
   
  ];
  const wordslv2 = [
    "acknowledgment",
    "adversity",
    "capability",
    "capacious",
    "elliptical"
  ]
  
  var correct = 0;
  let score = 0;
  var level = 1;
  var randomData;
  var myInterval;
  
  
  function randomWord(words){
    timerFunction();
    randomData = words[Math.floor(Math.random() * words.length)];
  }
  
  function shuffled(randomWord){
      
     let shuffledWord = randomWord.split('').sort(function(){return 0.5-Math.random()}).join('');
      const wordSplit = [...shuffledWord] ;
      let scrambleOutput = document.getElementById('scrambled-word');
      scrambleOutput.innerHTML= `<table style="border:solid 1px; align-left:50%" ;width:40%><tr><td>${wordSplit}</td></tr><table>` ;
      return  shuffledWord
  }

  function clearField(){

    document.getElementById('user-guess').value = "";

  }
 
  function checkAnswer(){

      var userGuess = document.getElementById("user-guess").value; 
      myStopFunction();
      if(userGuess === randomData){
       
          correct += 1;
          score = ((score + 5) * level);
          if (correct >= 5){
            
              level += 1; 
              myStopFunction();
              correct = 0;
              document.getElementById('level').innerText = level;
              document.getElementById('info').innerHTML = "";

          }
          localStorage.setItem("score",score);
          document.getElementById('info').innerHTML = `<span style="color:green;" >CORRECT</span>`;
          levelSetting();
          clearField();
          
      }else{

            info.innerHTML = `<span style="color:red";>WRONG</span>`;
            clearField();  
            levelSetting()

      }
  }
  
  function levelSetting(){

      if(level === 1){

          randomWord(wordslv1);

      }
      else if(level === 2){

          randomWord(wordslv2);

      }else {

          alert("Congrats...You won the match");
          window.location.href = "score.html";

      }
       shuffled(randomData);

  }
  
  levelSetting();

  function quitButton (){

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
        
        if( minutes === "00" && seconds === "00"){
            levelSetting();
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
    
function timerFunction () {
     var timeMinutes = 70 - (10 * level),
     display = document.querySelector('#time');
        
        startTimer(timeMinutes, display);
        
    };





  