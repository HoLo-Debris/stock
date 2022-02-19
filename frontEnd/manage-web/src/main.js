import Vue from 'vue'
import {Button, Container, Main, Header, Footer, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Icon, Dropdown, DropdownMenu, DropdownItem, Row, Card, Col, Table, TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Card);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$http = http

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
