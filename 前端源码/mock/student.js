import mock from 'mockjs';
import axios from 'axios'
export default {
  'GET /api/query': mock.mock({
    'data|100': [{
      key: /\w{5}\d{3}/,
      'sno|+1': 185110203001,
      'class|1': [1, 2, 3, 4],
      name: '@cname',
      'address': '@county(true)',
      'sex|1': ["男", "女"],
      email: "@email",
      'birthday|1995-2002': 0,
      'phone': /1\d{10}/
    }],
  }),
}

