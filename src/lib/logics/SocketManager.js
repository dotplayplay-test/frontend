import { io } from "socket.io-client";

export default class SocketManager {
  static socketRequestBind = (socket) => (event, data) =>
    new Promise((resolve, reject) => {
      const timeoutId = setTimeout(
        () => reject(new Error("Socket time out")),
        20000
      );
      socket.emit(event, data, (response) => {
        clearTimeout(timeoutId);
        try {
          // for (let i = 0, len = this.afterRequest.length; i < len; i++) {
          //   this.afterRequest[i](response);
          // }
          // console.log("Socket response => ", response)
          if (response.code === 0) {
            resolve(response.data);
          } else {
            console.log(
              `Socket Error: ${socket.nsp}:${event}\n${response.message}`
            );
            reject(new Error(response.msg, response.code));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

  static socket = (namespace) => {
    return io(namespace);
  };
}
