import * as signalR from "@microsoft/signalr";

let connection = null;
export async function startConnection(token, onMessageReceived) {
    if (connection && connection.state !== signalR.HubConnectionState.Disconnected) {
        await connection.stop();
    }
  console.log("token", token);
  connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7161/chat-hub?token=" + token)
    .withAutomaticReconnect()
    .build();

  // console.log("connectinoaaa", connection);
  connection.off("ReceiveMessage");
  connection.on("ReceiveMessage", (sender, message) => {
    console.log(`Message received from ${sender}: ${message}`);
    onMessageReceived(sender, message);
  });

  await connection
    .start()
    .then(() => {
      console.log("Connection established successfully.");
      console.log(`Connection ID: ${connection.connectionId}`);
    })
    .catch((err) => {
      console.error("Failed to connect:", err);
    });
}

export function sendMessage(sender, receiver, content) {
  if (connection) {
    console.log("Send to", receiver, content);
    const chatMessage = {
      senderId: sender,
      receiverId: receiver, // Replace with actual user ID
      message: content,
      imageUrls: [],
      videoUrls: [],
    };

    connection
      .invoke("SendMessageAsync", chatMessage)
      .catch((err) => console.error(err));
  }
}

export function sendMessage2(content) {
  if (connection) {
    connection
      .invoke("SendMessage2", content)
      .catch((err) => console.error(err));
  }
}
