import { IncomingMessage, Server as HttpServer, ServerResponse } from "node:http";
import { Response, Express } from "express";
import { StatusCodes } from "http-status-codes";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events.js";
export declare const sendSuccessRes: (res: Response, message: string, data?: any, statusCode?: StatusCodes) => Response<any, Record<string, any>>;
export declare const checkMemoryAndRestart: () => void;
export declare const checkHeapUsageAndRestart: () => void;
export declare const runTheMainServer: (app: Express | HttpServer<typeof IncomingMessage, typeof ServerResponse>) => void;
export declare const connectToDb: () => Promise<void>;
export declare const runTheServer: (app: Express | HttpServer<typeof IncomingMessage, typeof ServerResponse>, io?: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> | null, runOnThreads?: boolean, hasDbConnection?: boolean) => Promise<void>;
export declare const runOnServerOnThreads: (app: Express | HttpServer<typeof IncomingMessage, typeof ServerResponse>, io?: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> | null) => void;
export declare const initialStartMsg: () => void;
//# sourceMappingURL=serverService.d.ts.map