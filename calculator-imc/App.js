import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    imc: 0,
    peso: 0,
    altura: 0,
    legenda: 'Inderteminado',
    cor : '#bdc328'
  };

  calcularIMC = (peso, altura) => {
    const imc = this.state.peso / (this.state.altura * this.state.altura);
    
    let cor = this.setState.cor;

    let legenda = '';
    if (imc < 18.5) {
      legenda = 'Magreza';
      cor = '#e74c3c';
    } else if (imc >= 18.5 && imc < 25) {
      legenda = 'Normal';
      cor = '#2ecc71';
    } else if (imc >= 25 && imc < 30) {
      legenda = 'Sobrepeso';
      cor = '#f1c40f';
    } else if (imc >= 30 && imc < 40) {
      legenda = 'Obesidade';
      cor = '#e67e22';
    } else if (imc >= 40) {
      legenda = 'Obesidade Grave';
      cor = '#e74c3c';
    }
    this.setState({ imc, legenda, cor });
  };

  render() {
    const { imc, peso, altura, legenda, cor } = this.state;
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View style={[styles.painel, {backgroundColor: cor}] } >
          <Text  style={styles.resultado}>{imc}</Text>
          <Text style={styles.diagnostico}>{legenda}</Text>
        </View>

        <View>
          <TextInput keyboardType='number-pad' onChangeText={(peso) => {this.setState({peso})}} style={styles.peso} />
          <TextInput keyboardType='number-pad' onChangeText={(altura) => {this.setState({altura})}} style={styles.altura} />
          <Button mode="contained" onPress={this.calcularIMC}>Calcular</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },
  painel: {
    // backgroundColor: '#bdc328',
    alignSelf: 'center',
    borderRadius : 5,
    width: 150,
    marginVertical: 10,
    padding: 8,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso: {
    // borderColor: '#000',
    // borderWidth: 1,
    marginVertical : 10
  },
  altura: {
    // ?borderColor: '#000',
    // borderWidth: 1,
    marginVertical : 10
  },
});
