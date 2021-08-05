import Vue from 'vue'
import '../imports/ui/plugins'

import router from './router'
import App from '../imports/ui/App.vue'

Meteor.startup(() => {
  new Vue({
      router,
      render: (h) => h(App),
    }).$mount('#app');
})
