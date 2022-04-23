// 导入组件，组件必须声明 name
import DigiButton from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
DigiButton.install = function (Vue) {
  Vue.component(DigiButton.name, DigiButton)
}

export default DigiButton