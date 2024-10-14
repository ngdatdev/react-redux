import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

const Notification = () => {
    const [message, setMessage] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const connect = async () => {
            const conn = new HubConnectionBuilder()
                .withUrl("https://localhost:7161/notificationHub") 
                .withAutomaticReconnect()
                .build();

            conn.on("ReceiveNotification", (message) => {
                setNotifications((prev) => [...prev, message]);
            });

            await conn.start();
            setConnection(conn);
        };

        connect();

        return () => {
            if (connection) {
                connection.stop();
            }
        };
    }, [connection]);

    const sendNotification = async () => {
        if (message) {
            try {
                await fetch('/api/notification/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ Message: message })
                });

                setMessage('');
            } catch (error) {
                console.error("Error sending notification:", error);
            }
        } else {
            alert("Please enter a message.");
        }
    };

    return (
        <div>
            <h1>SignalR Notification Example</h1>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Enter your message" 
            />
            <button onClick={sendNotification}>Send Notification</button>

            <h2>Notifications:</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;