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
        })
    },
    {
        name: 'article',
        path: 'article',
        compoment: Loadable({
           loader: () => import('../views/article/article'),
           loading: () => <div />
        }),
        title: '文章',
        children: [
            {
                name: 'book',
                path: 'book',
                compoment: Loadable({
                loader: () => import('../views/article/book'),
                loading: () => <div />
                }),
                title: 'book',
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
        title: 'setting'
    }

]

export default router
