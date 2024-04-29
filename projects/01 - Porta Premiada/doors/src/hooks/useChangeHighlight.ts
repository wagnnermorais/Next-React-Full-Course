import DoorModel from "../model/DoorModel";

export function useChangeHighlight(doors: DoorModel[], higlightedDoor: DoorModel) {
  return doors.map((currentDoor) => {
    const isEqual = currentDoor.doorNumber === higlightedDoor.doorNumber
    if (isEqual) return higlightedDoor
    return higlightedDoor.isOpened ? currentDoor : currentDoor.unselectDoor()
  })
}