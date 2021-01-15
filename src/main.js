import Vue from 'vue'
import App from './App.vue'

import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use( CKEditor );

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//https://www.npmjs.com/package/@ckeditor/ckeditor5-vue2
//https://www.npmjs.com/package/ckeditor5-build-decoupled-document-base64-imageresize
