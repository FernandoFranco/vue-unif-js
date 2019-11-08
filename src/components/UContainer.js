import UnifJS from 'unif-js';

export default {
  functional: true,
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
  mounted() {
    this.unifjs = new UnifJS(this.$el, {
      sectionSelector: '.u-section',
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
  render(createElement, { props, data, children }) {
    return createElement(props.tag, Object.assign({}, data, {
      staticClass: `${data.staticClass || ''} u-container`.trim(),
    }), children);
  },
};
