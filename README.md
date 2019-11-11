# vue-unif-js

A [VueJS](https://vuejs.org) plugin to use [unif-js](https://github.com/FernandoFranco/unif-js).

# Installation

```javascript
npm install vue-unif-js --save

// or

yarn add vue-unif-js
```

Add file `plugins/unif-js.js` in `src` of the project.
```javascript
// unif-js.js
import Vue from 'vue';
import VueUnifJS from 'vue-unif-js';

Vue.use(VueUnifJS, {
  fullPage: true, // The html, body and u-content in height 100%
});
```

Add line in `main.js`
```javascript
import './plugins/unif-js';
```

# Componentes

This plugin contains 2 components, u-container and u-session.

## UContainer

The component u-container is root element to use unif-js.  

Change your App.vue like this:
```html
<template>
  <u-container id="app">
    <view-first-session />
    <view-second-session />
  </u-container>
</template>

<script>
import ViewFirstSession from './views/FirstSession.vue';
import ViewSecondSession from './views/SecondSession.vue';

export default {
  name: 'app',
  components: {
    ViewFirstSession,
    ViewSecondSession,
  },
};
</script>
```

### Props

| Prop                  | Type    | Default | Description                                 |
| --------------------- | ------- | ------- | ------------------------------------------- |
| tag                   | String  | 'div'   | The tag of content                          |
| disable-hash          | Boolean | false   | Disable hash navigation                     |
| disable-wheel         | Boolean | false   | Disable capture wheel events                |
| disable-touch         | Boolean | false   | Disable capture touch events                |
| disable-keys          | Boolean | false   | Disable capture any key events              |
| disable-arrow-keys    | Boolean | false   | Disable arrow up and arrow down keys events |
| disable-page-keys     | Boolean | false   | Disable page up and page down keys events   |
| disable-space-bar-key | Boolean | false   | Disable space bar key event                 |
| disable-home-end-keys | Boolean | false   | Disable home and end keys events            |

## USession

The component u-session is a session of content in page.  

The session is a component like this:
```javascript
// ./views/FirstSession.vue
<template functional>
  <u-session id="about" fill-height>
    <h1>First Session</h1>
  </u-session>
</template>
```

### Props

| Prop        | Type    | Default | Description                          |
| ----------- | ------- | ------- | ------------------------------------ |
| id          | String  | 'page#' | Change the hash in url if is enabled |
| fill-height | Boolean | false   | The session contains height 100%     |
