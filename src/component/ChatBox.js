import React, { useState, useEffect, useRef } from 'react';
import { startConnection, sendMessage, sendMessage2 } from '../service/service';

export default function ChatBox({ currentUser, receiver, token }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const connectionRef = useRef(null);


    useEffect(() => {
        const initializeConnection = async () => {
           
            if (!connectionRef.current) {
                connectionRef.current = await startConnection(token, (sender, message) => {
                    console.log(`Received message from ${sender}: ${message}`);
                    setMessages(prev => [...prev, { sender, content: message }]);
                });
            }
        };

        initializeConnection();

        return () => {
            if (connectionRef.current) {
                connectionRef.current.stop(); 
                connectionRef.current = null;
            }
        };
    }, [token]);

    const handleSendMessage = () => {
        console.log(newMessage);
        sendMessage(currentUser, receiver, newMessage);
        // sendMessage2(newMessage);
        // setMessages(prev => [...prev, { sender: currentUser, content: newMessage }]);
        setNewMessage("");
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <input 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)} 
                placeholder="Type a message"
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}