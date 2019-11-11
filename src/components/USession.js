import classMerge from '../utils/class-merge';

export default {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    fillHeight: Boolean,
  },
  render(createElement, { props, data, children }) {
    return createElement(props.tag, Object.assign({}, data, {
      staticClass: `${data.staticClass || ''} u-session`.trim(),
      class: classMerge(data.class, {
        'u-session--fill-height': !!props.fillHeight,
      }),
    }), children);
  },
};
