import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { ElNotification } from 'element-plus';
import NProgress from 'nprogress';
import { beforeEach } from './scroll-behavior';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
    meta: {
      title: '登录',
    },
  },
];
// create router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

// router hook
router.beforeEach(async (to, from, next) => {
  // use progress
  NProgress.start();

  beforeEach(to, from);
  // router success
  next();
});

// router hook
router.afterEach((to, from) => {
  NProgress.done();
});

router.onError((error) => {
  NProgress.done();
  ElNotification.error({
    title: '路由错误',
    message: error.message,
  });
});

export default router;
