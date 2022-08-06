export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      {
        name: '注册',
        path: '/user/register',
        component: './user/Register',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '首页',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/account',
    name: '个人',
    icon: 'book',
    routes: [
      {
        path: '/account/settings',
        name: '个人设置',
        component: './account/AccountSettings',
      },
      {
        name: '个人中心',
        icon: 'smile',
        path: '/account/center',
        component: './account/AccountCenter',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/user-manage',
        name: '用户管理',
        icon: 'smile',
        component: './Admin/UserManage',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '查询表格',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    routes: [
      {
        name: '上传题目',
        path: '/addtopics',
        component: './AddTopics',
      },
    ],
  },
  {
    component: './404',
  },
];
