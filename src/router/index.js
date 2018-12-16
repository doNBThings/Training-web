import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/test1/first'
import FirstEdit from '@/components/test1/firstEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {// 测试页面
      path: '/test1/first',
      name: 'first',
      component: First
    },
    {// 测试页面
      path: '/test1/firstEdit',
      name: 'firstEdit',
      component: FirstEdit
    }
  ]
})
