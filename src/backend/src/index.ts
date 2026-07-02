import {PORT} from './config/env';

const server = Bun.serve({
    port: PORT,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === '/health') {
            return new Response('OK');
        }
        return new Response('Not Found', {status: 404});
    },
});

console.log(`Aimspot backend listening on ${server.url}`);