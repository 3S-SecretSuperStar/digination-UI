import Vue from 'vue';

import Main from './main.vue'

let MmToast = Vue.extend(Main);

let instance ;

const Toast = function(options) {

 instance = new MmToast({

  data: options

 });

 instance.$mount();

 document.body.appendChild(instance.$el);

 instance.visible = true;

 return instance.close()

}

export default Toast

