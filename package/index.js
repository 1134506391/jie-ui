// 总的样式
import './assets/style/index.scss'
// 字体样式
import './assets/style/fonts/iconfont';

import button from './Button/index'
import icon from './Icon/index'

const components = [
  button,
  icon,
]

let JJ = {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

export default JJ;

export {
  button,
  icon,
}