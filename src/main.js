import Vue from "vue";
import { Button, Image, Divider, Main, CarouselItem, Carousel, Notification, Message, Menu, Submenu, MenuItem, MenuItemGroup, } from 'element-ui'
import App from "./App.vue";
import 'swiper/css/swiper.css';

Vue.config.productionTip = false;

Vue.use(Button)
Vue.use(Image)
Vue.use(Divider)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message



new Vue({
  render: h => h(App)
}).$mount("#app");
