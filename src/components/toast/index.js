import Vue from 'vue'
import Toast from './src/toast.vue'
import CreateAPI from 'vue-create-api'
console.log(CreateAPI)
Vue.use(CreateAPI)

Vue.createAPI(Toast, true)

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
}
export default Toast
