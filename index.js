let scoreCard1 = document.getElementById("score-card1");
let scoreCard2 = document.getElementById("score-card2");
let score1 = 0;
let score2 = 0;

function increment1() {
    score1 += 1;
    scoreCard1.textContent = score1;
    console.log(score1);
}

function increment2() {
    score1 += 2;
    scoreCard1.textContent = score1;
    console.log(score1);
}

function increment3() {
    score1 += 3;
    scoreCard1.textContent = score1;
    console.log(score1);
}

function incrementGuest1() {
    score2 += 1;
    scoreCard2.textContent = score2;
    console.log(score2);
}

function incrementGuest2() {
    score2 += 2;
    scoreCard2.textContent = score2;
    console.log(score2);
}

function incrementGuest3() {
    score2 += 3;
    scoreCard2.textContent = score2;
    console.log(score2);
}