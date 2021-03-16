import React from 'react';
import { Image } from 'react-native';

import { Direction } from '../common/types'

interface RoombaCatProps {
  direction: Direction,
  height?: number,
  width?: number
}

const sourceForDirection = (direction: Direction) => {
  switch(direction) {
    case Direction.North:
      return require('../../assets/roomba-up.png');
    case Direction.South:
      return require('../../assets/roomba-down.png');
    case Direction.West:
      return require('../../assets/roomba-left.png');
    case Direction.East:
      return require('../../assets/roomba-right.png');
  }
}

const RoombaCat = ({ direction, height, width}: RoombaCatProps) => (
  <Image
    style={(height && width ? { height, width } : { flex: 1 })}
    source={sourceForDirection(direction)}
    resizeMode="contain"
  />
  ) 

export default RoombaCat

