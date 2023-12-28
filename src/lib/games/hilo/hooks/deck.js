
export default function useDeck() {
    const suites = ['♠', '♥', '♣', '♦'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const cardOrder = [
        { rank: 'A', suite: '♠' },
        { rank: '4', suite: '♥' },
        { rank: '7', suite: '♣' },
        { rank: '10', suite: '♦' },
        { rank: '2', suite: '♠' },
        { rank: 'K', suite: '♣' },
        { rank: '5', suite: '♥' },
        { rank: '8', suite: '♣' },
        { rank: 'J', suite: '♦' },
        { rank: '3', suite: '♠' },
        { rank: '6', suite: '♥' },
        { rank: 'Q', suite: '♦' },
        { rank: '9', suite: '♣' },
        { rank: 'A', suite: '♥' },
        { rank: '4', suite: '♣' },
        { rank: '7', suite: '♦' },
        { rank: '10', suite: '♠' },
        { rank: '2', suite: '♥' },
        { rank: 'K', suite: '♦' },
        { rank: '5', suite: '♣' },
        { rank: '8', suite: '♦' },
        { rank: 'J', suite: '♠' },
        { rank: '3', suite: '♥' },
        { rank: '6', suite: '♣' },
        { rank: 'Q', suite: '♠' },
        { rank: '9', suite: '♦' },
        { rank: 'A', suite: '♣' },
        { rank: '4', suite: '♦' },
        { rank: '7', suite: '♠' },
        { rank: '10', suite: '♥' },
        { rank: '2', suite: '♣' },
        { rank: 'K', suite: '♠' },
        { rank: '5', suite: '♦' },
        { rank: '8', suite: '♠' },
        { rank: 'J', suite: '♥' },
        { rank: '3', suite: '♣' },
        { rank: '6', suite: '♦' },
        { rank: 'Q', suite: '♣' },
        { rank: '9', suite: '♥' },
        { rank: 'A', suite: '♦' },
        { rank: '4', suite: '♠' },
        { rank: '7', suite: '♥' },
        { rank: '10', suite: '♣' },
        { rank: '2', suite: '♦' },
        { rank: 'K', suite: '♥' },
        { rank: '5', suite: '♠' },
        { rank: '8', suite: '♥' },
        { rank: 'J', suite: '♣' },
        { rank: '3', suite: '♦' },
        { rank: '6', suite: '♠' },
        { rank: 'Q', suite: '♣' },
        { rank: '9', suite: '♥' }
    ];
    const numbers = [161, 180, 199, 218, 162, 205, 181, 200, 219, 163, 182, 220, 201, 177, 196, 215, 170, 178, 221, 197, 216, 171, 179, 198, 172, 217, 193, 212, 167, 186, 194, 173, 213, 168, 187, 195, 214, 188, 169, 209, 164, 183, 202, 210, 189, 165, 184, 203, 211, 166, 204, 185];

    const getCardSuite = (number) => {
        const numberIndex = numbers.indexOf(number);
        if (numberIndex === -1) return "";
        return cardOrder[numberIndex].suite;
    }
    const getCardRank = (number) => {
        const numberIndex = numbers.indexOf(number);
        if (numberIndex === -1) return "";
        return cardOrder[numberIndex].rank;
    }

    const getCardAt = (index) => {
        return cardOrder[index];
    }

    const getCardNumber = (index) => {
        return numbers[index];
    } 

    return { getCardRank, getCardSuite, suites, ranks, getCardAt, getCardNumber }
}