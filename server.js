const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.jason');
const middleswares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middleswares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server está funcionando na porta ${port}`);
});