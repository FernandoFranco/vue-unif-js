import UContainer from './src/components/UContainer';
import USession from './src/components/USession';

import './src/style.css';

const FULLPAGE_STYLE = `
html, body {
  margin: 0;
  height: 100vh;
}
.u-container {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
`;

export default {
  install(Vue, { fullPage } = {}) {
    Vue.component('u-container', UContainer);
    Vue.component('u-session', USession);

    if (fullPage) {
      const styles = document.createElement('style');
      styles.innerHTML = FULLPAGE_STYLE;
      document.getElementsByTagName('head')[0].appendChild(styles);

      function setVhVariable() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }

      setVhVariable();
      window.addEventListener('resize', setVhVariable);
    }
  },
};
