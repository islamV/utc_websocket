import { WebSocketServer } from "ws";

const port = process.env.PORT || 9090;
const wss = new WebSocketServer({ port });

console.log(`✅ UTC WebSocket running on port ${port}`);

wss.on("connection", (ws) => {
  console.log("Client connected");
  const interval = setInterval(() => {
    const utc = new Date().toISOString();
    ws.send(JSON.stringify({ utc }));
  }, 1000);

  ws.on("close", () => clearInterval(interval));
});
