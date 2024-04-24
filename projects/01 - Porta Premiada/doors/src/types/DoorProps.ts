import DoorModel from "../model/DoorModel"

export interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}