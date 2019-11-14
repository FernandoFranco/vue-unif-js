import UnifJS from 'unif-js';

export default {
  props: {
    value: String,
    router: Boolean,
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
  computed: {
    session: {
      get() {
        return this.$route.params.session;
      },
      set(value) {
        if (this.session === value) return;
        this.$router.push({ name: 'unifjs', params: { session: value } });
      },
    },
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
    updateSession(session) {
      this.unifjs.setSession(session);
    },
    onScroll({ from, to }) {
      this.session = to;

      this.$emit('input', to);
      this.$emit('change', { from, to });
    },
  },
  mounted() {
    this.unifjs = new UnifJS(this.$el, {
      sessionSelector: '.u-session',
      disableHash: this.disableHash|| this.router,
      disableWheel: this.disableWheel,
      disableTouch: this.disableTouch,
      disableKeys: this.disableKeys,
      disableArrowKeys: this.disableArrowKeys,
      disablePageKeys: this.disablePageKeys,
      disableSpaceBarKey: this.disableSpaceBarKey,
      disableHomeEndKeys: this.disableHomeEndKeys,
      onScroll: this.onScroll,
    });

    setTimeout(() => {
      this.updateSession((this.router ? this.session : this.value) || 0);
    }, 300);
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
    value(value) {
      if (this.session !== this.value) this.session = value;
      this.updateSession(value);
    },
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
    $route({ name, params } = {}) {
      if (name === 'unifjs') this.updateSession(this.session || 0);
    },
  },
};
