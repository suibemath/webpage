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
    name: '题目',
    icon: 'database',
    path: '/topics',
    component: './TopciList',
  },
  {
    name: '排名',
    icon: 'table',
    path: '/rank',
    routes: [
      {
        path: 'rank/month',
        name: '月排名',
        component: './Rank/MonthRank',
      },
      {
        path: 'rank/total',
        name: '总排名',
        component: './Rank/TotalRank',
      },
    ],
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
        name: '消息中心',
        path: '/account/messages',
        component: './account/Messages',
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
        component: './Admin/userManage',
      },
      {
        path: '/admin/topic-manage',
        name: '题目管理',
        icon: 'smile',
        component: './Admin/topicManage',
      },
      {
        path: '/admin/reset-score',
        name: '重置积分',
        icon: 'smile',
        component: './Admin/ResetScore',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '联系管理员',
    icon: 'database',
    path: '/contact',
    component: './ContactManager',
  },
  {
    name: '题目详情',
    path: '/qd/:id',
    component: './QuestionDetail',
    hideInMenu: true,
  },
  {
    name: '消息详情',
    path: '/ms/:id',
    component: './MessageDetail',
    hideInMenu: true,
  },
  {
    name: '题目大全',
    path: '/questions',
    hideInMenu: true,
    component: './Questions',
  },
  {
    name: '用户详情',
    path: '/us/:id',
    component: './UserDetail',
    hideInMenu: true,
  },
  {
    path: '/',
    redirect: '/topics',
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
