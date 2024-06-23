import Express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = new Express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Permitir todas as origens
        methods: ['GET', 'POST'], // Permitir métodos GET e POST
    }
});

io.on('connection', (socket) => {
    socket.on('channel', (channelName, msg) => {
        io.emit(channelName, msg);
    });
});

server.listen(3000, () => {
    console.log('Listen on port 3000');
});