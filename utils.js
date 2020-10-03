exports.responseResult = function (msg, status, data, total) {
  if (!data) {
    return {
      msg,
      status,
    }
  }
  if (total) {
    return {
      msg,
      status,
      data: {
        total,
        data
      }
    }
  }
  return {
    msg,
    status,
    data,
  }
}