import io from 'socket.io-client';

let socket = io("ws://chattesting-env-2.eba-hfevfekr.us-east-1.elasticbeanstalk.com/")

export default socket