import UContainer from './src/components/UContainer';
import USession from './src/components/USession';
import './src/style.css';

const FULLPAGE_STYLE = `
html, body {
  margin: 0;
  height: 100%;
}
.u-container {
  height: 100%;
}
`;

export default {
  install(Vue, { fullPage }) {
    Vue.component('u-container', UContainer);
    Vue.component('u-session', USession);

    if (fullPage) {
      const styles = document.createElement('style');
      styles.innerHTML = FULLPAGE_STYLE;
      document.getElementsByTagName('head')[0].appendChild(styles);
    }
  },
};
