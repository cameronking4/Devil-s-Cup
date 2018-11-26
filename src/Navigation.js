import { createStackNavigator } from 'react-navigation'

import AddPlayers from './screens/AddPlayers'
import ChooseGame from './screens/ChooseGame'
import GameDeck from './screens/GameDeck'
import Howto from './screens/Howto'

const config = {
  headerMode: 'none',
  initialRouteName: 'AddPlayers'
}

export default createStackNavigator({
  AddPlayers: AddPlayers,
  ChooseGame: ChooseGame,
  GameDeck: GameDeck,
	Howto: Howto
}, config)
