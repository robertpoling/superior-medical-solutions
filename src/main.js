// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue';

import '@/assets/scss/index.scss';

export default function(Vue, { appOptions, head }) {
  const opts = {
    icons: {
      iconfont: 'mdiSvg',
    },
  }; //opts includes, vuetify themes, icons, etc.

  Vue.use(Vuetify, {
    theme: {
      primary: '#FFA726',
    },
  });
  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
