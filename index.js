const baseUrl = "https://script.google.com/macros/s/AKfycbxvGEd9J6F2bYXZKKLvvk4qXHPjCJtBjS-mcczgIrZ0oU0f5OZx15aEJc4iPmqpfxMf/exec"

const para = {
    spreadsheetId: "13akrBaptUDsM-knJnjHvtyTmDjdfC8zVy_cDUVYO2Hs",  // Please set your Google Spreadsheet ID.
    sheetName: "Player_Stats"  // Please set the sheet name you want to retrieve the values.
};
const q = new URLSearchParams(para);
const url = baseUrl + "?" + q;

document.addEventListener("DOMContentLoaded", function(arg) {
    getPlayerData();
});

function getPlayerData() {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            const values = res.values
            console.log(values);
        });
}

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