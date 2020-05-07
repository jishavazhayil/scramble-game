
var playerScore = localStorage.getItem('score');
var highest = localStorage.getItem('highestScore')
var highScore = (playerScore > highest)? playerScore : highest



document.getElementById('name').innerText = localStorage.getItem('playerName');
document.getElementById('points').innerText = (playerScore && playerScore !== 0) ? localStorage.getItem('score') : 0;
document.getElementById('highestPoint').innerText = (highScore!==null && highScore !== 0) ? highScore : 0;

function homeClick(){
    window.location.href='home.html';
}

function restartClick(){
    localStorage.removeItem('score');
    window.location.href='scramble.html';
}