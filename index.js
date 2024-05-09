const baseUrl = "https://script.google.com/macros/s/AKfycbxvGEd9J6F2bYXZKKLvvk4qXHPjCJtBjS-mcczgIrZ0oU0f5OZx15aEJc4iPmqpfxMf/exec"

const para = {
    spreadsheetId: "13akrBaptUDsM-knJnjHvtyTmDjdfC8zVy_cDUVYO2Hs",  // Please set your Google Spreadsheet ID.
    sheetName: "Player_Stats"  // Please set the sheet name you want to retrieve the values.
};
const q = new URLSearchParams(para);
const url = baseUrl + "?" + q;
let team = [];
let battingOrder = [];
let playerAtBat = "None";
let playerAtBatEl = document.getElementById("at-bat-player");
let battingOrderTable = document.getElementById("batting-order");

document.addEventListener("DOMContentLoaded", function (arg) {
    getPlayerData();
});

function UpdatePlayerAtBat(player){
    playerAtBat = player;
    player.AtBats += 1;
    playerAtBatEl.textContent = playerAtBat.firstInit + ". " + playerAtBat.lastName + " (" + playerAtBat.number + ")";
    if(battingOrder.includes(player)){
        //Highlight Row with player
        let tr = battingOrderTable.getElementsByTagName("tr")[player.battingOrder];
        tr.classList.add("base-filled");
    }
    //Remove highlight from any other batter in batting order
    battingOrder.forEach(player => {
        if(player != playerAtBat){
            let tr = battingOrderTable.getElementsByTagName("tr")[player.battingOrder];
            tr.classList.remove("base-filled");
        }
    });
}

function UpdateBattingOrderTable() {

    let tbody = battingOrderTable.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    let playerCount = 0;
    battingOrder.forEach(player => {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        let td = document.createElement("td");
        td.textContent = playerCount + 1;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = player.firstInit + ". " + player.lastName + " (" + player.number + ")";
        tr.appendChild(td);
        playerCount++;
    })
}


function getPlayerData() {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            const values = res.values
            // console.log(values);
            // let baseballIcon = document.createElement("span")
            // baseballIcon.innerHTML = "&#x26be;";
            // container.appendChild(baseballIcon);
            let count = 0;
            values.forEach(row => {
                if (count > 0) {
                    team.push({
                        battingOrder: 0,
                        number: row[0],
                        firstInit: row[1],
                        lastName: row[2],
                        AtBats: row[3],
                        Runs: row[4],
                        Hits: row[5],
                        RBIs: row[6],
                        K: row[7],
                        BattingAvg: row[8]
                    })
                }
                count++;

            })
            console.log(team);
            let container = document.getElementById("baseball-table");
            let table = document.createElement("table");
            let thead = document.createElement("thead")
            table.appendChild(thead);
            let batOrder = document.createElement("th")
            batOrder.textContent = "BO";
            thead.appendChild(batOrder);
            for (let i = 0; i < values[0].length; i++) {
                if (values[0][i] == "Number") {
                    let th = document.createElement("th");
                    th.textContent = "Player Name";
                    thead.appendChild(th);
                    i += 2;
                } else {
                    let th = document.createElement("th");
                    th.textContent = values[0][i];
                    thead.appendChild(th);
                }
            }
            let tbody = document.createElement("tbody");
            table.appendChild(tbody);
            team.forEach(player => {
                let tr = document.createElement("tr");
                tr.addEventListener("click", function() {
                    // Add Player to current at bat, and add to batting order array.
                    if(!battingOrder.includes(player)){
                        battingOrder.push(player);
                        player.battingOrder = battingOrder.length;
                        UpdateBattingOrderTable();
                        UpdatePlayerAtBat(player)
                    }
                });
                tbody.appendChild(tr);
                let td = document.createElement("td");
                td.textContent = player.battingOrder;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = player.firstInit + ". " + player.lastName + " (" + player.number + ")";
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = player.AtBats;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = player.Runs;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = player.Hits;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = player.RBIs;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = player.K;
                tr.appendChild(td);
                td = document.createElement("td");
                let BattAvgStr = (Math.round(player.BattingAvg * 1000) / 1000).toFixed(3).toString();
                td.textContent = BattAvgStr;
                tr.appendChild(td);
            })
            // for (let i = 1; i < values.length; i++) {
            //     let tr = document.createElement("tr");
            //     tbody.appendChild(tr);
            //     let boTd = document.createElement("td");
            //     boTd.textContent = i;
            //     tr.appendChild(boTd);
            //     for (let j = 0; j < values[i].length; j++) {
            //         if(j == 0){
            //             //This is the name field
            //             let td = document.createElement("td");
            //             let playerNum = values[i][j];
            //             let playerFI = values[i][j+1];
            //             let playerLN = values[i][j+2];
            //             td.textContent = playerFI + ". " + playerLN + " (" + playerNum + ")";
            //             tr.appendChild(td);
            //             j += 2;
            //         } else {
            //             let td = document.createElement("td");
            //             td.textContent = values[i][j];
            //             tr.appendChild(td);
            //         }
            //     }
            // }
            container.appendChild(table);
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