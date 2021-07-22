import io from 'socket.io-client';

let socket = io("http://chattesting-env-2.eba-hfevfekr.us-east-1.elasticbeanstalk.com/")

export default socket