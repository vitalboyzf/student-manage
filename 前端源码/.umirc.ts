import { defineConfig, Redirect } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type:"hash"
  },
  routes: [
    {
      path: '/', exact: false,
      component: '@/layouts',
      routes: [
        {
          path: '/welcome',
          component: '@/pages/welcome',
          title: '欢迎',
        },
        {
          exact: true, path: '/student/list',
          component: '@/pages/student/List',
          title: '学生列表',
          wrappers: ["@/wrapper/auth.tsx"]
        },
        {
          exact: true,
          path: '/student/add',
          component: '@/pages/student/Add',
          title: '添加学生',
          wrappers: ["@/wrapper/auth.tsx"]
        },
        {
          path: '/login', component: '@/pages/login'
        },
      ],
    },
  ],
  plugins: []
});
