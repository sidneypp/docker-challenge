import express from "express";

const server = express();

server.get("/", (request, response) => {
  return response.send("<h1>Full Cycle Rocks</h1>");
});

export default server;