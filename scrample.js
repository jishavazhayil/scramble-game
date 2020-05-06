const wordslv1 = [
    "target",
    "sugar",
    "conference",
    "professional",
    "butterfly",
   
  ];
  let correct = 0;
  let score = 0;
  var level = 1;
  var randomData;
  
  function randomWord(words){
    randomData = words[Math.floor(Math.random() * words.length)];

  }
  function shuffled(randomWord){
      
     let shuffledWord = randomWord.split('').sort(function(){return 0.5-Math.random()}).join('')
      console.log("dfdf",randomWord,"sdfdf",shuffledWord);
      document.getElementById('info').style.display = 'none'
      document.getElementById('scrambled-word').innerHTML = shuffledWord
      return  shuffledWord
  }
  function checkAnswer(){
      var userGuess = document.getElementById("user-guess").value;
      console.log("randommw",randomData);
      if(userGuess === randomData){
          correct += 1;
          score = ((score+5) * level);
          console.log(score ,'score data',level,"level");
          localStorage.setItem("score",score);
          info.innerHTML = "<span class='correct'>CORRECT</span>";
          randomWord(wordslv1)
          shuffled(randomData)
          
      }else{
        info.innerHTML = "<span>Wrong</span>";
      randomWord(wordslv1);
      shuffled(randomData);
      console.log("userGuess",userGuess);
      }
  }
  
  function levelSetting(){
      if(level === 1){
          randomWord(wordslv1);
      }
       shuffled(randomData);
  }
  
  levelSetting()
  function quitButton (){
    window.location.href = 'score.html';
}


  function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').innerHTML= minutes + ":" + seconds;
        console.log("mmm",typeof(minutes),'fff',typeof(seconds))
        if( minutes === "00" && seconds === "00"){
            console.log("zs")
            randomWord(wordslv1)
            shuffled(randomData)
        }
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 70 - (10 * level),
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


  