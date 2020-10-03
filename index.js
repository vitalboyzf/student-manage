const Koa = require('koa');
const app = new Koa();
const router = require('./route/student')
const koaStatic = require('koa-static')
const koaBody = require('koa-body');
require('./dao/index')
app.use(koaBody({
  Multipart: true, //这里补充一点，如果不加multipart：true ctx.request.body会获取不到值
}))


app.use(koaStatic("./dist"))
app.use(require('koa2-cors')())
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
  console.log("app run 3000port")
});