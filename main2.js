player1user = localStorage.getItem("plr1");
player2user = localStorage.getItem("plr2");
player1Score = 0;
player2Score = 0;

document.getElementById("player1").innerHTML = player1user;
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2").innerHTML = player2user;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("plr_q").innerHTML = "Question turn - "+player1user;
document.getElementById("plr_a").innerHTML = "Answer turn - "+player2user;

function send() {
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    actual_ans = no1 * no2;
    console.log(actual_ans);
    question = "<label style='color:white id='q'>"+no1+"×"+no2+"</label><br>"
    input = "<input id='ansInput' class='form-control' type='text' placholder='Write your Answer'><br><br>"
    checkBtn = "<button onclick='check()' class='btn btn-primary btn-lg'>Check</button>"
    row = question+input+checkBtn;
    document.getElementById("output").style.backgroundColor = "darkolivegreen";
    document.getElementById("output").innerHTML=row;
    
}

q_turn = "player1";
a_turn = "player2";

function check() {
    ans = document.getElementById("ansInput").value;
    if (actual_ans == ans) {
        if (a_turn == "player1") {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        } else {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if (q_turn == "player1") {
        q_turn = "player2"
        document.getElementById("plr_q").innerHTML = "Question turn - "+player2user;
    } else {
        q_turn = "player1";
        document.getElementById("plr_q").innerHTML = "Question turn - "+player1user;
    }
    if (a_turn == "player1") {
        a_turn = "player2"
        document.getElementById("plr_a").innerHTML = "Answer turn - "+player2user;
    } else {
        a_turn = "player1";
        document.getElementById("plr_a").innerHTML = "Answer turn - "+player1user;
    }
    document.getElementById("ansInput").innerHTML = "";
}