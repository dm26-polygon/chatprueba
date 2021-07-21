import io from 'socket.io-client';

let socket = io("http://servernodeio.herokuapp.com/")

export default socket