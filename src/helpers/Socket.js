import io from 'socket.io-client';

let socket = io("https://servernodeio.herokuapp.com/")

export default socket