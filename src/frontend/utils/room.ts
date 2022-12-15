export const convertRoom = (room: string) => {
    const roomArray = room.split("/")
    return `Prédio ${roomArray[0]}, andar ${roomArray[1]}, sala ${roomArray[2]}`
}
