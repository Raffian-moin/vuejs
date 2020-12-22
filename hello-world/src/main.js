import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.use(createRouter);




const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  

createApp(App).use(router).mount('#app')
