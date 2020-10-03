const studentSchema = require('../dao/student')

exports.addStudent = async function (stuList) {
  const result = await studentSchema.create(stuList)
  return result;
}
exports.queryAllStudent = async function () {
  const result = await studentSchema.find({}, { __v: 0 }).sort({
    sno: 1
  });
  return result;
}
exports.queryStudentByPage = async function (page, limit) {
  const data = await studentSchema.find({}, { __v: 0 })
    .limit(limit)
    .skip((page + 1) * limit);
  const total = await studentSchema.find().countDocuments();
  return { data, total };
}
exports.queryStudentByKey = async function (sex, key) {
  let condition;
  const reg = new RegExp(key, "i");
  if (sex && key) {
    condition = {
      sex,
      name: { $regex: reg }
    }
  } else if (!sex && key) {
    condition = {
      name: { $regex: reg }
    }
  } else if (!key && sex) {
    condition = {
      sex
    }
  }
  const data = await studentSchema.find(condition, { __v: 0 });
  return data;
}
exports.editStudent = async function (id, newSchema) {
  const result = await studentSchema.updateOne({
    _id: id
  }, newSchema);
  return result;
}
exports.deleteStudent = async function (id) {
  const result = await studentSchema.deleteOne({
    _id: id
  });
  return result;
}