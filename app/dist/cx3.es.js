/*@nomin*/
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve2, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve2(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise$1 = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = this.parent;
      }
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
    }
  }
  stop() {
    if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get3(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject$1(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get3.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get3 ? get3.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject$1(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
Promise.resolve();
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise$1(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!isArray(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen, parentJob);
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  flushPreFlushCbs(seen);
  queue.sort((a, b) => getId(a) - getId(b));
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function emit$1(instance, event, ...rawArgs) {
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => a.trim());
    } else if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  cache.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false)
        ;
      result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit
      } : { attrs, slots, emit }) : render2(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root.transition = vnode.transition;
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else
      ;
  }
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some(isReactive);
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        job();
      }
    };
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject$1(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function useTransitionState() {
  const state2 = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state2.isMounted = true;
  });
  onBeforeUnmount(() => {
    state2.isUnmounting = true;
  });
  return state2;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state2 = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      const child = children[0];
      if (state2.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state2, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state2, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state2.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state2.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state2, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state2, vnode) {
  const { leavingVNodes } = state2;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state2, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state2, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state2.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state2.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        hook(el, done);
        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state2.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        onLeave(el, done);
        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state2, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } else if (keepComment || child.type !== Comment) {
      ret.push(child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$1(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get3 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get3,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register2, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register2(_hook.bind(publicThis)));
    } else if (hook) {
      register2(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$1(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$1(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  cache.set(base, resolved);
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  const normalized = withCtx((...args) => {
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (isFunction(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (rootProps != null && !isObject$1(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app2 = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app2, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app2, ...options);
        } else
          ;
        return app2;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app2;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app2;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app2;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app2._container = rootContainer;
          rootContainer.__vue_app__ = app2;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app2._container);
          delete app2._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app2;
      }
    };
    return app2;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (isRef(ref2)) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
    if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
      el = vnode.el = hostCloneNode(vnode.el);
    } else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope);
    const update3 = instance.update = effect.run.bind(effect);
    update3.id = instance.uid;
    toggleRecurse(instance, true);
    update3();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update: update3, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update3) {
      update3.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update: update3 }, allowed) {
  effect.allowRecurse = update3.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$1(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(Fragment, null, child.slice());
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject$1(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => i.props,
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
  $refs: (i) => i.refs,
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => () => queueJob(i.update),
  $nextTick: (i) => nextTick.bind(i.proxy),
  $watch: (i) => instanceWatch.bind(i)
});
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      this.set(target, key, descriptor.get(), null);
    } else if (descriptor.value != null) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise$1(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$1(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      track(instance, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}
function getComponentName(Component) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$1(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version = "3.2.31";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      el[key] = includeBooleanAttr(value);
      return;
    } else if (value == null && type === "string") {
      el[key] = "";
      el.removeAttribute(key);
      return;
    } else if (type === "number") {
      try {
        el[key] = 0;
      } catch (_a) {
      }
      el.removeAttribute(key);
      return;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
}
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== "undefined") {
  if (_getNow() > document.createEvent("Event").timeStamp) {
    _getNow = () => performance.now();
  }
  const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
let cachedNow = 0;
const p = Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    const timeStamp = e.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$1(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"];
  return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el._assign(getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  };
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  return (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app2 = ensureRenderer().createApp(...args);
  const { mount } = app2;
  app2.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app2._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app2;
};
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
var MWIcon_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1e = {
  name: "MWIcon",
  props: {
    icon: {
      type: [String, Object],
      default: null
    },
    iconName: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: [Number, String],
      default: 20
    }
  },
  computed: {
    classes: (vm) => ({
      "mw-ui-icon--noflip": !vm.flip
    }),
    iconImagePath: (vm) => {
      var _a;
      return ((_a = vm.icon) == null ? void 0 : _a.path) || vm.icon;
    },
    flip: (vm) => {
      var _a;
      return ((_a = vm.icon) == null ? void 0 : _a.flippable) !== false;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
const _hoisted_1$T = ["width", "height", "aria-labelledby"];
const _hoisted_2$C = ["id"];
const _hoisted_3$y = ["fill"];
const _hoisted_4$n = ["d"];
function _sfc_render$1d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(["mw-ui-icon notranslate", $options.classes])
  }, [
    (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": $props.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
    }, [
      $props.iconName ? (openBlock(), createElementBlock("title", {
        key: 0,
        id: $props.iconName
      }, toDisplayString($props.iconName), 9, _hoisted_2$C)) : createCommentVNode("", true),
      createBaseVNode("g", { fill: $props.iconColor }, [
        createBaseVNode("path", { d: $options.iconImagePath }, null, 8, _hoisted_4$n)
      ], 8, _hoisted_3$y)
    ], 8, _hoisted_1$T))
  ], 2);
}
var MwIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["render", _sfc_render$1d]]);
var MWButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1d = {
  name: "MwButton",
  components: {
    MwIcon
  },
  props: {
    label: {
      type: String,
      default: null
    },
    disabled: Boolean,
    depressed: Boolean,
    large: Boolean,
    icon: {
      type: [Object, String],
      default: null
    },
    iconSize: {
      type: [Number, String],
      default: 20
    },
    indicatorSize: {
      type: [Number, String],
      default: 12
    },
    indicator: {
      type: [Object, String],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    outlined: Boolean,
    progressive: {
      type: Boolean,
      default: false
    },
    destructive: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button",
      validator: (value) => {
        return ["button", "toggle", "icon", "text"].indexOf(value) !== -1;
      }
    }
  },
  emits: ["indicator-icon-clicked"],
  computed: {
    component: (vm) => vm.href ? "a" : "button",
    classes: (vm) => ({
      "mw-ui-button--depressed": vm.depressed || vm.outlined,
      "mw-ui-button--disabled": vm.disabled,
      "mw-ui-button--large": vm.large,
      "mw-ui-button--progressive": vm.progressive,
      "mw-ui-button--destructive": vm.destructive,
      "mw-ui-button--icon": vm.isIcon,
      "mw-ui-button--outlined": vm.outlined,
      "mw-ui-button--text": vm.type === "text"
    }),
    hasIndicatorClickListener: (vm) => !!vm.$attrs["indicator-icon-clicked"],
    isIcon: (vm) => vm.type === "icon",
    iconClass: (vm) => !vm.isIcon && "pe-2",
    indicatorClass: (vm) => !vm.isIcon && "ps-2",
    indicatorClickEvent: (vm) => vm.hasIndicatorClickListener ? "click" : null
  }
};
const _hoisted_1$S = { class: "mw-ui-button__content" };
const _hoisted_2$B = ["textContent"];
function _sfc_render$1c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  return openBlock(), createBlock(resolveDynamicComponent($options.component), {
    class: normalizeClass(["mw-ui-button", $options.classes]),
    href: $props.href,
    disabled: $props.disabled || null
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createBaseVNode("span", _hoisted_1$S, [
          $props.icon ? (openBlock(), createBlock(_component_mw_icon, {
            key: 0,
            icon: $props.icon,
            size: $props.large ? 28 : $props.iconSize,
            class: normalizeClass(["mw-ui-button__icon", $options.iconClass])
          }, null, 8, ["icon", "size", "class"])) : createCommentVNode("", true),
          !$options.isIcon && $props.label ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: toDisplayString($props.label)
          }, null, 8, _hoisted_2$B)) : createCommentVNode("", true),
          $props.indicator ? (openBlock(), createBlock(_component_mw_icon, {
            key: 2,
            icon: $props.indicator,
            size: $props.large ? 28 : $props.indicatorSize,
            class: normalizeClass(["mw-ui-button__indicator", $options.indicatorClass]),
            [toHandlerKey($options.indicatorClickEvent)]: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("indicator-icon-clicked"), ["stop"]))
          }, null, 16, ["icon", "size", "class"])) : createCommentVNode("", true)
        ])
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
var MwButton = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["render", _sfc_render$1c]]);
var MWButtonGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1c = {
  name: "MwButtonGroup",
  components: {
    MwButton
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    active: {
      type: String,
      default: null
    },
    activeIndicatorColor: {
      type: String,
      required: false,
      default: "#202122"
    }
  },
  emits: ["select"],
  methods: {
    isActive(item) {
      return this.active === item.value;
    },
    activeIndicatorStyle(item) {
      return this.isActive(item) ? { "border-bottom-color": this.activeIndicatorColor } : {};
    },
    buttonClasses(item) {
      return {
        "mw-ui-button--selected": this.isActive(item),
        [item.props.class || ""]: true
      };
    }
  }
};
const _hoisted_1$R = { class: "row mw-ui-button-group ma-0 pa-0" };
function _sfc_render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  return openBlock(), createElementBlock("div", _hoisted_1$R, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
      return openBlock(), createBlock(_component_mw_button, mergeProps({
        key: item.value,
        value: item.value,
        "aria-selected": $options.isActive(item) || null
      }, item.props, {
        class: ["ma-0", $options.buttonClasses(item)],
        style: $options.activeIndicatorStyle(item),
        onClick: withModifiers(($event) => _ctx.$emit("select", item.value), ["stop"])
      }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]);
    }), 128))
  ]);
}
var MwButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["render", _sfc_render$1b]]);
var MWBottomNavigation_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1b = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    active: {
      type: String,
      default: null
    }
  },
  emits: ["update:active"]
};
const _hoisted_1$Q = { class: "mw-ui-bottom-navigation row ma-0 justify-center" };
const _hoisted_2$A = { class: "col-12 ma-0 pa-0" };
function _sfc_render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button_group = resolveComponent("mw-button-group");
  return openBlock(), createElementBlock("footer", _hoisted_1$Q, [
    createBaseVNode("div", _hoisted_2$A, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode(_component_mw_button_group, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: $props.active,
          items: $props.items,
          onSelect: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:active", $event))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
var MwBottomNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["render", _sfc_render$1a]]);
var MWCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1a = {
  name: "MwCard",
  props: {
    title: {
      type: String,
      default: null
    }
  }
};
const _hoisted_1$P = { class: "mw-ui-card" };
const _hoisted_2$z = ["textContent"];
const _hoisted_3$x = { class: "mw-ui-card__content" };
function _sfc_render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$P, [
    renderSlot(_ctx.$slots, "header", {}, () => [
      $props.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: toDisplayString($props.title)
      }, null, 8, _hoisted_2$z)) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_3$x, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var MwCard = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["render", _sfc_render$19]]);
var MWDivider_vue_vue_type_style_index_0_lang = "";
const _sfc_main$19 = {};
const _hoisted_1$O = { class: "mw-ui-divider row" };
function _sfc_render$18(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$O);
}
var MwDivider = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["render", _sfc_render$18]]);
var grid = "";
var spacing = "";
var typography = "";
const _sfc_main$18 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "mw-grid container" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ], void 0),
    _: 3
  });
}
var MwGrid = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$17]]);
const _sfc_main$17 = {
  name: "MwRow",
  props: {
    align: {
      type: String,
      default: "center",
      validator: (str) => ["normal", "start", "end", "center", "stretch"].includes(str)
    },
    justify: {
      type: String,
      default: "start",
      validator: (str) => ["start", "end", "center", "between", "around"].includes(str)
    },
    tag: {
      type: String,
      default: "div"
    },
    direction: {
      type: String,
      default: "row",
      validator: (str) => ["row", "column"].includes(str)
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const classes = [
        this.direction,
        `items-${this.align}`,
        `justify-${this.justify}`
      ];
      if (this.reverse) {
        classes.push("reverse");
      }
      return classes;
    }
  }
};
function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($options.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
var MwRow = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$16]]);
const breakpoints$1 = ["sm", "md", "lg", "xl"];
const breakpointProps = breakpoints$1.reduce((props, val) => __spreadProps(__spreadValues({}, props), {
  [val]: {
    type: [String, Number],
    default: null
  }
}), {});
const _sfc_main$16 = {
  name: "MwCol",
  props: __spreadProps(__spreadValues({}, breakpointProps), {
    cols: {
      type: [String, Number],
      default: null,
      validator: (val) => Number.parseInt(val) >= 1 && Number.parseInt(val) <= 12
    },
    grow: {
      type: Boolean,
      default: false
    },
    shrink: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    },
    align: {
      type: String,
      default: null,
      validator: (str) => str ? ["start", "end", "center", "stretch"].includes(str) : true
    }
  }),
  computed: {
    classes() {
      let classList = [];
      for (let i = 0; i < breakpoints$1.length; i++) {
        let propName = breakpoints$1[i];
        let val = this.$props[propName];
        if (val) {
          classList.push(`col-${propName}-${val}`);
        }
      }
      if (this.cols) {
        classList.push(`col-${this.cols}`);
      }
      const hasColClasses = classList.some((className) => className == null ? void 0 : className.startsWith("col-"));
      classList.push({
        col: !hasColClasses,
        grow: this.grow,
        shrink: this.shrink,
        [`items-${this.align}`]: this.align
      });
      return classList;
    }
  }
};
function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($options.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
var MwCol = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$15]]);
const mwIconAdd = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z";
const mwIconUserAvatar = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z";
const mwIconEdit = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z";
const mwIconArticleCheck = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: false
};
const mwIconLightBulb = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z";
const mwIconImageLayoutFrameless = "M19 3H1v14h18zM3 14l3.5-4.5 2.5 3L12.5 8l4.5 6z";
const mwIconStar = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z";
const mwIconTrash = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z";
const mwIconExpand = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z";
const mwIconArrowForward = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z";
const mwIconRefresh = "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z";
const mwIconClose = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z";
const mwIconPrevious = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z";
const mwIconArrowPrevious = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z";
const mwIconArrowNext = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z";
const mwIconSearch = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z";
const mwIconBookmarkOutline = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z";
const mwIconBookmark = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z";
const mwIconLanguage = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z";
const mwIconLinkExternal = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z";
const mwIconLabFlask = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z";
const mwIconRobot = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z";
const mwIconEye = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0";
const mwIconEllipsis = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2";
const mwIconUndo = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z";
const mwIconNotice = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
};
const mwIconCheck = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: false
};
const mwIconError = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
};
const mwIconAlert = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
};
const mwIconCollapse = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
};
const mwIconSettings = "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z";
const mwIconBlock = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z";
const mwIconArticle = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z";
const mwIconPuzzle = "M 1 3 L 1 15 A 2 2 0 0 0 3 17 L 15 17 L 15 12.234375 A 3 3 0 0 0 17 13 A 3 3 0 0 0 20 10 A 3 3 0 0 0 17 7 A 3 3 0 0 0 15 7.7636719 L 15 3 L 10.580078 3 A 3 3 0 0 1 11 4.5 A 3 3 0 0 1 5 4.5 A 3 3 0 0 1 5.4199219 3 L 1 3 z";
var MWDialog_vue_vue_type_style_index_0_lang = "";
const _sfc_main$15 = {
  name: "MwDialog",
  components: {
    MwButton,
    MwRow,
    MwCol,
    MwDivider
  },
  props: {
    animation: {
      type: String,
      default: "slide-left",
      validator: (value) => {
        return ["slide-right", "slide-left", "slide-up", "slide-down"].indexOf(value) !== -1;
      }
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    closeOnEscapeKey: {
      type: Boolean,
      default: true
    },
    header: {
      type: Boolean,
      default: true
    },
    overlayColor: {
      type: String,
      default: "#fff"
    },
    overlayOpacity: {
      type: Number,
      default: 1
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  emits: ["input", "close"],
  setup(props, context) {
    const root = ref(null);
    const classes = computed(() => ({
      "mw-ui-dialog--fullscreen": props.fullscreen,
      "mw-ui-dialog--dialog": !props.fullscreen
    }));
    const overlayStyles = computed(() => ({
      "background-color": props.overlayColor,
      opacity: props.overlayOpacity
    }));
    const close = () => {
      document.body.classList.remove("mw-ui-dialog--open");
      context.emit("input", false);
      context.emit("close");
    };
    const onOpen = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    watch(() => props.value, (isOpen) => {
      if (isOpen) {
        onOpen();
        nextTick(() => {
          root.value.focus();
        });
      } else {
        close();
      }
    });
    return {
      close,
      classes,
      overlayStyles,
      mwIconClose,
      root
    };
  }
};
const _hoisted_1$N = { class: "mw-ui-dialog__shell items-stretch" };
const _hoisted_2$y = { class: "mw-ui-dialog__body" };
function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_divider = resolveComponent("mw-divider");
  return openBlock(), createBlock(Transition, {
    name: `mw-ui-animation-${$props.animation}`
  }, {
    default: withCtx(() => [
      $props.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref: "root",
        class: normalizeClass(["mw-ui-dialog", $setup.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => $props.closeOnEscapeKey && $setup.close, ["esc"]))
      }, [
        createBaseVNode("div", {
          class: "mw-ui-dialog__overlay",
          style: normalizeStyle($setup.overlayStyles),
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.close && $setup.close(...args))
        }, null, 4),
        createBaseVNode("div", _hoisted_1$N, [
          $props.header ? renderSlot(_ctx.$slots, "header", { key: 0 }, () => [
            createVNode(_component_mw_row, { class: "mw-ui-dialog__header" }, {
              default: withCtx(() => [
                createVNode(_component_mw_col, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: $props.title
                }, null, 8, ["innerHTML"]),
                createVNode(_component_mw_col, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_mw_button, {
                      type: "icon",
                      icon: $setup.mwIconClose,
                      onClick: $setup.close
                    }, null, 8, ["icon", "onClick"])
                  ], void 0, true),
                  _: 1
                })
              ], void 0, true),
              _: 1
            }),
            createVNode(_component_mw_divider)
          ]) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_2$y, [
            renderSlot(_ctx.$slots, "default")
          ]),
          renderSlot(_ctx.$slots, "footer")
        ])
      ], 34)) : createCommentVNode("", true)
    ], void 0),
    _: 3
  }, 8, ["name"]);
}
var MwDialog = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$14]]);
var MWInput_vue_vue_type_style_index_0_lang = "";
const _sfc_main$14 = {
  name: "MwInput",
  components: {
    MwIcon
  },
  props: {
    disabled: Boolean,
    large: Boolean,
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [Number, String],
      default: "24"
    },
    indicatorSize: {
      type: [Number, String],
      default: "24"
    },
    indicator: {
      type: String,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "input",
      validator: (value) => {
        return ["input", "search", "textarea"].indexOf(value) !== -1;
      }
    }
  },
  emits: ["click", "focus", "blur", "indicator-clicked"],
  data: () => ({
    focused: false
  }),
  computed: {
    classes() {
      return {
        "mw-ui-input": true,
        container: true,
        "mw-ui-input--disabled": this.disabled,
        "mw-ui-input--large": this.large,
        "mw-ui-input--focused": this.focused
      };
    },
    customAttrs: (vm) => {
      const attrs = __spreadValues({}, vm.$attrs);
      delete attrs.class;
      return attrs;
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    focus() {
      const input = this.$refs.input;
      input.focus();
      if (this.selectAll) {
        input.setSelectionRange(0, input.value.length);
      }
    },
    onBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },
    onFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    }
  }
};
const _hoisted_1$M = { class: "mw-ui-input__content" };
function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes),
    onClick: _cache[2] || (_cache[2] = ($event) => $options.focus())
  }, [
    createBaseVNode("div", _hoisted_1$M, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        $props.icon ? (openBlock(), createBlock(_component_mw_icon, {
          key: 0,
          icon: $props.icon,
          size: $props.large ? 28 : $props.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : createCommentVNode("", true)
      ]),
      (openBlock(), createBlock(resolveDynamicComponent($props.type === "textarea" ? $props.type : "input"), mergeProps({
        ref: "input",
        class: "mw-ui-input__input",
        disabled: $props.disabled || null,
        "aria-disabled": $props.disabled || null,
        ".value": $props.value,
        placeholder: $props.placeholder
      }, $options.customAttrs, {
        type: $props.type,
        onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:value", $event.target.value)),
        onFocus: $options.onFocus,
        onBlur: $options.onBlur,
        onClick: $options.onClick,
        textContent: toDisplayString($props.value)
      }), null, 16, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      renderSlot(_ctx.$slots, "indicator", {}, () => [
        $props.indicator ? (openBlock(), createBlock(_component_mw_icon, {
          key: 0,
          icon: $props.indicator,
          size: $props.large ? 28 : $props.indicatorSize || $props.iconSize,
          class: "mw-ui-input__indicator",
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : createCommentVNode("", true)
      ])
    ])
  ], 2);
}
var MwInput = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$13]]);
var MWMessage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$13 = {
  name: "MwMessage",
  components: { MwCol, MwRow, MwIcon, MwButton },
  props: {
    type: {
      type: String,
      default: "notice",
      validator: (value) => {
        return ["notice", "error", "success", "warning"].indexOf(value) !== -1;
      }
    },
    inline: {
      type: Boolean,
      default: false
    },
    dismissable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    shown: true,
    mwIconClose,
    id: ""
  }),
  computed: {
    classes: (vm) => ({
      "mw-ui-message--notice": vm.type === "notice",
      "mw-ui-message--warning": vm.type === "warning",
      "mw-ui-message--error": vm.type === "error",
      "mw-ui-message--success": vm.type === "success",
      "mw-ui-message--inline": vm.inline
    }),
    icon: (vm) => {
      const iconsMap = {
        notice: mwIconNotice,
        warning: mwIconAlert,
        success: mwIconCheck,
        error: mwIconError
      };
      return iconsMap[vm.type];
    }
  },
  mounted() {
    this.id = this.type + Math.floor(Math.random() * 100);
  },
  methods: {
    hideMessage() {
      this.shown = false;
    }
  }
};
function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  return _ctx.shown ? (openBlock(), createBlock(_component_mw_row, {
    key: 0,
    class: normalizeClass([$options.classes, "mw-ui-message"]),
    "aria-live": $props.type !== "error" ? "polite" : null,
    "aria-labelledby": `${_ctx.id}-label`,
    role: $props.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        createVNode(_component_mw_icon, {
          icon: $options.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      createVNode(_component_mw_col, {
        id: `${_ctx.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ], void 0, true),
        _: 3
      }, 8, ["id"]),
      renderSlot(_ctx.$slots, "action", { hideMessage: $options.hideMessage }, () => [
        $props.dismissable ? (openBlock(), createBlock(_component_mw_button, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: _ctx.mwIconClose,
          "icon-size": 24,
          onClick: $options.hideMessage
        }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : createCommentVNode("", true);
}
var MwMessage = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$12]]);
var MWSelect_vue_vue_type_style_index_0_lang = "";
var MWSpinner_vue_vue_type_style_index_0_lang = "";
const _sfc_main$12 = {};
const _hoisted_1$L = { class: "mw-ui-spinner" };
const _hoisted_2$x = /* @__PURE__ */ createBaseVNode("div", { class: "mw-ui-spinner__bounce" }, null, -1);
const _hoisted_3$w = [
  _hoisted_2$x
];
function _sfc_render$11(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$L, _hoisted_3$w);
}
var MwSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$11]]);
var MWThumbnail_vue_vue_type_style_index_0_lang = "";
const _sfc_main$11 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: MwIcon },
  props: {
    thumbnail: {
      type: Object,
      default: null
    },
    iconSize: {
      type: Number,
      default: 80
    }
  },
  emits: ["click"],
  data: () => ({ mwIconImageLayoutFrameless }),
  computed: {
    style() {
      if (this.thumbnail.source) {
        return {
          "background-image": `url(${this.thumbnail.source})`
        };
      }
      return {};
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_ui_icon = resolveComponent("mw-ui-icon");
  return $props.thumbnail ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: normalizeStyle($options.style)
  }, null, 4)) : (openBlock(), createBlock(_component_mw_ui_icon, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    icon: _ctx.mwIconImageLayoutFrameless,
    size: $props.iconSize
  }, null, 8, ["icon", "size"]));
}
var MwThumbnail = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$10]]);
var MWRadio_vue_vue_type_style_index_0_lang = "";
const _sfc_main$10 = {
  name: "MwRadio",
  components: { MwRow },
  props: {
    id: {
      type: String,
      required: false,
      default() {
        const id = Math.floor(Math.random() * 1e4);
        return `radio-button-${id}`;
      }
    },
    value: {
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    inputValue: {
      required: true
    },
    name: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    isSelected: (vm) => vm.value ? vm.value === vm.inputValue : vm.$parent.value === vm.inputValue,
    widgetClass: (vm) => ({
      "mw-ui-radio--selected": vm.isSelected,
      "mw-ui-radio--disabled": vm.disabled
    }),
    inputModel: {
      get() {
        return this.value || this.$parent.value;
      },
      set() {
        this.$emit("change", this.inputValue);
      }
    }
  }
};
const _hoisted_1$K = { class: "mw-ui-radio__controls" };
const _hoisted_2$w = ["id", "disabled", "name", "value"];
const _hoisted_3$v = /* @__PURE__ */ createBaseVNode("span", { class: "mw-ui-radio__controls__icon" }, null, -1);
const _hoisted_4$m = ["for", "textContent"];
function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createBlock(_component_mw_row, {
    class: normalizeClass(["mw-ui-radio flex items-center py-2", $options.widgetClass])
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$K, [
        withDirectives(createBaseVNode("input", {
          id: $props.id,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.inputModel = $event),
          type: "radio",
          disabled: $props.disabled || null,
          name: $props.name,
          value: $props.inputValue
        }, null, 8, _hoisted_2$w), [
          [vModelRadio, $options.inputModel]
        ]),
        _hoisted_3$v
      ]),
      createBaseVNode("label", {
        for: $props.id,
        class: "ps-2",
        textContent: toDisplayString($props.label)
      }, null, 8, _hoisted_4$m)
    ], void 0),
    _: 1
  }, 8, ["class"]);
}
var MwRadio = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$$]]);
const _sfc_main$$ = {
  name: "MwRadioGroup",
  components: { MwRadio },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
      validator: (value) => value.every((item) => item.hasOwnProperty("value"))
    },
    name: {
      type: String,
      required: true,
      default() {
        const id = Math.floor(Math.random() * 1e4);
        return `radio-group-${id}`;
      }
    }
  },
  render(props, slots) {
    let elements = [];
    if (props.items.length) {
      elements = props.items.map((item) => h(MwRadio, {
        key: item.value,
        disabled: item.disabled,
        label: item.text,
        inputValue: item.value,
        name: props.name
      }));
    } else {
      elements = this.$slots.default();
    }
    return h("div", { class: "mw-ui-radio-group" }, elements);
  }
};
var MWProgressBar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$_ = {
  name: "MwProgressBar",
  props: {
    value: {
      type: Number,
      required: true
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 100
    },
    height: {
      type: String,
      default: "1rem"
    },
    width: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "#36c"
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    pending: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: null
    }
  },
  computed: {
    containerStyles: (vm) => ({
      height: vm.height,
      width: vm.width || "unset",
      "background-color": vm.background
    }),
    containerClass: (vm) => ({
      "mw-progress-bar--pending": vm.pending
    }),
    barStyles: (vm) => ({
      width: `${vm.percentage}%`,
      "background-color": vm.color
    }),
    percentage: (vm) => vm.value / vm.maxValue * 100,
    barClass: (vm) => ({
      "mw-progress-bar__bar--indeterminate": vm.indeterminate
    })
  }
};
const _hoisted_1$J = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["mw-progress-bar", $options.containerClass]),
    role: "progressbar",
    "aria-valuenow": $props.value,
    "aria-valuemin": $props.minValue,
    "aria-valuemax": $props.maxValue,
    style: normalizeStyle($options.containerStyles)
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["mw-progress-bar__bar", $options.barClass]),
      style: normalizeStyle($options.barStyles)
    }, null, 6)
  ], 14, _hoisted_1$J);
}
var MwProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$_]]);
const useInitiateDrag = (contentMaxHeight, contentMinHeight, contentRef, isCollapsed) => (e) => {
  const dragStartY = e.clientY;
  const panelHeightAtDragStart = parseInt(document.defaultView.getComputedStyle(contentRef.value).height, 10);
  const doDrag = (e2) => {
    isCollapsed.value = false;
    let heightAfterDrag = Math.min(panelHeightAtDragStart + e2.clientY - dragStartY, contentMaxHeight.value);
    heightAfterDrag = Math.max(heightAfterDrag, contentMinHeight.value);
    contentRef.value.style.height = heightAfterDrag + "px";
  };
  const completeDrag = () => {
    const currentHeight = contentRef.value.style.height;
    if (currentHeight === contentMinHeight.value + "px") {
      contentRef.value.style.removeProperty("height");
      isCollapsed.value = true;
    }
    document.documentElement.removeEventListener("pointermove", doDrag, false);
    document.documentElement.removeEventListener("pointerup", completeDrag, false);
  };
  document.documentElement.addEventListener("pointermove", doDrag, false);
  document.documentElement.addEventListener("pointerup", completeDrag, false);
};
const useDrag = (contentMaxHeight, contentMinHeight, contentRef, isCollapsed) => {
  const initiateDrag = useInitiateDrag(contentMaxHeight, contentMinHeight, contentRef, isCollapsed);
  return { initiateDrag };
};
const useScroll = (contentMinHeight, contentMaxHeight, contentRef, isCollapsed) => {
  const scrollIndex = ref(0);
  const scrollable = computed(() => contentMaxHeight.value > contentMinHeight.value);
  const isScrolledToEnd = computed(() => contentMaxHeight.value <= contentMinHeight.value * (scrollIndex.value + 1));
  const scrollToStepByIndex = (index) => {
    scrollIndex.value = index;
    contentRef.value.scroll(0, contentMinHeight.value * scrollIndex.value);
  };
  const handleArrowUpClick = () => {
    if (!isCollapsed.value) {
      contentRef.value.style.removeProperty("height");
      isCollapsed.value = true;
      scrollToStepByIndex(0);
      return;
    }
    scrollToStepByIndex(scrollIndex.value - 1);
  };
  return {
    handleArrowUpClick,
    isScrolledToEnd,
    scrollToStepByIndex,
    scrollable,
    scrollIndex
  };
};
var MWExpandableContent_vue_vue_type_style_index_0_lang = "";
const _sfc_main$Z = {
  name: "MwExpandableContent",
  components: {
    MwButton
  },
  props: {
    minHeight: {
      type: Number,
      required: true
    },
    scroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const isCollapsed = ref(true);
    const contentRef = ref(null);
    const contentMinHeight = computed(() => Math.min(props.minHeight, contentMaxHeight.value));
    const contentMaxHeight = ref(1);
    const { initiateDrag } = useDrag(contentMaxHeight, contentMinHeight, contentRef, isCollapsed);
    const {
      isScrolledToEnd,
      scrollable,
      scrollIndex,
      scrollToStepByIndex,
      handleArrowUpClick
    } = useScroll(contentMinHeight, contentMaxHeight, contentRef, isCollapsed);
    const scrollToNextStep = () => scrollToStepByIndex(scrollIndex.value + 1);
    const dragIndicatorRef = ref(null);
    const cssVars = computed(() => ({
      "--collapsed-height": contentMinHeight.value + "px"
    }));
    const onWindowResize = () => {
      const currentHeight = contentRef.value.style.height;
      contentRef.value.style.removeProperty("height");
      contentMaxHeight.value = contentRef.value.scrollHeight;
      if (currentHeight) {
        let limitedHeight = Math.min(currentHeight, contentMaxHeight.value);
        limitedHeight = Math.max(limitedHeight, contentMinHeight.value);
        if (limitedHeight === contentMinHeight.value) {
          isCollapsed.value = true;
        }
        contentRef.value.style.height = limitedHeight + "px";
      }
    };
    onMounted(() => __async(this, null, function* () {
      var _a;
      yield nextTick();
      contentMaxHeight.value = contentRef.value.scrollHeight;
      (_a = dragIndicatorRef.value) == null ? void 0 : _a.addEventListener("pointerdown", initiateDrag, false);
      window.addEventListener("resize", onWindowResize);
    }));
    const onDragButtonClicked = () => {
      if (!isCollapsed.value) {
        contentRef.value.style.removeProperty("height");
        scrollToStepByIndex(0);
      }
      isCollapsed.value = !isCollapsed.value;
    };
    return {
      contentRef,
      cssVars,
      dragIndicatorRef,
      handleArrowUpClick,
      isCollapsed,
      isScrolledToEnd,
      mwIconCollapse,
      mwIconExpand,
      onDragButtonClicked,
      scrollable,
      scrollIndex,
      scrollToNextStep
    };
  }
};
const _hoisted_1$I = { class: "mw-ui-expandable-content__container" };
const _hoisted_2$v = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
};
const _hoisted_3$u = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  return openBlock(), createElementBlock("div", {
    class: "mw-ui-expandable-content",
    style: normalizeStyle($setup.cssVars)
  }, [
    createBaseVNode("div", _hoisted_1$I, [
      createBaseVNode("div", {
        ref: "contentRef",
        class: normalizeClass(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": $setup.isCollapsed
        }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2),
      $props.scroll && $setup.scrollable ? (openBlock(), createElementBlock("div", _hoisted_2$v, [
        createVNode(_component_mw_button, {
          type: "icon",
          icon: $setup.mwIconCollapse,
          disabled: $setup.isCollapsed && $setup.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: $setup.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        $setup.isCollapsed ? (openBlock(), createBlock(_component_mw_button, {
          key: 0,
          type: "icon",
          icon: $setup.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: $setup.isScrolledToEnd,
          onClick: $setup.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_3$u, [
      createBaseVNode("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: _cache[0] || (_cache[0] = (...args) => $setup.onDragButtonClicked && $setup.onDragButtonClicked(...args))
      })
    ], 512)
  ], 4);
}
var MwExpandableContent = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Z]]);
const breakpoints = {
  xs: 300,
  sm: 600,
  md: 960,
  lg: 1264,
  xl: 1904
};
const viewports = {
  print: "only print",
  screen: "only screen",
  xs: `only screen and (max-width: ${breakpoints.sm - 1}px})`,
  sm: `only screen and (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  "sm-and-down": `only screen and (max-width: ${breakpoints.md - 1}px)`,
  "sm-and-up": `only screen and (min-width: ${breakpoints.sm}px)`,
  md: `only screen and (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  "md-and-down": `only screen and (max-width: ${breakpoints.lg - 1}px)`,
  "md-and-up": `only screen and (min-width: ${breakpoints.md}px)`,
  lg: `only screen and (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`,
  "lg-and-down": `only screen and (max-width: ${breakpoints.xl - 1}px)`,
  "lg-and-up": `only screen and (min-width: ${breakpoints.lg}px)`,
  xl: `only screen and (min-width: ${breakpoints.xl}px)`
};
const handlers = {
  xs: () => matchMedia(viewports.xs).matches,
  sm: () => matchMedia(viewports.sm).matches,
  md: () => matchMedia(viewports.md).matches,
  lg: () => matchMedia(viewports.lg).matches,
  xl: () => matchMedia(viewports.xl).matches,
  smAndUp: () => matchMedia(viewports["sm-and-up"]).matches,
  mdAndUp: () => matchMedia(viewports["md-and-up"]).matches,
  lgAndUp: () => matchMedia(viewports["lg-and-up"]).matches,
  smAndDown: () => matchMedia(viewports["sm-and-down"]).matches,
  mdAndDown: () => matchMedia(viewports["md-and-down"]).matches,
  lgAndDown: () => matchMedia(viewports["lg-and-down"]).matches
};
var BreakpointsPlugin = {
  install: (app2) => {
    const resizeHandler = () => {
      for (let property in handlers) {
        if (handlers.hasOwnProperty(property)) {
          properties.value[property] = handlers[property]();
        }
      }
    };
    const properties = ref({});
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    app2.config.globalProperties.$mwui = __spreadProps(__spreadValues({}, app2.config.globalProperties.$mwui || {}), {
      breakpoint: properties.value
    });
    app2.provide("breakpoints", properties);
  }
};
const colors = {
  base10: "#202122",
  base30: "#72777d",
  base80: "#eaecf0",
  green30: "#14866d",
  green50: "#00af89",
  red50: "#d33",
  yellow30: "#ac6600",
  yellow50: "#fc3",
  primary: "#36c"
};
var ColorsPlugin = {
  install: (app2) => {
    app2.config.globalProperties.$mwui = __spreadProps(__spreadValues({}, app2.config.globalProperties.$mwui || {}), {
      colors
    });
    app2.provide("colors", colors);
  }
};
function getDevtoolsGlobalHook() {
  return getTarget$1().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget$1() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve2) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: resolve2
              });
            });
          };
        }
      }
    });
  }
  setRealTarget(target) {
    return __async(this, null, function* () {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(yield this.target[item.method](...item.args));
      }
    });
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget$1();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var storeKey = "store";
function useStore(key) {
  if (key === void 0)
    key = null;
  return inject(key !== null ? key : storeKey);
}
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function(key) {
    return fn(obj[key], key);
  });
}
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
function isPromise(val) {
  return val && typeof val.then === "function";
}
function partial(fn, arg) {
  return function() {
    return fn(arg);
  };
}
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function() {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store2, hot) {
  store2._actions = /* @__PURE__ */ Object.create(null);
  store2._mutations = /* @__PURE__ */ Object.create(null);
  store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
  store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var state2 = store2.state;
  installModule(store2, state2, [], store2._modules.root, true);
  resetStoreState(store2, state2, hot);
}
function resetStoreState(store2, state2, hot) {
  var oldState = store2._state;
  store2.getters = {};
  store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var wrappedGetters = store2._wrappedGetters;
  var computedObj = {};
  forEachValue(wrappedGetters, function(fn, key) {
    computedObj[key] = partial(fn, store2);
    Object.defineProperty(store2.getters, key, {
      get: function() {
        return computedObj[key]();
      },
      enumerable: true
    });
  });
  store2._state = reactive({
    data: state2
  });
  if (store2.strict) {
    enableStrictMode(store2);
  }
  if (oldState) {
    if (hot) {
      store2._withCommit(function() {
        oldState.data = null;
      });
    }
  }
}
function installModule(store2, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store2._modules.getNamespace(path);
  if (module.namespaced) {
    if (store2._modulesNamespaceMap[namespace] && false) {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
    }
    store2._modulesNamespaceMap[namespace] = module;
  }
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store2._withCommit(function() {
      parentState[moduleName] = module.state;
    });
  }
  var local = module.context = makeLocalContext(store2, namespace, path);
  module.forEachMutation(function(mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store2, namespacedType, mutation, local);
  });
  module.forEachAction(function(action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store2, type, handler, local);
  });
  module.forEachGetter(function(getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store2, namespacedType, getter, local);
  });
  module.forEachChild(function(child, key) {
    installModule(store2, rootState, path.concat(key), child, hot);
  });
}
function makeLocalContext(store2, namespace, path) {
  var noNamespace = namespace === "";
  var local = {
    dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
      }
      return store2.dispatch(type, payload);
    },
    commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
      }
      store2.commit(type, payload, options);
    }
  };
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function() {
        return store2.getters;
      } : function() {
        return makeLocalGetters(store2, namespace);
      }
    },
    state: {
      get: function() {
        return getNestedState(store2.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store2, namespace) {
  if (!store2._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store2.getters).forEach(function(type) {
      if (type.slice(0, splitPos) !== namespace) {
        return;
      }
      var localType = type.slice(splitPos);
      Object.defineProperty(gettersProxy, localType, {
        get: function() {
          return store2.getters[type];
        },
        enumerable: true
      });
    });
    store2._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store2._makeLocalGettersCache[namespace];
}
function registerMutation(store2, type, handler, local) {
  var entry = store2._mutations[type] || (store2._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store2, local.state, payload);
  });
}
function registerAction(store2, type, handler, local) {
  var entry = store2._actions[type] || (store2._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store2, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store2.getters,
      rootState: store2.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store2._devtoolHook) {
      return res.catch(function(err) {
        store2._devtoolHook.emit("vuex:error", err);
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store2, type, rawGetter, local) {
  if (store2._wrappedGetters[type]) {
    return;
  }
  store2._wrappedGetters[type] = function wrappedGetter(store3) {
    return rawGetter(local.state, local.getters, store3.state, store3.getters);
  };
}
function enableStrictMode(store2) {
  watch(function() {
    return store2._state.data;
  }, function() {
  }, { deep: true, flush: "sync" });
}
function getNestedState(state2, path) {
  return path.reduce(function(state3, key) {
    return state3[key];
  }, state2);
}
function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }
  return { type, payload, options };
}
var LABEL_VUEX_BINDINGS = "vuex bindings";
var MUTATIONS_LAYER_ID = "vuex:mutations";
var ACTIONS_LAYER_ID = "vuex:actions";
var INSPECTOR_ID = "vuex";
var actionId = 0;
function addDevtools(app2, store2) {
  setupDevtoolsPlugin({
    id: "org.vuejs.vuex",
    app: app2,
    label: "Vuex",
    homepage: "https://next.vuex.vuejs.org/",
    logo: "https://vuejs.org/images/icons/favicon-96x96.png",
    packageName: "vuex",
    componentStateTypes: [LABEL_VUEX_BINDINGS]
  }, function(api) {
    api.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: "Vuex Mutations",
      color: COLOR_LIME_500
    });
    api.addTimelineLayer({
      id: ACTIONS_LAYER_ID,
      label: "Vuex Actions",
      color: COLOR_LIME_500
    });
    api.addInspector({
      id: INSPECTOR_ID,
      label: "Vuex",
      icon: "storage",
      treeFilterPlaceholder: "Filter stores..."
    });
    api.on.getInspectorTree(function(payload) {
      if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
        if (payload.filter) {
          var nodes = [];
          flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
          payload.rootNodes = nodes;
        } else {
          payload.rootNodes = [
            formatStoreForInspectorTree(store2._modules.root, "")
          ];
        }
      }
    });
    api.on.getInspectorState(function(payload) {
      if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
        var modulePath = payload.nodeId;
        makeLocalGetters(store2, modulePath);
        payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
      }
    });
    api.on.editInspectorState(function(payload) {
      if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
        var modulePath = payload.nodeId;
        var path = payload.path;
        if (modulePath !== "root") {
          path = modulePath.split("/").filter(Boolean).concat(path);
        }
        store2._withCommit(function() {
          payload.set(store2._state.data, path, payload.state.value);
        });
      }
    });
    store2.subscribe(function(mutation, state2) {
      var data = {};
      if (mutation.payload) {
        data.payload = mutation.payload;
      }
      data.state = state2;
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: Date.now(),
          title: mutation.type,
          data
        }
      });
    });
    store2.subscribeAction({
      before: function(action, state2) {
        var data = {};
        if (action.payload) {
          data.payload = action.payload;
        }
        action._id = actionId++;
        action._time = Date.now();
        data.state = state2;
        api.addTimelineEvent({
          layerId: ACTIONS_LAYER_ID,
          event: {
            time: action._time,
            title: action.type,
            groupId: action._id,
            subtitle: "start",
            data
          }
        });
      },
      after: function(action, state2) {
        var data = {};
        var duration = Date.now() - action._time;
        data.duration = {
          _custom: {
            type: "duration",
            display: duration + "ms",
            tooltip: "Action duration",
            value: duration
          }
        };
        if (action.payload) {
          data.payload = action.payload;
        }
        data.state = state2;
        api.addTimelineEvent({
          layerId: ACTIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: action.type,
            groupId: action._id,
            subtitle: "end",
            data
          }
        });
      }
    });
  });
}
var COLOR_LIME_500 = 8702998;
var COLOR_DARK = 6710886;
var COLOR_WHITE = 16777215;
var TAG_NAMESPACED = {
  label: "namespaced",
  textColor: COLOR_WHITE,
  backgroundColor: COLOR_DARK
};
function extractNameFromPath(path) {
  return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
}
function formatStoreForInspectorTree(module, path) {
  return {
    id: path || "root",
    label: extractNameFromPath(path),
    tags: module.namespaced ? [TAG_NAMESPACED] : [],
    children: Object.keys(module._children).map(function(moduleName) {
      return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
    })
  };
}
function flattenStoreForInspectorTree(result, module, filter, path) {
  if (path.includes(filter)) {
    result.push({
      id: path || "root",
      label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
      tags: module.namespaced ? [TAG_NAMESPACED] : []
    });
  }
  Object.keys(module._children).forEach(function(moduleName) {
    flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
  });
}
function formatStoreForInspectorState(module, getters2, path) {
  getters2 = path === "root" ? getters2 : getters2[path];
  var gettersKeys = Object.keys(getters2);
  var storeState = {
    state: Object.keys(module.state).map(function(key) {
      return {
        key,
        editable: true,
        value: module.state[key]
      };
    })
  };
  if (gettersKeys.length) {
    var tree = transformPathsToObjectTree(getters2);
    storeState.getters = Object.keys(tree).map(function(key) {
      return {
        key: key.endsWith("/") ? extractNameFromPath(key) : key,
        editable: false,
        value: canThrow(function() {
          return tree[key];
        })
      };
    });
  }
  return storeState;
}
function transformPathsToObjectTree(getters2) {
  var result = {};
  Object.keys(getters2).forEach(function(key) {
    var path = key.split("/");
    if (path.length > 1) {
      var target = result;
      var leafKey = path.pop();
      path.forEach(function(p2) {
        if (!target[p2]) {
          target[p2] = {
            _custom: {
              value: {},
              display: p2,
              tooltip: "Module",
              abstract: true
            }
          };
        }
        target = target[p2]._custom.value;
      });
      target[leafKey] = canThrow(function() {
        return getters2[key];
      });
    } else {
      result[key] = canThrow(function() {
        return getters2[key];
      });
    }
  });
  return result;
}
function getStoreModule(moduleMap, path) {
  var names = path.split("/").filter(function(n) {
    return n;
  });
  return names.reduce(function(module, moduleName, i) {
    var child = module[moduleName];
    if (!child) {
      throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
    }
    return i === names.length - 1 ? child : child._children;
  }, path === "root" ? moduleMap : moduleMap.root._children);
}
function canThrow(cb) {
  try {
    return cb();
  } catch (e) {
    return e;
  }
}
var Module = function Module2(rawModule, runtime) {
  this.runtime = runtime;
  this._children = /* @__PURE__ */ Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
};
var prototypeAccessors$1 = { namespaced: { configurable: true } };
prototypeAccessors$1.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};
Module.prototype.update = function update2(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors$1);
var ModuleCollection = function ModuleCollection2(rawRootModule) {
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get2(path) {
  return path.reduce(function(module, key) {
    return module.getChild(key);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function(namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + "/" : "");
  }, "");
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1$1 = this;
  if (runtime === void 0)
    runtime = true;
  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function(rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);
  if (!child) {
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key);
  }
  return false;
};
function update(path, targetModule, newModule) {
  targetModule.update(newModule);
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        return;
      }
      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}
function createStore(options) {
  return new Store(options);
}
var Store = function Store2(options) {
  var this$1$1 = this;
  if (options === void 0)
    options = {};
  var plugins = options.plugins;
  if (plugins === void 0)
    plugins = [];
  var strict = options.strict;
  if (strict === void 0)
    strict = false;
  var devtools = options.devtools;
  this._committing = false;
  this._actions = /* @__PURE__ */ Object.create(null);
  this._actionSubscribers = [];
  this._mutations = /* @__PURE__ */ Object.create(null);
  this._wrappedGetters = /* @__PURE__ */ Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  this._devtools = devtools;
  var store2 = this;
  var ref2 = this;
  var dispatch2 = ref2.dispatch;
  var commit2 = ref2.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch2.call(store2, type, payload);
  };
  this.commit = function boundCommit(type, payload, options2) {
    return commit2.call(store2, type, payload, options2);
  };
  this.strict = strict;
  var state2 = this._modules.root.state;
  installModule(this, state2, [], this._modules.root);
  resetStoreState(this, state2);
  plugins.forEach(function(plugin) {
    return plugin(this$1$1);
  });
};
var prototypeAccessors = { state: { configurable: true } };
Store.prototype.install = function install(app2, injectKey) {
  app2.provide(injectKey || storeKey, this);
  app2.config.globalProperties.$store = this;
  var useDevtools = this._devtools !== void 0 ? this._devtools : false;
  if (useDevtools) {
    addDevtools(app2, this);
  }
};
prototypeAccessors.state.get = function() {
  return this._state.data;
};
prototypeAccessors.state.set = function(v) {
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1$1 = this;
  var ref2 = unifyObjectStyle(_type, _payload, _options);
  var type = ref2.type;
  var payload = ref2.payload;
  var mutation = { type, payload };
  var entry = this._mutations[type];
  if (!entry) {
    return;
  }
  this._withCommit(function() {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice().forEach(function(sub) {
    return sub(mutation, this$1$1.state);
  });
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1$1 = this;
  var ref2 = unifyObjectStyle(_type, _payload);
  var type = ref2.type;
  var payload = ref2.payload;
  var action = { type, payload };
  var entry = this._actions[type];
  if (!entry) {
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(sub) {
      return sub.before;
    }).forEach(function(sub) {
      return sub.before(action, this$1$1.state);
    });
  } catch (e) {
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function(resolve2, reject) {
    result.then(function(res) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.after;
        }).forEach(function(sub) {
          return sub.after(action, this$1$1.state);
        });
      } catch (e) {
      }
      resolve2(res);
    }, function(error) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.error;
        }).forEach(function(sub) {
          return sub.error(action, this$1$1.state, error);
        });
      } catch (e) {
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === "function" ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch$1(getter, cb, options) {
  var this$1$1 = this;
  return watch(function() {
    return getter(this$1$1.state, this$1$1.getters);
  }, cb, Object.assign({}, options));
};
Store.prototype.replaceState = function replaceState(state2) {
  var this$1$1 = this;
  this._withCommit(function() {
    this$1$1._state.data = state2;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0)
    options = {};
  if (typeof path === "string") {
    path = [path];
  }
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  resetStoreState(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1$1 = this;
  if (typeof path === "string") {
    path = [path];
  }
  this._modules.unregister(path);
  this._withCommit(function() {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === "string") {
    path = [path];
  }
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors);
var mapState = normalizeNamespace(function(namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function(ref2) {
    var key = ref2.key;
    var val = ref2.val;
    res[key] = function mappedState() {
      var state2 = this.$store.state;
      var getters2 = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, "mapState", namespace);
        if (!module) {
          return;
        }
        state2 = module.context.state;
        getters2 = module.context.getters;
      }
      return typeof val === "function" ? val.call(this, state2, getters2) : state2[val];
    };
    res[key].vuex = true;
  });
  return res;
});
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ? map.map(function(key) {
    return { key, val: key };
  }) : Object.keys(map).map(function(key) {
    return { key, val: map[key] };
  });
}
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}
function normalizeNamespace(fn) {
  return function(namespace, map) {
    if (typeof namespace !== "string") {
      map = namespace;
      namespace = "";
    } else if (namespace.charAt(namespace.length - 1) !== "/") {
      namespace += "/";
    }
    return fn(namespace, map);
  };
}
function getModuleByNamespace(store2, helper, namespace) {
  var module = store2._modulesNamespaceMap[namespace];
  return module;
}
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$Y = {
  name: "ContentTranslationApp",
  components: { MwGrid, MwCol, MwRow },
  computed: __spreadValues({}, mapState({
    translationInProgress: (state2) => state2.application.translationInProgress
  })),
  mounted() {
    window.addEventListener("beforeunload", (e) => {
      if (this.translationInProgress) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
  }
};
function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_grid = resolveComponent("mw-grid");
  return openBlock(), createBlock(_component_mw_grid, { id: "contenttranslation" }, {
    default: withCtx(() => [
      createVNode(_component_mw_row, { class: "cx-container" }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_router_view, null, {
                default: withCtx(({ Component, route }) => [
                  createVNode(Transition, {
                    name: route.meta.transitionName
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(Component)))
                    ], void 0, true),
                    _: 2
                  }, 1032, ["name"])
                ]),
                _: 1
              })
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$Y]]);
var state$3 = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  translations: [],
  translationsLoaded: false
};
const prependNewSectionToAppendixSection = (newSection, existingSection) => {
  const createHeader = (title) => {
    const headerElement = document.createElement("h2");
    headerElement.textContent = title;
    return headerElement;
  };
  const newSectionHeader = createHeader(newSection.title);
  const existingSectionHeader = createHeader(existingSection.originalTitle);
  const newSectionHtml = cleanupHtml(newSection.translationHtml);
  const existingSectionHtml = cleanupHtml(existingSection.html);
  return `${newSectionHeader.outerHTML}
${newSectionHtml}
${existingSectionHeader.outerHTML}
${existingSectionHtml}`;
};
const cleanupHtml = (html) => {
  const doc2 = document.createElement("article");
  doc2.innerHTML = html;
  Array.prototype.forEach.call(doc2.querySelectorAll("article, section, [data-segmentid]"), (segment) => {
    const parent = segment.parentNode;
    while (segment.firstChild) {
      parent.insertBefore(segment.firstChild, segment);
    }
    segment.remove();
  });
  Array.prototype.forEach.call(doc2.querySelectorAll(".cx-link"), (link) => {
    var _a;
    const dataCX = JSON.parse(link.getAttribute("data-cx") || "{}");
    if ((dataCX == null ? void 0 : dataCX.adapted) === false && ((_a = dataCX == null ? void 0 : dataCX.targetTitle) == null ? void 0 : _a.missing) !== true) {
      link.replaceWith(link.innerHTML);
    } else {
      ["data-linkid", "class", "title", "id"].forEach((attr) => {
        link.removeAttribute(attr);
      });
    }
  });
  Array.prototype.forEach.call(doc2.querySelectorAll(".mw-ref"), (element) => {
    const dataCX = JSON.parse(element.getAttribute("data-cx") || "{}");
    if ((dataCX == null ? void 0 : dataCX.adapted) === false) {
      element.parentNode.removeChild(element);
    }
  });
  Array.prototype.forEach.call(doc2.querySelectorAll("[data-cx]"), (element) => {
    element.removeAttribute("data-cx");
  });
  Array.prototype.forEach.call(doc2.querySelectorAll("tr[id], td[id], th[id], table[id], tbody[id], thead[id], div[id]"), (element) => {
    element.removeAttribute("id");
  });
  return doc2.innerHTML;
};
const getTitleForPublishOption = (originalTitle, publishOption) => {
  const namespaceIds = mw.config.get("wgNamespaceIds");
  const namespaceOptions = {
    NEW_SECTION: namespaceIds[""],
    SANDBOX_SECTION: namespaceIds.user
  };
  return mw.cx.getTitleForNamespace(originalTitle, namespaceOptions[publishOption]);
};
var getters$3 = {
  getArticleTitleForPublishing: (state2, getters2, rootState) => {
    const { currentSectionSuggestion, publishTarget, currentSourceSection } = rootState.application;
    const baseTitle = currentSectionSuggestion.targetTitle || currentSourceSection.title;
    return getTitleForPublishOption(baseTitle, publishTarget);
  },
  getSectionTitleForPublishing: (state2, getters2, rootState, rootGetters) => {
    const { currentSectionSuggestion, currentSourceSection } = rootState.application;
    if (currentSourceSection.isLeadSection) {
      return "";
    }
    const firstAppendixTargetTitle = rootGetters["suggestions/getFirstAppendixTitleBySectionSuggestion"](currentSectionSuggestion);
    const presentSectionTitle = currentSectionSuggestion.presentSections[currentSourceSection.originalTitle];
    if (presentSectionTitle) {
      return presentSectionTitle;
    } else if (!firstAppendixTargetTitle || rootGetters["application/isSandboxTarget"]) {
      return currentSourceSection.title;
    } else {
      return "";
    }
  },
  getSectionNumberForPublishing: (state2, getters2, rootState, rootGetters) => {
    const { currentSectionSuggestion, currentSourceSection } = rootState.application;
    if (currentSourceSection.isLeadSection) {
      return 0;
    } else if (rootGetters["application/isSandboxTarget"]) {
      return "new";
    }
    const targetPage = rootGetters["application/getCurrentTargetPage"];
    const firstAppendixTargetTitle = rootGetters["suggestions/getFirstAppendixTitleBySectionSuggestion"](currentSectionSuggestion);
    const presentSectionTargetTitle = currentSectionSuggestion.presentSections[currentSourceSection.originalTitle];
    if (!!presentSectionTargetTitle) {
      return targetPage.getSectionNumberByTitle(presentSectionTargetTitle);
    } else if (!!firstAppendixTargetTitle) {
      return targetPage.getSectionNumberByTitle(firstAppendixTargetTitle);
    }
    return "new";
  },
  getCleanHTMLForPublishing: (state2, getters2, rootState, rootGetters) => {
    const { currentSectionSuggestion, currentSourceSection } = rootState.application;
    const isPresentSection = !!currentSectionSuggestion.presentSections[currentSourceSection.originalTitle];
    const firstAppendixTargetTitle = rootGetters["suggestions/getFirstAppendixTitleBySectionSuggestion"](currentSectionSuggestion);
    if (rootGetters["application/isSandboxTarget"] || currentSourceSection.isLeadSection || isPresentSection || !firstAppendixTargetTitle) {
      return cleanupHtml(currentSourceSection.translationHtml);
    }
    const targetPage = rootGetters["application/getCurrentTargetPage"];
    const appendixSection = targetPage.sections.find((section) => section.originalTitle === firstAppendixTargetTitle);
    return prependNewSectionToAppendixSection(currentSourceSection, appendixSection);
  },
  getPublishedTranslationsForLanguagePair: (state2) => (sourceLanguage, targetLanguage) => state2.translations.filter((translationItem) => translationItem.sourceLanguage === sourceLanguage && translationItem.targetLanguage === targetLanguage && translationItem.status === "published"),
  getDraftTranslationsForLanguagePair: (state2) => (sourceLanguage, targetLanguage) => state2.translations.filter((translationItem) => translationItem.sourceLanguage === sourceLanguage && translationItem.targetLanguage === targetLanguage && translationItem.status === "draft"),
  getPublishedTranslations: (state2) => state2.translations.filter((translationItem) => translationItem.status === "published"),
  getDraftTranslations: (state2) => state2.translations.filter((translationItem) => translationItem.status === "draft"),
  hasSectionTranslations: (state2) => state2.translations.some((translation) => translation.hasSectionTranslations),
  getAllTranslationsForLanguagePair: (state2) => (sourceLanguage, targetLanguage) => state2.translations.filter((translation) => translation.sourceLanguage === sourceLanguage && translation.targetLanguage === targetLanguage)
};
const CJKLanguages = [
  "cjy-hans",
  "cjy-hant",
  "gan-hans",
  "gan",
  "hak-hans",
  "hak-hant",
  "hsn",
  "ii",
  "ja",
  "jje",
  "ko-kp",
  "ko",
  "lzh",
  "ryu",
  "wuu",
  "yue",
  "zh",
  "zh-cn",
  "zh-hans",
  "zh-hant",
  "zh-hk",
  "zh-mo",
  "zh-my",
  "zh-sg",
  "zh-tw"
];
const calculateUnmodifiedContent = (string1, string2, language) => {
  let unmodifiedTokens, bigSet, smallSet, tokens1, tokens2;
  if (!string1 || !string2) {
    return 0;
  }
  if (string1 === string2) {
    return 1;
  }
  bigSet = tokens1 = tokenise(string1, language);
  smallSet = tokens2 = tokenise(string2, language);
  if (tokens2.length > tokens1.length) {
    bigSet = tokens2;
    smallSet = tokens1;
  }
  unmodifiedTokens = bigSet.filter(function(token) {
    return smallSet.indexOf(token) >= 0;
  });
  return unmodifiedTokens.length / bigSet.length;
};
const tokenise = function(string, language) {
  if (!string) {
    return [];
  }
  if (CJKLanguages.includes(language)) {
    return string.split("");
  }
  return string.match(/\S+/g) || [];
};
const publishingThreshold = 95;
const warningThreshold = 85;
const thresholds = [
  { status: "failure", value: 100 - publishingThreshold },
  { status: "warning", value: 100 - warningThreshold },
  { status: "success", value: 100 }
];
const calculateScore = (actualTranslation, proposedTranslation) => {
  const resultText = htmlToElement(actualTranslation).textContent;
  const proposedText = htmlToElement(proposedTranslation).textContent;
  const distance = 100 - 100 * calculateUnmodifiedContent(proposedText, resultText);
  return Math.ceil(distance);
};
const getScoreStatus = (score) => thresholds.find((threshold) => score <= threshold.value).status;
const getMTScoreForPageSection = (pageSection, mtProvider) => calculateScore(pageSection.translationHtml, pageSection.getProposedTranslationHtml(mtProvider));
const htmlToElement = (html) => {
  const template = document.createElement("div");
  template.innerHTML = html;
  return template;
};
var mtValidator = { calculateScore, getScoreStatus, getMTScoreForPageSection };
class Translation {
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    status,
    id,
    sourceURL,
    targetURL,
    startTimestamp,
    lastUpdateTimestamp,
    progress = {},
    startedTranslator,
    lastUpdatedTranslator,
    cxVersion
  }) {
    this.id = id;
    this.cxVersion = cxVersion;
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.sourceURL = sourceURL;
    this.targetURL = targetURL;
    this.progress = progress;
    this.status = status;
    this.startedTranslator = startedTranslator;
    this.lastUpdatedTranslator = lastUpdatedTranslator;
    this.lastUpdateTimestamp = lastUpdateTimestamp;
    this.startTimestamp = startTimestamp;
  }
}
const ORIGINAL_TEXT_PROVIDER_KEY = "original";
const EMPTY_TEXT_PROVIDER_KEY = "empty";
class MTProviderGroup {
  constructor(sourceLanguage, targetLanguage, providers2 = []) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.providers = [
      ...providers2,
      ORIGINAL_TEXT_PROVIDER_KEY,
      EMPTY_TEXT_PROVIDER_KEY
    ];
  }
  static get ORIGINAL_TEXT_PROVIDER_KEY() {
    return ORIGINAL_TEXT_PROVIDER_KEY;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return EMPTY_TEXT_PROVIDER_KEY;
  }
}
const siteMapper = new mw.cx.SiteMapper();
const getUrl = mw.util.getUrl;
const getUserCoordinates = () => {
  let geoIP = mw.cookie.get("GeoIP", "");
  const geoIPCoordsMatch = geoIP && geoIP.match(/\d+\.?\d*:\d+\.?\d*/g);
  const geoIPCoords = geoIPCoordsMatch && geoIPCoordsMatch[0].replace(":", "|");
  if (geoIPCoords) {
    return geoIPCoords;
  }
  const ulsGeo = JSON.parse(mw.cookie.get("ULSGeo"));
  return ulsGeo && ulsGeo.latitude + "|" + ulsGeo.longitude;
};
class PublishFeedbackMessage {
  constructor({ text = "", title = "", type = "generic", status }) {
    this.text = text;
    this.title = title;
    this.type = type;
    this.status = status;
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
function fetchTranslations$1(offset) {
  return __async(this, null, function* () {
    if (mw.user.isAnon()) {
      return Promise.resolve([]);
    }
    const params = {
      action: "query",
      format: "json",
      assert: "user",
      formatversion: 2,
      list: "contenttranslation"
    };
    if (offset) {
      params["offset"] = offset;
    }
    const api = new mw.Api();
    return api.get(params).then((response) => __async(this, null, function* () {
      var _a;
      const apiResponse = response.query.contenttranslation.translations;
      let results = apiResponse.map((item) => new Translation(item.translation));
      if ((_a = response.continue) == null ? void 0 : _a.offset) {
        const restOfResults = yield fetchTranslations$1(response.continue.offset);
        results = results.concat(restOfResults);
      }
      return results;
    }));
  });
}
function fetchSegmentTranslation(sourceLanguage, targetLanguage, provider, sentence, token) {
  return __async(this, null, function* () {
    if (!sentence) {
      return;
    }
    let relativeUrl = `/translate/${sourceLanguage}/${targetLanguage}`;
    if (provider !== MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY) {
      relativeUrl += `/${provider}`;
    }
    const cxserverAPI = siteMapper.getCXServerUrl(relativeUrl);
    return fetch(cxserverAPI, {
      headers: { "Content-Type": "application/json", Authorization: token },
      method: "POST",
      body: JSON.stringify({ html: `<div>${sentence}</div>` })
    }).then((response) => response.json()).then((data) => {
      var _a, _b;
      const regExp = /<div>(?<content>(.|\s)*)<\/div>/;
      return (_b = (_a = regExp.exec(data.contents)) == null ? void 0 : _a.groups) == null ? void 0 : _b.content;
    }).catch((error) => Promise.reject(error));
  });
}
const parseTemplateWikitext = (wikitext, language, title) => {
  const api = siteMapper.getApi(language);
  return Promise.resolve(api.post({
    origin: "*",
    action: "visualeditor",
    paction: "parsefragment",
    page: title,
    wikitext,
    pst: true
  })).then((response) => response.visualeditor.content).catch((error) => {
    mw.log.error(error);
    return Promise.reject(error);
  });
};
const publishTranslation$1 = ({
  html,
  sourceTitle,
  targetTitle,
  sourceSectionTitle,
  targetSectionTitle,
  sourceLanguage,
  targetLanguage,
  revision,
  sectionNumber
}) => {
  const params = {
    action: "cxpublishsection",
    title: targetTitle,
    html,
    sourcetitle: sourceTitle,
    sourcerevid: revision,
    sourcesectiontitle: sourceSectionTitle,
    targetsectiontitle: targetSectionTitle,
    sourcelanguage: sourceLanguage,
    targetlanguage: targetLanguage,
    sectionnumber: sectionNumber
  };
  const api = new mw.Api();
  return api.postWithToken("csrf", params).then(() => null).catch((error, details) => {
    let text;
    if (details.exception) {
      text = details.exception.message;
    } else if (details.error) {
      text = details.error.info;
    } else {
      text = "Unknown error";
    }
    return new PublishFeedbackMessage({ text, status: "error" });
  });
};
var translatorApi = {
  fetchTranslations: fetchTranslations$1,
  fetchSegmentTranslation,
  parseTemplateWikitext,
  publishTranslation: publishTranslation$1
};
function validateMT({ rootState, commit: commit2 }) {
  commit2("application/clearMTPublishFeedbackMessages", {}, { root: true });
  const { currentSourceSection: section } = rootState.application;
  const mtValidationScore = mtValidator.getMTScoreForPageSection(section, rootState.application.currentMTProvider);
  const mtValidationStatus = mtValidator.getScoreStatus(mtValidationScore);
  if (mtValidationStatus === "success") {
    return;
  }
  const unmodifiedPercentage = 100 - mtValidationScore;
  const status = mtValidationStatus === "failure" ? "error" : "warning";
  let title, messageBody;
  if (status === "warning") {
    title = mw.message("cx-sx-publisher-mt-abuse-message-title", unmodifiedPercentage).plain();
    messageBody = mw.message("cx-sx-publisher-mt-abuse-message-body").plain();
  } else {
    title = mw.message("cx-sx-publisher-mt-abuse-error-title", unmodifiedPercentage).plain();
    messageBody = mw.message("cx-sx-publisher-mt-abuse-error-body").plain();
  }
  const message = new PublishFeedbackMessage({
    title,
    text: messageBody,
    status,
    type: "mt"
  });
  commit2("application/addMTPublishFeedbackMessage", message, { root: true });
}
function publishTranslation(_0) {
  return __async(this, arguments, function* ({ rootState, commit: commit2, rootGetters, getters: getters2 }) {
    const sourcePage = rootGetters["application/getCurrentPage"];
    const {
      currentSourceSection,
      currentSectionSuggestion,
      sourceLanguage,
      targetLanguage
    } = rootState.application;
    if (!currentSectionSuggestion) {
      throw new Error("Current source section cannot be empty during publishing");
    }
    const message = yield translatorApi.publishTranslation({
      html: getters2.getCleanHTMLForPublishing,
      sourceTitle: currentSectionSuggestion.sourceTitle,
      targetTitle: getters2.getArticleTitleForPublishing,
      sourceSectionTitle: currentSourceSection.originalTitle,
      targetSectionTitle: getters2.getSectionTitleForPublishing,
      sourceLanguage,
      targetLanguage,
      revision: sourcePage.revision,
      sectionNumber: getters2.getSectionNumberForPublishing
    });
    if (!!message) {
      commit2("application/addPublishFeedbackMessage", message, { root: true });
    }
  });
}
function fetchTranslations(_0) {
  return __async(this, arguments, function* ({ commit: commit2, dispatch: dispatch2, state: state2 }) {
    if (state2.translations.length) {
      return;
    }
    const translations = yield translatorApi.fetchTranslations();
    translations.forEach((translation) => commit2("addTranslation", translation));
    const queue2 = translations.reduce((queue3, translation) => {
      const language = translation.sourceLanguage;
      queue3[language] = queue3[language] || [];
      queue3[language].push(translation.sourceTitle);
      return queue3;
    }, {});
    commit2("setTranslationsLoaded", true);
    Object.keys(queue2).forEach((sourceLanguage) => {
      dispatch2("mediawiki/fetchPageMetadata", { language: sourceLanguage, titles: queue2[sourceLanguage] }, { root: true });
    });
  });
}
function translateContent(_0, _1) {
  return __async(this, arguments, function* ({ rootGetters, dispatch: dispatch2, rootState }, { provider, originalContent }) {
    const { sourceLanguage, targetLanguage } = rootState.application;
    const isValidProvider = rootGetters["mediawiki/isValidProviderForTranslation"](sourceLanguage, targetLanguage, provider);
    if (!isValidProvider) {
      return Promise.resolve();
    }
    try {
      const token = yield dispatch2("application/getCXServerToken", {}, { root: true });
      return yield translatorApi.fetchSegmentTranslation(sourceLanguage, targetLanguage, provider, originalContent, token);
    } catch (error) {
      mw.log.error("Error while translating segment", error);
      return originalContent;
    }
  });
}
var actions$3 = {
  validateMT,
  publishTranslation,
  fetchTranslations,
  translateContent
};
var mutations$3 = {
  addTranslation(state2, translation) {
    state2.translations.push(translation);
  },
  setTranslationsLoaded: (state2, value) => {
    state2.translationsLoaded = value;
  }
};
var translator = {
  namespaced: true,
  state: state$3,
  getters: getters$3,
  actions: actions$3,
  mutations: mutations$3
};
const en = [
  "Works",
  "Publications",
  "Bibliography",
  "Discography",
  "Filmography",
  "See also",
  "Notes",
  "Citations",
  "References",
  "Further reading",
  "External links"
];
const es = [
  "Bibliograf\xEDa",
  "Referencias",
  "Citas",
  "Discograf\xEDa",
  "Filmograf\xEDa",
  "Notas",
  "Publicaciones",
  "Obra",
  "Enlaces externos",
  "Otras lecturas",
  "Lecturas relacionadas",
  "V\xE9ase tambi\xE9n"
];
const bn = [
  "\u0997\u09CD\u09B0\u09A8\u09CD\u09A5\u09AA\u099E\u09CD\u099C\u09C0",
  "\u0997\u09CD\u09B0\u09A8\u09CD\u09A5\u09AA\u099E\u09CD\u099C\u09BF",
  "\u09A4\u09A5\u09CD\u09AF\u09BE\u09AC\u09B2\u09BF",
  "\u0989\u09A6\u09CD\u09A7\u09C3\u09A4\u09BF\u09B8\u09AE\u09C2\u09B9",
  "\u09AC\u09B0\u09CD\u09A3\u09A8\u09B8\u09AE\u09C2\u09B9",
  "\u0989\u09A6\u09CD\u09A7\u09C3\u09A4\u09BF",
  "\u0989\u09A6\u09CD\u09A7\u09CD\u09AC\u09C3\u09A4\u09BF",
  "\u09A4\u09A5\u09CD\u09AF\u09B8\u09C2\u09A4\u09CD\u09B0",
  "\u09A1\u09BF\u09B8\u09CD\u0995\u09CB\u0997\u09CD\u09B0\u09BE\u09AB\u09BF",
  "\u09AC\u09B9\u09BF\u0983\u09B8\u0982\u09AF\u09CB\u0997",
  "\u099A\u09B2\u099A\u09CD\u099A\u09BF\u09A4\u09CD\u09B0\u09C7\u09B0 \u09A4\u09BE\u09B2\u09BF\u0995\u09BE",
  "\u0986\u09B0\u0993 \u09AA\u09DC\u09C1\u09A8",
  "\u0986\u09B0\u0993 \u09AA\u09A1\u09BC\u09C1\u09A8",
  "\u0986\u09B0\u09CB \u09AA\u09DC\u09C1\u09A8",
  "\u099F\u09C0\u0995\u09BE",
  "\u09A8\u09CB\u099F",
  "\u09AA\u09CD\u09B0\u0995\u09BE\u09B6\u09A8\u09BE",
  "\u09AA\u09CD\u09B0\u0995\u09BE\u09B6\u09BF\u09A4 \u0997\u09CD\u09B0\u09A8\u09CD\u09A5",
  "\u0986\u09B0\u0993 \u09A6\u09C7\u0996\u09C1\u09A8",
  "\u0986\u09B0\u09CB \u09A6\u09C7\u0996\u09C1\u09A8",
  "\u0995\u09BE\u099C",
  "\u0995\u09B0\u09CD\u09AE\u099C\u09C0\u09AC\u09A8"
];
const fr = [
  "Bibliographie",
  "R\xE9f\xE9rences",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
];
const de = [
  "Literatur",
  "Bibliographie",
  "Anmerkungen",
  "Zitate",
  "Belege",
  "Diskografie",
  "Diskographie",
  "Weblinks",
  "Filmografie",
  "Literatur",
  "Einzelnachweise",
  "Ver\xF6ffentlichungen",
  "Einzelnachweise",
  "Arbeit",
  "Siehe auch"
];
var appendixTitles = {
  en,
  es,
  bn,
  fr,
  de
};
var state$2 = {
  pageSuggestions: [],
  sectionSuggestions: [],
  favorites: [],
  sectionSuggestionsLoadingCount: 0,
  pageSuggestionsLoadingCount: 0,
  maxSuggestionsPerSlice: 3,
  sectionSuggestionSeedCollections: [],
  pageSuggestionSeedCollections: [],
  appendixSectionTitles: appendixTitles,
  maxRecentlyEditedSuggestions: 3
};
var getters$2 = {
  findSectionSuggestionSeedCollection: (state2) => (sourceLanguage, targetLanguage) => state2.sectionSuggestionSeedCollections.find((collection) => collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)),
  findPageSuggestionSeedCollection: (state2) => (sourceLanguage, targetLanguage) => state2.pageSuggestionSeedCollections.find((collection) => collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)),
  getPageSuggestionsForPair: (state2) => (sourceLanguage, targetLanguage) => state2.pageSuggestions.filter((suggestionItem) => suggestionItem.sourceLanguage === sourceLanguage && suggestionItem.targetLanguage === targetLanguage),
  getSectionSuggestionsForPair: (state2) => (sourceLanguage, targetLanguage) => state2.sectionSuggestions.filter((suggestionItem) => suggestionItem.sourceLanguage === sourceLanguage && suggestionItem.targetLanguage === targetLanguage),
  getSectionSuggestionsForArticle: (state2) => (sourceLanguage, targetLanguage, sourceTitle) => state2.sectionSuggestions.find((suggestionItem) => suggestionItem.sourceLanguage === sourceLanguage && suggestionItem.targetLanguage === targetLanguage && suggestionItem.sourceTitle === sourceTitle),
  sectionSuggestionsForArticleExists: (state2) => (sourceLanguage, targetLanguage, sourceTitle) => state2.sectionSuggestions.some((suggestionItem) => suggestionItem.sourceLanguage === sourceLanguage && suggestionItem.targetLanguage === targetLanguage && suggestionItem.sourceTitle === sourceTitle),
  getFirstAppendixTitleBySectionSuggestion: (state2) => (sectionSuggestion) => {
    const appendixTitles2 = state2.appendixSectionTitles[sectionSuggestion.targetLanguage] || [];
    return (sectionSuggestion.targetSections || []).find((title) => appendixTitles2.includes(title));
  },
  appendixTitlesExistForLanguage: (state2) => (language) => {
    var _a;
    return (((_a = state2.appendixSectionTitles) == null ? void 0 : _a[language]) || []).length > 0;
  },
  getNumberOfSectionSuggestionsToFetch: (state2, getters2) => (sourceLanguage, targetLanguage) => {
    const existingSuggestionsForLanguagePair = getters2.getSectionSuggestionsForPair(sourceLanguage, targetLanguage);
    const pageSize = state2.maxSuggestionsPerSlice;
    return pageSize - existingSuggestionsForLanguagePair.length % pageSize;
  }
};
class ArticleSuggestion {
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    langLinksCount,
    wikidataId
  }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.wikidataId = wikidataId;
    this.langLinksCount = langLinksCount;
  }
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
}
class SectionSuggestion {
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    present,
    missing,
    sourceSections,
    targetSections
  }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.missingSections = missing;
    this.presentSections = present;
    this.sourceSections = sourceSections;
    this.targetSections = targetSections;
  }
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
  missingCoreSectionsCount(appendixTargetTitles) {
    return Object.values(this.missingSections).filter((targetSectionTitle) => !appendixTargetTitles.includes(targetSectionTitle)).length;
  }
  isValid(appendixTargetTitles) {
    return this.missingCoreSectionsCount(appendixTargetTitles) > 0;
  }
  get missingSectionsCount() {
    return Object.keys(this.missingSections || {}).length;
  }
  get presentSectionsCount() {
    return Object.keys(this.presentSections || {}).length;
  }
  get translationExists() {
    return !!this.targetTitle;
  }
  get orderedMissingSections() {
    return Object.entries(this.missingSections || {}).map((missing) => ({
      sourceTitle: missing[0],
      targetTitle: missing[1]
    })).sort((section1, section2) => this.sourceSections.indexOf(section1.sourceTitle) - this.sourceSections.indexOf(section2.sourceTitle));
  }
  get orderedPresentSections() {
    return Object.entries(this.presentSections || {}).map((present) => ({
      sourceTitle: present[0],
      targetTitle: present[1]
    })).sort((section1, section2) => this.sourceSections.indexOf(section1.sourceTitle) - this.sourceSections.indexOf(section2.sourceTitle));
  }
  hasSectionTitle(sectionTitle) {
    return this.sourceSections.includes(sectionTitle);
  }
}
class FavoriteSuggestion {
  constructor({
    title,
    sourceLanguage,
    targetLanguage,
    missingSectionsCount = 0
  } = {}) {
    this.title = title;
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.missingSectionsCount = missingSectionsCount;
  }
}
const appendixSectionTitlesInEnglish = en;
function fetchPageSuggestions(sourceLanguage, targetLanguage, seedArticleTitle, count = 24) {
  return __async(this, null, function* () {
    var _a;
    let apiModule = `/data/recommendation/article/creation/translation/${sourceLanguage}`;
    if (seedArticleTitle) {
      apiModule += `/${seedArticleTitle}`;
    }
    const apiURL = siteMapper.getRestbaseUrl(targetLanguage, apiModule);
    const params = new URLSearchParams({ count: `${count}` });
    const response = yield fetch(`${apiURL}?${params}`);
    if (!response.ok) {
      throw new Error("Failed to load data from server");
    }
    const suggestedResults = ((_a = yield response.json()) == null ? void 0 : _a.items) || [];
    return suggestedResults.map((item) => new ArticleSuggestion({
      sourceTitle: item.title.replace(/_/g, " "),
      sourceLanguage,
      targetLanguage,
      wikidataId: item.wikidata_id,
      langLinksCount: parseInt(item.sitelink_count)
    }));
  });
}
function fetchSectionSuggestions(sourceLanguage, sourceTitle, targetLanguage) {
  return __async(this, null, function* () {
    const cxServerParams = [sourceTitle, sourceLanguage, targetLanguage].map((param) => encodeURIComponent(param));
    const cxserverAPI = siteMapper.getCXServerUrl(`/suggest/sections/${cxServerParams.join("/")}`);
    const suggestedSectionResult = yield fetch(cxserverAPI).then((response) => response.ok ? response.json() : Promise.reject(new Error("Failed to load data from server"))).then((response) => response == null ? void 0 : response.sections).catch((error) => null);
    return suggestedSectionResult ? new SectionSuggestion(suggestedSectionResult) : null;
  });
}
function fetchSuggestionSeeds(sourceLanguage, targetLanguage) {
  return __async(this, null, function* () {
    const query = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: sourceLanguage,
      to: targetLanguage,
      limit: 200
    };
    const mwApi = siteMapper.getApi(sourceLanguage);
    try {
      const response = yield mwApi.get(query);
      return shuffleArray(response.result.translations);
    } catch (error) {
      mw.log.error("Error while fetching suggestion seeds", error);
      return [];
    }
  });
}
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
function fetchAppendixTargetSectionTitles(targetLanguage) {
  const titleQueryParams = appendixSectionTitlesInEnglish.map((title) => encodeURIComponent(title)).join("|");
  const cxserverAPI = siteMapper.getCXServerUrl(`/suggest/sections/titles/en/${targetLanguage}?titles=${titleQueryParams}`);
  return fetch(cxserverAPI).then((response) => response.ok ? response.json() : Promise.reject(new Error(`Failed to load appendix target section titles for language: ${targetLanguage}`))).then((response) => Object.values(response).flat()).catch((error) => []);
}
const markFavorite = (suggestion) => {
  const params = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "add",
    titles: suggestion.sourceTitle,
    from: suggestion.sourceLanguage,
    to: suggestion.targetLanguage
  };
  const api = new mw.Api();
  return Promise.resolve(api.postWithToken("csrf", params)).catch((error) => {
    mw.log.error("Error while marking suggestion as favorite", error);
  });
};
const unmarkFavorite = (suggestion) => {
  const params = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "remove",
    titles: suggestion.title,
    from: suggestion.sourceLanguage,
    to: suggestion.targetLanguage
  };
  const api = new mw.Api();
  return Promise.resolve(api.postWithToken("csrf", params)).catch((error) => {
    mw.log.error("Error while unmarking favorite suggestion", error);
  });
};
const fetchFavorites$1 = () => {
  const params = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  };
  const api = new mw.Api();
  return Promise.resolve(api.postWithToken("csrf", params)).then((response) => {
    var _a, _b;
    const lists = response.query.contenttranslationsuggestions.lists || {};
    const suggestions2 = ((_b = (_a = Object.values(lists)) == null ? void 0 : _a[0]) == null ? void 0 : _b.suggestions) || [];
    return suggestions2.map((favorite) => new FavoriteSuggestion(favorite));
  }).catch((error) => {
    mw.log.error("Error while fetching favorite suggestions", error);
  });
};
var cxSuggestionsApi = {
  fetchFavorites: fetchFavorites$1,
  fetchPageSuggestions,
  fetchSectionSuggestions,
  fetchSuggestionSeeds,
  fetchAppendixTargetSectionTitles,
  markFavorite,
  unmarkFavorite
};
const providers = ["cx-published-translations"];
class SuggestionSeedCollection {
  constructor({
    sourceLanguage,
    targetLanguage,
    seeds = [],
    exhaustedProviders = []
  }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.seeds = seeds;
    this.exhaustedProviders = exhaustedProviders;
  }
  doesBelongToLanguagePair(sourceLanguage, targetLanguage) {
    return this.sourceLanguage === sourceLanguage && this.targetLanguage === targetLanguage;
  }
  get allProvidersExhausted() {
    return providers.every((provider) => this.exhaustedProviders.includes(provider));
  }
  get nextUnexhaustedProvider() {
    return providers.find((provider) => !this.exhaustedProviders.includes(provider));
  }
  addExhaustedProvider(provider) {
    this.exhaustedProviders.push(provider);
  }
  getSeedArticleForSuggestion() {
    return this.seeds.shift();
  }
}
function fetchSectionSuggestionsBySeeds(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, dispatch: dispatch2, rootState, getters: getters2, state: state2 }, seeds) {
    if (!seeds || !seeds.length) {
      return;
    }
    const sourceLanguage = seeds[0].sourceLanguage;
    const targetLanguage = seeds[0].targetLanguage;
    commit2("increaseSectionSuggestionsLoadingCount");
    seeds = seeds.filter((seed) => !getters2.sectionSuggestionsForArticleExists(sourceLanguage, targetLanguage, seed.sourceTitle));
    const numberOfSuggestionsToFetch = getters2.getNumberOfSectionSuggestionsToFetch(sourceLanguage, targetLanguage);
    let fetchedSuggestionCounter = 0;
    for (const seed of seeds) {
      if (targetLanguage !== rootState.application.targetLanguage) {
        break;
      }
      const suggestion = yield cxSuggestionsApi.fetchSectionSuggestions(sourceLanguage, seed.sourceTitle, targetLanguage);
      commit2("removeSectionSuggestionSeed", seed);
      const appendixTargetTitles = state2.appendixSectionTitles[targetLanguage] || [];
      if (suggestion == null ? void 0 : suggestion.isValid(appendixTargetTitles)) {
        fetchedSuggestionCounter++;
        commit2("addSectionSuggestion", suggestion);
      }
      if (fetchedSuggestionCounter === numberOfSuggestionsToFetch) {
        break;
      }
    }
    commit2("decreaseSectionSuggestionsLoadingCount");
    if (targetLanguage !== rootState.application.targetLanguage) {
      return;
    }
    const titles = getters2.getSectionSuggestionsForPair(sourceLanguage, targetLanguage).map((suggestion) => suggestion.sourceTitle);
    dispatch2("mediawiki/fetchPageMetadata", { language: sourceLanguage, titles }, { root: true });
  });
}
function loadSectionSuggestion(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, dispatch: dispatch2, getters: getters2, rootGetters }, { sourceLanguage, targetLanguage, sourceTitle }) {
    let suggestion = getters2.getSectionSuggestionsForArticle(sourceLanguage, targetLanguage, sourceTitle);
    if (!suggestion) {
      suggestion = yield cxSuggestionsApi.fetchSectionSuggestions(sourceLanguage, sourceTitle, targetLanguage);
      try {
        yield dispatch2("mediawiki/fetchPageMetadata", { language: sourceLanguage, titles: [sourceTitle] }, { root: true });
        if (!suggestion) {
          suggestion = new SectionSuggestion({
            sourceLanguage,
            targetLanguage,
            sourceTitle
          });
          const page = rootGetters["mediawiki/getPage"](sourceLanguage, sourceTitle);
          commit2("addPageSuggestion", new ArticleSuggestion({
            sourceLanguage,
            targetLanguage,
            sourceTitle,
            langLinksCount: page.langLinksCount,
            wikidataId: page.wikidataId
          }));
        } else {
          commit2("addSectionSuggestion", suggestion);
        }
      } catch (e) {
        throw new Error(`No page metadata found for title ${sourceTitle} and language pair ${sourceLanguage}-${targetLanguage}`);
      }
    }
    return suggestion;
  });
}
function getSeedProviderHandlerByName({ rootGetters }, providerName) {
  const providers2 = {
    "cx-published-translations": (sourceLanguage, targetLanguage) => cxSuggestionsApi.fetchSuggestionSeeds(sourceLanguage, targetLanguage),
    "user-published-translations": (sourceLanguage, targetLanguage) => Promise.resolve(rootGetters["translator/getPublishedTranslationsForLanguagePair"](sourceLanguage, targetLanguage))
  };
  return providers2[providerName] || null;
}
function getSectionSuggestionSeeds(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, rootGetters, dispatch: dispatch2, getters: getters2 }, { sourceLanguage, targetLanguage }) {
    let currentSeedCollection = getters2.findSectionSuggestionSeedCollection(sourceLanguage, targetLanguage);
    if (!currentSeedCollection) {
      currentSeedCollection = new SuggestionSeedCollection({
        sourceLanguage,
        targetLanguage
      });
      commit2("addSectionSuggestionSeedCollection", currentSeedCollection);
    }
    if (!currentSeedCollection.seeds.length) {
      commit2("increaseSectionSuggestionsLoadingCount");
      do {
        const providerName = currentSeedCollection.nextUnexhaustedProvider;
        const seedProviderHandler = yield dispatch2("getSeedProviderHandlerByName", providerName);
        if (seedProviderHandler) {
          const seeds = yield seedProviderHandler(sourceLanguage, targetLanguage);
          currentSeedCollection.addExhaustedProvider(providerName);
          seeds.forEach((seed) => commit2("addSectionSuggestionSeed", seed));
        }
      } while (currentSeedCollection.seeds.length === 0 && !currentSeedCollection.allProvidersExhausted);
      commit2("decreaseSectionSuggestionsLoadingCount");
    }
    return currentSeedCollection.seeds;
  });
}
function getPageSuggestionSeed(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, rootGetters, dispatch: dispatch2, getters: getters2 }, { sourceLanguage, targetLanguage }) {
    let currentSeedCollection = getters2.findPageSuggestionSeedCollection(sourceLanguage, targetLanguage);
    if (!currentSeedCollection) {
      currentSeedCollection = new SuggestionSeedCollection({
        sourceLanguage,
        targetLanguage
      });
      commit2("addPageSuggestionSeedCollection", currentSeedCollection);
    }
    if (!currentSeedCollection.seeds.length) {
      do {
        const providerName = currentSeedCollection.nextUnexhaustedProvider;
        const seedProviderHandler = yield dispatch2("getSeedProviderHandlerByName", providerName);
        if (seedProviderHandler) {
          const seeds = yield seedProviderHandler(sourceLanguage, targetLanguage);
          currentSeedCollection.addExhaustedProvider(providerName);
          seeds.forEach((seed) => commit2("addPageSuggestionSeed", seed));
        }
      } while (currentSeedCollection.seeds.length === 0 && !currentSeedCollection.allProvidersExhausted);
    }
    return currentSeedCollection.getSeedArticleForSuggestion();
  });
}
function initializeSuggestions(_0) {
  return __async(this, arguments, function* ({
    rootGetters,
    dispatch: dispatch2,
    rootState,
    state: state2
  }) {
    const { targetLanguage } = rootState.application;
    const firstSectionSuggestionsSlice = rootGetters["application/getSectionSuggestionsSliceByIndex"](0);
    const firstPageSuggestionsSlice = rootGetters["application/getPageSuggestionsSliceByIndex"](0);
    const isFirstSectionSuggestionsSliceFull = firstSectionSuggestionsSlice.length === state2.maxSuggestionsPerSlice;
    const isFirstPageSuggestionsSliceFull = firstPageSuggestionsSlice.length === state2.maxSuggestionsPerSlice;
    if (isFirstSectionSuggestionsSliceFull && isFirstPageSuggestionsSliceFull) {
      return;
    }
    yield dispatch2("suggestions/fetchAppendixSectionTitles", targetLanguage, {
      root: true
    });
    dispatch2("fetchNextSectionSuggestionsSlice");
    dispatch2("fetchNextPageSuggestionsSlice");
  });
}
function fetchNextSectionSuggestionsSlice(_0) {
  return __async(this, arguments, function* ({ dispatch: dispatch2, rootState }) {
    const { sourceLanguage, targetLanguage } = rootState.application;
    const seeds = yield dispatch2("getSectionSuggestionSeeds", {
      sourceLanguage,
      targetLanguage
    });
    return dispatch2("fetchSectionSuggestionsBySeeds", seeds);
  });
}
function fetchNextPageSuggestionsSlice(_0) {
  return __async(this, arguments, function* ({
    commit: commit2,
    dispatch: dispatch2,
    state: state2,
    rootState
  }) {
    commit2("increasePageSuggestionsLoadingCount");
    const { sourceLanguage, targetLanguage } = rootState.application;
    const seed = yield dispatch2("getPageSuggestionSeed", {
      sourceLanguage,
      targetLanguage
    });
    const suggestions2 = yield cxSuggestionsApi.fetchPageSuggestions(sourceLanguage, targetLanguage, seed == null ? void 0 : seed.sourceTitle, state2.maxSuggestionsPerSlice);
    commit2("decreasePageSuggestionsLoadingCount");
    suggestions2.forEach((suggestion) => commit2("addPageSuggestion", suggestion));
    const titles = suggestions2.map((suggestion) => suggestion.sourceTitle);
    titles.length && dispatch2("mediawiki/fetchPageMetadata", { language: sourceLanguage, titles }, { root: true });
  });
}
function fetchAppendixSectionTitles(_0, _1) {
  return __async(this, arguments, function* ({ getters: getters2, commit: commit2 }, language) {
    if (getters2.appendixTitlesExistForLanguage(language)) {
      return;
    }
    const appendixTitles2 = yield cxSuggestionsApi.fetchAppendixTargetSectionTitles(language);
    commit2("addAppendixSectionTitlesForLanguage", {
      language,
      titles: appendixTitles2
    });
  });
}
function addSectionSuggestionAsFavorite(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, dispatch: dispatch2 }, sectionSuggestion) {
    commit2("removeSectionSuggestion", sectionSuggestion);
    dispatch2("fetchNextSectionSuggestionsSlice");
    dispatch2("doMarkSuggestionAsFavorite", sectionSuggestion);
  });
}
function addPageSuggestionAsFavorite(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, dispatch: dispatch2 }, pageSuggestion) {
    commit2("removePageSuggestion", pageSuggestion);
    dispatch2("fetchNextPageSuggestionsSlice");
    dispatch2("doMarkSuggestionAsFavorite", pageSuggestion);
  });
}
function doMarkSuggestionAsFavorite(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, dispatch: dispatch2 }, suggestion) {
    yield cxSuggestionsApi.markFavorite(suggestion);
    const { sourceTitle: title, sourceLanguage, targetLanguage } = suggestion;
    const favoriteSuggestion = new FavoriteSuggestion({
      title,
      sourceLanguage,
      targetLanguage
    });
    commit2("addFavoriteSuggestion", favoriteSuggestion);
  });
}
function removeFavoriteSuggestion(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2 }, suggestion) {
    commit2("removeFavoriteSuggestion", suggestion);
    yield cxSuggestionsApi.unmarkFavorite(suggestion);
  });
}
function fetchFavorites(_0) {
  return __async(this, arguments, function* ({ commit: commit2, dispatch: dispatch2, state: state2 }) {
    if (!!state2.favorites.length) {
      return;
    }
    const favorites = yield cxSuggestionsApi.fetchFavorites();
    if (!favorites || !favorites.length) {
      return;
    }
    const favoritesGroupedByLanguage = {};
    for (const favorite of favorites) {
      commit2("addFavoriteSuggestion", favorite);
      cxSuggestionsApi.fetchSectionSuggestions(favorite.sourceLanguage, favorite.title, favorite.targetLanguage).then((suggestion) => favorite.missingSectionsCount = (suggestion == null ? void 0 : suggestion.missingSectionsCount) || 0);
      favoritesGroupedByLanguage[favorite.sourceLanguage] = [
        ...favoritesGroupedByLanguage[favorite.sourceLanguage] || [],
        favorite
      ];
    }
    for (const [sourceLanguage, favorites2] of Object.entries(favoritesGroupedByLanguage)) {
      dispatch2("mediawiki/fetchPageMetadata", {
        language: sourceLanguage,
        titles: favorites2.map((favorite) => favorite.title)
      }, { root: true });
    }
  });
}
var actions$2 = {
  addPageSuggestionAsFavorite,
  addSectionSuggestionAsFavorite,
  doMarkSuggestionAsFavorite,
  fetchFavorites,
  fetchAppendixSectionTitles,
  fetchNextPageSuggestionsSlice,
  fetchNextSectionSuggestionsSlice,
  fetchSectionSuggestionsBySeeds,
  getPageSuggestionSeed,
  getSectionSuggestionSeeds,
  getSeedProviderHandlerByName,
  initializeSuggestions,
  loadSectionSuggestion,
  removeFavoriteSuggestion
};
var mutations$2 = {
  addPageSuggestion(state2, suggestion) {
    state2.pageSuggestions.push(suggestion);
  },
  addSectionSuggestion(state2, suggestion) {
    state2.sectionSuggestions.push(suggestion);
  },
  removeSectionSuggestion(state2, suggestionToRemove) {
    state2.sectionSuggestions = state2.sectionSuggestions.filter((suggestion) => suggestion.id !== suggestionToRemove.id);
  },
  removePageSuggestion(state2, suggestionToRemove) {
    state2.pageSuggestions = state2.pageSuggestions.filter((suggestion) => suggestion.id !== suggestionToRemove.id);
  },
  increaseSectionSuggestionsLoadingCount(state2) {
    state2.sectionSuggestionsLoadingCount++;
  },
  decreaseSectionSuggestionsLoadingCount(state2) {
    state2.sectionSuggestionsLoadingCount--;
  },
  increasePageSuggestionsLoadingCount(state2) {
    state2.pageSuggestionsLoadingCount++;
  },
  decreasePageSuggestionsLoadingCount(state2) {
    state2.pageSuggestionsLoadingCount--;
  },
  addSectionSuggestionSeedCollection(state2, collection) {
    state2.sectionSuggestionSeedCollections.push(collection);
  },
  addPageSuggestionSeedCollection(state2, collection) {
    state2.pageSuggestionSeedCollections.push(collection);
  },
  addSectionSuggestionSeed(state2, seed) {
    const { sourceLanguage, targetLanguage } = seed;
    const seedCollection = state2.sectionSuggestionSeedCollections.find((collection) => collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage));
    seedCollection.seeds.push(seed);
  },
  addPageSuggestionSeed(state2, seed) {
    const { sourceLanguage, targetLanguage } = seed;
    const seedCollection = state2.pageSuggestionSeedCollections.find((collection) => collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage));
    seedCollection.seeds.push(seed);
  },
  removeSectionSuggestionSeed(state2, seed) {
    const { sourceLanguage, targetLanguage } = seed;
    const seedCollection = state2.sectionSuggestionSeedCollections.find((collection) => collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage));
    seedCollection.seeds = seedCollection.seeds.filter((existingSeed) => existingSeed.sourceTitle !== seed.sourceTitle);
  },
  addAppendixSectionTitlesForLanguage(state2, { language, titles }) {
    state2.appendixSectionTitles[language] = titles;
  },
  addFavoriteSuggestion(state2, favoriteSuggestion) {
    state2.favorites.push(favoriteSuggestion);
  },
  removeFavoriteSuggestion(state2, favoriteSuggestion) {
    const { title, sourceLanguage, targetLanguage } = favoriteSuggestion;
    state2.favorites = state2.favorites.filter((favorite) => favorite.title !== title || favorite.sourceLanguage !== sourceLanguage || favorite.targetLanguage !== targetLanguage);
  }
};
var suggestions = {
  namespaced: true,
  state: state$2,
  getters: getters$2,
  actions: actions$2,
  mutations: mutations$2
};
var state$1 = {
  pages: [],
  languagesRequested: false,
  languageTitleGroups: [],
  supportedLanguageCodes: [],
  supportedLanguageCodesRequested: false,
  supportedMTProviderGroups: [],
  nearbyPages: {},
  enabledTargetLanguages: mw.config.get("wgSectionTranslationTargetLanguages")
};
var getters$1 = {
  getPage: (state2) => (language, title) => state2.pages.find((page) => page.language === language && (page.title === title || page.alias !== null && page.alias === title)),
  getLanguageTitleGroup: (state2) => (language, title) => state2.languageTitleGroups.find((group) => group.titles.find((groupTitle) => groupTitle.lang === language && groupTitle.title === title)),
  getLanguageTitleGroupByWikidataId: (state2) => (wikidataId) => state2.languageTitleGroups.find((group) => group.wikidataId === wikidataId),
  getTitleByLanguageForGroup: (state2, getters2) => (wikidataId, language) => {
    var _a, _b;
    return (_b = (((_a = getters2.getLanguageTitleGroupByWikidataId(wikidataId)) == null ? void 0 : _a.titles) || []).find((title) => title.lang === language)) == null ? void 0 : _b.title;
  },
  getSupportedMTProviders: (state2) => (sourceLanguage, targetLanguage) => {
    var _a;
    return ((_a = state2.supportedMTProviderGroups.find((mtProviderGroup) => mtProviderGroup.sourceLanguage === sourceLanguage && mtProviderGroup.targetLanguage === targetLanguage)) == null ? void 0 : _a.providers) || [];
  },
  isValidProviderForTranslation: (state2, getters2) => (sourceLanguage, targetLanguage, provider) => getters2.getSupportedMTProviders(sourceLanguage, targetLanguage).includes(provider) && provider !== MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY,
  getRecentlyEditedPages: (state2, getters2, rootState, rootGetters) => {
    const sourceLanguage = rootState.application.sourceLanguage;
    const targetLanguage = rootState.application.targetLanguage;
    const translations = rootGetters["translator/getAllTranslationsForLanguagePair"](sourceLanguage, targetLanguage);
    const translationsSlice = translations.slice(0, rootState.suggestions.maxRecentlyEditedSuggestions);
    return translationsSlice.map((translation) => getters2.getPage(sourceLanguage, translation.sourceTitle)).filter((page) => !!page);
  },
  getNearbyPages: (state2, getters2, rootState) => {
    const sourceLanguage = rootState.application.sourceLanguage;
    return state2.nearbyPages[sourceLanguage];
  }
};
class Page {
  constructor({
    description,
    langlinkscount,
    lastrevid,
    original,
    pageid,
    pagelanguage,
    pageprops,
    pageviews,
    thumbnail,
    title,
    _alias,
    content = null,
    sections = []
  } = {}) {
    this.language = pagelanguage;
    this.title = title;
    this.pageId = pageid;
    this.description = description;
    this.image = original;
    this.pageprops = pageprops;
    this.pageviews = pageviews;
    this.thumbnail = thumbnail;
    this.langLinksCount = langlinkscount;
    this.revision = lastrevid;
    this.alias = _alias;
    this.wikidataId = pageprops == null ? void 0 : pageprops.wikibase_item;
    this.content = content;
    this.sections = sections;
  }
  get id() {
    return `${this.language}/${this.title}`;
  }
  getSectionNumberByTitle(sectionTitle) {
    const sectionIndex = this.sections.findIndex((section) => section.originalTitle === sectionTitle);
    if (sectionIndex < 0) {
      return -1;
    }
    const precedingSections = this.sections.slice(0, sectionIndex);
    return precedingSections.reduce((count, section) => count + section.subSections.filter((subsection) => subsection.isHeadingSection).length, sectionIndex + 1);
  }
  getSectionByTitle(sectionTitle) {
    return (this.sections || []).find((section) => section.originalTitle === sectionTitle);
  }
}
class LanguageTitleGroup {
  constructor(wikidataId, titles) {
    this.wikidataId = wikidataId;
    this.titles = titles;
  }
  getTitleForLanguage(language) {
    var _a;
    return (_a = this.titles.find((title) => title.lang === language)) == null ? void 0 : _a.title;
  }
  hasLanguage(language) {
    return this.titles.some((title) => title.lang === language);
  }
}
class SectionSentence {
  constructor({
    id,
    originalContent,
    translatedContent = "",
    node = null,
    proposedTranslations = {},
    selected = false
  } = {}) {
    this.id = id;
    this.translatedContent = translatedContent;
    this.node = node;
    this.proposedTranslations = __spreadProps(__spreadValues({}, proposedTranslations), {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: originalContent,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: ""
    });
    this.selected = selected;
  }
  get originalContent() {
    return this.proposedTranslations[MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY];
  }
  get content() {
    return this.translatedContent || this.originalContent;
  }
  get isTranslated() {
    return this.translatedContent !== "";
  }
}
const parseTemplateName = (transclusionNode) => {
  var _a;
  const templateData = getTemplateData(transclusionNode);
  return ((_a = templateData == null ? void 0 : templateData.target) == null ? void 0 : _a.wt) || null;
};
const getTemplateData = (node) => {
  var _a, _b, _c;
  const mwData = JSON.parse(((_a = node.dataset) == null ? void 0 : _a.mw) || "{}");
  return ((_c = (_b = mwData == null ? void 0 : mwData.parts) == null ? void 0 : _b[0]) == null ? void 0 : _c.template) || null;
};
const isTransclusionNode = (node) => !!(node.attributes.about || node.attributes.typeof && node.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/));
const getWikitextFromTemplate = (templateNode) => {
  const templateData = getTemplateData(templateNode);
  if (!(templateData == null ? void 0 : templateData.target)) {
    return null;
  }
  let wikitext = templateData.target.wt;
  const { params } = templateData;
  if (!params) {
    return `{{${wikitext}}}`;
  }
  for (const key in params) {
    const escapedValue = escapeParameter(params[key].wt);
    wikitext += ` | ${key} = ${escapedValue}`;
  }
  return `{{${wikitext}}}`;
};
const escapeParameter = (param) => {
  let input = param, output = "", inNowiki = false, bracketStack = 0, linkStack = 0;
  while (input.length > 0) {
    const match = input.match(/(?:\[\[)|(?:\]\])|(?:\{\{)|(?:\}\})|\|+|<\/?nowiki>|<nowiki\s*\/>/);
    if (!match) {
      output += input;
      break;
    }
    output += input.slice(0, match.index);
    input = input.slice(match.index + match[0].length);
    if (inNowiki) {
      if (match[0] === "</nowiki>") {
        inNowiki = false;
        output += match[0];
      } else {
        output += match[0];
      }
    } else {
      let needsNowiki = true;
      if (match[0] === "<nowiki>") {
        inNowiki = true;
        needsNowiki = false;
      } else if (match[0] === "</nowiki>" || match[0].match(/<nowiki\s*\/>/)) {
        needsNowiki = false;
      } else if (match[0].match(/(?:\[\[)/)) {
        linkStack++;
        needsNowiki = false;
      } else if (match[0].match(/(?:\]\])/)) {
        if (linkStack > 0) {
          linkStack--;
          needsNowiki = false;
        }
      } else if (match[0].match(/(?:\{\{)/)) {
        bracketStack++;
        needsNowiki = false;
      } else if (match[0].match(/(?:\}\})/)) {
        if (bracketStack > 0) {
          bracketStack--;
          needsNowiki = false;
        }
      } else if (match[0].match(/\|+/)) {
        if (bracketStack > 0 || linkStack > 0) {
          needsNowiki = false;
        }
      }
      if (needsNowiki) {
        output += "<nowiki>" + match[0] + "</nowiki>";
      } else {
        output += match[0];
      }
    }
  }
  return output;
};
const targetTemplateExists = (cxTemplateNode) => {
  var _a, _b;
  const cxData = JSON.parse(((_a = cxTemplateNode.dataset) == null ? void 0 : _a.cx) || "{}");
  return !!((_b = cxData == null ? void 0 : cxData[0]) == null ? void 0 : _b.targetExists);
};
class SubSection$1 {
  constructor({ sentences, node }) {
    this.id = node.id;
    this.sentences = sentences;
    this.node = node;
    this.blockTemplateSelected = false;
    this.blockTemplateTranslatedContent = "";
    this.blockTemplateProposedTranslations = {};
  }
  get isHeadingSection() {
    return this.node.firstElementChild instanceof HTMLHeadingElement;
  }
  get originalHtml() {
    return this.node.outerHTML;
  }
  get translatedContent() {
    if (this.isBlockTemplate) {
      return this.blockTemplateTranslatedContent;
    }
    const subSectionNode = this.node.cloneNode(true);
    const segments = Array.from(subSectionNode.getElementsByClassName("cx-segment"));
    segments.forEach((segment) => {
      const sentence = this.getSentenceById(segment.dataset.segmentid);
      if (sentence.isTranslated) {
        segment.innerHTML = sentence.translatedContent;
        return;
      }
      segment.parentNode.removeChild(segment);
    });
    return subSectionNode.innerHTML;
  }
  getProposedTranslation(mtProvider) {
    return this.sentences.reduce((mtTranslation, sentence) => {
      if (sentence.isTranslated) {
        mtTranslation += sentence.proposedTranslations[mtProvider];
      }
      return mtTranslation;
    }, "");
  }
  get isTranslated() {
    if (this.isBlockTemplate) {
      return !!this.blockTemplateTranslatedContent;
    }
    return this.sentences.some((sentence) => sentence.isTranslated);
  }
  getSentenceById(id) {
    return this.sentences.find((sentence) => sentence.id === id);
  }
  get selected() {
    return this.isBlockTemplate && this.blockTemplateSelected;
  }
  get isBlockTemplate() {
    return !!this.transclusionNode;
  }
  get transclusionNode() {
    return Array.from(this.node.children).find((node) => isTransclusionNode(node));
  }
  get sourceBlockTemplateName() {
    if (!this.isBlockTemplate) {
      return null;
    }
    return parseTemplateName(this.transclusionNode);
  }
  getTargetBlockTemplateNameByProvider(provider) {
    if (!this.blockTemplateProposedTranslations[provider]) {
      return null;
    }
    const div = document.createElement("div");
    div.innerHTML = this.blockTemplateProposedTranslations[provider];
    const templateDiv = Array.from(div.children).find((node) => isTransclusionNode(node));
    if (!templateDiv) {
      return "";
    }
    return parseTemplateName(templateDiv);
  }
  get translationUnits() {
    if (this.isBlockTemplate) {
      return [this];
    }
    return this.sentences;
  }
}
class PageSection {
  constructor({
    id,
    title = null,
    subSections = [],
    isLeadSection = false,
    isTitleSelected = false
  } = {}) {
    this.id = id;
    this.proposedTitleTranslations = {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: title,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: ""
    };
    this.translatedTitle = "";
    this.subSections = subSections;
    this.editedTranslation = null;
    this.isLeadSection = isLeadSection;
    this.isTitleSelected = isTitleSelected;
  }
  get originalTitle() {
    return this.proposedTitleTranslations[MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY];
  }
  get title() {
    return this.translatedTitle || this.originalTitle;
  }
  get contentTranslationUnits() {
    return this.subSections.reduce((units, subSection) => [...units, ...subSection.translationUnits], []);
  }
  get selectedContentTranslationUnit() {
    return this.contentTranslationUnits.find((unit) => unit.selected);
  }
  get selectedContentTranslationUnitIndex() {
    return this.contentTranslationUnits.findIndex((unit) => unit.selected);
  }
  getContentTranslationUnitById(id) {
    return this.contentTranslationUnits.find((unit) => unit.id === id);
  }
  get selectedTranslationUnitId() {
    var _a;
    if (this.isTitleSelected) {
      return 0;
    }
    return (_a = this.selectedContentTranslationUnit) == null ? void 0 : _a.id;
  }
  get isSelectedTranslationUnitLast() {
    return this.selectedContentTranslationUnitIndex === this.contentTranslationUnits.length - 1;
  }
  get followingTranslationUnit() {
    var _a;
    const nextIndex = this.selectedContentTranslationUnitIndex + 1;
    return (_a = this.contentTranslationUnits) == null ? void 0 : _a[nextIndex];
  }
  get html() {
    return this.subSections.reduce((htmlContent, subSection) => htmlContent + subSection.originalHtml, "");
  }
  get translationHtml() {
    return this.editedTranslation || this.subSections.reduce((htmlContent, subSection) => subSection.isTranslated ? htmlContent + subSection.translatedContent : htmlContent, "");
  }
  getProposedTranslationHtml(mtProvider) {
    return this.subSections.reduce((htmlContent, subSection) => htmlContent + subSection.getProposedTranslation(mtProvider), "");
  }
  get isTranslated() {
    return this.subSections.some((subSection) => subSection.isTranslated);
  }
  getOriginalContentByTranslationUnitId(id) {
    if (id === 0) {
      return this.originalTitle;
    }
    const unit = this.getContentTranslationUnitById(id);
    if (unit instanceof SubSection$1) {
      return unit.transclusionNode.outerHTML;
    } else if (unit instanceof SectionSentence) {
      return unit.originalContent;
    }
    return null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(this.selectedTranslationUnitId);
  }
  resetSelection() {
    this.isTitleSelected = false;
    this.contentTranslationUnits.forEach((unit) => {
      if (unit instanceof SubSection$1) {
        unit.blockTemplateSelected = false;
      } else if (unit instanceof SectionSentence) {
        unit.selected = false;
      }
    });
  }
  selectTranslationUnitById(id) {
    this.resetSelection();
    if (id === 0) {
      this.isTitleSelected = true;
      return;
    }
    const unit = this.getContentTranslationUnitById(id);
    if (unit instanceof SubSection$1) {
      unit.blockTemplateSelected = true;
    } else if (unit instanceof SectionSentence) {
      unit.selected = true;
    }
  }
  hasProposedTranslationByTranslationUnitId(id, mtProvider) {
    if (id === 0) {
      return this.proposedTitleTranslations.hasOwnProperty(mtProvider);
    }
    const unit = this.getContentTranslationUnitById(id);
    if (unit instanceof SubSection$1) {
      return !!unit.blockTemplateProposedTranslations.hasOwnProperty(mtProvider);
    } else if (unit instanceof SectionSentence) {
      return unit.proposedTranslations.hasOwnProperty(mtProvider);
    }
  }
  getProposedTranslationByMtProvider(mtProvider) {
    const unit = this.selectedContentTranslationUnit;
    if (this.isTitleSelected) {
      return this.proposedTitleTranslations[mtProvider] || "";
    } else if (unit instanceof SubSection$1) {
      return unit.blockTemplateProposedTranslations[mtProvider] || "";
    } else if (unit instanceof SectionSentence) {
      return unit.proposedTranslations[mtProvider] || "";
    }
    return null;
  }
  setTranslationForSelectedTranslationUnit(translation) {
    if (this.isTitleSelected) {
      this.translatedTitle = translation;
      return;
    }
    if (this.selectedContentTranslationUnit instanceof SubSection$1) {
      this.selectedContentTranslationUnit.blockTemplateTranslatedContent = translation;
    } else if (this.selectedContentTranslationUnit instanceof SectionSentence) {
      this.selectedContentTranslationUnit.translatedContent = translation;
    }
  }
  get isSelectedTranslationUnitTranslated() {
    var _a;
    if (this.isTitleSelected) {
      return !!this.translatedTitle;
    }
    return !!((_a = this.selectedContentTranslationUnit) == null ? void 0 : _a.isTranslated);
  }
}
const createDummyVESurface = (htmlContent) => {
  const surfaceEl = document.createElement("div");
  surfaceEl.classList.add("surface");
  const overlay = document.createElement("div");
  overlay.appendChild(surfaceEl);
  overlay.$el = $(overlay);
  const target = new ve.init.mw.MobileArticleTarget(overlay);
  const sourceDoc = ve.dm.converter.getModelFromDom(ve.createDocumentFromHtml(htmlContent));
  const surface = target.createSurface(sourceDoc);
  surface.setReadOnly(true);
  target.surfaces.push(surface);
  target.setSurface(surface);
  surface.initialize();
  return surface;
};
const getSubSectionNodes = (htmlContent, resolveReferences) => {
  let surface, subSectionNodeList;
  if (resolveReferences) {
    surface = createDummyVESurface(htmlContent);
    const subSectionCeNodeList = surface.$element.find("section[rel='cx:Section']:not([data-mw-section-number='0'])");
    subSectionNodeList = subSectionCeNodeList.map((i, subSectionCeNode) => {
      const model = $(subSectionCeNode).data("view").getModel();
      if (model) {
        return ve.dm.converter.getDomFromNode(model, ve.dm.Converter.static.CLIPBOARD_MODE).body.children[0];
      }
    });
    surface.destroy();
  } else {
    subSectionNodeList = $(htmlContent).filter("section[rel='cx:Section']:not([data-mw-section-number='0'])");
  }
  return subSectionNodeList;
};
const convertSegmentedContentToPageSections = (htmlContent, resolveReferences) => {
  const subSectionNodeList = Array.from(getSubSectionNodes(htmlContent, resolveReferences));
  const sectionNodeGroups = groupSubSectionNodes(subSectionNodeList);
  return sectionNodeGroups.map((sectionNodes) => {
    const [firstNode, ...contentNodes] = sectionNodes;
    let title = "";
    const id = firstNode.dataset.mwSectionNumber;
    if (firstNode.querySelector("h2")) {
      title = firstNode.textContent.trim();
    } else {
      contentNodes.unshift(firstNode);
    }
    const subSections = contentNodes.map((node) => new SubSection$1({
      sentences: convertNodeToSentences(node),
      node
    }));
    const isLeadSection = !title;
    return new PageSection({ id, title, subSections, isLeadSection });
  });
};
const groupSubSectionNodes = (subSectionNodeList) => {
  const groups = subSectionNodeList.reduce((groups2, sectionNode) => {
    const id = sectionNode.dataset.mwSectionNumber;
    groups2[id] = groups2[id] ? [...groups2[id], sectionNode] : [sectionNode];
    return groups2;
  }, {});
  return Object.values(groups);
};
const convertNodeToSentences = (node) => Array.from(node.getElementsByClassName("cx-segment")).map((sentenceNode) => new SectionSentence({
  id: sentenceNode.dataset.segmentid,
  originalContent: sentenceNode.innerHTML,
  node: sentenceNode
}));
var segmentedContentConverter = {
  convertSegmentedContentToPageSections
};
const defaultThumbnailSize = 80;
const fetchPages = (language, titles) => {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    piprop: "thumbnail|name|original",
    pithumbsize: defaultThumbnailSize,
    titles: titles.join("|"),
    origin: "*",
    redirects: true
  };
  const mwApi = siteMapper.getApi(language);
  return mwApi.get(params).then((response) => {
    const apiResponse = response.query.pages;
    const redirects = response.query.redirects || [];
    const redirectMap = redirects.reduce((rMap, redirect) => __spreadProps(__spreadValues({}, rMap), { [redirect.to]: redirect.from }), {});
    return apiResponse.map((page) => {
      page = redirectMap[page.title] ? __spreadProps(__spreadValues({}, page), { _alias: redirectMap[page.title] }) : page;
      return new Page(page);
    });
  });
};
const fetchLanguageTitles$1 = (language, title) => {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "langlinks|pageprops",
    titles: title,
    lllimit: 500,
    origin: "*",
    redirects: true
  };
  const mwApi = siteMapper.getApi(language);
  return mwApi.get(params).then((response) => __async(this, null, function* () {
    var _a, _b;
    const pages = response.query.pages;
    if (!pages || !pages.length || ((_a = pages[0]) == null ? void 0 : _a.missing)) {
      return null;
    }
    const titles = [{ lang: language, title }, ...pages[0].langlinks || []];
    const wikidataId = (_b = pages[0].pageprops) == null ? void 0 : _b.wikibase_item;
    if (!wikidataId) {
      return null;
    }
    return Object.freeze(new LanguageTitleGroup(wikidataId, titles));
  }));
};
const fetchPageContent$1 = (sourceLanguage, targetLanguage, sourceTitle) => {
  return fetchSegmentedContent(sourceLanguage, targetLanguage, sourceTitle).then((segmentedContent) => new Page({
    sections: segmentedContentConverter.convertSegmentedContentToPageSections(segmentedContent, false),
    content: segmentedContent,
    pagelanguage: sourceLanguage,
    title: sourceTitle
  }));
};
const fetchSegmentedContent = (sourceLanguage, targetLanguage, sourceTitle) => {
  const cxServerParams = [sourceLanguage, targetLanguage, sourceTitle].map((param) => encodeURIComponent(param));
  const cxserverAPI = siteMapper.getCXServerUrl(`/page/${cxServerParams.join("/")}`);
  return fetch(cxserverAPI).then((response) => response.json()).then((response) => response.segmentedContent);
};
const fetchNearbyPages$1 = (language) => __async(this, null, function* () {
  const coords = getUserCoordinates();
  if (!coords) {
    return Promise.resolve([]);
  }
  const params = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: defaultThumbnailSize,
    lllang: language,
    ggscoord: coords,
    ggsradius: 1e3,
    ggslimit: 3,
    ggsnamespace: mw.config.get("wgNamespaceIds")[""],
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return yield siteMapper.getApi(language).get(params).then((response) => response.query.pages).then((pages) => pages.map((page) => new Page(page))).catch((error) => []);
});
const searchPagesByTitlePrefix = (query, language) => {
  const titleQuery = query.trim();
  const params = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: titleQuery,
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: defaultThumbnailSize,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return siteMapper.getApi(language).get(params).then((response) => {
    var _a;
    return ((_a = response.query) == null ? void 0 : _a.pages) || [];
  }).then((pages) => pages.sort((page1, page2) => page1.index - page2.index).map((page) => new Page(Object.assign(page, { pagelanguage: language })))).catch((error) => []);
};
var pageApi = {
  fetchPages,
  fetchLanguageTitles: fetchLanguageTitles$1,
  fetchPageContent: fetchPageContent$1,
  fetchSegmentedContent,
  fetchNearbyPages: fetchNearbyPages$1,
  searchPagesByTitlePrefix
};
function fetchSupportedLanguageCodes$1() {
  return __async(this, null, function* () {
    return yield siteMapper.getLanguagePairs().then((response) => response.sourceLanguages);
  });
}
function fetchSupportedMTProviders(sourceLanguage, targetLanguage) {
  return __async(this, null, function* () {
    const cxserverAPI = siteMapper.getCXServerUrl(`/list/pair/${sourceLanguage}/${targetLanguage}`);
    return fetch(cxserverAPI).then((response) => response.json()).then((data) => Object.freeze(new MTProviderGroup(sourceLanguage, targetLanguage, data.mt)));
  });
}
function fetchCXServerToken() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function addWikibaseLink(sourceLanguage, targetLanguage, sourceTitle, targetTitle) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget")) {
    return Promise.resolve();
  }
  const targetWikiId = mw.config.get("wgWikiID");
  const params = {
    action: "wblinktitles",
    fromsite: targetWikiId.replace(targetLanguage, sourceLanguage),
    fromtitle: sourceTitle,
    tosite: targetWikiId,
    totitle: targetTitle
  };
  const api = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(api.postWithToken("csrf", params));
}
var siteApi = {
  fetchSupportedLanguageCodes: fetchSupportedLanguageCodes$1,
  fetchSupportedMTProviders,
  fetchCXServerToken,
  addWikibaseLink
};
function fetchPageMetadata({ getters: getters2, commit: commit2 }, { language, titles }) {
  titles = titles.filter((title) => !getters2.getPage(language, title));
  const chunkSize = 50;
  const promises = [];
  for (let i = 0; i < titles.length; i += chunkSize) {
    const titlesSubset = titles.slice(i, i + chunkSize);
    const promise = pageApi.fetchPages(language, titlesSubset).then((metadataList) => metadataList.forEach((page) => commit2("addPage", page)));
    promises.push(promise);
  }
  return Promise.all(promises);
}
function fetchLanguageTitles({ commit: commit2, getters: getters2 }, { language, title }) {
  if (getters2.getLanguageTitleGroup(language, title)) {
    return;
  }
  pageApi.fetchLanguageTitles(language, title).then((languageTitleGroup) => languageTitleGroup && commit2("addLanguageTitleGroup", languageTitleGroup));
}
function fetchSupportedLanguageCodes(_0) {
  return __async(this, arguments, function* ({ commit: commit2, state: state2 }) {
    if (!state2.supportedLanguageCodes.length && !state2.supportedLanguageCodesRequested) {
      commit2("setSupportedLanguageCodesRequested", true);
      const languageCodes = yield siteApi.fetchSupportedLanguageCodes();
      commit2("setSupportedLanguageCodes", languageCodes);
    }
  });
}
function fetchPageContent(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, getters: getters2, dispatch: dispatch2 }, { sourceLanguage, targetLanguage, sourceTitle }) {
    let existingPage = getters2.getPage(sourceLanguage, sourceTitle);
    if (existingPage && existingPage.content) {
      return;
    }
    const fetchedPage = yield pageApi.fetchPageContent(sourceLanguage, targetLanguage, sourceTitle);
    if (!existingPage) {
      commit2("addPage", fetchedPage);
    } else if (!existingPage.content) {
      existingPage.content = fetchedPage.content;
      commit2("setPageSections", {
        page: existingPage,
        sections: fetchedPage.sections
      });
    }
  });
}
function resolvePageContentReferences({ getters: getters2, commit: commit2 }, { sourceLanguage, sourceTitle }) {
  const existingPage = getters2.getPage(sourceLanguage, sourceTitle);
  if (!existingPage) {
    return;
  }
  return new Promise((resolve2) => {
    setTimeout(() => {
      commit2("setPageSections", {
        page: existingPage,
        sections: segmentedContentConverter.convertSegmentedContentToPageSections(existingPage.content, true)
      });
      resolve2();
    }, 0);
  });
}
function fetchMTProviders(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, getters: getters2 }, { sourceLanguage, targetLanguage }) {
    if (getters2.getSupportedMTProviders(sourceLanguage, targetLanguage).length) {
      return;
    }
    const mtProviderGroup = yield siteApi.fetchSupportedMTProviders(sourceLanguage, targetLanguage);
    commit2("addMtProviderGroup", mtProviderGroup);
  });
}
function fetchNearbyPages(_0) {
  return __async(this, arguments, function* ({ commit: commit2, rootState, state: state2 }) {
    var _a;
    const { sourceLanguage } = rootState.application;
    if ((_a = state2.nearbyPages[sourceLanguage]) == null ? void 0 : _a.length) {
      return;
    }
    const pages = yield pageApi.fetchNearbyPages(sourceLanguage);
    commit2("addNearbyPages", { language: sourceLanguage, pages });
  });
}
var actions$1 = {
  fetchLanguageTitles,
  fetchMTProviders,
  fetchNearbyPages,
  fetchPageContent,
  fetchPageMetadata,
  fetchSupportedLanguageCodes,
  resolvePageContentReferences
};
var mutations$1 = {
  addPage(state2, page) {
    state2.pages.push(page);
  },
  addLanguageTitleGroup(state2, group) {
    state2.languageTitleGroups.push(group);
  },
  setSupportedLanguageCodes(state2, languageCodes) {
    state2.supportedLanguageCodes = languageCodes;
  },
  addMtProviderGroup(state2, mtProviderGroup) {
    state2.supportedMTProviderGroups.push(mtProviderGroup);
  },
  setPageSections(state2, { page, sections }) {
    page.sections = sections;
  },
  setLanguagesRequested(state2, value) {
    state2.languagesRequested = value;
  },
  setSupportedLanguageCodesRequested(state2, value) {
    state2.supportedLanguageCodesRequested = value;
  },
  addNearbyPages(state2, { language, pages }) {
    state2.nearbyPages[language] = pages;
  }
};
var mediawiki = {
  namespaced: true,
  state: state$1,
  getters: getters$1,
  actions: actions$1,
  mutations: mutations$1
};
var state = {
  currentSectionSuggestion: null,
  currentSourceSection: null,
  currentMTProvider: "",
  sourceLanguage: null,
  targetLanguage: null,
  publishTarget: "NEW_SECTION",
  translationInProgress: false,
  cxServerToken: null,
  publishFeedbackMessages: []
};
var getters = {
  getCurrentPage: (state2, getters2, rootState, rootGetters) => {
    var _a, _b;
    return rootGetters["mediawiki/getPage"]((_a = state2.currentSectionSuggestion) == null ? void 0 : _a.sourceLanguage, (_b = state2.currentSectionSuggestion) == null ? void 0 : _b.sourceTitle);
  },
  getCurrentTargetPage: (state2, getters2, rootState, rootGetters) => rootGetters["mediawiki/getPage"](state2.currentSectionSuggestion.targetLanguage, state2.currentSectionSuggestion.targetTitle),
  getCurrentSourceSectionTitle: (state2) => {
    var _a;
    return ((_a = state2.currentSourceSection) == null ? void 0 : _a.originalTitle) || "";
  },
  getCurrentSourceSectionAnchor: (state2, getters2) => (getters2.getCurrentSourceSectionTitle || "").replace(/ /g, "_"),
  isCurrentSourceSectionMissing: (state2, getters2) => {
    var _a;
    return (_a = state2.currentSectionSuggestion) == null ? void 0 : _a.missingSections.hasOwnProperty(getters2.getCurrentSourceSectionTitle);
  },
  isCurrentSourceSectionPresent: (state2, getters2) => {
    var _a;
    return (_a = state2.currentSectionSuggestion) == null ? void 0 : _a.presentSections.hasOwnProperty(getters2.getCurrentSourceSectionTitle);
  },
  getCurrentProposedTranslation: (state2) => {
    const { currentSourceSection, currentMTProvider } = state2;
    return currentSourceSection == null ? void 0 : currentSourceSection.getProposedTranslationByMtProvider(currentMTProvider);
  },
  getCurrentLanguageTitleGroup: (state2, getters2, rootState, rootGetters) => {
    var _a, _b;
    return rootGetters["mediawiki/getLanguageTitleGroup"]((_a = state2.currentSectionSuggestion) == null ? void 0 : _a.sourceLanguage, (_b = state2.currentSectionSuggestion) == null ? void 0 : _b.sourceTitle);
  },
  getCurrentPageSuggestions: (state2, getters2, rootState, rootGetters) => rootGetters["suggestions/getPageSuggestionsForPair"](state2.sourceLanguage, state2.targetLanguage),
  getCurrentSectionSuggestions: (state2, getters2, rootState, rootGetters) => rootGetters["suggestions/getSectionSuggestionsForPair"](state2.sourceLanguage, state2.targetLanguage),
  getCurrentPublishedTranslations: (state2, getters2, rootState, rootGetters) => rootGetters["translator/getPublishedTranslationsForLanguagePair"](state2.sourceLanguage, state2.targetLanguage),
  getSectionSuggestionsSliceByIndex: (state2, getters2, rootState) => (sliceIndex) => getters2.getCurrentSectionSuggestions.slice(rootState.suggestions.maxSuggestionsPerSlice * sliceIndex, rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)),
  getPageSuggestionsSliceByIndex: (state2, getters2, rootState) => (sliceIndex) => getters2.getCurrentPageSuggestions.slice(rootState.suggestions.maxSuggestionsPerSlice * sliceIndex, rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)),
  isPublishingDisabled: (state2) => state2.publishFeedbackMessages.some((message) => message.isError),
  isSandboxTarget: (state2) => state2.publishTarget === "SANDBOX_SECTION"
};
const getCXServerToken = (_0) => __async(this, [_0], function* ({ dispatch: dispatch2, state: state2, commit: commit2 }) {
  var _a, _b;
  if (!state2.cxServerToken) {
    yield siteApi.fetchCXServerToken().then((token) => {
      if (token.age <= 30) {
        token.age = 3600;
      }
      const now3 = Math.floor(Date.now() / 1e3);
      token.refreshAt = now3 + token.age - 30;
      commit2("setCXServerToken", token);
    }, (errorCode) => {
      if (errorCode === "token-impossible") {
        const now3 = Math.floor(Date.now() / 1e3);
        commit2("setCXServerToken", { jwt: "", refreshAt: now3 + 3600 * 10 });
      }
    });
  }
  const now2 = Math.floor(Date.now() / 1e3);
  if (((_a = state2.cxServerToken) == null ? void 0 : _a.refreshAt) <= now2) {
    commit2("setCXServerToken", null);
    return dispatch2("getCXServerToken");
  }
  return (_b = state2.cxServerToken) == null ? void 0 : _b.jwt;
});
function startFavoriteSectionTranslation(_0, _1) {
  return __async(this, arguments, function* ({ dispatch: dispatch2 }, favorite) {
    const suggestion = yield dispatch2("suggestions/loadSectionSuggestion", {
      sourceLanguage: favorite.sourceLanguage,
      targetLanguage: favorite.targetLanguage,
      sourceTitle: favorite.title
    }, { root: true });
    dispatch2("initializeSectionTranslation", suggestion);
  });
}
function initializeSectionTranslation({ commit: commit2, dispatch: dispatch2 }, suggestion) {
  dispatch2("getCXServerToken");
  commit2("setCurrentSectionSuggestion", suggestion);
}
function updateSourceLanguage(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, state: state2, getters: getters2, dispatch: dispatch2 }, newSourceLanguage) {
    if (newSourceLanguage === state2.targetLanguage) {
      window.location.href = siteMapper.getCXUrl(null, null, newSourceLanguage, state2.sourceLanguage, {});
      return;
    }
    commit2("setSourceLanguage", newSourceLanguage);
    if (!state2.currentSectionSuggestion) {
      dispatch2("suggestions/initializeSuggestions", {}, { root: true });
      return;
    }
    const sourceTitle = getters2.getCurrentLanguageTitleGroup.getTitleForLanguage(state2.sourceLanguage);
    let suggestion = new SectionSuggestion({
      sourceLanguage: state2.sourceLanguage,
      targetLanguage: state2.targetLanguage,
      sourceTitle,
      missing: {}
    });
    if (getters2.getCurrentLanguageTitleGroup.hasLanguage(state2.targetLanguage)) {
      suggestion = yield dispatch2("suggestions/loadSectionSuggestion", suggestion, { root: true });
    }
    dispatch2("initializeSectionTranslation", suggestion);
  });
}
function updateTargetLanguage(_0, _1) {
  return __async(this, arguments, function* ({ state: state2, dispatch: dispatch2, commit: commit2 }, newTargetLanguage) {
    var _a;
    const sourceLanguage = newTargetLanguage === state2.sourceLanguage ? state2.targetLanguage : state2.sourceLanguage;
    window.location.href = siteMapper.getCXUrl((_a = state2.currentSectionSuggestion) == null ? void 0 : _a.sourceTitle, null, sourceLanguage, newTargetLanguage, { sx: true });
  });
}
function fetchCurrentSectionSuggestionLanguageTitles(_0) {
  return __async(this, arguments, function* ({
    dispatch: dispatch2,
    state: state2
  }) {
    const { sourceLanguage, sourceTitle } = state2.currentSectionSuggestion;
    const payload = { language: sourceLanguage, title: sourceTitle };
    yield dispatch2("mediawiki/fetchLanguageTitles", payload, { root: true });
  });
}
function selectPageSectionByTitle(_0, _1) {
  return __async(this, arguments, function* ({ state: state2, commit: commit2, dispatch: dispatch2, getters: getters2 }, sectionTitle) {
    const suggestion = state2.currentSectionSuggestion;
    const page = getters2.getCurrentPage;
    const setCurrentSectionByTitle = () => {
      const section = page.getSectionByTitle(sectionTitle);
      commit2("setCurrentSourceSection", section);
    };
    if (!page.getSectionByTitle(sectionTitle)) {
      yield dispatch2("mediawiki/fetchPageContent", suggestion, { root: true });
      dispatch2("mediawiki/resolvePageContentReferences", suggestion, {
        root: true
      }).then(() => setCurrentSectionByTitle());
    }
    setCurrentSectionByTitle();
  });
}
function selectPageSectionByIndex(_0, _1) {
  return __async(this, arguments, function* ({ state: state2, commit: commit2, dispatch: dispatch2, getters: getters2 }, index) {
    var _a;
    const suggestion = state2.currentSectionSuggestion;
    const page = getters2.getCurrentPage;
    const setCurrentSectionByIndex = () => {
      var _a2;
      const section = (_a2 = page.sections) == null ? void 0 : _a2[index];
      if (index === 0) {
        section.proposedTitleTranslations[MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY] = page.title;
      }
      commit2("setCurrentSourceSection", section);
    };
    if (!((_a = page.sections) == null ? void 0 : _a[index])) {
      yield dispatch2("mediawiki/fetchPageContent", suggestion, { root: true });
      dispatch2("mediawiki/resolvePageContentReferences", suggestion, {
        root: true
      }).then(() => setCurrentSectionByIndex());
    }
    setCurrentSectionByIndex();
  });
}
function selectTranslationUnitById(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, dispatch: dispatch2, state: state2 }, id) {
    const { currentSourceSection, currentMTProvider } = state2;
    currentSourceSection.selectTranslationUnitById(id);
    yield dispatch2("translateTranslationUnitById", {
      id,
      provider: currentMTProvider
    });
    const { followingTranslationUnit } = currentSourceSection;
    if (followingTranslationUnit) {
      yield dispatch2("translateTranslationUnitById", {
        id: followingTranslationUnit.id,
        provider: currentMTProvider
      });
    }
  });
}
function applyProposedTranslationToSelectedTranslationUnit({
  dispatch: dispatch2,
  getters: getters2,
  commit: commit2,
  state: state2
}) {
  commit2("setTranslationInProgress", true);
  const translation = getters2.getCurrentProposedTranslation;
  const { currentSourceSection } = state2;
  currentSourceSection.setTranslationForSelectedTranslationUnit(translation);
  dispatch2("selectNextTranslationUnit");
}
function applyEditedTranslationToSelectedTranslationUnit(_0, _1) {
  return __async(this, arguments, function* ({ state: state2, dispatch: dispatch2, commit: commit2 }, translation) {
    commit2("setTranslationInProgress", true);
    const div = document.createElement("div");
    div.innerHTML = translation;
    div.querySelectorAll(".sx-edit-dummy-node").forEach((el) => el.remove());
    translation = div.innerHTML;
    const { currentSourceSection, targetLanguage } = state2;
    const { selectedContentTranslationUnit } = currentSourceSection;
    if (selectedContentTranslationUnit instanceof SubSection$1) {
      const { sourceTitle, targetTitle } = state2.currentSectionSuggestion;
      const templateElement = Array.from(div.children).find((node) => isTransclusionNode(node));
      if (templateElement) {
        translation = yield translatorApi.parseTemplateWikitext(getWikitextFromTemplate(templateElement), targetLanguage, targetTitle || sourceTitle);
      }
    }
    currentSourceSection.setTranslationForSelectedTranslationUnit(translation);
    dispatch2("selectNextTranslationUnit");
  });
}
function selectNextTranslationUnit({ state: state2, dispatch: dispatch2 }) {
  const { followingTranslationUnit } = state2.currentSourceSection;
  if (!followingTranslationUnit) {
    return;
  }
  dispatch2("selectTranslationUnitById", followingTranslationUnit.id);
}
function selectPreviousTranslationUnit({ state: state2, dispatch: dispatch2 }) {
  const { selectedContentTranslationUnitIndex, contentTranslationUnits } = state2.currentSourceSection;
  const previousIndex = selectedContentTranslationUnitIndex - 1;
  let previousId = 0;
  if (previousIndex > -1) {
    previousId = contentTranslationUnits[previousIndex].id;
  }
  dispatch2("selectTranslationUnitById", previousId);
}
function initializeMTProviders(_0) {
  return __async(this, arguments, function* ({ state: state2, dispatch: dispatch2, rootGetters, commit: commit2 }) {
    const { sourceLanguage, targetLanguage } = state2.currentSectionSuggestion;
    yield dispatch2("mediawiki/fetchMTProviders", { sourceLanguage, targetLanguage }, { root: true });
    const supportedProviders = rootGetters["mediawiki/getSupportedMTProviders"](sourceLanguage, targetLanguage);
    const currentProvider = state2.currentMTProvider;
    if (currentProvider && supportedProviders.includes(currentProvider)) {
      return;
    }
    commit2("setCurrentMTProvider", supportedProviders[0]);
  });
}
function updateMTProvider({ commit: commit2, dispatch: dispatch2, state: state2 }, provider) {
  commit2("setCurrentMTProvider", provider);
  const { currentSourceSection } = state2;
  const { selectedTranslationUnitId: id } = currentSourceSection;
  dispatch2("translateTranslationUnitById", { id, provider });
}
function translateTranslationUnitById(_0, _1) {
  return __async(this, arguments, function* ({ commit: commit2, state: state2, dispatch: dispatch2 }, { id, provider }) {
    const {
      currentSectionSuggestion,
      currentSourceSection: sourceSection,
      targetLanguage
    } = state2;
    if (sourceSection.hasProposedTranslationByTranslationUnitId(id, provider)) {
      return;
    }
    const { sourceTitle, targetTitle } = currentSectionSuggestion;
    let originalContent = sourceSection.getOriginalContentByTranslationUnitId(id);
    const translationUnit = sourceSection.getContentTranslationUnitById(id);
    let proposedTranslation;
    proposedTranslation = yield dispatch2("translator/translateContent", { originalContent, provider }, { root: true });
    if (translationUnit instanceof SubSection$1) {
      const div = document.createElement("div");
      div.innerHTML = proposedTranslation;
      const templateElement = Array.from(div.children).find((node) => isTransclusionNode(node));
      if (templateElement && targetTemplateExists(templateElement)) {
        proposedTranslation = yield translatorApi.parseTemplateWikitext(getWikitextFromTemplate(templateElement), targetLanguage, targetTitle || sourceTitle);
      } else {
        proposedTranslation = "";
      }
    }
    commit2("setProposedTranslationForTranslationUnitById", {
      id,
      provider,
      proposedTranslation
    });
  });
}
function translateSelectedTranslationUnitForAllProviders({
  rootGetters,
  dispatch: dispatch2,
  state: state2
}) {
  const { sourceLanguage, targetLanguage, currentSourceSection } = state2;
  const mtProviders = rootGetters["mediawiki/getSupportedMTProviders"](sourceLanguage, targetLanguage);
  const { selectedTranslationUnitId: id } = currentSourceSection;
  mtProviders.forEach((provider) => dispatch2("translateTranslationUnitById", { id, provider }));
}
function clearCurrentSectionSuggestion({ commit: commit2 }) {
  commit2("setCurrentSectionSuggestion", null);
}
var actions = {
  applyEditedTranslationToSelectedTranslationUnit,
  applyProposedTranslationToSelectedTranslationUnit,
  clearCurrentSectionSuggestion,
  fetchCurrentSectionSuggestionLanguageTitles,
  getCXServerToken,
  initializeMTProviders,
  initializeSectionTranslation,
  selectNextTranslationUnit,
  selectPageSectionByTitle,
  selectPageSectionByIndex,
  selectPreviousTranslationUnit,
  selectTranslationUnitById,
  startFavoriteSectionTranslation,
  translateTranslationUnitById,
  translateSelectedTranslationUnitForAllProviders,
  updateMTProvider,
  updateSourceLanguage,
  updateTargetLanguage
};
const mutations = {
  clearPublishFeedbackMessages(state2) {
    state2.publishFeedbackMessages = [];
  },
  clearMTPublishFeedbackMessages(state2) {
    state2.publishFeedbackMessages = state2.publishFeedbackMessages.filter((message) => !message.isMTMessage);
  },
  addMTPublishFeedbackMessage(state2, message) {
    mutations.clearMTPublishFeedbackMessages(state2);
    state2.publishFeedbackMessages.push(message);
  },
  addPublishFeedbackMessage(state2, message) {
    state2.publishFeedbackMessages.push(message);
    state2.publishFeedbackMessages.sort((m1, m2) => +m2.isError - +m1.isError);
  },
  setCurrentSectionSuggestion(state2, suggestion) {
    state2.currentSectionSuggestion = suggestion && new SectionSuggestion(__spreadProps(__spreadValues({}, suggestion), {
      missing: (suggestion == null ? void 0 : suggestion.missingSections) || {},
      present: (suggestion == null ? void 0 : suggestion.presentSections) || {}
    }));
  },
  setCurrentSourceSection(state2, section) {
    state2.currentSourceSection = section;
  },
  setCurrentSourceSectionTitleTranslation(state2, translation) {
    state2.currentSourceSection.translatedTitle = translation;
  },
  setCurrentSourceSectionEditedTranslation(state2, translation) {
    state2.currentSourceSection.editedTranslation = translation;
  },
  setProposedTranslationForTranslationUnitById(state2, { id, provider, proposedTranslation }) {
    if (id === 0) {
      state2.currentSourceSection.proposedTitleTranslations[provider] = proposedTranslation;
      return;
    }
    const unit = state2.currentSourceSection.getContentTranslationUnitById(id);
    if (unit instanceof SubSection$1) {
      unit.blockTemplateProposedTranslations[provider] = proposedTranslation;
    } else if (unit instanceof SectionSentence) {
      unit.proposedTranslations[provider] = proposedTranslation;
    }
  },
  setCurrentMTProvider: (state2, provider) => {
    state2.currentMTProvider = provider;
  },
  setSourceLanguage: (state2, language) => {
    state2.sourceLanguage = language;
  },
  setTargetLanguage: (state2, language) => {
    state2.targetLanguage = language;
  },
  setPublishTarget: (state2, target) => {
    const validTargets = ["NEW_SECTION", "SANDBOX_SECTION"];
    if (!validTargets.includes(target)) {
      throw "Invalid publish target";
    }
    state2.publishTarget = target;
  },
  setTranslationInProgress: (state2, value) => {
    state2.translationInProgress = value;
  },
  setCXServerToken: (state2, token) => {
    state2.cxServerToken = token;
  }
};
var application = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
var store = createStore({
  modules: { translator, suggestions, mediawiki, application }
});
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
const routerKey = /* @__PURE__ */ PolySymbol("r");
const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop = () => {
};
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search: search2, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search2 + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state: state2 }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state2) {
      currentLocation.value = to;
      historyState.value = state2;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state2.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state2, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state2, "", url);
      historyState.value = state2;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state2 = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
    changeLocation(to, state2, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    const state2 = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state2, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function createWebHashHistory(base) {
  base = location.host ? base || location.pathname + location.search : "";
  if (!base.includes("#"))
    base += "#";
  return createWebHistory(base);
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  return bScore.length - aScore.length;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state2})/"${buffer}": ${message}`);
  }
  let state2 = 0;
  let previousState = state2;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state2 === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state2 === 1 || state2 === 2 || state2 === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state2 !== 2) {
      previousState = state2;
      state2 = 4;
      continue;
    }
    switch (state2) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state2 = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state2 = previousState;
        break;
      case 1:
        if (char === "(") {
          state2 = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state2 = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state2 = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state2 = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state2 === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
      i++;
    matchers.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search2) {
  const query = {};
  if (search2 === "" || search2 === "?")
    return query;
  const hasLeadingIM = search2[0] === "?";
  const searchParams = (hasLeadingIM ? search2.slice(1) : search2).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search2 = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search2 += (search2.length ? "&" : "") + key;
      }
      continue;
    }
    const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search2 += (search2.length ? "&" : "") + key;
        if (value2 != null)
          search2 += "=" + value2;
      }
    });
  }
  return search2;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers2 = [];
  function add2(handler) {
    handlers2.push(handler);
    return () => {
      const i = handlers2.indexOf(handler);
      if (i > -1)
        handlers2.splice(i, 1);
    };
  }
  function reset2() {
    handlers2 = [];
  }
  return {
    add: add2,
    list: () => handlers2,
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router2.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router2[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
        state: data,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(assign(locationAsObject(failure2.to), {
            state: data,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state2 = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state2 && state2.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(error.to, toLocation).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app2) {
      const router3 = this;
      app2.component("RouterLink", RouterLink);
      app2.component("RouterView", RouterView);
      app2.config.globalProperties.$router = router3;
      Object.defineProperty(app2.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app2.provide(routerKey, router3);
      app2.provide(routeLocationKey, reactive(reactiveRoute));
      app2.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app2.unmount;
      installedApps.add(app2);
      app2.unmount = function() {
        installedApps.delete(app2);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  return router2;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const languages = {
  aa: [
    "Latn",
    [
      "AF"
    ],
    "Qaf\xE1r af"
  ],
  ab: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0430\u0525\u0441\u0448\u04D9\u0430"
  ],
  abe: [
    "Latn",
    [
      "AM"
    ],
    "W\xF4banaki\xF4dwaw\xF4gan"
  ],
  abs: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Ambon"
  ],
  ace: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Ac\xE8h"
  ],
  acf: [
    "Latn",
    [
      "AM"
    ],
    "kw\xE9y\xF2l"
  ],
  ady: [
    "Cyrl",
    [
      "EU",
      "ME"
    ],
    "\u0430\u0434\u044B\u0433\u0430\u0431\u0437\u044D"
  ],
  "ady-cyrl": [
    "ady"
  ],
  "ady-latn": [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "Adygabze"
  ],
  aeb: [
    "aeb-arab"
  ],
  "aeb-arab": [
    "Arab",
    [
      "AF"
    ],
    "\u062A\u0648\u0646\u0633\u064A"
  ],
  "aeb-latn": [
    "Latn",
    [
      "AF"
    ],
    "T\xFBns\xEE"
  ],
  af: [
    "Latn",
    [
      "AF"
    ],
    "Afrikaans"
  ],
  agq: [
    "Latn",
    [
      "AF"
    ],
    "agh\u0268\u0302m"
  ],
  ahr: [
    "Deva",
    [
      "AS"
    ],
    "\u0905\u0939\u093F\u0930\u093E\u0923\u0940"
  ],
  ajg: [
    "Latn",
    [
      "AF"
    ],
    "ajagbe"
  ],
  ajp: [
    "Arab",
    [
      "ME"
    ],
    "\u0634\u0627\u0645\u064A"
  ],
  "ajp-arab": [
    "ajp"
  ],
  "ajp-latn": [
    "Latn",
    [
      "ME"
    ],
    "\u0161\u0101mi"
  ],
  ak: [
    "Latn",
    [
      "AF"
    ],
    "Akan"
  ],
  akz: [
    "Latn",
    [
      "AM"
    ],
    "Albaamo innaa\u026Ciilka"
  ],
  ale: [
    "Latn",
    [
      "AM",
      "AS"
    ],
    "unangam tunuu"
  ],
  "ale-cyrl": [
    "Cyrl",
    [
      "AS"
    ],
    "\u0443\u043D\u0430\u04C8\u0430\u043C \u0442\u0443\u043D\u0443\u0443"
  ],
  aln: [
    "Latn",
    [
      "EU"
    ],
    "Geg\xEB"
  ],
  alt: [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "\u0430\u043B\u0442\u0430\u0439 \u0442\u0438\u043B"
  ],
  am: [
    "Ethi",
    [
      "AF"
    ],
    "\u12A0\u121B\u122D\u129B"
  ],
  ami: [
    "Latn",
    [
      "AS"
    ],
    "Pangcah"
  ],
  an: [
    "Latn",
    [
      "EU"
    ],
    "aragon\xE9s"
  ],
  ang: [
    "Latn",
    [
      "EU"
    ],
    "\xC6nglisc"
  ],
  ann: [
    "Latn",
    [
      "AF"
    ],
    "Obolo"
  ],
  anp: [
    "Deva",
    [
      "AS"
    ],
    "\u0905\u0902\u0917\u093F\u0915\u093E"
  ],
  ar: [
    "Arab",
    [
      "AF",
      "ME"
    ],
    "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  ],
  arc: [
    "Syrc",
    [
      "ME"
    ],
    "\u0710\u072A\u0721\u071D\u0710"
  ],
  arn: [
    "Latn",
    [
      "AM"
    ],
    "mapudungun"
  ],
  aro: [
    "Latn",
    [
      "AM"
    ],
    "Araona"
  ],
  arq: [
    "Arab",
    [
      "AF",
      "ME"
    ],
    "\u062C\u0627\u0632\u0627\u064A\u0631\u064A\u0629"
  ],
  ary: [
    "Arab",
    [
      "AF",
      "ME"
    ],
    "\u0627\u0644\u062F\u0627\u0631\u062C\u0629"
  ],
  "ary-arab": [
    "ary"
  ],
  "ary-latn": [
    "Latn",
    [
      "AF",
      "ME"
    ],
    "ed-d\u0101rija"
  ],
  arz: [
    "Arab",
    [
      "AF",
      "ME"
    ],
    "\u0645\u0635\u0631\u0649"
  ],
  as: [
    "Beng",
    [
      "AS"
    ],
    "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
  ],
  ase: [
    "Sgnw",
    [
      "AM"
    ],
    "American sign language"
  ],
  ast: [
    "Latn",
    [
      "EU"
    ],
    "asturianu"
  ],
  atj: [
    "Latn",
    [
      "AM"
    ],
    "atikamekw"
  ],
  atv: [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "\u0442\xFF\u043D\u0434\xFF\u043A \u0430\u043B\u0442\u0430\u0439 \u0442\u0438\u043B"
  ],
  av: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0430\u0432\u0430\u0440"
  ],
  avk: [
    "Latn",
    [
      "WW"
    ],
    "Kotava"
  ],
  awa: [
    "Deva",
    [
      "AS"
    ],
    "\u0905\u0935\u0927\u0940"
  ],
  ay: [
    "Latn",
    [
      "AM"
    ],
    "Aymar aru"
  ],
  az: [
    "az-latn"
  ],
  "az-arab": [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u062A\u06C6\u0631\u06A9\u062C\u0647"
  ],
  "az-latn": [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "az\u0259rbaycanca"
  ],
  "az-cyrl": [
    "Cyrl",
    [
      "EU",
      "ME"
    ],
    "\u0430\u0437\u04D9\u0440\u0431\u0430\u0458\u04B9\u0430\u043D\u04B9\u0430"
  ],
  azb: [
    "az-arab"
  ],
  azj: [
    "az-latn"
  ],
  ba: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0431\u0430\u0448\u04A1\u043E\u0440\u0442\u0441\u0430"
  ],
  ban: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Bali"
  ],
  "ban-bali": [
    "Bali",
    [
      "AS",
      "PA"
    ],
    "\u1B29\u1B2E\u1B36"
  ],
  bar: [
    "Latn",
    [
      "EU"
    ],
    "Boarisch"
  ],
  bas: [
    "Latn",
    [
      "AF"
    ],
    "\u0253asa\xE1"
  ],
  "bat-smg": [
    "sgs"
  ],
  "bbc-latn": [
    "Latn",
    [
      "AS"
    ],
    "Batak Toba"
  ],
  "bbc-batk": [
    "Batk",
    [
      "AS"
    ],
    "\u1BC5\u1BD6\u1BC2\u1BF2 \u1BD6\u1BEC\u1BC5"
  ],
  bbc: [
    "bbc-latn"
  ],
  bcc: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u062C\u0647\u0644\u0633\u0631\u06CC \u0628\u0644\u0648\u0686\u06CC"
  ],
  bci: [
    "Latn",
    [
      "AF"
    ],
    "wawle"
  ],
  bcl: [
    "Latn",
    [
      "AS"
    ],
    "Bikol Central"
  ],
  bdr: [
    "Latn",
    [
      "AS"
    ],
    "Bajau Sama"
  ],
  "be-tarask": [
    "Cyrl",
    [
      "EU"
    ],
    "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F (\u0442\u0430\u0440\u0430\u0448\u043A\u0435\u0432\u0456\u0446\u0430)"
  ],
  "be-x-old": [
    "be-tarask"
  ],
  be: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
  ],
  bew: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Betawi"
  ],
  bfa: [
    "Latn",
    [
      "AF"
    ],
    "Bari"
  ],
  bft: [
    "Arab",
    [
      "AS"
    ],
    "\u0628\u0644\u062A\u06CC"
  ],
  bfq: [
    "Taml",
    [
      "AS"
    ],
    "\u0BAA\u0B9F\u0B95\u0BBE"
  ],
  bg: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
  ],
  bgn: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u0631\u0648\u0686 \u06A9\u067E\u062A\u06CC\u0646 \u0628\u0644\u0648\u0686\u06CC"
  ],
  bh: [
    "bho"
  ],
  bho: [
    "Deva",
    [
      "AS"
    ],
    "\u092D\u094B\u091C\u092A\u0941\u0930\u0940"
  ],
  bi: [
    "Latn",
    [
      "PA"
    ],
    "Bislama"
  ],
  bjn: [
    "Latn",
    [
      "AS"
    ],
    "Banjar"
  ],
  bkm: [
    "Latn",
    [
      "AF"
    ],
    "Ita\u014Bikom"
  ],
  blc: [
    "Latn",
    [
      "AM"
    ],
    "ItNuxalkmc"
  ],
  blk: [
    "Mymr",
    [
      "AS"
    ],
    "\u1015\u1021\u102D\u102F\u101D\u103A\u108F\u1018\u102C\u108F\u101E\u102C\u108F"
  ],
  bm: [
    "Latn",
    [
      "AF"
    ],
    "bamanankan"
  ],
  bn: [
    "Beng",
    [
      "AS"
    ],
    "\u09AC\u09BE\u0982\u09B2\u09BE"
  ],
  bnn: [
    "Latn",
    [
      "AS"
    ],
    "Bunun"
  ],
  bo: [
    "Tibt",
    [
      "AS"
    ],
    "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
  ],
  bpy: [
    "Beng",
    [
      "AS"
    ],
    "\u09AC\u09BF\u09B7\u09CD\u09A3\u09C1\u09AA\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09AE\u09A3\u09BF\u09AA\u09C1\u09B0\u09C0"
  ],
  bqi: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u0628\u062E\u062A\u06CC\u0627\u0631\u06CC"
  ],
  br: [
    "Latn",
    [
      "EU"
    ],
    "brezhoneg"
  ],
  brh: [
    "Latn",
    [
      "ME",
      "AS"
    ],
    "Br\xE1hu\xED"
  ],
  brx: [
    "Deva",
    [
      "AS"
    ],
    "\u092C\u0930'"
  ],
  bs: [
    "Latn",
    [
      "EU"
    ],
    "bosanski"
  ],
  btm: [
    "Latn",
    [
      "AS"
    ],
    "Mandailing"
  ],
  bto: [
    "Latn",
    [
      "AS"
    ],
    "Iriga Bicolano"
  ],
  bug: [
    "Bugi",
    [
      "AS"
    ],
    "\u1A05\u1A14 \u1A15\u1A18\u1A01\u1A17"
  ],
  bxr: [
    "Cyrl",
    [
      "AS"
    ],
    "\u0431\u0443\u0440\u044F\u0430\u0434"
  ],
  byn: [
    "Ethi",
    [
      "AF"
    ],
    "\u1265\u120A\u1295"
  ],
  bzj: [
    "Latn",
    [
      "AM"
    ],
    "Bileez Kriol"
  ],
  ca: [
    "Latn",
    [
      "EU"
    ],
    "catal\xE0"
  ],
  cak: [
    "Latn",
    [
      "AM"
    ],
    "Kaqchikel"
  ],
  cbk: [
    "Latn",
    [
      "AS"
    ],
    "Chavacano de Zamboanga"
  ],
  "cbk-zam": [
    "cbk"
  ],
  ccp: [
    "Cakm",
    [
      "AS"
    ],
    "\u{1110C}\u{1110B}\u{11134}\u{1111F}\u{11133}\u{11126}"
  ],
  cdo: [
    "Latn",
    [
      "AS"
    ],
    "M\xECng-d\u0115\u0324ng-ng\u1E73\u0304"
  ],
  "cdo-latn": [
    "Latn",
    [
      "AS"
    ],
    "M\xECng-d\u0115\u0324ng-ng\u1E73\u0304 B\xE0ng-u\xE2-c\xEA"
  ],
  "cdo-hani": [
    "Hani",
    [
      "AS"
    ],
    "\u95A9\u6771\u8A9E\uFF08\u6F22\u5B57\uFF09"
  ],
  ce: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043D\u043E\u0445\u0447\u0438\u0439\u043D"
  ],
  ceb: [
    "Latn",
    [
      "AS"
    ],
    "Cebuano"
  ],
  ch: [
    "Latn",
    [
      "PA"
    ],
    "Chamoru"
  ],
  chm: [
    "mhr"
  ],
  chn: [
    "Latn",
    [
      "AM"
    ],
    "chinuk wawa"
  ],
  cho: [
    "Latn",
    [
      "AM"
    ],
    "Choctaw"
  ],
  chr: [
    "Cher",
    [
      "AM"
    ],
    "\u13E3\u13B3\u13A9"
  ],
  chy: [
    "Latn",
    [
      "AM"
    ],
    "Tsets\xEAhest\xE2hese"
  ],
  ciw: [
    "Latn",
    [
      "AM"
    ],
    "Anishinaabemowin"
  ],
  cjy: [
    "cjy-hant"
  ],
  "cjy-hans": [
    "Hans",
    [
      "AS"
    ],
    "\u664B\u8BED\uFF08\u7B80\u5316\u5B57\uFF09"
  ],
  "cjy-hant": [
    "Hant",
    [
      "AS"
    ],
    "\u6649\u8A9E"
  ],
  ckb: [
    "Arab",
    [
      "ME"
    ],
    "\u06A9\u0648\u0631\u062F\u06CC"
  ],
  ckt: [
    "Cyrl",
    [
      "AS"
    ],
    "\u0513\u044B\u0433\u044A\u043E\u0440\u0430\u0432\u044D\u0442\u0513\u044C\u044D\u043D"
  ],
  cnh: [
    "Latn",
    [
      "AS"
    ],
    "Lai holh"
  ],
  cnr: [
    "cnr-latn"
  ],
  "cnr-cyrl": [
    "Cyrl",
    [
      "EU"
    ],
    "\u0446\u0440\u043D\u043E\u0433\u043E\u0440\u0441\u043A\u0438"
  ],
  "cnr-latn": [
    "Latn",
    [
      "EU"
    ],
    "crnogorski"
  ],
  co: [
    "Latn",
    [
      "EU"
    ],
    "corsu"
  ],
  cop: [
    "Copt",
    [
      "AF",
      "ME"
    ],
    "\u03EF\u2C99\u2C89\u2CA7\u2CA3\u2C89\u2C99\u2C9B\u0300\u2CAD\u2C8F\u2C99\u2C93"
  ],
  cps: [
    "Latn",
    [
      "AS"
    ],
    "Capice\xF1o"
  ],
  cr: [
    "Cans",
    [
      "AM"
    ],
    "\u14C0\u1426\u1403\u152D\u140D\u140F\u1423"
  ],
  "cr-cans": [
    "cr"
  ],
  "cr-latn": [
    "Latn",
    [
      "AM"
    ],
    "N\u0113hiyaw\u0113win"
  ],
  crh: [
    "Latn",
    [
      "EU"
    ],
    "q\u0131r\u0131mtatarca"
  ],
  "crh-cyrl": [
    "Cyrl",
    [
      "EU"
    ],
    "\u043A\u044A\u044B\u0440\u044B\u043C\u0442\u0430\u0442\u0430\u0440\u0434\u0436\u0430"
  ],
  "crh-latn": [
    "crh"
  ],
  cs: [
    "Latn",
    [
      "EU"
    ],
    "\u010De\u0161tina"
  ],
  csb: [
    "Latn",
    [
      "EU"
    ],
    "kasz\xEBbsczi"
  ],
  cu: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0441\u043B\u043E\u0432\u0463\u043D\u044C\u0441\u043A\u044A / \u2C14\u2C0E\u2C11\u2C02\u2C21\u2C10\u2C20\u2C14\u2C0D\u2C1F"
  ],
  cv: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0447\u04D1\u0432\u0430\u0448\u043B\u0430"
  ],
  cy: [
    "Latn",
    [
      "EU"
    ],
    "Cymraeg"
  ],
  da: [
    "Latn",
    [
      "EU"
    ],
    "dansk"
  ],
  dag: [
    "Latn",
    [
      "AF"
    ],
    "dagbanli"
  ],
  dar: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0434\u0430\u0440\u0433\u0430\u043D"
  ],
  "de-at": [
    "Latn",
    [
      "EU"
    ],
    "\xD6sterreichisches Deutsch"
  ],
  "de-ch": [
    "Latn",
    [
      "EU"
    ],
    "Schweizer Hochdeutsch"
  ],
  "de-formal": [
    "Latn",
    [
      "EU"
    ],
    "Deutsch (Sie-Form)"
  ],
  de: [
    "Latn",
    [
      "EU"
    ],
    "Deutsch"
  ],
  din: [
    "Latn",
    [
      "AF"
    ],
    "Thu\u0254\u014Bj\xE4\u014B"
  ],
  diq: [
    "Latn",
    [
      "EU",
      "AS"
    ],
    "Zazaki"
  ],
  doi: [
    "Deva",
    [
      "AS"
    ],
    "\u0921\u094B\u0917\u0930\u0940"
  ],
  dsb: [
    "Latn",
    [
      "EU"
    ],
    "dolnoserbski"
  ],
  dtp: [
    "Latn",
    [
      "AS"
    ],
    "Dusun Bundu-liwan"
  ],
  dty: [
    "Deva",
    [
      "AS"
    ],
    "\u0921\u094B\u091F\u0947\u0932\u0940"
  ],
  dv: [
    "Thaa",
    [
      "AS"
    ],
    "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0"
  ],
  dz: [
    "Tibt",
    [
      "AS"
    ],
    "\u0F47\u0F7C\u0F44\u0F0B\u0F41"
  ],
  ee: [
    "Latn",
    [
      "AF"
    ],
    "e\u028Begbe"
  ],
  egl: [
    "Latn",
    [
      "EU"
    ],
    "Emili\xE0n"
  ],
  el: [
    "Grek",
    [
      "EU"
    ],
    "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
  ],
  elm: [
    "Latn",
    [
      "AF"
    ],
    "Eleme"
  ],
  eml: [
    "Latn",
    [
      "EU"
    ],
    "emili\xE0n e rumagn\xF2l"
  ],
  "en-ca": [
    "Latn",
    [
      "AM"
    ],
    "Canadian English"
  ],
  "en-gb": [
    "Latn",
    [
      "EU",
      "AS",
      "PA"
    ],
    "British English"
  ],
  "en-simple": [
    "Latn",
    [
      "WW"
    ],
    "Simple English"
  ],
  en: [
    "Latn",
    [
      "EU",
      "AM",
      "AF",
      "ME",
      "AS",
      "PA",
      "WW"
    ],
    "English"
  ],
  eo: [
    "Latn",
    [
      "WW"
    ],
    "Esperanto"
  ],
  "es-419": [
    "Latn",
    [
      "AM"
    ],
    "espa\xF1ol de Am\xE9rica Latina"
  ],
  "es-formal": [
    "Latn",
    [
      "EU",
      "AM",
      "AF",
      "WW"
    ],
    "espa\xF1ol (formal)"
  ],
  es: [
    "Latn",
    [
      "EU",
      "AM",
      "AF",
      "WW",
      "PA"
    ],
    "espa\xF1ol"
  ],
  "es-ni": [
    "Latn",
    [
      "AM"
    ],
    "espa\xF1ol nicarag\xFCense"
  ],
  esu: [
    "Latn",
    [
      "AM"
    ],
    "Yup'ik"
  ],
  et: [
    "Latn",
    [
      "EU"
    ],
    "eesti"
  ],
  eu: [
    "Latn",
    [
      "EU"
    ],
    "euskara"
  ],
  ext: [
    "Latn",
    [
      "EU"
    ],
    "estreme\xF1u"
  ],
  eya: [
    "Latn",
    [
      "AM"
    ],
    "I\xB7ya\xB7q"
  ],
  fa: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u0641\u0627\u0631\u0633\u06CC"
  ],
  fan: [
    "Latn",
    [
      "AF"
    ],
    "Fa\u014B"
  ],
  fax: [
    "Latn",
    [
      "EU"
    ],
    "Fala"
  ],
  ff: [
    "Latn",
    [
      "AF"
    ],
    "Fulfulde"
  ],
  fi: [
    "Latn",
    [
      "EU"
    ],
    "suomi"
  ],
  fil: [
    "tl"
  ],
  fit: [
    "Latn",
    [
      "EU"
    ],
    "me\xE4nkieli"
  ],
  "fiu-vro": [
    "vro"
  ],
  fj: [
    "Latn",
    [
      "PA"
    ],
    "Na Vosa Vakaviti"
  ],
  fkv: [
    "Latn",
    [
      "EU"
    ],
    "kv\xE4\xE4ni"
  ],
  fo: [
    "Latn",
    [
      "EU"
    ],
    "f\xF8royskt"
  ],
  fon: [
    "Latn",
    [
      "AF"
    ],
    "f\u0254\u0300ngb\xE8"
  ],
  fr: [
    "Latn",
    [
      "EU",
      "AM",
      "WW"
    ],
    "fran\xE7ais"
  ],
  frc: [
    "Latn",
    [
      "AM"
    ],
    "fran\xE7ais cadien"
  ],
  frp: [
    "Latn",
    [
      "EU"
    ],
    "arpetan"
  ],
  frr: [
    "Latn",
    [
      "EU"
    ],
    "Nordfriisk"
  ],
  fuf: [
    "Latn",
    [
      "AF"
    ],
    "Fuuta Jalon"
  ],
  fur: [
    "Latn",
    [
      "EU"
    ],
    "furlan"
  ],
  fy: [
    "Latn",
    [
      "EU"
    ],
    "Frysk"
  ],
  ga: [
    "Latn",
    [
      "EU"
    ],
    "Gaeilge"
  ],
  gaa: [
    "Latn",
    [
      "AF"
    ],
    "Ga"
  ],
  gag: [
    "Latn",
    [
      "EU"
    ],
    "Gagauz"
  ],
  gah: [
    "Latn",
    [
      "AS"
    ],
    "Alekano"
  ],
  "gan-hans": [
    "Hans",
    [
      "AS"
    ],
    "\u8D63\u8BED\uFF08\u7B80\u4F53\uFF09"
  ],
  "gan-hant": [
    "gan"
  ],
  gan: [
    "Hant",
    [
      "AS"
    ],
    "\u8D1B\u8A9E"
  ],
  gbm: [
    "Deva",
    [
      "AS"
    ],
    "\u0917\u0922\u093C\u0935\u0933\u093F"
  ],
  gbz: [
    "Latn",
    [
      "AS"
    ],
    "Dari-e Mazdeyasn\u0101"
  ],
  gcf: [
    "Latn",
    [
      "AM"
    ],
    "Guadeloupean Creole French"
  ],
  gcr: [
    "Latn",
    [
      "AM"
    ],
    "kriy\xF2l gwiyannen"
  ],
  gd: [
    "Latn",
    [
      "EU"
    ],
    "G\xE0idhlig"
  ],
  gez: [
    "Ethi",
    [
      "AF"
    ],
    "\u130D\u12D5\u12DD"
  ],
  gl: [
    "Latn",
    [
      "EU"
    ],
    "galego"
  ],
  gld: [
    "Cyrl",
    [
      "AS"
    ],
    "\u043D\u0430\u0304\u043D\u0438"
  ],
  glk: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u06AF\u06CC\u0644\u06A9\u06CC"
  ],
  gn: [
    "Latn",
    [
      "AM"
    ],
    "Ava\xF1e'\u1EBD"
  ],
  gom: [
    "gom-deva"
  ],
  "gom-deva": [
    "Deva",
    [
      "AS"
    ],
    "\u0917\u094B\u0902\u092F\u091A\u0940 \u0915\u094B\u0902\u0915\u0923\u0940"
  ],
  "gom-latn": [
    "Latn",
    [
      "AS"
    ],
    "G\xF5ychi Konknni"
  ],
  gor: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Hulontalo"
  ],
  got: [
    "Goth",
    [
      "EU"
    ],
    "\u{10332}\u{1033F}\u{10344}\u{10339}\u{10343}\u{1033A}"
  ],
  gpe: [
    "Latn",
    [
      "AF"
    ],
    "Ghanaian Pidgin"
  ],
  grc: [
    "Grek",
    [
      "EU"
    ],
    "\u1F08\u03C1\u03C7\u03B1\u03AF\u03B1 \u1F11\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u1F74"
  ],
  gsw: [
    "Latn",
    [
      "EU"
    ],
    "Alemannisch"
  ],
  gu: [
    "Gujr",
    [
      "AS"
    ],
    "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
  ],
  guc: [
    "Latn",
    [
      "AM"
    ],
    "wayuunaiki"
  ],
  gum: [
    "Latn",
    [
      "AM"
    ],
    "Namtrik"
  ],
  gur: [
    "Latn",
    [
      "AF"
    ],
    "farefare"
  ],
  guw: [
    "Latn",
    [
      "AF"
    ],
    "gungbe"
  ],
  gv: [
    "Latn",
    [
      "EU"
    ],
    "Gaelg"
  ],
  ha: [
    "Latn",
    [
      "AF"
    ],
    "Hausa"
  ],
  "ha-arab": [
    "Arab",
    [
      "AF"
    ],
    "\u0647\u064E\u0648\u064F\u0633\u064E"
  ],
  "ha-latn": [
    "ha"
  ],
  hai: [
    "Latn",
    [
      "AM"
    ],
    "X\u0331aat K\xEDl"
  ],
  hak: [
    "Latn",
    [
      "AS"
    ],
    "Hak-k\xE2-fa"
  ],
  haw: [
    "Latn",
    [
      "AM",
      "PA"
    ],
    "Hawai`i"
  ],
  he: [
    "Hebr",
    [
      "ME"
    ],
    "\u05E2\u05D1\u05E8\u05D9\u05EA"
  ],
  "hak-hans": [
    "Hans",
    [
      "AS"
    ],
    "\u5BA2\u5BB6\u8BED\uFF08\u7B80\u4F53\uFF09"
  ],
  "hak-hant": [
    "Hant",
    [
      "AS"
    ],
    "\u5BA2\u5BB6\u8A9E\uFF08\u7E41\u9AD4\uFF09"
  ],
  hi: [
    "Deva",
    [
      "AS"
    ],
    "\u0939\u093F\u0928\u094D\u0926\u0940"
  ],
  hif: [
    "Latn",
    [
      "PA",
      "AS"
    ],
    "Fiji Hindi"
  ],
  "hif-deva": [
    "Deva",
    [
      "AS"
    ],
    "\u092B\u093C\u0940\u091C\u0940 \u0939\u093F\u0928\u094D\u0926\u0940"
  ],
  "hif-latn": [
    "hif"
  ],
  hil: [
    "Latn",
    [
      "AS"
    ],
    "Ilonggo"
  ],
  hne: [
    "Deva",
    [
      "AS"
    ],
    "\u091B\u0924\u094D\u0924\u0940\u0938\u0917\u0922\u093C\u0940"
  ],
  ho: [
    "Latn",
    [
      "PA"
    ],
    "Hiri Motu"
  ],
  hoc: [
    "Wara",
    [
      "AS"
    ],
    "\u{118B9}\u{118C9}\u{118C9}"
  ],
  hr: [
    "Latn",
    [
      "EU"
    ],
    "hrvatski"
  ],
  hrx: [
    "Latn",
    [
      "AM"
    ],
    "Hunsrik"
  ],
  hsb: [
    "Latn",
    [
      "EU"
    ],
    "hornjoserbsce"
  ],
  hsn: [
    "Hans",
    [
      "AS"
    ],
    "\u6E58\u8BED"
  ],
  ht: [
    "Latn",
    [
      "AM"
    ],
    "Krey\xF2l ayisyen"
  ],
  "hu-formal": [
    "Latn",
    [
      "EU"
    ],
    "Magyar (mag\xE1z\xF3)"
  ],
  hu: [
    "Latn",
    [
      "EU"
    ],
    "magyar"
  ],
  hy: [
    "Armn",
    [
      "EU",
      "ME"
    ],
    "\u0570\u0561\u0575\u0565\u0580\u0565\u0576"
  ],
  hyw: [
    "Armn",
    [
      "EU",
      "ME"
    ],
    "\u0531\u0580\u0565\u0582\u0574\u057F\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576"
  ],
  hz: [
    "Latn",
    [
      "AF"
    ],
    "Otsiherero"
  ],
  ia: [
    "Latn",
    [
      "WW"
    ],
    "interlingua"
  ],
  id: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Bahasa Indonesia"
  ],
  ie: [
    "Latn",
    [
      "WW"
    ],
    "Interlingue"
  ],
  ig: [
    "Latn",
    [
      "AF"
    ],
    "Igbo"
  ],
  ii: [
    "Yiii",
    [
      "AS"
    ],
    "\uA187\uA259"
  ],
  ik: [
    "Latn",
    [
      "AM"
    ],
    "I\xF1upiak"
  ],
  "ike-cans": [
    "Cans",
    [
      "AM"
    ],
    "\u1403\u14C4\u1483\u144E\u1450\u1466"
  ],
  "ike-latn": [
    "Latn",
    [
      "AM"
    ],
    "inuktitut"
  ],
  ilo: [
    "Latn",
    [
      "AS"
    ],
    "Ilokano"
  ],
  inh: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0433\u04C0\u0430\u043B\u0433\u04C0\u0430\u0439"
  ],
  io: [
    "Latn",
    [
      "WW"
    ],
    "Ido"
  ],
  is: [
    "Latn",
    [
      "EU"
    ],
    "\xEDslenska"
  ],
  it: [
    "Latn",
    [
      "EU"
    ],
    "italiano"
  ],
  iu: [
    "ike-cans"
  ],
  izh: [
    "Latn",
    [
      "EU"
    ],
    "i\u017Eoran keel"
  ],
  ja: [
    "Jpan",
    [
      "AS"
    ],
    "\u65E5\u672C\u8A9E"
  ],
  jam: [
    "Latn",
    [
      "AM"
    ],
    "Patois"
  ],
  jbo: [
    "Latn",
    [
      "WW"
    ],
    "lojban"
  ],
  jdt: [
    "jdt-cyrl"
  ],
  "jdt-cyrl": [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "\u0436\u0443\u0433\u044C\u0443\u0440\u0438"
  ],
  jje: [
    "Kore",
    [
      "AS"
    ],
    "\uC81C\uC8FC\uB9D0"
  ],
  jut: [
    "Latn",
    [
      "EU"
    ],
    "jysk"
  ],
  jv: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Jawa"
  ],
  "jv-java": [
    "Java",
    [
      "AS",
      "PA"
    ],
    "\uA997\uA9AE"
  ],
  ka: [
    "Geor",
    [
      "EU"
    ],
    "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
  ],
  kaa: [
    "Latn",
    [
      "AS"
    ],
    "Qaraqalpaqsha"
  ],
  kab: [
    "Latn",
    [
      "AF",
      "EU"
    ],
    "Taqbaylit"
  ],
  kac: [
    "Latn",
    [
      "AS"
    ],
    "Jinghpaw"
  ],
  "kbd-cyrl": [
    "kbd"
  ],
  "kbd-latn": [
    "Latn",
    [
      "EU"
    ],
    "Qabardjaj\u0259bza"
  ],
  kbd: [
    "Cyrl",
    [
      "EU",
      "ME"
    ],
    "\u0430\u0434\u044B\u0433\u044D\u0431\u0437\u044D"
  ],
  kbp: [
    "Latn",
    [
      "AF"
    ],
    "Kab\u0269y\u025B"
  ],
  kcg: [
    "Latn",
    [
      "AF"
    ],
    "Tyap"
  ],
  kea: [
    "Latn",
    [
      "AF"
    ],
    "kabuverdianu"
  ],
  kg: [
    "Latn",
    [
      "AF"
    ],
    "Kongo"
  ],
  kgp: [
    "Latn",
    [
      "AM"
    ],
    "Kaing\xE1ng"
  ],
  khw: [
    "Arab",
    [
      "ME",
      "AS"
    ],
    "\u06A9\u06BE\u0648\u0627\u0631"
  ],
  ki: [
    "Latn",
    [
      "AF"
    ],
    "G\u0129k\u0169y\u0169"
  ],
  kiu: [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "K\u0131rmancki"
  ],
  kj: [
    "Latn",
    [
      "AF"
    ],
    "Kwanyama"
  ],
  kjh: [
    "Cyrl",
    [
      "AS"
    ],
    "\u0445\u0430\u043A\u0430\u0441"
  ],
  kjp: [
    "Mymr",
    [
      "AS"
    ],
    "\u1016\u1060\u102F\u1036\u101C\u102D\u1000\u103A"
  ],
  kk: [
    "kk-cyrl"
  ],
  "kk-arab": [
    "Arab",
    [
      "EU",
      "AS"
    ],
    "\u0642\u0627\u0632\u0627\u0642\u0634\u0627 (\u062A\u0676\u062A\u06D5)"
  ],
  "kk-cn": [
    "kk-arab"
  ],
  "kk-cyrl": [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "\u049B\u0430\u0437\u0430\u049B\u0448\u0430"
  ],
  "kk-kz": [
    "kk-cyrl"
  ],
  "kk-latn": [
    "Latn",
    [
      "EU",
      "AS",
      "ME"
    ],
    "qazaq\u015Fa"
  ],
  "kk-tr": [
    "kk-latn"
  ],
  kl: [
    "Latn",
    [
      "AM",
      "EU"
    ],
    "kalaallisut"
  ],
  km: [
    "Khmr",
    [
      "AS"
    ],
    "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
  ],
  kn: [
    "Knda",
    [
      "AS"
    ],
    "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
  ],
  knn: [
    "Deva",
    [
      "AS"
    ],
    "\u092E\u0939\u093E\u0930\u093E\u0937\u094D\u091F\u094D\u0930\u0940\u092F \u0915\u094B\u0902\u0915\u0923\u0940"
  ],
  "ko-kp": [
    "Kore",
    [
      "AS"
    ],
    "\uC870\uC120\uB9D0"
  ],
  ko: [
    "Kore",
    [
      "AS"
    ],
    "\uD55C\uAD6D\uC5B4"
  ],
  koi: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043F\u0435\u0440\u0435\u043C \u043A\u043E\u043C\u0438"
  ],
  koy: [
    "Latn",
    [
      "AM"
    ],
    "Denaakkenaage\u02BC"
  ],
  kr: [
    "Latn",
    [
      "AF"
    ],
    "Kanuri"
  ],
  krc: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043A\u044A\u0430\u0440\u0430\u0447\u0430\u0439-\u043C\u0430\u043B\u043A\u044A\u0430\u0440"
  ],
  kri: [
    "Latn",
    [
      "AF"
    ],
    "Krio"
  ],
  krj: [
    "Latn",
    [
      "ME",
      "EU"
    ],
    "Kinaray-a"
  ],
  krl: [
    "Latn",
    [
      "EU"
    ],
    "Karjala"
  ],
  "ks-arab": [
    "Arab",
    [
      "AS"
    ],
    "\u06A9\u0672\u0634\u064F\u0631"
  ],
  "ks-deva": [
    "Deva",
    [
      "AS"
    ],
    "\u0915\u0949\u0936\u0941\u0930"
  ],
  ks: [
    "ks-arab"
  ],
  ksf: [
    "Latn",
    [
      "AF"
    ],
    "Bafia"
  ],
  ksh: [
    "Latn",
    [
      "EU"
    ],
    "Ripoarisch"
  ],
  ksw: [
    "Mymr",
    [
      "AS"
    ],
    "\u1005\u103E\u102E\u1064"
  ],
  ku: [
    "ku-latn"
  ],
  "ku-arab": [
    "Arab",
    [
      "EU",
      "ME"
    ],
    "\u0643\u0648\u0631\u062F\u064A"
  ],
  "ku-latn": [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "kurd\xEE"
  ],
  kum: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043A\u044A\u0443\u043C\u0443\u043A\u044A"
  ],
  kv: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043A\u043E\u043C\u0438"
  ],
  kw: [
    "Latn",
    [
      "EU"
    ],
    "kernowek"
  ],
  ky: [
    "Cyrl",
    [
      "AS"
    ],
    "\u043A\u044B\u0440\u0433\u044B\u0437\u0447\u0430"
  ],
  la: [
    "Latn",
    [
      "EU"
    ],
    "Latina"
  ],
  lad: [
    "lad-latn"
  ],
  "lad-latn": [
    "Latn",
    [
      "ME",
      "EU",
      "AM"
    ],
    "Ladino"
  ],
  "lad-hebr": [
    "Hebr",
    [
      "ME",
      "EU",
      "AM"
    ],
    "\u05DC\u05D0\u05D3\u05D9\u05E0\u05D5"
  ],
  lag: [
    "Latn",
    [
      "AF"
    ],
    "Kilaangi"
  ],
  lb: [
    "Latn",
    [
      "EU"
    ],
    "L\xEBtzebuergesch"
  ],
  lbe: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043B\u0430\u043A\u043A\u0443"
  ],
  lez: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043B\u0435\u0437\u0433\u0438"
  ],
  lfn: [
    "Latn",
    [
      "WW"
    ],
    "Lingua Franca Nova"
  ],
  lg: [
    "Latn",
    [
      "AF"
    ],
    "Luganda"
  ],
  li: [
    "Latn",
    [
      "EU"
    ],
    "Limburgs"
  ],
  lij: [
    "Latn",
    [
      "EU"
    ],
    "Ligure"
  ],
  liv: [
    "Latn",
    [
      "EU"
    ],
    "L\u012Bv\xF5 k\u0113\u013C"
  ],
  lki: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u0644\u06D5\u06A9\u06CC"
  ],
  lkt: [
    "Latn",
    [
      "AM"
    ],
    "Lak\u021F\xF3tiyapi"
  ],
  lld: [
    "Latn",
    [
      "EU"
    ],
    "Ladin"
  ],
  lmo: [
    "Latn",
    [
      "EU"
    ],
    "lombard"
  ],
  ln: [
    "Latn",
    [
      "AF"
    ],
    "ling\xE1la"
  ],
  lo: [
    "Laoo",
    [
      "AS"
    ],
    "\u0EA5\u0EB2\u0EA7"
  ],
  loz: [
    "Latn",
    [
      "AF"
    ],
    "Silozi"
  ],
  lt: [
    "Latn",
    [
      "EU"
    ],
    "lietuvi\u0173"
  ],
  lrc: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u0644\u06CA\u0631\u06CC \u0634\u0648\u0645\u0627\u0644\u06CC"
  ],
  ltg: [
    "Latn",
    [
      "EU"
    ],
    "latga\u013Cu"
  ],
  lud: [
    "Latn",
    [
      "EU"
    ],
    "l\xFC\xFCdi"
  ],
  lus: [
    "Latn",
    [
      "AS"
    ],
    "Mizo \u0163awng"
  ],
  lut: [
    "Latn",
    [
      "AM"
    ],
    "dx\u02B7l\u0259\u0161ucid"
  ],
  luz: [
    "Arab",
    [
      "ME"
    ],
    "\u0644\u0626\u0631\u06CC \u062F\u0648\u0659\u0645\u06CC\u0646\u06CC"
  ],
  lv: [
    "Latn",
    [
      "EU"
    ],
    "latvie\u0161u"
  ],
  lzh: [
    "Hant",
    [
      "AS"
    ],
    "\u6587\u8A00"
  ],
  lzz: [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "Lazuri"
  ],
  mad: [
    "Latn",
    [
      "AS"
    ],
    "Madhur\xE2"
  ],
  mai: [
    "Deva",
    [
      "AS"
    ],
    "\u092E\u0948\u0925\u093F\u0932\u0940"
  ],
  "map-bms": [
    "Latn",
    [
      "AS"
    ],
    "Basa Banyumasan"
  ],
  mcn: [
    "Latn",
    [
      "AF"
    ],
    "vu\u0300n ma\u0300sa\u0300na\u0300"
  ],
  mdf: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043C\u043E\u043A\u0448\u0435\u043D\u044C"
  ],
  mfe: [
    "Latn",
    [
      "AM"
    ],
    "Morisyen"
  ],
  mg: [
    "Latn",
    [
      "AF"
    ],
    "Malagasy"
  ],
  mh: [
    "Latn",
    [
      "PA"
    ],
    "Ebon"
  ],
  mhr: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043E\u043B\u044B\u043A \u043C\u0430\u0440\u0438\u0439"
  ],
  mi: [
    "Latn",
    [
      "PA"
    ],
    "M\u0101ori"
  ],
  mic: [
    "Latn",
    [
      "AM"
    ],
    "Mi'kmaq"
  ],
  min: [
    "Latn",
    [
      "AS"
    ],
    "Minangkabau"
  ],
  miq: [
    "Latn",
    [
      "AM"
    ],
    "M\xEDskitu"
  ],
  mk: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
  ],
  ml: [
    "Mlym",
    [
      "AS",
      "ME"
    ],
    "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
  ],
  mn: [
    "Cyrl",
    [
      "AS"
    ],
    "\u043C\u043E\u043D\u0433\u043E\u043B"
  ],
  "mn-cyrl": [
    "mn"
  ],
  "mn-mong": [
    "mvf"
  ],
  mnc: [
    "Mong",
    [
      "AS"
    ],
    "\u182E\u1820\u1828\u1835\u1860 \u1864\u1873\u1830\u1860\u1828"
  ],
  mni: [
    "Mtei",
    [
      "AS"
    ],
    "\uABC3\uABE4\uABC7\uABE9 \uABC2\uABE3\uABDF"
  ],
  "mni-beng": [
    "Beng",
    [
      "AS"
    ],
    "\u09AE\u09C7\u0987\u09A4\u09C7\u0987 \u09B2\u09CB\u09A8\u09CD"
  ],
  mnw: [
    "Mymr",
    [
      "AS"
    ],
    "\u1018\u102C\u101E\u102C \u1019\u1014\u103A"
  ],
  mo: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043C\u043E\u043B\u0434\u043E\u0432\u0435\u043D\u044F\u0441\u043A\u044D"
  ],
  moe: [
    "Latn",
    [
      "AM"
    ],
    "innu-aimun"
  ],
  mr: [
    "Deva",
    [
      "AS",
      "ME"
    ],
    "\u092E\u0930\u093E\u0920\u0940"
  ],
  mrh: [
    "Latn",
    [
      "AS"
    ],
    "Mara"
  ],
  mrj: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043A\u044B\u0440\u044B\u043A \u043C\u0430\u0440\u044B"
  ],
  mrv: [
    "Latn",
    [
      "PA"
    ],
    "Magareva"
  ],
  ms: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Melayu"
  ],
  "ms-arab": [
    "Arab",
    [
      "AS"
    ],
    "\u0628\u0647\u0627\u0633 \u0645\u0644\u0627\u064A\u0648"
  ],
  mt: [
    "Latn",
    [
      "EU"
    ],
    "Malti"
  ],
  mui: [
    "Latn",
    [
      "AS"
    ],
    "Musi"
  ],
  mus: [
    "Latn",
    [
      "AM"
    ],
    "Mvskoke"
  ],
  mvf: [
    "Mong",
    [
      "AS"
    ],
    "\u182E\u1823\u1829\u182D\u1823\u182F"
  ],
  mwl: [
    "Latn",
    [
      "EU"
    ],
    "Mirand\xE9s"
  ],
  mwv: [
    "Latn",
    [
      "AS"
    ],
    "Behase Mentawei"
  ],
  mww: [
    "mww-latn"
  ],
  "mww-latn": [
    "Latn",
    [
      "AS"
    ],
    "Hmoob Dawb"
  ],
  my: [
    "Mymr",
    [
      "AS"
    ],
    "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
  ],
  myv: [
    "Cyrl",
    [
      "EU"
    ],
    "\u044D\u0440\u0437\u044F\u043D\u044C"
  ],
  mzn: [
    "Arab",
    [
      "ME",
      "AS"
    ],
    "\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06CC"
  ],
  na: [
    "Latn",
    [
      "PA"
    ],
    "Dorerin Naoero"
  ],
  nah: [
    "Latn",
    [
      "AM"
    ],
    "N\u0101huatl"
  ],
  nan: [
    "Latn",
    [
      "AS"
    ],
    "B\xE2n-l\xE2m-g\xFA"
  ],
  "nan-hani": [
    "Hani",
    [
      "AS"
    ],
    "\u95A9\u5357\u8A9E\uFF08\u6F22\u5B57\uFF09"
  ],
  nap: [
    "Latn",
    [
      "EU"
    ],
    "Napulitano"
  ],
  nb: [
    "Latn",
    [
      "EU"
    ],
    "norsk (bokm\xE5l)"
  ],
  nd: [
    "Latn",
    [
      "AF"
    ],
    "siNdebele saseNyakatho"
  ],
  "nds-nl": [
    "Latn",
    [
      "EU"
    ],
    "Nedersaksisch"
  ],
  nds: [
    "Latn",
    [
      "EU"
    ],
    "Plattd\xFC\xFCtsch"
  ],
  ne: [
    "Deva",
    [
      "AS"
    ],
    "\u0928\u0947\u092A\u093E\u0932\u0940"
  ],
  "new": [
    "Deva",
    [
      "AS"
    ],
    "\u0928\u0947\u092A\u093E\u0932 \u092D\u093E\u0937\u093E"
  ],
  ng: [
    "Latn",
    [
      "AF"
    ],
    "Oshiwambo"
  ],
  nia: [
    "Latn",
    [
      "AS"
    ],
    "Li Niha"
  ],
  niu: [
    "Latn",
    [
      "PA"
    ],
    "ko e vagahau Niu\u0113"
  ],
  njo: [
    "Latn",
    [
      "AS"
    ],
    "Ao"
  ],
  "nl-informal": [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "Nederlands (informeel)"
  ],
  nl: [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "Nederlands"
  ],
  nmz: [
    "Latn",
    [
      "AF"
    ],
    "nawdm"
  ],
  nn: [
    "Latn",
    [
      "EU"
    ],
    "norsk (nynorsk)"
  ],
  no: [
    "Latn",
    [
      "EU"
    ],
    "norsk"
  ],
  nod: [
    "Lana",
    [
      "AS"
    ],
    "\u1A23\u1A74\u1A64\u1A3E\u1A6E\u1A65\u1A6C\u1A26"
  ],
  "nod-thai": [
    "Thai",
    [
      "AS"
    ],
    "\u0E04\u0E33\u0E40\u0E21\u0E37\u0E2D\u0E07"
  ],
  nog: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043D\u043E\u0433\u0430\u0439\u0448\u0430"
  ],
  nov: [
    "Latn",
    [
      "WW"
    ],
    "Novial"
  ],
  nqo: [
    "Nkoo",
    [
      "AF"
    ],
    "\u07D2\u07DE\u07CF"
  ],
  nr: [
    "Latn",
    [
      "AF"
    ],
    "isiNdebele seSewula"
  ],
  nrm: [
    "Latn",
    [
      "EU"
    ],
    "Nouormand"
  ],
  nso: [
    "Latn",
    [
      "AF"
    ],
    "Sesotho sa Leboa"
  ],
  nus: [
    "Latn",
    [
      "AF"
    ],
    "Thok Naath"
  ],
  nv: [
    "Latn",
    [
      "AM"
    ],
    "Din\xE9 bizaad"
  ],
  ny: [
    "Latn",
    [
      "AF"
    ],
    "Chi-Chewa"
  ],
  nyn: [
    "Latn",
    [
      "AF"
    ],
    "runyankore"
  ],
  nys: [
    "Latn",
    [
      "PA"
    ],
    "Nyungar"
  ],
  oc: [
    "Latn",
    [
      "EU"
    ],
    "occitan"
  ],
  ojb: [
    "Latn",
    [
      "AM"
    ],
    "Ojibwemowin"
  ],
  oka: [
    "Latn",
    [
      "AM"
    ],
    "n\u0313s\u0259l\u0313xcin\u0313"
  ],
  olo: [
    "Latn",
    [
      "AS",
      "EU"
    ],
    "livvinkarjala"
  ],
  om: [
    "Latn",
    [
      "AF"
    ],
    "Oromoo"
  ],
  ood: [
    "Latn",
    [
      "AM"
    ],
    "\u02BCO\u02BCodham ha-\xF1e\u02BCok\u012D"
  ],
  or: [
    "Orya",
    [
      "AS"
    ],
    "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
  ],
  os: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0438\u0440\u043E\u043D"
  ],
  osi: [
    "Latn",
    [
      "AS"
    ],
    "Using"
  ],
  ota: [
    "Arab",
    [
      "AS",
      "EU"
    ],
    "\u0644\u0633\u0627\u0646 \u0639\u062B\u0645\u0627\u0646\u0649"
  ],
  ovd: [
    "Latn",
    [
      "EU"
    ],
    "\xF6vdalsk"
  ],
  pa: [
    "pa-guru"
  ],
  "pa-guru": [
    "Guru",
    [
      "AS"
    ],
    "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
  ],
  pag: [
    "Latn",
    [
      "AS"
    ],
    "Pangasinan"
  ],
  pam: [
    "Latn",
    [
      "AS"
    ],
    "Kapampangan"
  ],
  pap: [
    "Latn",
    [
      "AM"
    ],
    "Papiamentu"
  ],
  "pap-aw": [
    "Latn",
    [
      "AM"
    ],
    "Papiamento"
  ],
  pbb: [
    "Latn",
    [
      "AM"
    ],
    "Nasa Yuwe"
  ],
  pcd: [
    "Latn",
    [
      "EU"
    ],
    "Picard"
  ],
  pcm: [
    "Latn",
    [
      "AF"
    ],
    "Naij\xE1"
  ],
  pdc: [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "Deitsch"
  ],
  pdt: [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "Plautdietsch"
  ],
  pfl: [
    "Latn",
    [
      "EU"
    ],
    "P\xE4lzisch"
  ],
  pi: [
    "Deva",
    [
      "AS"
    ],
    "\u092A\u093E\u0932\u093F"
  ],
  pih: [
    "Latn",
    [
      "PA"
    ],
    "Norfuk / Pitkern"
  ],
  pis: [
    "Latn",
    [
      "PA"
    ],
    "Pijin"
  ],
  pjt: [
    "Latn",
    [
      "PA"
    ],
    "Pitjantjatjara"
  ],
  pko: [
    "Latn",
    [
      "AF"
    ],
    "P\xF6koot"
  ],
  pl: [
    "Latn",
    [
      "EU"
    ],
    "polski"
  ],
  pms: [
    "Latn",
    [
      "EU"
    ],
    "Piemont\xE8is"
  ],
  pnb: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u067E\u0646\u062C\u0627\u0628\u06CC"
  ],
  pnt: [
    "Grek",
    [
      "EU"
    ],
    "\u03A0\u03BF\u03BD\u03C4\u03B9\u03B1\u03BA\u03AC"
  ],
  pov: [
    "Latn",
    [
      "AF"
    ],
    "guinensi"
  ],
  ppl: [
    "Latn",
    [
      "AM"
    ],
    "Nawat"
  ],
  prg: [
    "Latn",
    [
      "EU"
    ],
    "Pr\u016Bsiskan"
  ],
  prs: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u062F\u0631\u06CC"
  ],
  ps: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u067E\u069A\u062A\u0648"
  ],
  "pt-br": [
    "Latn",
    [
      "AM"
    ],
    "portugu\xEAs do Brasil"
  ],
  pt: [
    "Latn",
    [
      "EU",
      "AM",
      "AS",
      "PA",
      "AF",
      "WW"
    ],
    "portugu\xEAs"
  ],
  pwn: [
    "Latn",
    [
      "AS"
    ],
    "pinayuanan"
  ],
  qu: [
    "Latn",
    [
      "AM"
    ],
    "Runa Simi"
  ],
  quc: [
    "Latn",
    [
      "AM"
    ],
    "K'iche'"
  ],
  qug: [
    "Latn",
    [
      "AM"
    ],
    "Runa shimi"
  ],
  qwh: [
    "Latn",
    [
      "AM"
    ],
    "anqash qichwa"
  ],
  rag: [
    "Latn",
    [
      "AF"
    ],
    "Lologooli"
  ],
  rap: [
    "Latn",
    [
      "PA",
      "AM"
    ],
    "arero rapa nui"
  ],
  rcf: [
    "Latn",
    [
      "AF"
    ],
    "Kreol R\xE9yon\xE9"
  ],
  rej: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Jang"
  ],
  rgn: [
    "Latn",
    [
      "EU"
    ],
    "Rumagn\xF4l"
  ],
  rhg: [
    "Rohg",
    [
      "AS"
    ],
    "\u{10D0C}\u{10D1F}\u{10D07}\u{10D25}\u{10D1D}\u{10D1A}\u{10D12}\u{10D19}\u{10D1D}"
  ],
  rif: [
    "Latn",
    [
      "AF"
    ],
    "Tarifit"
  ],
  rki: [
    "Mymr",
    [
      "AS"
    ],
    "\u101B\u1001\u102D\u102F\u1004\u103A"
  ],
  rm: [
    "Latn",
    [
      "EU"
    ],
    "rumantsch"
  ],
  rmc: [
    "Latn",
    [
      "EU"
    ],
    "roma\u0148i \u010Dhib"
  ],
  rmf: [
    "Latn",
    [
      "EU"
    ],
    "kaalengo t\u0161imb"
  ],
  rmy: [
    "Latn",
    [
      "EU"
    ],
    "Romani"
  ],
  rn: [
    "Latn",
    [
      "AF"
    ],
    "Kirundi"
  ],
  ro: [
    "Latn",
    [
      "EU"
    ],
    "rom\xE2n\u0103"
  ],
  "roa-rup": [
    "rup"
  ],
  "roa-tara": [
    "Latn",
    [
      "EU"
    ],
    "tarand\xEDne"
  ],
  rtm: [
    "Latn",
    [
      "PA"
    ],
    "Faeag Rotuma"
  ],
  ru: [
    "Cyrl",
    [
      "EU",
      "AS",
      "ME"
    ],
    "\u0440\u0443\u0441\u0441\u043A\u0438\u0439"
  ],
  rue: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0440\u0443\u0441\u0438\u043D\u044C\u0441\u043A\u044B\u0439"
  ],
  rup: [
    "Latn",
    [
      "EU"
    ],
    "arm\xE3neashti"
  ],
  ruq: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0412\u043B\u0430\u0445\u0435\u0441\u0442\u0435"
  ],
  "ruq-cyrl": [
    "ruq"
  ],
  "ruq-grek": [
    "Grek",
    [
      "EU"
    ],
    "Megleno-Romanian (Greek script)"
  ],
  "ruq-latn": [
    "Latn",
    [
      "EU"
    ],
    "Vl\u0103he\u015Fte"
  ],
  rut: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043C\u044B\u0445\u0430\u04C0\u0431\u0438\u0448\u0434\u044B"
  ],
  rw: [
    "Latn",
    [
      "AF"
    ],
    "Kinyarwanda"
  ],
  rwr: [
    "Deva",
    [
      "AS"
    ],
    "\u092E\u093E\u0930\u0935\u093E\u0921\u093C\u0940"
  ],
  ryu: [
    "Kana",
    [
      "AS"
    ],
    "\u0294ucin\u0101guci"
  ],
  sa: [
    "Deva",
    [
      "AS"
    ],
    "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D"
  ],
  sah: [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "\u0441\u0430\u0445\u0430 \u0442\u044B\u043B\u0430"
  ],
  sat: [
    "Olck",
    [
      "AS"
    ],
    "\u1C65\u1C5F\u1C71\u1C5B\u1C5F\u1C72\u1C64"
  ],
  saz: [
    "Saur",
    [
      "AS"
    ],
    "\uA8B1\uA8C3\uA8AC\uA8B5\uA8AF\uA8C4\uA8A1\uA8C4\uA8AC\uA8B5"
  ],
  sc: [
    "Latn",
    [
      "EU"
    ],
    "sardu"
  ],
  scn: [
    "Latn",
    [
      "EU"
    ],
    "sicilianu"
  ],
  sco: [
    "Latn",
    [
      "EU"
    ],
    "Scots"
  ],
  sd: [
    "Arab",
    [
      "AS"
    ],
    "\u0633\u0646\u068C\u064A"
  ],
  sdc: [
    "Latn",
    [
      "EU"
    ],
    "Sassaresu"
  ],
  sdh: [
    "Arab",
    [
      "ME"
    ],
    "\u06A9\u0648\u0631\u062F\u06CC \u062E\u0648\u0627\u0631\u06AF"
  ],
  se: [
    "Latn",
    [
      "EU"
    ],
    "davvis\xE1megiella"
  ],
  ses: [
    "Latn",
    [
      "AF"
    ],
    "Koyraboro Senni"
  ],
  sei: [
    "Latn",
    [
      "AM"
    ],
    "Cmique Itom"
  ],
  sg: [
    "Latn",
    [
      "AF"
    ],
    "S\xE4ng\xF6"
  ],
  sgs: [
    "Latn",
    [
      "EU"
    ],
    "\u017Eemait\u0117\u0161ka"
  ],
  sh: [
    "Latn",
    [
      "EU"
    ],
    "srpskohrvatski"
  ],
  "shi-latn": [
    "Latn",
    [
      "AF"
    ],
    "Tacl\u1E25it"
  ],
  "shi-tfng": [
    "Tfng",
    [
      "AF"
    ],
    "\u2D5C\u2D30\u2D5B\u2D4D\u2D43\u2D49\u2D5C"
  ],
  shi: [
    "shi-latn"
  ],
  shn: [
    "Mymr",
    [
      "AS"
    ],
    "\u101C\u102D\u1075\u103A\u1088\u1010\u1086\u1038"
  ],
  "shy-latn": [
    "Latn",
    [
      "AF"
    ],
    "tacawit"
  ],
  si: [
    "Sinh",
    [
      "AS"
    ],
    "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
  ],
  simple: [
    "en-simple"
  ],
  sjd: [
    "Cyrl",
    [
      "EU"
    ],
    "\u043A\u04E3\u043B\u043B\u0442 \u0441\u0430\u0304\u043C\u044C \u043A\u04E3\u043B\u043B"
  ],
  sje: [
    "Latn",
    [
      "EU"
    ],
    "bidums\xE1megiella"
  ],
  sjo: [
    "Mong",
    [
      "AS"
    ],
    "\u1830\u185E\u182A\u185D \u1864\u185E\u1830\u1860\u1828"
  ],
  sju: [
    "Latn",
    [
      "EU"
    ],
    "ubmejes\xE1miengi\xE4lla"
  ],
  sk: [
    "Latn",
    [
      "EU"
    ],
    "sloven\u010Dina"
  ],
  sl: [
    "Latn",
    [
      "EU"
    ],
    "sloven\u0161\u010Dina"
  ],
  sli: [
    "Latn",
    [
      "EU"
    ],
    "Schl\xE4sch"
  ],
  slr: [
    "Latn",
    [
      "AS"
    ],
    "Sal\u0131r\xE7a"
  ],
  sly: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Selayar"
  ],
  "skr-arab": [
    "Arab",
    [
      "AS"
    ],
    "\u0633\u0631\u0627\u0626\u06CC\u06A9\u06CC"
  ],
  skr: [
    "skr-arab"
  ],
  srq: [
    "Latn",
    [
      "AM"
    ],
    "mbia che\xEB"
  ],
  syc: [
    "Syrc",
    [
      "ME"
    ],
    "\u0723\u0718\u072A\u071D\u071D\u0710"
  ],
  syl: [
    "Sylo",
    [
      "AS"
    ],
    "\uA80D\uA824\uA81F\uA810\uA824"
  ],
  "syl-beng": [
    "Beng",
    [
      "AS"
    ],
    "\u09B8\u09BF\u09B2\u09C7\u099F\u09BF"
  ],
  "syl-sylo": [
    "syl"
  ],
  sm: [
    "Latn",
    [
      "PA"
    ],
    "Gagana Samoa"
  ],
  sma: [
    "Latn",
    [
      "EU"
    ],
    "\xE5arjelsaemien"
  ],
  smj: [
    "Latn",
    [
      "EU"
    ],
    "julevs\xE1megiella"
  ],
  smn: [
    "Latn",
    [
      "EU"
    ],
    "anar\xE2\u0161kiel\xE2"
  ],
  sms: [
    "Latn",
    [
      "EU"
    ],
    "nu\xF5rtts\xE4\xE4\u02B9m\u01E9i\xF5ll"
  ],
  sn: [
    "Latn",
    [
      "AF"
    ],
    "chiShona"
  ],
  so: [
    "Latn",
    [
      "AF"
    ],
    "Soomaaliga"
  ],
  son: [
    "Latn",
    [
      "AF"
    ],
    "so\u014Bay"
  ],
  sq: [
    "Latn",
    [
      "EU"
    ],
    "shqip"
  ],
  sr: [
    "sr-cyrl"
  ],
  "sr-ec": [
    "sr-cyrl"
  ],
  "sr-cyrl": [
    "Cyrl",
    [
      "EU"
    ],
    "\u0441\u0440\u043F\u0441\u043A\u0438"
  ],
  "sr-el": [
    "sr-latn"
  ],
  "sr-latn": [
    "Latn",
    [
      "EU"
    ],
    "srpski"
  ],
  srn: [
    "Latn",
    [
      "AM",
      "EU"
    ],
    "Sranantongo"
  ],
  ss: [
    "Latn",
    [
      "AF"
    ],
    "SiSwati"
  ],
  st: [
    "Latn",
    [
      "AF"
    ],
    "Sesotho"
  ],
  stq: [
    "Latn",
    [
      "EU"
    ],
    "Seeltersk"
  ],
  sty: [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "\u0441\u0435\u0431\u0435\u0440\u0442\u0430\u0442\u0430\u0440"
  ],
  su: [
    "Latn",
    [
      "AS"
    ],
    "Sunda"
  ],
  sv: [
    "Latn",
    [
      "EU"
    ],
    "svenska"
  ],
  sw: [
    "Latn",
    [
      "AF"
    ],
    "Kiswahili"
  ],
  swb: [
    "Latn",
    [
      "AF"
    ],
    "Shikomoro"
  ],
  sxu: [
    "Latn",
    [
      "EU"
    ],
    "S\xE4ggssch"
  ],
  szl: [
    "Latn",
    [
      "EU"
    ],
    "\u015Bl\u016Fnski"
  ],
  szy: [
    "Latn",
    [
      "AS"
    ],
    "Sakizaya"
  ],
  ta: [
    "Taml",
    [
      "AS"
    ],
    "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
  ],
  tay: [
    "Latn",
    [
      "AS"
    ],
    "Tayal"
  ],
  tcy: [
    "Knda",
    [
      "AS"
    ],
    "\u0CA4\u0CC1\u0CB3\u0CC1"
  ],
  te: [
    "Telu",
    [
      "AS"
    ],
    "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
  ],
  tet: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "tetun"
  ],
  "tg-cyrl": [
    "Cyrl",
    [
      "AS"
    ],
    "\u0442\u043E\u04B7\u0438\u043A\u04E3"
  ],
  "tg-latn": [
    "Latn",
    [
      "AS"
    ],
    "tojik\u012B"
  ],
  tg: [
    "tg-cyrl"
  ],
  th: [
    "Thai",
    [
      "AS"
    ],
    "\u0E44\u0E17\u0E22"
  ],
  ti: [
    "Ethi",
    [
      "AF"
    ],
    "\u1275\u130D\u122D\u129B"
  ],
  tig: [
    "Ethi",
    [
      "AF"
    ],
    "\u1275\u130D\u1228"
  ],
  tk: [
    "Latn",
    [
      "AS"
    ],
    "T\xFCrkmen\xE7e"
  ],
  tkr: [
    "Cyrl",
    [
      "AS"
    ],
    "\u0446\u04C0\u0430\u04C0\u0445\u043D\u0430 \u043C\u0438\u0437"
  ],
  tl: [
    "Latn",
    [
      "AS"
    ],
    "Tagalog"
  ],
  tly: [
    "Latn",
    [
      "EU",
      "AS",
      "ME"
    ],
    "tol\u0131\u015Fi"
  ],
  "tly-cyrl": [
    "Cyrl",
    [
      "EU",
      "AS",
      "ME"
    ],
    "\u0442\u043E\u043B\u044B\u0448\u0438"
  ],
  tmr: [
    "Hebr",
    [
      "ME",
      "EU",
      "AM"
    ],
    "\u05D0\u05E8\u05DE\u05D9\u05EA \u05D1\u05D1\u05DC\u05D9\u05EA"
  ],
  tn: [
    "Latn",
    [
      "AF"
    ],
    "Setswana"
  ],
  to: [
    "Latn",
    [
      "PA"
    ],
    "lea faka-Tonga"
  ],
  tokipona: [
    "Latn",
    [
      "WW"
    ],
    "Toki Pona"
  ],
  tpi: [
    "Latn",
    [
      "PA",
      "AS"
    ],
    "Tok Pisin"
  ],
  tr: [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "T\xFCrk\xE7e"
  ],
  trp: [
    "Latn",
    [
      "AS"
    ],
    "Kokborok (Tripuri)"
  ],
  tru: [
    "Latn",
    [
      "AS"
    ],
    "\u1E6Auroyo"
  ],
  trv: [
    "Latn",
    [
      "AS"
    ],
    "Sediq Taroko"
  ],
  ts: [
    "Latn",
    [
      "AF"
    ],
    "Xitsonga"
  ],
  tsd: [
    "Grek",
    [
      "EU"
    ],
    "\u03A4\u03C3\u03B1\u03BA\u03C9\u03BD\u03B9\u03BA\u03AC"
  ],
  tt: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0442\u0430\u0442\u0430\u0440\u0447\u0430"
  ],
  "tt-cyrl": [
    "tt"
  ],
  "tt-latn": [
    "Latn",
    [
      "EU"
    ],
    "tatar\xE7a"
  ],
  ttt: [
    "Cyrl",
    [
      "AS"
    ],
    "Tati"
  ],
  tum: [
    "Latn",
    [
      "AF"
    ],
    "chiTumbuka"
  ],
  tw: [
    "Latn",
    [
      "AF"
    ],
    "Twi"
  ],
  twd: [
    "Latn",
    [
      "EU"
    ],
    "Tweants"
  ],
  ty: [
    "Latn",
    [
      "PA"
    ],
    "reo tahiti"
  ],
  tyv: [
    "Cyrl",
    [
      "AS"
    ],
    "\u0442\u044B\u0432\u0430 \u0434\u044B\u043B"
  ],
  tzl: [
    "Latn",
    [
      "WW"
    ],
    "Talossan"
  ],
  tzm: [
    "Tfng",
    [
      "AF"
    ],
    "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
  ],
  udm: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0443\u0434\u043C\u0443\u0440\u0442"
  ],
  ug: [
    "ug-arab"
  ],
  "ug-arab": [
    "Arab",
    [
      "AS"
    ],
    "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5"
  ],
  "ug-latn": [
    "Latn",
    [
      "AS"
    ],
    "uyghurche"
  ],
  "ug-cyrl": [
    "Cyrl",
    [
      "AS"
    ],
    "\u0443\u0439\u0493\u0443\u0440\u0447\u04D9"
  ],
  uk: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
  ],
  umu: [
    "Latn",
    [
      "AM"
    ],
    "Hulun\xEDixsuwaakan"
  ],
  ur: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "\u0627\u0631\u062F\u0648"
  ],
  uz: [
    "Latn",
    [
      "AS"
    ],
    "o\u02BBzbekcha"
  ],
  ve: [
    "Latn",
    [
      "AF"
    ],
    "Tshivenda"
  ],
  vai: [
    "Vaii",
    [
      "AF"
    ],
    "\uA559\uA524"
  ],
  vec: [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "v\xE8neto"
  ],
  vep: [
    "Latn",
    [
      "EU"
    ],
    "veps\xE4n kel\u2019"
  ],
  vi: [
    "Latn",
    [
      "AS"
    ],
    "Ti\u1EBFng Vi\u1EC7t"
  ],
  vls: [
    "Latn",
    [
      "EU"
    ],
    "West-Vlams"
  ],
  vmf: [
    "Latn",
    [
      "EU"
    ],
    "Mainfr\xE4nkisch"
  ],
  vmw: [
    "Latn",
    [
      "AF"
    ],
    "emakhuwa"
  ],
  vo: [
    "Latn",
    [
      "WW"
    ],
    "Volap\xFCk"
  ],
  vot: [
    "Latn",
    [
      "EU"
    ],
    "Va\u010F\u010Fa"
  ],
  vro: [
    "Latn",
    [
      "EU"
    ],
    "v\xF5ro"
  ],
  wa: [
    "Latn",
    [
      "EU"
    ],
    "walon"
  ],
  war: [
    "Latn",
    [
      "AS"
    ],
    "Winaray"
  ],
  wls: [
    "Latn",
    [
      "PA"
    ],
    "Faka'uvea"
  ],
  wo: [
    "Latn",
    [
      "AF"
    ],
    "Wolof"
  ],
  wuu: [
    "Hans",
    [
      "AS"
    ],
    "\u5434\u8BED"
  ],
  xal: [
    "Cyrl",
    [
      "EU"
    ],
    "\u0445\u0430\u043B\u044C\u043C\u0433"
  ],
  xh: [
    "Latn",
    [
      "AF"
    ],
    "isiXhosa"
  ],
  xmf: [
    "Geor",
    [
      "EU"
    ],
    "\u10DB\u10D0\u10E0\u10D2\u10D0\u10DA\u10E3\u10E0\u10D8"
  ],
  xsy: [
    "Latn",
    [
      "AS"
    ],
    "SaiSiyat"
  ],
  ydd: [
    "Hebr",
    [
      "AS",
      "EU"
    ],
    "Eastern Yiddish"
  ],
  yi: [
    "Hebr",
    [
      "ME",
      "EU",
      "AM"
    ],
    "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9"
  ],
  yo: [
    "Latn",
    [
      "AF"
    ],
    "Yor\xF9b\xE1"
  ],
  yrk: [
    "Cyrl",
    [
      "AS"
    ],
    "\u043D\u0435\u043D\u044D\u0446\u044F\u02BC \u0432\u0430\u0434\u0430"
  ],
  yrl: [
    "Latn",
    [
      "AM"
    ],
    "Nh\u1EBD\u1EBDgat\xFA"
  ],
  yua: [
    "Latn",
    [
      "AM"
    ],
    "Maaya T'aan"
  ],
  yue: [
    "Hant",
    [
      "AS"
    ],
    "\u7CB5\u8A9E"
  ],
  za: [
    "Latn",
    [
      "AS"
    ],
    "Vahcuengh"
  ],
  zea: [
    "Latn",
    [
      "EU"
    ],
    "Ze\xEAuws"
  ],
  zgh: [
    "Tfng",
    [
      "AF"
    ],
    "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C \u2D5C\u2D30\u2D4F\u2D30\u2D61\u2D30\u2D62\u2D5C"
  ],
  zh: [
    "Hans",
    [
      "AS",
      "PA",
      "AM"
    ],
    "\u4E2D\u6587"
  ],
  "zh-classical": [
    "lzh"
  ],
  "zh-cn": [
    "Hans",
    [
      "AS"
    ],
    "\u4E2D\u6587\uFF08\u4E2D\u56FD\u5927\u9646\uFF09"
  ],
  "zh-hans": [
    "Hans",
    [
      "AS",
      "PA",
      "AM"
    ],
    "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09"
  ],
  "zh-hant": [
    "Hant",
    [
      "AS",
      "PA",
      "AM"
    ],
    "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09"
  ],
  "zh-hk": [
    "Hant",
    [
      "AS"
    ],
    "\u4E2D\u6587\uFF08\u9999\u6E2F\uFF09"
  ],
  "zh-min-nan": [
    "nan"
  ],
  "zh-mo": [
    "Hant",
    [
      "AS"
    ],
    "\u4E2D\u6587\uFF08\u6FB3\u9580\uFF09"
  ],
  "zh-my": [
    "Hans",
    [
      "AS"
    ],
    "\u4E2D\u6587\uFF08\u9A6C\u6765\u897F\u4E9A\uFF09"
  ],
  "zh-sg": [
    "Hans",
    [
      "AS"
    ],
    "\u4E2D\u6587\uFF08\u65B0\u52A0\u5761\uFF09"
  ],
  "zh-tw": [
    "Hant",
    [
      "AS"
    ],
    "\u4E2D\u6587\uFF08\u53F0\u7063\uFF09"
  ],
  "zh-yue": [
    "yue"
  ],
  "zh-cdo": [
    "cdo"
  ],
  zu: [
    "Latn",
    [
      "AF"
    ],
    "isiZulu"
  ],
  zun: [
    "Latn",
    [
      "AM"
    ],
    "Shiwi'ma"
  ]
};
const scriptgroups = {
  Latin: [
    "Latn",
    "Goth"
  ],
  Greek: [
    "Grek"
  ],
  WestCaucasian: [
    "Armn",
    "Geor"
  ],
  Arabic: [
    "Arab"
  ],
  MiddleEastern: [
    "Hebr",
    "Syrc"
  ],
  African: [
    "Copt",
    "Ethi",
    "Nkoo",
    "Tfng",
    "Vaii"
  ],
  SouthAsian: [
    "Beng",
    "Cakm",
    "Deva",
    "Gujr",
    "Guru",
    "Knda",
    "Mlym",
    "Mtei",
    "Olck",
    "Orya",
    "Rohg",
    "Saur",
    "Sinh",
    "Sylo",
    "Taml",
    "Telu",
    "Tibt",
    "Thaa",
    "Wara"
  ],
  Cyrillic: [
    "Cyrl"
  ],
  CJK: [
    "Hani",
    "Hans",
    "Hant",
    "Kana",
    "Kore",
    "Jpan",
    "Yiii"
  ],
  SouthEastAsian: [
    "Bali",
    "Batk",
    "Bugi",
    "Java",
    "Khmr",
    "Laoo",
    "Lana",
    "Mymr",
    "Thai"
  ],
  Mongolian: [
    "Mong"
  ],
  SignWriting: [
    "Sgnw"
  ],
  NativeAmerican: [
    "Cher",
    "Cans"
  ],
  Special: [
    "Zyyy"
  ]
};
const rtlscripts = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
];
const regiongroups = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
};
const territories = {
  AC: [
    "en"
  ],
  AD: [
    "ca",
    "es",
    "fr"
  ],
  AE: [
    "ar",
    "en",
    "ml",
    "ps",
    "fa"
  ],
  AF: [
    "fa",
    "ps",
    "uz",
    "tk",
    "bgn",
    "ug-arab",
    "kk-arab",
    "kk-cyrl"
  ],
  AG: [
    "en",
    "pt"
  ],
  AI: [
    "en"
  ],
  AL: [
    "sq",
    "el",
    "mk"
  ],
  AM: [
    "hy",
    "ku-latn",
    "az-latn"
  ],
  AO: [
    "pt",
    "ln"
  ],
  AR: [
    "es",
    "en",
    "cy",
    "gn"
  ],
  AS: [
    "sm",
    "en"
  ],
  AT: [
    "de",
    "bar",
    "en",
    "fr",
    "it",
    "hr",
    "sl",
    "hu"
  ],
  AU: [
    "en",
    "zh-hant",
    "zh",
    "it"
  ],
  AW: [
    "nl",
    "pap",
    "en"
  ],
  AX: [
    "sv"
  ],
  AZ: [
    "az-latn",
    "az-cyrl",
    "tly",
    "ku-latn",
    "ttt",
    "tkr"
  ],
  BA: [
    "bs",
    "en",
    "hr",
    "sr-cyrl",
    "sr-latn"
  ],
  BB: [
    "en"
  ],
  BD: [
    "bn",
    "en",
    "syl",
    "rhg",
    "ccp",
    "my",
    "mni"
  ],
  BE: [
    "en",
    "nl",
    "fr",
    "de",
    "vls",
    "wa"
  ],
  BF: [
    "fr",
    "ff"
  ],
  BG: [
    "bg",
    "en",
    "ru",
    "tr",
    "de"
  ],
  BH: [
    "ar",
    "ml"
  ],
  BI: [
    "rn",
    "fr",
    "sw",
    "en"
  ],
  BJ: [
    "fr",
    "fon",
    "yo"
  ],
  BL: [
    "fr"
  ],
  BM: [
    "en"
  ],
  BN: [
    "ms",
    "zh-hant",
    "zh",
    "ms-arab",
    "en"
  ],
  BO: [
    "es",
    "qu",
    "ay",
    "gn",
    "aro"
  ],
  BQ: [
    "pap",
    "nl"
  ],
  BR: [
    "pt",
    "en",
    "de",
    "it",
    "ja",
    "es",
    "kgp",
    "ko",
    "yrl"
  ],
  BS: [
    "en"
  ],
  BT: [
    "dz",
    "ne",
    "en"
  ],
  BW: [
    "en",
    "tn",
    "af"
  ],
  BY: [
    "be",
    "ru"
  ],
  BZ: [
    "en",
    "es"
  ],
  CA: [
    "en",
    "fr",
    "it",
    "de",
    "pdt",
    "cr",
    "yi",
    "ike-cans",
    "moe",
    "atj"
  ],
  CC: [
    "ms-arab",
    "ms",
    "en"
  ],
  CD: [
    "sw",
    "fr",
    "ln",
    "kg",
    "rw"
  ],
  CF: [
    "fr",
    "sg",
    "ln"
  ],
  CG: [
    "fr",
    "ln"
  ],
  CH: [
    "de",
    "gsw",
    "en",
    "fr",
    "it",
    "lmo",
    "pt",
    "rm"
  ],
  CI: [
    "fr",
    "bci"
  ],
  CK: [
    "en"
  ],
  CL: [
    "es",
    "en",
    "arn"
  ],
  CM: [
    "fr",
    "en",
    "ff",
    "bkm",
    "bas",
    "ar",
    "ksf",
    "agq",
    "ha-arab",
    "ha"
  ],
  CN: [
    "zh",
    "wuu",
    "yue",
    "hsn",
    "hak",
    "nan",
    "gan",
    "ii",
    "ug-arab",
    "za",
    "mvf",
    "mn",
    "bo",
    "ko",
    "kk-arab",
    "kk-cyrl",
    "ky",
    "en",
    "ru",
    "vi",
    "uz",
    "lzh"
  ],
  CO: [
    "es",
    "guc",
    "yrl"
  ],
  CR: [
    "es"
  ],
  CU: [
    "es"
  ],
  CV: [
    "kea",
    "pt"
  ],
  CW: [
    "pap",
    "nl",
    "es"
  ],
  CX: [
    "en"
  ],
  CY: [
    "el",
    "en",
    "tr",
    "fr",
    "hy",
    "ar"
  ],
  CZ: [
    "cs",
    "en",
    "sk",
    "de",
    "pl"
  ],
  DE: [
    "de",
    "en",
    "fr",
    "bar",
    "nds",
    "nl",
    "it",
    "es",
    "ru",
    "vmf",
    "tr",
    "gsw",
    "da",
    "hr",
    "ku-latn",
    "el",
    "ksh",
    "pl",
    "hsb",
    "frr",
    "dsb",
    "stq",
    "pfl"
  ],
  DG: [
    "en"
  ],
  DJ: [
    "aa",
    "so",
    "ar",
    "fr"
  ],
  DK: [
    "da",
    "en",
    "de",
    "sv",
    "fo",
    "kl",
    "jut"
  ],
  DM: [
    "en"
  ],
  DO: [
    "es",
    "en"
  ],
  DZ: [
    "arq",
    "ar",
    "fr",
    "kab",
    "en"
  ],
  EA: [
    "es"
  ],
  EC: [
    "es",
    "qu",
    "qug"
  ],
  EE: [
    "et",
    "ru",
    "en",
    "fi",
    "vro"
  ],
  EG: [
    "ar",
    "arz",
    "en",
    "el"
  ],
  EH: [
    "ar"
  ],
  ER: [
    "ti",
    "en",
    "tig",
    "ar",
    "aa",
    "byn"
  ],
  ES: [
    "es",
    "en",
    "ca",
    "gl",
    "eu",
    "ast",
    "ext",
    "an"
  ],
  ET: [
    "en",
    "am",
    "om",
    "so",
    "ti",
    "aa"
  ],
  FI: [
    "fi",
    "en",
    "sv",
    "de",
    "ru",
    "et",
    "rmf",
    "se",
    "smn",
    "sms"
  ],
  FJ: [
    "en",
    "hi",
    "hif",
    "fj",
    "rtm"
  ],
  FK: [
    "en"
  ],
  FM: [
    "en"
  ],
  FO: [
    "fo"
  ],
  FR: [
    "fr",
    "en",
    "es",
    "de",
    "oc",
    "it",
    "pt",
    "pcd",
    "gsw",
    "br",
    "co",
    "ca",
    "nl",
    "eu",
    "frp",
    "ia"
  ],
  GA: [
    "fr"
  ],
  GB: [
    "en",
    "fr",
    "de",
    "sco",
    "pa-guru",
    "cy",
    "bn",
    "zh-hant",
    "zh",
    "syl",
    "el",
    "it",
    "ks-arab",
    "gd",
    "yi",
    "ml",
    "ga",
    "kw"
  ],
  GD: [
    "en"
  ],
  GE: [
    "ka",
    "xmf",
    "ru",
    "hy",
    "ab",
    "os",
    "ku-latn"
  ],
  GF: [
    "fr",
    "gcr",
    "zh-hant",
    "zh"
  ],
  GG: [
    "en"
  ],
  GH: [
    "ak",
    "en",
    "ee",
    "gur",
    "gaa",
    "ha",
    "ff"
  ],
  GI: [
    "en",
    "es"
  ],
  GL: [
    "kl",
    "da"
  ],
  GM: [
    "en",
    "ff"
  ],
  GN: [
    "fr",
    "ff",
    "nqo"
  ],
  GP: [
    "fr"
  ],
  GQ: [
    "es",
    "fan",
    "fr",
    "pt"
  ],
  GR: [
    "el",
    "en",
    "fr",
    "de",
    "pnt",
    "mk",
    "tr",
    "bg",
    "sq",
    "tsd"
  ],
  GT: [
    "es",
    "quc"
  ],
  GU: [
    "en",
    "ch"
  ],
  GW: [
    "pt",
    "ff"
  ],
  GY: [
    "en"
  ],
  HK: [
    "zh-hant",
    "zh",
    "yue",
    "en"
  ],
  HN: [
    "es",
    "en"
  ],
  HR: [
    "hr",
    "en",
    "it"
  ],
  HT: [
    "ht",
    "fr"
  ],
  HU: [
    "hu",
    "en",
    "de",
    "fr",
    "ro",
    "hr",
    "sk",
    "sl"
  ],
  IC: [
    "es"
  ],
  ID: [
    "id",
    "jv",
    "su",
    "mad",
    "ms",
    "min",
    "bew",
    "ban",
    "bug",
    "bjn",
    "ace",
    "ms-arab",
    "bbc-latn",
    "zh-hant",
    "zh",
    "rej",
    "gor",
    "sly",
    "mwv"
  ],
  IE: [
    "en",
    "ga",
    "fr"
  ],
  IL: [
    "he",
    "en",
    "ar",
    "ru",
    "ro",
    "yi",
    "pl",
    "lad-latn",
    "hu",
    "am",
    "ti",
    "ml"
  ],
  IM: [
    "en",
    "gv"
  ],
  IN: [
    "hi",
    "en",
    "bn",
    "te",
    "mr",
    "ta",
    "ur",
    "gu",
    "kn",
    "ml",
    "or",
    "pa-guru",
    "bho",
    "awa",
    "as",
    "mai",
    "hne",
    "ne",
    "sat",
    "ks-arab",
    "gom-deva",
    "gbm",
    "sd",
    "doi",
    "tcy",
    "brx",
    "mni",
    "hoc",
    "saz",
    "ccp",
    "bfq",
    "njo",
    "bo",
    "bpy",
    "bft",
    "sa",
    "dv",
    "dz"
  ],
  IO: [
    "en"
  ],
  IQ: [
    "ar",
    "en",
    "ckb",
    "az-arab",
    "az-latn",
    "fa",
    "lrc"
  ],
  IR: [
    "fa",
    "az-arab",
    "az-latn",
    "mzn",
    "glk",
    "ckb",
    "sdh",
    "tk",
    "lrc",
    "ar",
    "bqi",
    "luz",
    "lki",
    "bgn",
    "hy",
    "ps",
    "ka",
    "gbz",
    "kk-arab",
    "kk-cyrl"
  ],
  IS: [
    "is",
    "da"
  ],
  IT: [
    "it",
    "en",
    "fr",
    "sc",
    "de",
    "vec",
    "nap",
    "lij",
    "scn",
    "sl",
    "sdc",
    "fur",
    "egl",
    "ca",
    "el",
    "lmo",
    "pms",
    "hr",
    "rgn"
  ],
  JE: [
    "en"
  ],
  JM: [
    "en",
    "jam"
  ],
  JO: [
    "ar",
    "en"
  ],
  JP: [
    "ja",
    "ryu",
    "ko"
  ],
  KE: [
    "sw",
    "en",
    "ki",
    "so",
    "pko",
    "om",
    "ar",
    "pa-guru",
    "gu"
  ],
  KG: [
    "ky",
    "ru"
  ],
  KH: [
    "km"
  ],
  KI: [
    "en"
  ],
  KM: [
    "ar",
    "fr"
  ],
  KN: [
    "en"
  ],
  KP: [
    "ko"
  ],
  KR: [
    "ko"
  ],
  KW: [
    "ar"
  ],
  KY: [
    "en"
  ],
  KZ: [
    "ru",
    "kk-cyrl",
    "en",
    "de",
    "ug-cyrl",
    "ug-arab"
  ],
  LA: [
    "lo"
  ],
  LB: [
    "ar",
    "en",
    "hy",
    "ku-arab",
    "ku-latn",
    "fr"
  ],
  LC: [
    "en"
  ],
  LI: [
    "de",
    "gsw"
  ],
  LK: [
    "si",
    "ta",
    "en"
  ],
  LR: [
    "en",
    "vai",
    "ff"
  ],
  LS: [
    "st",
    "en",
    "zu",
    "ss",
    "xh"
  ],
  LT: [
    "lt",
    "ru",
    "en",
    "de",
    "sgs"
  ],
  LU: [
    "fr",
    "lb",
    "de",
    "en",
    "pt"
  ],
  LV: [
    "lv",
    "en",
    "ru",
    "ltg"
  ],
  LY: [
    "ar"
  ],
  MA: [
    "ary",
    "ar",
    "zgh",
    "fr",
    "en",
    "tzm",
    "shi-latn",
    "rif",
    "es"
  ],
  MC: [
    "fr"
  ],
  MD: [
    "ro",
    "uk",
    "bg",
    "gag",
    "ru"
  ],
  ME: [
    "sr-latn",
    "sr-cyrl",
    "sq"
  ],
  MF: [
    "fr"
  ],
  MG: [
    "mg",
    "fr",
    "en"
  ],
  MH: [
    "en",
    "mh"
  ],
  MK: [
    "mk",
    "sq",
    "tr"
  ],
  ML: [
    "bm",
    "fr",
    "ses",
    "ar"
  ],
  MM: [
    "my",
    "shn",
    "kac",
    "rhg",
    "mnw"
  ],
  MN: [
    "mn",
    "kk-arab",
    "kk-cyrl",
    "zh",
    "ru",
    "ug-cyrl",
    "ug-arab"
  ],
  MO: [
    "zh-hant",
    "zh",
    "pt",
    "en"
  ],
  MP: [
    "en",
    "ch"
  ],
  MQ: [
    "fr"
  ],
  MR: [
    "ar",
    "fr",
    "ff",
    "wo"
  ],
  MS: [
    "en"
  ],
  MT: [
    "mt",
    "en",
    "it",
    "fr"
  ],
  MU: [
    "mfe",
    "en",
    "bho",
    "ur",
    "fr",
    "ta"
  ],
  MV: [
    "dv"
  ],
  MW: [
    "en",
    "ny",
    "tum",
    "zu"
  ],
  MX: [
    "es",
    "en",
    "yua",
    "sei"
  ],
  MY: [
    "ms",
    "en",
    "zh",
    "ta",
    "jv",
    "dtp",
    "ml",
    "bug",
    "bjn"
  ],
  MZ: [
    "pt",
    "vmw",
    "ts",
    "ny",
    "sw",
    "zu"
  ],
  NA: [
    "af",
    "kj",
    "ng",
    "hz",
    "en",
    "de",
    "tn"
  ],
  NC: [
    "fr"
  ],
  NE: [
    "ha",
    "fr",
    "ar",
    "ff"
  ],
  NF: [
    "en"
  ],
  NG: [
    "en",
    "pcm",
    "ha",
    "ig",
    "yo",
    "ha-arab",
    "kcg",
    "ar",
    "ff"
  ],
  NI: [
    "es"
  ],
  NL: [
    "nl",
    "en",
    "de",
    "fr",
    "nds",
    "li",
    "fy",
    "id",
    "zea",
    "rif",
    "tr"
  ],
  NO: [
    "nb",
    "nn",
    "se"
  ],
  NP: [
    "ne",
    "mai",
    "bho",
    "new",
    "en",
    "dty",
    "awa",
    "hi",
    "bo",
    "bn"
  ],
  NR: [
    "en",
    "na"
  ],
  NU: [
    "en",
    "niu"
  ],
  NZ: [
    "en",
    "mi"
  ],
  OM: [
    "ar",
    "fa"
  ],
  PA: [
    "es",
    "en",
    "zh-hant",
    "zh"
  ],
  PE: [
    "es",
    "qu",
    "ay"
  ],
  PF: [
    "fr",
    "ty",
    "zh-hant",
    "zh"
  ],
  PG: [
    "tpi",
    "en",
    "ho"
  ],
  PH: [
    "en",
    "tl",
    "es",
    "ceb",
    "ilo",
    "hil",
    "war",
    "pam",
    "pag",
    "zh-hant",
    "zh",
    "cps",
    "krj",
    "bto"
  ],
  PK: [
    "ur",
    "pa-guru",
    "en",
    "ps",
    "sd",
    "skr-arab",
    "brh",
    "fa",
    "bgn",
    "tg-cyrl",
    "bft",
    "khw",
    "ks-arab"
  ],
  PL: [
    "pl",
    "en",
    "de",
    "ru",
    "szl",
    "be",
    "uk",
    "csb",
    "sli",
    "lt"
  ],
  PM: [
    "fr",
    "en"
  ],
  PN: [
    "en"
  ],
  PR: [
    "es",
    "en"
  ],
  PS: [
    "ar"
  ],
  PT: [
    "pt",
    "en",
    "fr",
    "es",
    "gl"
  ],
  PW: [
    "en"
  ],
  PY: [
    "gn",
    "es",
    "de"
  ],
  QA: [
    "ar",
    "fa",
    "ml"
  ],
  RE: [
    "fr",
    "rcf",
    "ta"
  ],
  RO: [
    "ro",
    "en",
    "fr",
    "es",
    "hu",
    "de",
    "tr",
    "sr-latn",
    "sr-cyrl",
    "bg",
    "el",
    "pl"
  ],
  RS: [
    "sr-cyrl",
    "sr-latn",
    "sq",
    "hu",
    "ro",
    "hr",
    "sk",
    "uk"
  ],
  RU: [
    "ru",
    "tt",
    "ba",
    "cv",
    "hy",
    "ce",
    "av",
    "udm",
    "mhr",
    "sah",
    "os",
    "kbd",
    "myv",
    "dar",
    "mdf",
    "kum",
    "kv",
    "lez",
    "krc",
    "inh",
    "tyv",
    "az-cyrl",
    "az-latn",
    "ady",
    "krl",
    "lbe",
    "koi",
    "mrj",
    "alt",
    "fi",
    "sr-latn",
    "sr-cyrl",
    "vep",
    "mn",
    "izh",
    "vot",
    "cu"
  ],
  RW: [
    "rw",
    "en",
    "fr"
  ],
  SA: [
    "ar"
  ],
  SB: [
    "en"
  ],
  SC: [
    "fr",
    "en"
  ],
  SD: [
    "ar",
    "en",
    "ha-arab",
    "ha"
  ],
  SE: [
    "sv",
    "en",
    "fi",
    "fit",
    "se",
    "yi",
    "smj",
    "sma",
    "ia"
  ],
  SG: [
    "en",
    "zh",
    "ms",
    "ta",
    "ml",
    "pa-guru"
  ],
  SH: [
    "en"
  ],
  SI: [
    "sl",
    "hr",
    "en",
    "de",
    "hu",
    "it"
  ],
  SJ: [
    "nb",
    "ru"
  ],
  SK: [
    "sk",
    "cs",
    "en",
    "de",
    "hu",
    "uk",
    "pl"
  ],
  SL: [
    "kri",
    "en",
    "ff"
  ],
  SM: [
    "it",
    "eo"
  ],
  SN: [
    "wo",
    "fr",
    "ff"
  ],
  SO: [
    "so",
    "ar",
    "sw",
    "om"
  ],
  SR: [
    "nl",
    "srn",
    "zh-hant",
    "zh"
  ],
  SS: [
    "ar",
    "en",
    "nus"
  ],
  ST: [
    "pt"
  ],
  SV: [
    "es"
  ],
  SX: [
    "en",
    "es",
    "nl"
  ],
  SY: [
    "ar",
    "ku-latn",
    "fr",
    "hy"
  ],
  SZ: [
    "en",
    "ss",
    "zu",
    "ts"
  ],
  TA: [
    "en"
  ],
  TC: [
    "en"
  ],
  TD: [
    "fr",
    "ar"
  ],
  TF: [
    "fr"
  ],
  TG: [
    "fr",
    "ee"
  ],
  TH: [
    "th",
    "en",
    "nod",
    "zh-hant",
    "zh",
    "mnw",
    "shn"
  ],
  TJ: [
    "tg-cyrl",
    "ru",
    "fa",
    "ar"
  ],
  TK: [
    "en"
  ],
  TL: [
    "pt",
    "tet"
  ],
  TM: [
    "tk",
    "ru",
    "uz",
    "ku-latn"
  ],
  TN: [
    "aeb-arab",
    "ar",
    "fr"
  ],
  TO: [
    "to",
    "en"
  ],
  TR: [
    "tr",
    "en",
    "ku-latn",
    "kbd",
    "az-latn",
    "az-arab",
    "ar",
    "bg",
    "ady",
    "kiu",
    "hy",
    "ka",
    "sr-latn",
    "sr-cyrl",
    "lzz",
    "sq",
    "ab",
    "el",
    "tru",
    "uz",
    "ky",
    "kk-cyrl"
  ],
  TT: [
    "en",
    "es"
  ],
  TV: [
    "en"
  ],
  TW: [
    "zh-hant",
    "zh",
    "trv"
  ],
  TZ: [
    "sw",
    "en",
    "lag"
  ],
  UA: [
    "uk",
    "ru",
    "pl",
    "yi",
    "rue",
    "be",
    "crh",
    "ro",
    "bg",
    "tr",
    "hu",
    "el"
  ],
  UG: [
    "sw",
    "lg",
    "nyn",
    "en",
    "rw",
    "hi"
  ],
  UM: [
    "en"
  ],
  US: [
    "en",
    "es",
    "zh-hant",
    "zh",
    "fr",
    "de",
    "tl",
    "it",
    "vi",
    "ko",
    "ru",
    "nv",
    "yi",
    "pdc",
    "haw",
    "frc",
    "chr",
    "esu",
    "cho",
    "lkt",
    "ik",
    "mus"
  ],
  UY: [
    "es"
  ],
  UZ: [
    "uz",
    "ru",
    "kaa",
    "tr"
  ],
  VA: [
    "it",
    "la"
  ],
  VC: [
    "en"
  ],
  VE: [
    "es",
    "yrl"
  ],
  VG: [
    "en"
  ],
  VI: [
    "en"
  ],
  VN: [
    "vi",
    "zh-hant",
    "zh"
  ],
  VU: [
    "bi",
    "en",
    "fr"
  ],
  WF: [
    "wls",
    "fr"
  ],
  WS: [
    "sm",
    "en"
  ],
  XK: [
    "sq",
    "aln",
    "sr-cyrl",
    "sr-latn"
  ],
  YE: [
    "ar",
    "en"
  ],
  YT: [
    "swb",
    "fr",
    "sw"
  ],
  ZA: [
    "en",
    "zu",
    "xh",
    "af",
    "nso",
    "tn",
    "st",
    "ts",
    "ss",
    "ve",
    "hi",
    "nr",
    "sw"
  ],
  ZM: [
    "en",
    "ny",
    "loz"
  ],
  ZW: [
    "sn",
    "en",
    "nd",
    "ny",
    "ve",
    "tn"
  ]
};
var require$$0 = {
  languages,
  scriptgroups,
  rtlscripts,
  regiongroups,
  territories
};
var languageData = require$$0;
function isKnown(languageCode) {
  return !!languageData.languages[languageCode];
}
function isRedirect(language) {
  return isKnown(language) && languageData.languages[language].length === 1 ? languageData.languages[language][0] : false;
}
function getLanguages() {
  return languageData.languages;
}
function getScript(language) {
  var target = isRedirect(language);
  if (target) {
    return getScript(target);
  }
  if (!isKnown(language)) {
    return "Zyyy";
  }
  return languageData.languages[language][0];
}
function getRegions(language) {
  var target = isRedirect(language);
  if (target) {
    return getRegions(target);
  }
  return isKnown(language) && languageData.languages[language][1] || "UNKNOWN";
}
function getAutonym(language) {
  var target = isRedirect(language);
  if (target) {
    return getAutonym(target);
  }
  return isKnown(language) && languageData.languages[language][2] || language;
}
function getAutonyms() {
  var language, autonymsByCode = {};
  for (language in languageData.languages) {
    if (isRedirect(language)) {
      continue;
    }
    autonymsByCode[language] = getAutonym(language);
  }
  return autonymsByCode;
}
function getLanguagesInScripts(scripts) {
  var language, i, languagesInScripts = [];
  for (language in languageData.languages) {
    if (isRedirect(language)) {
      continue;
    }
    for (i = 0; i < scripts.length; i++) {
      if (scripts[i] === getScript(language)) {
        languagesInScripts.push(language);
        break;
      }
    }
  }
  return languagesInScripts;
}
function getLanguagesInScript(script) {
  return getLanguagesInScripts([script]);
}
function getGroupOfScript(script) {
  var scriptGroup;
  for (scriptGroup in languageData.scriptgroups) {
    if (languageData.scriptgroups[scriptGroup].includes(script)) {
      return scriptGroup;
    }
  }
  return "Other";
}
function getScriptGroupOfLanguage(language) {
  return getGroupOfScript(getScript(language));
}
function getLanguagesByScriptGroup(languages2) {
  var languagesByScriptGroup = {}, language, languageIndex, resolvedRedirect, langScriptGroup;
  for (languageIndex = 0; languageIndex < languages2.length; languageIndex++) {
    language = languages2[languageIndex];
    resolvedRedirect = isRedirect(language) || language;
    langScriptGroup = getScriptGroupOfLanguage(resolvedRedirect);
    if (!languagesByScriptGroup[langScriptGroup]) {
      languagesByScriptGroup[langScriptGroup] = [];
    }
    languagesByScriptGroup[langScriptGroup].push(language);
  }
  return languagesByScriptGroup;
}
function getLanguagesByScriptGroupInRegions(regions) {
  var language, i, scriptGroup, languagesByScriptGroupInRegions = {};
  for (language in languageData.languages) {
    if (isRedirect(language)) {
      continue;
    }
    for (i = 0; i < regions.length; i++) {
      if (getRegions(language).includes(regions[i])) {
        scriptGroup = getScriptGroupOfLanguage(language);
        if (languagesByScriptGroupInRegions[scriptGroup] === void 0) {
          languagesByScriptGroupInRegions[scriptGroup] = [];
        }
        languagesByScriptGroupInRegions[scriptGroup].push(language);
        break;
      }
    }
  }
  return languagesByScriptGroupInRegions;
}
function getLanguagesByScriptGroupInRegion(region) {
  return getLanguagesByScriptGroupInRegions([region]);
}
function sortByScriptGroup(languages2) {
  var groupedLanguages, scriptGroups, i, allLanguages = [];
  groupedLanguages = getLanguagesByScriptGroup(languages2);
  scriptGroups = Object.keys(groupedLanguages).sort();
  for (i = 0; i < scriptGroups.length; i++) {
    allLanguages = allLanguages.concat(groupedLanguages[scriptGroups[i]]);
  }
  return allLanguages;
}
function sortByAutonym(a, b) {
  var autonymA = getAutonym(a) || a, autonymB = getAutonym(b) || b;
  return autonymA.toLowerCase() < autonymB.toLowerCase() ? -1 : 1;
}
function isRtl(language) {
  return languageData.rtlscripts.includes(getScript(language));
}
function getDir(language) {
  return isRtl(language) ? "rtl" : "ltr";
}
function getLanguagesInTerritory(territory) {
  return languageData.territories[territory] || [];
}
function addLanguage(code, options) {
  if (options.target) {
    languageData.languages[code] = [options.target];
  } else {
    languageData.languages[code] = [options.script, options.regions, options.autonym];
  }
}
var src = {
  addLanguage,
  getAutonym,
  getAutonyms,
  getDir,
  getGroupOfScript,
  getLanguages,
  getLanguagesByScriptGroup,
  getLanguagesByScriptGroupInRegion,
  getLanguagesByScriptGroupInRegions,
  getLanguagesInScript,
  getLanguagesInScripts,
  getLanguagesInTerritory,
  getRegions,
  getScript,
  getScriptGroupOfLanguage,
  isKnown,
  isRedirect,
  isRtl,
  sortByScriptGroup,
  sortByAutonym
};
var CXTranslationWork_vue_vue_type_style_index_0_lang = "";
const _sfc_main$X = {
  name: "CxTranslationWork",
  components: { MwThumbnail, MwIcon },
  props: {
    translation: {
      type: Translation,
      required: true
    }
  },
  data: () => ({
    mwIconEdit,
    mwIconTrash,
    mwIconArrowForward,
    mwIconArrowNext
  }),
  methods: {
    getAutonym: src.getAutonym,
    getDir: src.getDir,
    onClick(e) {
      this.$emit("click", e);
      this.startTranslation(this.translation);
    },
    startTranslation(translation) {
      siteMapper.setCXToken(translation.sourceLanguage, translation.targetLanguage, translation.sourceTitle);
      location.href = siteMapper.getCXUrl(translation.sourceTitle, translation.targetTitle, translation.sourceLanguage, translation.targetLanguage, { campaign: new mw.Uri().query.campaign });
    },
    getPage(language, title) {
      return this.$store.getters["mediawiki/getPage"](language, title);
    },
    getImage(language, title) {
      const page = this.getPage(language, title);
      return page == null ? void 0 : page.thumbnail;
    }
  }
};
const _hoisted_1$H = { class: "col shrink pe-4" };
const _hoisted_2$u = { class: "col" };
const _hoisted_3$t = { class: "cx-translation__details column justify-between ma-0" };
const _hoisted_4$l = { class: "row ma-0" };
const _hoisted_5$h = { class: "col grow" };
const _hoisted_6$9 = ["lang"];
const _hoisted_7$6 = ["lang"];
const _hoisted_8$4 = { class: "col shrink ps-2" };
const _hoisted_9$4 = { class: "row ma-0 text-small" };
const _hoisted_10$3 = { class: "cx-translation__languages col grow" };
const _hoisted_11$3 = ["dir", "textContent"];
const _hoisted_12$3 = ["dir", "textContent"];
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_thumbnail = resolveComponent("mw-thumbnail");
  const _component_mw_icon = resolveComponent("mw-icon");
  return $props.translation ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
  }, [
    createBaseVNode("div", _hoisted_1$H, [
      createVNode(_component_mw_thumbnail, {
        class: "cx-translation__thumbnail",
        thumbnail: $options.getImage($props.translation.sourceLanguage, $props.translation.sourceTitle),
        width: 84
      }, null, 8, ["thumbnail"])
    ]),
    createBaseVNode("div", _hoisted_2$u, [
      createBaseVNode("div", _hoisted_3$t, [
        createBaseVNode("div", _hoisted_4$l, [
          createBaseVNode("div", _hoisted_5$h, [
            createBaseVNode("h5", {
              class: "cx-translation__source-title pb-2",
              lang: $props.translation.sourceLanguage
            }, toDisplayString($props.translation.sourceTitle), 9, _hoisted_6$9),
            createBaseVNode("h6", {
              class: "cx-translation__target-title",
              lang: $props.translation.targetLanguage
            }, toDisplayString($props.translation.targetTitle), 9, _hoisted_7$6)
          ]),
          createBaseVNode("div", _hoisted_8$4, [
            createVNode(_component_mw_icon, {
              size: 24,
              icon: $props.translation.status === "published" ? _ctx.mwIconEdit : _ctx.mwIconTrash
            }, null, 8, ["icon"])
          ])
        ]),
        createBaseVNode("div", _hoisted_9$4, [
          createBaseVNode("div", _hoisted_10$3, [
            createBaseVNode("span", {
              class: "mw-ui-autonym",
              dir: $options.getDir($props.translation.sourceLanguage),
              textContent: toDisplayString($options.getAutonym($props.translation.sourceLanguage))
            }, null, 8, _hoisted_11$3),
            createVNode(_component_mw_icon, {
              icon: _ctx.mwIconArrowNext,
              class: "mx-1"
            }, null, 8, ["icon"]),
            createBaseVNode("span", {
              class: "mw-ui-autonym",
              dir: $options.getDir($props.translation.targetLanguage),
              textContent: toDisplayString($options.getAutonym($props.translation.targetLanguage))
            }, null, 8, _hoisted_12$3)
          ])
        ])
      ])
    ])
  ])) : createCommentVNode("", true);
}
var CxTranslationWork = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$X]]);
function search(languages2, query, searchApi) {
  return __async(this, null, function* () {
    if (!query || query.trim().length === 0) {
      return languages2;
    }
    const exactMatch = languages2.filter((code) => query.toLowerCase() === code.toLowerCase());
    if (exactMatch.length) {
      return exactMatch;
    }
    const filterResults = languages2.filter((code) => src.getAutonym(code).toLowerCase().includes(query.toLowerCase()) || src.getScript(code).toLowerCase().includes(query.toLowerCase()));
    if (filterResults.length) {
      return filterResults;
    }
    if (searchApi) {
      const searchApiResults = yield searchWithAPI(query, searchApi);
      return searchApiResults.filter((code) => languages2.includes(code));
    }
    return [];
  });
}
function searchByQuery(languages2, query, searchApi) {
  return __async(this, null, function* () {
    if (!query || query.trim().length === 0) {
      return languages2.sort(src.sortByAutonym);
    } else {
      return (yield search(languages2, query, searchApi)).sort(src.sortByAutonym);
    }
  });
}
function searchWithAPI(query, searchApi) {
  const apiURL = new URL(searchApi);
  apiURL.searchParams.set("search", query);
  return fetch(apiURL.toString()).then((response) => response.json()).then((result) => Object.keys(result.languagesearch || {}));
}
function getSearchApi() {
  const apiURL = new URL("https://en.wikipedia.org/w/api.php");
  apiURL.searchParams.set("action", "languagesearch");
  apiURL.searchParams.set("format", "json");
  apiURL.searchParams.set("origin", "*");
  apiURL.searchParams.set("formatversion", 2);
  return apiURL.toString();
}
function getSearchResultsByScript(searchResults) {
  let chunkSize;
  let languagesByScript = [...searchResults];
  const resultsCount = searchResults.length;
  if (resultsCount < 10)
    chunkSize = resultsCount;
  if (resultsCount < 30)
    chunkSize = 10;
  if (resultsCount >= 30)
    chunkSize = 15;
  const chunks = [];
  while (languagesByScript.length) {
    chunks.push(languagesByScript.splice(0, chunkSize));
  }
  return chunks;
}
function getResultsDisplayClass(searchResults) {
  const resultsCount = searchResults.length;
  if (resultsCount < 10)
    return "few-results";
  if (resultsCount < 30)
    return "some-results";
  return "many-results";
}
function autocomplete(searchQuery, searchResults) {
  const autocompletion = computed(() => {
    if (!searchResults.value.length || !searchQuery.value.trim()) {
      return "";
    }
    for (let i = 0; i < searchResults.value.length; i++) {
      const autonym = src.getAutonym(searchResults.value[i]);
      if (autonym.startsWith(searchQuery.value)) {
        return autonym;
      }
    }
    return "";
  });
  const onTabSelect = () => {
    searchQuery.value = autocompletion.value;
  };
  return {
    autocompletion,
    onTabSelect
  };
}
function keyboardNavigation(searchQuery, searchResults, suggestions2) {
  const selectedLanguage = ref("");
  const selectedIndex = ref(-1);
  const langSelectorContainer = ref(null);
  const next = () => {
    selectedIndex.value++;
    if (selectedIndex.value >= shownLanguages.value.length) {
      selectedIndex.value = 0;
    }
  };
  const shownLanguages = computed(() => !!searchQuery.value ? searchResults.value : [...suggestions2, ...searchResults.value]);
  const prev = () => {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = 0;
    }
  };
  watch(searchQuery, () => {
    selectedIndex.value = -1;
  });
  watch(selectedIndex, () => __async(this, null, function* () {
    var _a;
    if (selectedIndex.value < 0) {
      selectedLanguage.value = "";
      return;
    }
    selectedLanguage.value = shownLanguages.value[selectedIndex.value];
    (_a = langSelectorContainer.value.querySelectorAll(`.language[lang="${selectedLanguage.value}"]`)[0]) == null ? void 0 : _a.scrollIntoView(false);
  }));
  return { next, prev, langSelectorContainer, selectedLanguage };
}
function debounce(func, wait, immediate) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    if (immediate && !timeout) {
      func.apply(context, args);
    }
    if (!timeout || wait) {
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }
  };
}
var MWLanguageSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$W = {
  name: "MwLanguageSelector",
  components: {
    MwInput
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: true
    },
    languages: {
      type: Array,
      default: () => [],
      validator: (languages2) => languages2.every((language) => typeof language === "string")
    },
    suggestions: {
      type: Array,
      default: () => [],
      validator: (languages2) => languages2.every((language) => typeof language === "string")
    },
    searchAPI: {
      type: String,
      default: getSearchApi
    }
  },
  emits: ["select", "close"],
  setup(props, context) {
    const searchInputElement = ref(null);
    const searchQuery = ref("");
    const searchResults = ref([]);
    const searchResultsByScript = computed(() => getSearchResultsByScript(searchResults.value));
    const resultsDisplayClass = computed(() => getResultsDisplayClass(searchResults.value));
    const select = (language) => context.emit("select", language);
    const close = () => context.emit("close");
    const { autocompletion, onTabSelect } = autocomplete(searchQuery, searchResults);
    const { next, prev, langSelectorContainer, selectedLanguage } = keyboardNavigation(searchQuery, searchResults, props.suggestions);
    const onEnter = () => {
      if (searchQuery.value && props.languages.includes(searchQuery.value)) {
        select(searchQuery.value);
        return;
      }
      if (selectedLanguage.value) {
        select(selectedLanguage.value);
        return;
      }
      if (searchResults.value.length === 1) {
        select(searchResults.value[0]);
        return;
      }
    };
    const onQueryChange = () => __async(this, null, function* () {
      searchResults.value = yield searchByQuery(props.languages, searchQuery.value, props.searchAPI);
    });
    watch(searchQuery, debounce(onQueryChange, 300));
    onMounted(() => __async(this, null, function* () {
      if (props.autofocus) {
        setTimeout(() => searchInputElement.value.focus(), 500);
      }
      searchResults.value = yield searchByQuery(props.languages, "", props.searchAPI);
    }));
    return {
      autocompletion,
      close,
      getAutonym: src.getAutonym,
      getDir: src.getDir,
      langSelectorContainer,
      mwIconClose,
      mwIconSearch,
      next,
      onEnter,
      onTabSelect,
      prev,
      resultsDisplayClass,
      searchInputElement,
      searchQuery,
      searchResultsByScript,
      select,
      selectedLanguage
    };
  }
};
const _hoisted_1$G = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
};
const _hoisted_2$t = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" };
const _hoisted_3$s = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" };
const _hoisted_4$k = { class: "results px-3 pt-4" };
const _hoisted_5$g = { class: "results-header ps-8 pb-2" };
const _hoisted_6$8 = { class: "results-languages--suggestions pa-0 ma-0" };
const _hoisted_7$5 = ["lang", "dir", "aria-selected", "onClick", "textContent"];
const _hoisted_8$3 = { class: "results px-3 pt-4" };
const _hoisted_9$3 = {
  key: 0,
  class: "results-header ps-8 pb-2"
};
const _hoisted_10$2 = ["lang", "dir", "aria-selected", "onClick", "textContent"];
const _hoisted_11$2 = { class: "no-results px-3 py-4" };
const _hoisted_12$2 = { class: "ps-8" };
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_input = resolveComponent("mw-input");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("div", _hoisted_1$G, [
    renderSlot(_ctx.$slots, "search", {}, () => [
      createBaseVNode("div", _hoisted_2$t, [
        createVNode(_component_mw_input, {
          value: $setup.autocompletion,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.autocompletion = $event),
          icon: $setup.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        createVNode(_component_mw_input, {
          ref: "searchInputElement",
          value: $setup.searchQuery,
          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.searchQuery = $event),
          class: "mw-ui-language-selector__search pa-4",
          icon: $setup.mwIconSearch,
          "icon-size": 20,
          placeholder: $props.placeholder,
          autofocus: $props.autofocus,
          onKeydown: [
            withKeys(withModifiers($setup.onEnter, ["prevent"]), ["enter"]),
            withKeys(withModifiers($setup.next, ["prevent"]), ["down"]),
            withKeys(withModifiers($setup.prev, ["prevent"]), ["up"]),
            withKeys(withModifiers($setup.close, ["prevent"]), ["esc"]),
            withKeys(withModifiers($setup.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    createBaseVNode("section", _hoisted_3$s, [
      $props.suggestions.length && !$setup.searchQuery ? renderSlot(_ctx.$slots, "suggestions", { key: 0 }, () => [
        createBaseVNode("section", _hoisted_4$k, [
          withDirectives(createBaseVNode("p", _hoisted_5$g, null, 512), [
            [_directive_i18n, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          createBaseVNode("ul", _hoisted_6$8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.suggestions, (language) => {
              return openBlock(), createElementBlock("li", {
                key: language,
                class: normalizeClass(["language pa-2 ps-8 ma-0", language === $setup.selectedLanguage ? "language--selected" : ""]),
                lang: language,
                dir: $setup.getDir(language),
                "aria-selected": language === $setup.selectedLanguage || null,
                tabindex: "-1",
                role: "option",
                onClick: ($event) => $setup.select(language),
                textContent: toDisplayString($setup.getAutonym(language))
              }, null, 10, _hoisted_7$5);
            }), 128))
          ])
        ])
      ]) : createCommentVNode("", true),
      $setup.searchResultsByScript.length ? renderSlot(_ctx.$slots, "search", { key: 1 }, () => [
        createBaseVNode("section", _hoisted_8$3, [
          $props.suggestions.length && !$setup.searchQuery ? withDirectives((openBlock(), createElementBlock("p", _hoisted_9$3, null, 512)), [
            [_directive_i18n, void 0, "cx-sx-language-selector-all-languages"]
          ]) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.searchResultsByScript, (chunk, cindex) => {
            return openBlock(), createElementBlock("ul", {
              key: cindex,
              class: normalizeClass(["results-languages pa-0 ma-0 mb-6", $setup.resultsDisplayClass])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(chunk, (language) => {
                return openBlock(), createElementBlock("li", {
                  key: language,
                  class: normalizeClass(["language pa-2 ps-8 ma-0", language === $setup.selectedLanguage ? "language--selected" : ""]),
                  lang: language,
                  dir: $setup.getDir(language),
                  role: "option",
                  "aria-selected": language === $setup.selectedLanguage || null,
                  tabindex: "-1",
                  onClick: ($event) => $setup.select(language),
                  textContent: toDisplayString($setup.getAutonym(language))
                }, null, 10, _hoisted_10$2);
              }), 128))
            ], 2);
          }), 128))
        ])
      ]) : renderSlot(_ctx.$slots, "noresults", { key: 2 }, () => [
        createBaseVNode("section", _hoisted_11$2, [
          withDirectives(createBaseVNode("h3", _hoisted_12$2, null, 512), [
            [_directive_i18n, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
var MwLanguageSelector = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$W]]);
var SXTranslationListLanguageSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$V = {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwLanguageSelector,
    MwDialog,
    MwIcon,
    MwButton
  },
  props: {
    sourceLanguages: {
      type: Array,
      required: true
    },
    targetLanguages: {
      type: Array,
      required: true
    }
  },
  emits: ["source-language-selected", "target-language-selected"],
  data: () => ({
    mwIconArrowNext,
    mwIconExpand,
    sourceLanguageSelectOn: false,
    targetLanguageSelectOn: false
  }),
  computed: __spreadProps(__spreadValues({}, mapState({
    selectedSourceLanguage: (state2) => state2.application.sourceLanguage,
    selectedTargetLanguage: (state2) => state2.application.targetLanguage
  })), {
    fullscreen() {
      return this.$mwui.breakpoint.mdAndDown;
    }
  }),
  methods: {
    getAutonym: src.getAutonym,
    getDir: src.getDir,
    openSourceLanguageDialog() {
      this.sourceLanguageSelectOn = true;
    },
    openTargetLanguageDialog() {
      this.targetLanguageSelectOn = true;
    },
    onSourceLanguageDialogClose() {
      this.sourceLanguageSelectOn = false;
    },
    onTargetLanguageDialogClose() {
      this.targetLanguageSelectOn = false;
    },
    onSourceLanguageSelected(sourceLanguage) {
      this.sourceLanguageSelectOn = false;
      this.$emit("source-language-selected", sourceLanguage);
    },
    onTargetLanguageSelected(targetLanguage) {
      this.targetLanguageSelectOn = false;
      this.$emit("target-language-selected", targetLanguage);
    }
  }
};
const _hoisted_1$F = { class: "row sx-translation-list-language-selector ma-0 justify-center items-center" };
const _hoisted_2$s = { class: "col-5 justify-end" };
const _hoisted_3$r = ["lang", "dir", "textContent"];
const _hoisted_4$j = { class: "sx-translation-list-language-selector__arrow col-2 justify-center" };
const _hoisted_5$f = { class: "col-5 justify-start" };
const _hoisted_6$7 = ["lang", "dir", "textContent"];
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_language_selector = resolveComponent("mw-language-selector");
  const _component_mw_dialog = resolveComponent("mw-dialog");
  const _component_mw_icon = resolveComponent("mw-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$F, [
    createBaseVNode("div", _hoisted_2$s, [
      createVNode(_component_mw_button, {
        indicator: _ctx.mwIconExpand,
        outlined: false,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        onClick: withModifiers($options.openSourceLanguageDialog, ["stop"])
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            class: "mw-ui-autonym",
            lang: _ctx.selectedSourceLanguage,
            dir: $options.getDir(_ctx.selectedSourceLanguage),
            textContent: toDisplayString($options.getAutonym(_ctx.selectedSourceLanguage))
          }, null, 8, _hoisted_3$r)
        ], void 0),
        _: 1
      }, 8, ["indicator", "onClick"]),
      createVNode(_component_mw_dialog, {
        value: _ctx.sourceLanguageSelectOn,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.sourceLanguageSelectOn = $event),
        animation: "slide-up",
        title: _ctx.$i18n("sx-translation-list-language-selector-dialog-title"),
        fullscreen: $options.fullscreen,
        header: $options.fullscreen,
        "overlay-opacity": 0,
        onClose: $options.onSourceLanguageDialogClose
      }, {
        default: withCtx(() => [
          createVNode(_component_mw_language_selector, {
            class: "sx-translation-list-language-selector__widget col-12",
            placeholder: _ctx.$i18n("cx-sx-language-selector-placeholder"),
            languages: $props.sourceLanguages,
            onSelect: $options.onSourceLanguageSelected,
            onClose: $options.onSourceLanguageDialogClose
          }, null, 8, ["placeholder", "languages", "onSelect", "onClose"])
        ], void 0),
        _: 1
      }, 8, ["value", "title", "fullscreen", "header", "onClose"])
    ]),
    createBaseVNode("div", _hoisted_4$j, [
      createVNode(_component_mw_icon, { icon: _ctx.mwIconArrowNext }, null, 8, ["icon"])
    ]),
    createBaseVNode("div", _hoisted_5$f, [
      createVNode(_component_mw_button, {
        indicator: _ctx.mwIconExpand,
        outlined: false,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        disabled: $props.targetLanguages.length < 2,
        onClick: withModifiers($options.openTargetLanguageDialog, ["stop"])
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            class: "mw-ui-autonym",
            lang: _ctx.selectedTargetLanguage,
            dir: $options.getDir(_ctx.selectedTargetLanguage),
            textContent: toDisplayString($options.getAutonym(_ctx.selectedTargetLanguage))
          }, null, 8, _hoisted_6$7)
        ], void 0),
        _: 1
      }, 8, ["indicator", "disabled", "onClick"]),
      createVNode(_component_mw_dialog, {
        value: _ctx.targetLanguageSelectOn,
        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.targetLanguageSelectOn = $event),
        animation: "slide-up",
        fullscreen: $options.fullscreen,
        header: $options.fullscreen,
        "overlay-opacity": 0,
        title: _ctx.$i18n("sx-translation-list-language-selector-dialog-title"),
        onClose: $options.onTargetLanguageDialogClose
      }, {
        default: withCtx(() => [
          createVNode(_component_mw_language_selector, {
            class: "sx-translation-list-language-selector__widget col-12",
            placeholder: _ctx.$i18n("cx-sx-language-selector-placeholder"),
            languages: $props.targetLanguages,
            onSelect: $options.onTargetLanguageSelected,
            onClose: $options.onTargetLanguageDialogClose
          }, null, 8, ["placeholder", "languages", "onSelect", "onClose"])
        ], void 0),
        _: 1
      }, 8, ["value", "fullscreen", "header", "title", "onClose"])
    ])
  ]);
}
var SxTranslationListLanguageSelector = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$V]]);
function useMediawikiState() {
  const supportedLanguageCodes = computed(() => store.state.mediawiki.supportedLanguageCodes || []);
  const enabledTargetLanguages = computed(() => store.state.mediawiki.enabledTargetLanguages);
  return {
    enabledTargetLanguages,
    supportedLanguageCodes
  };
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var bananaI18n = { exports: {} };
(function(module, exports) {
  !function(e, u) {
    module.exports = u();
  }(commonjsGlobal, function() {
    var e = { ar: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669", fa: "\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9", ml: "\u0D66\u0D67\u0D68\u0D69\u0D6A\u0D6B\u0D6C\u0D6D\u0D6E\u0D6F", kn: "\u0CE6\u0CE7\u0CE8\u0CE9\u0CEA\u0CEB\u0CEC\u0CED\u0CEE\u0CEF", lo: "\u0ED0\u0ED1\u0ED2\u0ED3\u0ED4\u0ED5\u0ED6\u0ED7\u0ED8\u0ED9", or: "\u0B66\u0B67\u0B68\u0B69\u0B6A\u0B6B\u0B6C\u0B6D\u0B6E\u0B6F", kh: "\u17E0\u17E1\u17E2\u17E3\u17E4\u17E5\u17E6\u17E7\u17E8\u17E9", nqo: "\u07C0\u07C1\u07C2\u07C3\u07C4\u07C5\u07C6\u07C7\u07C8\u07C9", pa: "\u0A66\u0A67\u0A68\u0A69\u0A6A\u0A6B\u0A6C\u0A6D\u0A6E\u0A6F", gu: "\u0AE6\u0AE7\u0AE8\u0AE9\u0AEA\u0AEB\u0AEC\u0AED\u0AEE\u0AEF", hi: "\u0966\u0967\u0968\u0969\u096A\u096B\u096C\u096D\u096E\u096F", my: "\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049", ta: "\u0BE6\u0BE7\u0BE8\u0BE9\u0BEA\u0BEB\u0BEC\u0BED\u0BEE\u0BEF", te: "\u0C66\u0C67\u0C68\u0C69\u0C6A\u0C6B\u0C6C\u0C6D\u0C6E\u0C6F", th: "\u0E50\u0E51\u0E52\u0E53\u0E54\u0E55\u0E56\u0E57\u0E58\u0E59", bo: "\u0F20\u0F21\u0F22\u0F23\u0F24\u0F25\u0F26\u0F27\u0F28\u0F29" }, u = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class d {
      constructor(e2) {
        this.locale = e2;
      }
      convertPlural(e2, u2) {
        const d2 = /\d+=/i;
        if (!u2 || u2.length === 0)
          return "";
        for (let t3 = 0; t3 < u2.length; t3++) {
          const n2 = u2[t3];
          if (d2.test(n2)) {
            if (parseInt(n2.slice(0, n2.indexOf("=")), 10) === e2)
              return n2.slice(n2.indexOf("=") + 1);
            u2[t3] = void 0;
          }
        }
        u2 = u2.filter((e3) => !!e3);
        let t2 = this.getPluralForm(e2, this.locale);
        return t2 = Math.min(t2, u2.length - 1), u2[t2];
      }
      getPluralForm(e2, u2) {
        const d2 = new Intl.PluralRules(u2), t2 = d2.resolvedOptions().pluralCategories, n2 = d2.select(e2);
        return ["zero", "one", "two", "few", "many", "other"].filter((e3) => t2.includes(e3)).indexOf(n2);
      }
      convertNumber(e2, d2 = false) {
        let t2 = this.digitTransformTable(this.locale), n2 = "";
        if (d2) {
          if (parseFloat(e2, 10) === e2 || !t2)
            return e2;
          const u2 = [];
          for (const e3 in t2)
            u2[t2[e3]] = e3;
          t2 = u2;
          const d3 = String(e2);
          for (let e3 = 0; e3 < d3.length; e3++)
            n2 += t2[d3[e3]] || d3[e3];
          return parseFloat(n2, 10);
        }
        if (Intl.NumberFormat) {
          let d3;
          const t3 = [...u[this.locale] || [], "en"];
          return d3 = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : t3, n2 = new Intl.NumberFormat(d3).format(e2), n2 === "NaN" && (n2 = e2), n2;
        }
      }
      convertGrammar(e2, u2) {
        return e2;
      }
      gender(e2, u2) {
        if (!u2 || u2.length === 0)
          return "";
        for (; u2.length < 2; )
          u2.push(u2[u2.length - 1]);
        return e2 === "male" ? u2[0] : e2 === "female" ? u2[1] : u2.length === 3 ? u2[2] : u2[0];
      }
      digitTransformTable(u2) {
        return !!e[u2] && e[u2].split("");
      }
    }
    var t = { bs: class extends d {
      convertGrammar(e2, u2) {
        switch (u2) {
          case "instrumental":
            e2 = "s " + e2;
            break;
          case "lokativ":
            e2 = "o " + e2;
        }
        return e2;
      }
    }, default: d, dsb: class extends d {
      convertGrammar(e2, u2) {
        switch (u2) {
          case "instrumental":
            e2 = "z " + e2;
            break;
          case "lokatiw":
            e2 = "wo " + e2;
        }
        return e2;
      }
    }, fi: class extends d {
      convertGrammar(e2, u2) {
        let d2 = e2.match(/[aou][^äöy]*$/i);
        const t2 = e2;
        switch (e2.match(/wiki$/i) && (d2 = false), e2.match(/[bcdfghjklmnpqrstvwxz]$/i) && (e2 += "i"), u2) {
          case "genitive":
            e2 += "n";
            break;
          case "elative":
            e2 += d2 ? "sta" : "st\xE4";
            break;
          case "partitive":
            e2 += d2 ? "a" : "\xE4";
            break;
          case "illative":
            e2 += e2.slice(-1) + "n";
            break;
          case "inessive":
            e2 += d2 ? "ssa" : "ss\xE4";
            break;
          default:
            e2 = t2;
        }
        return e2;
      }
    }, ga: class extends d {
      convertGrammar(e2, u2) {
        if (u2 === "ainmlae")
          switch (e2) {
            case "an Domhnach":
              e2 = "D\xE9 Domhnaigh";
              break;
            case "an Luan":
              e2 = "D\xE9 Luain";
              break;
            case "an Mh\xE1irt":
              e2 = "D\xE9 Mh\xE1irt";
              break;
            case "an Ch\xE9adaoin":
              e2 = "D\xE9 Ch\xE9adaoin";
              break;
            case "an D\xE9ardaoin":
              e2 = "D\xE9ardaoin";
              break;
            case "an Aoine":
              e2 = "D\xE9 hAoine";
              break;
            case "an Satharn":
              e2 = "D\xE9 Sathairn";
          }
        return e2;
      }
    }, he: class extends d {
      convertGrammar(e2, u2) {
        switch (u2) {
          case "prefixed":
          case "\u05EA\u05D7\u05D9\u05DC\u05D9\u05EA":
            e2.slice(0, 1) === "\u05D5" && e2.slice(0, 2) !== "\u05D5\u05D5" && (e2 = "\u05D5" + e2), e2.slice(0, 1) === "\u05D4" && (e2 = e2.slice(1)), (e2.slice(0, 1) < "\u05D0" || e2.slice(0, 1) > "\u05EA") && (e2 = "\u05BE" + e2);
        }
        return e2;
      }
    }, hsb: class extends d {
      convertGrammar(e2, u2) {
        switch (u2) {
          case "instrumental":
            e2 = "z " + e2;
            break;
          case "lokatiw":
            e2 = "wo " + e2;
        }
        return e2;
      }
    }, hu: class extends d {
      convertGrammar(e2, u2) {
        switch (u2) {
          case "rol":
            e2 += "r\xF3l";
            break;
          case "ba":
            e2 += "ba";
            break;
          case "k":
            e2 += "k";
        }
        return e2;
      }
    }, hy: class extends d {
      convertGrammar(e2, u2) {
        return u2 === "genitive" && (e2.slice(-1) === "\u0561" ? e2 = e2.slice(0, -1) + "\u0561\u0575\u056B" : e2.slice(-1) === "\u0578" ? e2 = e2.slice(0, -1) + "\u0578\u0575\u056B" : e2.slice(-4) === "\u0563\u056B\u0580\u0584" ? e2 = e2.slice(0, -4) + "\u0563\u0580\u0584\u056B" : e2 += "\u056B"), e2;
      }
    }, la: class extends d {
      convertGrammar(e2, u2) {
        switch (u2) {
          case "genitive":
            e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(/u[ms]$/i, "i")).replace(/ommunia$/i, "ommunium")).replace(/a$/i, "ae")).replace(/libri$/i, "librorum")).replace(/nuntii$/i, "nuntiorum")).replace(/tio$/i, "tionis")).replace(/ns$/i, "ntis")).replace(/as$/i, "atis")).replace(/es$/i, "ei");
            break;
          case "accusative":
            e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(/u[ms]$/i, "um")).replace(/ommunia$/i, "am")).replace(/a$/i, "ommunia")).replace(/libri$/i, "libros")).replace(/nuntii$/i, "nuntios")).replace(/tio$/i, "tionem")).replace(/ns$/i, "ntem")).replace(/as$/i, "atem")).replace(/es$/i, "em");
            break;
          case "ablative":
            e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(/u[ms]$/i, "o")).replace(/ommunia$/i, "ommunibus")).replace(/a$/i, "a")).replace(/libri$/i, "libris")).replace(/nuntii$/i, "nuntiis")).replace(/tio$/i, "tione")).replace(/ns$/i, "nte")).replace(/as$/i, "ate")).replace(/es$/i, "e");
        }
        return e2;
      }
    }, os: class extends d {
      convertGrammar(e2, u2) {
        let d2, t2, n2, r2;
        switch (d2 = "\u043C\xE6", t2 = "", n2 = "", r2 = "", e2.match(/тæ$/i) ? (e2 = e2.slice(0, -1), d2 = "\xE6\u043C") : e2.match(/[аæеёиоыэюя]$/i) ? t2 = "\u0439" : e2.match(/у$/i) ? e2.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (t2 = "\u0439") : e2.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (n2 = "-"), u2) {
          case "genitive":
            r2 = n2 + t2 + "\u044B";
            break;
          case "dative":
            r2 = n2 + t2 + "\xE6\u043D";
            break;
          case "allative":
            r2 = n2 + d2;
            break;
          case "ablative":
            r2 = t2 === "\u0439" ? n2 + t2 + "\xE6" : n2 + t2 + "\xE6\u0439";
            break;
          case "superessive":
            r2 = n2 + t2 + "\u044B\u043B";
            break;
          case "equative":
            r2 = n2 + t2 + "\u0430\u0443";
            break;
          case "comitative":
            r2 = n2 + "\u0438\u043C\xE6";
        }
        return e2 + r2;
      }
    }, ru: class extends d {
      convertGrammar(e2, u2) {
        return u2 === "genitive" && (e2.slice(-1) === "\u044C" ? e2 = e2.slice(0, -1) + "\u044F" : e2.slice(-2) === "\u0438\u044F" ? e2 = e2.slice(0, -2) + "\u0438\u0438" : e2.slice(-2) === "\u043A\u0430" ? e2 = e2.slice(0, -2) + "\u043A\u0438" : e2.slice(-2) === "\u0442\u0438" ? e2 = e2.slice(0, -2) + "\u0442\u0435\u0439" : e2.slice(-2) === "\u0434\u044B" ? e2 = e2.slice(0, -2) + "\u0434\u043E\u0432" : e2.slice(-3) === "\u043D\u0438\u043A" && (e2 = e2.slice(0, -3) + "\u043D\u0438\u043A\u0430")), e2;
      }
    }, sl: class extends d {
      convertGrammar(e2, u2) {
        switch (u2) {
          case "mestnik":
            e2 = "o " + e2;
            break;
          case "orodnik":
            e2 = "z " + e2;
        }
        return e2;
      }
    }, uk: class extends d {
      convertGrammar(e2, u2) {
        switch (u2) {
          case "genitive":
            e2.slice(-1) === "\u044C" ? e2 = e2.slice(0, -1) + "\u044F" : e2.slice(-2) === "\u0456\u044F" ? e2 = e2.slice(0, -2) + "\u0456\u0457" : e2.slice(-2) === "\u043A\u0430" ? e2 = e2.slice(0, -2) + "\u043A\u0438" : e2.slice(-2) === "\u0442\u0438" ? e2 = e2.slice(0, -2) + "\u0442\u0435\u0439" : e2.slice(-2) === "\u0434\u044B" ? e2 = e2.slice(0, -2) + "\u0434\u043E\u0432" : e2.slice(-3) === "\u043D\u0438\u043A" && (e2 = e2.slice(0, -3) + "\u043D\u0438\u043A\u0430");
            break;
          case "accusative":
            e2.slice(-2) === "\u0456\u044F" && (e2 = e2.slice(0, -2) + "\u0456\u044E");
        }
        return e2;
      }
    } };
    const n = new RegExp("(?:([A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02BB-\u02C1\u02D0\u02D1\u02E0-\u02E4\u02EE\u0370-\u0373\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0482\u048A-\u052F\u0531-\u0556\u0559-\u055F\u0561-\u0587\u0589\u0903-\u0939\u093B\u093D-\u0940\u0949-\u094C\u094E-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C0\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09FA\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC0\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0\u0AE1\u0AE6-\u0AF0\u0AF9\u0B02\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C41-\u0C44\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C7F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D5F-\u0D61\u0D66-\u0D75\u0D79-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E4F-\u0E5B\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00-\u0F17\u0F1A-\u0F34\u0F36\u0F38\u0F3E-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8C\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u1000-\u102C\u1031\u1038\u103B\u103C\u103F-\u1057\u105A-\u105D\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108C\u108E-\u109C\u109E-\u10C5\u10C7\u10CD\u10D0-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u167F\u1681-\u169A\u16A0-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1735\u1736\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5\u17C7\u17C8\u17D4-\u17DA\u17DC\u17E0-\u17E9\u1810-\u1819\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A19\u1A1A\u1A1E-\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1A80-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD\u1B04-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B4B\u1B50-\u1B6A\u1B74-\u1B7C\u1B82-\u1BA1\u1BA6\u1BA7\u1BAA\u1BAE-\u1BE5\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1BFC-\u1C2B\u1C34\u1C35\u1C3B-\u1C49\u1C4D-\u1C7F\u1CC0-\u1CC7\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200E\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u214F\u2160-\u2188\u2336-\u237A\u2395\u249C-\u24E9\u26AC\u2800-\u28FF\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D70\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u302E\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31F0-\u321C\u3220-\u324F\u3260-\u327B\u327F-\u32B0\u32C0-\u32CB\u32D0-\u32FE\u3300-\u3376\u337B-\u33DD\u33E0-\u33FE\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA60C\uA610-\uA62B\uA640-\uA66E\uA680-\uA69D\uA6A0-\uA6EF\uA6F2-\uA6F7\uA722-\uA787\uA789-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA824\uA827\uA830-\uA837\uA840-\uA873\uA880-\uA8C3\uA8CE-\uA8D9\uA8F2-\uA8FD\uA900-\uA925\uA92E-\uA946\uA952\uA953\uA95F-\uA97C\uA983-\uA9B2\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9CD\uA9CF-\uA9D9\uA9DE-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA2F\uAA30\uAA33\uAA34\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA7B\uAA7D-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAAEB\uAAEE-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB65\uAB70-\uABE4\uABE6\uABE7\uABE9-\uABEC\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uE000-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B]|\uD800[\uDC0D-\uDC26]|\uD800[\uDC28-\uDC3A]|\u{1003C}|\u{1003D}|\uD800[\uDC3F-\uDC4D]|\uD800[\uDC50-\uDC5D]|\uD800[\uDC80-\uDCFA]|\u{10100}|\u{10102}|\uD800[\uDD07-\uDD33]|\uD800[\uDD37-\uDD3F]|\uD800[\uDDD0-\uDDFC]|\uD800[\uDE80-\uDE9C]|\uD800[\uDEA0-\uDED0]|\uD800[\uDF00-\uDF23]|\uD800[\uDF30-\uDF4A]|\uD800[\uDF50-\uDF75]|\uD800[\uDF80-\uDF9D]|\uD800[\uDF9F-\uDFC3]|\uD800[\uDFC8-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD801[\uDCA0-\uDCA9]|\uD801[\uDD00-\uDD27]|\uD801[\uDD30-\uDD63]|\u{1056F}|\uD801[\uDE00-\uDF36]|\uD801[\uDF40-\uDF55]|\uD801[\uDF60-\uDF67]|\u{11000}|\uD804[\uDC02-\uDC37]|\uD804[\uDC47-\uDC4D]|\uD804[\uDC66-\uDC6F]|\uD804[\uDC82-\uDCB2]|\u{110B7}|\u{110B8}|\uD804[\uDCBB-\uDCC1]|\uD804[\uDCD0-\uDCE8]|\uD804[\uDCF0-\uDCF9]|\uD804[\uDD03-\uDD26]|\u{1112C}|\uD804[\uDD36-\uDD43]|\uD804[\uDD50-\uDD72]|\uD804[\uDD74-\uDD76]|\uD804[\uDD82-\uDDB5]|\uD804[\uDDBF-\uDDC9]|\u{111CD}|\uD804[\uDDD0-\uDDDF]|\uD804[\uDDE1-\uDDF4]|\uD804[\uDE00-\uDE11]|\uD804[\uDE13-\uDE2E]|\u{11232}|\u{11233}|\u{11235}|\uD804[\uDE38-\uDE3D]|\uD804[\uDE80-\uDE86]|\u{11288}|\uD804[\uDE8A-\uDE8D]|\uD804[\uDE8F-\uDE9D]|\uD804[\uDE9F-\uDEA9]|\uD804[\uDEB0-\uDEDE]|\uD804[\uDEE0-\uDEE2]|\uD804[\uDEF0-\uDEF9]|\u{11302}|\u{11303}|\uD804[\uDF05-\uDF0C]|\u{1130F}|\u{11310}|\uD804[\uDF13-\uDF28]|\uD804[\uDF2A-\uDF30]|\u{11332}|\u{11333}|\uD804[\uDF35-\uDF39]|\uD804[\uDF3D-\uDF3F]|\uD804[\uDF41-\uDF44]|\u{11347}|\u{11348}|\uD804[\uDF4B-\uDF4D]|\u{11350}|\u{11357}|\uD804[\uDF5D-\uDF63]|\uD805[\uDC80-\uDCB2]|\u{114B9}|\uD805[\uDCBB-\uDCBE]|\u{114C1}|\uD805[\uDCC4-\uDCC7]|\uD805[\uDCD0-\uDCD9]|\uD805[\uDD80-\uDDB1]|\uD805[\uDDB8-\uDDBB]|\u{115BE}|\uD805[\uDDC1-\uDDDB]|\uD805[\uDE00-\uDE32]|\u{1163B}|\u{1163C}|\u{1163E}|\uD805[\uDE41-\uDE44]|\uD805[\uDE50-\uDE59]|\uD805[\uDE80-\uDEAA]|\u{116AC}|\u{116AE}|\u{116AF}|\u{116B6}|\uD805[\uDEC0-\uDEC9]|\uD805[\uDF00-\uDF19]|\u{11720}|\u{11721}|\u{11726}|\uD805[\uDF30-\uDF3F]|\uD806[\uDCA0-\uDCF2]|\u{118FF}|\uD806[\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E]|\uD809[\uDC70-\uDC74]|\uD809[\uDC80-\uDD43]|\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38]|\uD81A[\uDE40-\uDE5E]|\uD81A[\uDE60-\uDE69]|\u{16A6E}|\u{16A6F}|\uD81A[\uDED0-\uDEED]|\u{16AF5}|\uD81A[\uDF00-\uDF2F]|\uD81A[\uDF37-\uDF45]|\uD81A[\uDF50-\uDF59]|\uD81A[\uDF5B-\uDF61]|\uD81A[\uDF63-\uDF77]|\uD81A[\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44]|\uD81B[\uDF50-\uDF7E]|\uD81B[\uDF93-\uDF9F]|\u{1B000}|\u{1B001}|\uD82F[\uDC00-\uDC6A]|\uD82F[\uDC70-\uDC7C]|\uD82F[\uDC80-\uDC88]|\uD82F[\uDC90-\uDC99]|\u{1BC9C}|\u{1BC9F}|\uD834[\uDC00-\uDCF5]|\uD834[\uDD00-\uDD26]|\uD834[\uDD29-\uDD66]|\uD834[\uDD6A-\uDD72]|\u{1D183}|\u{1D184}|\uD834[\uDD8C-\uDDA9]|\uD834[\uDDAE-\uDDE8]|\uD834[\uDF60-\uDF71]|\uD835[\uDC00-\uDC54]|\uD835[\uDC56-\uDC9C]|\u{1D49E}|\u{1D49F}|\u{1D4A2}|\u{1D4A5}|\u{1D4A6}|\uD835[\uDCA9-\uDCAC]|\uD835[\uDCAE-\uDCB9]|\u{1D4BB}|\uD835[\uDCBD-\uDCC3]|\uD835[\uDCC5-\uDD05]|\uD835[\uDD07-\uDD0A]|\uD835[\uDD0D-\uDD14]|\uD835[\uDD16-\uDD1C]|\uD835[\uDD1E-\uDD39]|\uD835[\uDD3B-\uDD3E]|\uD835[\uDD40-\uDD44]|\u{1D546}|\uD835[\uDD4A-\uDD50]|\uD835[\uDD52-\uDEA5]|\uD835[\uDEA8-\uDEDA]|\uD835[\uDEDC-\uDF14]|\uD835[\uDF16-\uDF4E]|\uD835[\uDF50-\uDF88]|\uD835[\uDF8A-\uDFC2]|\uD835[\uDFC4-\uDFCB]|\uD836[\uDC00-\uDDFF]|\uD836[\uDE37-\uDE3A]|\uD836[\uDE6D-\uDE74]|\uD836[\uDE76-\uDE83]|\uD836[\uDE85-\uDE8B]|\uD83C[\uDD10-\uDD2E]|\uD83C[\uDD30-\uDD69]|\uD83C[\uDD70-\uDD9A]|\uD83C[\uDDE6-\uDE02]|\uD83C[\uDE10-\uDE3A]|\uD83C[\uDE40-\uDE48]|\u{1F250}|\u{1F251}|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34]|\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|[\uDB80-\uDBBE][\uDC00-\uDFFF]|\uDBBF[\uDC00-\uDFFD]|[\uDBC0-\uDBFE][\uDC00-\uDFFF]|\uDBFF[\uDC00-\uDFFD])|([\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05FF\u07C0-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u082E-\u0858\u085C-\u089F\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB4F\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074B-\u07A5\u07B1-\u07BF\u08A0-\u08E2\uFB50-\uFD3D\uFD40-\uFDCF\uFDF0-\uFDFC\uFDFE\uFDFF\uFE70-\uFEFE]|\uD802[\uDC00-\uDD1E]|\uD802[\uDD20-\uDE00]|\u{10A04}|\uD802[\uDE07-\uDE0B]|\uD802[\uDE10-\uDE37]|\uD802[\uDE3B-\uDE3E]|\uD802[\uDE40-\uDEE4]|\uD802[\uDEE7-\uDF38]|\uD802[\uDF40-\uDFFF]|\uD803[\uDC00-\uDE5F]|\uD803[\uDE7F-\uDFFF]|\uD83A[\uDC00-\uDCCF]|\uD83A[\uDCD7-\uDFFF]|\uD83B[\uDC00-\uDDFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDE00-\uDEEF]|\uD83B[\uDEF2-\uDEFF]))");
    class r {
      constructor(e2) {
        this.locale = e2, this.language = new (t[e2] || t.default)(e2);
      }
      emit(e2, u2) {
        let d2, t2, n2;
        switch (typeof e2) {
          case "string":
          case "number":
            d2 = e2;
            break;
          case "object":
            if (t2 = e2.slice(1).map((e3) => this.emit(e3, u2)), n2 = e2[0].toLowerCase(), typeof this[n2] != "function")
              throw new Error('unknown operation "' + n2 + '"');
            d2 = this[n2](t2, u2);
            break;
          case "undefined":
            d2 = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof e2);
        }
        return d2;
      }
      concat(e2) {
        let u2 = "";
        return e2.forEach((e3) => {
          u2 += e3;
        }), u2;
      }
      replace(e2, u2) {
        const d2 = parseInt(e2[0], 10);
        return d2 < u2.length ? u2[d2] : "$" + (d2 + 1);
      }
      plural(e2) {
        const u2 = parseFloat(this.language.convertNumber(e2[0], 10)), d2 = e2.slice(1);
        return d2.length ? this.language.convertPlural(u2, d2) : "";
      }
      gender(e2) {
        const u2 = e2[0], d2 = e2.slice(1);
        return this.language.gender(u2, d2);
      }
      grammar(e2) {
        const u2 = e2[0], d2 = e2[1];
        return d2 && u2 && this.language.convertGrammar(d2, u2);
      }
      wikilink(e2) {
        let u2, d2 = e2[0];
        d2.charAt(0) === ":" && (d2 = d2.slice(1));
        const t2 = `./${d2}`;
        return u2 = e2.length === 1 ? d2 : e2[1], `<a href="${t2}" title="${d2}">${u2}</a>`;
      }
      extlink(e2) {
        if (e2.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${e2[0]}">${e2[1]}</a>`;
      }
      bidi(e2) {
        const u2 = function(e3) {
          const u3 = e3.match(n);
          return u3 ? u3[2] === void 0 ? "ltr" : "rtl" : null;
        }(e2[0]);
        return u2 === "ltr" ? "\u202A" + e2[0] + "\u202C" : u2 === "rtl" ? "\u202B" + e2[0] + "\u202C" : e2[0];
      }
      formatnum(e2) {
        const u2 = !!e2[1] && e2[1] === "R", d2 = e2[0];
        return typeof d2 == "string" || typeof d2 == "number" ? this.language.convertNumber(d2, u2) : d2;
      }
      htmlattributes(e2) {
        const u2 = {};
        for (let d2 = 0, t2 = e2.length; d2 < t2; d2 += 2)
          u2[e2[d2]] = e2[d2 + 1];
        return u2;
      }
      htmlelement(e2) {
        const u2 = e2.shift(), d2 = e2.shift();
        let t2 = e2, n2 = "";
        for (const e3 in d2)
          n2 += ` ${e3}="${d2[e3]}"`;
        Array.isArray(t2) || (t2 = [t2]);
        return `<${u2}${n2}>${t2.join("")}</${u2}>`;
      }
    }
    class a {
      constructor(e2, { wikilinks: u2 = false } = {}) {
        this.locale = e2, this.wikilinks = u2, this.emitter = new r(this.locale);
      }
      parse(e2, u2) {
        if (e2.includes("{{") || e2.includes("<") || this.wikilinks && e2.includes("[")) {
          const d2 = function(e3, { wikilinks: u3 = false } = {}) {
            let d3 = 0;
            function t2(e4) {
              return () => {
                for (let u4 = 0; u4 < e4.length; u4++) {
                  const d4 = e4[u4]();
                  if (d4 !== null)
                    return d4;
                }
                return null;
              };
            }
            function n2(e4) {
              const u4 = d3, t3 = [];
              for (let n3 = 0; n3 < e4.length; n3++) {
                const r3 = e4[n3]();
                if (r3 === null)
                  return d3 = u4, null;
                t3.push(r3);
              }
              return t3;
            }
            function r2(e4, u4) {
              return () => {
                const t3 = d3, n3 = [];
                let r3 = u4();
                for (; r3 !== null; )
                  n3.push(r3), r3 = u4();
                return n3.length < e4 ? (d3 = t3, null) : n3;
              };
            }
            function a2(u4) {
              const t3 = u4.length;
              return () => {
                let n3 = null;
                return e3.slice(d3, d3 + t3) === u4 && (n3 = u4, d3 += t3), n3;
              };
            }
            function c2(u4) {
              return () => {
                const t3 = e3.slice(d3).match(u4);
                return t3 === null ? null : (d3 += t3[0].length, t3[0]);
              };
            }
            const s = c2(/^\s+/), l = a2("|"), i = a2(":"), o = a2("\\"), f = c2(/^./), h2 = a2("$"), b = c2(/^\d+/), m = a2('"'), k = a2("'"), p2 = c2(u3 ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), g = c2(u3 ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), w = t2([v, c2(u3 ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function v() {
              const e4 = n2([o, f]);
              return e4 === null ? null : e4[1];
            }
            const y = t2([v, g]), z = t2([v, p2]);
            function $2() {
              const e4 = n2([h2, b]);
              return e4 === null ? null : ["REPLACE", parseInt(e4[1], 10) - 1];
            }
            const x = (C = c2(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), A = function(e4) {
              return e4.toString();
            }, () => {
              const e4 = C();
              return e4 === null ? null : A(e4);
            });
            var C, A;
            function j() {
              const e4 = n2([l, r2(0, _)]);
              if (e4 === null)
                return null;
              const u4 = e4[1];
              return u4.length > 1 ? ["CONCAT"].concat(u4) : u4[0];
            }
            function T() {
              const e4 = n2([x, i, $2]);
              return e4 === null ? null : [e4[0], e4[2]];
            }
            function E() {
              const e4 = n2([x, i, _]);
              return e4 === null ? null : [e4[0], e4[2]];
            }
            function N() {
              const e4 = n2([x, i]);
              return e4 === null ? null : [e4[0], ""];
            }
            const M = t2([function() {
              const e4 = n2([t2([T, E, N]), r2(0, j)]);
              return e4 === null ? null : e4[0].concat(e4[1]);
            }, function() {
              const e4 = n2([x, r2(0, j)]);
              return e4 === null ? null : [e4[0]].concat(e4[1]);
            }]), O = a2("{{"), q = a2("}}"), I = a2("[["), L = a2("]]"), F = a2("["), G = a2("]");
            function P() {
              const e4 = n2([O, M, q]);
              return e4 === null ? null : e4[1];
            }
            const D = t2([function() {
              const e4 = n2([r2(1, _), l, r2(1, X)]);
              return e4 === null ? null : [["CONCAT"].concat(e4[0]), ["CONCAT"].concat(e4[2])];
            }, function() {
              const e4 = n2([r2(1, _)]);
              return e4 === null ? null : [["CONCAT"].concat(e4[0])];
            }]);
            function S() {
              let e4 = null;
              const u4 = n2([I, D, L]);
              if (u4 !== null) {
                const d4 = u4[1];
                e4 = ["WIKILINK"].concat(d4);
              }
              return e4;
            }
            function H() {
              let e4 = null;
              const u4 = n2([F, r2(1, W), s, r2(1, X), G]);
              return u4 !== null && (e4 = ["EXTLINK", u4[1].length === 1 ? u4[1][0] : ["CONCAT"].concat(u4[1]), ["CONCAT"].concat(u4[3])]), e4;
            }
            const R = c2(/^[A-Za-z]+/);
            function B() {
              const e4 = c2(/^[^"]*/), u4 = n2([m, e4, m]);
              return u4 === null ? null : u4[1];
            }
            function Z() {
              const e4 = c2(/^[^']*/), u4 = n2([k, e4, k]);
              return u4 === null ? null : u4[1];
            }
            function K() {
              const e4 = c2(/^\s*=\s*/), u4 = n2([s, R, e4, t2([B, Z])]);
              return u4 === null ? null : [u4[1], u4[3]];
            }
            function U() {
              const e4 = r2(0, K)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], e4);
            }
            const W = t2([P, $2, S, H, function() {
              const e4 = r2(1, w)();
              return e4 === null ? null : e4.join("");
            }]), X = t2([P, $2, S, H, function() {
              let u4 = null;
              const t3 = d3, s2 = a2("<"), l2 = c2(/^\/?/), i2 = c2(/^\s*>/), o2 = n2([s2, R, U, l2, i2]);
              if (o2 === null)
                return null;
              const f2 = d3, h22 = o2[1], b2 = r2(0, X)(), m2 = d3, k2 = n2([a2("</"), R, i2]);
              if (k2 === null)
                return ["CONCAT", e3.slice(t3, f2)].concat(b2);
              const p22 = d3, g2 = k2[1], w2 = o2[2];
              if (function(e4, u5, d4, t4 = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((e4 = e4.toLowerCase()) !== (u5 = u5.toLowerCase()) || t4.allowedHtmlElements.indexOf(e4) === -1)
                  return false;
                const n3 = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let u6 = 0, r3 = d4.length; u6 < r3; u6 += 2) {
                  const r4 = d4[u6];
                  if (t4.allowedHtmlCommonAttributes.indexOf(r4) === -1 && (t4.allowedHtmlAttributesByElement[e4] || []).indexOf(r4) === -1 || r4 === "style" && d4[u6 + 1].search(n3) !== -1)
                    return false;
                }
                return true;
              }(h22, g2, w2.slice(1)))
                u4 = ["HTMLELEMENT", h22, w2].concat(b2);
              else {
                const d4 = (e4) => e4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                u4 = ["CONCAT", d4(e3.slice(t3, f2))].concat(b2, d4(e3.slice(m2, p22)));
              }
              return u4;
            }, function() {
              const e4 = r2(1, z)();
              return e4 === null ? null : e4.join("");
            }]), _ = t2([P, $2, function() {
              const e4 = r2(1, y)();
              return e4 === null ? null : e4.join("");
            }]), J = function() {
              const e4 = r2(0, X)();
              return e4 === null ? null : ["CONCAT"].concat(e4);
            }();
            if (J === null || d3 !== e3.length)
              throw new Error("Parse error at position " + d3.toString() + " in input: " + e3);
            return J;
          }(e2, { wikilinks: this.wikilinks });
          return this.emitter.emit(d2, u2);
        }
        return this.simpleParse(e2, u2);
      }
      simpleParse(e2, u2) {
        return e2.replace(/\$(\d+)/g, (e3, d2) => {
          const t2 = parseInt(d2, 10) - 1;
          return u2[t2] !== void 0 ? u2[t2] : "$" + d2;
        });
      }
    }
    class c {
      constructor(e2) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(e2, u2) {
        if (typeof e2 != "object")
          throw new Error("Invalid message source. Must be an object");
        if (u2) {
          if (!/^[a-zA-Z0-9-]+$/.test(u2))
            throw new Error(`Invalid locale ${u2}`);
          for (const d2 in e2)
            if (d2.indexOf("@") !== 0) {
              if (typeof e2[d2] == "object")
                return this.load(e2);
              if (typeof e2[d2] != "string")
                throw new Error(`Invalid message for message ${d2} in ${u2} locale.`);
              break;
            }
          this.sourceMap.has(u2) ? this.sourceMap.set(u2, Object.assign(this.sourceMap.get(u2), e2)) : this.sourceMap.set(u2, e2);
        } else
          for (u2 in e2)
            this.load(e2[u2], u2);
      }
      getMessage(e2, u2) {
        const d2 = this.sourceMap.get(u2);
        return d2 ? d2[e2] : null;
      }
      hasLocale(e2) {
        return this.sourceMap.has(e2);
      }
    }
    return class {
      constructor(e2, { finalFallback: u2 = "en", messages: d2, wikilinks: t2 = false } = {}) {
        this.locale = e2, this.parser = new a(this.locale, { wikilinks: t2 }), this.messageStore = new c(), d2 && this.load(d2, this.locale), this.finalFallback = u2, this.wikilinks = t2;
      }
      load(e2, u2) {
        return this.messageStore.load(e2, u2 || this.locale);
      }
      i18n(e2, ...u2) {
        return this.parser.parse(this.getMessage(e2), u2);
      }
      setLocale(e2) {
        this.locale = e2, this.parser = new a(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...u[this.locale] || [], this.finalFallback];
      }
      getMessage(e2) {
        let u2 = this.locale, d2 = 0;
        const t2 = this.getFallbackLocales(this.locale);
        for (; u2; ) {
          const n2 = u2.split("-");
          let r2 = n2.length;
          do {
            const u3 = n2.slice(0, r2).join("-"), d3 = this.messageStore.getMessage(e2, u3);
            if (typeof d3 == "string")
              return d3;
            r2--;
          } while (r2);
          u2 = t2[d2], d2++;
        }
        return e2;
      }
      registerParserPlugin(e2, u2) {
        r.prototype[e2] = u2;
      }
    };
  });
})(bananaI18n);
var Banana = bananaI18n.exports;
const parseValue = (binding) => {
  let msg, params;
  if (Array.isArray(binding.value)) {
    msg = binding.arg;
    params = binding.value;
  } else if (binding.value !== null && typeof binding.value === "object") {
    msg = binding.value.msg;
    params = binding.value.params;
  } else {
    msg = binding.arg || binding.value;
  }
  params = params || [];
  if (!Array.isArray(params)) {
    params = [params];
  }
  if (!msg) {
    throw new Error(`${binding.rawName} used with parameter array but without message key`);
  }
  return { msg, params };
};
const contextSymbol$1 = Symbol("banana-context");
function useI18n() {
  const i18n = inject(contextSymbol$1);
  if (!i18n)
    throw new Error("No i18n provided!!!");
  return i18n;
}
function createI18n(options = { messages: {}, locale: "en", wikilinks: true }) {
  const bananai18n = reactive(new Banana(options.locale, options));
  return {
    install: (app2) => {
      app2.provide(contextSymbol$1, bananai18n);
      app2.config.globalProperties.$i18n = (msg, params) => {
        return bananai18n.i18n(msg, params);
      };
      app2.provide("setLocale", (newLocale) => {
        bananai18n.setLocale(newLocale);
      });
      app2.directive("i18n", (el, binding) => {
        const { msg, params } = parseValue(binding);
        if (binding.modifiers.html) {
          el.innerHTML = bananai18n.i18n(msg, params);
        } else {
          el.textContent = bananai18n.i18n(msg, params);
        }
      });
      app2.directive("i18n-html", (el, binding) => {
        const { msg, params } = parseValue(binding);
        el.innerHTML = bananai18n.i18n(msg, params);
      });
    }
  };
}
const _sfc_main$U = {
  name: "CxTranslationList",
  components: {
    CxTranslationWork,
    MwCard,
    MwSpinner,
    SxTranslationListLanguageSelector
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    translationStatus: {
      type: String,
      required: true,
      validator: (value) => {
        return ["published", "draft"].indexOf(value) !== -1;
      }
    }
  },
  setup(props) {
    const bananaI18n2 = useI18n();
    const labelForAllTranslations = bananaI18n2.i18n("cx-translation-list-all-languages-option-label");
    const selectedSourceLanguage = ref(labelForAllTranslations);
    const selectedTargetLanguage = ref(labelForAllTranslations);
    const store2 = useStore();
    const loaded = computed(() => store2.state.translator.translationsLoaded);
    const { enabledTargetLanguages } = useMediawikiState();
    const translations = computed(() => {
      if (props.translationStatus === "published") {
        return store2.getters["translator/getPublishedTranslations"];
      } else {
        return store2.getters["translator/getDraftTranslations"];
      }
    });
    const isActiveForAllSourceLanguages = computed(() => selectedSourceLanguage.value === labelForAllTranslations);
    const isActiveForAllTargetLanguages = computed(() => selectedTargetLanguage.value === labelForAllTranslations);
    const activeTranslations = computed(() => translations.value.filter((translation) => (isActiveForAllSourceLanguages.value || translation.sourceLanguage === selectedSourceLanguage.value) && (isActiveForAllTargetLanguages.value || translation.targetLanguage === selectedTargetLanguage.value)));
    const availableTargetLanguages = computed(() => {
      let translationLanguages = translations.value.map((translation) => translation.targetLanguage);
      if (!!enabledTargetLanguages.value) {
        translationLanguages = translationLanguages.filter((language) => enabledTargetLanguages.value.includes(language));
      }
      return [...new Set(translationLanguages)].reduce((languages2, languageCode) => [
        ...languages2,
        { name: src.getAutonym(languageCode), code: languageCode }
      ], [{ name: labelForAllTranslations, code: labelForAllTranslations }]);
    });
    const availableSourceLanguages = computed(() => translations.value.map((translation) => translation.sourceLanguage).filter((language, index, self2) => self2.indexOf(language) === index).reduce((languages2, languageCode) => [
      ...languages2,
      { name: src.getAutonym(languageCode), code: languageCode }
    ], [{ name: labelForAllTranslations, code: labelForAllTranslations }]));
    return {
      activeTranslations,
      availableSourceLanguages,
      availableTargetLanguages,
      loaded,
      selectedSourceLanguage,
      selectedTargetLanguage
    };
  }
};
const _hoisted_1$E = ["textContent"];
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_translation_list_language_selector = resolveComponent("sx-translation-list-language-selector");
  const _component_mw_spinner = resolveComponent("mw-spinner");
  const _component_cx_translation_work = resolveComponent("cx-translation-work");
  const _component_mw_card = resolveComponent("mw-card");
  return withDirectives((openBlock(), createBlock(_component_mw_card, {
    class: normalizeClass(`cx-translation-list--${$props.translationStatus}`)
  }, {
    header: withCtx(() => [
      createBaseVNode("h3", {
        class: "mw-ui-card__title pa-4 pt-5 mb-0",
        textContent: toDisplayString(_ctx.$i18n(`cx-translation-label-${$props.translationStatus}`))
      }, null, 8, _hoisted_1$E)
    ]),
    default: withCtx(() => [
      createVNode(_component_sx_translation_list_language_selector, {
        "selected-source-language": $setup.selectedSourceLanguage,
        "onUpdate:selected-source-language": _cache[0] || (_cache[0] = ($event) => $setup.selectedSourceLanguage = $event),
        "selected-target-language": $setup.selectedTargetLanguage,
        "onUpdate:selected-target-language": _cache[1] || (_cache[1] = ($event) => $setup.selectedTargetLanguage = $event),
        "source-languages": $setup.availableSourceLanguages,
        "target-languages": $setup.availableTargetLanguages
      }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
      !$setup.loaded ? (openBlock(), createBlock(_component_mw_spinner, { key: 0 })) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.activeTranslations, (translation, index) => {
        return openBlock(), createBlock(_component_cx_translation_work, {
          key: `${$props.translationStatus}-${index}`,
          translation
        }, null, 8, ["translation"]);
      }), 128))
    ], void 0),
    _: 1
  }, 8, ["class"])), [
    [vShow, $props.active]
  ]);
}
var CxTranslationList = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$U]]);
function useApplicationState(store2) {
  const sourceLanguage = computed(() => store2.state.application.sourceLanguage);
  const targetLanguage = computed(() => store2.state.application.targetLanguage);
  const currentMTProvider = computed(() => store2.state.application.currentMTProvider);
  const currentSectionSuggestion = computed(() => store2.state.application.currentSectionSuggestion);
  const currentSourceSection = computed(() => store2.state.application.currentSourceSection);
  const sourceLanguageAutonym = computed(() => src.getAutonym(sourceLanguage.value));
  const targetLanguageAutonym = computed(() => src.getAutonym(targetLanguage.value));
  const isSectionTitleSelected = computed(() => {
    var _a;
    return (_a = currentSourceSection.value) == null ? void 0 : _a.isTitleSelected;
  });
  const publishFeedbackMessages = computed(() => store2.state.application.publishFeedbackMessages);
  const selectedContentTranslationUnit = computed(() => {
    var _a;
    return (_a = currentSourceSection.value) == null ? void 0 : _a.selectedContentTranslationUnit;
  });
  const proposedTranslation = computed(() => store2.getters["application/getCurrentProposedTranslation"]);
  return {
    currentMTProvider,
    currentSectionSuggestion,
    currentSourceSection,
    isSectionTitleSelected,
    proposedTranslation,
    publishFeedbackMessages,
    selectedContentTranslationUnit,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym
  };
}
var CXTranslationSuggestion_vue_vue_type_style_index_0_lang = "";
const _sfc_main$T = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail, MwIcon, MwRow, MwCol },
  props: {
    suggestion: {
      type: [ArticleSuggestion, SectionSuggestion, FavoriteSuggestion],
      required: true
    }
  },
  emits: ["close", "bookmark"],
  setup(props) {
    const store2 = useStore();
    const suggestion = computed(() => props.suggestion);
    const title = computed(() => suggestion.value.sourceTitle || suggestion.value.title);
    const page = computed(() => store2.getters["mediawiki/getPage"](suggestion.value.sourceLanguage, title.value));
    const missingSectionsCount = computed(() => {
      var _a;
      return (_a = suggestion.value) == null ? void 0 : _a.missingSectionsCount;
    });
    const description = computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.description;
    });
    const isSectionSuggestion = computed(() => suggestion.value instanceof SectionSuggestion);
    const isFavoriteSuggestion = computed(() => suggestion.value instanceof FavoriteSuggestion);
    const { sourceLanguageAutonym, targetLanguageAutonym } = useApplicationState(store2);
    const bookmarkIcon = computed(() => isFavoriteSuggestion.value ? mwIconBookmark : mwIconBookmarkOutline);
    const colors2 = inject("colors");
    const bookmarkIconColor = computed(() => isFavoriteSuggestion.value ? colors2.primary : "currentColor");
    return {
      bookmarkIcon,
      bookmarkIconColor,
      description,
      getDir: src.getDir,
      isFavoriteSuggestion,
      isSectionSuggestion,
      missingSectionsCount,
      mwIconArrowNext,
      mwIconClose,
      page,
      sourceLanguageAutonym,
      targetLanguageAutonym,
      title
    };
  }
};
const _hoisted_1$D = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
};
const _hoisted_2$r = { class: "col shrink pe-4" };
const _hoisted_3$q = { class: "col cx-suggestion__information-panel" };
const _hoisted_4$i = ["lang", "dir", "textContent"];
const _hoisted_5$e = ["lang", "dir", "textContent"];
const _hoisted_6$6 = ["textContent"];
const _hoisted_7$4 = ["textContent"];
function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_thumbnail = resolveComponent("mw-thumbnail");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_icon = resolveComponent("mw-icon");
  const _directive_i18n = resolveDirective("i18n");
  return $props.suggestion ? (openBlock(), createElementBlock("div", _hoisted_1$D, [
    createBaseVNode("div", _hoisted_2$r, [
      createVNode(_component_mw_thumbnail, {
        class: "cx-suggestion__thumbnail",
        thumbnail: $setup.page && $setup.page.thumbnail,
        width: 84
      }, null, 8, ["thumbnail"])
    ]),
    createBaseVNode("div", _hoisted_3$q, [
      createVNode(_component_mw_row, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, {
            shrink: "",
            class: "cx-suggestion__information-panel__top pb-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_mw_row, {
                class: "ma-0",
                align: "start",
                justify: "between"
              }, {
                default: withCtx(() => [
                  createVNode(_component_mw_col, {
                    grow: "",
                    class: "pe-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_mw_row, {
                        direction: "column",
                        class: "ma-0",
                        align: "start"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_mw_col, {
                            shrink: "",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("h5", {
                                class: "my-0 cx-suggestion__source-title",
                                lang: $props.suggestion.sourceLanguage,
                                dir: $setup.getDir($props.suggestion.sourceLanguage),
                                textContent: toDisplayString($setup.title)
                              }, null, 8, _hoisted_4$i)
                            ], void 0, true),
                            _: 1
                          }),
                          createVNode(_component_mw_col, { shrink: "" }, {
                            default: withCtx(() => [
                              createBaseVNode("p", {
                                class: "ma-0 cx-suggestion__source-description complementary",
                                lang: $props.suggestion.sourceLanguage,
                                dir: $setup.getDir($props.suggestion.sourceLanguage),
                                textContent: toDisplayString($setup.description)
                              }, null, 8, _hoisted_5$e)
                            ], void 0, true),
                            _: 1
                          })
                        ], void 0, true),
                        _: 1
                      })
                    ], void 0, true),
                    _: 1
                  }),
                  createVNode(_component_mw_col, { shrink: "" }, {
                    default: withCtx(() => [
                      !$setup.isFavoriteSuggestion ? (openBlock(), createBlock(_component_mw_icon, {
                        key: 0,
                        icon: $setup.mwIconClose,
                        size: "24",
                        class: "mb-4",
                        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])) : createCommentVNode("", true),
                      createVNode(_component_mw_icon, {
                        icon: $setup.bookmarkIcon,
                        size: "24",
                        "icon-color": $setup.bookmarkIconColor,
                        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.$emit("bookmark"), ["stop"]))
                      }, null, 8, ["icon", "icon-color"])
                    ], void 0, true),
                    _: 1
                  })
                ], void 0, true),
                _: 1
              })
            ], void 0, true),
            _: 1
          }),
          $setup.isSectionSuggestion ? (openBlock(), createBlock(_component_mw_col, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("small", null, null, 512), [
                [_directive_i18n, [$setup.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ], void 0, true),
            _: 1
          })) : $setup.isFavoriteSuggestion ? (openBlock(), createBlock(_component_mw_col, {
            key: 1,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
            shrink: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_mw_row, {
                justify: "between",
                class: "ma-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_mw_col, { grow: "" }, {
                    default: withCtx(() => [
                      createBaseVNode("small", {
                        textContent: toDisplayString($setup.sourceLanguageAutonym)
                      }, null, 8, _hoisted_6$6),
                      createVNode(_component_mw_icon, {
                        icon: $setup.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      createBaseVNode("small", {
                        textContent: toDisplayString($setup.targetLanguageAutonym)
                      }, null, 8, _hoisted_7$4)
                    ], void 0, true),
                    _: 1
                  }),
                  !!$setup.missingSectionsCount ? (openBlock(), createBlock(_component_mw_col, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("small", null, null, 512), [
                        [_directive_i18n, [
                          $setup.missingSectionsCount
                        ], "cx-sx-translation-suggestion-info"]
                      ])
                    ], void 0, true),
                    _: 1
                  })) : createCommentVNode("", true)
                ], void 0, true),
                _: 1
              })
            ], void 0, true),
            _: 1
          })) : createCommentVNode("", true)
        ], void 0),
        _: 1
      })
    ])
  ])) : createCommentVNode("", true);
}
var CxTranslationSuggestion = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$T]]);
var useSuggestionListLanguages = () => {
  const { supportedLanguageCodes, enabledTargetLanguages } = useMediawikiState();
  const availableTargetLanguages = computed(() => {
    return enabledTargetLanguages.value || supportedLanguageCodes.value;
  });
  return {
    supportedLanguageCodes,
    availableTargetLanguages
  };
};
let cachedEditCount = null;
function getGlobalEditCount(userName) {
  if (cachedEditCount) {
    return Promise.resolve(cachedEditCount);
  }
  const apiURL = "https://en.wikipedia.org/w/api.php";
  const queryParams = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: userName,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  });
  return fetch(`${apiURL}?${queryParams}`).then((response) => response.json()).then((response) => response.query.globaluserinfo.editcount).catch((error) => {
    mw.log.error("Error while fetching global edit count for user. ", error);
  });
}
function getUserEditCountBucket(editCount) {
  if (editCount === null) {
    return null;
  }
  if (editCount === 0) {
    return "0 edits";
  }
  if (editCount < 5) {
    return "1-4 edits";
  }
  if (editCount < 100) {
    return "5-99 edits";
  }
  if (editCount < 1e3) {
    return "100-999 edits";
  }
  return "1000+ edits";
}
function logEvent(event) {
  if (!mw.eventLog) {
    mw.log({ event });
    return Promise.resolve();
  }
  const accessMethod = mw.config.get("skin") === "minerva" ? "mobile web" : "desktop";
  const wikiDB = mw.config.get("wgDBname");
  const sessionId = `cx_sx_${mw.user.sessionId()}_${accessMethod}_${wikiDB}`;
  const streamName = "mediawiki.content_translation_event";
  const isAnonUser = mw.user.isAnon();
  const userName = mw.user.getName();
  const eventDefaults = {
    $schema: "/analytics/mediawiki/content_translation_event/1.0.0",
    translation_type: "section",
    wiki_db: wikiDB,
    access_method: accessMethod,
    user_name: userName,
    user_is_anonymous: isAnonUser,
    content_translation_session_id: sessionId
  };
  if (isAnonUser) {
    return Promise.resolve(mw.eventLog.submit(streamName, Object.assign({}, eventDefaults, event)));
  } else {
    return getGlobalEditCount(userName).then((editCount) => {
      cachedEditCount = editCount;
      mw.eventLog.submit(streamName, Object.assign({}, eventDefaults, event, {
        user_global_edit_count: editCount,
        user_global_edit_count_bucket: getUserEditCountBucket(editCount)
      }));
    });
  }
}
const contextSymbol = Symbol("event-logging-context");
const useEventLogging = function() {
  const logEvent2 = inject(contextSymbol);
  if (!logEvent2)
    throw new Error("No event logging method provided!!!");
  return logEvent2;
};
const createEventLogging = () => ({
  install: (app2) => {
    app2.provide(contextSymbol, logEvent);
  }
});
const useSuggestions = () => {
  const store2 = useStore();
  const logEvent2 = useEventLogging();
  const sectionSuggestionsLoading = computed(() => store2.state.suggestions.sectionSuggestionsLoadingCount > 0);
  const pageSuggestionsLoading = computed(() => store2.state.suggestions.pageSuggestionsLoadingCount > 0);
  const showRefreshButton = computed(() => !sectionSuggestionsLoading.value && !pageSuggestionsLoading.value);
  const currentSectionSuggestionsSliceIndex = ref(0);
  const currentPageSuggestionsSliceIndex = ref(0);
  const { maxSuggestionsPerSlice } = store2.state.suggestions;
  const maxSuggestionsSlices = 4;
  const nextSectionSuggestionsSliceIndex = computed(() => (currentSectionSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices);
  const nextPageSuggestionsSliceIndex = computed(() => (currentPageSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices);
  const currentSectionSuggestionsSlice = computed(() => store2.getters["application/getSectionSuggestionsSliceByIndex"](currentSectionSuggestionsSliceIndex.value));
  const currentPageSuggestionsSlice = computed(() => store2.getters["application/getPageSuggestionsSliceByIndex"](currentPageSuggestionsSliceIndex.value));
  const isCurrentSectionSuggestionsSliceFull = computed(() => currentSectionSuggestionsSlice.value.length === maxSuggestionsPerSlice);
  const isCurrentPageSuggestionsSliceFull = computed(() => currentPageSuggestionsSlice.value.length === maxSuggestionsPerSlice);
  const nextSectionSuggestionSliceFetched = computed(() => isCurrentSectionSuggestionsSliceFull.value && store2.getters["application/getSectionSuggestionsSliceByIndex"](nextPageSuggestionsSliceIndex.value).length > 0);
  const nextPageSuggestionSliceFetched = computed(() => isCurrentPageSuggestionsSliceFull.value && store2.getters["application/getPageSuggestionsSliceByIndex"](nextPageSuggestionsSliceIndex.value).length > 0);
  const onSuggestionRefresh = () => {
    fetchNextSectionSuggestionSlice();
    fetchNextPageSuggestionSlice();
  };
  const fetchNextSectionSuggestionSlice = () => {
    if (!nextSectionSuggestionSliceFetched.value) {
      store2.dispatch("suggestions/fetchNextSectionSuggestionsSlice", {
        nextIndex: nextSectionSuggestionsSliceIndex.value
      });
      isCurrentSectionSuggestionsSliceFull.value && increaseCurrentSectionSuggestionsSliceIndex();
    }
  };
  const fetchNextPageSuggestionSlice = () => {
    if (!nextPageSuggestionSliceFetched.value) {
      store2.dispatch("suggestions/fetchNextPageSuggestionsSlice", {
        nextIndex: nextPageSuggestionsSliceIndex.value
      });
      isCurrentPageSuggestionsSliceFull.value && increaseCurrentPageSuggestionsSliceIndex();
    }
  };
  const discardSectionSuggestion = (suggestion) => {
    logEvent2({ event_type: "dashboard_discard_suggestion" });
    store2.commit("suggestions/removeSectionSuggestion", suggestion);
    fetchNextSectionSuggestionSlice();
  };
  const discardPageSuggestion = (suggestion) => {
    logEvent2({ event_type: "dashboard_discard_suggestion" });
    store2.commit("suggestions/removePageSuggestion", suggestion);
    fetchNextPageSuggestionSlice();
  };
  const increaseCurrentSectionSuggestionsSliceIndex = () => currentSectionSuggestionsSliceIndex.value = (currentSectionSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices;
  const increaseCurrentPageSuggestionsSliceIndex = () => currentPageSuggestionsSliceIndex.value = (currentPageSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices;
  return {
    currentPageSuggestionsSlice,
    currentSectionSuggestionsSlice,
    discardPageSuggestion,
    discardSectionSuggestion,
    onSuggestionRefresh,
    pageSuggestionsLoading,
    sectionSuggestionsLoading,
    showRefreshButton
  };
};
const unmarkFavoriteSectionSuggestion = (suggestion) => __async(this, null, function* () {
  return store.dispatch("suggestions/removeFavoriteSuggestion", suggestion);
});
var CXSuggestionList_vue_vue_type_style_index_0_lang = "";
const _sfc_main$S = {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector,
    CxTranslationSuggestion,
    MwCard,
    MwButton,
    MwSpinner
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store2 = useStore();
    const { supportedLanguageCodes, availableTargetLanguages } = useSuggestionListLanguages();
    const updateSourceLanguage2 = (sourceLanguage) => store2.dispatch("application/updateSourceLanguage", sourceLanguage);
    const updateTargetLanguage2 = (targetLanguage) => store2.dispatch("application/updateTargetLanguage", targetLanguage);
    const router2 = useRouter();
    const startTranslation = (suggestion) => {
      store2.dispatch("application/initializeSectionTranslation", suggestion);
      router2.push({
        name: "sx-translation-confirmer",
        params: {
          previousRoute: "dashboard",
          eventSource: "suggestion_no_seed"
        }
      });
    };
    const {
      currentPageSuggestionsSlice,
      currentSectionSuggestionsSlice,
      discardPageSuggestion,
      discardSectionSuggestion,
      onSuggestionRefresh,
      pageSuggestionsLoading,
      sectionSuggestionsLoading,
      showRefreshButton
    } = useSuggestions();
    const markFavoriteSectionSuggestion = (suggestion) => __async(this, null, function* () {
      return store2.dispatch("suggestions/addSectionSuggestionAsFavorite", suggestion);
    });
    const markFavoritePageSuggestion = (suggestion) => __async(this, null, function* () {
      return store2.dispatch("suggestions/addPageSuggestionAsFavorite", suggestion);
    });
    return {
      availableTargetLanguages,
      currentPageSuggestionsSlice,
      currentSectionSuggestionsSlice,
      discardPageSuggestion,
      discardSectionSuggestion,
      mwIconRefresh,
      markFavoritePageSuggestion,
      markFavoriteSectionSuggestion,
      unmarkFavoriteSectionSuggestion,
      onSuggestionRefresh,
      pageSuggestionsLoading,
      sectionSuggestionsLoading,
      showRefreshButton,
      startTranslation,
      supportedLanguageCodes,
      updateSourceLanguage: updateSourceLanguage2,
      updateTargetLanguage: updateTargetLanguage2
    };
  }
};
const _hoisted_1$C = ["textContent"];
const _hoisted_2$q = { class: "cx-translation-list__division-title ma-0 pa-4" };
const _hoisted_3$p = { class: "cx-translation-list__division-title ma-0 pa-4" };
const _hoisted_4$h = { class: "cx-suggestion-list__refresh-button-container justify-center" };
function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_translation_list_language_selector = resolveComponent("sx-translation-list-language-selector");
  const _component_mw_card = resolveComponent("mw-card");
  const _component_cx_translation_suggestion = resolveComponent("cx-translation-suggestion");
  const _component_mw_spinner = resolveComponent("mw-spinner");
  const _component_mw_button = resolveComponent("mw-button");
  const _directive_i18n = resolveDirective("i18n");
  return withDirectives((openBlock(), createElementBlock("div", null, [
    createVNode(_component_mw_card, { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
      header: withCtx(() => [
        createBaseVNode("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: toDisplayString(_ctx.$i18n("cx-suggestionlist-title"))
        }, null, 8, _hoisted_1$C)
      ]),
      default: withCtx(() => [
        createVNode(_component_sx_translation_list_language_selector, {
          "source-languages": $setup.supportedLanguageCodes,
          "target-languages": $setup.availableTargetLanguages,
          onSourceLanguageSelected: $setup.updateSourceLanguage,
          onTargetLanguageSelected: $setup.updateTargetLanguage
        }, null, 8, ["source-languages", "target-languages", "onSourceLanguageSelected", "onTargetLanguageSelected"])
      ], void 0),
      _: 1
    }),
    createVNode(_component_mw_card, { class: "pa-0 mb-0" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("h5", _hoisted_2$q, null, 512), [
          [_directive_i18n, void 0, "cx-suggestion-list-new-pages-division"]
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.currentPageSuggestionsSlice, (suggestion, index) => {
          return openBlock(), createBlock(_component_cx_translation_suggestion, {
            key: `page-suggestion-${index}`,
            suggestion,
            onClose: ($event) => $setup.discardPageSuggestion(suggestion),
            onClick: ($event) => $setup.startTranslation(suggestion),
            onBookmark: ($event) => $setup.markFavoritePageSuggestion(suggestion)
          }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]);
        }), 128)),
        $setup.pageSuggestionsLoading ? (openBlock(), createBlock(_component_mw_spinner, { key: 0 })) : createCommentVNode("", true)
      ], void 0),
      _: 1
    }),
    createVNode(_component_mw_card, { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("h5", _hoisted_3$p, null, 512), [
          [_directive_i18n, void 0, "cx-suggestionlist-expand-sections-title"]
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.currentSectionSuggestionsSlice, (suggestion, index) => {
          return openBlock(), createBlock(_component_cx_translation_suggestion, {
            key: `section-suggestion-${index}`,
            class: "ma-0",
            suggestion,
            onClose: ($event) => $setup.discardSectionSuggestion(suggestion),
            onClick: ($event) => $setup.startTranslation(suggestion),
            onBookmark: ($event) => $setup.markFavoriteSectionSuggestion(suggestion)
          }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]);
        }), 128)),
        $setup.sectionSuggestionsLoading ? (openBlock(), createBlock(_component_mw_spinner, { key: 0 })) : createCommentVNode("", true)
      ], void 0),
      _: 1
    }),
    createBaseVNode("div", _hoisted_4$h, [
      $setup.showRefreshButton ? (openBlock(), createBlock(_component_mw_button, {
        key: 0,
        class: "ma-0 pa-4",
        type: "text",
        label: _ctx.$i18n("cx-suggestionlist-refresh"),
        outlined: false,
        icon: $setup.mwIconRefresh,
        onClick: $setup.onSuggestionRefresh
      }, null, 8, ["label", "icon", "onClick"])) : createCommentVNode("", true)
    ])
  ], 512)), [
    [vShow, $props.active]
  ]);
}
var CxSuggestionList = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$S]]);
const _sfc_main$R = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion,
    MwCard
  },
  setup() {
    const router2 = useRouter();
    const store2 = useStore();
    const favorites = computed(() => store2.state.suggestions.favorites || []);
    const startFavoriteTranslation = (suggestion) => __async(this, null, function* () {
      yield store2.dispatch("application/startFavoriteSectionTranslation", suggestion);
      router2.push({
        name: "sx-translation-confirmer",
        params: { previousRoute: "dashboard" }
      });
    });
    return {
      favorites,
      startFavoriteTranslation,
      unmarkFavoriteSectionSuggestion
    };
  }
};
const _hoisted_1$B = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cx_translation_suggestion = resolveComponent("cx-translation-suggestion");
  const _component_mw_card = resolveComponent("mw-card");
  const _directive_i18n = resolveDirective("i18n");
  return !!$setup.favorites.length ? (openBlock(), createBlock(_component_mw_card, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: withCtx(() => [
      withDirectives(createBaseVNode("h3", _hoisted_1$B, null, 512), [
        [_directive_i18n, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.favorites, (suggestion, index) => {
        return openBlock(), createBlock(_component_cx_translation_suggestion, {
          key: `favorite-${index}`,
          suggestion,
          onClick: ($event) => $setup.startFavoriteTranslation(suggestion),
          onBookmark: ($event) => $setup.unmarkFavoriteSectionSuggestion(suggestion)
        }, null, 8, ["suggestion", "onClick", "onBookmark"]);
      }), 128))
    ], void 0),
    _: 1
  })) : createCommentVNode("", true);
}
var CxFavoriteList = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$R]]);
var ExperimentalSupportBanner_vue_vue_type_style_index_0_lang = "";
const _sfc_main$Q = {
  name: "ExperimentalSupportBanner",
  components: { MwCol, MwRow, MwCard, MwIcon },
  data: () => ({
    mwIconLabFlask,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
};
const _hoisted_1$A = { class: "complementary" };
const _hoisted_2$p = { class: "complementary mt-4" };
const _hoisted_3$o = ["href"];
const _hoisted_4$g = { class: "complementary" };
const _hoisted_5$d = ["href"];
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_card = resolveComponent("mw-card");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createBlock(_component_mw_card, { class: "experimental-support-banner mb-1" }, {
    default: withCtx(() => [
      createVNode(_component_mw_row, null, {
        default: withCtx(() => [
          createVNode(_component_mw_col, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: withCtx(() => [
              createVNode(_component_mw_icon, { icon: _ctx.mwIconLabFlask }, null, 8, ["icon"])
            ], void 0, true),
            _: 1
          }),
          createVNode(_component_mw_col, null, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("h5", null, null, 512), [
                [_directive_i18n, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              withDirectives(createBaseVNode("p", _hoisted_1$A, null, 512), [
                [_directive_i18n, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              createBaseVNode("p", _hoisted_2$p, [
                withDirectives(createBaseVNode("a", {
                  target: "_blank",
                  href: _ctx.learnMoreUrl
                }, null, 8, _hoisted_3$o), [
                  [_directive_i18n, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              createBaseVNode("p", _hoisted_4$g, [
                withDirectives(createBaseVNode("a", {
                  target: "_blank",
                  href: _ctx.feedbackUrl
                }, null, 8, _hoisted_5$d), [
                  [_directive_i18n, void 0, "cx-dashboard-experimental-support-banner-share-feedback-anchor"]
                ])
              ])
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
var ExperimentalSupportBanner = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$Q]]);
const getInitialLanguagePair = (enabledTargetLanguages, supportedLanguageCodes) => {
  const urlParams = new URLSearchParams(location.search);
  const urlSourceLanguage = urlParams.get("from");
  const urlTargetLanguage = urlParams.get("to");
  const wikiLanguage = siteMapper.getCurrentWikiLanguageCode();
  const isEnabledLanguage = (language) => !enabledTargetLanguages || Array.isArray(enabledTargetLanguages) && enabledTargetLanguages.includes(language);
  const isSupportedLanguage = (language) => supportedLanguageCodes.includes(language);
  const defaultLanguages = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let targetLanguage;
  if (urlTargetLanguage && isEnabledLanguage(urlTargetLanguage) && isSupportedLanguage(urlTargetLanguage)) {
    targetLanguage = urlTargetLanguage;
  } else if (isEnabledLanguage(wikiLanguage) && isSupportedLanguage(wikiLanguage)) {
    targetLanguage = wikiLanguage;
  } else {
    targetLanguage = (enabledTargetLanguages == null ? void 0 : enabledTargetLanguages[0]) || defaultLanguages.targetLanguage;
  }
  const defaultSourceLanguages = [
    urlSourceLanguage,
    defaultLanguages.sourceLanguage,
    wikiLanguage,
    defaultLanguages.targetLanguage
  ];
  let sourceLanguage = defaultSourceLanguages.filter((language) => isSupportedLanguage(language)).find((language) => language !== targetLanguage);
  return { sourceLanguage, targetLanguage };
};
const initializeLanguages = () => __async(this, null, function* () {
  yield store.dispatch("mediawiki/fetchSupportedLanguageCodes");
  const { enabledTargetLanguages, supportedLanguageCodes } = useMediawikiState();
  const { sourceLanguage, targetLanguage } = getInitialLanguagePair(enabledTargetLanguages.value, supportedLanguageCodes.value);
  const wikiLanguage = siteMapper.getCurrentWikiLanguageCode();
  const translateInTarget = mw.config.get("wgContentTranslationTranslateInTarget");
  if (translateInTarget && targetLanguage !== wikiLanguage) {
    const urlParams = new URLSearchParams(location.search);
    const urlSourceArticleTitle = urlParams.get("page");
    const urlSourceSectionTitle = urlParams.get("section");
    window.location.href = siteMapper.getCXUrl(urlSourceArticleTitle, null, sourceLanguage, targetLanguage, { sx: true, section: urlSourceSectionTitle });
  }
  store.commit("application/setSourceLanguage", sourceLanguage);
  store.commit("application/setTargetLanguage", targetLanguage);
});
const startSectionTranslation = (router2, store2, title, previousRoute, eventSource) => __async(this, null, function* () {
  const { sourceLanguage, targetLanguage } = useApplicationState(store2);
  const suggestion = yield store2.dispatch("suggestions/loadSectionSuggestion", {
    sourceLanguage: sourceLanguage.value,
    targetLanguage: targetLanguage.value,
    sourceTitle: title
  });
  if (!suggestion) {
    return;
  }
  store2.dispatch("application/initializeSectionTranslation", suggestion);
  router2.push({
    name: "sx-translation-confirmer",
    params: { previousRoute, eventSource }
  });
});
const getEventSourceFromUrlCampaign = () => {
  const campaignEventSourcesMap = {
    mflanguagesearcher: "content_language_selector",
    mfrecenttranslation: "recent_translation",
    mfrecentedit: "recent_edit",
    mffrequentlanguages: "frequent_languages"
  };
  const urlParams = new URLSearchParams(location.search);
  const campaign = urlParams.get("campaign");
  return campaignEventSourcesMap[campaign];
};
const startSectionTranslationFromUrl = (router2, store2, logEvent2, pageTitle) => {
  const eventSource = getEventSourceFromUrlCampaign() || "direct_preselect";
  logEvent2({
    event_type: "dashboard_open",
    event_source: eventSource,
    content_translation_session_position: 0
  });
  startSectionTranslation(router2, store2, pageTitle, "dashboard", eventSource);
};
const getPageTitleFromUrl = () => {
  const urlParams = new URLSearchParams(location.search);
  const isSectionTranslation = urlParams.get("sx");
  const sourceTitle = urlParams.get("page");
  if (!isSectionTranslation || !sourceTitle) {
    return null;
  }
  return sourceTitle;
};
const initializeDashboard = (router2, store2, logEvent2) => __async(this, null, function* () {
  yield initializeLanguages();
  const pageTitle = getPageTitleFromUrl();
  if (pageTitle) {
    startSectionTranslationFromUrl(router2, store2, logEvent2, pageTitle);
    return;
  }
  logEvent2({
    event_type: "dashboard_open",
    event_source: "direct",
    content_translation_session_position: 0
  });
  yield store2.dispatch("suggestions/fetchFavorites");
  yield store2.dispatch("translator/fetchTranslations");
  store2.dispatch("suggestions/initializeSuggestions");
});
const _sfc_main$P = {
  name: "CxDashboard",
  components: {
    CxFavoriteList,
    CxSuggestionList,
    CxTranslationList,
    ExperimentalSupportBanner,
    MwBottomNavigation,
    MwButton,
    MwButtonGroup,
    MwRow
  },
  setup() {
    const active = ref("suggestions");
    const bananaI18n2 = useI18n();
    const listSelector = computed(() => [
      {
        value: "suggestions",
        props: {
          label: bananaI18n2.i18n("cx-translation-filter-suggested-translations"),
          icon: mwIconLightBulb,
          type: "text"
        }
      },
      {
        value: "draft",
        props: {
          label: bananaI18n2.i18n("cx-translation-filter-draft-translations"),
          icon: mwIconEdit,
          type: "text"
        }
      },
      {
        value: "published",
        props: {
          label: bananaI18n2.i18n("cx-translation-filter-published-translations"),
          icon: mwIconArticleCheck,
          type: "text"
        }
      }
    ]);
    onMounted(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const isSectionTranslation = urlParams.get("sx");
      if (isSectionTranslation) {
        active.value = "suggestions";
      }
    });
    const router2 = useRouter();
    const searchTranslation = () => router2.push({ name: "sx-article-search" });
    watch(active, () => window.scrollTo(0, 0));
    const store2 = useStore();
    initializeDashboard(router2, store2, useEventLogging());
    return {
      active,
      listSelector,
      mwIconAdd,
      mwIconArticleCheck,
      mwIconLightBulb,
      mwIconEdit,
      searchTranslation
    };
  }
};
const _hoisted_1$z = { key: 1 };
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_experimental_support_banner = resolveComponent("experimental-support-banner");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_button_group = resolveComponent("mw-button-group");
  const _component_cx_favorite_list = resolveComponent("cx-favorite-list");
  const _component_cx_suggestion_list = resolveComponent("cx-suggestion-list");
  const _component_cx_translation_list = resolveComponent("cx-translation-list");
  const _component_mw_bottom_navigation = resolveComponent("mw-bottom-navigation");
  return openBlock(), createElementBlock("div", null, [
    _ctx.$incompleteVersion ? (openBlock(), createBlock(_component_experimental_support_banner, {
      key: 0,
      class: "mb-4"
    })) : createCommentVNode("", true),
    createVNode(_component_mw_row, { class: "ma-0" }, {
      default: withCtx(() => [
        createVNode(_component_mw_button, {
          progressive: "",
          icon: $setup.mwIconAdd,
          label: _ctx.$i18n("cx-create-new-translation"),
          class: "col-md-4 col-xs-12 col-lg-3 my-4",
          onClick: $setup.searchTranslation
        }, null, 8, ["icon", "label", "onClick"])
      ], void 0),
      _: 1
    }),
    !_ctx.$incompleteVersion && _ctx.$mwui.breakpoint.mdAndUp ? (openBlock(), createElementBlock("nav", _hoisted_1$z, [
      createVNode(_component_mw_button_group, {
        items: $setup.listSelector,
        active: $setup.active,
        class: "justify-around",
        onSelect: _cache[0] || (_cache[0] = ($event) => $setup.active = $event)
      }, null, 8, ["items", "active"])
    ])) : createCommentVNode("", true),
    createVNode(_component_cx_favorite_list),
    createVNode(_component_cx_suggestion_list, {
      active: $setup.active === "suggestions"
    }, null, 8, ["active"]),
    !_ctx.$incompleteVersion ? (openBlock(), createBlock(_component_cx_translation_list, {
      key: 2,
      "translation-status": "published",
      active: $setup.active === "published"
    }, null, 8, ["active"])) : createCommentVNode("", true),
    !_ctx.$incompleteVersion ? (openBlock(), createBlock(_component_cx_translation_list, {
      key: 3,
      "translation-status": "draft",
      active: $setup.active === "draft"
    }, null, 8, ["active"])) : createCommentVNode("", true),
    !_ctx.$incompleteVersion && _ctx.$mwui.breakpoint.smAndDown ? (openBlock(), createBlock(_component_mw_bottom_navigation, {
      key: 4,
      active: $setup.active,
      "onUpdate:active": _cache[1] || (_cache[1] = ($event) => $setup.active = $event),
      items: $setup.listSelector
    }, null, 8, ["active", "items"])) : createCommentVNode("", true)
  ]);
}
var CXDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$P]]);
const _sfc_main$O = {
  name: "DashboardView",
  components: { CxDashboard: CXDashboard }
};
const _hoisted_1$y = { class: "cx-translation-dashboard" };
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cx_dashboard = resolveComponent("cx-dashboard");
  return openBlock(), createElementBlock("main", _hoisted_1$y, [
    createVNode(_component_cx_dashboard, { class: "col-xs-12 col-md-8 col-lg-7 col-offset-lg-1 mb-4 pb-12" })
  ]);
}
var Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$O]]);
const setTranslationURLParams = (sectionSuggestion) => {
  if (!history.pushState) {
    return;
  }
  const params = new URLSearchParams(location.search);
  params.set("page", sectionSuggestion == null ? void 0 : sectionSuggestion.sourceTitle);
  params.set("from", sectionSuggestion == null ? void 0 : sectionSuggestion.sourceLanguage);
  params.set("to", sectionSuggestion == null ? void 0 : sectionSuggestion.targetLanguage);
  params.set("sx", true);
  replaceUrl(Object.fromEntries(params));
};
const replaceUrl = (params) => {
  history.replaceState({}, document.title, getUrl("Special:ContentTranslation", params));
};
const useActionPanel = (sectionSuggestion) => {
  const firstMissingSectionTitle = computed(() => {
    var _a, _b;
    return (_b = (_a = sectionSuggestion.value.orderedMissingSections) == null ? void 0 : _a[0]) == null ? void 0 : _b.sourceTitle;
  });
  const missingCount = computed(() => sectionSuggestion.value.missingSectionsCount);
  const presentCount = computed(() => sectionSuggestion.value.presentSectionsCount);
  const translationExists = computed(() => {
    var _a;
    return !!((_a = sectionSuggestion.value) == null ? void 0 : _a.translationExists);
  });
  const targetArticlePath = computed(() => {
    var _a, _b;
    return siteMapper.getPageUrl(((_a = sectionSuggestion.value) == null ? void 0 : _a.targetLanguage) || "", ((_b = sectionSuggestion.value) == null ? void 0 : _b.targetTitle) || "");
  });
  const getActionButtonLabel = (isPrefilledSection) => {
    if (isPrefilledSection) {
      return "cx-sx-translation-confirmer-translate-prefilled-section-button-label";
    }
    if (!translationExists.value) {
      return "cx-sx-start-translation-button-label";
    }
    if (missingCount.value > 1 || missingCount.value === 1 && presentCount.value > 0) {
      return "cx-sx-select-section";
    } else if (missingCount.value === 1 && presentCount.value === 0) {
      return "cx-sx-translation-confirmer-action-view-section";
    } else if (missingCount.value === 0 && presentCount.value > 0) {
      return "cx-sx-select-section";
    } else if (missingCount.value === 0 && presentCount.value === 0) {
      return "cx-sx-translation-confirmer-action-new-translation";
    }
  };
  const actionInformationMessageArgs = computed(() => {
    let i18nArgs;
    if (missingCount.value > 1) {
      i18nArgs = [
        "cx-sx-existing-translation-additional-info",
        `"${firstMissingSectionTitle.value}"`,
        missingCount.value - 1
      ];
    } else if (missingCount.value === 1 && presentCount.value > 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
        `"${firstMissingSectionTitle.value}"`
      ];
    } else if (missingCount.value === 1 && presentCount.value === 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-single-missing-none-present",
        `"${firstMissingSectionTitle.value}"`
      ];
    } else if (presentCount.value > 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
      ];
    } else {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-none-missing-none-present"
      ];
    }
    return i18nArgs;
  });
  const isProgressiveButton = computed(() => {
    var _a;
    return !translationExists.value || ((_a = sectionSuggestion.value) == null ? void 0 : _a.missingSectionsCount) > 0;
  });
  return {
    actionInformationMessageArgs,
    getActionButtonLabel,
    isProgressiveButton,
    targetArticlePath,
    translationExists
  };
};
var useSectionSelectorClickHandler = (router2, store2) => {
  const urlParams = new URLSearchParams(location.search);
  const preFilledSectionTitle = ref(urlParams.get("section"));
  const { currentSourceSection, currentSectionSuggestion: sectionSuggestion } = useApplicationState(store2);
  const translationExists = computed(() => {
    var _a;
    return !!((_a = sectionSuggestion.value) == null ? void 0 : _a.translationExists);
  });
  const clearPreFilledSection = () => {
    preFilledSectionTitle.value = null;
    urlParams.delete("section");
    replaceUrl(Object.fromEntries(urlParams));
  };
  const onSectionSelectorClick = () => __async(this, null, function* () {
    if (!!preFilledSectionTitle.value) {
      yield store2.dispatch("application/selectPageSectionByTitle", preFilledSectionTitle.value);
      if (!!currentSourceSection.value) {
        router2.push({
          name: "sx-content-comparator",
          params: { force: true }
        });
      } else {
        clearPreFilledSection();
      }
    } else if (translationExists.value) {
      router2.push({ name: "sx-section-selector" });
    } else {
      yield store2.dispatch("application/selectPageSectionByIndex", 0);
      router2.push({ name: "sx-quick-tutorial", params: { force: true } });
    }
    setTranslationURLParams(sectionSuggestion.value);
  });
  return {
    clearPreFilledSection,
    onSectionSelectorClick,
    preFilledSectionTitle
  };
};
var SXTranslationConfirmerActionPanel_vue_vue_type_style_index_0_lang = "";
const _sfc_main$N = {
  name: "SxTranslationConfirmerActionPanel",
  components: {
    MwButton,
    MwRow,
    MwCol,
    MwIcon
  },
  setup() {
    const router2 = useRouter();
    const store2 = useStore();
    const colors2 = inject("colors");
    const { targetLanguageAutonym, currentSectionSuggestion } = useApplicationState(store2);
    const {
      clearPreFilledSection,
      onSectionSelectorClick,
      preFilledSectionTitle
    } = useSectionSelectorClickHandler(router2, store2);
    const {
      actionInformationMessageArgs,
      getActionButtonLabel,
      isProgressiveButton,
      targetArticlePath,
      translationExists
    } = useActionPanel(currentSectionSuggestion);
    const bananaI18n2 = useI18n();
    const actionButtonLabel = computed(() => bananaI18n2.i18n(getActionButtonLabel(!!preFilledSectionTitle.value)));
    const actionInformationMessage = computed(() => bananaI18n2.i18n(...actionInformationMessageArgs.value));
    const onMoreSectionsClick = () => {
      router2.push({ name: "sx-section-selector" });
      setTranslationURLParams(currentSectionSuggestion.value);
    };
    onMounted(() => {
      const preFilledSection = preFilledSectionTitle.value;
      if (!!preFilledSection && !currentSectionSuggestion.value.hasSectionTitle(preFilledSection)) {
        clearPreFilledSection();
      }
    });
    return {
      actionButtonLabel,
      actionInformationMessage,
      isProgressiveButton,
      mwIconLinkExternal,
      onMoreSectionsClick,
      onSectionSelectorClick,
      preFilledSectionTitle,
      targetArticlePath,
      targetLanguageAutonym,
      translationExists,
      colors: colors2
    };
  }
};
const _hoisted_1$x = { class: "sx-translation-confirmer-body pb-4" };
const _hoisted_2$o = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
};
const _hoisted_3$n = ["textContent"];
const _hoisted_4$f = {
  key: 1,
  class: "mt-1 px-4 pt-4"
};
const _hoisted_5$c = ["href"];
const _hoisted_6$5 = ["textContent"];
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_button = resolveComponent("mw-button");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1$x, [
    !!$setup.preFilledSectionTitle ? (openBlock(), createElementBlock("section", _hoisted_2$o, [
      withDirectives(createBaseVNode("h6", null, null, 512), [
        [_directive_i18n, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
      ]),
      createBaseVNode("h5", {
        class: "ma-0",
        textContent: toDisplayString($setup.preFilledSectionTitle)
      }, null, 8, _hoisted_3$n)
    ])) : $setup.translationExists ? (openBlock(), createElementBlock("section", _hoisted_4$f, [
      createVNode(_component_mw_row, {
        class: "sx-translation-confirmer__translation-status ma-0 pb-2",
        justify: "between"
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(_component_mw_col, {
            tag: "h5",
            class: "ma-0 pe-2"
          }, null, 512), [
            [_directive_i18n, [$setup.targetLanguageAutonym], "cx-sx-existing-translation-status"]
          ]),
          createVNode(_component_mw_col, { shrink: "" }, {
            default: withCtx(() => [
              createBaseVNode("a", {
                href: $setup.targetArticlePath,
                target: "_blank"
              }, [
                createVNode(_component_mw_icon, {
                  icon: $setup.mwIconLinkExternal,
                  size: "16",
                  "icon-color": $setup.colors.base30
                }, null, 8, ["icon", "icon-color"])
              ], 8, _hoisted_5$c)
            ], void 0, true),
            _: 1
          })
        ], void 0),
        _: 1
      }),
      createVNode(_component_mw_row, { class: "ma-0" }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, null, {
            default: withCtx(() => [
              createBaseVNode("span", {
                textContent: toDisplayString($setup.actionInformationMessage)
              }, null, 8, _hoisted_6$5)
            ], void 0, true),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ])) : createCommentVNode("", true),
    createVNode(_component_mw_row, {
      class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
      justify: !!$setup.preFilledSectionTitle ? "between" : "center"
    }, {
      default: withCtx(() => [
        $setup.preFilledSectionTitle ? (openBlock(), createBlock(_component_mw_col, {
          key: 0,
          shrink: ""
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(_component_mw_button, {
              large: "",
              progressive: "",
              type: "text",
              label: $setup.actionButtonLabel,
              onClick: $setup.onMoreSectionsClick
            }, null, 8, ["label", "onClick"]), [
              [_directive_i18n, void 0, "cx-sx-translation-confirmer-more-sections-button-label"]
            ])
          ], void 0, true),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_mw_col, { shrink: "" }, {
          default: withCtx(() => [
            createVNode(_component_mw_button, {
              large: "",
              progressive: $setup.isProgressiveButton,
              label: $setup.actionButtonLabel,
              onClick: $setup.onSectionSelectorClick
            }, null, 8, ["progressive", "label", "onClick"])
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    }, 8, ["justify"])
  ]);
}
var SxTranslationConfirmerActionPanel = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$N]]);
var SXArticleLanguageSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$M = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector
  },
  setup() {
    const { supportedLanguageCodes, enabledTargetLanguages } = useMediawikiState();
    const store2 = useStore();
    const currentLanguageTitleGroup = computed(() => store2.getters["application/getCurrentLanguageTitleGroup"]);
    const availableSourceLanguages = computed(() => {
      var _a;
      return ((_a = currentLanguageTitleGroup.value) == null ? void 0 : _a.titles.map((title) => title.lang)) || [];
    });
    const targetLanguages = computed(() => enabledTargetLanguages.value || supportedLanguageCodes.value);
    const onSourceLanguageSelected = (sourceLanguage) => store2.dispatch("application/updateSourceLanguage", sourceLanguage);
    const onTargetLanguageSelected = (targetLanguage) => store2.dispatch("application/updateTargetLanguage", targetLanguage);
    return {
      availableSourceLanguages,
      targetLanguages,
      onSourceLanguageSelected,
      onTargetLanguageSelected
    };
  }
};
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_translation_list_language_selector = resolveComponent("sx-translation-list-language-selector");
  return openBlock(), createBlock(_component_sx_translation_list_language_selector, {
    class: "sx-article-language-selector",
    "source-languages": $setup.availableSourceLanguages,
    "target-languages": $setup.targetLanguages,
    onSourceLanguageSelected: $setup.onSourceLanguageSelected,
    onTargetLanguageSelected: $setup.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "onSourceLanguageSelected", "onTargetLanguageSelected"]);
}
var SxArticleLanguageSelector = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$M]]);
var SXTranslationConfirmerArticleInformation_vue_vue_type_style_index_0_lang = "";
const _sfc_main$L = {
  name: "SxTranslationConfirmerArticleInformation",
  components: {
    MwRow,
    MwCol,
    MwIcon,
    MwButton
  },
  setup() {
    const store2 = useStore();
    const { currentSectionSuggestion: sectionSuggestion } = useApplicationState(store2);
    const favorites = computed(() => store2.state.suggestions.favorites || []);
    const isFavorite = computed(() => favorites.value.some((favorite) => sectionSuggestion.value.sourceTitle === favorite.title && sectionSuggestion.value.sourceLanguage === favorite.sourceLanguage && sectionSuggestion.value.targetLanguage === favorite.targetLanguage));
    const unmarkSuggestionAsFavorite = () => __async(this, null, function* () {
      return store2.dispatch("suggestions/removeFavoriteSuggestion", new FavoriteSuggestion({
        title: sectionSuggestion.value.sourceTitle,
        sourceLanguage: sectionSuggestion.value.sourceLanguage,
        targetLanguage: sectionSuggestion.value.targetLanguage
      }));
    });
    const markSuggestionAsFavorite = () => __async(this, null, function* () {
      return store2.dispatch("suggestions/doMarkSuggestionAsFavorite", sectionSuggestion.value);
    });
    const bookmarkIcon = computed(() => isFavorite.value ? mwIconBookmark : mwIconBookmarkOutline);
    const toggleFavorite = computed(() => isFavorite.value ? unmarkSuggestionAsFavorite : markSuggestionAsFavorite);
    const sourceArticle = computed(() => store2.getters["application/getCurrentPage"]);
    const sourceTitle = computed(() => {
      var _a;
      return (_a = sectionSuggestion.value) == null ? void 0 : _a.sourceTitle;
    });
    const sourceArticlePath = computed(() => {
      var _a;
      return siteMapper.getPageUrl(((_a = sectionSuggestion.value) == null ? void 0 : _a.sourceLanguage) || "", sourceTitle.value || "");
    });
    const langLinksCount = computed(() => {
      var _a;
      return (_a = sourceArticle.value) == null ? void 0 : _a.langLinksCount;
    });
    const weeklyViews = computed(() => {
      var _a;
      return Object.values(((_a = sourceArticle.value) == null ? void 0 : _a.pageviews) || {}).reduce((sum, dayViews) => sum + dayViews, 0);
    });
    return {
      bookmarkIcon,
      isFavorite,
      langLinksCount,
      mwIconLanguage,
      mwIconLinkExternal,
      sourceArticle,
      sourceArticlePath,
      sourceTitle,
      toggleFavorite,
      weeklyViews
    };
  }
};
const _hoisted_1$w = ["textContent"];
const _hoisted_2$n = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" };
const _hoisted_3$m = ["textContent"];
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createBlock(_component_mw_row, {
    class: "sx-translation-confirmer__article-information ma-0 pa-4",
    align: "stretch",
    justify: "start"
  }, {
    default: withCtx(() => [
      createVNode(_component_mw_col, null, {
        default: withCtx(() => [
          createVNode(_component_mw_row, {
            justify: "between",
            class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_mw_col, {
                class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                tag: "a",
                href: $setup.sourceArticlePath,
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createBaseVNode("h5", {
                    class: "ma-0 me-1",
                    textContent: toDisplayString($setup.sourceTitle)
                  }, null, 8, _hoisted_1$w),
                  createVNode(_component_mw_icon, {
                    icon: $setup.mwIconLinkExternal,
                    size: "10",
                    "icon-color": _ctx.$mwui.colors.base30
                  }, null, 8, ["icon", "icon-color"])
                ], void 0, true),
                _: 1
              }, 8, ["href"]),
              createVNode(_component_mw_col, {
                shrink: "",
                align: "start"
              }, {
                default: withCtx(() => [
                  createVNode(_component_mw_button, {
                    class: "pa-0",
                    type: "icon",
                    icon: $setup.bookmarkIcon,
                    progressive: $setup.isFavorite,
                    onClick: $setup.toggleFavorite
                  }, null, 8, ["icon", "progressive", "onClick"])
                ], void 0, true),
                _: 1
              })
            ], void 0, true),
            _: 1
          }),
          createBaseVNode("p", _hoisted_2$n, [
            createVNode(_component_mw_icon, {
              icon: $setup.mwIconLanguage,
              size: "16",
              class: "me-1"
            }, null, 8, ["icon"]),
            createBaseVNode("span", {
              class: "pe-3",
              textContent: toDisplayString($setup.langLinksCount)
            }, null, 8, _hoisted_3$m),
            withDirectives(createBaseVNode("span", null, null, 512), [
              [_directive_i18n, [$setup.weeklyViews], "cx-sx-translation-confirmer-views-count"]
            ])
          ])
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
var SxTranslationConfirmerArticleInformation = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$L]]);
function getVEOverlay(overlayElement) {
  overlayElement.$el = $(overlayElement);
  return overlayElement;
}
function getSurface(veTarget, content, lang, dir) {
  veTarget.clearSurfaces();
  const dmDoc = ve.dm.converter.getModelFromDom(ve.createDocumentFromHtml(content || "<span class='sx-edit-dummy-node' />"), { lang, dir });
  const surface = veTarget.createSurface(dmDoc);
  veTarget.surfaces.push(surface);
  veTarget.setSurface(surface);
  surface.initialize();
  return surface;
}
function getReferenceRendering() {
  var refNode = this.getReferenceNode();
  if (refNode) {
    this.view = new ve.ui.MWPreviewElement(refNode, {
      useView: true
    });
    this.view.once("render", this.context.updateDimensions.bind(this.context));
    return this.view.$element;
  } else {
    return $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
  }
}
function getTarget(editorConfig, overlayEl) {
  return __async(this, null, function* () {
    yield loadVEModules();
    OO.ui.isMobile = () => true;
    yield mw.libs.ve.targetLoader.loadModules("visual");
    const overlay = getVEOverlay(overlayEl);
    return new ve.init.mw.SectionTranslationTarget(overlay, editorConfig);
  });
}
var VisualEditor_vue_vue_type_style_index_0_lang = "";
const _sfc_main$K = {
  name: "VisualEditor",
  props: {
    content: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    dir: {
      type: String,
      default: "auto"
    }
  },
  emits: ["ready", "close", "edit-completed"],
  setup(props, context) {
    const sxeditor = ref(null);
    let veSurface = null;
    const editedContent = computed(() => veSurface.getHtml());
    const clearVisualEditor = () => {
      veSurface.destroy();
      sxeditor.value.querySelector(".toolbar").innerHTML = "";
    };
    const closeEditor = () => {
      clearVisualEditor();
      context.emit("close");
    };
    const onNext = () => {
      context.emit("edit-completed", editedContent.value);
      clearVisualEditor();
    };
    const editorConfig = {
      placeholder: false,
      log: console.log,
      sectionId: 0,
      onBack: closeEditor,
      onNext,
      language: props.language,
      title: props.title,
      siteMapper: new mw.cx.SiteMapper()
    };
    const init = () => __async(this, null, function* () {
      const veTarget = yield getTarget(editorConfig, sxeditor.value);
      context.emit("ready");
      sxeditor.value.appendChild(veTarget.$element[0]);
      veSurface = getSurface(veTarget, props.content, props.language, props.dir);
      ve.ui.MWReferenceContextItem.prototype.getRendering = getReferenceRendering;
    });
    onMounted(init);
    return { sxeditor };
  }
};
const _hoisted_1$v = ["lang", "dir"];
const _hoisted_2$m = /* @__PURE__ */ createBaseVNode("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "toolbar" })
], -1);
const _hoisted_3$l = ["lang", "dir"];
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "sxeditor",
    lang: $props.language,
    dir: $props.dir,
    class: "visual-editor"
  }, [
    _hoisted_2$m,
    createBaseVNode("div", {
      class: "surface pa-5",
      lang: $props.language,
      dir: $props.dir
    }, null, 8, _hoisted_3$l)
  ], 8, _hoisted_1$v);
}
var VisualEditor = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$K]]);
function loadVEModules() {
  return mw.loader.using("mw.cx3.ve");
}
var SXTranslationConfirmer_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$J = {
  name: "SxTranslationConfirmer",
  components: {
    MwIcon,
    SxTranslationConfirmerArticleInformation,
    MwRow,
    MwCol,
    MwButton,
    SxArticleLanguageSelector,
    SxTranslationConfirmerActionPanel
  },
  setup() {
    const store2 = useStore();
    const articleImageSource = computed(() => {
      var _a;
      const sourceArticle = store2.getters["application/getCurrentPage"];
      return (_a = sourceArticle == null ? void 0 : sourceArticle.image) == null ? void 0 : _a.source;
    });
    const route = useRoute();
    const { previousRoute, eventSource } = route.params;
    const logEvent2 = useEventLogging();
    onMounted(() => {
      store2.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles");
      logEvent2({
        event_type: "dashboard_translation_start",
        event_source: eventSource
      });
      loadVEModules();
    });
    const router2 = useRouter();
    const onClose = () => {
      store2.dispatch("application/clearCurrentSectionSuggestion");
      replaceUrl(null);
      router2.push({ name: previousRoute });
    };
    return {
      articleImageSource,
      mwIconArticle,
      mwIconClose,
      onClose
    };
  }
};
const _hoisted_1$u = { class: "sx-translation-confirmer" };
const _hoisted_2$l = { class: "mb-0" };
const _hoisted_3$k = { class: "sx-translation-confirmer__article-image flex justify-center" };
const _hoisted_4$e = ["src"];
const _hoisted_5$b = { class: "ma-3" };
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_sx_translation_confirmer_article_information = resolveComponent("sx-translation-confirmer-article-information");
  const _component_sx_article_language_selector = resolveComponent("sx-article-language-selector");
  const _component_sx_translation_confirmer_action_panel = resolveComponent("sx-translation-confirmer-action-panel");
  const _directive_i18n = resolveDirective("i18n");
  const _directive_i18n_html = resolveDirective("i18n-html");
  return openBlock(), createElementBlock("section", _hoisted_1$u, [
    createVNode(_component_mw_row, {
      class: "sx-translation-confirmer__header ma-0 py-3",
      align: "stretch",
      justify: "start"
    }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, {
          grow: "",
          class: "px-4",
          align: "center"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("h5", _hoisted_2$l, null, 512), [
              [_directive_i18n, void 0, "cx-sx-translation-confirmer-title"]
            ])
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, {
          shrink: "",
          align: "start",
          class: "pe-4"
        }, {
          default: withCtx(() => [
            createVNode(_component_mw_button, {
              class: "pa-0",
              type: "icon",
              icon: $setup.mwIconClose,
              "icon-size": 20,
              onClick: $setup.onClose
            }, null, 8, ["icon", "onClick"])
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    createBaseVNode("div", _hoisted_3$k, [
      $setup.articleImageSource ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: $setup.articleImageSource
      }, null, 8, _hoisted_4$e)) : (openBlock(), createBlock(_component_mw_icon, {
        key: 1,
        size: "120",
        icon: $setup.mwIconArticle,
        "icon-color": _ctx.$mwui.colors.primary
      }, null, 8, ["icon", "icon-color"]))
    ]),
    createVNode(_component_sx_translation_confirmer_article_information),
    createVNode(_component_sx_article_language_selector),
    createVNode(_component_sx_translation_confirmer_action_panel),
    createVNode(_component_mw_row, {
      justify: "center",
      class: "sx-translation-confirmer__license ma-0"
    }, {
      default: withCtx(() => [
        createBaseVNode("p", _hoisted_5$b, [
          withDirectives(createBaseVNode("small", null, null, 512), [
            [_directive_i18n_html, void 0, "cx-license-agreement"]
          ])
        ])
      ], void 0),
      _: 1
    })
  ]);
}
var SxTranslationConfirmer = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$J]]);
var SXTranslationConfirmer_vue_vue_type_style_index_0_lang = "";
const _sfc_main$I = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mdAndDown
      };
    }
  }
};
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_translation_confirmer = resolveComponent("sx-translation-confirmer");
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["sx-translation-confirmer-view", $options.classes])
  }, [
    createVNode(_component_sx_translation_confirmer)
  ], 2);
}
var SXTranslationConfirmer = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$I]]);
const _sfc_main$H = {
  name: "SxSectionSelectorViewArticleItem",
  components: {
    MwRow,
    MwButton
  },
  props: {
    path: {
      type: String,
      required: true
    },
    autonym: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconLinkExternal
  })
};
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createBlock(_component_mw_row, {
    tag: "li",
    class: "ma-0"
  }, {
    default: withCtx(() => [
      createVNode(_component_mw_button, {
        href: $props.path,
        target: "_blank",
        class: "col justify-between py-3 px-4",
        indicator: _ctx.mwIconLinkExternal,
        label: _ctx.$i18n("cx-sx-section-selector-view-article-button-label", $props.autonym),
        type: "text",
        outlined: false
      }, null, 8, ["href", "indicator", "label"])
    ], void 0),
    _: 1
  });
}
var SxSectionSelectorViewArticleItem = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$H]]);
var SXSectionSelectorHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$G = {
  name: "SxSectionSelectorHeader",
  components: {
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    }
  },
  emits: ["close"],
  data: () => ({
    mwIconClose
  })
};
const _hoisted_1$t = { class: "sx-section-selector__header pa-4" };
const _hoisted_2$k = { class: "sx-section-selector__header-text ma-0" };
const _hoisted_3$j = ["textContent"];
const _hoisted_4$d = { class: "pt-0 ma-0" };
const _hoisted_5$a = { class: "ma-0" };
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("div", _hoisted_1$t, [
    createVNode(_component_mw_row, { class: "ma-0 pb-3" }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("h6", _hoisted_2$k, null, 512), [
              [_directive_i18n, void 0, "cx-sx-section-selector-title"]
            ]),
            createBaseVNode("h2", {
              class: "sx-section-selector__title ma-0 py-0",
              textContent: toDisplayString($props.suggestion.sourceTitle)
            }, null, 8, _hoisted_3$j)
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, {
          shrink: "",
          class: "justify-end"
        }, {
          default: withCtx(() => [
            createVNode(_component_mw_button, {
              class: "pa-0",
              large: true,
              type: "icon",
              icon: _ctx.mwIconClose,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
            }, null, 8, ["icon"])
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    withDirectives(createBaseVNode("h4", _hoisted_4$d, null, 512), [
      [_directive_i18n, void 0, "cx-sx-section-selector-subtitle"]
    ]),
    withDirectives(createBaseVNode("p", _hoisted_5$a, null, 512), [
      [_directive_i18n, void 0, "cx-sx-section-selector-desc"]
    ])
  ]);
}
var SxSectionSelectorHeader = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$G]]);
const _sfc_main$F = {
  name: "SxSectionSelectorSectionList",
  components: {
    MwRow,
    MwButton,
    MwIcon
  },
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  emits: ["select-section"],
  data: () => ({ mwIconArrowForward })
};
const _hoisted_1$s = { class: "sx-section-selector__sections-list ma-0 pa-0" };
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createElementBlock("ul", _hoisted_1$s, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.sections, (section) => {
      return openBlock(), createBlock(_component_mw_row, {
        key: section.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: withCtx(() => [
          createVNode(_component_mw_button, {
            class: "col justify-between py-3 px-4",
            label: section.sourceTitle,
            type: "text",
            outlined: false,
            onClick: ($event) => _ctx.$emit("select-section", section.sourceTitle)
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                targetSection: section.targetTitle,
                sourceSection: section.sourceTitle
              }),
              createVNode(_component_mw_icon, {
                icon: _ctx.mwIconArrowForward,
                class: "mw-ui-button__indicator"
              }, null, 8, ["icon"])
            ], void 0, true),
            _: 2
          }, 1032, ["label", "onClick"])
        ], void 0),
        _: 2
      }, 1024);
    }), 128))
  ]);
}
var SxSectionSelectorSectionList = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F]]);
var sadRobotSVG = '<svg\n    width="136px"\n    height="136px"\n    viewBox="0 0 136 136"\n    version="1.1"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n>\n    <title>sad-robot</title>\n    <g\n        id="sad-robot"\n        stroke="none"\n        stroke-width="1"\n        fill="none"\n        fill-rule="evenodd"\n    >\n        <g id="Group">\n            <circle\n                id="Oval"\n                fill="#EAECF0"\n                cx="68"\n                cy="68"\n                r="68"\n            ></circle>\n            <path\n                id="Mask"\n                d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z"\n                fill="#54595D"\n            ></path>\n        </g>\n    </g>\n</svg>';
var SXSectionSelectorSectionListMissing_vue_vue_type_style_index_0_lang = "";
const _sfc_main$E = {
  name: "SxSectionSelectorSectionListMissing",
  components: {
    SxSectionSelectorSectionList,
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    }
  },
  emits: ["select-section", "close"],
  setup(props) {
    const targetLanguageAutonym = computed(() => src.getAutonym(props.suggestion.targetLanguage));
    const emptySections = computed(() => Object.keys(props.suggestion.missingSections).length === 0);
    return {
      sadRobotSVG,
      getAutonym: src.getAutonym,
      getDir: src.getDir,
      targetLanguageAutonym,
      emptySections
    };
  }
};
const _hoisted_1$r = { class: "sx-section-selector__missing-sections py-2" };
const _hoisted_2$j = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" };
const _hoisted_3$i = ["lang", "dir", "textContent"];
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_section_selector_section_list = resolveComponent("sx-section-selector-section-list");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1$r, [
    withDirectives(createBaseVNode("h4", _hoisted_2$j, null, 512), [
      [_directive_i18n, [
        $setup.targetLanguageAutonym
      ], "cx-sx-section-selector-missing-sections-title"]
    ]),
    !$setup.emptySections ? (openBlock(), createBlock(_component_sx_section_selector_section_list, {
      key: 0,
      sections: $props.suggestion.orderedMissingSections,
      onSelectSection: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("select-section", $event))
    }, {
      default: withCtx(({ sourceSection }) => [
        createBaseVNode("h5", {
          class: "ma-0",
          lang: $props.suggestion.sourceLanguage,
          dir: $setup.getDir($props.suggestion.sourceLanguage),
          textContent: toDisplayString(sourceSection)
        }, null, 8, _hoisted_3$i)
      ]),
      _: 1
    }, 8, ["sections"])) : createCommentVNode("", true),
    $setup.emptySections ? (openBlock(), createBlock(_component_mw_row, {
      key: 1,
      class: "sx-section-selector__empty-missing-sections px-4 my-0"
    }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, {
          class: "py-6 justify-center",
          innerHTML: $setup.sadRobotSVG
        }, null, 8, ["innerHTML"]),
        createVNode(_component_mw_col, {
          cols: "12",
          class: "sx-section-selector__empty-missing-sections-details pa-0"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("h6", null, null, 512), [
              [_directive_i18n, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
            ])
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, {
          cols: "12",
          class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("p", null, null, 512), [
              [_directive_i18n, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
            ])
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, {
          cols: "12",
          class: "pa-0 mb-2"
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(_component_mw_button, {
              class: "sx-section-selector__empty-missing-sections__close-button px-0",
              type: "text",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
            }, null, 512), [
              [_directive_i18n, void 0, "cx-sx-section-selector-pick-other-translation-button-label"]
            ])
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
var SxSectionSelectorSectionListMissing = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E]]);
var SXSectionSelectorSectionListPresent_vue_vue_type_style_index_0_lang = "";
const _sfc_main$D = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList
  },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    }
  },
  emits: ["select-section"],
  setup(props) {
    const targetLanguageAutonym = computed(() => src.getAutonym(props.suggestion.targetLanguage));
    return { mwIconArrowForward, getAutonym: src.getAutonym, getDir: src.getDir, targetLanguageAutonym };
  }
};
const _hoisted_1$q = { class: "sx-section-selector__present-sections py-2" };
const _hoisted_2$i = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" };
const _hoisted_3$h = { class: "sx-section-selector__present-section-button-content" };
const _hoisted_4$c = ["lang", "dir", "textContent"];
const _hoisted_5$9 = ["lang", "dir", "textContent"];
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_section_selector_section_list = resolveComponent("sx-section-selector-section-list");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1$q, [
    withDirectives(createBaseVNode("h4", _hoisted_2$i, null, 512), [
      [_directive_i18n, [
        $setup.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    createVNode(_component_sx_section_selector_section_list, {
      sections: $props.suggestion.orderedPresentSections,
      onSelectSection: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("select-section", $event))
    }, {
      default: withCtx(({ sourceSection, targetSection }) => [
        createBaseVNode("div", _hoisted_3$h, [
          createBaseVNode("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: $props.suggestion.sourceLanguage,
            dir: $setup.getDir($props.suggestion.sourceLanguage),
            textContent: toDisplayString(sourceSection)
          }, null, 8, _hoisted_4$c),
          createBaseVNode("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: $props.suggestion.targetLanguage,
            dir: $setup.getDir($props.suggestion.targetLanguage),
            textContent: toDisplayString(targetSection)
          }, null, 8, _hoisted_5$9)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
var SxSectionSelectorSectionListPresent = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D]]);
var SXSectionSelector_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$C = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent,
    SxSectionSelectorSectionListMissing,
    SxSectionSelectorHeader,
    SxSectionSelectorViewArticleItem,
    MwRow,
    MwCol,
    MwIcon,
    SxArticleLanguageSelector
  },
  setup() {
    const store2 = useStore();
    const {
      currentSectionSuggestion: suggestion,
      sourceLanguageAutonym,
      targetLanguageAutonym
    } = useApplicationState(store2);
    const sourceArticlePath = computed(() => siteMapper.getPageUrl(suggestion.value.sourceLanguage, suggestion.value.sourceTitle));
    const targetArticlePath = computed(() => siteMapper.getPageUrl(suggestion.value.targetLanguage, suggestion.value.targetTitle));
    const viewArticleItems = computed(() => [
      { path: sourceArticlePath.value, autonym: sourceLanguageAutonym.value },
      { path: targetArticlePath.value, autonym: targetLanguageAutonym.value }
    ]);
    const router2 = useRouter();
    const goToDashboard = () => {
      replaceUrl(null);
      router2.push({ name: "dashboard" });
    };
    const selectSection = (sourceSectionTitle) => {
      store2.dispatch("application/selectPageSectionByTitle", sourceSectionTitle);
      router2.push({ name: "sx-content-comparator" });
    };
    return {
      goToDashboard,
      mwIconRobot,
      mwIconLabFlask,
      selectSection,
      suggestion,
      targetLanguageAutonym,
      viewArticleItems
    };
  }
};
const _hoisted_1$p = { class: "sx-section-selector" };
const _hoisted_2$h = { class: "sx-section-selector__body" };
const _hoisted_3$g = { class: "py-2" };
const _hoisted_4$b = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" };
const _hoisted_5$8 = { class: "ma-0 pa-0" };
const _hoisted_6$4 = { class: "sx-section-selector__additional-consideration-title" };
const _hoisted_7$3 = { href: "#" };
const _hoisted_8$2 = { class: "sx-section-selector__additional-consideration-title" };
const _hoisted_9$2 = { href: "#" };
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_section_selector_header = resolveComponent("sx-section-selector-header");
  const _component_sx_article_language_selector = resolveComponent("sx-article-language-selector");
  const _component_sx_section_selector_section_list_missing = resolveComponent("sx-section-selector-section-list-missing");
  const _component_sx_section_selector_section_list_present = resolveComponent("sx-section-selector-section-list-present");
  const _component_sx_section_selector_view_article_item = resolveComponent("sx-section-selector-view-article-item");
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1$p, [
    createVNode(_component_sx_section_selector_header, {
      suggestion: $setup.suggestion,
      onClose: $setup.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    createBaseVNode("section", _hoisted_2$h, [
      createVNode(_component_sx_article_language_selector),
      createVNode(_component_sx_section_selector_section_list_missing, {
        suggestion: $setup.suggestion,
        onSelectSection: $setup.selectSection,
        onClose: $setup.goToDashboard
      }, null, 8, ["suggestion", "onSelectSection", "onClose"]),
      createVNode(_component_sx_section_selector_section_list_present, {
        suggestion: $setup.suggestion,
        onSelectSection: $setup.selectSection
      }, null, 8, ["suggestion", "onSelectSection"]),
      createBaseVNode("section", _hoisted_3$g, [
        withDirectives(createBaseVNode("h4", _hoisted_4$b, null, 512), [
          [_directive_i18n, [
            $setup.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        createBaseVNode("ul", _hoisted_5$8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.viewArticleItems, (item, index) => {
            return openBlock(), createBlock(_component_sx_section_selector_view_article_item, {
              key: `view-article-item-${index}`,
              path: item.path,
              autonym: item.autonym
            }, null, 8, ["path", "autonym"]);
          }), 128))
        ])
      ]),
      createVNode(_component_mw_row, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, {
            cols: "12",
            md: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: withCtx(() => [
              createBaseVNode("h6", _hoisted_6$4, [
                createVNode(_component_mw_icon, {
                  icon: $setup.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                createTextVNode(" " + toDisplayString(_ctx.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              withDirectives(createBaseVNode("p", null, null, 512), [
                [_directive_i18n, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              withDirectives(createBaseVNode("a", _hoisted_7$3, null, 512), [
                [_directive_i18n, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ], void 0, true),
            _: 1
          }),
          createVNode(_component_mw_col, {
            cols: "12",
            md: "6",
            class: "px-4 py-5"
          }, {
            default: withCtx(() => [
              createBaseVNode("h6", _hoisted_8$2, [
                createVNode(_component_mw_icon, {
                  icon: $setup.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                createTextVNode(" " + toDisplayString(_ctx.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              withDirectives(createBaseVNode("p", null, null, 512), [
                [_directive_i18n, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              withDirectives(createBaseVNode("a", _hoisted_9$2, null, 512), [
                [_directive_i18n, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ], void 0, true),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ])
  ]);
}
var SXSectionSelector$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C]]);
var SXSectionSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$B = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: SXSectionSelector$1
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mdAndDown
      };
    }
  }
};
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_section_selector = resolveComponent("sx-section-selector");
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["sx-section-selector-view", $options.classes])
  }, [
    createVNode(_component_sx_section_selector)
  ], 2);
}
var SXSectionSelector = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B]]);
const useListSelector = (props) => {
  const { sourceLanguageAutonym, targetLanguageAutonym } = useApplicationState(useStore());
  const bananaI18n2 = useI18n();
  return computed(() => {
    const sourceSelectorItem = {
      value: "source_section",
      props: {
        label: bananaI18n2.i18n("cx-sx-content-comparator-source-selector-title", sourceLanguageAutonym.value),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let targetSelectorItem;
    switch (true) {
      case props.isMappedSection:
        targetSelectorItem = {
          value: "target_section",
          props: {
            label: bananaI18n2.i18n("cx-sx-content-comparator-target-selector-target-section-title", targetLanguageAutonym.value),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        targetSelectorItem = {
          value: "target_article",
          props: {
            label: bananaI18n2.i18n("cx-sx-content-comparator-target-selector-full-article-title", targetLanguageAutonym.value),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }
    return [sourceSelectorItem, targetSelectorItem];
  });
};
var SourceVsTargetSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$A = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup },
  props: {
    selection: {
      type: String,
      required: true
    },
    isMappedSection: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:selection"],
  setup(props, { emit }) {
    const updateSelection = (selection) => emit("update:selection", selection);
    const listSelector = useListSelector(props);
    watch(() => props.isMappedSection, () => {
      if (!listSelector.value.map((item) => item.value).includes(props.selection)) {
        updateSelection(listSelector.value[0].value);
      }
    });
    return {
      listSelector,
      updateSelection
    };
  }
};
const _hoisted_1$o = { class: "sx-content-comparator__source-target-selector" };
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button_group = resolveComponent("mw-button-group");
  return openBlock(), createElementBlock("div", _hoisted_1$o, [
    createVNode(_component_mw_button_group, {
      items: $setup.listSelector,
      active: $props.selection,
      onSelect: $setup.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
var SxContentComparatorSourceVsTargetSelector = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A]]);
const useCompareContents = (store2) => {
  const discardedSections = ref([]);
  const {
    currentSectionSuggestion: suggestion,
    currentSourceSection: sourceSection
  } = useApplicationState(store2);
  const targetTitle = computed(() => suggestion.value.targetTitle);
  const sourceSectionTitle = computed(() => store2.getters["application/getCurrentSourceSectionTitle"]);
  const targetPage = computed(() => store2.getters["mediawiki/getPage"](suggestion.value.targetLanguage, targetTitle.value));
  const activeSectionTargetTitle = computed(() => suggestion.value.missingSections[sourceSectionTitle.value] || suggestion.value.presentSections[sourceSectionTitle.value] || "");
  const targetSectionAnchor = computed(() => {
    var _a;
    return (((_a = targetSection.value) == null ? void 0 : _a.title) || "").replace(/ /g, "_");
  });
  const targetSection = computed(() => {
    var _a;
    return (_a = targetPage.value) == null ? void 0 : _a.getSectionByTitle(activeSectionTargetTitle.value);
  });
  const sourceSectionContent = computed(() => {
    var _a;
    return (_a = sourceSection.value) == null ? void 0 : _a.html;
  });
  const targetSectionContent = computed(() => {
    var _a;
    return (_a = targetSection.value) == null ? void 0 : _a.html;
  });
  const isCurrentSectionMapped = computed(() => !store2.getters["application/isCurrentSourceSectionMissing"] && !discardedSections.value.includes(activeSectionTargetTitle.value));
  return {
    activeSectionTargetTitle,
    discardedSections,
    isCurrentSectionMapped,
    sourceSectionContent,
    sourceSectionTitle,
    targetPage,
    targetSectionAnchor,
    targetSectionContent
  };
};
var SXContentComparatorContentHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$z = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector,
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    sourceVsTargetSelection: {
      type: String,
      required: true
    },
    isMappedSection: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:sourceVsTargetSelection", "translation-button-clicked"],
  setup(props, context) {
    const store2 = useStore();
    const isSticky = ref(false);
    const { currentSectionSuggestion: suggestion } = useApplicationState(store2);
    const sourceSectionTitle = computed(() => store2.getters["application/getCurrentSourceSectionTitle"]);
    const sourceSectionAnchor = computed(() => store2.getters["application/getCurrentSourceSectionAnchor"]);
    const updateSelection = (selection) => context.emit("update:sourceVsTargetSelection", selection);
    const { activeSectionTargetTitle, targetSectionAnchor } = useCompareContents(store2);
    const activeContent = computed(() => {
      switch (props.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: sourceSectionTitle.value,
            path: `${siteMapper.getPageUrl(suggestion.value.sourceLanguage, suggestion.value.sourceTitle)}#${sourceSectionAnchor.value}`,
            lang: suggestion.value.sourceLanguage,
            dir: src.getDir(suggestion.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: suggestion.value.targetTitle,
            path: targetArticlePath.value,
            lang: suggestion.value.targetLanguage,
            dir: src.getDir(suggestion.value.targetLanguage)
          };
        default:
          return {
            title: activeSectionTargetTitle.value,
            path: `${targetArticlePath.value}#${targetSectionAnchor.value}`
          };
      }
    });
    const targetArticlePath = computed(() => siteMapper.getPageUrl(suggestion.value.targetLanguage, suggestion.value.targetTitle));
    const contentHeader = ref(null);
    onMounted(() => {
      const observer = new IntersectionObserver(([e]) => {
        isSticky.value = e.intersectionRect.height < e.boundingClientRect.height;
      }, { threshold: [1] });
      observer.observe(contentHeader.value.$el);
    });
    return {
      activeContent,
      contentHeader,
      isSticky,
      mwIconLinkExternal,
      mwIconEdit,
      updateSelection
    };
  }
};
const _hoisted_1$n = ["lang", "dir", "textContent"];
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_content_comparator_source_vs_target_selector = resolveComponent("sx-content-comparator-source-vs-target-selector");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createBlock(_component_mw_row, {
    ref: "contentHeader",
    class: normalizeClass(["sx-content-comparator__content-header ma-0 pt-1", { sticky: $setup.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: $setup.isSticky
  }, {
    default: withCtx(() => [
      createVNode(_component_sx_content_comparator_source_vs_target_selector, {
        "is-mapped-section": $props.isMappedSection,
        selection: $props.sourceVsTargetSelection,
        "onUpdate:selection": $setup.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      createVNode(_component_mw_row, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, null, {
            default: withCtx(() => [
              createBaseVNode("h3", {
                lang: $setup.activeContent.lang,
                dir: $setup.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: toDisplayString($setup.activeContent.title)
              }, null, 8, _hoisted_1$n)
            ], void 0, true),
            _: 1
          }),
          createVNode(_component_mw_col, { shrink: "" }, {
            default: withCtx(() => [
              $setup.isSticky ? (openBlock(), createBlock(_component_mw_button, {
                key: 0,
                icon: $setup.mwIconEdit,
                progressive: "",
                label: _ctx.$i18n("cx-sx-content-comparator-content-header-translate-button-label"),
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (openBlock(), createBlock(_component_mw_button, {
                key: 1,
                class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                icon: $setup.mwIconLinkExternal,
                type: "icon",
                href: $setup.activeContent.path,
                target: "_blank"
              }, null, 8, ["icon", "href"]))
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  }, 8, ["class", "reverse"]);
}
var SxContentComparatorContentHeader = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
const _sfc_main$y = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol,
    MwButton
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const store2 = useStore();
    const sourceSectionTitle = computed(() => store2.getters["application/getCurrentSourceSectionTitle"]);
    const currentTitleIndex = computed(() => props.sectionSourceTitles.indexOf(sourceSectionTitle.value));
    const goToPreviousSection = () => {
      const previousIndex = (currentTitleIndex.value - 1 + props.sectionSourceTitles.length) % props.sectionSourceTitles.length;
      store2.dispatch("application/selectPageSectionByIndex", previousIndex);
    };
    const goToNextSection = () => {
      const nextIndex = (currentTitleIndex.value + 1) % props.sectionSourceTitles.length;
      store2.dispatch("application/selectPageSectionByIndex", nextIndex);
    };
    return {
      goToNextSection,
      goToPreviousSection,
      mwIconPrevious,
      mwIconArrowForward
    };
  }
};
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_col = resolveComponent("mw-col");
  return openBlock(), createBlock(_component_mw_col, {
    class: "justify-end",
    align: "center"
  }, {
    default: withCtx(() => [
      createVNode(_component_mw_button, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: $setup.mwIconPrevious,
        onClick: $setup.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      createVNode(_component_mw_button, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: $setup.mwIconArrowForward,
        onClick: $setup.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ], void 0),
    _: 1
  });
}
var SxContentComparatorHeaderNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
var SXContentComparatorHeaderMappedSection_vue_vue_type_style_index_0_lang = "";
const _sfc_main$x = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    },
    targetSectionTitle: {
      type: String,
      required: true
    },
    discardedSections: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    mwIconTrash,
    mwIconUndo
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n("cx-sx-content-comparator-mapped-section-header-title", src.getAutonym(this.suggestion.targetLanguage));
    }
  },
  methods: {
    discardMapping() {
      if (!this.isDiscardedSection) {
        this.$emit("update:discardedSections", [
          ...this.discardedSections,
          this.targetSectionTitle
        ]);
      }
    },
    undoDiscard() {
      if (this.isDiscardedSection) {
        this.$emit("update:discardedSections", this.discardedSections.filter((sectionTitle) => sectionTitle !== this.targetSectionTitle));
      }
    }
  }
};
const _hoisted_1$m = { class: "sx-content-comparator-header__mapped-section" };
const _hoisted_2$g = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" };
const _hoisted_3$f = { key: 0 };
const _hoisted_4$a = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
const _hoisted_5$7 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("div", _hoisted_1$m, [
    createVNode(_component_mw_row, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, { grow: "" }, {
          default: withCtx(() => [
            createBaseVNode("h6", _hoisted_2$g, [
              createTextVNode(toDisplayString($options.mappedSectionHeaderTitle) + " ", 1),
              $options.isDiscardedSection ? withDirectives((openBlock(), createElementBlock("span", _hoisted_3$f, null, 512)), [
                [_directive_i18n, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : createCommentVNode("", true)
            ]),
            createBaseVNode("h6", {
              class: normalizeClass(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": $options.isDiscardedSection
              }])
            }, toDisplayString($props.targetSectionTitle), 3)
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, { shrink: "" }, {
          default: withCtx(() => [
            !$options.isDiscardedSection ? (openBlock(), createBlock(_component_mw_button, {
              key: 0,
              class: "pa-0",
              icon: _ctx.mwIconTrash,
              type: "icon",
              onClick: $options.discardMapping
            }, null, 8, ["icon", "onClick"])) : (openBlock(), createBlock(_component_mw_button, {
              key: 1,
              class: "pa-0",
              icon: _ctx.mwIconUndo,
              type: "icon",
              onClick: $options.undoDiscard
            }, null, 8, ["icon", "onClick"]))
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    !$options.isDiscardedSection ? withDirectives((openBlock(), createElementBlock("p", _hoisted_4$a, null, 512)), [
      [_directive_i18n, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ]) : withDirectives((openBlock(), createElementBlock("p", _hoisted_5$7, null, 512)), [
      [_directive_i18n, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ])
  ]);
}
var SxContentComparatorHeaderMappedSection = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
var SXContentComparatorHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$w = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection,
    SxContentComparatorHeaderNavigation,
    MwButton,
    MwCol,
    MwRow,
    MwIcon
  },
  props: {
    discardedSections: {
      type: Array,
      required: true
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const store2 = useStore();
    const {
      currentSectionSuggestion: suggestion,
      currentSourceSection: sourceSection
    } = useApplicationState(store2);
    const isCurrentSectionMissing = computed(() => store2.getters["application/isCurrentSourceSectionMissing"]);
    const isCurrentSectionPresent = computed(() => store2.getters["application/isCurrentSourceSectionPresent"]);
    const { activeSectionTargetTitle, sourceSectionTitle } = useCompareContents(store2);
    const sourceSectionContent = computed(() => {
      var _a;
      return (_a = sourceSection.value) == null ? void 0 : _a.html;
    });
    const sectionSourceTitles = computed(() => [
      ...Object.keys(suggestion.value.missingSections),
      ...Object.keys(suggestion.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle,
      isCurrentSectionMissing,
      isCurrentSectionPresent,
      mwIconArrowPrevious,
      mwIconEdit,
      mwIconEye,
      sectionSourceTitles,
      sourceSectionContent,
      sourceSectionTitle,
      suggestion,
      getDir: src.getDir
    };
  }
};
const _hoisted_1$l = { class: "sx-content-comparator__header pa-4" };
const _hoisted_2$f = ["lang", "dir"];
const _hoisted_3$e = ["lang", "dir"];
const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_sx_content_comparator_header_navigation = resolveComponent("sx-content-comparator-header-navigation");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_sx_content_comparator_header_mapped_section = resolveComponent("sx-content-comparator-header-mapped-section");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("div", _hoisted_1$l, [
    createVNode(_component_mw_button, {
      class: "py-2 pa-0",
      icon: $setup.mwIconArrowPrevious,
      label: _ctx.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      outlined: false,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
    }, null, 8, ["icon", "label"]),
    createVNode(_component_mw_row, { class: "my-1 py-2 mx-0" }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, { grow: "" }, {
          default: withCtx(() => [
            createBaseVNode("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: $setup.suggestion.sourceLanguage,
              dir: $setup.getDir($setup.suggestion.sourceLanguage)
            }, toDisplayString($setup.suggestion.sourceTitle), 9, _hoisted_2$f),
            createBaseVNode("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: $setup.suggestion.sourceLanguage,
              dir: $setup.getDir($setup.suggestion.sourceLanguage)
            }, toDisplayString($setup.sourceSectionTitle), 9, _hoisted_3$e)
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_sx_content_comparator_header_navigation, {
          cols: "2",
          "section-source-titles": $setup.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        createVNode(_component_mw_col, {
          cols: "12",
          sm: "12",
          md: "4",
          class: "py-2 mb-1"
        }, {
          default: withCtx(() => [
            createVNode(_component_mw_button, {
              icon: $setup.mwIconEdit,
              progressive: "",
              label: _ctx.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !$setup.sourceSectionContent,
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    $setup.isCurrentSectionMissing ? (openBlock(), createBlock(_component_mw_row, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, {
          shrink: "",
          class: "pe-2"
        }, {
          default: withCtx(() => [
            createVNode(_component_mw_icon, { icon: $setup.mwIconEye }, null, 8, ["icon"])
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, { class: "ma-0" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("strong", null, null, 512), [
              [_directive_i18n, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            _hoisted_4$9,
            withDirectives(createBaseVNode("span", null, null, 512), [
              [_directive_i18n, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    })) : createCommentVNode("", true),
    $setup.isCurrentSectionPresent ? (openBlock(), createBlock(_component_sx_content_comparator_header_mapped_section, {
      key: 1,
      suggestion: $setup.suggestion,
      "target-section-title": $setup.activeSectionTargetTitle,
      "discarded-sections": $props.discardedSections,
      "onUpdate:discardedSections": _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:discardedSections", $event))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : createCommentVNode("", true)
  ]);
}
var SxContentComparatorHeader = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
var NewSectionPlaceholder_vue_vue_type_style_index_0_lang = "";
const _sfc_main$v = {
  name: "SxContentComparatorNewSectionPlaceholder",
  props: {
    isMappedSection: {
      type: Boolean,
      required: true
    },
    i18n: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const placeholderTitle = computed(() => props.isMappedSection ? props.i18n("cx-sx-content-comparator-present-section-placeholder-title") : props.i18n("cx-sx-content-comparator-missing-section-placeholder-title"));
    return { placeholderTitle };
  }
};
const _hoisted_1$k = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" };
const _hoisted_2$e = ["innerHTML"];
const _hoisted_3$d = { key: 0 };
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1$k, [
    createBaseVNode("h5", { innerHTML: $setup.placeholderTitle }, null, 8, _hoisted_2$e),
    $props.isMappedSection ? withDirectives((openBlock(), createElementBlock("p", _hoisted_3$d, null, 512)), [
      [_directive_i18n, void 0, "cx-sx-content-comparator-present-section-placeholder-subtitle"]
    ]) : createCommentVNode("", true)
  ]);
}
var SxContentComparatorNewSectionPlaceholder = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
const useTargetArticlePreview = (store2, i18n) => {
  const { isCurrentSectionMapped, targetPage } = useCompareContents(store2);
  const { currentSectionSuggestion: suggestion } = useApplicationState(store2);
  const createNewSectionPlaceholderElement = () => {
    const placeholderInstance = createApp(SxContentComparatorNewSectionPlaceholder, {
      isMappedSection: isCurrentSectionMapped.value,
      i18n
    });
    return placeholderInstance.mount(document.createElement("div")).$el;
  };
  const getFirstAppendixTitleBySectionSuggestion = (suggestion2) => store2.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](suggestion2);
  const removeBaseElements = (articleElement) => {
    const baseElements = articleElement.getElementsByTagName("base");
    Array.from(baseElements).forEach((baseEl) => baseEl.parentNode.removeChild(baseEl));
  };
  return computed(() => {
    var _a;
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = (_a = targetPage.value) == null ? void 0 : _a.content;
    removeBaseElements(contentDiv);
    const placeholderEl = createNewSectionPlaceholderElement();
    const firstAppendixTitle = getFirstAppendixTitleBySectionSuggestion(suggestion.value);
    if (firstAppendixTitle) {
      const matchedHeaders = Array.from(contentDiv.querySelectorAll("h2")).filter((h2) => h2.textContent.match(firstAppendixTitle));
      if (matchedHeaders && matchedHeaders.length) {
        const firstAppendixSectionHeader = matchedHeaders[0].parentNode;
        firstAppendixSectionHeader.parentNode.insertBefore(placeholderEl, firstAppendixSectionHeader);
      }
    } else {
      contentDiv.appendChild(placeholderEl);
    }
    return contentDiv.innerHTML;
  });
};
var SXContentComparator_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$u = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder,
    SxContentComparatorHeader,
    SxContentComparatorContentHeader,
    MwSpinner
  },
  setup() {
    const store2 = useStore();
    const router2 = useRouter();
    const sourceVsTargetSelection = ref("source_section");
    const goToSectionSelector = () => router2.push({ name: "sx-section-selector" });
    const translateSection = () => {
      if (store2.getters["translator/hasSectionTranslations"]) {
        router2.push({ name: "sx-sentence-selector" });
        return;
      }
      router2.push({ name: "sx-quick-tutorial" });
    };
    const bananaI18n2 = useI18n();
    const i18n = bananaI18n2.i18n.bind(bananaI18n2);
    const {
      activeSectionTargetTitle,
      discardedSections,
      isCurrentSectionMapped,
      sourceSectionContent,
      targetSectionContent
    } = useCompareContents(store2);
    const targetPageContent = useTargetArticlePreview(store2, i18n);
    const {
      currentSectionSuggestion: suggestion,
      sourceLanguage,
      targetLanguage
    } = useApplicationState(store2);
    const targetTitle = computed(() => suggestion.value.targetTitle);
    watch(targetTitle, () => store2.dispatch("mediawiki/fetchPageContent", {
      sourceLanguage: targetLanguage.value,
      targetLanguage: sourceLanguage.value,
      sourceTitle: targetTitle.value
    }), { immediate: true });
    return {
      i18n,
      getDir: src.getDir,
      activeSectionTargetTitle,
      discardedSections,
      goToSectionSelector,
      isCurrentSectionMapped,
      sourceSectionContent,
      sourceVsTargetSelection,
      targetPageContent,
      targetSectionContent,
      translateSection,
      sourceLanguage,
      targetLanguage
    };
  }
};
const _hoisted_1$j = { class: "sx-content-comparator" };
const _hoisted_2$d = { class: "sx-content-comparator__source-content" };
const _hoisted_3$c = ["lang", "dir", "innerHTML"];
const _hoisted_4$8 = ["lang", "dir", "innerHTML"];
const _hoisted_5$6 = ["innerHTML"];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_content_comparator_header = resolveComponent("sx-content-comparator-header");
  const _component_sx_content_comparator_content_header = resolveComponent("sx-content-comparator-content-header");
  const _component_mw_spinner = resolveComponent("mw-spinner");
  const _component_sx_content_comparator_new_section_placeholder = resolveComponent("sx-content-comparator-new-section-placeholder");
  return openBlock(), createElementBlock("section", _hoisted_1$j, [
    createVNode(_component_sx_content_comparator_header, {
      "discarded-sections": $setup.discardedSections,
      "onUpdate:discarded-sections": _cache[0] || (_cache[0] = ($event) => $setup.discardedSections = $event),
      onTranslationButtonClicked: $setup.translateSection,
      onClose: $setup.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    createVNode(_component_sx_content_comparator_content_header, {
      "source-vs-target-selection": $setup.sourceVsTargetSelection,
      "onUpdate:source-vs-target-selection": _cache[1] || (_cache[1] = ($event) => $setup.sourceVsTargetSelection = $event),
      "is-mapped-section": $setup.isCurrentSectionMapped,
      onTranslationButtonClicked: $setup.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    createBaseVNode("section", _hoisted_2$d, [
      $setup.sourceVsTargetSelection === "source_section" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        !$setup.sourceSectionContent ? (openBlock(), createBlock(_component_mw_spinner, { key: 0 })) : createCommentVNode("", true),
        createBaseVNode("section", {
          lang: $setup.sourceLanguage,
          dir: $setup.getDir($setup.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: $setup.sourceSectionContent
        }, null, 8, _hoisted_3$c)
      ], 64)) : $setup.sourceVsTargetSelection === "target_article" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        !$setup.targetPageContent ? (openBlock(), createBlock(_component_mw_spinner, { key: 0 })) : createCommentVNode("", true),
        createBaseVNode("article", {
          lang: $setup.targetLanguage,
          dir: $setup.getDir($setup.targetLanguage),
          class: "px-4",
          innerHTML: $setup.targetPageContent
        }, null, 8, _hoisted_4$8)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        createBaseVNode("section", {
          class: "pa-4",
          innerHTML: $setup.targetSectionContent
        }, null, 8, _hoisted_5$6),
        createVNode(_component_sx_content_comparator_new_section_placeholder, {
          "is-mapped-section": $setup.isCurrentSectionMapped,
          i18n: $setup.i18n
        }, null, 8, ["is-mapped-section", "i18n"])
      ], 64))
    ])
  ]);
}
var SXContentComparator$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
var SXContentComparator_vue_vue_type_style_index_0_lang = "";
const _sfc_main$t = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: SXContentComparator$1
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mdAndDown
      };
    }
  }
};
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_content_comparator = resolveComponent("sx-content-comparator");
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["sx-content-comparator-view", $options.classes])
  }, [
    createVNode(_component_sx_content_comparator)
  ], 2);
}
var SXContentComparator = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
var SXTranslationSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$s = {
  name: "SxTranslationSelector",
  components: { MwCard, MwButton, MwDialog },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:active"],
  setup(props, context) {
    const emptyTextProviderKey = MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY;
    const originalTextProviderKey = MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY;
    const store2 = useStore();
    const {
      sourceLanguage,
      targetLanguage,
      currentSourceSection: currentPageSection,
      isSectionTitleSelected,
      selectedContentTranslationUnit
    } = useApplicationState(store2);
    const mtProviders = computed(() => store2.getters["mediawiki/getSupportedMTProviders"](sourceLanguage.value, targetLanguage.value));
    const apiMtProviders = computed(() => {
      const ignoredProviders = [originalTextProviderKey, emptyTextProviderKey];
      return mtProviders.value.filter((provider) => !ignoredProviders.includes(provider));
    });
    const proposedTranslations = computed(() => isSectionTitleSelected.value ? currentPageSection.value.proposedTitleTranslations : selectedContentTranslationUnit.value.proposedTranslations);
    const selectProvider = (provider) => {
      store2.dispatch("application/updateMTProvider", provider);
      close();
    };
    const close = () => context.emit("update:active", false);
    return {
      apiMtProviders,
      close,
      emptyTextProviderKey,
      getDir: src.getDir,
      mwIconClose,
      originalTextProviderKey,
      proposedTranslations,
      selectProvider,
      sourceLanguage
    };
  }
};
const _hoisted_1$i = { class: "mw-ui-dialog__header pa-4" };
const _hoisted_2$c = { class: "row ma-0 py-2" };
const _hoisted_3$b = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" };
const _hoisted_4$7 = { class: "mb-0" };
const _hoisted_5$5 = { class: "col shrink justify-center" };
const _hoisted_6$3 = { class: "pb-2 mb-0" };
const _hoisted_7$2 = { class: "sx-sentence-selector__translation-options-card-title mb-4" };
const _hoisted_8$1 = ["dir", "lang", "innerHTML"];
const _hoisted_9$1 = ["textContent"];
const _hoisted_10$1 = ["innerHTML"];
const _hoisted_11$1 = { class: "sx-sentence-selector__translation-options-card-title mb-4" };
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_card = resolveComponent("mw-card");
  const _component_mw_dialog = resolveComponent("mw-dialog");
  const _directive_i18n = resolveDirective("i18n");
  return $props.active ? (openBlock(), createBlock(_component_mw_dialog, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: withCtx(() => [
      createBaseVNode("div", _hoisted_1$i, [
        createBaseVNode("div", _hoisted_2$c, [
          createBaseVNode("div", _hoisted_3$b, [
            withDirectives(createBaseVNode("h4", _hoisted_4$7, null, 512), [
              [_directive_i18n, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          createBaseVNode("div", _hoisted_5$5, [
            createVNode(_component_mw_button, {
              type: "icon",
              icon: $setup.mwIconClose,
              class: "pa-0",
              onClick: $setup.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        withDirectives(createBaseVNode("h6", _hoisted_6$3, null, 512), [
          [_directive_i18n, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: withCtx(() => [
      createVNode(_component_mw_card, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.selectProvider($setup.originalTextProviderKey))
      }, {
        header: withCtx(() => [
          withDirectives(createBaseVNode("h5", _hoisted_7$2, null, 512), [
            [_directive_i18n, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("p", {
            dir: $setup.getDir($setup.sourceLanguage),
            lang: $setup.sourceLanguage,
            innerHTML: $setup.proposedTranslations[$setup.originalTextProviderKey]
          }, null, 8, _hoisted_8$1)
        ], void 0, true),
        _: 1
      }),
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.apiMtProviders, (mtProvider) => {
        return openBlock(), createBlock(_component_mw_card, {
          key: mtProvider,
          class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
          role: "button",
          onClick: ($event) => $setup.selectProvider(mtProvider)
        }, {
          header: withCtx(() => [
            createBaseVNode("h5", {
              class: "sx-sentence-selector__translation-options-card-title mb-4",
              textContent: toDisplayString(mtProvider)
            }, null, 8, _hoisted_9$1)
          ]),
          default: withCtx(() => [
            createBaseVNode("p", {
              innerHTML: $setup.proposedTranslations[mtProvider]
            }, null, 8, _hoisted_10$1)
          ], void 0, true),
          _: 2
        }, 1032, ["onClick"]);
      }), 128)),
      createVNode(_component_mw_card, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.selectProvider($setup.emptyTextProviderKey))
      }, {
        header: withCtx(() => [
          withDirectives(createBaseVNode("h5", _hoisted_11$1, null, 512), [
            [_directive_i18n, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: withCtx(() => [
          _hoisted_12$1
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  })) : createCommentVNode("", true);
}
var SxTranslationSelector = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
var SXSentenceSelectorContentHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$r = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon, MwCol },
  setup() {
    const store2 = useStore();
    const titleClass = "sx-sentence-selector__section-title";
    const currentPage = computed(() => store2.getters["application/getCurrentPage"]);
    const {
      currentSectionSuggestion: suggestion,
      currentSourceSection: currentPageSection,
      isSectionTitleSelected
    } = useApplicationState(store2);
    const sourceSectionTitle = computed(() => {
      var _a;
      return ((_a = currentPageSection.value) == null ? void 0 : _a.title) || currentPage.value.title;
    });
    const sourceArticlePath = computed(() => siteMapper.getPageUrl(suggestion.value.sourceLanguage, suggestion.value.sourceTitle));
    const isSectionTitleTranslated = computed(() => {
      var _a;
      return !!((_a = currentPageSection.value) == null ? void 0 : _a.translatedTitle);
    });
    const highLightClassPostfix = computed(() => isSectionTitleTranslated.value ? "translated" : "selected");
    const titleClasses = computed(() => {
      const classes = [titleClass];
      if (isSectionTitleSelected.value) {
        classes.push(`${titleClass}--${highLightClassPostfix.value}`);
      }
      return classes;
    });
    const selectSectionTitle = () => store2.dispatch("application/selectTranslationUnitById", 0);
    return {
      mwIconLinkExternal,
      selectSectionTitle,
      sourceArticlePath,
      sourceSectionTitle,
      suggestion,
      titleClasses
    };
  }
};
const _hoisted_1$h = ["href"];
const _hoisted_2$b = ["textContent"];
const _hoisted_3$a = ["innerHTML"];
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_col = resolveComponent("mw-col");
  return openBlock(), createBlock(_component_mw_col, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: withCtx(() => [
      createBaseVNode("a", {
        href: $setup.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        createBaseVNode("strong", {
          textContent: toDisplayString($setup.suggestion.sourceTitle)
        }, null, 8, _hoisted_2$b),
        createVNode(_component_mw_icon, {
          icon: $setup.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, _hoisted_1$h),
      createBaseVNode("h2", {
        class: normalizeClass(["pa-0 ma-0", $setup.titleClasses]),
        onClick: _cache[0] || (_cache[0] = (...args) => $setup.selectSectionTitle && $setup.selectSectionTitle(...args)),
        innerHTML: $setup.sourceSectionTitle
      }, null, 10, _hoisted_3$a)
    ], void 0),
    _: 1
  });
}
var SxSentenceSelectorContentHeader = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
var ProposedTranslationActionButtons_vue_vue_type_style_index_0_lang = "";
const _sfc_main$q = {
  name: "ProposedTranslationActionButtons",
  components: {
    MwRow,
    MwButton
  },
  emits: ["select-previous-segment", "apply-translation", "skip-translation"],
  setup() {
    const {
      currentSourceSection,
      proposedTranslation,
      isSectionTitleSelected
    } = useApplicationState(useStore());
    const isLastTranslationUnit = computed(() => currentSourceSection.value.isSelectedTranslationUnitLast);
    return {
      isLastTranslationUnit,
      isSectionTitleSelected,
      mwIconPrevious,
      mwIconArrowForward,
      proposedTranslation
    };
  }
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createBlock(_component_mw_row, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
    default: withCtx(() => [
      createVNode(_component_mw_button, {
        icon: $setup.mwIconPrevious,
        type: "icon",
        class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
        disabled: $setup.isSectionTitleSelected,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("select-previous-segment"))
      }, null, 8, ["icon", "disabled"]),
      createVNode(_component_mw_button, {
        type: "text",
        label: _ctx.$i18n("cx-sx-sentence-selector-apply-translation-button-label"),
        class: "sx-sentence-selector__apply-translation-button col grow pa-4",
        disabled: !$setup.proposedTranslation,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("apply-translation"))
      }, null, 8, ["label", "disabled"]),
      createVNode(_component_mw_button, {
        type: "text",
        indicator: $setup.mwIconArrowForward,
        label: _ctx.$i18n("cx-sx-sentence-selector-skip-translation-button-label"),
        class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
        disabled: $setup.isLastTranslationUnit,
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("skip-translation"))
      }, null, 8, ["indicator", "label", "disabled"])
    ], void 0),
    _: 1
  });
}
var ProposedTranslationActionButtons = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
var ProposedTranslationHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$p = {
  name: "ProposedTranslationHeader",
  components: {
    MwRow,
    MwCol,
    MwButton
  },
  emits: ["configure-options"],
  setup() {
    const store2 = useStore();
    const mtProvider = computed(() => store2.state.application.currentMTProvider);
    const bananaI18n2 = useI18n();
    const extraMTOptionLabels = computed(() => ({
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: bananaI18n2.i18n("cx-sx-sentence-selector-translation-options-original-card-title"),
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: bananaI18n2.i18n("cx-sx-sentence-selector-translation-options-empty-card-title")
    }));
    const mtOptionLabel = computed(() => extraMTOptionLabels.value[mtProvider.value] || bananaI18n2.i18n("cx-sx-sentence-selector-suggested-translation-title", mtProvider.value));
    return {
      mwIconEllipsis,
      mtOptionLabel
    };
  }
};
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createBlock(_component_mw_col, { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
    default: withCtx(() => [
      createVNode(_component_mw_row, { class: "ma-0 ps-5 pb-4" }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, {
            tag: "h6",
            grow: "",
            class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
            textContent: toDisplayString($setup.mtOptionLabel)
          }, null, 8, ["textContent"]),
          createVNode(_component_mw_col, {
            shrink: "",
            class: "pe-5"
          }, {
            default: withCtx(() => [
              createVNode(_component_mw_button, {
                icon: $setup.mwIconEllipsis,
                type: "icon",
                class: "sx-sentence-selector__proposed-translation__header-settings-button pa-0",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("configure-options"))
              }, null, 8, ["icon"])
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
var ProposedTranslationHeader = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
var ProposedTranslationCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$o = {
  name: "ProposedTranslationCard",
  components: {
    MwSpinner,
    MwCard,
    ProposedTranslationHeader,
    MwRow,
    MwCol,
    MwButton,
    ProposedTranslationActionButtons
  },
  emits: ["edit-translation", "configure-options"],
  setup() {
    const headerAndFooterHeight = ref(0);
    const header = ref(null);
    const footer = ref(null);
    const { currentMTProvider, targetLanguage, proposedTranslation } = useApplicationState(useStore());
    const contentsStyle = computed(() => ({
      "max-height": `calc(100% - ${headerAndFooterHeight.value}px)`
    }));
    const hasProposedTranslation = computed(() => !!proposedTranslation.value || currentMTProvider.value === MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY);
    const setHeaderAndFooterHeight = () => {
      headerAndFooterHeight.value = header.value.$el.clientHeight + footer.value.$el.clientHeight;
    };
    watch(currentMTProvider, setHeaderAndFooterHeight);
    onMounted(() => __async(this, null, function* () {
      yield nextTick();
      setHeaderAndFooterHeight();
    }));
    return {
      footer,
      getDir: src.getDir,
      header,
      mwIconEllipsis,
      mwIconEdit,
      proposedTranslation,
      hasProposedTranslation,
      targetLanguage,
      contentsStyle
    };
  }
};
const _hoisted_1$g = ["lang", "dir", "innerHTML"];
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_proposed_translation_header = resolveComponent("proposed-translation-header");
  const _component_mw_spinner = resolveComponent("mw-spinner");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_proposed_translation_action_buttons = resolveComponent("proposed-translation-action-buttons");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_card = resolveComponent("mw-card");
  return openBlock(), createBlock(_component_mw_card, { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
    default: withCtx(() => [
      createVNode(_component_mw_row, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: withCtx(() => [
          createVNode(_component_proposed_translation_header, {
            ref: "header",
            onConfigureOptions: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("configure-options"))
          }, null, 512),
          createVNode(_component_mw_col, {
            class: normalizeClass(["sx-sentence-selector__proposed-translation__contents px-5", {
              "sx-sentence-selector__proposed-translation__contents--empty": !$setup.hasProposedTranslation
            }]),
            style: normalizeStyle($setup.contentsStyle)
          }, {
            default: withCtx(() => [
              $setup.hasProposedTranslation ? (openBlock(), createElementBlock("section", {
                key: 0,
                lang: $setup.targetLanguage,
                dir: $setup.getDir($setup.targetLanguage),
                innerHTML: $setup.proposedTranslation
              }, null, 8, _hoisted_1$g)) : (openBlock(), createBlock(_component_mw_spinner, { key: 1 }))
            ], void 0, true),
            _: 1
          }, 8, ["class", "style"]),
          createVNode(_component_mw_col, {
            ref: "footer",
            shrink: "",
            class: "sx-sentence-selector__proposed-translation__footer"
          }, {
            default: withCtx(() => [
              createVNode(_component_mw_button, {
                icon: $setup.mwIconEdit,
                type: "text",
                label: _ctx.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                progressive: "",
                disabled: !$setup.hasProposedTranslation,
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("edit-translation", $setup.proposedTranslation))
              }, null, 8, ["icon", "label", "disabled"]),
              createVNode(_component_proposed_translation_action_buttons, normalizeProps(guardReactiveProps(_ctx.$attrs)), null, 16)
            ], void 0, true),
            _: 1
          }, 512)
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
var ProposedTranslationCard = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
const getContent = (subSection) => computed(() => {
  if (subSection.isBlockTemplate) {
    return subSection.isTranslated ? subSection.translatedContent : subSection.node.innerHTML;
  }
  const sentenceClass = "sx-sentence-selector__section-sentence";
  const cloneNode = subSection.node.cloneNode(true);
  const segments = Array.from(cloneNode.getElementsByClassName("cx-segment"));
  segments.forEach((segment) => {
    const sentence = subSection.getSentenceById(segment.dataset.segmentid);
    segment.classList.add(sentenceClass, "py-1", "me-1");
    const sentenceClasses = ["untranslated", "translated", "selected"].map((postfix) => `${sentenceClass}--${postfix}`);
    segment.classList.remove(...sentenceClasses);
    if (sentence.selected) {
      segment.classList.add(`${sentenceClass}--selected`);
    }
    const highLightPostfix = sentence.isTranslated ? "translated" : "untranslated";
    segment.classList.add(`${sentenceClass}--${highLightPostfix}`);
    segment.innerHTML = sentence.content;
  });
  return cloneNode.innerHTML;
});
var SubSection_vue_vue_type_style_index_0_lang = "";
const _sfc_main$n = {
  name: "SubSection",
  props: {
    subSection: {
      type: SubSection$1,
      required: true
    }
  },
  emits: ["bounce-translation"],
  setup(props, { emit }) {
    const subSectionRoot = ref(null);
    const content = getContent(props.subSection);
    onMounted(() => {
      subSectionRoot.value.addEventListener("click", (event) => {
        let translationUnit;
        if (props.subSection.isBlockTemplate) {
          translationUnit = props.subSection;
        } else if (event.target.classList.contains("cx-segment")) {
          translationUnit = props.subSection.getSentenceById(event.target.dataset.segmentid);
        }
        selectContentTranslationUnit(translationUnit);
      });
    });
    const store2 = useStore();
    const selectContentTranslationUnit = (translationUnit) => {
      if (translationUnit.selected) {
        emit("bounce-translation");
        return;
      }
      store2.dispatch("application/selectTranslationUnitById", translationUnit.id);
    };
    const rootClasses = computed(() => ({
      "sx-sentence-selector__subsection--block-selected": props.subSection.selected
    }));
    return {
      content,
      rootClasses,
      subSectionRoot
    };
  }
};
const _hoisted_1$f = ["innerHTML"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "subSectionRoot",
    class: normalizeClass(["sx-sentence-selector__subsection", $setup.rootClasses]),
    innerHTML: $setup.content
  }, null, 10, _hoisted_1$f);
}
var SubSection = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
var BlockTemplateAdaptationCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$m = {
  name: "BlockTemplateAdaptationCard",
  components: {
    MwSpinner,
    MwIcon,
    MwCard,
    MwRow,
    MwCol,
    MwButton,
    ProposedTranslationActionButtons
  },
  emits: ["edit-translation"],
  setup() {
    const {
      selectedContentTranslationUnit: selectedSubSection,
      targetLanguageAutonym,
      currentMTProvider,
      proposedTranslation: proposedBlockTranslation
    } = useApplicationState(useStore());
    const targetTemplateName = computed(() => {
      var _a;
      return (_a = selectedSubSection.value) == null ? void 0 : _a.getTargetBlockTemplateNameByProvider(currentMTProvider.value);
    });
    const translationLoaded = computed(() => typeof proposedBlockTranslation.value === "string");
    const sourceTemplateName = computed(() => {
      var _a;
      return (_a = selectedSubSection.value) == null ? void 0 : _a.sourceBlockTemplateName;
    });
    return {
      mwIconCheck,
      mwIconPuzzle,
      proposedBlockTranslation,
      sourceTemplateName,
      targetLanguageAutonym,
      targetTemplateName,
      translationLoaded
    };
  }
};
const _hoisted_1$e = { class: "block-template-adaptation-card__container pa-4" };
const _hoisted_2$a = {
  key: 0,
  class: "block-template-adaptation-card__body--success pa-4 mb-4"
};
const _hoisted_3$9 = ["textContent"];
const _hoisted_4$6 = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
};
const _hoisted_5$4 = { class: "block-template-adaptation-card__body__header pb-0 mb-0" };
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_spinner = resolveComponent("mw-spinner");
  const _component_proposed_translation_action_buttons = resolveComponent("proposed-translation-action-buttons");
  const _component_mw_card = resolveComponent("mw-card");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createBlock(_component_mw_card, { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$e, [
        createVNode(_component_mw_row, { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
          default: withCtx(() => [
            createVNode(_component_mw_col, { shrink: "" }, {
              default: withCtx(() => [
                createVNode(_component_mw_icon, {
                  icon: $setup.mwIconPuzzle,
                  class: "me-2"
                }, null, 8, ["icon"])
              ], void 0, true),
              _: 1
            }),
            createVNode(_component_mw_col, {
              class: "ma-0",
              tag: "h5",
              textContent: toDisplayString($setup.sourceTemplateName)
            }, null, 8, ["textContent"])
          ], void 0, true),
          _: 1
        }),
        !!$setup.targetTemplateName ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
          createVNode(_component_mw_row, { class: "block-template-adaptation-card__body__header ma-0 pb-1" }, {
            default: withCtx(() => [
              withDirectives(createVNode(_component_mw_col, { tag: "h5" }, null, 512), [
                [_directive_i18n, void 0, "sx-block-template-adaptation-card-body-header-success"]
              ]),
              createVNode(_component_mw_col, { shrink: "" }, {
                default: withCtx(() => [
                  createVNode(_component_mw_icon, { icon: $setup.mwIconCheck }, null, 8, ["icon"])
                ], void 0, true),
                _: 1
              })
            ], void 0, true),
            _: 1
          }),
          createBaseVNode("h5", {
            class: "block-template-adaptation-card__body__template-title pb-2",
            textContent: toDisplayString($setup.targetTemplateName)
          }, null, 8, _hoisted_3$9),
          createVNode(_component_mw_button, {
            class: "px-0",
            type: "text",
            progressive: "",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("edit-translation", $setup.proposedBlockTranslation))
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("span", null, null, 512), [
                [_directive_i18n, void 0, "sx-block-template-adaptation-card-edit-button-label"]
              ])
            ], void 0, true),
            _: 1
          })
        ])) : $setup.translationLoaded ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
          withDirectives(createBaseVNode("h5", _hoisted_5$4, null, 512), [
            [_directive_i18n, [
              $setup.targetLanguageAutonym
            ], "sx-block-template-adaptation-card-body-header-failure"]
          ])
        ])) : (openBlock(), createBlock(_component_mw_spinner, { key: 2 }))
      ]),
      createVNode(_component_proposed_translation_action_buttons, normalizeProps(guardReactiveProps(_ctx.$attrs)), null, 16)
    ], void 0),
    _: 1
  });
}
var BlockTemplateAdaptationCard = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
var TranslatedSegmentCardHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$l = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup },
  props: {
    selection: {
      type: String,
      required: true,
      validator: (value) => ["sentence", "paragraph"].includes(value)
    }
  },
  emits: ["update:selection"],
  setup(props, { emit }) {
    const { isSectionTitleSelected } = useApplicationState(useStore());
    const bananaI18n2 = useI18n();
    const scopeOptions = computed(() => [
      {
        value: "sentence",
        props: {
          label: bananaI18n2.i18n("cx-sx-sentence-selector-translated-segment-sentence-option"),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      },
      {
        value: "paragraph",
        props: {
          label: bananaI18n2.i18n("cx-sx-sentence-selector-translated-segment-paragraph-option"),
          type: "text",
          class: "px-0 py-4 mx-4",
          disabled: isSectionTitleSelected.value
        }
      }
    ]);
    const updateSelection = (selection) => emit("update:selection", selection);
    return { scopeOptions, updateSelection };
  }
};
const _hoisted_1$d = { class: "translated-segment-card-header" };
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button_group = resolveComponent("mw-button-group");
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
    createVNode(_component_mw_button_group, {
      items: $setup.scopeOptions,
      active: $props.selection,
      onSelect: $setup.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
var TranslatedSegmentCardHeader = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const _sfc_main$k = {
  name: "TranslatedSegmentCardActionButtons",
  components: {
    MwRow,
    MwButton
  },
  emits: ["select-previous-segment", "skip-translation"],
  setup() {
    const { currentSourceSection, isSectionTitleSelected } = useApplicationState(useStore());
    const isLastTranslationUnit = computed(() => currentSourceSection.value.isSelectedTranslationUnitLast);
    return {
      mwIconArrowForward,
      mwIconPrevious,
      isLastTranslationUnit,
      isSectionTitleSelected
    };
  }
};
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createBlock(_component_mw_row, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
    default: withCtx(() => [
      createVNode(_component_mw_button, {
        icon: $setup.mwIconPrevious,
        type: "icon",
        class: "sx-sentence-selector__previous-sentence-button col pa-4",
        disabled: $setup.isSectionTitleSelected,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("select-previous-segment"))
      }, null, 8, ["icon", "disabled"]),
      createVNode(_component_mw_button, {
        type: "icon",
        icon: $setup.mwIconArrowForward,
        class: "sx-sentence-selector__skip-translation-button col pa-4 items-start",
        disabled: $setup.isLastTranslationUnit,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("skip-translation"))
      }, null, 8, ["icon", "disabled"])
    ], void 0),
    _: 1
  });
}
var TranslatedSegmentCardActionButtons = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
var TranslatedSegmentCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$j = {
  name: "TranslatedSegmentCard",
  components: {
    TranslatedSegmentCardActionButtons,
    MwProgressBar,
    MwIcon,
    TranslatedSegmentCardHeader,
    MwCard,
    MwRow,
    MwCol,
    MwButton
  },
  emits: ["edit-translation"],
  setup() {
    const scopeSelection = ref("sentence");
    const {
      currentMTProvider: mtProvider,
      isSectionTitleSelected,
      currentSourceSection: currentPageSection,
      selectedContentTranslationUnit,
      proposedTranslation: mtTranslation
    } = useApplicationState(useStore());
    const showSentenceTab = computed(() => scopeSelection.value === "sentence");
    const currentSubSection = computed(() => currentPageSection.value.subSections.find((subSection) => subSection.sentences.some((sentence) => sentence.id === selectedContentTranslationUnit.value.id)));
    const proposedMTTranslation = computed(() => showSentenceTab.value ? mtTranslation.value : currentSubSection.value.getProposedTranslation(mtProvider.value));
    const colors2 = inject("colors");
    const progressBarBackgroundColor = colors2.base80;
    const errorColor = colors2.red50;
    const translation = computed(() => {
      if (isSectionTitleSelected.value) {
        return currentPageSection.value.translatedTitle;
      } else if (showSentenceTab.value) {
        return selectedContentTranslationUnit.value.translatedContent;
      }
      return currentSubSection.value.translatedContent;
    });
    const mtScore = computed(() => mtValidator.calculateScore(translation.value, proposedMTTranslation.value));
    const modificationStatus = computed(() => mtValidator.getScoreStatus(mtScore.value));
    const modificationPercentageClass = computed(() => `translated-segment-card__modification-stats__percentage--${modificationStatus.value}`);
    const iconColors = computed(() => ({
      failure: mtScore.value === 0 ? null : colors2.yellow30,
      warning: colors2.yellow30,
      success: colors2.green30
    }));
    const userIconColor = computed(() => iconColors.value[modificationStatus.value]);
    return {
      errorColor,
      modificationPercentageClass,
      mtScore,
      mwIconEdit,
      mwIconEllipsis,
      mwIconRobot,
      mwIconUserAvatar,
      progressBarBackgroundColor,
      scopeSelection,
      showSentenceTab,
      translation,
      userIconColor
    };
  }
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_translated_segment_card_header = resolveComponent("translated-segment-card-header");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_progress_bar = resolveComponent("mw-progress-bar");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_translated_segment_card_action_buttons = resolveComponent("translated-segment-card-action-buttons");
  const _component_mw_card = resolveComponent("mw-card");
  const _directive_i18n = resolveDirective("i18n");
  const _directive_i18n_html = resolveDirective("i18n-html");
  return openBlock(), createBlock(_component_mw_card, { class: "translated-segment-card col shrink pa-0 mb-0" }, {
    default: withCtx(() => [
      createVNode(_component_mw_row, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: withCtx(() => [
          createVNode(_component_translated_segment_card_header, {
            selection: $setup.scopeSelection,
            "onUpdate:selection": _cache[0] || (_cache[0] = ($event) => $setup.scopeSelection = $event)
          }, null, 8, ["selection"]),
          createVNode(_component_mw_col, {
            tag: "section",
            class: "translated-segment-card__body pa-5"
          }, {
            default: withCtx(() => [
              createVNode(_component_mw_row, { class: "ma-0" }, {
                default: withCtx(() => [
                  createVNode(_component_mw_col, {
                    class: "translated-segment-card__modification-stats",
                    grow: ""
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("h5", null, null, 512), [
                        [_directive_i18n, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                      ]),
                      $setup.mtScore === 0 ? withDirectives((openBlock(), createElementBlock("p", {
                        key: 0,
                        style: normalizeStyle({ color: $setup.errorColor })
                      }, null, 4)), [
                        [_directive_i18n, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                      ]) : withDirectives((openBlock(), createElementBlock("p", {
                        key: 1,
                        class: normalizeClass($setup.modificationPercentageClass)
                      }, null, 2)), [
                        [_directive_i18n_html, [
                          $setup.mtScore
                        ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                      ])
                    ], void 0, true),
                    _: 1
                  }),
                  createVNode(_component_mw_col, {
                    shrink: "",
                    class: "translated-segment-card__animated-stats"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_mw_row, { class: "ma-0 ms-2" }, {
                        default: withCtx(() => [
                          createVNode(_component_mw_col, {
                            shrink: "",
                            align: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_mw_icon, {
                                icon: $setup.mwIconUserAvatar,
                                "icon-color": $setup.userIconColor
                              }, null, 8, ["icon", "icon-color"])
                            ], void 0, true),
                            _: 1
                          }),
                          createVNode(_component_mw_col, {
                            shrink: "",
                            class: "px-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_mw_progress_bar, {
                                value: $setup.mtScore,
                                height: "4px",
                                width: "64px",
                                color: $setup.userIconColor,
                                background: $setup.progressBarBackgroundColor
                              }, null, 8, ["value", "color", "background"])
                            ], void 0, true),
                            _: 1
                          }),
                          createVNode(_component_mw_col, { shrink: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_mw_icon, { icon: $setup.mwIconRobot }, null, 8, ["icon"])
                            ], void 0, true),
                            _: 1
                          })
                        ], void 0, true),
                        _: 1
                      })
                    ], void 0, true),
                    _: 1
                  })
                ], void 0, true),
                _: 1
              }),
              $setup.showSentenceTab ? (openBlock(), createBlock(_component_mw_button, {
                key: 0,
                icon: $setup.mwIconEdit,
                type: "text",
                label: _ctx.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-0 mt-4",
                progressive: "",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("edit-translation", $setup.translation))
              }, null, 8, ["icon", "label"])) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          }),
          createVNode(_component_mw_col, { class: "translated-segment-card__actions" }, {
            default: withCtx(() => [
              createVNode(_component_translated_segment_card_action_buttons, normalizeProps(guardReactiveProps(_ctx.$attrs)), null, 16)
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
var TranslatedSegmentCard = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
var SXSentenceSelector_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$i = {
  name: "SxSentenceSelector",
  components: {
    BlockTemplateAdaptationCard,
    TranslatedSegmentCard,
    ProposedTranslationCard,
    SubSection,
    SxSentenceSelectorContentHeader,
    MwRow,
    MwCol,
    SxTranslationSelector,
    MwButton
  },
  setup() {
    const isTranslationOptionsActive = ref(false);
    const shouldProposedTranslationBounce = ref(false);
    const screenHeight = ref("100%");
    const store2 = useStore();
    const {
      currentSectionSuggestion: suggestion,
      currentSourceSection: currentPageSection,
      selectedContentTranslationUnit
    } = useApplicationState(store2);
    const isSelectedTranslationUnitTranslated = computed(() => {
      var _a;
      return (_a = currentPageSection.value) == null ? void 0 : _a.isSelectedTranslationUnitTranslated;
    });
    const subSections = computed(() => {
      var _a;
      return (_a = currentPageSection.value) == null ? void 0 : _a.subSections;
    });
    const originalSegmentContent = computed(() => {
      var _a;
      return (_a = currentPageSection.value) == null ? void 0 : _a.selectedTranslationUnitOriginalContent;
    });
    const sentenceSelectorStyle = computed(() => isNaN(screenHeight.value) ? screenHeight.value : `${screenHeight.value}px`);
    onMounted(() => __async(this, null, function* () {
      store2.commit("application/clearPublishFeedbackMessages");
      yield store2.dispatch("application/initializeMTProviders");
      if (!selectedContentTranslationUnit.value) {
        store2.dispatch("application/selectTranslationUnitById", 0);
      }
      screenHeight.value = window.innerHeight;
    }));
    const skipTranslation = () => store2.dispatch("application/selectNextTranslationUnit");
    const selectPreviousTranslationUnit2 = () => store2.dispatch("application/selectPreviousTranslationUnit");
    const applyTranslation = () => store2.dispatch("application/applyProposedTranslationToSelectedTranslationUnit");
    const bounceTranslation = () => {
      shouldProposedTranslationBounce.value = true;
      setTimeout(() => {
        shouldProposedTranslationBounce.value = false;
      }, 100);
    };
    const router2 = useRouter();
    const goToContentComparator = () => router2.push({ name: "sx-content-comparator" });
    const configureTranslationOptions = () => {
      if (isBlockTemplateSelected.value) {
        return;
      }
      isTranslationOptionsActive.value = true;
      store2.dispatch("application/translateSelectedTranslationUnitForAllProviders");
    };
    const editTranslation = (content) => router2.push({
      name: "sx-editor",
      params: {
        content,
        sourceLanguage: suggestion.value.sourceLanguage,
        targetLanguage: suggestion.value.targetLanguage,
        originalContent: originalSegmentContent.value,
        title: suggestion.value.targetTitle || suggestion.value.sourceTitle
      }
    });
    const previewTranslation = () => router2.push({ name: "sx-publisher" });
    watch(selectedContentTranslationUnit, () => {
      if (!selectedContentTranslationUnit.value) {
        return;
      }
      const segmentId = selectedContentTranslationUnit.value.id;
      const segment = isBlockTemplateSelected.value ? document.getElementById(segmentId) : document.querySelector(`[data-segmentid='${segmentId}']`);
      const isInView = Array.from(segment.getClientRects()).every((rect) => document.elementFromPoint(rect.x, rect.y) === segment);
      if (isInView) {
        return;
      }
      segment.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    });
    const isBlockTemplateSelected = computed(() => selectedContentTranslationUnit.value instanceof SubSection$1);
    return {
      applyTranslation,
      bounceTranslation,
      configureTranslationOptions,
      currentPageSection,
      editTranslation,
      getDir: src.getDir,
      goToContentComparator,
      isBlockTemplateSelected,
      isSelectedTranslationUnitTranslated,
      isTranslationOptionsActive,
      mwIconArrowPrevious,
      previewTranslation,
      selectPreviousTranslationUnit: selectPreviousTranslationUnit2,
      sentenceSelectorStyle,
      shouldProposedTranslationBounce,
      skipTranslation,
      sourceLanguage: suggestion.value.sourceLanguage,
      subSections
    };
  }
};
const _hoisted_1$c = { class: "sx-sentence-selector__header-title" };
const _hoisted_2$9 = { class: "sx-sentence-selector__section-contents px-4" };
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_sx_sentence_selector_content_header = resolveComponent("sx-sentence-selector-content-header");
  const _component_sub_section = resolveComponent("sub-section");
  const _component_translated_segment_card = resolveComponent("translated-segment-card");
  const _component_proposed_translation_card = resolveComponent("proposed-translation-card");
  const _component_block_template_adaptation_card = resolveComponent("block-template-adaptation-card");
  const _component_sx_translation_selector = resolveComponent("sx-translation-selector");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", {
    class: "sx-sentence-selector fill-height column ma-0 no-wrap",
    style: normalizeStyle($setup.sentenceSelectorStyle)
  }, [
    createVNode(_component_mw_row, { class: "sx-sentence-selector__header ma-0 py-2" }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, { shrink: "" }, {
          default: withCtx(() => [
            createVNode(_component_mw_button, {
              class: "px-3",
              type: "icon",
              icon: $setup.mwIconArrowPrevious,
              onClick: $setup.goToContentComparator
            }, null, 8, ["icon", "onClick"])
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, {
          grow: "",
          class: "px-1"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("h4", _hoisted_1$c, null, 512), [
              [_directive_i18n, void 0, "cx-sx-sentence-selector-header-title"]
            ])
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, {
          shrink: "",
          class: "px-3"
        }, {
          default: withCtx(() => [
            createVNode(_component_mw_button, {
              label: _ctx.$i18n("cx-sx-sentence-selector-done-button-label"),
              disabled: !$setup.currentPageSection.isTranslated,
              onClick: $setup.previewTranslation
            }, null, 8, ["label", "disabled", "onClick"])
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    createVNode(_component_mw_row, {
      tag: "section",
      direction: "column",
      align: "start",
      justify: "between",
      class: "sx-sentence-selector__body fill-height ma-0"
    }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, {
          dir: $setup.getDir($setup.sourceLanguage),
          lang: $setup.sourceLanguage,
          class: "sx-sentence-selector__section"
        }, {
          default: withCtx(() => [
            createVNode(_component_sx_sentence_selector_content_header),
            createBaseVNode("div", _hoisted_2$9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.subSections, (subSection) => {
                return openBlock(), createBlock(_component_sub_section, {
                  id: subSection.id,
                  key: `sub-section-${subSection.id}`,
                  "sub-section": subSection,
                  onBounceTranslation: $setup.bounceTranslation
                }, null, 8, ["id", "sub-section", "onBounceTranslation"]);
              }), 128))
            ])
          ], void 0, true),
          _: 1
        }, 8, ["dir", "lang"]),
        !$setup.isBlockTemplateSelected && $setup.isSelectedTranslationUnitTranslated ? (openBlock(), createBlock(_component_translated_segment_card, {
          key: 0,
          onEditTranslation: $setup.editTranslation,
          onSkipTranslation: $setup.skipTranslation,
          onSelectPreviousSegment: $setup.selectPreviousTranslationUnit
        }, null, 8, ["onEditTranslation", "onSkipTranslation", "onSelectPreviousSegment"])) : !$setup.isBlockTemplateSelected ? (openBlock(), createBlock(_component_proposed_translation_card, {
          key: 1,
          class: normalizeClass({ "mb-0": !$setup.shouldProposedTranslationBounce }),
          onConfigureOptions: $setup.configureTranslationOptions,
          onEditTranslation: $setup.editTranslation,
          onApplyTranslation: $setup.applyTranslation,
          onSkipTranslation: $setup.skipTranslation,
          onSelectPreviousSegment: $setup.selectPreviousTranslationUnit
        }, null, 8, ["class", "onConfigureOptions", "onEditTranslation", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment"])) : (openBlock(), createBlock(_component_block_template_adaptation_card, {
          key: 2,
          onEditTranslation: $setup.editTranslation,
          onApplyTranslation: $setup.applyTranslation,
          onSkipTranslation: $setup.skipTranslation,
          onSelectPreviousSegment: $setup.selectPreviousTranslationUnit
        }, null, 8, ["onEditTranslation", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment"]))
      ], void 0),
      _: 1
    }),
    createVNode(_component_sx_translation_selector, {
      active: $setup.isTranslationOptionsActive,
      "onUpdate:active": _cache[0] || (_cache[0] = ($event) => $setup.isTranslationOptionsActive = $event)
    }, null, 8, ["active"])
  ], 4);
}
var SXSentenceSelector$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
var SXSentenceSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$h = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: SXSentenceSelector$1
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mdAndDown
      };
    }
  }
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_sentence_selector = resolveComponent("sx-sentence-selector");
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["sx-sentence-selector-view", $options.classes])
  }, [
    createVNode(_component_sx_sentence_selector)
  ], 2);
}
var SXSentenceSelector = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
var tutorialSvgMT = '<svg width="375px" height="200px" viewBox="0 0 375 200" version="1.1"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>illustration-mt</title>\n    <defs>\n        <path d="M105.208249,19.5680105 C105.208249,18.4685389 106.107813,17.5382516 107.198217,17.4909907 L233.21828,12.0289647 C234.31731,11.98133 235.208249,12.8435441 235.208249,13.9420961 L235.208249,47.1312078 C235.208249,48.2354359 234.308684,49.0916001 233.21828,49.0443393 L107.198217,43.5823132 C106.099188,43.5346786 105.208249,42.6038785 105.208249,41.5052935 L105.208249,19.5680105 Z" id="path-1"></path>\n        <pattern id="pattern-2" width="30" height="30" x="75.2082489" y="-17.9633462" patternUnits="userSpaceOnUse">\n            <use xlink:href="#image-3"></use>\n        </pattern>\n        <image id="image-3" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAP1JREFUSA3t1V0OgyAMAOC1Hmu7giHhXQ/n9mw0XmG7xm6izpphBAENk/IyXgxJ06/lT2ia5p1lWZnn+fPiGG3bXsdxvJ8ZBzGSHikSqMkU+AynwBeYG9dgTnwDc+FWmAN3wrFx7LruRohtCCFeAFD0fV+dHYcxkh4p8v9ynfoj8L3Z2qnmfLM1mE72F38Mw1BIKfd+lcFxaF4jukKEImJV17X3qv0St+lYFUIo4VPy0td5aJwTpgJCk6rize86H9LEDFBz6pQ63lv2kLgpp38vQ5IeaQbW7cfYS7V65nfe4xT4cri48QWmpeDENZgT38BcuBXmwJ1wbDzZy/UBR/bTV8buNroAAAAASUVORK5CYII="></image>\n    </defs>\n    <g id="illustration-mt" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Oval-9-+-Path-79" transform="translate(97.500000, 27.500000) rotate(-50.000000) translate(-97.500000, -27.500000) translate(20.000000, -66.000000)" stroke="#72777D" stroke-width="20">\n            <path d="M154.758243,0.558837385 C154.758243,0.558837385 79.2075256,2.3963732 49.094702,27.6101739 C18.9818785,52.8239746 29.5592009,127.558837 29.5592009,127.558837" id="Path-79"></path>\n        </g>\n        <path d="M181.241058,153 L157,153 L188.486036,60 L218.513964,60 L250,153 L225.758942,153 L219.607545,133.473633 L187.392455,133.473633 L181.241058,153 Z M192.598076,116.303848 L213.598076,116.303848 L203.432471,83.3038476 L202.719095,83.3038476 L192.598076,116.303848 Z" id="A" fill="#3366CC" fill-rule="nonzero" transform="translate(203.500000, 106.500000) rotate(-330.000000) translate(-203.500000, -106.500000) "></path>\n        <g id="arm-copy-4" transform="translate(314.833239, 182.732618) rotate(-329.000000) translate(-314.833239, -182.732618) translate(196.833239, 154.732618)">\n            <path d="M169,12.1867168 L64.5255867,14.5368942 C64.5255867,14.5368942 38.6533364,0.293924123 36.3838532,0.0311149624 C34.1143701,-0.231694198 20.2523322,1.25606343 18,1.27917976 C15.7476678,1.30229608 9,3.27917976 12,6.27917976 C15,9.27917976 28.451814,7.12235683 28.451814,7.12235683 C28.451814,7.12235683 22.2576379,8.12682834 18,8.27917976 C13.7423621,8.43153117 7,10.2791798 6,11.2791798 C5,12.2791798 2.6908933,14.5356877 5,17.2791798 C7.3091067,20.0226718 10.0523609,16.5535169 14,15.2791798 C17.9476391,14.0048426 21.6134118,13.280923 21.6134118,13.280923 C21.6134118,13.280923 7.85041029,19.2016743 4,20.2791798 C0.149589712,21.3566852 -1.63791203e-12,29.2791798 2,29.2791798 C4,29.2791798 9,25.2791798 13,23.2791798 C17,21.2791798 23.3140547,21.176528 23.3140547,21.176528 C23.3140547,21.176528 16.3546483,21.4775454 11.7049518,25.3672069 C7.05525531,29.2568684 1.32619796,33.6951745 1.32619796,33.6951745 C1.32619796,33.6951745 -0.567607229,37.0708809 2.35598778,38.7088114 C5.27958279,40.3467419 7.87811658,37.6181113 13.8697335,34.1155551 C19.8613504,30.612999 22.589031,29.6485498 28.2960593,28.8249462 C34.0030875,28.0013426 39.6510908,31.1919149 39.6510908,31.1919149 C39.6510908,31.1919149 39.1989211,39.8077746 33.6894438,42.3746361 C28.1799665,44.9414977 24.3125288,46.5228395 24.3125288,46.5228395 C24.3125288,46.5228395 17.7211381,44.596389 15.8777945,45.5701061 C14.0344509,46.5438231 14.5480459,48.8787631 15.8777943,51.3510398 C17.2075426,53.8233164 22.9685773,55.5294131 26.8131232,55.2490614 C30.6576692,54.9687098 48.3207932,51.7120573 57.5216871,44.0151357 C66.7225811,36.3182142 69.893072,35.056104 69.893072,35.056104 L169,35.2909101 L169,12.1867168 Z" id="Path-11" fill="#D7A57A" transform="translate(84.861497, 27.639590) scale(1, -1) translate(-84.861497, -27.639590) "></path>\n            <g id="Rectangle-37">\n                <use fill="#FFB50D" xlink:href="#path-1"></use>\n                <use fill-opacity="0.5" fill="url(#pattern-2)" style="mix-blend-mode: multiply;" xlink:href="#path-1"></use>\n            </g>\n        </g>\n        <polyline id="Path" stroke="#72777D" stroke-width="18" transform="translate(119.011851, 100.500000) rotate(-30.000000) translate(-119.011851, -100.500000) " points="119.011851 134 90 117.25 90 83.75 119.011851 67 148.023702 83.75 148.023702 117.25"></polyline>\n    </g>\n</svg>\n';
var tutorialSvgSections = '<svg  width="375px" height="200px" viewBox="0 0 375 200" version="1.1"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>illustration-sections</title>\n    <defs>\n        <rect id="path-1" x="0" y="0" width="137" height="174"></rect>\n        <filter x="-3.6%" y="-2.3%" width="107.3%" height="105.7%" filterUnits="objectBoundingBox" id="filter-2">\n            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <rect id="path-3" x="0.17674259" y="0.678736183" width="75" height="5"></rect>\n        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-4">\n            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <rect id="path-5" x="1.05473569" y="20.5842412" width="75" height="5"></rect>\n        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-6">\n            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <rect id="path-7" x="0.745148663" y="10.1485258" width="75" height="5"></rect>\n        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-8">\n            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <rect id="path-9" x="0.526966096" y="31.3803116" width="33" height="5"></rect>\n        <filter x="-12.1%" y="-40.0%" width="124.2%" height="260.0%" filterUnits="objectBoundingBox" id="filter-10">\n            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <rect id="path-11" x="0.17674259" y="0.678736183" width="75" height="5"></rect>\n        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-12">\n            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <rect id="path-13" x="1.05473569" y="20.5842412" width="75" height="5"></rect>\n        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-14">\n            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <rect id="path-15" x="0.745148663" y="10.1485258" width="75" height="5"></rect>\n        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-16">\n            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <rect id="path-17" x="0.526966096" y="31.3803116" width="33" height="5"></rect>\n        <filter x="-12.1%" y="-40.0%" width="124.2%" height="260.0%" filterUnits="objectBoundingBox" id="filter-18">\n            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n        <path d="M119.009619,18.1031535 C119.009619,17.0036819 119.909183,16.0733946 120.999588,16.0261337 L247.01965,10.5641077 C248.11868,10.516473 249.009619,11.3786871 249.009619,12.4772391 L249.009619,45.6663508 C249.009619,46.7705789 248.110054,47.6267431 247.01965,47.5794823 L120.999588,42.1174562 C119.900558,42.0698215 119.009619,41.1390215 119.009619,40.0404364 L119.009619,18.1031535 Z" id="path-19"></path>\n        <pattern id="pattern-20" width="30" height="30" x="89.0096189" y="-19.4282032" patternUnits="userSpaceOnUse">\n            <use xlink:href="#image-21"></use>\n        </pattern>\n        <image id="image-21" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAP1JREFUSA3t1V0OgyAMAOC1Hmu7giHhXQ/n9mw0XmG7xm6izpphBAENk/IyXgxJ06/lT2ia5p1lWZnn+fPiGG3bXsdxvJ8ZBzGSHikSqMkU+AynwBeYG9dgTnwDc+FWmAN3wrFx7LruRohtCCFeAFD0fV+dHYcxkh4p8v9ynfoj8L3Z2qnmfLM1mE72F38Mw1BIKfd+lcFxaF4jukKEImJV17X3qv0St+lYFUIo4VPy0td5aJwTpgJCk6rize86H9LEDFBz6pQ63lv2kLgpp38vQ5IeaQbW7cfYS7V65nfe4xT4cri48QWmpeDENZgT38BcuBXmwJ1wbDzZy/UBR/bTV8buNroAAAAASUVORK5CYII="></image>\n        <path d="M113.1747,17.4559811 C113.1747,16.3565095 114.074265,15.4262222 115.164669,15.3789613 L241.184731,9.91693528 C242.283761,9.86930059 243.1747,10.7315147 243.1747,11.8300667 L243.1747,45.0191784 C243.1747,46.1234065 242.275136,46.9795707 241.184731,46.9323099 L115.164669,41.4702838 C114.065639,41.4226491 113.1747,40.4918491 113.1747,39.393264 L113.1747,17.4559811 Z" id="path-22"></path>\n        <pattern id="pattern-23" width="30" height="30" x="83.1747" y="-20.0753756" patternUnits="userSpaceOnUse">\n            <use xlink:href="#image-24"></use>\n        </pattern>\n        <image id="image-24" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAP1JREFUSA3t1V0OgyAMAOC1Hmu7giHhXQ/n9mw0XmG7xm6izpphBAENk/IyXgxJ06/lT2ia5p1lWZnn+fPiGG3bXsdxvJ8ZBzGSHikSqMkU+AynwBeYG9dgTnwDc+FWmAN3wrFx7LruRohtCCFeAFD0fV+dHYcxkh4p8v9ynfoj8L3Z2qnmfLM1mE72F38Mw1BIKfd+lcFxaF4jukKEImJV17X3qv0St+lYFUIo4VPy0td5aJwTpgJCk6rize86H9LEDFBz6pQ63lv2kLgpp38vQ5IeaQbW7cfYS7V65nfe4xT4cri48QWmpeDENZgT38BcuBXmwJ1wbDzZy/UBR/bTV8buNroAAAAASUVORK5CYII="></image>\n    </defs>\n    <g id="illustration-sections" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="paper-blank" transform="translate(119.000000, 13.000000)">\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>\n                <rect stroke="#CCCCCC" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF" fill-rule="evenodd" x="0.5" y="0.5" width="136" height="173"></rect>\n            </g>\n        </g>\n        <g id="paragraph" transform="translate(206.500000, 93.500000) rotate(-10.000000) translate(-206.500000, -93.500000) translate(168.000000, 75.000000)">\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>\n                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-3"></use>\n            </g>\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-6)" xlink:href="#path-5"></use>\n                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-5"></use>\n            </g>\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-8)" xlink:href="#path-7"></use>\n                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-7"></use>\n            </g>\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-10)" xlink:href="#path-9"></use>\n                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-9"></use>\n            </g>\n        </g>\n        <g id="paragraph" transform="translate(183.500000, 161.500000) rotate(10.000000) translate(-183.500000, -161.500000) translate(145.000000, 143.000000)">\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-12)" xlink:href="#path-11"></use>\n                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-11"></use>\n            </g>\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-14)" xlink:href="#path-13"></use>\n                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-13"></use>\n            </g>\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-16)" xlink:href="#path-15"></use>\n                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-15"></use>\n            </g>\n            <g id="Rectangle-1">\n                <use fill="black" fill-opacity="1" filter="url(#filter-18)" xlink:href="#path-17"></use>\n                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-17"></use>\n            </g>\n        </g>\n        <polygon id="Rectangle-Copy" fill="#C8CCD1" points="131 43 244 43 244 48 131 48"></polygon>\n        <polygon id="Rectangle-Copy-2" fill="#C8CCD1" points="131 53 193 53 193 58 131 58"></polygon>\n        <g id="arm-copy-3" transform="translate(56.625927, 185.496072) scale(-1, 1) rotate(30.000000) translate(-56.625927, -185.496072) translate(-68.374073, 155.496072)">\n            <path d="M172,16.907537 L67.5255867,19.2577145 C67.5255867,19.2577145 41.6533364,5.01474437 39.3838532,4.75193521 C37.1143701,4.48912604 24.3528844,2.1824462 21.4239694,1.25709257 C18.4950543,0.331738948 15.513093,-1.46076951 15.6763016,2.23397625 C15.8395102,5.92872201 31.451814,11.8431771 31.451814,11.8431771 C31.451814,11.8431771 18.6374608,8.56771268 14.3798228,8.72006409 C10.1221849,8.87241551 3.15683142,10.5136571 3.15683142,10.5136571 C3.15683142,10.5136571 -1.68501113,12.8086486 0.624095573,15.5521407 C2.93320227,18.2956327 11.8935866,14.6092418 15.9476391,15.7256629 C20.0016915,16.8420839 24.6134118,18.0017432 24.6134118,18.0017432 C24.6134118,18.0017432 10.4209026,18.1597695 6.57049232,19.2372749 C2.72008204,20.3147804 0.884786525,23.0820714 2.61880922,25.1423062 C4.35283192,27.2025411 12.8816827,24.8622434 17.5059597,24.825123 C22.1302366,24.7880027 26.3140547,25.8973482 26.3140547,25.8973482 C26.3140547,25.8973482 19.3546483,26.1983657 14.7049518,30.0880272 C10.0552553,33.9776887 4.32619796,38.4159948 4.32619796,38.4159948 C4.32619796,38.4159948 2.43239277,41.7917011 5.35598778,43.4296316 C8.27958279,45.0675621 10.8781166,42.3389315 16.8697335,38.8363754 C22.8613504,35.3338192 25.589031,34.3693701 31.2960593,33.5457664 C37.0030875,32.7221628 42.6510908,35.9127352 42.6510908,35.9127352 C42.6510908,35.9127352 42.1989211,44.5285948 36.6894438,47.0954564 C31.1799665,49.6623179 27.3125288,51.2436598 27.3125288,51.2436598 C27.3125288,51.2436598 20.7211381,49.3172092 18.8777945,50.2909263 C17.0344509,51.2646434 17.5480459,53.5995834 18.8777943,56.07186 C20.2075426,58.5441366 25.9685773,60.2502333 29.8131232,59.9698817 C33.6576692,59.68953 51.3207932,56.4328775 60.5216871,48.735956 C69.7225811,41.0390344 72.893072,39.7769243 72.893072,39.7769243 L172,40.0117303" id="Path-11" fill="#BE6F41"></path>\n            <g id="Rectangle-37">\n                <use fill="#3366CC" xlink:href="#path-19"></use>\n                <use fill-opacity="0.5" fill="url(#pattern-20)" style="mix-blend-mode: multiply;" xlink:href="#path-19"></use>\n            </g>\n        </g>\n        <g id="arm-copy" transform="translate(321.614539, 14.504839) rotate(-29.000000) translate(-321.614539, -14.504839) translate(199.614539, -15.495161)">\n            <path d="M172,16.907537 L67.5255867,19.2577145 C67.5255867,19.2577145 41.6533364,5.01474437 39.3838532,4.75193521 C37.1143701,4.48912604 24.3528844,2.1824462 21.4239694,1.25709257 C18.4950543,0.331738948 15.513093,-1.46076951 15.6763016,2.23397625 C15.8395102,5.92872201 31.451814,11.8431771 31.451814,11.8431771 C31.451814,11.8431771 18.6374608,8.56771268 14.3798228,8.72006409 C10.1221849,8.87241551 3.15683142,10.5136571 3.15683142,10.5136571 C3.15683142,10.5136571 -1.68501113,12.8086486 0.624095573,15.5521407 C2.93320227,18.2956327 11.8935866,14.6092418 15.9476391,15.7256629 C20.0016915,16.8420839 24.6134118,18.0017432 24.6134118,18.0017432 C24.6134118,18.0017432 10.4209026,18.1597695 6.57049232,19.2372749 C2.72008204,20.3147804 0.884786525,23.0820714 2.61880922,25.1423062 C4.35283192,27.2025411 12.8816827,24.8622434 17.5059597,24.825123 C22.1302366,24.7880027 26.3140547,25.8973482 26.3140547,25.8973482 C26.3140547,25.8973482 19.3546483,26.1983657 14.7049518,30.0880272 C10.0552553,33.9776887 4.32619796,38.4159948 4.32619796,38.4159948 C4.32619796,38.4159948 2.43239277,41.7917011 5.35598778,43.4296316 C8.27958279,45.0675621 10.8781166,42.3389315 16.8697335,38.8363754 C22.8613504,35.3338192 25.589031,34.3693701 31.2960593,33.5457664 C37.0030875,32.7221628 42.6510908,35.9127352 42.6510908,35.9127352 C42.6510908,35.9127352 42.1989211,44.5285948 36.6894438,47.0954564 C31.1799665,49.6623179 27.3125288,51.2436598 27.3125288,51.2436598 C27.3125288,51.2436598 20.7211381,49.3172092 18.8777945,50.2909263 C17.0344509,51.2646434 17.5480459,53.5995834 18.8777943,56.07186 C20.2075426,58.5441366 25.9685773,60.2502333 29.8131232,59.9698817 C33.6576692,59.68953 51.3207932,56.4328775 60.5216871,48.735956 C69.7225811,41.0390344 72.893072,39.7769243 72.893072,39.7769243 L172,40.0117303" id="Path-11" fill="#D7A57A"></path>\n            <g id="Rectangle-37">\n                <use fill="#FFB50D" xlink:href="#path-22"></use>\n                <use fill-opacity="0.5" fill="url(#pattern-23)" style="mix-blend-mode: multiply;" xlink:href="#path-22"></use>\n            </g>\n        </g>\n        <rect id="Rectangle" fill="#C8CCD1" x="131" y="25" width="42" height="10"></rect>\n    </g>\n</svg>';
var SXQuickTutorial_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$g = {
  name: "SxQuickTutorial",
  components: {
    MwButton,
    MwRow
  },
  data: () => ({
    mwIconArrowForward,
    totalSteps: 2,
    activeStep: 1,
    tutorialSvgMT,
    tutorialSvgSections
  }),
  methods: {
    goToNextStep() {
      if (this.activeStep < this.totalSteps) {
        this.activeStep++;
      }
    },
    isActiveStep(step) {
      return step === this.activeStep;
    },
    completeTutorial() {
      this.$router.push({ name: "sx-sentence-selector" });
    }
  }
};
const _hoisted_1$b = { class: "sx-quick-tutorial" };
const _hoisted_2$8 = { class: "sx-quick-tutorial__main-point py-9 px-6" };
const _hoisted_3$8 = {
  key: "main-point-1",
  class: "ma-0 pa-0"
};
const _hoisted_4$5 = {
  key: "main-point-2",
  class: "ma-0 pa-0"
};
const _hoisted_5$3 = { class: "sx-quick-tutorial__illustration" };
const _hoisted_6$2 = ["innerHTML"];
const _hoisted_7$1 = ["innerHTML"];
const _hoisted_8 = { class: "sx-quick-tutorial__step-indicator py-3" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "sx-quick-tutorial__secondary-point py-4 px-6" };
const _hoisted_11 = {
  key: "secondary-point-1",
  class: "ma-0"
};
const _hoisted_12 = {
  key: "secondary-point-2",
  class: "ma-0"
};
const _hoisted_13 = { class: "sx-quick-tutorial__action-button pt-4 pb-6" };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1$b, [
    createVNode(_component_mw_row, {
      direction: "column",
      class: "sx-quick-tutorial__body-container ma-0"
    }, {
      default: withCtx(() => [
        createBaseVNode("section", _hoisted_2$8, [
          createVNode(Transition, {
            name: "fade",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              $options.isActiveStep(1) ? withDirectives((openBlock(), createElementBlock("h2", _hoisted_3$8, null, 512)), [
                [_directive_i18n, void 0, "sx-quick-tutorial-main-point-step-1"]
              ]) : $options.isActiveStep(2) ? withDirectives((openBlock(), createElementBlock("h2", _hoisted_4$5, null, 512)), [
                [_directive_i18n, void 0, "sx-quick-tutorial-main-point-step-2"]
              ]) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          })
        ]),
        createBaseVNode("section", _hoisted_5$3, [
          createVNode(Transition, { name: "mw-ui-animation-slide-left" }, {
            default: withCtx(() => [
              $options.isActiveStep(1) ? (openBlock(), createElementBlock("div", {
                key: "illustration-1",
                innerHTML: _ctx.tutorialSvgSections
              }, null, 8, _hoisted_6$2)) : $options.isActiveStep(2) ? (openBlock(), createElementBlock("div", {
                key: "illustration-2",
                innerHTML: _ctx.tutorialSvgMT
              }, null, 8, _hoisted_7$1)) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.totalSteps, (step) => {
            return openBlock(), createElementBlock("span", {
              key: `dot-${step}`,
              class: normalizeClass(["dot mx-1", { "dot-active": $options.isActiveStep(step) }]),
              role: "button",
              onClick: ($event) => _ctx.activeStep = step
            }, null, 10, _hoisted_9);
          }), 128))
        ]),
        createBaseVNode("section", _hoisted_10, [
          createVNode(Transition, {
            name: "fade",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              $options.isActiveStep(1) ? withDirectives((openBlock(), createElementBlock("h3", _hoisted_11, null, 512)), [
                [_directive_i18n, void 0, "sx-quick-tutorial-secondary-point-step-1"]
              ]) : $options.isActiveStep(2) ? withDirectives((openBlock(), createElementBlock("h3", _hoisted_12, null, 512)), [
                [_directive_i18n, void 0, "sx-quick-tutorial-secondary-point-step-2"]
              ]) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_13, [
          createVNode(Transition, {
            name: "fade",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              $options.isActiveStep(1) ? (openBlock(), createBlock(_component_mw_button, {
                key: "quick-tutorial-action-button-1",
                class: "px-8 mx-4",
                icon: _ctx.mwIconArrowForward,
                progressive: true,
                onClick: $options.goToNextStep
              }, null, 8, ["icon", "onClick"])) : $options.isActiveStep(2) ? (openBlock(), createBlock(_component_mw_button, {
                key: "quick-tutorial-action-button-2",
                class: "mx-4",
                label: _ctx.$i18n("sx-quick-tutorial-translate-button-label"),
                progressive: true,
                onClick: $options.completeTutorial
              }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          })
        ])
      ], void 0),
      _: 1
    })
  ]);
}
var SXQuickTutorial$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
var SXQuickTutorial_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: SXQuickTutorial$1
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mdAndDown
      };
    }
  }
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_quick_tutorial = resolveComponent("sx-quick-tutorial");
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["sx-quick-tutorial-view", $options.classes])
  }, [
    createVNode(_component_sx_quick_tutorial)
  ], 2);
}
var SXQuickTutorial = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
var SXEditorOriginalContent_vue_vue_type_style_index_0_lang = "";
const _sfc_main$e = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent },
  props: {
    originalContent: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    dir: {
      type: String,
      required: true
    }
  },
  setup() {
    const originalContentRef = ref(null);
    const twoLinesHeight = ref(0);
    const getLineHeight = () => parseFloat(document.defaultView.getComputedStyle(originalContentRef.value, null).getPropertyValue("line-height"));
    onMounted(() => {
      twoLinesHeight.value = 2 * getLineHeight();
    });
    return {
      originalContentRef,
      twoLinesHeight
    };
  }
};
const _hoisted_1$a = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" };
const _hoisted_2$7 = { class: "sx-editor__original-content-panel__header mb-2" };
const _hoisted_3$7 = ["lang", "dir", "innerHTML"];
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_expandable_content = resolveComponent("mw-expandable-content");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1$a, [
    withDirectives(createBaseVNode("h5", _hoisted_2$7, null, 512), [
      [_directive_i18n, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    createVNode(_component_mw_expandable_content, {
      "min-height": $setup.twoLinesHeight,
      scroll: ""
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: $props.language,
          dir: $props.dir,
          innerHTML: $props.originalContent
        }, null, 8, _hoisted_3$7)
      ], void 0),
      _: 1
    }, 8, ["min-height"])
  ]);
}
var SxEditorOriginalContent = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
var happyRobotSVG = '<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>happy-robot</title>\n    <g id="happy-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Group">\n            <circle id="Oval" fill="#EAF3FF" cx="68" cy="68" r="68"></circle>\n            <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" id="Mask" fill="#3366CC"></path>\n        </g>\n    </g>\n</svg>\n';
var EditCompleteFeedback_vue_vue_type_style_index_0_lang = "";
const _sfc_main$d = {
  name: "EditCompleteFeedback",
  props: {
    showFeedback: {
      type: Boolean,
      required: true
    },
    editedTranslation: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const route = useRoute();
    const proposedTranslation = route.params.content;
    const mtScore = computed(() => mtValidator.calculateScore(props.editedTranslation, proposedTranslation));
    const modificationStatus = computed(() => {
      const status = mtValidator.getScoreStatus(mtScore.value);
      if (status === "failure") {
        return mtScore.value === 0 ? "failure" : "warning";
      }
      return status;
    });
    const modificationPercentageClass = computed(() => `sx-editor__feedback-overlay-content__stats--${modificationStatus.value}`);
    return {
      happyRobotSVG,
      modificationPercentageClass,
      mtScore
    };
  }
};
const _hoisted_1$9 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
};
const _hoisted_2$6 = { class: "sx-editor__feedback-overlay-content px-4" };
const _hoisted_3$6 = ["innerHTML"];
const _hoisted_4$4 = { class: "sx-editor__feedback-overlay-content__title" };
const _hoisted_5$2 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_i18n = resolveDirective("i18n");
  const _directive_i18n_html = resolveDirective("i18n-html");
  return $props.showFeedback ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
    createBaseVNode("div", _hoisted_2$6, [
      createBaseVNode("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: $setup.happyRobotSVG
      }, null, 8, _hoisted_3$6),
      withDirectives(createBaseVNode("h2", _hoisted_4$4, null, 512), [
        [_directive_i18n, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      withDirectives(createBaseVNode("p", _hoisted_5$2, null, 512), [
        [_directive_i18n, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      withDirectives(createBaseVNode("p", {
        class: normalizeClass(["sx-editor__feedback-overlay-content__stats", $setup.modificationPercentageClass])
      }, null, 2), [
        [_directive_i18n_html, [$setup.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : createCommentVNode("", true);
}
var EditCompleteFeedback = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
var SXEditor_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$c = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback,
    MwRow,
    SxEditorOriginalContent,
    VisualEditor,
    MwSpinner
  },
  props: {
    fromRoute: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const editorReady = ref(false);
    const router2 = useRouter();
    const route = useRoute();
    const store2 = useStore();
    const onEditorReady = () => editorReady.value = true;
    const closeEditor = () => router2.replace({ name: props.fromRoute });
    const isFinal = !!route.params.isFinalEdit;
    const proposedTranslation = route.params.content;
    const originalContent = route.params.originalContent;
    const editedTranslation = ref(null);
    const showFeedback = ref(false);
    const onEditCompleted = (translation) => __async(this, null, function* () {
      editedTranslation.value = translation;
      showFeedback.value = true;
      yield new Promise((resolve2) => setTimeout(resolve2, 2e3));
      showFeedback.value = false;
      if (isFinal) {
        store2.commit("application/setCurrentSourceSectionEditedTranslation", translation);
      } else {
        store2.dispatch("application/applyEditedTranslationToSelectedTranslationUnit", translation);
      }
      closeEditor();
    });
    return {
      closeEditor,
      content: proposedTranslation,
      editedTranslation,
      editorReady,
      getDir: src.getDir,
      sourceLanguage: route.params.sourceLanguage,
      targetLanguage: route.params.targetLanguage,
      onEditorReady,
      onEditCompleted,
      originalContent,
      showFeedback,
      title: route.params.title
    };
  }
};
const _hoisted_1$8 = { class: "sx-editor__editing-surface-container grow" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_editor_original_content = resolveComponent("sx-editor-original-content");
  const _component_mw_spinner = resolveComponent("mw-spinner");
  const _component_edit_complete_feedback = resolveComponent("edit-complete-feedback");
  const _component_visual_editor = resolveComponent("visual-editor");
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createBlock(_component_mw_row, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: withCtx(() => [
      $setup.originalContent ? (openBlock(), createBlock(_component_sx_editor_original_content, {
        key: 0,
        language: $setup.sourceLanguage,
        dir: $setup.getDir($setup.sourceLanguage),
        "original-content": $setup.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : createCommentVNode("", true),
      !$setup.editorReady ? (openBlock(), createBlock(_component_mw_spinner, { key: 1 })) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_1$8, [
        createVNode(_component_edit_complete_feedback, {
          "edited-translation": $setup.editedTranslation,
          "show-feedback": $setup.showFeedback
        }, null, 8, ["edited-translation", "show-feedback"]),
        createVNode(_component_visual_editor, {
          content: $setup.content,
          language: $setup.targetLanguage,
          dir: $setup.getDir($setup.targetLanguage),
          title: $setup.title,
          onReady: $setup.onEditorReady,
          onClose: $setup.closeEditor,
          onEditCompleted: $setup.onEditCompleted
        }, null, 8, ["content", "language", "dir", "title", "onReady", "onClose", "onEditCompleted"])
      ])
    ], void 0),
    _: 1
  });
}
var SXEditor$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
var SXEditor_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: SXEditor$1
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from.name;
    });
  },
  data: () => ({
    fromRoute: ""
  }),
  computed: {
    classes: (vm) => ({ fullscreen: vm.$mwui.breakpoint.mdAndDown })
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_editor = resolveComponent("sx-editor");
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["sx-editor-view", $options.classes])
  }, [
    createVNode(_component_sx_editor, { "from-route": _ctx.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
var SXEditor = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
var SXPublisherHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
  name: "SxPublisherHeader",
  components: { MwCol, MwButton, MwRow },
  emits: ["publish-translation"],
  setup() {
    const store2 = useStore();
    const isPublishingDisabled = computed(() => store2.getters["application/isPublishingDisabled"]);
    const router2 = useRouter();
    const onClose = () => {
      router2.push({
        name: "sx-sentence-selector"
      });
    };
    return {
      isPublishingDisabled,
      mwIconCheck,
      mwIconClose,
      onClose
    };
  }
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createBlock(_component_mw_row, { class: "ma-0 sx-publisher__header" }, {
    default: withCtx(() => [
      createVNode(_component_mw_col, { shrink: "" }, {
        default: withCtx(() => [
          createVNode(_component_mw_button, {
            icon: $setup.mwIconClose,
            type: "icon",
            outlined: false,
            onClick: $setup.onClose
          }, null, 8, ["icon", "onClick"])
        ], void 0, true),
        _: 1
      }),
      withDirectives(createVNode(_component_mw_col, {
        grow: "",
        tag: "h5",
        class: "ma-0"
      }, null, 512), [
        [_directive_i18n, void 0, "cx-sx-publisher-header-title"]
      ]),
      createVNode(_component_mw_col, { shrink: "" }, {
        default: withCtx(() => [
          createVNode(_component_mw_button, {
            progressive: "",
            type: "button",
            icon: $setup.mwIconCheck,
            disabled: $setup.isPublishingDisabled,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("publish-translation"))
          }, null, 8, ["icon", "disabled"])
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
var SxPublisherHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
var publishingLaunchingSVG = '<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>publishing-launching</title>\n    <defs>\n        <path d="M52.8,74.8 C52.8,79.64 44,83.6 44,83.6 C44,83.6 35.2,79.64 35.2,74.8 L52.8,74.8 Z M44,30.8 C40.3939316,30.707512 37.49251,27.806064 37.4,24.2 C37.4,20.554908 40.3549256,17.6 44,17.6 C47.645092,17.6 50.6,20.554908 50.6,24.2 C50.507468,27.806064 47.606064,30.707512 44,30.8 Z M58.52,51.48 C62.04,34.76 55.88,4.4 44,4.4 C32.12,4.4 25.52,33.88 29.04,50.6 L22,66 L33.88,66 L35.2,70.4 L52.8,70.4 C53.68,69.08 53.24,68.2 54.12,66 L66,66 L58.52,51.48 Z" id="path-1"></path>\n    </defs>\n    <g id="publishing-launching" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Group" fill="#EAF3FF">\n            <circle id="Oval" cx="68" cy="68" r="68"></circle>\n        </g>\n        <g id="\u{1F523}-Icon/Wikimedia-logos/logoWikimediaDiscovery" transform="translate(24.000000, 24.000000)">\n            <mask id="mask-2" fill="white">\n                <use xlink:href="#path-1"></use>\n            </mask>\n            <use id="Mask-2" fill="#000000" fill-rule="evenodd" xlink:href="#path-1"></use>\n            <g id="\u{1F3A8}-Color/Accent50-#36c" mask="url(#mask-2)" fill="#3366CC" fill-rule="evenodd">\n                <rect id="Rectangle-1" x="0" y="0" width="105.6" height="105.6"></rect>\n            </g>\n        </g>\n    </g>\n</svg>';
var publishingSuccessSVG = '<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>publishing-success</title>\n    <defs>\n        <polygon id="path-1" points="29.5385666 61.8098361 10.7522184 42.6688525 4.4 49.1409836 29.5385666 74.8 83.6 19.7180328 77.2477816 13.2"></polygon>\n    </defs>\n    <g id="publishing-success" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Group" fill="#D5FDF4">\n            <circle id="Oval" cx="68" cy="68" r="68"></circle>\n        </g>\n        <g id="\u{1F523}-Icon/Interactions/check" transform="translate(24.000000, 24.000000)">\n            <mask id="mask-2" fill="white">\n                <use xlink:href="#path-1"></use>\n            </mask>\n            <use id="Mask" fill="#000000" fill-rule="evenodd" xlink:href="#path-1"></use>\n            <g id="\u{1F3A8}-Color/Green50-#00af89" mask="url(#mask-2)" fill="#00AF89" fill-rule="evenodd">\n                <rect id="Rectangle-1" x="0" y="0" width="88" height="88"></rect>\n            </g>\n        </g>\n    </g>\n</svg>';
var publishingFailureSVG = '<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>publishing-failure</title>\n    <g id="publishing-failure" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Group" fill="#FEE7E6">\n            <circle id="Oval" cx="68" cy="68" r="68"></circle>\n        </g>\n        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" id="Mask" fill="#DD3333"></path>\n    </g>\n</svg>';
var SXPublisherAnimationDialog_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog, MwRow, MwCol },
  props: {
    active: {
      type: Boolean,
      required: true
    },
    status: {
      type: String,
      required: true,
      validator: (value) => ["pending", "success", "failure", "warning"].includes(value)
    }
  },
  data: (vm) => ({
    animations: {
      pending: {
        svg: publishingLaunchingSVG,
        title: vm.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: vm.$i18n("cx-sx-publisher-animation-publishing-indicator-subtitle")
      },
      success: {
        svg: publishingSuccessSVG,
        title: vm.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: vm.$i18n("cx-sx-publisher-animation-success-message-subtitle")
      },
      failure: {
        svg: publishingFailureSVG,
        title: vm.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: vm.$i18n("cx-sx-publisher-animation-failure-message-subtitle")
      },
      warning: {
        svg: publishingFailureSVG,
        title: vm.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: vm.$i18n("cx-sx-publisher-animation-failure-message-subtitle")
      }
    }
  }),
  computed: {
    animationSvg: (vm) => vm.animations[vm.status].svg,
    animationTitle: (vm) => vm.animations[vm.status].title,
    animationSubtitle: (vm) => vm.animations[vm.status].subtitle
  }
};
const _hoisted_1$7 = ["innerHTML"];
const _hoisted_2$5 = ["textContent"];
const _hoisted_3$5 = ["textContent"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_dialog = resolveComponent("mw-dialog");
  return $props.active ? (openBlock(), createBlock(_component_mw_dialog, {
    key: 0,
    "overlay-opacity": 0.85,
    header: false,
    class: "sx-publisher__publish-animation"
  }, {
    default: withCtx(() => [
      createVNode(_component_mw_row, { class: "ma-4" }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, null, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: $options.animationSvg
              }, null, 8, _hoisted_1$7),
              createBaseVNode("h2", {
                textContent: toDisplayString($options.animationTitle)
              }, null, 8, _hoisted_2$5),
              createBaseVNode("p", {
                class: "ma-0",
                textContent: toDisplayString($options.animationSubtitle)
              }, null, 8, _hoisted_3$5)
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  }, 8, ["overlay-opacity"])) : createCommentVNode("", true);
}
var SxPublisherAnimationDialog = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var SXPublishOptionSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {
  name: "SxPublishOptionSelector",
  components: {
    MwButton,
    MwRadioGroup: _sfc_main$$,
    MwRadio,
    MwDivider,
    MwDialog
  },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:active"],
  data: () => ({
    mwIconArrowPrevious
  }),
  computed: __spreadProps(__spreadValues({}, mapState({
    selectedOption: (state2) => state2.application.publishTarget,
    isAnon: (state2) => state2.translator.isAnon
  })), {
    publishOptions: (vm) => [
      {
        label: vm.$i18n("cx-sx-publisher-new-section-option-label"),
        details: vm.$i18n("cx-sx-publisher-new-section-option-details"),
        value: "NEW_SECTION",
        disabled: false
      },
      {
        label: vm.$i18n("cx-sx-publisher-sandbox-option-label"),
        details: vm.$i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: vm.isAnon
      }
    ],
    overlayColor: (vm) => vm.$mwui.colors.base10
  }),
  methods: {
    optionMarginBottom(index) {
      const isLastOption = index === this.publishOptions.length - 1;
      return isLastOption ? "mb-1" : "mb-4";
    },
    onPublishOptionsClose() {
      this.$emit("update:active", false);
    },
    updateOption(event) {
      const selectedOption = event.target.value;
      this.$store.commit("application/setPublishTarget", selectedOption);
      this.onPublishOptionsClose();
    }
  }
};
const _hoisted_1$6 = { class: "mw-ui-dialog__header" };
const _hoisted_2$4 = { class: "row ma-0 pa-4" };
const _hoisted_3$4 = { class: "col shrink justify-center" };
const _hoisted_4$3 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" };
const _hoisted_5$1 = { class: "mb-0" };
const _hoisted_6$1 = { class: "pa-4" };
const _hoisted_7 = ["textContent"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_divider = resolveComponent("mw-divider");
  const _component_mw_radio = resolveComponent("mw-radio");
  const _component_mw_radio_group = resolveComponent("mw-radio-group");
  const _component_mw_dialog = resolveComponent("mw-dialog");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createBlock(_component_mw_dialog, {
    value: $props.active,
    class: "sx-publisher__publish-options",
    title: _ctx.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": $options.overlayColor,
    onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:active", $event)),
    onClose: $options.onPublishOptionsClose
  }, {
    header: withCtx(() => [
      createBaseVNode("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("div", _hoisted_3$4, [
            createVNode(_component_mw_button, {
              class: "pa-0",
              type: "icon",
              icon: _ctx.mwIconArrowPrevious,
              onClick: $options.onPublishOptionsClose
            }, null, 8, ["icon", "onClick"])
          ]),
          createBaseVNode("div", _hoisted_4$3, [
            withDirectives(createBaseVNode("h4", _hoisted_5$1, null, 512), [
              [_directive_i18n, void 0, "cx-sx-publisher-preview-options-title"]
            ])
          ])
        ]),
        createVNode(_component_mw_divider)
      ])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_6$1, [
        createVNode(_component_mw_radio_group, {
          value: _ctx.selectedOption,
          name: "publish-options",
          onInput: $options.updateOption
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.publishOptions, (option) => {
              return openBlock(), createElementBlock(Fragment, {
                key: option.label
              }, [
                createVNode(_component_mw_radio, {
                  class: "pa-0 my-1",
                  label: option.label,
                  "input-value": option.value,
                  disabled: option.disabled
                }, null, 8, ["label", "input-value", "disabled"]),
                createBaseVNode("p", {
                  class: normalizeClass(["complementary ms-7 mt-0 mb-4", $options.optionMarginBottom]),
                  textContent: toDisplayString(option.details)
                }, null, 10, _hoisted_7)
              ], 64);
            }), 128))
          ], void 0, true),
          _: 1
        }, 8, ["value", "onInput"])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-opacity", "overlay-color", "onClose"]);
}
var SxPublishOptionSelector = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var SXPublisherReviewInfo_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  name: "SxPublisherReviewInfo",
  components: {
    MwButton,
    MwCol,
    MwRow,
    MwMessage,
    MwIcon
  },
  setup() {
    const store2 = useStore();
    const activeMessageIndex = ref(0);
    const publishFeedbackMessages = computed(() => store2.state.application.publishFeedbackMessages);
    const learnMoreContainer = ref(null);
    watch(learnMoreContainer, () => {
      var _a;
      const container = (_a = learnMoreContainer.value) == null ? void 0 : _a.$el;
      if (container instanceof HTMLElement) {
        const anchor = container.querySelector("a");
        anchor && anchor.setAttribute("target", "_blank");
      }
    });
    const activeMessage = computed(() => {
      var _a;
      return (_a = publishFeedbackMessages.value) == null ? void 0 : _a[activeMessageIndex.value];
    });
    const status = computed(() => {
      var _a;
      return ((_a = activeMessage.value) == null ? void 0 : _a.status) || "default";
    });
    const reviewIcon = computed(() => {
      switch (status.value) {
        case "warning":
          return mwIconAlert;
        case "error":
          return mwIconBlock;
        default:
          return mwIconEye;
      }
    });
    const isMessageInline = computed(() => status.value === "default");
    const messageType = computed(() => isMessageInline.value ? "notice" : status.value);
    const reviewInfoClass = computed(() => `sx-publisher__review-info--${messageType.value}`);
    const bananaI18n2 = useI18n();
    const messageText = computed(() => {
      var _a;
      return (_a = activeMessage.value) == null ? void 0 : _a.text;
    });
    const messageTitle = computed(() => {
      var _a;
      return ((_a = activeMessage.value) == null ? void 0 : _a.title) || bananaI18n2.i18n("cx-sx-publisher-review-info-error");
    });
    const goToPreviousMessage = () => {
      const messagesLength = publishFeedbackMessages.value.length;
      activeMessageIndex.value = (activeMessageIndex.value - 1 + messagesLength) % messagesLength;
    };
    const goToNextMessage = () => {
      activeMessageIndex.value = (activeMessageIndex.value + 1) % publishFeedbackMessages.value.length;
    };
    return {
      goToNextMessage,
      goToPreviousMessage,
      isMessageInline,
      learnMoreContainer,
      messageText,
      messageTitle,
      messageType,
      mwIconAlert,
      mwIconArrowForward,
      mwIconBlock,
      mwIconEye,
      mwIconPrevious,
      reviewIcon,
      reviewInfoClass,
      publishFeedbackMessages,
      status
    };
  }
};
const _hoisted_1$5 = { class: "sx-publisher__review-info__content" };
const _hoisted_2$3 = {
  key: 0,
  class: "complementary ma-0"
};
const _hoisted_3$3 = ["textContent"];
const _hoisted_4$2 = ["textContent"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_message = resolveComponent("mw-message");
  const _directive_i18n_html = resolveDirective("i18n-html");
  return openBlock(), createBlock(_component_mw_message, {
    type: $setup.messageType,
    class: normalizeClass(["sx-publisher__review-info ma-0 pa-4", $setup.reviewInfoClass]),
    inline: $setup.isMessageInline
  }, {
    icon: withCtx(() => [
      createVNode(_component_mw_icon, {
        icon: $setup.reviewIcon,
        class: "col shrink mw-ui-message__icon pe-3 items-start"
      }, null, 8, ["icon"])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$5, [
        $setup.status === "default" ? withDirectives((openBlock(), createElementBlock("p", _hoisted_2$3, null, 512)), [
          [_directive_i18n_html, void 0, "cx-sx-publisher-review-info"]
        ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("h5", {
            textContent: toDisplayString($setup.messageTitle)
          }, null, 8, _hoisted_3$3),
          createBaseVNode("p", {
            textContent: toDisplayString($setup.messageText)
          }, null, 8, _hoisted_4$2),
          createVNode(_component_mw_row, {
            justify: "between",
            class: "ma-0"
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(_component_mw_col, {
                ref: "learnMoreContainer",
                class: "sx-publisher__review-info__learn-more-anchor"
              }, null, 512), [
                [_directive_i18n_html, void 0, "cx-sx-publisher-review-info-learn-more"]
              ]),
              $setup.publishFeedbackMessages.length > 1 ? (openBlock(), createBlock(_component_mw_col, {
                key: 0,
                class: "sx-publisher__review-info__navigation-buttons justify-end",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_mw_button, {
                    class: "pa-0 pe-1",
                    type: "icon",
                    icon: $setup.mwIconPrevious,
                    onClick: $setup.goToPreviousMessage
                  }, null, 8, ["icon", "onClick"]),
                  createVNode(_component_mw_button, {
                    class: "pa-0 ps-1",
                    type: "icon",
                    icon: $setup.mwIconArrowForward,
                    onClick: $setup.goToNextMessage
                  }, null, 8, ["icon", "onClick"])
                ], void 0, true),
                _: 1
              })) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          })
        ], 64))
      ])
    ], void 0),
    _: 1
  }, 8, ["type", "class", "inline"]);
}
var SxPublisherReviewInfo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const decodeHtml = (html) => {
  const template = document.createElement("div");
  template.innerHTML = html;
  return template.innerText;
};
const handlePublishResult = (store2, isPublishDialogActive) => __async(this, null, function* () {
  const { currentSectionSuggestion: suggestion, currentSourceSection } = useApplicationState(store2);
  const translatedTitle = currentSourceSection == null ? void 0 : currentSourceSection.value.title;
  const errorExists = store2.getters["application/isPublishingDisabled"];
  if (errorExists) {
    isPublishDialogActive.value = false;
    return;
  }
  const isSandboxTarget = store2.getters["application/isSandboxTarget"];
  if (currentSourceSection.value.isLeadSection && !isSandboxTarget) {
    try {
      yield siteApi.addWikibaseLink(suggestion.value.sourceLanguage, suggestion.value.targetLanguage, suggestion.value.sourceTitle, translatedTitle);
    } catch (error) {
      mw.log.error("Error while adding wikibase link", error);
    }
  }
  const articleTitle = store2.getters["translator/getArticleTitleForPublishing"];
  store2.commit("application/setTranslationInProgress", false);
  window.location.href = getUrl(`${articleTitle}`, {
    "sx-published-section": decodeHtml(translatedTitle),
    "sx-source-page-title": decodeHtml(suggestion.value.sourceTitle),
    "sx-source-language": suggestion.value.sourceLanguage,
    "sx-target-language": suggestion.value.targetLanguage
  });
});
const usePublishTranslation = (store2) => {
  const isPublishDialogActive = ref(false);
  const publishStatus = ref("pending");
  const publishOptionsOn = ref(false);
  const doPublish = () => __async(this, null, function* () {
    publishStatus.value = "pending";
    isPublishDialogActive.value = true;
    yield store2.dispatch("translator/publishTranslation");
    const errorExists = store2.getters["application/isPublishingDisabled"];
    publishStatus.value = errorExists ? "failure" : "success";
    setTimeout(() => {
      handlePublishResult(store2, isPublishDialogActive);
    }, 1e3);
  });
  const configureTranslationOptions = () => publishOptionsOn.value = true;
  return {
    configureTranslationOptions,
    doPublish,
    isPublishDialogActive,
    publishOptionsOn,
    publishStatus
  };
};
var SXPublisher_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$6 = {
  name: "SxPublisher",
  components: {
    SxPublisherReviewInfo,
    SxPublishOptionSelector,
    SxPublisherAnimationDialog,
    MwButton,
    SxPublisherHeader,
    MwRow,
    MwCol
  },
  setup() {
    const store2 = useStore();
    const {
      currentSourceSection: currentPageSection,
      currentSectionSuggestion: suggestion
    } = useApplicationState(store2);
    const isSandboxTarget = computed(() => store2.getters["application/isSandboxTarget"]);
    const translatedTitle = computed(() => {
      var _a;
      return (_a = currentPageSection.value) == null ? void 0 : _a.title;
    });
    const bananaI18n2 = useI18n();
    const panelResult = computed(() => !isSandboxTarget.value ? bananaI18n2.i18n("cx-sx-publisher-publish-panel-new-section-result") : bananaI18n2.i18n("cx-sx-publisher-publish-panel-sandbox-section-result"));
    onMounted(() => store2.dispatch("translator/validateMT"));
    const router2 = useRouter();
    const editTranslation = () => {
      router2.push({
        name: "sx-editor",
        params: {
          content: currentPageSection.value.translationHtml,
          sourceLanguage: suggestion.value.sourceLanguage,
          targetLanguage: suggestion.value.targetLanguage,
          title: suggestion.value.targetTitle || suggestion.value.sourceTitle,
          isFinalEdit: true
        }
      });
    };
    const {
      configureTranslationOptions,
      doPublish,
      isPublishDialogActive,
      publishOptionsOn,
      publishStatus
    } = usePublishTranslation(store2);
    return {
      configureTranslationOptions,
      currentPageSection,
      doPublish,
      editTranslation,
      isPublishDialogActive,
      mwIconEdit,
      mwIconSettings,
      panelResult,
      publishOptionsOn,
      publishStatus,
      translatedTitle
    };
  }
};
const _hoisted_1$4 = { class: "sx-publisher" };
const _hoisted_2$2 = { class: "sx-publisher__publish-panel pa-4" };
const _hoisted_3$2 = { class: "mb-2" };
const _hoisted_4$1 = ["innerHTML"];
const _hoisted_5 = { class: "sx-publisher__section-preview pa-5" };
const _hoisted_6 = ["innerHTML"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_publisher_header = resolveComponent("sx-publisher-header");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_sx_publisher_review_info = resolveComponent("sx-publisher-review-info");
  const _component_sx_publish_option_selector = resolveComponent("sx-publish-option-selector");
  const _component_sx_publisher_animation_dialog = resolveComponent("sx-publisher-animation-dialog");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1$4, [
    createVNode(_component_sx_publisher_header, { onPublishTranslation: $setup.doPublish }, null, 8, ["onPublishTranslation"]),
    createBaseVNode("div", _hoisted_2$2, [
      withDirectives(createBaseVNode("h5", _hoisted_3$2, null, 512), [
        [_directive_i18n, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
      ]),
      createBaseVNode("h6", {
        class: "mb-2",
        innerHTML: $setup.panelResult
      }, null, 8, _hoisted_4$1),
      createVNode(_component_mw_row, {
        justify: "end",
        class: "ma-0"
      }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, { shrink: "" }, {
            default: withCtx(() => [
              createVNode(_component_mw_button, {
                type: "icon",
                icon: $setup.mwIconSettings,
                class: "pa-0 mx-1",
                onClick: $setup.configureTranslationOptions
              }, null, 8, ["icon", "onClick"])
            ], void 0, true),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ]),
    createVNode(_component_sx_publisher_review_info),
    createBaseVNode("section", _hoisted_5, [
      createVNode(_component_mw_row, { class: "pb-5 ma-0" }, {
        default: withCtx(() => [
          createVNode(_component_mw_col, {
            tag: "h2",
            grow: "",
            class: "sx-publisher__section-preview__title ma-0",
            innerHTML: $setup.translatedTitle
          }, null, 8, ["innerHTML"]),
          createVNode(_component_mw_col, { shrink: "" }, {
            default: withCtx(() => [
              createVNode(_component_mw_button, {
                icon: $setup.mwIconEdit,
                type: "icon",
                onClick: $setup.editTranslation
              }, null, 8, ["icon", "onClick"])
            ], void 0, true),
            _: 1
          })
        ], void 0),
        _: 1
      }),
      createBaseVNode("div", {
        innerHTML: $setup.currentPageSection.translationHtml
      }, null, 8, _hoisted_6)
    ]),
    createVNode(_component_sx_publish_option_selector, {
      active: $setup.publishOptionsOn,
      "onUpdate:active": _cache[0] || (_cache[0] = ($event) => $setup.publishOptionsOn = $event)
    }, null, 8, ["active"]),
    createVNode(_component_sx_publisher_animation_dialog, {
      active: $setup.isPublishDialogActive,
      status: $setup.publishStatus
    }, null, 8, ["active", "status"])
  ]);
}
var SXPublisher$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var SXPublisher_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: SXPublisher$1
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mdAndDown
      };
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_publisher = resolveComponent("sx-publisher");
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["sx-publisher-view", $options.classes])
  }, [
    createVNode(_component_sx_publisher)
  ], 2);
}
var SXPublisher = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var SXSearchArticleSuggestion_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail, MwIcon, MwRow, MwCol },
  props: {
    suggestion: {
      type: Page,
      required: true
    }
  },
  setup(props) {
    return { mwIconStar, mwIconLanguage, mwIconArticle, getDir: src.getDir };
  }
};
const _hoisted_1$3 = {
  key: 1,
  class: "cx-search-suggestion__thumbnail-placeholder justify-center"
};
const _hoisted_2$1 = ["textContent"];
const _hoisted_3$1 = ["textContent"];
const _hoisted_4 = ["textContent"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_thumbnail = resolveComponent("mw-thumbnail");
  const _component_mw_icon = resolveComponent("mw-icon");
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_row = resolveComponent("mw-row");
  return openBlock(), createBlock(_component_mw_row, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: $props.suggestion.language,
    dir: $setup.getDir($props.suggestion.language)
  }, {
    default: withCtx(() => [
      createVNode(_component_mw_col, { shrink: "" }, {
        default: withCtx(() => [
          $props.suggestion.thumbnail ? (openBlock(), createBlock(_component_mw_thumbnail, {
            key: 0,
            class: "cx-search-suggestion__thumbnail",
            thumbnail: $props.suggestion.thumbnail,
            width: 56
          }, null, 8, ["thumbnail"])) : (openBlock(), createElementBlock("div", _hoisted_1$3, [
            createVNode(_component_mw_icon, {
              size: "30",
              icon: $setup.mwIconArticle
            }, null, 8, ["icon"])
          ]))
        ], void 0, true),
        _: 1
      }),
      createVNode(_component_mw_col, { class: "ms-4" }, {
        default: withCtx(() => [
          createVNode(_component_mw_row, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: withCtx(() => [
              createVNode(_component_mw_col, {
                shrink: "",
                class: "mb-1"
              }, {
                default: withCtx(() => [
                  createBaseVNode("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: toDisplayString($props.suggestion.title)
                  }, null, 8, _hoisted_2$1)
                ], void 0, true),
                _: 1
              }),
              createVNode(_component_mw_col, {
                shrink: "",
                class: "mb-1"
              }, {
                default: withCtx(() => [
                  createBaseVNode("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: toDisplayString($props.suggestion.description)
                  }, null, 8, _hoisted_3$1)
                ], void 0, true),
                _: 1
              }),
              createVNode(_component_mw_col, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_mw_icon, {
                    icon: $setup.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  createBaseVNode("small", {
                    textContent: toDisplayString($props.suggestion.langLinksCount)
                  }, null, 8, _hoisted_4)
                ], void 0, true),
                _: 1
              })
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0),
    _: 1
  }, 8, ["lang", "dir"]);
}
var SxSearchArticleSuggestion = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const useSearchArticles = (sourceLanguage, searchInput) => {
  const maxSearchResults = 4;
  const searchResults = ref([]);
  const searchResultsLoading = ref(false);
  const searchResultsSlice = computed(() => searchResults.value.slice(0, maxSearchResults));
  const debouncedSearchForArticles = debounce(() => __async(this, null, function* () {
    try {
      searchResults.value = yield pageApi.searchPagesByTitlePrefix(searchInput.value, sourceLanguage.value);
    } finally {
      searchResultsLoading.value = false;
    }
  }), 500);
  watch(searchInput, () => {
    searchResultsLoading.value = true;
    searchResults.value = [];
    debouncedSearchForArticles();
  });
  return {
    searchResultsLoading,
    searchResultsSlice
  };
};
var SearchResultsCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion, MwCard, MwSpinner },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(props) {
    const { sourceLanguage, sourceLanguageAutonym } = useApplicationState(useStore());
    const searchInput = computed(() => props.searchInput);
    const { searchResultsLoading, searchResultsSlice } = useSearchArticles(sourceLanguage, searchInput);
    return {
      searchResultsLoading,
      searchResultsSlice,
      sourceLanguageAutonym
    };
  }
};
const _hoisted_1$2 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_spinner = resolveComponent("mw-spinner");
  const _component_sx_search_article_suggestion = resolveComponent("sx-search-article-suggestion");
  const _component_mw_card = resolveComponent("mw-card");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createBlock(_component_mw_card, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: withCtx(() => [
      $setup.searchResultsLoading ? (openBlock(), createBlock(_component_mw_spinner, { key: 0 })) : $setup.searchResultsSlice.length === 0 ? withDirectives((openBlock(), createElementBlock("p", _hoisted_1$2, null, 512)), [
        [_directive_i18n, [
          $props.searchInput,
          $setup.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.searchResultsSlice, (suggestion) => {
        return openBlock(), createBlock(_component_sx_search_article_suggestion, {
          key: suggestion.pageid,
          suggestion,
          onClick: ($event) => _ctx.$emit("suggestion-clicked", suggestion)
        }, null, 8, ["suggestion", "onClick"]);
      }), 128))
    ], void 0),
    _: 1
  });
}
var SearchResultsCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var ArticleSuggestionsCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion, MwCard },
  props: {
    cardTitle: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array,
      required: true
    }
  },
  emits: ["suggestion-clicked"],
  computed: __spreadValues({}, mapState({
    sourceLanguage: (state2) => state2.application.sourceLanguage
  }))
};
const _hoisted_1$1 = ["textContent"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_search_article_suggestion = resolveComponent("sx-search-article-suggestion");
  const _component_mw_card = resolveComponent("mw-card");
  return openBlock(), createBlock(_component_mw_card, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: withCtx(() => [
      createBaseVNode("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: toDisplayString($props.cardTitle)
      }, null, 8, _hoisted_1$1)
    ]),
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.suggestions, (suggestion) => {
        return openBlock(), createBlock(_component_sx_search_article_suggestion, {
          key: suggestion.pageid,
          suggestion,
          onClick: ($event) => _ctx.$emit("suggestion-clicked", suggestion)
        }, null, 8, ["suggestion", "onClick"]);
      }), 128))
    ], void 0),
    _: 1
  });
}
var ArticleSuggestionsCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const getSourceLanguageOptions = (sourceLanguage, suggestedSourceLanguages) => computed(() => {
  const sliceSize = 2;
  const languageSelectorOption = {
    value: "other",
    props: {
      icon: mwIconEllipsis,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  };
  const sourceLanguages = [
    sourceLanguage.value,
    ...suggestedSourceLanguages.value.slice(0, sliceSize)
  ];
  const languageOptions = sourceLanguages.filter((option, index) => sourceLanguages.findIndex((language) => language === option) === index).map((language) => ({
    value: language,
    props: {
      label: src.getAutonym(language),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  }));
  return [...languageOptions, languageSelectorOption];
});
const useSuggestedSourceLanguages = (sourceLanguage, targetLanguage, previousLanguages) => computed(() => {
  const browserLanguage = (navigator.language || "").split("-")[0];
  const acceptLanguages = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((languageCode) => languageCode.split("-")[0]);
  const suggestedLanguages = [
    mw.config.get("wgUserLanguage"),
    mw.config.get("wgContentLanguage"),
    browserLanguage,
    ...previousLanguages.value,
    ...acceptLanguages
  ];
  return [...new Set(suggestedLanguages)].filter((language) => language !== sourceLanguage.value && language !== targetLanguage.value && src.getAutonym(language) !== language);
});
const usePageTranslationStart = (router2, store2) => {
  const doStartSectionTranslation = startSectionTranslation.bind(null, router2, store2);
  const startRecentlyEditedSectionTranslation = (suggestedPage) => doStartSectionTranslation(suggestedPage.title, "sx-article-search", "suggestion_recent_edit");
  const startNearbySectionTranslation = (suggestedPage) => doStartSectionTranslation(suggestedPage.title, "sx-article-search", "suggestion_nearby");
  const startSearchResultSectionTranslation = (suggestedPage) => doStartSectionTranslation(suggestedPage.title, "sx-article-search", "search_result");
  return {
    startRecentlyEditedSectionTranslation,
    startNearbySectionTranslation,
    startSearchResultSectionTranslation
  };
};
var SXArticleSearch_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$1 = {
  name: "SxArticleSearch",
  components: {
    ArticleSuggestionsCard,
    SearchResultsCard,
    MwInput,
    MwDialog,
    MwLanguageSelector,
    MwButtonGroup,
    MwRow,
    MwCol,
    MwButton
  },
  setup() {
    const searchInput = ref("");
    const searchInputUsed = ref(false);
    const searchInputRef = ref(null);
    const sourceLanguageSelectOn = ref(false);
    const previousLanguages = ref([]);
    const store2 = useStore();
    const { sourceLanguage, targetLanguage } = useApplicationState(store2);
    const { supportedLanguageCodes } = useMediawikiState();
    const availableSourceLanguages = computed(() => supportedLanguageCodes.value.filter((languageCode) => languageCode !== targetLanguage.value));
    const suggestedSourceLanguages = useSuggestedSourceLanguages(sourceLanguage, targetLanguage, previousLanguages);
    const sourceLanguageOptions = getSourceLanguageOptions(sourceLanguage, suggestedSourceLanguages);
    const router2 = useRouter();
    onMounted(() => __async(this, null, function* () {
      var _a;
      yield initializeLanguages();
      store2.dispatch("translator/fetchTranslations");
      try {
        previousLanguages.value.push(...JSON.parse(localStorage.getItem("uls-previous-languages")));
      } catch (e) {
      }
      (_a = searchInputRef.value) == null ? void 0 : _a.focus();
    }));
    const close = () => {
      router2.push({ name: "dashboard" });
    };
    const updateSelection = (updatedLanguage) => {
      if (updatedLanguage === "other") {
        sourceLanguageSelectOn.value = true;
        return;
      }
      store2.dispatch("application/updateSourceLanguage", updatedLanguage);
    };
    watch(sourceLanguage, () => store2.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: true
    });
    const logEvent2 = useEventLogging();
    watch(searchInput, () => {
      if (!searchInputUsed.value) {
        searchInputUsed.value = true;
        logEvent2({ event_type: "dashboard_search" });
      }
    });
    const onSourceLanguageDialogClose = () => {
      sourceLanguageSelectOn.value = false;
    };
    const onSourceLanguageSelected = (updatedSourceLanguage) => {
      sourceLanguageSelectOn.value = false;
      previousLanguages.value.push(updatedSourceLanguage);
      updateSelection(updatedSourceLanguage);
    };
    const recentlyEditedPages = computed(() => store2.getters["mediawiki/getRecentlyEditedPages"]);
    const nearbyPages = computed(() => store2.getters["mediawiki/getNearbyPages"]);
    const breakpoints2 = inject("breakpoints");
    const fullscreen = computed(() => breakpoints2.mdAndDown);
    const {
      startRecentlyEditedSectionTranslation,
      startNearbySectionTranslation,
      startSearchResultSectionTranslation
    } = usePageTranslationStart(router2, store2);
    return {
      availableSourceLanguages,
      close,
      fullscreen,
      mwIconClose,
      mwIconSearch,
      nearbyPages,
      onSourceLanguageDialogClose,
      onSourceLanguageSelected,
      recentlyEditedPages,
      searchInput,
      searchInputRef,
      sourceLanguage,
      sourceLanguageOptions,
      sourceLanguageSelectOn,
      startNearbySectionTranslation,
      startRecentlyEditedSectionTranslation,
      startSearchResultSectionTranslation,
      suggestedSourceLanguages,
      updateSelection
    };
  }
};
const _hoisted_1 = { class: "sx-article-search" };
const _hoisted_2 = { class: "mb-0" };
const _hoisted_3 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mw_col = resolveComponent("mw-col");
  const _component_mw_button = resolveComponent("mw-button");
  const _component_mw_row = resolveComponent("mw-row");
  const _component_mw_input = resolveComponent("mw-input");
  const _component_mw_button_group = resolveComponent("mw-button-group");
  const _component_article_suggestions_card = resolveComponent("article-suggestions-card");
  const _component_search_results_card = resolveComponent("search-results-card");
  const _component_mw_language_selector = resolveComponent("mw-language-selector");
  const _component_mw_dialog = resolveComponent("mw-dialog");
  const _directive_i18n = resolveDirective("i18n");
  return openBlock(), createElementBlock("section", _hoisted_1, [
    createVNode(_component_mw_row, {
      class: "sx-article-search__header ma-0 py-3",
      align: "stretch",
      justify: "start"
    }, {
      default: withCtx(() => [
        createVNode(_component_mw_col, {
          grow: "",
          class: "px-4",
          align: "center"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("h5", _hoisted_2, null, 512), [
              [_directive_i18n, void 0, "cx-sx-article-search-header"]
            ])
          ], void 0, true),
          _: 1
        }),
        createVNode(_component_mw_col, {
          shrink: "",
          align: "start",
          class: "pe-4"
        }, {
          default: withCtx(() => [
            createVNode(_component_mw_button, {
              class: "pa-0",
              type: "icon",
              icon: $setup.mwIconClose,
              "icon-size": 20,
              onClick: $setup.close
            }, null, 8, ["icon", "onClick"])
          ], void 0, true),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    createVNode(_component_mw_input, {
      ref: "searchInputRef",
      value: $setup.searchInput,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.searchInput = $event),
      "icon-size": 20,
      icon: $setup.mwIconSearch,
      placeholder: _ctx.$i18n("cx-sx-article-search-input-placeholder"),
      type: "search"
    }, null, 8, ["value", "icon", "placeholder"]),
    createVNode(_component_mw_button_group, {
      class: "sx-article-search__language-button-group",
      items: $setup.sourceLanguageOptions,
      active: $setup.sourceLanguage,
      onSelect: $setup.updateSelection
    }, null, 8, ["items", "active", "onSelect"]),
    !$setup.searchInput ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $setup.recentlyEditedPages && $setup.recentlyEditedPages.length ? (openBlock(), createBlock(_component_article_suggestions_card, {
        key: 0,
        "card-title": _ctx.$i18n("cx-sx-article-search-recently-edited-title"),
        suggestions: $setup.recentlyEditedPages,
        onSuggestionClicked: $setup.startRecentlyEditedSectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : $setup.nearbyPages && $setup.nearbyPages.length ? (openBlock(), createBlock(_component_article_suggestions_card, {
        key: 1,
        "card-title": _ctx.$i18n("cx-sx-article-search-nearby-title"),
        suggestions: $setup.nearbyPages,
        onSuggestionClicked: $setup.startNearbySectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : withDirectives((openBlock(), createElementBlock("p", _hoisted_3, null, 512)), [
        [_directive_i18n, void 0, "cx-sx-article-search-no-suggestions-message"]
      ])
    ], 64)) : createCommentVNode("", true),
    withDirectives(createVNode(_component_search_results_card, {
      "search-input": $setup.searchInput,
      onSuggestionClicked: $setup.startSearchResultSectionTranslation
    }, null, 8, ["search-input", "onSuggestionClicked"]), [
      [vShow, !!$setup.searchInput]
    ]),
    createVNode(_component_mw_dialog, {
      value: $setup.sourceLanguageSelectOn,
      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.sourceLanguageSelectOn = $event),
      class: "sx-article-search-language-selector",
      animation: "slide-up",
      fullscreen: $setup.fullscreen,
      header: $setup.fullscreen,
      "overlay-opacity": 0,
      title: _ctx.$i18n("sx-article-search-language-selector-dialog-title"),
      onClose: $setup.onSourceLanguageDialogClose
    }, {
      default: withCtx(() => [
        createVNode(_component_mw_language_selector, {
          class: "sx-article-search-language-selector__widget col-12",
          languages: $setup.availableSourceLanguages,
          suggestions: $setup.suggestedSourceLanguages,
          placeholder: _ctx.$i18n("cx-sx-language-selector-placeholder"),
          onSelect: $setup.onSourceLanguageSelected,
          onClose: $setup.onSourceLanguageDialogClose
        }, null, 8, ["languages", "suggestions", "placeholder", "onSelect", "onClose"])
      ], void 0),
      _: 1
    }, 8, ["value", "fullscreen", "header", "title", "onClose"])
  ]);
}
var SXArticleSearch$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var SXArticleSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: SXArticleSearch$1
  },
  computed: {
    classes: (vm) => ({ fullscreen: vm.$mwui.breakpoint.mdAndDown })
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sx_article_search = resolveComponent("sx-article-search");
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["sx-article-search-view", $options.classes])
  }, [
    createVNode(_component_sx_article_search)
  ], 2);
}
var SXArticleSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const routes = [
  {
    path: "",
    name: "dashboard",
    component: Dashboard,
    params: true,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: SXArticleSearch,
    params: true,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: SXTranslationConfirmer,
    params: true,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: SXSectionSelector,
    params: true,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: SXContentComparator,
    params: true,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: SXQuickTutorial,
    params: true,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: SXSentenceSelector,
    params: true,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: SXEditor,
    params: true,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: SXPublisher,
    params: true,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Dashboard,
    params: true,
    meta: { workflowStep: 0 }
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  if (to.params.force) {
    next();
    return;
  }
  const fromStep = from.meta.workflowStep;
  const toStep = to.meta.workflowStep;
  if (isNaN(fromStep) && toStep >= 1) {
    next({ name: "dashboard" });
    return;
  }
  const stepsDifference = Math.ceil(toStep) - Math.floor(fromStep);
  if (stepsDifference > 1) {
    const previousRequiredStep = Math.ceil(toStep) - 1;
    const previousRequiredRoute = routes.find((route) => route.meta.workflowStep === previousRequiredStep);
    next({ name: previousRequiredRoute.name });
    return;
  }
  next();
});
router.afterEach((to, from) => {
  const toStep = to.meta.workflowStep;
  const fromStep = from.meta.workflowStep;
  to.meta.transitionName = toStep < fromStep ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const locale = mw.config.get("wgUserLanguage");
const finalFallback = "en";
const messages = mw.messages.values || {};
const app = createApp(App);
app.config.globalProperties.$incompleteVersion = true;
const eventLoggingPlugin = createEventLogging();
app.use(eventLoggingPlugin);
app.use(router);
app.use(store);
app.use(ColorsPlugin);
app.use(BreakpointsPlugin);
const i18nPlugin = createI18n({
  locale,
  finalFallback,
  messages,
  wikilinks: true
});
app.use(i18nPlugin);
app.mount("#contenttranslation");
