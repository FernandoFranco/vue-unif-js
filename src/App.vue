<template>
  <u-container id="app">
    <template v-for="color in colors">
      <u-session :key="color" :class="color" class="app-session" fill-height>
        <h1>Page 1</h1>
      </u-session>
    </template>
  </u-container>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      colors: ['red', 'blue', 'green'],
      teset: ['red', 'blue', 'green'],
    };
  },
};
</script>

<style>
.red {
  background-color: #F44336;
}

.blue {
  background-color: #2196F3;
}

.green {
  background-color: #4CAF50;
}

.app-session {
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
