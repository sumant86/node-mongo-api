import { config as envConfig } from 'dotenv';
envConfig({ path: 'src/.env' });
import { createServer } from 'http';
import { createApp } from './create-app.js';
import { mongoConnector } from './connectors';
const port = process.env['PORT']; // can be mapped using docker
const app = createApp();
const server = createServer(app);
mongoConnector.connection(() => {
    server.listen(port, () => console.log('Listening on port ' + port));
});

// -----------------------------------------------------------------------------
// When SIGINT is received (i.e. Ctrl-C is pressed), shutdown services
// -----------------------------------------------------------------------------
process.on('SIGINT', () => {
    console.log('SIGINT received ...');
    console.log('Shutting down the server');

    server.close(() => {
        console.log('Server has been shutdown');
        console.log('Exiting process ...');
        process.exit(0);
    });
});
