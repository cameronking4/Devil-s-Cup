import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'face',
  description: 'Classic drinking game made for Dook students',
  cards: [
    ...generalDeck,
 () => `Drink ${getRandomSip()} if you ran for the bus and the driver left you anyways.`,
 () => `Drink if you actively say/said HUMP (hit up marketplace).`,
 () => `Drink if you use the handicap buttons to walk into West Union because the doors are too heavy.`,
 () => `Drink ${getRandomSip()} if you lived in GA.`,
 () => `Drink if you've studied in Lilly more than once.`,
 () => `Drink if you think darties are more fun than parties`,
 () => `Drink if you’ve gone to Krafthouse to watch a Duke game`,
 () => `Drink if you're a groupie for Thrive`,
 () => `Drink if you’ve ever pulled the stop chord for the East Campus stop on the C1 as a freshman...don’t lie`,
 () => `Whoever who most recently cried in Perkins drinks ${getRandomSip()}.`,
 () => `Drink ${getRandomSip()} if you've ever hooked up with your O-week hookup after O-week`,
 () => `If you are Econ and Compsci double major, drink.`,
 () => `If you are PubPol, drink.`,
 () => `Drink if actually think you'll be more focused on third floor Perkins`,
 () => `Drink if you made a Tinder... even if just for Cardi`, 
 () => `Drink if you know The Plow`,
 () => `Drink if you've used Heavenly Buffaloes or  Chik Fil A to get people to come to your event?`,
 () => `Drink if you thought Si6hts would be a thing during the 2017-18 basketball season with Marvin Bagley.`,
 () => `Drink if you thought your TA was cute`,
 () => `Drink if you got Red Mango to make a healthier decison`,
 () => `Drink if you get The Loop delivered to you`,
 () => `Drink if you got EMSd your O-week`, 
 () => `Drink if you continued hooking up with your beach week fling`, 
 () => `Drink ${getRandomSip()} if you're still chatting your freshman year crush`,
 () => `If you haven't gone to Wilson or Brodie today, drink ${getRandomSip()}.`,
 () => `Drink ${getRandomSip()} if you have less than 100 food points.`, 
 () => `Drink if you've stolen cups or utencils from West Union or Marketplace.`, 
 () => `Drink ${getRandomSip()} if you've hooked up with a Tarheel`,
() => `Drink if you thought being friends with benefits was a good idea`,
() => `Drink if you've stolen from ABP.`, 
() => `Drink if you went to an event on campus just for the food`,
() => `Drink if you've posted in Duke Memes`,
() => `Drink if you love the Barn`,
() => `Drink if you've blacked-out more than three times... get your life together`,
() => `Drink if you've blacked-out more than three times... get your life together`,
() => `Drink if you've thrown up in Pitchforks`,
() => `Drink if you've walked to Northgate and back`,
() => `Drink if you cut through West Union just to see who's there on your way to class`,
() => `Drink if you live(d) in Swift or Bell Tower`,
() => `If you cheated on a APT quiz you gotta drink. You're not supposed to do that...`,

(players) => {
      const player = getRandomPlayer(players)
      return `${player}, anytime you say "Duke Difference", reverse the direction of the way the phone gets passed around.`
    },
	  
	(players) => {
      const player = getRandomPlayer(players)
      return ` Starting with ${player}, go around and tell the craziest place you've hooked up with someone on campus. Person with the wildest location drinks.`
    },
	  
	  
 (players) => {
      const player = getRandomPlayer(players)
      return `${player}, Congrats on making honor council. You now control the Community Standard. Create 1 new rule or change a previous rule. Whoever breaks it drinks ${getRandomSip()}.`
    },
	  
	   (players) => {
      const player = getRandomPlayer(players)
      return `${player}, Congrats on making honor council. You now control the Community Standard. Create 1 new rule or change a previous rule. Whoever breaks it drinks ${getRandomSip()}.`
    },
	  
	   (players) => {
      const player = getRandomPlayer(players)
      return `${player}, you're the RA. Others in the group aren't allowed to answer any of your questions for the rest of the game. If you successfully get a response, they drink.`
    },	
	  
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, drink ${getRandomSip()} if you've hooked up with a Wayne Bro or Illyrial gal .`
    },
	  
	    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, anytime you say "Tent Check" the group must raise their hands to the sky. Slowest person must drink ${getRandomSip()}.`
    },
	  
	  
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, name 10 Duke basketball players in the NBA. If you take longer than 20 seconds, Drink.`
    },
	  
	(players) => {
      const player = getRandomPlayer(players)
      return `${player}, drink if you haven't finished the unofficial grad requirements and name the ones you've done.`
    },
	    
    () => `If you did consulting recruiting, drink ${getRandomSip()}.`,
	  

	  (players) => {
      const player = getRandomPlayer(players)
      return `${player}, Drink you Dirty Devil.`
    },

	  (players) => {
      const player = getRandomPlayer(players)
      return `${player}, Drink you Dirty Devil.`
    },
	  
	  (players) => {
      const player = getRandomPlayer(players)
      return `${player}, Drink you Dirty Devil.`
    },
	  
	  (players) => {
      const player = getRandomPlayer(players)
      return `${player}, tell your funniest Shooter's or Devines story. If no one laughs, you drink.`
    },
	
	(players) => {
      const player = getRandomPlayer(players)
      return `${player}, who's the lightweight? He/She is your mate now.`
    },
	  
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, who do you think is the biggest thot in the group? He/She drinks ${getRandomSip()}`
    },
	  
    (players) => {
      const player = getRandomPlayer(players)
      return `Starting with ${player}. Go around and name a Duke basketball player until you can't anymore. Loser must drink ${getRandomSip()}.`
    },
	  
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} you are the Bluest Devil. Everytime you shout "Perkins!" everyone in the group must drink.`
    },
	  
	  
    (players) => {
      const player = getRandomPlayer(players)
      return `Starting with ${player}. Go around tell your worst Shooter's night. Lamest story must drink ${getRandomSip()}.`
    }
  ]
}
