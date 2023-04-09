import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Amplify用設定
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';
import API from '@aws-amplify/api';
import { Logger } from '@aws-amplify/core';
import { I18n } from '@aws-amplify/core';

import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
import appSyncConfig from './aws-exports';

Amplify.configure(appSyncConfig);
Vue.use(AmplifyPlugin, { Auth, Storage, API, Logger, I18n });

Vue.config.productionTip = false;

createApp(App).mount('#app');
