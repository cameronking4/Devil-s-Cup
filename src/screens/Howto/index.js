import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, Image, LayoutAnimation } from 'react-native'
import { Chip, TextInput, Button } from 'react-native-paper'
import { StatusBar, FlatList } from 'react-native'
import { Appbar, List } from 'react-native-paper'

import decks from '../../config/decks/index'

import activeDeck from '../../containers/active-deck'

const data = Object.entries(decks).map(([title, detail]) => {
  return {
    icon: detail.icon,
    title,
    description: detail.description
  }
})

class Howto extends Component {
    handleDeckSelected = (deckTitle) => async () => {
      await activeDeck.set(decks[deckTitle])
      this.props.navigation.navigate('GameDeck')
    }

    handleBack = () => this.props.navigation.goBack()

    render () {
      return (
        <View style={{ flex: 1, backgroundColor: '#2a7cff' }}>
          <StatusBar barStyle='light-content' />
          <Appbar.Header style={{backgroundColor: '#2a7cff'}}>
            <Appbar.BackAction  onPress={this.handleBack}/>
            <Appbar.Content title='How to Play' /></Appbar.Header>
       	
			<View style={styles.headerContainer}>
					<Text style={{ fontSize: 24, color: '#fff', }}>First, add players </Text>
					<Text style={{ fontSize: 24, color: '#fff', }}>Choose your game deck</Text>
					<Text style={{ fontSize: 24, color: '#fff', }}>Pass the phone around </Text>
					<Text style={{ fontSize: 24, color: '#fff', }}>Each player reads prompt aloud </Text>
					<Text style={{ fontSize: 24, color: '#fff', }}>Drink according to prompt </Text>
					<Text style={{ fontSize: 94, color: '#dedede', }}> </Text>
					<Text style={{ fontSize: 18, color: '#dedede', }}>Please Drink Responsibly.</Text>
                </View>


        </View>
      )
    }
}

const styles = StyleSheet.create({
  headerContainer: { height: '30%', flex: 1, marginTop:90, padding:10, margin:10, alignItems: 'center' }
});

export default Howto
