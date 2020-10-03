let Router = require('koa-router');
let router = new Router({ prefix: "/api/student" })
const { addStudent, queryAllStudent, editStudent, deleteStudent, queryStudentByKey, queryStudentByPage } = require('../service/index')
const { responseResult } = require('../utils')
// 获取所有学生列表
router.get("/", async (ctx) => {
  const result = await queryAllStudent();
  ctx.body = responseResult("查询成功", 200, result);
})
// 分页查询学生列表
router.get("/queryByPage", async (ctx) => {
  const result = await queryStudentByPage(+ctx.request.query.page, +ctx.request.query.limit);
  console.log(result)
  ctx.body = responseResult("查询成功", 200, result.data, result.total);
})
// 根据条件查询学生列表
router.get("/queryByKey", async (ctx) => {
  const result = await queryStudentByKey(ctx.request.query.sex, ctx.request.query.key);
  ctx.body = responseResult("查询成功", 200, result);
})
// 添加学生
router.post("/", async (ctx) => {
  const result = await addStudent(ctx.request.body)
  ctx.body = responseResult("添加成功", 200, result);
})
// 修改学生
router.put("/:id", async (ctx) => {
  const result = await editStudent(ctx.request.params.id, ctx.request.body)
  if (result.ok === 1) {
    ctx.body = responseResult("修改成功", 200, ctx.request.body);
  } else {
    ctx.throw(403);
  }
})
// 删除学生
router.delete("/:id", async (ctx) => {
  const result = await deleteStudent(ctx.request.params.id);
  if (result.deletedCount === 1) {
    ctx.body = responseResult("删除成功", 200, ctx.request.params.id);
  } else {
    ctx.body = responseResult("id错误", 409);
  }
})
module.exports = router
