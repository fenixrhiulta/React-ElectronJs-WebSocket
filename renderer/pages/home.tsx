import React, { useState } from 'react';
import { io } from "socket.io-client";

const URL = "http://localhost:3050";
const socket = io(URL, { transports: ['websocket', 'polling', 'flashsocket'] });


function home() {
    const [ping, setPing] = useState(0);
    const [message, setMessage] = useState("");
    
    socket.on("connect", () => {
        setMessage(socket.id);
        console.log(socket.id);
    });

    setInterval(() => {
        const start = Date.now();
            socket.volatile.emit("ping", () => {
            const latency = Date.now() - start;
            setPing(latency);
        });
      }, 1000);

    () => socket
    return (
        <div style={{margin: 20}}>
            Versão de teste.
            <p>Socket ID: {message}</p>
            <p>Socket Ping: {ping}</p>
        </div>
    )
}

export default home