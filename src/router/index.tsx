import React from 'react'
import Loadable from 'react-loadable'
const router: any = [
    {
        name: 'home',
        path: 'home',
        exact: true,
        title: '主页',
        component: Loadable({
            loader: () => import('../views/home/home'),
            loading: () => <div />
        }),
        icon: 'HomeOutlined'
    },
    {
        name: 'article',
        path: 'article',
        compoment: Loadable({
           loader: () => import('../views/article/article'),
           loading: () => <div />
        }),
        title: '文章',
        icon: 'FileWordOutlined',
        children: [
            {
                name: 'book',
                path: 'book',
                compoment: Loadable({
                loader: () => import('../views/article/book'),
                loading: () => <div />
                }),
                title: 'book',
                icon: 'BookOutlined'
            }
        ]
    },
    {
        name: 'setting',
        path: 'setting',
        compoment: Loadable({
            loader: () => import('../views/setting/setting'),
            loading: () => <div />
         }),
        title: 'setting',
        icon: 'SettingOutlined',
        children: [
            {
                name: 'set',
                path: 'set',
                compoment: Loadable({
                loader: () => import('../views/setting/set'),
                loading: () => <div />
                }),
                title: 'set',
                icon: 'BookOutlined'
            }
        ]
    }

]

export default router
