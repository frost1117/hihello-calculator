import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Display } from './display';
import Button from './button';
import { operatorSymbols } from './constants';
import { useCalculator } from "./hooks";

export const Calculator = (): JSX.Element => {
  const [displayState, actions] = useCalculator();
  const { display, clearText } = displayState;
  const {
    appendNumber,
    setOperator,
    calculateTotal,
    clear,
    appendDecimalPoint,
    toggleSign,
    applyPercent,
  } = actions;

  return (
    <View style={styles.calculator}>
      <Display text={display} />
      <View style={{ padding: 20 }}>
        <View style={styles.row}>
          <Button text={clearText} onClick={clear} />
          <Button text={'+/-'} onClick={toggleSign} />
          <Button text={'%'} onClick={applyPercent} />
          <Button text={operatorSymbols.divide} orange onClick={setOperator} />
        </View>
        <View style={styles.row}>
          <Button text={'7'} onClick={appendNumber} />
          <Button text={'8'} onClick={appendNumber} />
          <Button text={'9'} onClick={appendNumber} />
          <Button text={operatorSymbols.multiply} orange onClick={setOperator} />
        </View>
        <View style={styles.row}>
          <Button text={'4'} onClick={appendNumber} />
          <Button text={'5'} onClick={appendNumber} />
          <Button text={'6'} onClick={appendNumber} />
          <Button text={operatorSymbols.subtract} orange onClick={setOperator} />
        </View>
        <View style={styles.row}>
          <Button text={'1'} onClick={appendNumber} />
          <Button text={'2'} onClick={appendNumber} />
          <Button text={'3'} onClick={appendNumber} />
          <Button text={operatorSymbols.add} orange onClick={setOperator} />
        </View>
        <View style={styles.row}>
          <Button text={'0'} wide onClick={appendNumber} />
          <Button text={'.'} onClick={appendDecimalPoint} />
          <Button text={'='} orange onClick={calculateTotal} />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  calculator: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row'
  }
})
