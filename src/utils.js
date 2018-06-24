import isObject from 'lodash.isobject';
import isFunction from 'lodash.isfunction';

export function isImmutable(obj) {
  return isObject(obj) && isFunction(obj.toJS);
}

export function toJS(obj) {
  return isImmutable(obj) ? obj.toJS() : obj;
}
