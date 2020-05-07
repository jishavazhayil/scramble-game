
var playerScore = localStorage.getItem('score');
document.getElementById('name').innerText = localStorage.getItem('playerName');
document.getElementById('points').innerText = (playerScore && playerScore !== 0) ? localStorage.getItem('score') : 0;
document.getElementById('highestPoint').innerText = (playerScore && playerScore !== 0) ? localStorage.getItem('score') : 0;

function homeClick(){
    window.location.href='home.html';
}

function restartClick(){
    localStorage.removeItem('score');
    window.location.href='scramble.html';
}