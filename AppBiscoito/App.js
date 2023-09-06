import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      img: require("./assets/biscoito.png")   
    }

    this.frases = [ 
      'Primeira frase',
      'Segunda frase',
      'Terceira frase',
      'Quarta frase',
      'Quinta frase',
      'Sexta frase',
      'Setima frase'
    ]; 
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      img: require("./assets/biscoitoAberto.png"),
      text: this.frases[numeroAleatorio]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.state.img}/>
        <Text style={styles.textFrase}>{this.state.text}</Text>
        <TouchableOpacity style={styles.btnArea} onPress={this.quebrarBiscoito}>
          <Text style={styles.btnText} >Quebrar Biscoito</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0DF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200
  },
  btnArea: {
    borderColor: '#dd7b22',
    borderRadius: 25,
    borderWidth:1,
    width: 230,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%'
    
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
  textFrase: {
    color: '#dd7b22',
    fontWeight: 'normal',
    marginTop: '8%',
    fontSize: 20,
  }
});
