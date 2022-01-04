player1 = "";
player2 = "";

function switchScreen() {
    player1 = document.getElementById("username1").value;
    player2 = document.getElementById("username2").value;
    localStorage.setItem("plr1",player1);
    localStorage.setItem("plr2",player2);
    window.location="gamescreen.html"
}