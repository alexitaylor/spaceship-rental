import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/Home.vue';
import SpaceshipList from './components/SpaceshipList.vue';
import Spaceship from './components/Spaceship.vue';
import store from './vuex/store';

Vue.use(VueRouter);

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter();

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  '/': {
    name: 'Home',
    component: Home,
  },
  '/list': {
    name: 'SpaceshipList',
    component: SpaceshipList,
  },
  '/ship/:shipID': {
    name: 'Spaceship',
    component: Spaceship,
  },
});

// The router will create an instance of App and mount to
// the element matching the selector body
router.start({
  store,
  components: { App },
}, 'body');
