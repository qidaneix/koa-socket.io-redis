const Koa = require('koa');
const nunjucks = require('nunjucks');
const init = require('./init.js');

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = nunjucks.render('index.html');
});

app.listen(3000);
console.log('app started at port 3000...');
init();
