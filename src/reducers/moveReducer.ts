import { Direction, RoombaAction, RoombaActionType, RoombaState, RoombaReducer } from '../common/types'


const moveReducer: RoombaReducer = (state, action) => {
  console.log(state)
  switch(state.direction) {
    case Direction.North:
      if(state.coordinates.y == 0) {
        return { ...state, direction: Direction.rotatedDirection(state.direction) }
      }
      return { ...state, coordinates: {...state.coordinates, y: state.coordinates.y - 1 }}

    case Direction.South:
      if(state.coordinates.y == state.gridSize - 1) {
        return { ...state, direction: Direction.rotatedDirection(state.direction) }
      }
      return { ...state, coordinates: {...state.coordinates, y: state.coordinates.y + 1 }}

    case Direction.East:
      if(state.coordinates.x == state.gridSize - 1) {
        return { ...state, direction: Direction.rotatedDirection(state.direction) }
      }
      return { ...state, coordinates: {...state.coordinates, x: state.coordinates.x + 1 }}

    case Direction.West:
      if(state.coordinates.x == 0) {
        return { ...state, direction: Direction.rotatedDirection(state.direction) }
      }
      return { ...state, coordinates: {...state.coordinates, x: state.coordinates.x - 1 }}
  }
}

export default moveReducer;