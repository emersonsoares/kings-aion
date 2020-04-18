const { generateDeck, shuffleDeck, drawCard } = require('./deck')

const rules = {
    'A': 'Cachoeira: Para realizar uma cachoeira, cada jogador começa a beber sua bebida ao mesmo tempo que a pessoa à sua esquerda. Nenhum jogador pode parar de beber até que o jogador antes deles pare.',
    '2': 'Dê 2: Escolha um jogador. Este jogador leva 2 goles. Ou escolha 2 jogadores e cada um desses jogadores precisa tomar 1 gole.',
    '3': 'Tome 1: Se você pegar este cartão, beba 1 gole!',
    '4': 'Dê 2, leve 2: Escolha um jogador. Você e o jogador escolhido tomam 2 goles cada um.',
    '5': 'Caralhos: Seis é “paus”. Todos os caras tomam um grande gole.',
    '6': 'Para as senhoras: Todas as meninas devem beber.',
    '7': 'Mestre do polegar: Sempre que o jogador que comprou esta carta colocar seu polegar no final da mesa, mesmo que discretamente, todos os outros jogadores devem colocar seus polegares lá também. A última pessoa que coloca o polegar tem que beber. A gaveta desta carta tem o poder de fazer isso a qualquer momento até que a próxima ficha seja desenhada ou o final do jogo.',
    '8': 'Beber mate: “Oito é para o companheiro”. Escolha uma pessoa para ser sua companheira e eles bebem quando você bebe pelo resto do jogo. Se um dos mates empatar mais 8 cartas, eles escolheram outro jogador e agora todos os três terão que beber. Você também pode mesclar dois pares acasalados dessa maneira. Se todos os jogadores do jogo forem acasalados, todos os empates serão cancelados.',
    '9': 'Rima: “Nove é Rima”. Você diz uma palavra, e a pessoa à sua direita tem que dizer uma palavra que rime. Isso continua em volta da mesa até que alguém não consiga pensar em uma palavra ou demore demais para chegar a uma rima. Essa pessoa deve beber. A mesma palavra não pode ser usada duas vezes.',
    '10': 'Social: Felicidades, todo mundo bebe! 🍻',
    'J': `Faça uma regra: Este é o meu cartão mais favorito. Você pode criar uma nova regra para o jogo ou remover uma. Se um jogador quebra as regras, ele deve beber!
         Um exemplo disso seria: todo mundo precisa engolir suas bebidas com a mão esquerda. Ou todo mundo precisa gemer enquanto bebe. Você entendeu a ideia.`,
    'Q': `Categorias: Você cria uma categoria de coisas e a pessoa à sua direita precisa criar algo que esteja dentro dessa categoria. Isso continua ao redor da mesa até que alguém não consiga pensar em nada. Essa pessoa deve beber.

        Categorias da Kings Cup
        Aqui estão algumas categorias possíveis para usar ao jogar Kings Cup:
        
        Cocktails: Gin Tonic, Sexo na Praia, Pina Colada, Whisky Sour, Vodka Lemon, Sherry-Cocktail,…
        Posições Sexuais: A Ponte, 69, Saquinho de Chá, Prazer da Tarde, Águia, Vaqueiro,…`,
    'K': 'King’s Cup: As 3 primeiras pessoas que comprarem esta carta, colocam suas bebidas na Kings Cup no meio da mesa. O 4º          jogador que receber essa carta deve beber todo o conteúdo da Copa do Rei.',
}

const initGame = () => {
    const deck = shuffleDeck({ mode: 0 })(generateDeck())
    return { isPlaying: true, deck }
}

const endGame = () => {
    console.log('Fim do Jogo, começa dnv')
}

const gameLoop = ({ deck }) => {
    const card = drawCard(deck)

    if (!card) {
        console.log('Acabou o baralho!')
        return { isPlaying: false, deck }
    }

    console.log('Game loop', card)

    return { isPlaying: true, deck }
}

(() => {
    let game = initGame()

    while (game.isPlaying) {
       game = gameLoop(game)
    }

    endGame()
})()
