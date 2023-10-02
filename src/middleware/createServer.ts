import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';


export const createServer = (controllerInstances:any) => {
    const app = express();

    useExpressServer(app, {
      controllers: controllerInstances,
    });
    
    const PORT = process.env.PORT || 3009;
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
}
