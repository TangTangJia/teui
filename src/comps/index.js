import "./styles/index.scss";
import Button from "./components/button/index";
import Answer from "./components/answer/index";
import Lottery from "./components/lottery/index";
import CircleLottery from "./components/circleLottery/index";
import Login from "./components/login/index";
import Toast from "./components/toast/index";

const components = {
  Button,
  Answer,
  Lottery,
  CircleLottery,
  Login
};

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });

  //   Vue.prototype.$modal = GlobalModal
  Vue.prototype.$toast = Toast;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
const API = {
  install,
  ...components
};

export default API;
