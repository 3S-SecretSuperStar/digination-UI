// 导入组件，组件必须声明 name
import DigiRadio from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
DigiRadio.install = function (Vue) {
  Vue.component(DigiRadio.name, DigiRadio)
}

export default DigiRadio