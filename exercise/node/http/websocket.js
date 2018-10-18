var ws = new WebSocket("ws://127.0.0.1:3002");

ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};

   