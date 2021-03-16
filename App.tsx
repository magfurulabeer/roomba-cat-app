import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { Direction, RoombaAction, RoombaActionType, RoombaState } from './src/common/types'
import RoombaCat from './src/components/RoombaCat';
import Grid from './src/components/Grid';
import moveReducer  from './src/reducers/moveReducer'
import Button from './src/components/Button';

// TODO: Allow user to change this
const GRID_SIZE = 5;

const INITIAL_STATE: RoombaState = {
  gridSize: GRID_SIZE,
  coordinates: {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE)
  },
  direction: Direction.South
}

export default function App() {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [state, dispatch] = useReducer(moveReducer, INITIAL_STATE);

  const handlePress = () => {
    console.log("HANDLE PRESS");
    dispatch({ type: RoombaActionType.MOVE });
  }

  // ROTATE AND MOVE
  useEffect(() => {
    if(isFirstRender) {
      setIsFirstRender(false)
    } else {
      dispatch({ type: RoombaActionType.MOVE });
    }
  }, [state.direction])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Roomba Cat</Text>
      <StatusBar style="auto" />
      <Grid 
        size={GRID_SIZE}
        coordinates={state.coordinates}
        renderSprite={() => <RoombaCat direction={state.direction} />}
      />
      <Button onPress={handlePress}>
        <Ionicons name="power-outline" size={50} color="white" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E4CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40
  },
  moveButton: {
    backgroundColor: 'cyan',
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dotted'
  }
});
