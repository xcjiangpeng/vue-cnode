import App from '../app'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/signout', //退出
                component: resolve => require(['../pages/signout/'], resolve)
            },
            {
                path: '/user/:username', //查看用户信息
                component: resolve => require(['../pages/user/username/'], resolve)
            },
            {
                path: '/home', //我的个人中心
                component: resolve => require(['../pages/home/'], resolve)
            },
            {
                path: '/topic/create', //创建帖子 
                component: resolve => require(['../pages/topic/edit/'], resolve)
            },
            {
                path: '/topic/:vid/edit', //编辑帖子
                component: resolve => require(['../pages/topic/edit/'], resolve)
            },
            {
                meta: { auth: false },
                path: '/topic/:vid', //查看帖子信息
                component: resolve => require(['../pages/topic/vid/'], resolve)
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '*', //其他页面
                redirect: '/login'
            }
        ]
    }
]