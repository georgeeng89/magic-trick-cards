let deck;

let deckRow1;
let deckRow2;
let deckRow3;
let newDeck;


let magicRow1 = []
let magicRow2 = []
let magicRow3 = []



let counter = 0;
let started = false;



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

    // console.log('DECKROW3 ===>', deckRow3)

    newDeck = [...deckRow3, ...deckRow2, ...deckRow1]

    // console.log('VERY NEW DECK =====>', newDeck)

    for (let i = 0; i < newDeck.length; i += 3) {
        magicRow3.push(newDeck[i])
        magicRow2.push(newDeck[i + 1])
        magicRow1.push(newDeck[i + 2])
    }


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

}


function refreshPage(){
    window.location.reload();
}


function cardChosen() {

    if (counter === 3) {

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



        let button = document.createElement("button")
        button.innerHTML = "Play Again"
        button.addEventListener("click", refreshPage);

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
        document.getElementById("your-final-card").append(button)


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


}








function row1() {


    newDeck = [...magicRow2, ...magicRow1, ...magicRow3]



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

}

function row2() {

    // console.log('row 2 old deck--->', newDeck)

    newDeck = [...magicRow3, ...magicRow2, ...magicRow1]

    // console.log('row 2 new deck after--->', newDeck)

    magicRow1 = []
    magicRow2 = []
    magicRow3 = []


    for (let i = 0; i < newDeck.length; i += 3) {
        magicRow3.push(newDeck[i])
        magicRow2.push(newDeck[i + 1])
        magicRow1.push(newDeck[i + 2])
    }

    // console.log('new rows 1', magicRow1)
    // console.log('new rows 2', magicRow2)
    // console.log('new rows 3', magicRow3)

    counter++;

    cardChosen();

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

}
