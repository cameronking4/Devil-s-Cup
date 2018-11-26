import { getRandomPlayer, getRandomSip } from './utils'

const generalCards = [
  () => `Anyone drinking with their right hand must drink ${getRandomSip()}.`,
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} pick a mate. Everytime you drink, so does the other person.`
  },
  (players) => {
    const player1 = getRandomPlayer(players)
    const player2 = getRandomPlayer(players.filter(current => current !== player1))
    return `${player1} your new name is ${player2} and visa versa. Anyone incorrectly using your old name drinks ${getRandomSip()}.`
  },
	
	(players) => {
    const player1 = getRandomPlayer(players)
    const player2 = getRandomPlayer(players.filter(current => current !== player1))
    return `${player1}, ${player2} is going to fail their finals. Drink until ${player2} says to stop to save their grade.`
  },
	
	() => `If you haven't been feautured on @dukestudents .. you're lame, drink ${getRandomSip()}.`,
  () => `All the boys in the group, drink.`,
  () => `All the girls in the group, drink.`
]

export default generalCards
