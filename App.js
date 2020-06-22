// Import-Anweisung
// Based on React we import react-
import React, { Component } from 'react';
import {AsyncStorage,  Button, StyleSheet,  View } from 'react-native';
import Quote from './js/components/Quote';
import Style from './js/components/Style';
import NewQuote from './js/components/NewQuote';


//Const and Var
const data = [
  {text: 'Der Humor nimmt die Welt hin, wie sie ist, sucht sie nicht zu verbessern und zu belehren, sondern mit Weisheit zu ertragen.',
   author:'[Charles Dickens]'},
  {text: 'Es ist nämlich nicht wahr, dass Humor nur so etwas Leichtes und Unernstes wäre, während die ernsten Dinge immer sehr wichtig wären.',
   author:'[Ephraim Kishon]'},
  {text: 'Humor ist eines der besten Kleidungsstücke, die man in Gesellschaft tragen kann.',
   author:'[William Shakespeare]'}
];


// Deklaration
export default class App extends Component {
  state = { index: 0, showNewQuoteScreen: false, quotes: data }; 

  _storeData() {


  };



  _addQuote = (text, author) => {   
    let { quotes } = this.state;
    if(text  && author ) {
      quotes.push({text,author});
      // Zitat abspeichern
      this._storeData();
    }      
    this.setState({ showNewQuoteScreen: false, quotes });
  };

  render(){ 
    let { index, quotes } = this.state;
    const quote = quotes[index];
    let nextIndex = index +1;
    if (nextIndex === quotes.length) nextIndex = 0;
    let backIndex = index -1;
    
    if (backIndex === 0) backIndex = data.length-1;
    return (
      <View style={styles.container}>
        <View style={styles.newButton}>
          <Button
            title="Neu"
            onPress={() => this.setState({ showNewQuoteScreen: true })}
          />
        </View>
        <NewQuote 
          visible={this.state.showNewQuoteScreen}
           onSave={this._addQuote} />
        <Quote text={quote.text} author={quote.author} />
        <View style={styles.newButton}>
          <Button
            title="Nächstes Zitat"
            onPress={() => this.setState({ index: nextIndex})}
          />  
        </View>  
      </View>        
    );
  }
}






const styles = StyleSheet.create({
  container: {              
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  nextbutton: {
    position: 'absolute',
    bottom: 0
  },
  newButton: {
    postition: 'absolute',
    right: 0,
    top: 30
  }
  
});

