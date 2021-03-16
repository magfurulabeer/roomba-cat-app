export enum Direction { North, South, East, West }

export namespace Direction {
  export function rotatedDirection(direction: Direction): Direction {
    switch(direction) {
      case Direction.North:
        return Direction.East
      case Direction.South:
        return Direction.West
      case Direction.East:
        return Direction.South
      case Direction.West:
        return Direction.North
    }
  }
}

export interface Coordinates {
  x: number,
  y: number
}

export interface RoombaState {
  gridSize: number,
  coordinates: Coordinates
  direction: Direction
}

export enum RoombaActionType {
  MOVE
}

export interface RoombaAction {
  type: RoombaActionType
}

export type RoombaReducer = (state: RoombaState, action: RoombaAction) => RoombaState;