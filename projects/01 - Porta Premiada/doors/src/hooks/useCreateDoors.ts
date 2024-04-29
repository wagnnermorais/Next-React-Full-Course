import DoorModel from "../model/DoorModel";

export function useCreateDoors(quantity: number, doorSelected: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorSelected
    return new DoorModel(number, hasGift)
  })
}