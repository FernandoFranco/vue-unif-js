function dataClassToObject(dataClass) {
  if (!dataClass) return {};

  if (Array.isArray(dataClass)) {
    return dataClass.reduce((r, c) => Object.assign(r, { [c]: true }), {});
  }

  if (typeof dataClass === 'object') {
    const k = Object.keys(dataClass);
    return Object.values(dataClass).reduce((r, c, i) => Object.assign(r, { [k[i]]: c }), {});
  }

  if (typeof dataClass === 'string') {
    return dataClass.split(' ').reduce((r, c) => Object.assign(r, { [c]: true }), {});
  }

  return { [dataClass]: true };
}

export default (dataClass, objClass) => Object.assign(dataClassToObject(dataClass), objClass);
