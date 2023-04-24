const jsonServer = require('json-server'); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5001;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
	console.log('Server is listening at port ' + port);
});
