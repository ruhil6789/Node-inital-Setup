/// <reference types="node" />
import { Server as HttpServer } from "node:http";
import { Server } from "socket.io";
declare const ws: () => {
    server: import("express-serve-static-core").Express;
    io: null;
} | {
    server: HttpServer<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    io: Server<import("socket.io/dist/typed-events.js").DefaultEventsMap, import("socket.io/dist/typed-events.js").DefaultEventsMap, import("socket.io/dist/typed-events.js").DefaultEventsMap, any>;
};
export default ws;
//# sourceMappingURL=ws.d.ts.map