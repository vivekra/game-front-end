import {io} from 'socket.io-client'
export const socket = io("http://backend.digitalq.io:4000/")

socket.on('updateBoard', board => {
    return board
})

export const createRoom = () => {
    let id = ""
    socket.emit('createRoom',id) 
}

export const joinRoom = id => {
    window.sessionStorage.setItem("gameId",id)
    socket.emit('join',id)
    return id
}