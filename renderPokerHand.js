
function deckOfCards(deck){
    return `
    <div class="text-center mt-5">
        <div class="row">
            <div class =col-lg-4" style ="height: 200px; width: 100px; background-color: blue;">

            </div>
        </div>
    </div>
`

}

function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    return pokerHand.map(deckOfCards).join('')
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}