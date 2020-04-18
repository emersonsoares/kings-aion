const makeCard = (suit, value) => ({ suit, value })

const generateDeck = () => {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']

  const deck = values.reduce((curDeck, value) => {
    const valueCards = suits.map(suit => makeCard(suit, value))
    return [...curDeck, ...valueCards]
  }, [])

  return deck
}

const fisherYatesShuffle = (deck) => {
  // Fisher–Yates Shuffle
  // https://bost.ocks.org/mike/shuffle
  const shuffled = [...deck]
  let remainingToShuffle = shuffled.length, t, i

  while (remainingToShuffle) {
    i = Math.floor(Math.random() * remainingToShuffle--)
    t = shuffled[remainingToShuffle]
    shuffled[remainingToShuffle] = shuffled[i]
    shuffled[i] = t
  }

  return shuffled
}

const schwartzianTransformShuffle = (deck) => {
  //https://en.wikipedia.org/wiki/Schwartzian_transforms
  const shuffled = deck
    .map(card => ({ sort: Math.random(), card }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.card)

  return shuffled
}

const shuffleDeck = ({ mode = 0 }) => (deck) => {
  const shuffle = [fisherYatesShuffle, schwartzianTransformShuffle][mode]

  return shuffle(deck)
}

const drawCard = (deck) => {
  const card = deck.pop()
  return card
}

module.exports = { generateDeck, shuffleDeck, drawCard }