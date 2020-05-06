document.getElementById('name').innerText = localStorage.getItem('playerName');
document.getElementById('points').innerText = localStorage.getItem('score');

function homeClick(){
    window.location.href='home.html';
}

function restartClick(){
    localStorage.removeItem('score');
    window.location.href='scrample.html';
}