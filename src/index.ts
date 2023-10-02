import * as controllers from './controllers'; 
import { createServer } from './middleware/createServer';

const controllerInstances = Object.values(controllers);
createServer(controllerInstances)