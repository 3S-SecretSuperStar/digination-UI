
// packages / index.js

// 导入单个组件
import WalletModalModel from './WalletModalModel/index'
import Web3Model from './Web3Model/index'
import Toast from './Toast/index'
import Loading from './Loading/index'
import LandsTileMap from './LandsTileMap/index'
import ModelViewer from './ModelViewer/index'
// 以数组的结构保存组件，便于遍历
const components = [
  LandsTileMap,
  ModelViewer
]

// 定义 install 方法
const install = function (Vue) {
  Vue.prototype.$WalletModalModel = WalletModalModel;
  Vue.prototype.$Web3Model = Web3Model;
  Vue.prototype.$Toast = Toast;
  Vue.prototype.$Loading = Loading;
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
}