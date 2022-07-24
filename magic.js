
var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

let deckRow1;
let deckRow2;
let deckRow3;
let newDeck;


let magicRow1 = []
let magicRow2 = []
let magicRow3 = []



let counter = 0;
let started = false;

console.log('COUNTER ====>', counter)

var canHit = true; //allows the player (you) to draw while yourSum <= 21

window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
}






function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    console.log('DECK =====>', deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    deck = deck.slice(0, 27)
}

function startGame() {



    deckRow3 = deck.slice(18, 27)
    deckRow2 = deck.slice(9, 18)
    deckRow1 = deck.slice(0, 9)

    console.log('DECKROW3', deckRow3)

    newDeck = [...deckRow3, ...deckRow2, ...deckRow1]

    console.log('NEW ASS DECK =====>', newDeck)

    for (let i = 0; i < newDeck.length; i += 3) {
        magicRow3.push(newDeck[i])
        magicRow2.push(newDeck[i + 1])
        magicRow1.push(newDeck[i + 2])
    }

    console.log('MAGIC ROW 1 --->', magicRow1)
    console.log('MAGIC ROW 2 --->', magicRow2)
    console.log('MAGIC ROW 3 --->', magicRow3)



    for (let i = 0; i < magicRow3.length; i++) {
        let cardImg = document.createElement("img");
        let card = magicRow3[i]
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("your-cards3").append(cardImg)
    }

    for (let i = 0; i < magicRow2.length; i++) {
        let cardImg = document.createElement("img");
        let card = magicRow2[i]
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("your-cards2").append(cardImg)
    }

    for (let i = 0; i < magicRow1.length; i++) {
        let cardImg = document.createElement("img");
        let card = magicRow1[i]
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("your-cards1").append(cardImg)
    }




    document.getElementById("choose-row-1").addEventListener("click", row1);
    document.getElementById("choose-row-2").addEventListener("click", row2);
    document.getElementById("choose-row-3").addEventListener("click", row3);

    // let ele = document.getElementById("test")
    // ele.remove()


    // for (let i = 0; i < 8; i++) {
    //     let cardImg1 = document.createElement("img");
    //     let cardImg2 = document.createElement("img");
    //     let cardImg3 = document.createElement("img");
    //     let card1 = deck.pop();
    //     let card2 = deck.pop();
    //     let card3 = deck.pop();
    //     cardImg1.src = "./cards/" + card1 + ".png";
    //     cardImg2.src = "./cards/" + card2 + ".png";
    //     cardImg3.src = "./cards/" + card3 + ".png";
    //     document.getElementById("your-cards1").append(cardImg1)
    //     document.getElementById("your-cards2").append(cardImg2)
    //     document.getElementById("your-cards3").append(cardImg3)
    // }

    // started = true;

}



function cardChosen() {

    if (counter === 3) {
        console.log('FINAL DECK', newDeck)
        console.log('your card is --->', newDeck[13])
        // console.log(`YOUR CARD IS!!!!!{newDeck[4]} or ${newDeck[newDeck.length - 5]} , or... ${newDeck[12]} i hope`)

        let cardRow1 = document.getElementById("your-cards1")
        let cardRow2 = document.getElementById("your-cards2")
        let cardRow3 = document.getElementById("your-cards3")
        let cardText1 = document.getElementById("c1")
        let cardText2 = document.getElementById("c2")

        let b1 = document.getElementById("choose-row-1")
        let b2 = document.getElementById("choose-row-2")
        let b3 = document.getElementById("choose-row-3")

        b1.remove()
        b2.remove()
        b3.remove()

        cardText1.remove()
        cardText2.remove()

        cardRow1.remove()
        cardRow2.remove()
        cardRow3.remove()


        let newRow1 = document.createElement("div")
        newRow1.setAttribute("id", "your-final-card")
        newRow1.setAttribute("class", "card")

        let newText = document.createElement("h1")
        newText.innerHTML = 'Your Card'


        let ele1 = document.getElementsByClassName("row-1")[0]
        ele1.appendChild(newRow1)

        let cardImg = document.createElement("img");
        let cardImg2 = document.createElement("img");

        let card = newDeck[13]
        cardImg.src = "./cards/" + card + ".png";
        cardImg2.src = "./cards/magic.gif";
        document.getElementById("your-final-card").append(cardImg)
        document.getElementById("your-final-card").append(cardImg2)
        document.getElementById("your-final-card").append(newText)


        return 'done'

    }

    let cardRow1 = document.getElementById("your-cards1")
    let cardRow2 = document.getElementById("your-cards2")
    let cardRow3 = document.getElementById("your-cards3")

    cardRow1.remove()
    cardRow2.remove()
    cardRow3.remove()

    let newRow1 = document.createElement("div")
    newRow1.setAttribute("id", "your-cards1")
    newRow1.setAttribute("class", "card")

    let newRow2 = document.createElement("div")
    newRow2.setAttribute("id", "your-cards2")
    newRow2.setAttribute("class", "card")

    let newRow3 = document.createElement("div")
    newRow3.setAttribute("id", "your-cards3")
    newRow3.setAttribute("class", "card")

    let ele1 = document.getElementsByClassName("row-1")[0]
    ele1.appendChild(newRow1)


    let ele2 = document.getElementsByClassName("row-2")[0]
    ele2.appendChild(newRow2)


    let ele3 = document.getElementsByClassName("row-3")[0]
    ele3.appendChild(newRow3)


    // deckRow1 = newDeck.slice(0, 8)
    // deckRow2 = newDeck.slice(8, 16)
    // deckRow3 = newDeck.slice(16, 24)


    // for (let i = 0; i < 8; i += 3) {

    //     let cardImg3 = document.createElement("img");
    //     let card3 = newDeck[i]

    //     cardImg3.src = "./cards/" + card3 + ".png";
    //     document.getElementById("your-cards3").append(cardImg3)

    //     let cardImg2 = document.createElement("img");
    //     let card2 = newDeck[i + 1]

    //     cardImg2.src = "./cards/" + card2 + ".png";
    //     document.getElementById("your-cards2").append(cardImg2)

    //     let cardImg1 = document.createElement("img");
    //     let card1 = newDeck[i + 2]

    //     cardImg1.src = "./cards/" + card1 + ".png";
    //     document.getElementById("your-cards1").append(cardImg1)


    // }


    // OLD CODE for Redealing

    for (let i = 0; i < magicRow3.length; i++) {
        let cardImg = document.createElement("img");
        let card = magicRow3[i]
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("your-cards3").append(cardImg)
    }

    for (let i = 0; i < magicRow2.length; i++) {
        let cardImg = document.createElement("img");
        let card = magicRow2[i]
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("your-cards2").append(cardImg)
    }

    for (let i = 0; i < magicRow1.length; i++) {
        let cardImg = document.createElement("img");
        let card = magicRow1[i]
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("your-cards1").append(cardImg)
    }

    // console.log("AFTER RE-DEAL ---> R1", newDeck.slice(0, 8))
    // console.log("AFTER RE-DEAL ---> R2", newDeck.slice(8, 16))
    // console.log("AFTER RE-DEAL ---> R3", newDeck.slice(16, 24))


}








function row1() {

    console.log("CHOSE ROW 1")
    console.log('OLD DECK --->', newDeck)


    newDeck = [...magicRow2, ...magicRow1, ...magicRow3]

    console.log('NEW DECK AFTER ROW 1--->', newDeck)


    magicRow1 = []
    magicRow2 = []
    magicRow3 = []


    for (let i = 0; i < newDeck.length; i += 3) {
        magicRow3.push(newDeck[i])
        magicRow2.push(newDeck[i + 1])
        magicRow1.push(newDeck[i + 2])
    }

    counter++;

    cardChosen();

    // let d1 = newDeck.slice(0, 8);
    // let d2 = newDeck.slice(8, 16);
    // let d3 = newDeck.slice(16, 24);


    // let collected = [...d2, ...d1, ...d3];

    // collected

    // let r1 = []
    // let r2 = []
    // let r3 = []


    //old code

    // console.log('COLLECTED ====>', collected)

    // collected

    // for (let i = 0; i < collected.length; i += 3) {
    //     r3.push(collected[i])
    //     r2.push(collected[i + 1])
    //     r1.push(collected[i + 2])
    // }

    // console.log('ROW1 ===>', r1)
    // console.log('ROW3 ===>', r3)

    // newDeck = [...r3, ...r2, ...r1]

    // newDeck.reverse()

    // console.log('IS THE LENGTH CORRECT????', newDeck.length)


    // counter++;

    // cardChosen()
}

function row2() {

    console.log('row 2 old deck--->', newDeck)

    newDeck = [...magicRow3, ...magicRow2, ...magicRow1]

    console.log('row 2 new deck after--->', newDeck)

    magicRow1 = []
    magicRow2 = []
    magicRow3 = []


    for (let i = 0; i < newDeck.length; i += 3) {
        magicRow3.push(newDeck[i])
        magicRow2.push(newDeck[i + 1])
        magicRow1.push(newDeck[i + 2])
    }

    console.log('new rows 1', magicRow1)
    console.log('new rows 2', magicRow2)
    console.log('new rows 3', magicRow3)

    counter++;

    cardChosen();



    // let d1 = newDeck.slice(0, 8);
    // let d2 = newDeck.slice(8, 16);
    // let d3 = newDeck.slice(16, 24);

    // let collected = [...d1, ...d2, ...d3];

    // collected

    // let r1 = []
    // let r2 = []
    // let r3 = []

    // for (let i = 0; i < collected.length; i += 3) {
    //     r3.push(collected[i])
    //     r2.push(collected[i + 1])
    //     r1.push(collected[i + 2])
    // }

    // newDeck = [...r3, ...r2, ...r1]

    // newDeck.reverse();

    // counter++;

    // cardChosen()
}

function row3() {


    newDeck = [...magicRow2, ...magicRow3, ...magicRow1]

    magicRow1 = []
    magicRow2 = []
    magicRow3 = []


    for (let i = 0; i < newDeck.length; i += 3) {
        magicRow3.push(newDeck[i])
        magicRow2.push(newDeck[i + 1])
        magicRow1.push(newDeck[i + 2])
    }

    counter++;

    cardChosen();


    // let d1 = newDeck.slice(0, 8);
    // let d2 = newDeck.slice(8, 16);
    // let d3 = newDeck.slice(16, 24);

    // let collected = [...d1, ...d3, ...d2];

    // collected

    // let r1 = []
    // let r2 = []
    // let r3 = []

    // for (let i = 0; i < collected.length; i += 3) {
    //     r3.push(collected[i])
    //     r2.push(collected[i + 1])
    //     r1.push(collected[i + 2])
    // }

    // newDeck = [...r1, ...r2, ...r3]

    // newDeck.reverse();

    // counter++;

    // cardChosen()
}


//     hidden = deck.pop();
//     dealerSum += getValue(hidden);
//     dealerAceCount += checkAce(hidden);
//     // console.log(hidden);
//     // console.log(dealerSum);
//     while (dealerSum < 17) {
//         //<img src="./cards/4-C.png">
//         let cardImg = document.createElement("img");
//         let card = deck.pop();
//         cardImg.src = "./cards/" + card + ".png";
//         dealerSum += getValue(card);
//         dealerAceCount += checkAce(card);
//         document.getElementById("dealer-cards").append(cardImg);
//     }
//     console.log(dealerSum);

//     for (let i = 0; i < 2; i++) {
//         let cardImg = document.createElement("img");
//         let card = deck.pop();
//         cardImg.src = "./cards/" + card + ".png";
//         yourSum += getValue(card);
//         yourAceCount += checkAce(card);
//         document.getElementById("your-cards").append(cardImg);
//     }

//     console.log(yourSum);
//     document.getElementById("hit").addEventListener("click", hit);
//     document.getElementById("stay").addEventListener("click", stay);

// }



//example code
// function hit() {
//     if (!canHit) {
//         return;
//     }

//     let cardImg = document.createElement("img");
//     let card = deck.pop();
//     cardImg.src = "./cards/" + card + ".png";
//     yourSum += getValue(card);
//     yourAceCount += checkAce(card);
//     document.getElementById("your-cards").append(cardImg);

//     if (reduceAce(yourSum, yourAceCount) > 21) { //A, J, 8 -> 1 + 10 + 8
//         canHit = false;
//     }

// }

// function stay() {
//     dealerSum = reduceAce(dealerSum, dealerAceCount);
//     yourSum = reduceAce(yourSum, yourAceCount);

//     canHit = false;
//     document.getElementById("hidden").src = "./cards/" + hidden + ".png";

//     let message = "";
//     if (yourSum > 21) {
//         message = "You Lose!";
//     }
//     else if (dealerSum > 21) {
//         message = "You win!";
//     }
//     //both you and dealer <= 21
//     else if (yourSum == dealerSum) {
//         message = "Tie!";
//     }
//     else if (yourSum > dealerSum) {
//         message = "You Win!";
//     }
//     else if (yourSum < dealerSum) {
//         message = "You Lose!";
//     }

//     document.getElementById("dealer-sum").innerText = dealerSum;
//     document.getElementById("your-sum").innerText = yourSum;
//     document.getElementById("results").innerText = message;
// }

// function getValue(card) {
//     let data = card.split("-"); // "4-C" -> ["4", "C"]
//     let value = data[0];

//     if (isNaN(value)) { //A J Q K
//         if (value == "A") {
//             return 11;
//         }
//         return 10;
//     }
//     return parseInt(value);
// }

// function checkAce(card) {
//     if (card[0] == "A") {
//         return 1;
//     }
//     return 0;
// }

// function reduceAce(playerSum, playerAceCount) {
//     while (playerSum > 21 && playerAceCount > 0) {
//         playerSum -= 10;
//         playerAceCount -= 1;
//     }
//     return playerSum;
// }
