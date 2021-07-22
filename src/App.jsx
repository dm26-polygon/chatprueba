import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import './app.css'

import socket from './helpers/Socket'
import axios from 'axios'

const App = () => {

  const element = <FontAwesomeIcon icon={faPaperPlane} />

  const [userNameDB, setUserNameDB] = useState('Juan')
  const [messages, setMessages] = useState([])
  const [questionsDB, setQuestionsDB] = useState([])

  useEffect(() => {

    console.log("Conexion a la API JuanK")

    axios.get('http://chattesting-env-2.eba-hfevfekr.us-east-1.elasticbeanstalk.com/saludo').then(res => {
      console.log(res.data)
    })
   
    const chatBox = document.querySelector('#chat');

    socket.on('sendMessages', function (msg) {
      setMessages([...messages, msg])
      console.log(msg)
    });

    socket.on('questionsDB', questions => {
      console.log("Question res")
      console.log(questions)
      setQuestionsDB(questions)
    });

    chatBox.scrollTop = chatBox.scrollHeight;

    return () => {
      socket.off();
    };

  }, [messages])

  const sendMessage = (e) => {

    e.preventDefault()

    const chatBox = document.querySelector('#chat');
    const userNameForm = userNameDB
    const messageForm = document.getElementById("messageForm")

    const message = {
      user: userNameForm,
      message: messageForm.value,
      livesName: "Lives test 1"
    };

    socket.emit("sendMessages", message);

    messageForm.value = "";
    messageForm.focus()

    chatBox.scrollTop = chatBox.scrollHeight;

  }

  const changeUser = (e) => setUserNameDB(e.target.value)

  return (
    <div>

      <h2 className="text-center text-title mt-5" >CHAT WS</h2>
      <br />
      <br />

      <div className="container-fluid">

        <div className="row">
          <div className="col-6 container-video">

            <div className="row">
              <div className="col-8">

                <label htmlFor="" className="text-secondary">Usuario DB</label>
                <input type="text" className="form-control mt-1" placeholder="Ingresar usuario" value={userNameDB} onChange={changeUser} autoComplete="off" />

                <button className="btn btn-info" hidden type="submit">Guardar</button>

                <hr />

                {
                  questionsDB.map((data, i) => {
                    return (
                      <div className="card__question me-2" key={i /* Mientras */}>
                        <div className="card__header text-white">
                          <span>{data.user}</span>
                        </div>
                        <div className="card__body text-white">
                          {data.message}
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>

          </div>

          <div className="col-6 " >

            <div class="container__buttons">
              <button class="btn btn-outline-secondary" type="button">Chat Academy</button>
              <button class="btn btn-outline-secondary" type="button">Preguntas Academy</button>
            </div>

            {/* RECORDAR QUE SI SE QUITA EL ID DEL CHAT SALE ERROR POR QUE NO SE PUEDE HACER SCROLL */}

            <div className="container-chat" >

              <div className="container-messsages" id="chat">

                {

                  messages.map((data, i) => {
                    if (data.type === "question") {
                      return (
                        <div className="card__question me-2" key={i /* Mientras */}>
                          <div className="card__header text-white">
                            <span>{data.user}</span>
                          </div>
                          <div className="card__body text-white">
                            {data.message}
                          </div>
                        </div>
                      )
                    } else {
                      return (
                        <div className="card me-2 " key={i /* Mientras */}>
                          <div className="card__header">
                            <span>{data.user}</span>
                          </div>
                          <div className="card__body">
                            {data.message}
                          </div>
                        </div>
                      )
                    }
                  })
                }

              </div>


              <hr />

              <form onSubmit={sendMessage}>

                <div className="container-message">

                  <div className="input-group mb-3">
                    <input type="text" className="form-control" id="messageForm" placeholder="Escribe tu comentario" aria-label="Recipient's username" aria-describedby="button-addon2" autoComplete="off" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={sendMessage}>{element}</button>
                  </div>

                  <button className="btn btn-primary" type="submit" hidden>Enviar</button>
                  <small className="text-secondary">* Recuerda el signo de interrogación " ? " si vas a preguntar. </small>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  )

}

export default App
