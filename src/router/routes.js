
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/ExamPage.vue') },
      { path: '/info', component: () => import('pages/Info.vue') },
      { path: '/schedule', component: () => import('pages/Schedule.vue') },
      { path: '/files', component: () => import('pages/Files.vue') },
      { path: '/admin', component: () => import('pages/Admin.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
