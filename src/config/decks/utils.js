const MIN_SIP = 0
const MAX_SIP = 2

array = ['twice', 'three times', 'the bitch cup'] 
export function getRandomPlayer (players) {
  const index = Math.floor(Math.random() * players.length)
  return players[index]
}

export function getRandomSip () {
  return array[Math.floor(Math.random() * (MAX_SIP - MIN_SIP + 1)) + MIN_SIP]
}
