import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import txIndex from '@/components/pages/txIndex'
import txYoo from '@/components/pages/txYoo'
import txVip from '@/components/pages/txVip'
import txDoki from '@/components/pages/txDoki'
import txMy from '@/components/pages/txMy'
import txIndexNavAk from '@/components/txIndex/txIndexNav/txIndexNavAk'
import txIndexNavJx from '@/components/txIndex/txIndexNav/txIndexNavJx'
import txIndexNavDsj from '@/components/txIndex/txIndexNav/txIndexNavDsj'
import txIndexNavDy from '@/components/txIndex/txIndexNav/txIndexNavDy'
import txIndexNavGx from '@/components/txIndex/txIndexNav/txIndexNavGx'
import txIndexNavJlp from '@/components/txIndex/txIndexNav/txIndexNavJlp'
import txIndexNavSr from '@/components/txIndex/txIndexNav/txIndexNavSr'
import txIndexNavXw from '@/components/txIndex/txIndexNav/txIndexNavXw'
import txIndexNavZy from '@/components/txIndex/txIndexNav/txIndexNavZy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
    {
      path:'/index-*',
      redirect:"/index"
    },
    {
      path: '/index',
      name: 'index',
      component:txIndex,
      children:[
        {
          path:"indexJx",
          component:txIndexNavJx
        },
        {
          path:"indexAk",
          component:txIndexNavAk
        },
        {
          path:"indexDsj",
          component:txIndexNavDsj
        },
        {
          path:"indexDy",
          component:txIndexNavDy
        },
        {
          path:"indexGx",
          component:txIndexNavGx
        },
        {
          path:"indexJlp",
          component:txIndexNavJlp
        },
        {
          path:"indexSr",
          component:txIndexNavSr
        },
        {
          path:"indexXw",
          component:txIndexNavXw
        },
        {
          path:"indexZy",
          component:txIndexNavZy
        },
        {
          path:"/index",
          redirect:"/index/indexJx"
        }
      ]
    },
    {
      path: '/yoo',
      name: 'yoo',
      component: txYoo
    },
    {
      path: '/vip',
      name: 'vip',
      component: txVip
    },
    {
      path: '/doki',
      name: 'doki',
      component: txDoki
    },
    {
      path: '/my',
      name: 'my',
      component: txMy
    }
  ]
})
