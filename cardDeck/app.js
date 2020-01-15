// Deck practice --> object!

const myDeck = {
    deck: [],
    drawnCard: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    makeDeck() {
        const { deck, suits, values } = this;
        for (let value of values.split(",")) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit,
                });
            }
        }
        return deck;
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCard.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() {
        const { deck } = this;
        // loop over array backwards
        for (let i = deck.length - 1; i > 0; i--) {
            // pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            // swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    },
};

// calling these function in the object.

myDeck.makeDeck();
myDeck.shuffle();
const hand1 = myDeck.drawMultiple(3);
const hand2 = myDeck.drawMultiple(4);
const hand3 = myDeck.drawMultiple(5);
console.log(myDeck.drawnCard);
