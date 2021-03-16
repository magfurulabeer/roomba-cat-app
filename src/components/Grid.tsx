import React from 'react';
import { ImageBackground, View, StyleSheet, Dimensions} from 'react-native';

import { Coordinates } from '../common/types';

import { range } from '../utils/fn';

interface GridProps {
  size?: number,
  coordinates?: Coordinates,
  renderSprite?: () => JSX.Element
}

const Grid = ({ size = 3, coordinates, renderSprite }: GridProps) => {

  const padding = Dimensions.get('screen').width / size * 0.1;
 
  return (
    <View style={styles.container}>
      {
        range(size).map(row => {
          return (
            <View style={[styles.row]} key={`ROW-${row}`}>
              {
                range(size).map(col => {

                  return (
                    <ImageBackground source={require('../../assets/tile.jpg')} style={[styles.column, { padding }]} key={`COL-${col}`}>
                      {
                        (renderSprite) && (coordinates) && (coordinates.y === row) && (coordinates.x === col) &&
                        renderSprite()
                      }
                    </ImageBackground>
                  )
                })
              }
            </View>
          )
          
        })
      }
    </View>
  )
}

export default Grid

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').width * 0.9,
    // backgroundColor: 'cyan',
    // borderWidth: 1,
    // borderColor: 'black'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'black'
  },
  column: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
})