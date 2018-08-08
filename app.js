const Koa = require('koa');
const nunjucks = require('nunjucks');
const socketIO = require('socket.io');

const { init, redis } = require('./init.js');

const app = new Koa();
const io = socketIO(app);

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = nunjucks.render('index.html');
});

app.listen(3000);
console.log('app started at port 3000...');
init();


io.on('connection', (socket) => {
  console.log('connect success!');
  socket.emit('hi', '你好哇！');
})
