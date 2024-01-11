import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import { Server } from "socket.io";

const webSocketServer = {
  name: "webSocketServer",
  configureServer(server) {
    if (!server.httpServer) return;

    const io = new Server(server.httpServer);

    io.on("connection", (data) => {
      socket.emit("latest-bet", "hello world!");

      socket.on("active-bets-keno", (content, id) => {
        try {
          //   console.log("content:", content);
          socket.emit("latest-bet", content);
        } catch (error) {
          //   console.log("error:", error);
          socket.emit("latest-bet", error);
        }
      });
    });
  },
};

export default defineConfig({
  plugins: [sveltekit(), webSocketServer],
});
