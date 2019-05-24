// lambda.ts
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below
const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
 if (!cachedServer) {
   try {
     const expressApp = require('express')();
     const nestApp = await NestFactory.create(ApplicationModule, expressApp);
     nestApp.use(eventContext());
     await nestApp.init();
     cachedServer = createServer(nestApp, undefined, binaryMimeTypes);
   }
   catch (error) {
     return Promise.reject(error);
   }
 }
 return Promise.resolve(cachedServer);
}

export const handler: Handler = async (event: any, context: Context) => {
 cachedServer = await bootstrapServer();
 return proxy(cachedServer, event, context, 'PROMISE').promise;
}
