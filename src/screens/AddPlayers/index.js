import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, Image, LayoutAnimation } from 'react-native'
import { Chip, TextInput, Button } from 'react-native-paper'

import playersContainer from '../../containers/players'

class AddPlayers extends Component {
    state = {
      current: '',
      players: [],
      visible: false
    }

    componentDidMount () {
      setTimeout(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        this.setState({ visible: true })
      }, 1000)
    }

    handleAddPlayer = () => {
      const { players, current } = this.state

      if (!current) {
        return
      }

      this.setState({
        current: '',
        players: [...players, current]
      })
    }

    handleChooseDeck = (e) => {
      const { players } = this.state

      if (!players.length) {
        return
      }

      playersContainer.set(players)
      this.props.navigation.navigate('ChooseGame')
    }
	
	 handleHowto = (e) => {
      this.props.navigation.navigate('Howto')
    }

    handleRemovePlayer = (player) => () => {
      const { players } = this.state
      this.setState({ players: players.filter(current => current !== player) })
    }

    handleEditPlayer = (player) => () => {
      const { players } = this.state
      this.setState({ current: player, players: players.filter(current => current !== player) })
    }

    render () {
      const { players, current, visible } = this.state

      return (

        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image source={require('../../images/logo.png')} style={{ resizeMode: 'contain', height: 100 }} />
            <Text style={{ margin: 24, fontFamily: 'Blackjack', textAlign: 'center', fontSize: 60, color: '#fff' }}>Devil's Cup</Text>
            <Text style={{ fontSize: 16, color: '#dedede', marginTop: -25, marginBottom: 35}}>The unofficial drinking game for Dook students</Text>
          </View>

          {
            visible && (
              <Fragment>

                <TextInput
                  style={styles.input}
                  label='Add player'
                  placeholder='New player name'
                  value={current}
                  maxLength={40}
                  onChangeText={current => this.setState({ current })}
                  onSubmitEditing={this.handleAddPlayer}
                  blurOnSubmit={!current}
                  returnKeyType={'done'}
                />

                <View style={styles.chipContainer}>
                  {
                    players.map(current => (
                      <Chip style={{ margin: 2 }} key={current} onPress={this.handleEditPlayer(current)} onClose={this.handleRemovePlayer(current)}>{current}</Chip>
                    ))
                  }
                </View>

				<Button style={styles.deckBtn} onPress={this.handleChooseDeck} type='contained' dark> Choose Game</Button>
				<Button style={styles.deckBtn2} onPress={this.handleHowto} type='contained' dark> How to Play</Button>
				
              </Fragment>
            )
          }

        </View>

      )
    }
}

const styles = StyleSheet.create({
  headerContainer: { height: '30%', flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { marginHorizontal: 20, backgroundColor: 'rgba(247, 247, 247, 0.6)', marginTop: 30 , shadowColor: '#fff'},
  container: { flex: 1, paddingTop: 60, backgroundColor: '#2e73e2'  },
  chipContainer: {
    overflow: 'scroll',
    flex: 1,
    alignItems: 'flex-start',
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  chip: { margin: 2 },
  deckBtn: { margin: 50, marginBottom:10, padding:10, borderRadius: 15, backgroundColor: 'rgba(255, 255, 255, 0.54)'},
  deckBtn2: { marginBottom: 30, padding:10}
})

export default AddPlayers
