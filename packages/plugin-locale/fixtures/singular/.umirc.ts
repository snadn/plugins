
export default {
  history: {
    type: 'memory',
    options: {
      initialEntries: ['/'],
    },
  },
  singular: true,
  locale: {
    baseNavigator: false,
    antd: true,
    default: 'zh-CN',
  },
  mountElementId: '',
  routes: [
    { path: '/', component: 'index' },
  ],
}