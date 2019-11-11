import UnifJS from 'unif-js';

export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    disableHash: Boolean,
    disableWheel: Boolean,
    disableTouch: Boolean,
    disableKeys: Boolean,
    disableArrowKeys: Boolean,
    disablePageKeys: Boolean,
    disableSpaceBarKey: Boolean,
    disableHomeEndKeys: Boolean,
  },
  data() {
    return {
      unifjs: null,
    };
  },
  methods: {
    start() {
      this.unifjs.start();
    },
    stop() {
      this.unifjs.stop();
    },
    reload() {
      this.stop();
      this.$nextTick(() => {
        this.start();
      });
    },
  },
  mounted() {
    this.unifjs = new UnifJS(this.$el, {
      sectionSelector: '.u-session',
      disableHash: this.disableHash,
      disableWheel: this.disableWheel,
      disableTouch: this.disableTouch,
      disableKeys: this.disableKeys,
      disableArrowKeys: this.disableArrowKeys,
      disablePageKeys: this.disablePageKeys,
      disableSpaceBarKey: this.disableSpaceBarKey,
      disableHomeEndKeys: this.disableHomeEndKeys,
    });
  },
  beforeDestroy() {
    this.unifjs.stop();
  },
  render(createElement) {
    return createElement(this.tag, {
      staticClass: 'u-container',
    }, this.$slots.default);
  },
  watch: {
    disableHash() {
      this.reload();
    },
    disableWheel() {
      this.reload();
    },
    disableTouch() {
      this.reload();
    },
    disableKeys() {
      this.reload();
    },
    disableArrowKeys() {
      this.reload();
    },
    disablePageKeys() {
      this.reload();
    },
    disableSpaceBarKey() {
      this.reload();
    },
    disableHomeEndKeys() {
      this.reload();
    },
  },
};
