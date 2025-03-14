"use client";

import socket from "@/lib/socket/config";
import { useEffect } from "react";

const useWebsocket = (callback: () => void, key?: string) => {
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      if (key) {
        socket.emit("join", key);
      }
      socket.io.engine.on("upgrade", () => {});
    }

    function onDisconnect() {
      console.log("socket disconnected");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    callback(); // Ensure this is stable with useCallback in parent

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [callback, key]); // ✅ Added missing dependencies
};

export default useWebsocket;
