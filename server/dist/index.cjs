var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  if (mod && typeof mod === "object" || typeof mod === "function") {
    for (let key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: __accessProp.bind(mod, key),
          enumerable: true
        });
  }
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.thenable = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = undefined;
  function boolean(value) {
    return value === true || value === false;
  }
  exports2.boolean = boolean;
  function string(value) {
    return typeof value === "string" || value instanceof String;
  }
  exports2.string = string;
  function number(value) {
    return typeof value === "number" || value instanceof Number;
  }
  exports2.number = number;
  function error(value) {
    return value instanceof Error;
  }
  exports2.error = error;
  function func(value) {
    return typeof value === "function";
  }
  exports2.func = func;
  function array(value) {
    return Array.isArray(value);
  }
  exports2.array = array;
  function stringArray(value) {
    return array(value) && value.every((elem) => string(elem));
  }
  exports2.stringArray = stringArray;
  function typedArray(value, check) {
    return Array.isArray(value) && value.every(check);
  }
  exports2.typedArray = typedArray;
  function thenable(value) {
    return value && func(value.then);
  }
  exports2.thenable = thenable;
});

// node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = undefined;
  function boolean(value) {
    return value === true || value === false;
  }
  exports2.boolean = boolean;
  function string(value) {
    return typeof value === "string" || value instanceof String;
  }
  exports2.string = string;
  function number(value) {
    return typeof value === "number" || value instanceof Number;
  }
  exports2.number = number;
  function error(value) {
    return value instanceof Error;
  }
  exports2.error = error;
  function func(value) {
    return typeof value === "function";
  }
  exports2.func = func;
  function array(value) {
    return Array.isArray(value);
  }
  exports2.array = array;
  function stringArray(value) {
    return array(value) && value.every((elem) => string(elem));
  }
  exports2.stringArray = stringArray;
});

// node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = undefined;
  var is = require_is2();
  var ErrorCodes;
  (function(ErrorCodes) {
    ErrorCodes.ParseError = -32700;
    ErrorCodes.InvalidRequest = -32600;
    ErrorCodes.MethodNotFound = -32601;
    ErrorCodes.InvalidParams = -32602;
    ErrorCodes.InternalError = -32603;
    ErrorCodes.jsonrpcReservedErrorRangeStart = -32099;
    ErrorCodes.serverErrorStart = -32099;
    ErrorCodes.MessageWriteError = -32099;
    ErrorCodes.MessageReadError = -32098;
    ErrorCodes.PendingResponseRejected = -32097;
    ErrorCodes.ConnectionInactive = -32096;
    ErrorCodes.ServerNotInitialized = -32002;
    ErrorCodes.UnknownErrorCode = -32001;
    ErrorCodes.jsonrpcReservedErrorRangeEnd = -32000;
    ErrorCodes.serverErrorEnd = -32000;
  })(ErrorCodes || (exports2.ErrorCodes = ErrorCodes = {}));

  class ResponseError extends Error {
    constructor(code, message, data) {
      super(message);
      this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
      this.data = data;
      Object.setPrototypeOf(this, ResponseError.prototype);
    }
    toJson() {
      const result = {
        code: this.code,
        message: this.message
      };
      if (this.data !== undefined) {
        result.data = this.data;
      }
      return result;
    }
  }
  exports2.ResponseError = ResponseError;

  class ParameterStructures {
    constructor(kind) {
      this.kind = kind;
    }
    static is(value) {
      return value === ParameterStructures.auto || value === ParameterStructures.byName || value === ParameterStructures.byPosition;
    }
    toString() {
      return this.kind;
    }
  }
  exports2.ParameterStructures = ParameterStructures;
  ParameterStructures.auto = new ParameterStructures("auto");
  ParameterStructures.byPosition = new ParameterStructures("byPosition");
  ParameterStructures.byName = new ParameterStructures("byName");

  class AbstractMessageSignature {
    constructor(method, numberOfParams) {
      this.method = method;
      this.numberOfParams = numberOfParams;
    }
    get parameterStructures() {
      return ParameterStructures.auto;
    }
  }
  exports2.AbstractMessageSignature = AbstractMessageSignature;

  class RequestType0 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 0);
    }
  }
  exports2.RequestType0 = RequestType0;

  class RequestType extends AbstractMessageSignature {
    constructor(method, _parameterStructures = ParameterStructures.auto) {
      super(method, 1);
      this._parameterStructures = _parameterStructures;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  exports2.RequestType = RequestType;

  class RequestType1 extends AbstractMessageSignature {
    constructor(method, _parameterStructures = ParameterStructures.auto) {
      super(method, 1);
      this._parameterStructures = _parameterStructures;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  exports2.RequestType1 = RequestType1;

  class RequestType2 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 2);
    }
  }
  exports2.RequestType2 = RequestType2;

  class RequestType3 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 3);
    }
  }
  exports2.RequestType3 = RequestType3;

  class RequestType4 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 4);
    }
  }
  exports2.RequestType4 = RequestType4;

  class RequestType5 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 5);
    }
  }
  exports2.RequestType5 = RequestType5;

  class RequestType6 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 6);
    }
  }
  exports2.RequestType6 = RequestType6;

  class RequestType7 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 7);
    }
  }
  exports2.RequestType7 = RequestType7;

  class RequestType8 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 8);
    }
  }
  exports2.RequestType8 = RequestType8;

  class RequestType9 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 9);
    }
  }
  exports2.RequestType9 = RequestType9;

  class NotificationType extends AbstractMessageSignature {
    constructor(method, _parameterStructures = ParameterStructures.auto) {
      super(method, 1);
      this._parameterStructures = _parameterStructures;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  exports2.NotificationType = NotificationType;

  class NotificationType0 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 0);
    }
  }
  exports2.NotificationType0 = NotificationType0;

  class NotificationType1 extends AbstractMessageSignature {
    constructor(method, _parameterStructures = ParameterStructures.auto) {
      super(method, 1);
      this._parameterStructures = _parameterStructures;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  exports2.NotificationType1 = NotificationType1;

  class NotificationType2 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 2);
    }
  }
  exports2.NotificationType2 = NotificationType2;

  class NotificationType3 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 3);
    }
  }
  exports2.NotificationType3 = NotificationType3;

  class NotificationType4 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 4);
    }
  }
  exports2.NotificationType4 = NotificationType4;

  class NotificationType5 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 5);
    }
  }
  exports2.NotificationType5 = NotificationType5;

  class NotificationType6 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 6);
    }
  }
  exports2.NotificationType6 = NotificationType6;

  class NotificationType7 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 7);
    }
  }
  exports2.NotificationType7 = NotificationType7;

  class NotificationType8 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 8);
    }
  }
  exports2.NotificationType8 = NotificationType8;

  class NotificationType9 extends AbstractMessageSignature {
    constructor(method) {
      super(method, 9);
    }
  }
  exports2.NotificationType9 = NotificationType9;
  var Message;
  (function(Message) {
    function isRequest(message) {
      const candidate = message;
      return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
    }
    Message.isRequest = isRequest;
    function isNotification(message) {
      const candidate = message;
      return candidate && is.string(candidate.method) && message.id === undefined;
    }
    Message.isNotification = isNotification;
    function isResponse(message) {
      const candidate = message;
      return candidate && (candidate.result !== undefined || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
    }
    Message.isResponse = isResponse;
  })(Message || (exports2.Message = Message = {}));
});

// node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS(function(exports2) {
  var _a;
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.LRUCache = exports2.LinkedMap = exports2.Touch = undefined;
  var Touch;
  (function(Touch) {
    Touch.None = 0;
    Touch.First = 1;
    Touch.AsOld = Touch.First;
    Touch.Last = 2;
    Touch.AsNew = Touch.Last;
  })(Touch || (exports2.Touch = Touch = {}));

  class LinkedMap {
    constructor() {
      this[_a] = "LinkedMap";
      this._map = new Map;
      this._head = undefined;
      this._tail = undefined;
      this._size = 0;
      this._state = 0;
    }
    clear() {
      this._map.clear();
      this._head = undefined;
      this._tail = undefined;
      this._size = 0;
      this._state++;
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      return this._head?.value;
    }
    get last() {
      return this._tail?.value;
    }
    has(key) {
      return this._map.has(key);
    }
    get(key, touch = Touch.None) {
      const item = this._map.get(key);
      if (!item) {
        return;
      }
      if (touch !== Touch.None) {
        this.touch(item, touch);
      }
      return item.value;
    }
    set(key, value, touch = Touch.None) {
      let item = this._map.get(key);
      if (item) {
        item.value = value;
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
      } else {
        item = { key, value, next: undefined, previous: undefined };
        switch (touch) {
          case Touch.None:
            this.addItemLast(item);
            break;
          case Touch.First:
            this.addItemFirst(item);
            break;
          case Touch.Last:
            this.addItemLast(item);
            break;
          default:
            this.addItemLast(item);
            break;
        }
        this._map.set(key, item);
        this._size++;
      }
      return this;
    }
    delete(key) {
      return !!this.remove(key);
    }
    remove(key) {
      const item = this._map.get(key);
      if (!item) {
        return;
      }
      this._map.delete(key);
      this.removeItem(item);
      this._size--;
      return item.value;
    }
    shift() {
      if (!this._head && !this._tail) {
        return;
      }
      if (!this._head || !this._tail) {
        throw new Error("Invalid list");
      }
      const item = this._head;
      this._map.delete(item.key);
      this.removeItem(item);
      this._size--;
      return item.value;
    }
    forEach(callbackfn, thisArg) {
      const state = this._state;
      let current = this._head;
      while (current) {
        if (thisArg) {
          callbackfn.bind(thisArg)(current.value, current.key, this);
        } else {
          callbackfn(current.value, current.key, this);
        }
        if (this._state !== state) {
          throw new Error(`LinkedMap got modified during iteration.`);
        }
        current = current.next;
      }
    }
    keys() {
      const state = this._state;
      let current = this._head;
      const iterator = {
        [Symbol.iterator]: () => {
          return iterator;
        },
        next: () => {
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          if (current) {
            const result = { value: current.key, done: false };
            current = current.next;
            return result;
          } else {
            return { value: undefined, done: true };
          }
        }
      };
      return iterator;
    }
    values() {
      const state = this._state;
      let current = this._head;
      const iterator = {
        [Symbol.iterator]: () => {
          return iterator;
        },
        next: () => {
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          if (current) {
            const result = { value: current.value, done: false };
            current = current.next;
            return result;
          } else {
            return { value: undefined, done: true };
          }
        }
      };
      return iterator;
    }
    entries() {
      const state = this._state;
      let current = this._head;
      const iterator = {
        [Symbol.iterator]: () => {
          return iterator;
        },
        next: () => {
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          if (current) {
            const result = { value: [current.key, current.value], done: false };
            current = current.next;
            return result;
          } else {
            return { value: undefined, done: true };
          }
        }
      };
      return iterator;
    }
    [(_a = Symbol.toStringTag, Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(newSize) {
      if (newSize >= this.size) {
        return;
      }
      if (newSize === 0) {
        this.clear();
        return;
      }
      let current = this._head;
      let currentSize = this.size;
      while (current && currentSize > newSize) {
        this._map.delete(current.key);
        current = current.next;
        currentSize--;
      }
      this._head = current;
      this._size = currentSize;
      if (current) {
        current.previous = undefined;
      }
      this._state++;
    }
    addItemFirst(item) {
      if (!this._head && !this._tail) {
        this._tail = item;
      } else if (!this._head) {
        throw new Error("Invalid list");
      } else {
        item.next = this._head;
        this._head.previous = item;
      }
      this._head = item;
      this._state++;
    }
    addItemLast(item) {
      if (!this._head && !this._tail) {
        this._head = item;
      } else if (!this._tail) {
        throw new Error("Invalid list");
      } else {
        item.previous = this._tail;
        this._tail.next = item;
      }
      this._tail = item;
      this._state++;
    }
    removeItem(item) {
      if (item === this._head && item === this._tail) {
        this._head = undefined;
        this._tail = undefined;
      } else if (item === this._head) {
        if (!item.next) {
          throw new Error("Invalid list");
        }
        item.next.previous = undefined;
        this._head = item.next;
      } else if (item === this._tail) {
        if (!item.previous) {
          throw new Error("Invalid list");
        }
        item.previous.next = undefined;
        this._tail = item.previous;
      } else {
        const next = item.next;
        const previous = item.previous;
        if (!next || !previous) {
          throw new Error("Invalid list");
        }
        next.previous = previous;
        previous.next = next;
      }
      item.next = undefined;
      item.previous = undefined;
      this._state++;
    }
    touch(item, touch) {
      if (!this._head || !this._tail) {
        throw new Error("Invalid list");
      }
      if (touch !== Touch.First && touch !== Touch.Last) {
        return;
      }
      if (touch === Touch.First) {
        if (item === this._head) {
          return;
        }
        const next = item.next;
        const previous = item.previous;
        if (item === this._tail) {
          previous.next = undefined;
          this._tail = previous;
        } else {
          next.previous = previous;
          previous.next = next;
        }
        item.previous = undefined;
        item.next = this._head;
        this._head.previous = item;
        this._head = item;
        this._state++;
      } else if (touch === Touch.Last) {
        if (item === this._tail) {
          return;
        }
        const next = item.next;
        const previous = item.previous;
        if (item === this._head) {
          next.previous = undefined;
          this._head = next;
        } else {
          next.previous = previous;
          previous.next = next;
        }
        item.next = undefined;
        item.previous = this._tail;
        this._tail.next = item;
        this._tail = item;
        this._state++;
      }
    }
    toJSON() {
      const data = [];
      this.forEach((value, key) => {
        data.push([key, value]);
      });
      return data;
    }
    fromJSON(data) {
      this.clear();
      for (const [key, value] of data) {
        this.set(key, value);
      }
    }
  }
  exports2.LinkedMap = LinkedMap;

  class LRUCache extends LinkedMap {
    constructor(limit, ratio = 1) {
      super();
      this._limit = limit;
      this._ratio = Math.min(Math.max(0, ratio), 1);
    }
    get limit() {
      return this._limit;
    }
    set limit(limit) {
      this._limit = limit;
      this.checkTrim();
    }
    get ratio() {
      return this._ratio;
    }
    set ratio(ratio) {
      this._ratio = Math.min(Math.max(0, ratio), 1);
      this.checkTrim();
    }
    get(key, touch = Touch.AsNew) {
      return super.get(key, touch);
    }
    peek(key) {
      return super.get(key, Touch.None);
    }
    set(key, value) {
      super.set(key, value, Touch.Last);
      this.checkTrim();
      return this;
    }
    checkTrim() {
      if (this.size > this._limit) {
        this.trimOld(Math.round(this._limit * this._ratio));
      }
    }
  }
  exports2.LRUCache = LRUCache;
});

// node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.Disposable = undefined;
  var Disposable;
  (function(Disposable) {
    function create(func) {
      return {
        dispose: func
      };
    }
    Disposable.create = create;
  })(Disposable || (exports2.Disposable = Disposable = {}));
});

// node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var _ral;
  function RAL() {
    if (_ral === undefined) {
      throw new Error(`No runtime abstraction layer installed`);
    }
    return _ral;
  }
  (function(RAL) {
    function install(ral) {
      if (ral === undefined) {
        throw new Error(`No runtime abstraction layer provided`);
      }
      _ral = ral;
    }
    RAL.install = install;
  })(RAL || (RAL = {}));
  exports2.default = RAL;
});

// node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.Emitter = exports2.Event = undefined;
  var ral_1 = require_ral();
  var Event;
  (function(Event) {
    const _disposable = { dispose() {} };
    Event.None = function() {
      return _disposable;
    };
  })(Event || (exports2.Event = Event = {}));

  class CallbackList {
    add(callback, context = null, bucket) {
      if (!this._callbacks) {
        this._callbacks = [];
        this._contexts = [];
      }
      this._callbacks.push(callback);
      this._contexts.push(context);
      if (Array.isArray(bucket)) {
        bucket.push({ dispose: () => this.remove(callback, context) });
      }
    }
    remove(callback, context = null) {
      if (!this._callbacks) {
        return;
      }
      let foundCallbackWithDifferentContext = false;
      for (let i = 0, len = this._callbacks.length;i < len; i++) {
        if (this._callbacks[i] === callback) {
          if (this._contexts[i] === context) {
            this._callbacks.splice(i, 1);
            this._contexts.splice(i, 1);
            return;
          } else {
            foundCallbackWithDifferentContext = true;
          }
        }
      }
      if (foundCallbackWithDifferentContext) {
        throw new Error("When adding a listener with a context, you should remove it with the same context");
      }
    }
    invoke(...args) {
      if (!this._callbacks) {
        return [];
      }
      const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
      for (let i = 0, len = callbacks.length;i < len; i++) {
        try {
          ret.push(callbacks[i].apply(contexts[i], args));
        } catch (e) {
          (0, ral_1.default)().console.error(e);
        }
      }
      return ret;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = undefined;
      this._contexts = undefined;
    }
  }

  class Emitter {
    constructor(_options) {
      this._options = _options;
    }
    get event() {
      if (!this._event) {
        this._event = (listener, thisArgs, disposables) => {
          if (!this._callbacks) {
            this._callbacks = new CallbackList;
          }
          if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
            this._options.onFirstListenerAdd(this);
          }
          this._callbacks.add(listener, thisArgs);
          const result = {
            dispose: () => {
              if (!this._callbacks) {
                return;
              }
              this._callbacks.remove(listener, thisArgs);
              result.dispose = Emitter._noop;
              if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                this._options.onLastListenerRemove(this);
              }
            }
          };
          if (Array.isArray(disposables)) {
            disposables.push(result);
          }
          return result;
        };
      }
      return this._event;
    }
    fire(event) {
      if (this._callbacks) {
        this._callbacks.invoke.call(this._callbacks, event);
      }
    }
    dispose() {
      if (this._callbacks) {
        this._callbacks.dispose();
        this._callbacks = undefined;
      }
    }
  }
  exports2.Emitter = Emitter;
  Emitter._noop = function() {};
});

// node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CancellationTokenSource = exports2.CancellationToken = undefined;
  var ral_1 = require_ral();
  var Is = require_is2();
  var events_1 = require_events();
  var CancellationToken;
  (function(CancellationToken) {
    CancellationToken.None = Object.freeze({
      isCancellationRequested: false,
      onCancellationRequested: events_1.Event.None
    });
    CancellationToken.Cancelled = Object.freeze({
      isCancellationRequested: true,
      onCancellationRequested: events_1.Event.None
    });
    function is(value) {
      const candidate = value;
      return candidate && (candidate === CancellationToken.None || candidate === CancellationToken.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
    }
    CancellationToken.is = is;
  })(CancellationToken || (exports2.CancellationToken = CancellationToken = {}));
  var shortcutEvent = Object.freeze(function(callback, context) {
    const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
    return { dispose() {
      handle.dispose();
    } };
  });

  class MutableToken {
    constructor() {
      this._isCancelled = false;
    }
    cancel() {
      if (!this._isCancelled) {
        this._isCancelled = true;
        if (this._emitter) {
          this._emitter.fire(undefined);
          this.dispose();
        }
      }
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      if (this._isCancelled) {
        return shortcutEvent;
      }
      if (!this._emitter) {
        this._emitter = new events_1.Emitter;
      }
      return this._emitter.event;
    }
    dispose() {
      if (this._emitter) {
        this._emitter.dispose();
        this._emitter = undefined;
      }
    }
  }

  class CancellationTokenSource {
    get token() {
      if (!this._token) {
        this._token = new MutableToken;
      }
      return this._token;
    }
    cancel() {
      if (!this._token) {
        this._token = CancellationToken.Cancelled;
      } else {
        this._token.cancel();
      }
    }
    dispose() {
      if (!this._token) {
        this._token = CancellationToken.None;
      } else if (this._token instanceof MutableToken) {
        this._token.dispose();
      }
    }
  }
  exports2.CancellationTokenSource = CancellationTokenSource;
});

// node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = undefined;
  var cancellation_1 = require_cancellation();
  var CancellationState;
  (function(CancellationState) {
    CancellationState.Continue = 0;
    CancellationState.Cancelled = 1;
  })(CancellationState || (CancellationState = {}));

  class SharedArraySenderStrategy {
    constructor() {
      this.buffers = new Map;
    }
    enableCancellation(request) {
      if (request.id === null) {
        return;
      }
      const buffer = new SharedArrayBuffer(4);
      const data = new Int32Array(buffer, 0, 1);
      data[0] = CancellationState.Continue;
      this.buffers.set(request.id, buffer);
      request.$cancellationData = buffer;
    }
    async sendCancellation(_conn, id) {
      const buffer = this.buffers.get(id);
      if (buffer === undefined) {
        return;
      }
      const data = new Int32Array(buffer, 0, 1);
      Atomics.store(data, 0, CancellationState.Cancelled);
    }
    cleanup(id) {
      this.buffers.delete(id);
    }
    dispose() {
      this.buffers.clear();
    }
  }
  exports2.SharedArraySenderStrategy = SharedArraySenderStrategy;

  class SharedArrayBufferCancellationToken {
    constructor(buffer) {
      this.data = new Int32Array(buffer, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === CancellationState.Cancelled;
    }
    get onCancellationRequested() {
      throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
    }
  }

  class SharedArrayBufferCancellationTokenSource {
    constructor(buffer) {
      this.token = new SharedArrayBufferCancellationToken(buffer);
    }
    cancel() {}
    dispose() {}
  }

  class SharedArrayReceiverStrategy {
    constructor() {
      this.kind = "request";
    }
    createCancellationTokenSource(request) {
      const buffer = request.$cancellationData;
      if (buffer === undefined) {
        return new cancellation_1.CancellationTokenSource;
      }
      return new SharedArrayBufferCancellationTokenSource(buffer);
    }
  }
  exports2.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
});

// node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.Semaphore = undefined;
  var ral_1 = require_ral();

  class Semaphore {
    constructor(capacity = 1) {
      if (capacity <= 0) {
        throw new Error("Capacity must be greater than 0");
      }
      this._capacity = capacity;
      this._active = 0;
      this._waiting = [];
    }
    lock(thunk) {
      return new Promise((resolve, reject) => {
        this._waiting.push({ thunk, resolve, reject });
        this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) {
        return;
      }
      (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) {
        return;
      }
      const next = this._waiting.shift();
      this._active++;
      if (this._active > this._capacity) {
        throw new Error(`To many thunks active`);
      }
      try {
        const result = next.thunk();
        if (result instanceof Promise) {
          result.then((value) => {
            this._active--;
            next.resolve(value);
            this.runNext();
          }, (err) => {
            this._active--;
            next.reject(err);
            this.runNext();
          });
        } else {
          this._active--;
          next.resolve(result);
          this.runNext();
        }
      } catch (err) {
        this._active--;
        next.reject(err);
        this.runNext();
      }
    }
  }
  exports2.Semaphore = Semaphore;
});

// node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = undefined;
  var ral_1 = require_ral();
  var Is = require_is2();
  var events_1 = require_events();
  var semaphore_1 = require_semaphore();
  var MessageReader;
  (function(MessageReader) {
    function is(value) {
      let candidate = value;
      return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
    }
    MessageReader.is = is;
  })(MessageReader || (exports2.MessageReader = MessageReader = {}));

  class AbstractMessageReader {
    constructor() {
      this.errorEmitter = new events_1.Emitter;
      this.closeEmitter = new events_1.Emitter;
      this.partialMessageEmitter = new events_1.Emitter;
    }
    dispose() {
      this.errorEmitter.dispose();
      this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(error) {
      this.errorEmitter.fire(this.asError(error));
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(undefined);
    }
    get onPartialMessage() {
      return this.partialMessageEmitter.event;
    }
    firePartialMessage(info) {
      this.partialMessageEmitter.fire(info);
    }
    asError(error) {
      if (error instanceof Error) {
        return error;
      } else {
        return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
      }
    }
  }
  exports2.AbstractMessageReader = AbstractMessageReader;
  var ResolvedMessageReaderOptions;
  (function(ResolvedMessageReaderOptions) {
    function fromOptions(options) {
      let charset;
      let result;
      let contentDecoder;
      const contentDecoders = new Map;
      let contentTypeDecoder;
      const contentTypeDecoders = new Map;
      if (options === undefined || typeof options === "string") {
        charset = options ?? "utf-8";
      } else {
        charset = options.charset ?? "utf-8";
        if (options.contentDecoder !== undefined) {
          contentDecoder = options.contentDecoder;
          contentDecoders.set(contentDecoder.name, contentDecoder);
        }
        if (options.contentDecoders !== undefined) {
          for (const decoder of options.contentDecoders) {
            contentDecoders.set(decoder.name, decoder);
          }
        }
        if (options.contentTypeDecoder !== undefined) {
          contentTypeDecoder = options.contentTypeDecoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        if (options.contentTypeDecoders !== undefined) {
          for (const decoder of options.contentTypeDecoders) {
            contentTypeDecoders.set(decoder.name, decoder);
          }
        }
      }
      if (contentTypeDecoder === undefined) {
        contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
        contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
      }
      return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
    }
    ResolvedMessageReaderOptions.fromOptions = fromOptions;
  })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));

  class ReadableStreamMessageReader extends AbstractMessageReader {
    constructor(readable, options) {
      super();
      this.readable = readable;
      this.options = ResolvedMessageReaderOptions.fromOptions(options);
      this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
      this._partialMessageTimeout = 1e4;
      this.nextMessageLength = -1;
      this.messageToken = 0;
      this.readSemaphore = new semaphore_1.Semaphore(1);
    }
    set partialMessageTimeout(timeout) {
      this._partialMessageTimeout = timeout;
    }
    get partialMessageTimeout() {
      return this._partialMessageTimeout;
    }
    listen(callback) {
      this.nextMessageLength = -1;
      this.messageToken = 0;
      this.partialMessageTimer = undefined;
      this.callback = callback;
      const result = this.readable.onData((data) => {
        this.onData(data);
      });
      this.readable.onError((error) => this.fireError(error));
      this.readable.onClose(() => this.fireClose());
      return result;
    }
    onData(data) {
      try {
        this.buffer.append(data);
        while (true) {
          if (this.nextMessageLength === -1) {
            const headers = this.buffer.tryReadHeaders(true);
            if (!headers) {
              return;
            }
            const contentLength = headers.get("content-length");
            if (!contentLength) {
              this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
              return;
            }
            const length = parseInt(contentLength);
            if (isNaN(length)) {
              this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
              return;
            }
            this.nextMessageLength = length;
          }
          const body = this.buffer.tryReadBody(this.nextMessageLength);
          if (body === undefined) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer();
          this.nextMessageLength = -1;
          this.readSemaphore.lock(async () => {
            const bytes = this.options.contentDecoder !== undefined ? await this.options.contentDecoder.decode(body) : body;
            const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
            this.callback(message);
          }).catch((error) => {
            this.fireError(error);
          });
        }
      } catch (error) {
        this.fireError(error);
      }
    }
    clearPartialMessageTimer() {
      if (this.partialMessageTimer) {
        this.partialMessageTimer.dispose();
        this.partialMessageTimer = undefined;
      }
    }
    setPartialMessageTimer() {
      this.clearPartialMessageTimer();
      if (this._partialMessageTimeout <= 0) {
        return;
      }
      this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
        this.partialMessageTimer = undefined;
        if (token === this.messageToken) {
          this.firePartialMessage({ messageToken: token, waitingTime: timeout });
          this.setPartialMessageTimer();
        }
      }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
    }
  }
  exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
});

// node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = undefined;
  var ral_1 = require_ral();
  var Is = require_is2();
  var semaphore_1 = require_semaphore();
  var events_1 = require_events();
  var ContentLength = "Content-Length: ";
  var CRLF = `\r
`;
  var MessageWriter;
  (function(MessageWriter) {
    function is(value) {
      let candidate = value;
      return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
    }
    MessageWriter.is = is;
  })(MessageWriter || (exports2.MessageWriter = MessageWriter = {}));

  class AbstractMessageWriter {
    constructor() {
      this.errorEmitter = new events_1.Emitter;
      this.closeEmitter = new events_1.Emitter;
    }
    dispose() {
      this.errorEmitter.dispose();
      this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(error, message, count) {
      this.errorEmitter.fire([this.asError(error), message, count]);
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(undefined);
    }
    asError(error) {
      if (error instanceof Error) {
        return error;
      } else {
        return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
      }
    }
  }
  exports2.AbstractMessageWriter = AbstractMessageWriter;
  var ResolvedMessageWriterOptions;
  (function(ResolvedMessageWriterOptions) {
    function fromOptions(options) {
      if (options === undefined || typeof options === "string") {
        return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
      } else {
        return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
      }
    }
    ResolvedMessageWriterOptions.fromOptions = fromOptions;
  })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));

  class WriteableStreamMessageWriter extends AbstractMessageWriter {
    constructor(writable, options) {
      super();
      this.writable = writable;
      this.options = ResolvedMessageWriterOptions.fromOptions(options);
      this.errorCount = 0;
      this.writeSemaphore = new semaphore_1.Semaphore(1);
      this.writable.onError((error) => this.fireError(error));
      this.writable.onClose(() => this.fireClose());
    }
    async write(msg) {
      return this.writeSemaphore.lock(async () => {
        const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
          if (this.options.contentEncoder !== undefined) {
            return this.options.contentEncoder.encode(buffer);
          } else {
            return buffer;
          }
        });
        return payload.then((buffer) => {
          const headers = [];
          headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
          headers.push(CRLF);
          return this.doWrite(msg, headers, buffer);
        }, (error) => {
          this.fireError(error);
          throw error;
        });
      });
    }
    async doWrite(msg, headers, data) {
      try {
        await this.writable.write(headers.join(""), "ascii");
        return this.writable.write(data);
      } catch (error) {
        this.handleError(error, msg);
        return Promise.reject(error);
      }
    }
    handleError(error, msg) {
      this.errorCount++;
      this.fireError(error, msg, this.errorCount);
    }
    end() {
      this.writable.end();
    }
  }
  exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
});

// node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.AbstractMessageBuffer = undefined;
  var CR = 13;
  var LF = 10;
  var CRLF = `\r
`;

  class AbstractMessageBuffer {
    constructor(encoding = "utf-8") {
      this._encoding = encoding;
      this._chunks = [];
      this._totalLength = 0;
    }
    get encoding() {
      return this._encoding;
    }
    append(chunk) {
      const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
      this._chunks.push(toAppend);
      this._totalLength += toAppend.byteLength;
    }
    tryReadHeaders(lowerCaseKeys = false) {
      if (this._chunks.length === 0) {
        return;
      }
      let state = 0;
      let chunkIndex = 0;
      let offset = 0;
      let chunkBytesRead = 0;
      row:
        while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          column:
            while (offset < chunk.length) {
              const value = chunk[offset];
              switch (value) {
                case CR:
                  switch (state) {
                    case 0:
                      state = 1;
                      break;
                    case 2:
                      state = 3;
                      break;
                    default:
                      state = 0;
                  }
                  break;
                case LF:
                  switch (state) {
                    case 1:
                      state = 2;
                      break;
                    case 3:
                      state = 4;
                      offset++;
                      break row;
                    default:
                      state = 0;
                  }
                  break;
                default:
                  state = 0;
              }
              offset++;
            }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
      if (state !== 4) {
        return;
      }
      const buffer = this._read(chunkBytesRead + offset);
      const result = new Map;
      const headers = this.toString(buffer, "ascii").split(CRLF);
      if (headers.length < 2) {
        return result;
      }
      for (let i = 0;i < headers.length - 2; i++) {
        const header = headers[i];
        const index = header.indexOf(":");
        if (index === -1) {
          throw new Error(`Message header must separate key and value using ':'
${header}`);
        }
        const key = header.substr(0, index);
        const value = header.substr(index + 1).trim();
        result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
      }
      return result;
    }
    tryReadBody(length) {
      if (this._totalLength < length) {
        return;
      }
      return this._read(length);
    }
    get numberOfBytes() {
      return this._totalLength;
    }
    _read(byteCount) {
      if (byteCount === 0) {
        return this.emptyBuffer();
      }
      if (byteCount > this._totalLength) {
        throw new Error(`Cannot read so many bytes!`);
      }
      if (this._chunks[0].byteLength === byteCount) {
        const chunk = this._chunks[0];
        this._chunks.shift();
        this._totalLength -= byteCount;
        return this.asNative(chunk);
      }
      if (this._chunks[0].byteLength > byteCount) {
        const chunk = this._chunks[0];
        const result = this.asNative(chunk, byteCount);
        this._chunks[0] = chunk.slice(byteCount);
        this._totalLength -= byteCount;
        return result;
      }
      const result = this.allocNative(byteCount);
      let resultOffset = 0;
      let chunkIndex = 0;
      while (byteCount > 0) {
        const chunk = this._chunks[chunkIndex];
        if (chunk.byteLength > byteCount) {
          const chunkPart = chunk.slice(0, byteCount);
          result.set(chunkPart, resultOffset);
          resultOffset += byteCount;
          this._chunks[chunkIndex] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          byteCount -= byteCount;
        } else {
          result.set(chunk, resultOffset);
          resultOffset += chunk.byteLength;
          this._chunks.shift();
          this._totalLength -= chunk.byteLength;
          byteCount -= chunk.byteLength;
        }
      }
      return result;
    }
  }
  exports2.AbstractMessageBuffer = AbstractMessageBuffer;
});

// node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.createMessageConnection = exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = undefined;
  var ral_1 = require_ral();
  var Is = require_is2();
  var messages_1 = require_messages();
  var linkedMap_1 = require_linkedMap();
  var events_1 = require_events();
  var cancellation_1 = require_cancellation();
  var CancelNotification;
  (function(CancelNotification) {
    CancelNotification.type = new messages_1.NotificationType("$/cancelRequest");
  })(CancelNotification || (CancelNotification = {}));
  var ProgressToken;
  (function(ProgressToken) {
    function is(value) {
      return typeof value === "string" || typeof value === "number";
    }
    ProgressToken.is = is;
  })(ProgressToken || (exports2.ProgressToken = ProgressToken = {}));
  var ProgressNotification;
  (function(ProgressNotification) {
    ProgressNotification.type = new messages_1.NotificationType("$/progress");
  })(ProgressNotification || (ProgressNotification = {}));

  class ProgressType {
    constructor() {}
  }
  exports2.ProgressType = ProgressType;
  var StarRequestHandler;
  (function(StarRequestHandler) {
    function is(value) {
      return Is.func(value);
    }
    StarRequestHandler.is = is;
  })(StarRequestHandler || (StarRequestHandler = {}));
  exports2.NullLogger = Object.freeze({
    error: () => {},
    warn: () => {},
    info: () => {},
    log: () => {}
  });
  var Trace;
  (function(Trace) {
    Trace[Trace["Off"] = 0] = "Off";
    Trace[Trace["Messages"] = 1] = "Messages";
    Trace[Trace["Compact"] = 2] = "Compact";
    Trace[Trace["Verbose"] = 3] = "Verbose";
  })(Trace || (exports2.Trace = Trace = {}));
  var TraceValues;
  (function(TraceValues) {
    TraceValues.Off = "off";
    TraceValues.Messages = "messages";
    TraceValues.Compact = "compact";
    TraceValues.Verbose = "verbose";
  })(TraceValues || (exports2.TraceValues = TraceValues = {}));
  (function(Trace) {
    function fromString(value) {
      if (!Is.string(value)) {
        return Trace.Off;
      }
      value = value.toLowerCase();
      switch (value) {
        case "off":
          return Trace.Off;
        case "messages":
          return Trace.Messages;
        case "compact":
          return Trace.Compact;
        case "verbose":
          return Trace.Verbose;
        default:
          return Trace.Off;
      }
    }
    Trace.fromString = fromString;
    function toString(value) {
      switch (value) {
        case Trace.Off:
          return "off";
        case Trace.Messages:
          return "messages";
        case Trace.Compact:
          return "compact";
        case Trace.Verbose:
          return "verbose";
        default:
          return "off";
      }
    }
    Trace.toString = toString;
  })(Trace || (exports2.Trace = Trace = {}));
  var TraceFormat;
  (function(TraceFormat) {
    TraceFormat["Text"] = "text";
    TraceFormat["JSON"] = "json";
  })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
  (function(TraceFormat) {
    function fromString(value) {
      if (!Is.string(value)) {
        return TraceFormat.Text;
      }
      value = value.toLowerCase();
      if (value === "json") {
        return TraceFormat.JSON;
      } else {
        return TraceFormat.Text;
      }
    }
    TraceFormat.fromString = fromString;
  })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
  var SetTraceNotification;
  (function(SetTraceNotification) {
    SetTraceNotification.type = new messages_1.NotificationType("$/setTrace");
  })(SetTraceNotification || (exports2.SetTraceNotification = SetTraceNotification = {}));
  var LogTraceNotification;
  (function(LogTraceNotification) {
    LogTraceNotification.type = new messages_1.NotificationType("$/logTrace");
  })(LogTraceNotification || (exports2.LogTraceNotification = LogTraceNotification = {}));
  var ConnectionErrors;
  (function(ConnectionErrors) {
    ConnectionErrors[ConnectionErrors["Closed"] = 1] = "Closed";
    ConnectionErrors[ConnectionErrors["Disposed"] = 2] = "Disposed";
    ConnectionErrors[ConnectionErrors["AlreadyListening"] = 3] = "AlreadyListening";
  })(ConnectionErrors || (exports2.ConnectionErrors = ConnectionErrors = {}));

  class ConnectionError extends Error {
    constructor(code, message) {
      super(message);
      this.code = code;
      Object.setPrototypeOf(this, ConnectionError.prototype);
    }
  }
  exports2.ConnectionError = ConnectionError;
  var ConnectionStrategy;
  (function(ConnectionStrategy) {
    function is(value) {
      const candidate = value;
      return candidate && Is.func(candidate.cancelUndispatched);
    }
    ConnectionStrategy.is = is;
  })(ConnectionStrategy || (exports2.ConnectionStrategy = ConnectionStrategy = {}));
  var IdCancellationReceiverStrategy;
  (function(IdCancellationReceiverStrategy) {
    function is(value) {
      const candidate = value;
      return candidate && (candidate.kind === undefined || candidate.kind === "id") && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === undefined || Is.func(candidate.dispose));
    }
    IdCancellationReceiverStrategy.is = is;
  })(IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
  var RequestCancellationReceiverStrategy;
  (function(RequestCancellationReceiverStrategy) {
    function is(value) {
      const candidate = value;
      return candidate && candidate.kind === "request" && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === undefined || Is.func(candidate.dispose));
    }
    RequestCancellationReceiverStrategy.is = is;
  })(RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
  var CancellationReceiverStrategy;
  (function(CancellationReceiverStrategy) {
    CancellationReceiverStrategy.Message = Object.freeze({
      createCancellationTokenSource(_) {
        return new cancellation_1.CancellationTokenSource;
      }
    });
    function is(value) {
      return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
    }
    CancellationReceiverStrategy.is = is;
  })(CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
  var CancellationSenderStrategy;
  (function(CancellationSenderStrategy) {
    CancellationSenderStrategy.Message = Object.freeze({
      sendCancellation(conn, id) {
        return conn.sendNotification(CancelNotification.type, { id });
      },
      cleanup(_) {}
    });
    function is(value) {
      const candidate = value;
      return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
    }
    CancellationSenderStrategy.is = is;
  })(CancellationSenderStrategy || (exports2.CancellationSenderStrategy = CancellationSenderStrategy = {}));
  var CancellationStrategy;
  (function(CancellationStrategy) {
    CancellationStrategy.Message = Object.freeze({
      receiver: CancellationReceiverStrategy.Message,
      sender: CancellationSenderStrategy.Message
    });
    function is(value) {
      const candidate = value;
      return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
    }
    CancellationStrategy.is = is;
  })(CancellationStrategy || (exports2.CancellationStrategy = CancellationStrategy = {}));
  var MessageStrategy;
  (function(MessageStrategy) {
    function is(value) {
      const candidate = value;
      return candidate && Is.func(candidate.handleMessage);
    }
    MessageStrategy.is = is;
  })(MessageStrategy || (exports2.MessageStrategy = MessageStrategy = {}));
  var ConnectionOptions;
  (function(ConnectionOptions) {
    function is(value) {
      const candidate = value;
      return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
    }
    ConnectionOptions.is = is;
  })(ConnectionOptions || (exports2.ConnectionOptions = ConnectionOptions = {}));
  var ConnectionState;
  (function(ConnectionState) {
    ConnectionState[ConnectionState["New"] = 1] = "New";
    ConnectionState[ConnectionState["Listening"] = 2] = "Listening";
    ConnectionState[ConnectionState["Closed"] = 3] = "Closed";
    ConnectionState[ConnectionState["Disposed"] = 4] = "Disposed";
  })(ConnectionState || (ConnectionState = {}));
  function createMessageConnection(messageReader, messageWriter, _logger, options) {
    const logger = _logger !== undefined ? _logger : exports2.NullLogger;
    let sequenceNumber = 0;
    let notificationSequenceNumber = 0;
    let unknownResponseSequenceNumber = 0;
    const version = "2.0";
    let starRequestHandler = undefined;
    const requestHandlers = new Map;
    let starNotificationHandler = undefined;
    const notificationHandlers = new Map;
    const progressHandlers = new Map;
    let timer;
    let messageQueue = new linkedMap_1.LinkedMap;
    let responsePromises = new Map;
    let knownCanceledRequests = new Set;
    let requestTokens = new Map;
    let trace = Trace.Off;
    let traceFormat = TraceFormat.Text;
    let tracer;
    let state = ConnectionState.New;
    const errorEmitter = new events_1.Emitter;
    const closeEmitter = new events_1.Emitter;
    const unhandledNotificationEmitter = new events_1.Emitter;
    const unhandledProgressEmitter = new events_1.Emitter;
    const disposeEmitter = new events_1.Emitter;
    const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
    function createRequestQueueKey(id) {
      if (id === null) {
        throw new Error(`Can't send requests with id null since the response can't be correlated.`);
      }
      return "req-" + id.toString();
    }
    function createResponseQueueKey(id) {
      if (id === null) {
        return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
      } else {
        return "res-" + id.toString();
      }
    }
    function createNotificationQueueKey() {
      return "not-" + (++notificationSequenceNumber).toString();
    }
    function addMessageToQueue(queue, message) {
      if (messages_1.Message.isRequest(message)) {
        queue.set(createRequestQueueKey(message.id), message);
      } else if (messages_1.Message.isResponse(message)) {
        queue.set(createResponseQueueKey(message.id), message);
      } else {
        queue.set(createNotificationQueueKey(), message);
      }
    }
    function cancelUndispatched(_message) {
      return;
    }
    function isListening() {
      return state === ConnectionState.Listening;
    }
    function isClosed() {
      return state === ConnectionState.Closed;
    }
    function isDisposed() {
      return state === ConnectionState.Disposed;
    }
    function closeHandler() {
      if (state === ConnectionState.New || state === ConnectionState.Listening) {
        state = ConnectionState.Closed;
        closeEmitter.fire(undefined);
      }
    }
    function readErrorHandler(error) {
      errorEmitter.fire([error, undefined, undefined]);
    }
    function writeErrorHandler(data) {
      errorEmitter.fire(data);
    }
    messageReader.onClose(closeHandler);
    messageReader.onError(readErrorHandler);
    messageWriter.onClose(closeHandler);
    messageWriter.onError(writeErrorHandler);
    function triggerMessageQueue() {
      if (timer || messageQueue.size === 0) {
        return;
      }
      timer = (0, ral_1.default)().timer.setImmediate(() => {
        timer = undefined;
        processMessageQueue();
      });
    }
    function handleMessage(message) {
      if (messages_1.Message.isRequest(message)) {
        handleRequest(message);
      } else if (messages_1.Message.isNotification(message)) {
        handleNotification(message);
      } else if (messages_1.Message.isResponse(message)) {
        handleResponse(message);
      } else {
        handleInvalidMessage(message);
      }
    }
    function processMessageQueue() {
      if (messageQueue.size === 0) {
        return;
      }
      const message = messageQueue.shift();
      try {
        const messageStrategy = options?.messageStrategy;
        if (MessageStrategy.is(messageStrategy)) {
          messageStrategy.handleMessage(message, handleMessage);
        } else {
          handleMessage(message);
        }
      } finally {
        triggerMessageQueue();
      }
    }
    const callback = (message) => {
      try {
        if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          const key = createRequestQueueKey(cancelId);
          const toCancel = messageQueue.get(key);
          if (messages_1.Message.isRequest(toCancel)) {
            const strategy = options?.connectionStrategy;
            const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
            if (response && (response.error !== undefined || response.result !== undefined)) {
              messageQueue.delete(key);
              requestTokens.delete(cancelId);
              response.id = toCancel.id;
              traceSendingResponse(response, message.method, Date.now());
              messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
              return;
            }
          }
          const cancellationToken = requestTokens.get(cancelId);
          if (cancellationToken !== undefined) {
            cancellationToken.cancel();
            traceReceivedNotification(message);
            return;
          } else {
            knownCanceledRequests.add(cancelId);
          }
        }
        addMessageToQueue(messageQueue, message);
      } finally {
        triggerMessageQueue();
      }
    };
    function handleRequest(requestMessage) {
      if (isDisposed()) {
        return;
      }
      function reply(resultOrError, method, startTime) {
        const message = {
          jsonrpc: version,
          id: requestMessage.id
        };
        if (resultOrError instanceof messages_1.ResponseError) {
          message.error = resultOrError.toJson();
        } else {
          message.result = resultOrError === undefined ? null : resultOrError;
        }
        traceSendingResponse(message, method, startTime);
        messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
      }
      function replyError(error, method, startTime) {
        const message = {
          jsonrpc: version,
          id: requestMessage.id,
          error: error.toJson()
        };
        traceSendingResponse(message, method, startTime);
        messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
      }
      function replySuccess(result, method, startTime) {
        if (result === undefined) {
          result = null;
        }
        const message = {
          jsonrpc: version,
          id: requestMessage.id,
          result
        };
        traceSendingResponse(message, method, startTime);
        messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
      }
      traceReceivedRequest(requestMessage);
      const element = requestHandlers.get(requestMessage.method);
      let type;
      let requestHandler;
      if (element) {
        type = element.type;
        requestHandler = element.handler;
      }
      const startTime = Date.now();
      if (requestHandler || starRequestHandler) {
        const tokenKey = requestMessage.id ?? String(Date.now());
        const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
        if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
          cancellationSource.cancel();
        }
        if (requestMessage.id !== null) {
          requestTokens.set(tokenKey, cancellationSource);
        }
        try {
          let handlerResult;
          if (requestHandler) {
            if (requestMessage.params === undefined) {
              if (type !== undefined && type.numberOfParams !== 0) {
                replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                return;
              }
              handlerResult = requestHandler(cancellationSource.token);
            } else if (Array.isArray(requestMessage.params)) {
              if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byName) {
                replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                return;
              }
              handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
            } else {
              if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                return;
              }
              handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
            }
          } else if (starRequestHandler) {
            handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
          }
          const promise = handlerResult;
          if (!handlerResult) {
            requestTokens.delete(tokenKey);
            replySuccess(handlerResult, requestMessage.method, startTime);
          } else if (promise.then) {
            promise.then((resultOrError) => {
              requestTokens.delete(tokenKey);
              reply(resultOrError, requestMessage.method, startTime);
            }, (error) => {
              requestTokens.delete(tokenKey);
              if (error instanceof messages_1.ResponseError) {
                replyError(error, requestMessage.method, startTime);
              } else if (error && Is.string(error.message)) {
                replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
              } else {
                replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
              }
            });
          } else {
            requestTokens.delete(tokenKey);
            reply(handlerResult, requestMessage.method, startTime);
          }
        } catch (error) {
          requestTokens.delete(tokenKey);
          if (error instanceof messages_1.ResponseError) {
            reply(error, requestMessage.method, startTime);
          } else if (error && Is.string(error.message)) {
            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
          } else {
            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
          }
        }
      } else {
        replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
      }
    }
    function handleResponse(responseMessage) {
      if (isDisposed()) {
        return;
      }
      if (responseMessage.id === null) {
        if (responseMessage.error) {
          logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, undefined, 4)}`);
        } else {
          logger.error(`Received response message without id. No further error information provided.`);
        }
      } else {
        const key = responseMessage.id;
        const responsePromise = responsePromises.get(key);
        traceReceivedResponse(responseMessage, responsePromise);
        if (responsePromise !== undefined) {
          responsePromises.delete(key);
          try {
            if (responseMessage.error) {
              const error = responseMessage.error;
              responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
            } else if (responseMessage.result !== undefined) {
              responsePromise.resolve(responseMessage.result);
            } else {
              throw new Error("Should never happen.");
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
            }
          }
        }
      }
    }
    function handleNotification(message) {
      if (isDisposed()) {
        return;
      }
      let type = undefined;
      let notificationHandler;
      if (message.method === CancelNotification.type.method) {
        const cancelId = message.params.id;
        knownCanceledRequests.delete(cancelId);
        traceReceivedNotification(message);
        return;
      } else {
        const element = notificationHandlers.get(message.method);
        if (element) {
          notificationHandler = element.handler;
          type = element.type;
        }
      }
      if (notificationHandler || starNotificationHandler) {
        try {
          traceReceivedNotification(message);
          if (notificationHandler) {
            if (message.params === undefined) {
              if (type !== undefined) {
                if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                  logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                }
              }
              notificationHandler();
            } else if (Array.isArray(message.params)) {
              const params = message.params;
              if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                notificationHandler({ token: params[0], value: params[1] });
              } else {
                if (type !== undefined) {
                  if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                  }
                  if (type.numberOfParams !== message.params.length) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                  }
                }
                notificationHandler(...params);
              }
            } else {
              if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
              }
              notificationHandler(message.params);
            }
          } else if (starNotificationHandler) {
            starNotificationHandler(message.method, message.params);
          }
        } catch (error) {
          if (error.message) {
            logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
          } else {
            logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
          }
        }
      } else {
        unhandledNotificationEmitter.fire(message);
      }
    }
    function handleInvalidMessage(message) {
      if (!message) {
        logger.error("Received empty message.");
        return;
      }
      logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
      const responseMessage = message;
      if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
        const key = responseMessage.id;
        const responseHandler = responsePromises.get(key);
        if (responseHandler) {
          responseHandler.reject(new Error("The received response has neither a result nor an error property."));
        }
      }
    }
    function stringifyTrace(params) {
      if (params === undefined || params === null) {
        return;
      }
      switch (trace) {
        case Trace.Verbose:
          return JSON.stringify(params, null, 4);
        case Trace.Compact:
          return JSON.stringify(params);
        default:
          return;
      }
    }
    function traceSendingRequest(message) {
      if (trace === Trace.Off || !tracer) {
        return;
      }
      if (traceFormat === TraceFormat.Text) {
        let data = undefined;
        if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
          data = `Params: ${stringifyTrace(message.params)}

`;
        }
        tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
      } else {
        logLSPMessage("send-request", message);
      }
    }
    function traceSendingNotification(message) {
      if (trace === Trace.Off || !tracer) {
        return;
      }
      if (traceFormat === TraceFormat.Text) {
        let data = undefined;
        if (trace === Trace.Verbose || trace === Trace.Compact) {
          if (message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          } else {
            data = `No parameters provided.

`;
          }
        }
        tracer.log(`Sending notification '${message.method}'.`, data);
      } else {
        logLSPMessage("send-notification", message);
      }
    }
    function traceSendingResponse(message, method, startTime) {
      if (trace === Trace.Off || !tracer) {
        return;
      }
      if (traceFormat === TraceFormat.Text) {
        let data = undefined;
        if (trace === Trace.Verbose || trace === Trace.Compact) {
          if (message.error && message.error.data) {
            data = `Error data: ${stringifyTrace(message.error.data)}

`;
          } else {
            if (message.result) {
              data = `Result: ${stringifyTrace(message.result)}

`;
            } else if (message.error === undefined) {
              data = `No result returned.

`;
            }
          }
        }
        tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
      } else {
        logLSPMessage("send-response", message);
      }
    }
    function traceReceivedRequest(message) {
      if (trace === Trace.Off || !tracer) {
        return;
      }
      if (traceFormat === TraceFormat.Text) {
        let data = undefined;
        if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
          data = `Params: ${stringifyTrace(message.params)}

`;
        }
        tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
      } else {
        logLSPMessage("receive-request", message);
      }
    }
    function traceReceivedNotification(message) {
      if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
        return;
      }
      if (traceFormat === TraceFormat.Text) {
        let data = undefined;
        if (trace === Trace.Verbose || trace === Trace.Compact) {
          if (message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          } else {
            data = `No parameters provided.

`;
          }
        }
        tracer.log(`Received notification '${message.method}'.`, data);
      } else {
        logLSPMessage("receive-notification", message);
      }
    }
    function traceReceivedResponse(message, responsePromise) {
      if (trace === Trace.Off || !tracer) {
        return;
      }
      if (traceFormat === TraceFormat.Text) {
        let data = undefined;
        if (trace === Trace.Verbose || trace === Trace.Compact) {
          if (message.error && message.error.data) {
            data = `Error data: ${stringifyTrace(message.error.data)}

`;
          } else {
            if (message.result) {
              data = `Result: ${stringifyTrace(message.result)}

`;
            } else if (message.error === undefined) {
              data = `No result returned.

`;
            }
          }
        }
        if (responsePromise) {
          const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
          tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
        } else {
          tracer.log(`Received response ${message.id} without active response promise.`, data);
        }
      } else {
        logLSPMessage("receive-response", message);
      }
    }
    function logLSPMessage(type, message) {
      if (!tracer || trace === Trace.Off) {
        return;
      }
      const lspMessage = {
        isLSPMessage: true,
        type,
        message,
        timestamp: Date.now()
      };
      tracer.log(lspMessage);
    }
    function throwIfClosedOrDisposed() {
      if (isClosed()) {
        throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
      }
      if (isDisposed()) {
        throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
      }
    }
    function throwIfListening() {
      if (isListening()) {
        throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
      }
    }
    function throwIfNotListening() {
      if (!isListening()) {
        throw new Error("Call listen() first.");
      }
    }
    function undefinedToNull(param) {
      if (param === undefined) {
        return null;
      } else {
        return param;
      }
    }
    function nullToUndefined(param) {
      if (param === null) {
        return;
      } else {
        return param;
      }
    }
    function isNamedParam(param) {
      return param !== undefined && param !== null && !Array.isArray(param) && typeof param === "object";
    }
    function computeSingleParam(parameterStructures, param) {
      switch (parameterStructures) {
        case messages_1.ParameterStructures.auto:
          if (isNamedParam(param)) {
            return nullToUndefined(param);
          } else {
            return [undefinedToNull(param)];
          }
        case messages_1.ParameterStructures.byName:
          if (!isNamedParam(param)) {
            throw new Error(`Received parameters by name but param is not an object literal.`);
          }
          return nullToUndefined(param);
        case messages_1.ParameterStructures.byPosition:
          return [undefinedToNull(param)];
        default:
          throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
      }
    }
    function computeMessageParams(type, params) {
      let result;
      const numberOfParams = type.numberOfParams;
      switch (numberOfParams) {
        case 0:
          result = undefined;
          break;
        case 1:
          result = computeSingleParam(type.parameterStructures, params[0]);
          break;
        default:
          result = [];
          for (let i = 0;i < params.length && i < numberOfParams; i++) {
            result.push(undefinedToNull(params[i]));
          }
          if (params.length < numberOfParams) {
            for (let i = params.length;i < numberOfParams; i++) {
              result.push(null);
            }
          }
          break;
      }
      return result;
    }
    const connection = {
      sendNotification: (type, ...args) => {
        throwIfClosedOrDisposed();
        let method;
        let messageParams;
        if (Is.string(type)) {
          method = type;
          const first = args[0];
          let paramStart = 0;
          let parameterStructures = messages_1.ParameterStructures.auto;
          if (messages_1.ParameterStructures.is(first)) {
            paramStart = 1;
            parameterStructures = first;
          }
          let paramEnd = args.length;
          const numberOfParams = paramEnd - paramStart;
          switch (numberOfParams) {
            case 0:
              messageParams = undefined;
              break;
            case 1:
              messageParams = computeSingleParam(parameterStructures, args[paramStart]);
              break;
            default:
              if (parameterStructures === messages_1.ParameterStructures.byName) {
                throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
              }
              messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
              break;
          }
        } else {
          const params = args;
          method = type.method;
          messageParams = computeMessageParams(type, params);
        }
        const notificationMessage = {
          jsonrpc: version,
          method,
          params: messageParams
        };
        traceSendingNotification(notificationMessage);
        return messageWriter.write(notificationMessage).catch((error) => {
          logger.error(`Sending notification failed.`);
          throw error;
        });
      },
      onNotification: (type, handler) => {
        throwIfClosedOrDisposed();
        let method;
        if (Is.func(type)) {
          starNotificationHandler = type;
        } else if (handler) {
          if (Is.string(type)) {
            method = type;
            notificationHandlers.set(type, { type: undefined, handler });
          } else {
            method = type.method;
            notificationHandlers.set(type.method, { type, handler });
          }
        }
        return {
          dispose: () => {
            if (method !== undefined) {
              notificationHandlers.delete(method);
            } else {
              starNotificationHandler = undefined;
            }
          }
        };
      },
      onProgress: (_type, token, handler) => {
        if (progressHandlers.has(token)) {
          throw new Error(`Progress handler for token ${token} already registered`);
        }
        progressHandlers.set(token, handler);
        return {
          dispose: () => {
            progressHandlers.delete(token);
          }
        };
      },
      sendProgress: (_type, token, value) => {
        return connection.sendNotification(ProgressNotification.type, { token, value });
      },
      onUnhandledProgress: unhandledProgressEmitter.event,
      sendRequest: (type, ...args) => {
        throwIfClosedOrDisposed();
        throwIfNotListening();
        let method;
        let messageParams;
        let token = undefined;
        if (Is.string(type)) {
          method = type;
          const first = args[0];
          const last = args[args.length - 1];
          let paramStart = 0;
          let parameterStructures = messages_1.ParameterStructures.auto;
          if (messages_1.ParameterStructures.is(first)) {
            paramStart = 1;
            parameterStructures = first;
          }
          let paramEnd = args.length;
          if (cancellation_1.CancellationToken.is(last)) {
            paramEnd = paramEnd - 1;
            token = last;
          }
          const numberOfParams = paramEnd - paramStart;
          switch (numberOfParams) {
            case 0:
              messageParams = undefined;
              break;
            case 1:
              messageParams = computeSingleParam(parameterStructures, args[paramStart]);
              break;
            default:
              if (parameterStructures === messages_1.ParameterStructures.byName) {
                throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
              }
              messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
              break;
          }
        } else {
          const params = args;
          method = type.method;
          messageParams = computeMessageParams(type, params);
          const numberOfParams = type.numberOfParams;
          token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : undefined;
        }
        const id = sequenceNumber++;
        let disposable;
        if (token) {
          disposable = token.onCancellationRequested(() => {
            const p = cancellationStrategy.sender.sendCancellation(connection, id);
            if (p === undefined) {
              logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
              return Promise.resolve();
            } else {
              return p.catch(() => {
                logger.log(`Sending cancellation messages for id ${id} failed`);
              });
            }
          });
        }
        const requestMessage = {
          jsonrpc: version,
          id,
          method,
          params: messageParams
        };
        traceSendingRequest(requestMessage);
        if (typeof cancellationStrategy.sender.enableCancellation === "function") {
          cancellationStrategy.sender.enableCancellation(requestMessage);
        }
        return new Promise(async (resolve, reject) => {
          const resolveWithCleanup = (r) => {
            resolve(r);
            cancellationStrategy.sender.cleanup(id);
            disposable?.dispose();
          };
          const rejectWithCleanup = (r) => {
            reject(r);
            cancellationStrategy.sender.cleanup(id);
            disposable?.dispose();
          };
          const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
          try {
            await messageWriter.write(requestMessage);
            responsePromises.set(id, responsePromise);
          } catch (error) {
            logger.error(`Sending request failed.`);
            responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
            throw error;
          }
        });
      },
      onRequest: (type, handler) => {
        throwIfClosedOrDisposed();
        let method = null;
        if (StarRequestHandler.is(type)) {
          method = undefined;
          starRequestHandler = type;
        } else if (Is.string(type)) {
          method = null;
          if (handler !== undefined) {
            method = type;
            requestHandlers.set(type, { handler, type: undefined });
          }
        } else {
          if (handler !== undefined) {
            method = type.method;
            requestHandlers.set(type.method, { type, handler });
          }
        }
        return {
          dispose: () => {
            if (method === null) {
              return;
            }
            if (method !== undefined) {
              requestHandlers.delete(method);
            } else {
              starRequestHandler = undefined;
            }
          }
        };
      },
      hasPendingResponse: () => {
        return responsePromises.size > 0;
      },
      trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
        let _sendNotification = false;
        let _traceFormat = TraceFormat.Text;
        if (sendNotificationOrTraceOptions !== undefined) {
          if (Is.boolean(sendNotificationOrTraceOptions)) {
            _sendNotification = sendNotificationOrTraceOptions;
          } else {
            _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
            _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
          }
        }
        trace = _value;
        traceFormat = _traceFormat;
        if (trace === Trace.Off) {
          tracer = undefined;
        } else {
          tracer = _tracer;
        }
        if (_sendNotification && !isClosed() && !isDisposed()) {
          await connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
        }
      },
      onError: errorEmitter.event,
      onClose: closeEmitter.event,
      onUnhandledNotification: unhandledNotificationEmitter.event,
      onDispose: disposeEmitter.event,
      end: () => {
        messageWriter.end();
      },
      dispose: () => {
        if (isDisposed()) {
          return;
        }
        state = ConnectionState.Disposed;
        disposeEmitter.fire(undefined);
        const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
        for (const promise of responsePromises.values()) {
          promise.reject(error);
        }
        responsePromises = new Map;
        requestTokens = new Map;
        knownCanceledRequests = new Set;
        messageQueue = new linkedMap_1.LinkedMap;
        if (Is.func(messageWriter.dispose)) {
          messageWriter.dispose();
        }
        if (Is.func(messageReader.dispose)) {
          messageReader.dispose();
        }
      },
      listen: () => {
        throwIfClosedOrDisposed();
        throwIfListening();
        state = ConnectionState.Listening;
        messageReader.listen(callback);
      },
      inspect: () => {
        (0, ral_1.default)().console.log("inspect");
      }
    };
    connection.onNotification(LogTraceNotification.type, (params) => {
      if (trace === Trace.Off || !tracer) {
        return;
      }
      const verbose = trace === Trace.Verbose || trace === Trace.Compact;
      tracer.log(params.message, verbose ? params.verbose : undefined);
    });
    connection.onNotification(ProgressNotification.type, (params) => {
      const handler = progressHandlers.get(params.token);
      if (handler) {
        handler(params.value);
      } else {
        unhandledProgressEmitter.fire(params);
      }
    });
    return connection;
  }
  exports2.createMessageConnection = createMessageConnection;
});

// node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = undefined;
  exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = undefined;
  var messages_1 = require_messages();
  Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
    return messages_1.Message;
  } });
  Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
    return messages_1.RequestType;
  } });
  Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
    return messages_1.RequestType0;
  } });
  Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
    return messages_1.RequestType1;
  } });
  Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
    return messages_1.RequestType2;
  } });
  Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
    return messages_1.RequestType3;
  } });
  Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
    return messages_1.RequestType4;
  } });
  Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
    return messages_1.RequestType5;
  } });
  Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
    return messages_1.RequestType6;
  } });
  Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
    return messages_1.RequestType7;
  } });
  Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
    return messages_1.RequestType8;
  } });
  Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
    return messages_1.RequestType9;
  } });
  Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
    return messages_1.ResponseError;
  } });
  Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
    return messages_1.ErrorCodes;
  } });
  Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
    return messages_1.NotificationType;
  } });
  Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
    return messages_1.NotificationType0;
  } });
  Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
    return messages_1.NotificationType1;
  } });
  Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
    return messages_1.NotificationType2;
  } });
  Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
    return messages_1.NotificationType3;
  } });
  Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
    return messages_1.NotificationType4;
  } });
  Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
    return messages_1.NotificationType5;
  } });
  Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
    return messages_1.NotificationType6;
  } });
  Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
    return messages_1.NotificationType7;
  } });
  Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
    return messages_1.NotificationType8;
  } });
  Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
    return messages_1.NotificationType9;
  } });
  Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
    return messages_1.ParameterStructures;
  } });
  var linkedMap_1 = require_linkedMap();
  Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
    return linkedMap_1.LinkedMap;
  } });
  Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
    return linkedMap_1.LRUCache;
  } });
  Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
    return linkedMap_1.Touch;
  } });
  var disposable_1 = require_disposable();
  Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
    return disposable_1.Disposable;
  } });
  var events_1 = require_events();
  Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
    return events_1.Event;
  } });
  Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
    return events_1.Emitter;
  } });
  var cancellation_1 = require_cancellation();
  Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
    return cancellation_1.CancellationTokenSource;
  } });
  Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
    return cancellation_1.CancellationToken;
  } });
  var sharedArrayCancellation_1 = require_sharedArrayCancellation();
  Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
    return sharedArrayCancellation_1.SharedArraySenderStrategy;
  } });
  Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
    return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
  } });
  var messageReader_1 = require_messageReader();
  Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
    return messageReader_1.MessageReader;
  } });
  Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
    return messageReader_1.AbstractMessageReader;
  } });
  Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
    return messageReader_1.ReadableStreamMessageReader;
  } });
  var messageWriter_1 = require_messageWriter();
  Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
    return messageWriter_1.MessageWriter;
  } });
  Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
    return messageWriter_1.AbstractMessageWriter;
  } });
  Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
    return messageWriter_1.WriteableStreamMessageWriter;
  } });
  var messageBuffer_1 = require_messageBuffer();
  Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
    return messageBuffer_1.AbstractMessageBuffer;
  } });
  var connection_1 = require_connection();
  Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
    return connection_1.ConnectionStrategy;
  } });
  Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
    return connection_1.ConnectionOptions;
  } });
  Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
    return connection_1.NullLogger;
  } });
  Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
    return connection_1.createMessageConnection;
  } });
  Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
    return connection_1.ProgressToken;
  } });
  Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
    return connection_1.ProgressType;
  } });
  Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
    return connection_1.Trace;
  } });
  Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
    return connection_1.TraceValues;
  } });
  Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
    return connection_1.TraceFormat;
  } });
  Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
    return connection_1.SetTraceNotification;
  } });
  Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
    return connection_1.LogTraceNotification;
  } });
  Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
    return connection_1.ConnectionErrors;
  } });
  Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
    return connection_1.ConnectionError;
  } });
  Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
    return connection_1.CancellationReceiverStrategy;
  } });
  Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
    return connection_1.CancellationSenderStrategy;
  } });
  Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
    return connection_1.CancellationStrategy;
  } });
  Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
    return connection_1.MessageStrategy;
  } });
  var ral_1 = require_ral();
  exports2.RAL = ral_1.default;
});

// node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var util_1 = require("util");
  var api_1 = require_api();

  class MessageBuffer extends api_1.AbstractMessageBuffer {
    constructor(encoding = "utf-8") {
      super(encoding);
    }
    emptyBuffer() {
      return MessageBuffer.emptyBuffer;
    }
    fromString(value, encoding) {
      return Buffer.from(value, encoding);
    }
    toString(value, encoding) {
      if (value instanceof Buffer) {
        return value.toString(encoding);
      } else {
        return new util_1.TextDecoder(encoding).decode(value);
      }
    }
    asNative(buffer, length) {
      if (length === undefined) {
        return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
      } else {
        return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
      }
    }
    allocNative(length) {
      return Buffer.allocUnsafe(length);
    }
  }
  MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);

  class ReadableStreamWrapper {
    constructor(stream) {
      this.stream = stream;
    }
    onClose(listener) {
      this.stream.on("close", listener);
      return api_1.Disposable.create(() => this.stream.off("close", listener));
    }
    onError(listener) {
      this.stream.on("error", listener);
      return api_1.Disposable.create(() => this.stream.off("error", listener));
    }
    onEnd(listener) {
      this.stream.on("end", listener);
      return api_1.Disposable.create(() => this.stream.off("end", listener));
    }
    onData(listener) {
      this.stream.on("data", listener);
      return api_1.Disposable.create(() => this.stream.off("data", listener));
    }
  }

  class WritableStreamWrapper {
    constructor(stream) {
      this.stream = stream;
    }
    onClose(listener) {
      this.stream.on("close", listener);
      return api_1.Disposable.create(() => this.stream.off("close", listener));
    }
    onError(listener) {
      this.stream.on("error", listener);
      return api_1.Disposable.create(() => this.stream.off("error", listener));
    }
    onEnd(listener) {
      this.stream.on("end", listener);
      return api_1.Disposable.create(() => this.stream.off("end", listener));
    }
    write(data, encoding) {
      return new Promise((resolve, reject) => {
        const callback = (error) => {
          if (error === undefined || error === null) {
            resolve();
          } else {
            reject(error);
          }
        };
        if (typeof data === "string") {
          this.stream.write(data, encoding, callback);
        } else {
          this.stream.write(data, callback);
        }
      });
    }
    end() {
      this.stream.end();
    }
  }
  var _ril = Object.freeze({
    messageBuffer: Object.freeze({
      create: (encoding) => new MessageBuffer(encoding)
    }),
    applicationJson: Object.freeze({
      encoder: Object.freeze({
        name: "application/json",
        encode: (msg, options) => {
          try {
            return Promise.resolve(Buffer.from(JSON.stringify(msg, undefined, 0), options.charset));
          } catch (err) {
            return Promise.reject(err);
          }
        }
      }),
      decoder: Object.freeze({
        name: "application/json",
        decode: (buffer, options) => {
          try {
            if (buffer instanceof Buffer) {
              return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
            } else {
              return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
            }
          } catch (err) {
            return Promise.reject(err);
          }
        }
      })
    }),
    stream: Object.freeze({
      asReadableStream: (stream) => new ReadableStreamWrapper(stream),
      asWritableStream: (stream) => new WritableStreamWrapper(stream)
    }),
    console,
    timer: Object.freeze({
      setTimeout(callback, ms, ...args) {
        const handle = setTimeout(callback, ms, ...args);
        return { dispose: () => clearTimeout(handle) };
      },
      setImmediate(callback, ...args) {
        const handle = setImmediate(callback, ...args);
        return { dispose: () => clearImmediate(handle) };
      },
      setInterval(callback, ms, ...args) {
        const handle = setInterval(callback, ms, ...args);
        return { dispose: () => clearInterval(handle) };
      }
    })
  });
  function RIL() {
    return _ril;
  }
  (function(RIL) {
    function install() {
      api_1.RAL.install(_ril);
    }
    RIL.install = install;
  })(RIL || (RIL = {}));
  exports2.default = RIL;
});

// node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS(function(exports2) {
  var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.createMessageConnection = exports2.createServerSocketTransport = exports2.createClientSocketTransport = exports2.createServerPipeTransport = exports2.createClientPipeTransport = exports2.generateRandomPipeName = exports2.StreamMessageWriter = exports2.StreamMessageReader = exports2.SocketMessageWriter = exports2.SocketMessageReader = exports2.PortMessageWriter = exports2.PortMessageReader = exports2.IPCMessageWriter = exports2.IPCMessageReader = undefined;
  var ril_1 = require_ril();
  ril_1.default.install();
  var path = require("path");
  var os = require("os");
  var crypto_1 = require("crypto");
  var net_1 = require("net");
  var api_1 = require_api();
  __exportStar(require_api(), exports2);

  class IPCMessageReader extends api_1.AbstractMessageReader {
    constructor(process2) {
      super();
      this.process = process2;
      let eventEmitter = this.process;
      eventEmitter.on("error", (error) => this.fireError(error));
      eventEmitter.on("close", () => this.fireClose());
    }
    listen(callback) {
      this.process.on("message", callback);
      return api_1.Disposable.create(() => this.process.off("message", callback));
    }
  }
  exports2.IPCMessageReader = IPCMessageReader;

  class IPCMessageWriter extends api_1.AbstractMessageWriter {
    constructor(process2) {
      super();
      this.process = process2;
      this.errorCount = 0;
      const eventEmitter = this.process;
      eventEmitter.on("error", (error) => this.fireError(error));
      eventEmitter.on("close", () => this.fireClose);
    }
    write(msg) {
      try {
        if (typeof this.process.send === "function") {
          this.process.send(msg, undefined, undefined, (error) => {
            if (error) {
              this.errorCount++;
              this.handleError(error, msg);
            } else {
              this.errorCount = 0;
            }
          });
        }
        return Promise.resolve();
      } catch (error) {
        this.handleError(error, msg);
        return Promise.reject(error);
      }
    }
    handleError(error, msg) {
      this.errorCount++;
      this.fireError(error, msg, this.errorCount);
    }
    end() {}
  }
  exports2.IPCMessageWriter = IPCMessageWriter;

  class PortMessageReader extends api_1.AbstractMessageReader {
    constructor(port) {
      super();
      this.onData = new api_1.Emitter;
      port.on("close", () => this.fireClose);
      port.on("error", (error) => this.fireError(error));
      port.on("message", (message) => {
        this.onData.fire(message);
      });
    }
    listen(callback) {
      return this.onData.event(callback);
    }
  }
  exports2.PortMessageReader = PortMessageReader;

  class PortMessageWriter extends api_1.AbstractMessageWriter {
    constructor(port) {
      super();
      this.port = port;
      this.errorCount = 0;
      port.on("close", () => this.fireClose());
      port.on("error", (error) => this.fireError(error));
    }
    write(msg) {
      try {
        this.port.postMessage(msg);
        return Promise.resolve();
      } catch (error) {
        this.handleError(error, msg);
        return Promise.reject(error);
      }
    }
    handleError(error, msg) {
      this.errorCount++;
      this.fireError(error, msg, this.errorCount);
    }
    end() {}
  }
  exports2.PortMessageWriter = PortMessageWriter;

  class SocketMessageReader extends api_1.ReadableStreamMessageReader {
    constructor(socket, encoding = "utf-8") {
      super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
    }
  }
  exports2.SocketMessageReader = SocketMessageReader;

  class SocketMessageWriter extends api_1.WriteableStreamMessageWriter {
    constructor(socket, options) {
      super((0, ril_1.default)().stream.asWritableStream(socket), options);
      this.socket = socket;
    }
    dispose() {
      super.dispose();
      this.socket.destroy();
    }
  }
  exports2.SocketMessageWriter = SocketMessageWriter;

  class StreamMessageReader extends api_1.ReadableStreamMessageReader {
    constructor(readable, encoding) {
      super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
    }
  }
  exports2.StreamMessageReader = StreamMessageReader;

  class StreamMessageWriter extends api_1.WriteableStreamMessageWriter {
    constructor(writable, options) {
      super((0, ril_1.default)().stream.asWritableStream(writable), options);
    }
  }
  exports2.StreamMessageWriter = StreamMessageWriter;
  var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
  var safeIpcPathLengths = new Map([
    ["linux", 107],
    ["darwin", 103]
  ]);
  function generateRandomPipeName() {
    const randomSuffix = (0, crypto_1.randomBytes)(21).toString("hex");
    if (process.platform === "win32") {
      return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
    }
    let result;
    if (XDG_RUNTIME_DIR) {
      result = path.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
    } else {
      result = path.join(os.tmpdir(), `vscode-${randomSuffix}.sock`);
    }
    const limit = safeIpcPathLengths.get(process.platform);
    if (limit !== undefined && result.length > limit) {
      (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
    }
    return result;
  }
  exports2.generateRandomPipeName = generateRandomPipeName;
  function createClientPipeTransport(pipeName, encoding = "utf-8") {
    let connectResolve;
    const connected = new Promise((resolve, _reject) => {
      connectResolve = resolve;
    });
    return new Promise((resolve, reject) => {
      let server = (0, net_1.createServer)((socket) => {
        server.close();
        connectResolve([
          new SocketMessageReader(socket, encoding),
          new SocketMessageWriter(socket, encoding)
        ]);
      });
      server.on("error", reject);
      server.listen(pipeName, () => {
        server.removeListener("error", reject);
        resolve({
          onConnected: () => {
            return connected;
          }
        });
      });
    });
  }
  exports2.createClientPipeTransport = createClientPipeTransport;
  function createServerPipeTransport(pipeName, encoding = "utf-8") {
    const socket = (0, net_1.createConnection)(pipeName);
    return [
      new SocketMessageReader(socket, encoding),
      new SocketMessageWriter(socket, encoding)
    ];
  }
  exports2.createServerPipeTransport = createServerPipeTransport;
  function createClientSocketTransport(port, encoding = "utf-8") {
    let connectResolve;
    const connected = new Promise((resolve, _reject) => {
      connectResolve = resolve;
    });
    return new Promise((resolve, reject) => {
      const server = (0, net_1.createServer)((socket) => {
        server.close();
        connectResolve([
          new SocketMessageReader(socket, encoding),
          new SocketMessageWriter(socket, encoding)
        ]);
      });
      server.on("error", reject);
      server.listen(port, "127.0.0.1", () => {
        server.removeListener("error", reject);
        resolve({
          onConnected: () => {
            return connected;
          }
        });
      });
    });
  }
  exports2.createClientSocketTransport = createClientSocketTransport;
  function createServerSocketTransport(port, encoding = "utf-8") {
    const socket = (0, net_1.createConnection)(port, "127.0.0.1");
    return [
      new SocketMessageReader(socket, encoding),
      new SocketMessageWriter(socket, encoding)
    ];
  }
  exports2.createServerSocketTransport = createServerSocketTransport;
  function isReadableStream(value) {
    const candidate = value;
    return candidate.read !== undefined && candidate.addListener !== undefined;
  }
  function isWritableStream(value) {
    const candidate = value;
    return candidate.write !== undefined && candidate.addListener !== undefined;
  }
  function createMessageConnection(input, output, logger, options) {
    if (!logger) {
      logger = api_1.NullLogger;
    }
    const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
    const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
    if (api_1.ConnectionStrategy.is(options)) {
      options = { connectionStrategy: options };
    }
    return (0, api_1.createMessageConnection)(reader, writer, logger, options);
  }
  exports2.createMessageConnection = createMessageConnection;
});

// node_modules/vscode-jsonrpc/node.js
var require_node = __commonJS(function(exports2, module2) {
  module2.exports = require_main();
});

// node_modules/vscode-languageserver-types/lib/umd/main.js
var require_main2 = __commonJS(function(exports2, module2) {
  (function(factory) {
    if (typeof module2 === "object" && typeof module2.exports === "object") {
      var v = factory(require, exports2);
      if (v !== undefined)
        module2.exports = v;
    } else if (typeof define === "function" && define.amd) {
      define(["require", "exports"], factory);
    }
  })(function(require2, exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.TextDocument = exports3.EOL = exports3.WorkspaceFolder = exports3.InlineCompletionContext = exports3.SelectedCompletionInfo = exports3.InlineCompletionTriggerKind = exports3.InlineCompletionList = exports3.InlineCompletionItem = exports3.StringValue = exports3.InlayHint = exports3.InlayHintLabelPart = exports3.InlayHintKind = exports3.InlineValueContext = exports3.InlineValueEvaluatableExpression = exports3.InlineValueVariableLookup = exports3.InlineValueText = exports3.SemanticTokens = exports3.SemanticTokenModifiers = exports3.SemanticTokenTypes = exports3.SelectionRange = exports3.DocumentLink = exports3.FormattingOptions = exports3.CodeLens = exports3.CodeAction = exports3.CodeActionContext = exports3.CodeActionTriggerKind = exports3.CodeActionKind = exports3.DocumentSymbol = exports3.WorkspaceSymbol = exports3.SymbolInformation = exports3.SymbolTag = exports3.SymbolKind = exports3.DocumentHighlight = exports3.DocumentHighlightKind = exports3.SignatureInformation = exports3.ParameterInformation = exports3.Hover = exports3.MarkedString = exports3.CompletionList = exports3.CompletionItem = exports3.CompletionItemLabelDetails = exports3.InsertTextMode = exports3.InsertReplaceEdit = exports3.CompletionItemTag = exports3.InsertTextFormat = exports3.CompletionItemKind = exports3.MarkupContent = exports3.MarkupKind = exports3.TextDocumentItem = exports3.OptionalVersionedTextDocumentIdentifier = exports3.VersionedTextDocumentIdentifier = exports3.TextDocumentIdentifier = exports3.WorkspaceChange = exports3.WorkspaceEdit = exports3.DeleteFile = exports3.RenameFile = exports3.CreateFile = exports3.TextDocumentEdit = exports3.AnnotatedTextEdit = exports3.ChangeAnnotationIdentifier = exports3.ChangeAnnotation = exports3.TextEdit = exports3.Command = exports3.Diagnostic = exports3.CodeDescription = exports3.DiagnosticTag = exports3.DiagnosticSeverity = exports3.DiagnosticRelatedInformation = exports3.FoldingRange = exports3.FoldingRangeKind = exports3.ColorPresentation = exports3.ColorInformation = exports3.Color = exports3.LocationLink = exports3.Location = exports3.Range = exports3.Position = exports3.uinteger = exports3.integer = exports3.URI = exports3.DocumentUri = undefined;
    var DocumentUri;
    (function(DocumentUri) {
      function is(value) {
        return typeof value === "string";
      }
      DocumentUri.is = is;
    })(DocumentUri || (exports3.DocumentUri = DocumentUri = {}));
    var URI;
    (function(URI) {
      function is(value) {
        return typeof value === "string";
      }
      URI.is = is;
    })(URI || (exports3.URI = URI = {}));
    var integer;
    (function(integer) {
      integer.MIN_VALUE = -2147483648;
      integer.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && integer.MIN_VALUE <= value && value <= integer.MAX_VALUE;
      }
      integer.is = is;
    })(integer || (exports3.integer = integer = {}));
    var uinteger;
    (function(uinteger) {
      uinteger.MIN_VALUE = 0;
      uinteger.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && uinteger.MIN_VALUE <= value && value <= uinteger.MAX_VALUE;
      }
      uinteger.is = is;
    })(uinteger || (exports3.uinteger = uinteger = {}));
    var Position;
    (function(Position) {
      function create(line, character) {
        if (line === Number.MAX_VALUE) {
          line = uinteger.MAX_VALUE;
        }
        if (character === Number.MAX_VALUE) {
          character = uinteger.MAX_VALUE;
        }
        return { line, character };
      }
      Position.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
      }
      Position.is = is;
    })(Position || (exports3.Position = Position = {}));
    var Range;
    (function(Range) {
      function create(one, two, three, four) {
        if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
          return { start: Position.create(one, two), end: Position.create(three, four) };
        } else if (Position.is(one) && Position.is(two)) {
          return { start: one, end: two };
        } else {
          throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
        }
      }
      Range.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
      }
      Range.is = is;
    })(Range || (exports3.Range = Range = {}));
    var Location;
    (function(Location) {
      function create(uri, range) {
        return { uri, range };
      }
      Location.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
      }
      Location.is = is;
    })(Location || (exports3.Location = Location = {}));
    var LocationLink;
    (function(LocationLink) {
      function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
      }
      LocationLink.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
      }
      LocationLink.is = is;
    })(LocationLink || (exports3.LocationLink = LocationLink = {}));
    var Color;
    (function(Color) {
      function create(red, green, blue, alpha) {
        return {
          red,
          green,
          blue,
          alpha
        };
      }
      Color.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
      }
      Color.is = is;
    })(Color || (exports3.Color = Color = {}));
    var ColorInformation;
    (function(ColorInformation) {
      function create(range, color) {
        return {
          range,
          color
        };
      }
      ColorInformation.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
      }
      ColorInformation.is = is;
    })(ColorInformation || (exports3.ColorInformation = ColorInformation = {}));
    var ColorPresentation;
    (function(ColorPresentation) {
      function create(label, textEdit, additionalTextEdits) {
        return {
          label,
          textEdit,
          additionalTextEdits
        };
      }
      ColorPresentation.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
      }
      ColorPresentation.is = is;
    })(ColorPresentation || (exports3.ColorPresentation = ColorPresentation = {}));
    var FoldingRangeKind;
    (function(FoldingRangeKind) {
      FoldingRangeKind.Comment = "comment";
      FoldingRangeKind.Imports = "imports";
      FoldingRangeKind.Region = "region";
    })(FoldingRangeKind || (exports3.FoldingRangeKind = FoldingRangeKind = {}));
    var FoldingRange;
    (function(FoldingRange) {
      function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        var result = {
          startLine,
          endLine
        };
        if (Is.defined(startCharacter)) {
          result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
          result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
          result.kind = kind;
        }
        if (Is.defined(collapsedText)) {
          result.collapsedText = collapsedText;
        }
        return result;
      }
      FoldingRange.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
      }
      FoldingRange.is = is;
    })(FoldingRange || (exports3.FoldingRange = FoldingRange = {}));
    var DiagnosticRelatedInformation;
    (function(DiagnosticRelatedInformation) {
      function create(location, message) {
        return {
          location,
          message
        };
      }
      DiagnosticRelatedInformation.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
      }
      DiagnosticRelatedInformation.is = is;
    })(DiagnosticRelatedInformation || (exports3.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
    var DiagnosticSeverity;
    (function(DiagnosticSeverity) {
      DiagnosticSeverity.Error = 1;
      DiagnosticSeverity.Warning = 2;
      DiagnosticSeverity.Information = 3;
      DiagnosticSeverity.Hint = 4;
    })(DiagnosticSeverity || (exports3.DiagnosticSeverity = DiagnosticSeverity = {}));
    var DiagnosticTag;
    (function(DiagnosticTag) {
      DiagnosticTag.Unnecessary = 1;
      DiagnosticTag.Deprecated = 2;
    })(DiagnosticTag || (exports3.DiagnosticTag = DiagnosticTag = {}));
    var CodeDescription;
    (function(CodeDescription) {
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.href);
      }
      CodeDescription.is = is;
    })(CodeDescription || (exports3.CodeDescription = CodeDescription = {}));
    var Diagnostic;
    (function(Diagnostic) {
      function create(range, message, severity, code, source, relatedInformation) {
        var result = { range, message };
        if (Is.defined(severity)) {
          result.severity = severity;
        }
        if (Is.defined(code)) {
          result.code = code;
        }
        if (Is.defined(source)) {
          result.source = source;
        }
        if (Is.defined(relatedInformation)) {
          result.relatedInformation = relatedInformation;
        }
        return result;
      }
      Diagnostic.create = create;
      function is(value) {
        var _a;
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === undefined ? undefined : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
      }
      Diagnostic.is = is;
    })(Diagnostic || (exports3.Diagnostic = Diagnostic = {}));
    var Command;
    (function(Command) {
      function create(title, command) {
        var args = [];
        for (var _i = 2;_i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var result = { title, command };
        if (Is.defined(args) && args.length > 0) {
          result.arguments = args;
        }
        return result;
      }
      Command.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
      }
      Command.is = is;
    })(Command || (exports3.Command = Command = {}));
    var TextEdit;
    (function(TextEdit) {
      function replace(range, newText) {
        return { range, newText };
      }
      TextEdit.replace = replace;
      function insert(position, newText) {
        return { range: { start: position, end: position }, newText };
      }
      TextEdit.insert = insert;
      function del(range) {
        return { range, newText: "" };
      }
      TextEdit.del = del;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
      }
      TextEdit.is = is;
    })(TextEdit || (exports3.TextEdit = TextEdit = {}));
    var ChangeAnnotation;
    (function(ChangeAnnotation) {
      function create(label, needsConfirmation, description) {
        var result = { label };
        if (needsConfirmation !== undefined) {
          result.needsConfirmation = needsConfirmation;
        }
        if (description !== undefined) {
          result.description = description;
        }
        return result;
      }
      ChangeAnnotation.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === undefined) && (Is.string(candidate.description) || candidate.description === undefined);
      }
      ChangeAnnotation.is = is;
    })(ChangeAnnotation || (exports3.ChangeAnnotation = ChangeAnnotation = {}));
    var ChangeAnnotationIdentifier;
    (function(ChangeAnnotationIdentifier) {
      function is(value) {
        var candidate = value;
        return Is.string(candidate);
      }
      ChangeAnnotationIdentifier.is = is;
    })(ChangeAnnotationIdentifier || (exports3.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
    var AnnotatedTextEdit;
    (function(AnnotatedTextEdit) {
      function replace(range, newText, annotation) {
        return { range, newText, annotationId: annotation };
      }
      AnnotatedTextEdit.replace = replace;
      function insert(position, newText, annotation) {
        return { range: { start: position, end: position }, newText, annotationId: annotation };
      }
      AnnotatedTextEdit.insert = insert;
      function del(range, annotation) {
        return { range, newText: "", annotationId: annotation };
      }
      AnnotatedTextEdit.del = del;
      function is(value) {
        var candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      AnnotatedTextEdit.is = is;
    })(AnnotatedTextEdit || (exports3.AnnotatedTextEdit = AnnotatedTextEdit = {}));
    var TextDocumentEdit;
    (function(TextDocumentEdit) {
      function create(textDocument, edits) {
        return { textDocument, edits };
      }
      TextDocumentEdit.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
      }
      TextDocumentEdit.is = is;
    })(TextDocumentEdit || (exports3.TextDocumentEdit = TextDocumentEdit = {}));
    var CreateFile;
    (function(CreateFile) {
      function create(uri, options, annotation) {
        var result = {
          kind: "create",
          uri
        };
        if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
          result.options = options;
        }
        if (annotation !== undefined) {
          result.annotationId = annotation;
        }
        return result;
      }
      CreateFile.create = create;
      function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === undefined || (candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      CreateFile.is = is;
    })(CreateFile || (exports3.CreateFile = CreateFile = {}));
    var RenameFile;
    (function(RenameFile) {
      function create(oldUri, newUri, options, annotation) {
        var result = {
          kind: "rename",
          oldUri,
          newUri
        };
        if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
          result.options = options;
        }
        if (annotation !== undefined) {
          result.annotationId = annotation;
        }
        return result;
      }
      RenameFile.create = create;
      function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === undefined || (candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      RenameFile.is = is;
    })(RenameFile || (exports3.RenameFile = RenameFile = {}));
    var DeleteFile;
    (function(DeleteFile) {
      function create(uri, options, annotation) {
        var result = {
          kind: "delete",
          uri
        };
        if (options !== undefined && (options.recursive !== undefined || options.ignoreIfNotExists !== undefined)) {
          result.options = options;
        }
        if (annotation !== undefined) {
          result.annotationId = annotation;
        }
        return result;
      }
      DeleteFile.create = create;
      function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === undefined || (candidate.options.recursive === undefined || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === undefined || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      DeleteFile.is = is;
    })(DeleteFile || (exports3.DeleteFile = DeleteFile = {}));
    var WorkspaceEdit;
    (function(WorkspaceEdit) {
      function is(value) {
        var candidate = value;
        return candidate && (candidate.changes !== undefined || candidate.documentChanges !== undefined) && (candidate.documentChanges === undefined || candidate.documentChanges.every(function(change) {
          if (Is.string(change.kind)) {
            return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
          } else {
            return TextDocumentEdit.is(change);
          }
        }));
      }
      WorkspaceEdit.is = is;
    })(WorkspaceEdit || (exports3.WorkspaceEdit = WorkspaceEdit = {}));
    var TextEditChangeImpl = function() {
      function TextEditChangeImpl(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
      }
      TextEditChangeImpl.prototype.insert = function(position, newText, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
          edit = TextEdit.insert(position, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
          return id;
        }
      };
      TextEditChangeImpl.prototype.replace = function(range, newText, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
          edit = TextEdit.replace(range, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
          return id;
        }
      };
      TextEditChangeImpl.prototype.delete = function(range, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
          edit = TextEdit.del(range);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.del(range, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
          return id;
        }
      };
      TextEditChangeImpl.prototype.add = function(edit) {
        this.edits.push(edit);
      };
      TextEditChangeImpl.prototype.all = function() {
        return this.edits;
      };
      TextEditChangeImpl.prototype.clear = function() {
        this.edits.splice(0, this.edits.length);
      };
      TextEditChangeImpl.prototype.assertChangeAnnotations = function(value) {
        if (value === undefined) {
          throw new Error("Text edit change is not configured to manage change annotations.");
        }
      };
      return TextEditChangeImpl;
    }();
    var ChangeAnnotations = function() {
      function ChangeAnnotations(annotations) {
        this._annotations = annotations === undefined ? Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
      }
      ChangeAnnotations.prototype.all = function() {
        return this._annotations;
      };
      Object.defineProperty(ChangeAnnotations.prototype, "size", {
        get: function() {
          return this._size;
        },
        enumerable: false,
        configurable: true
      });
      ChangeAnnotations.prototype.manage = function(idOrAnnotation, annotation) {
        var id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
          id = idOrAnnotation;
        } else {
          id = this.nextId();
          annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== undefined) {
          throw new Error("Id ".concat(id, " is already in use."));
        }
        if (annotation === undefined) {
          throw new Error("No annotation provided for id ".concat(id));
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
      };
      ChangeAnnotations.prototype.nextId = function() {
        this._counter++;
        return this._counter.toString();
      };
      return ChangeAnnotations;
    }();
    var WorkspaceChange = function() {
      function WorkspaceChange(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== undefined) {
          this._workspaceEdit = workspaceEdit;
          if (workspaceEdit.documentChanges) {
            this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
            workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            workspaceEdit.documentChanges.forEach(function(change) {
              if (TextDocumentEdit.is(change)) {
                var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                _this._textEditChanges[change.textDocument.uri] = textEditChange;
              }
            });
          } else if (workspaceEdit.changes) {
            Object.keys(workspaceEdit.changes).forEach(function(key) {
              var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
              _this._textEditChanges[key] = textEditChange;
            });
          }
        } else {
          this._workspaceEdit = {};
        }
      }
      Object.defineProperty(WorkspaceChange.prototype, "edit", {
        get: function() {
          this.initDocumentChanges();
          if (this._changeAnnotations !== undefined) {
            if (this._changeAnnotations.size === 0) {
              this._workspaceEdit.changeAnnotations = undefined;
            } else {
              this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
          }
          return this._workspaceEdit;
        },
        enumerable: false,
        configurable: true
      });
      WorkspaceChange.prototype.getTextEditChange = function(key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
          this.initDocumentChanges();
          if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error("Workspace edit is not configured for document changes.");
          }
          var textDocument = { uri: key.uri, version: key.version };
          var result = this._textEditChanges[textDocument.uri];
          if (!result) {
            var edits = [];
            var textDocumentEdit = {
              textDocument,
              edits
            };
            this._workspaceEdit.documentChanges.push(textDocumentEdit);
            result = new TextEditChangeImpl(edits, this._changeAnnotations);
            this._textEditChanges[textDocument.uri] = result;
          }
          return result;
        } else {
          this.initChanges();
          if (this._workspaceEdit.changes === undefined) {
            throw new Error("Workspace edit is not configured for normal text edit changes.");
          }
          var result = this._textEditChanges[key];
          if (!result) {
            var edits = [];
            this._workspaceEdit.changes[key] = edits;
            result = new TextEditChangeImpl(edits);
            this._textEditChanges[key] = result;
          }
          return result;
        }
      };
      WorkspaceChange.prototype.initDocumentChanges = function() {
        if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
          this._changeAnnotations = new ChangeAnnotations;
          this._workspaceEdit.documentChanges = [];
          this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
      };
      WorkspaceChange.prototype.initChanges = function() {
        if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
          this._workspaceEdit.changes = Object.create(null);
        }
      };
      WorkspaceChange.prototype.createFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
          operation = CreateFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
          return id;
        }
      };
      WorkspaceChange.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
          operation = RenameFile.create(oldUri, newUri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
          return id;
        }
      };
      WorkspaceChange.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
          operation = DeleteFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
          return id;
        }
      };
      return WorkspaceChange;
    }();
    exports3.WorkspaceChange = WorkspaceChange;
    var TextDocumentIdentifier;
    (function(TextDocumentIdentifier) {
      function create(uri) {
        return { uri };
      }
      TextDocumentIdentifier.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
      }
      TextDocumentIdentifier.is = is;
    })(TextDocumentIdentifier || (exports3.TextDocumentIdentifier = TextDocumentIdentifier = {}));
    var VersionedTextDocumentIdentifier;
    (function(VersionedTextDocumentIdentifier) {
      function create(uri, version) {
        return { uri, version };
      }
      VersionedTextDocumentIdentifier.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
      }
      VersionedTextDocumentIdentifier.is = is;
    })(VersionedTextDocumentIdentifier || (exports3.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
    var OptionalVersionedTextDocumentIdentifier;
    (function(OptionalVersionedTextDocumentIdentifier) {
      function create(uri, version) {
        return { uri, version };
      }
      OptionalVersionedTextDocumentIdentifier.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
      }
      OptionalVersionedTextDocumentIdentifier.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (exports3.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
    var TextDocumentItem;
    (function(TextDocumentItem) {
      function create(uri, languageId, version, text) {
        return { uri, languageId, version, text };
      }
      TextDocumentItem.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
      }
      TextDocumentItem.is = is;
    })(TextDocumentItem || (exports3.TextDocumentItem = TextDocumentItem = {}));
    var MarkupKind;
    (function(MarkupKind) {
      MarkupKind.PlainText = "plaintext";
      MarkupKind.Markdown = "markdown";
      function is(value) {
        var candidate = value;
        return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
      }
      MarkupKind.is = is;
    })(MarkupKind || (exports3.MarkupKind = MarkupKind = {}));
    var MarkupContent;
    (function(MarkupContent) {
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
      }
      MarkupContent.is = is;
    })(MarkupContent || (exports3.MarkupContent = MarkupContent = {}));
    var CompletionItemKind;
    (function(CompletionItemKind) {
      CompletionItemKind.Text = 1;
      CompletionItemKind.Method = 2;
      CompletionItemKind.Function = 3;
      CompletionItemKind.Constructor = 4;
      CompletionItemKind.Field = 5;
      CompletionItemKind.Variable = 6;
      CompletionItemKind.Class = 7;
      CompletionItemKind.Interface = 8;
      CompletionItemKind.Module = 9;
      CompletionItemKind.Property = 10;
      CompletionItemKind.Unit = 11;
      CompletionItemKind.Value = 12;
      CompletionItemKind.Enum = 13;
      CompletionItemKind.Keyword = 14;
      CompletionItemKind.Snippet = 15;
      CompletionItemKind.Color = 16;
      CompletionItemKind.File = 17;
      CompletionItemKind.Reference = 18;
      CompletionItemKind.Folder = 19;
      CompletionItemKind.EnumMember = 20;
      CompletionItemKind.Constant = 21;
      CompletionItemKind.Struct = 22;
      CompletionItemKind.Event = 23;
      CompletionItemKind.Operator = 24;
      CompletionItemKind.TypeParameter = 25;
    })(CompletionItemKind || (exports3.CompletionItemKind = CompletionItemKind = {}));
    var InsertTextFormat;
    (function(InsertTextFormat) {
      InsertTextFormat.PlainText = 1;
      InsertTextFormat.Snippet = 2;
    })(InsertTextFormat || (exports3.InsertTextFormat = InsertTextFormat = {}));
    var CompletionItemTag;
    (function(CompletionItemTag) {
      CompletionItemTag.Deprecated = 1;
    })(CompletionItemTag || (exports3.CompletionItemTag = CompletionItemTag = {}));
    var InsertReplaceEdit;
    (function(InsertReplaceEdit) {
      function create(newText, insert, replace) {
        return { newText, insert, replace };
      }
      InsertReplaceEdit.create = create;
      function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
      }
      InsertReplaceEdit.is = is;
    })(InsertReplaceEdit || (exports3.InsertReplaceEdit = InsertReplaceEdit = {}));
    var InsertTextMode;
    (function(InsertTextMode) {
      InsertTextMode.asIs = 1;
      InsertTextMode.adjustIndentation = 2;
    })(InsertTextMode || (exports3.InsertTextMode = InsertTextMode = {}));
    var CompletionItemLabelDetails;
    (function(CompletionItemLabelDetails) {
      function is(value) {
        var candidate = value;
        return candidate && (Is.string(candidate.detail) || candidate.detail === undefined) && (Is.string(candidate.description) || candidate.description === undefined);
      }
      CompletionItemLabelDetails.is = is;
    })(CompletionItemLabelDetails || (exports3.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
    var CompletionItem;
    (function(CompletionItem) {
      function create(label) {
        return { label };
      }
      CompletionItem.create = create;
    })(CompletionItem || (exports3.CompletionItem = CompletionItem = {}));
    var CompletionList;
    (function(CompletionList) {
      function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
      }
      CompletionList.create = create;
    })(CompletionList || (exports3.CompletionList = CompletionList = {}));
    var MarkedString;
    (function(MarkedString) {
      function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      MarkedString.fromPlainText = fromPlainText;
      function is(value) {
        var candidate = value;
        return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
      }
      MarkedString.is = is;
    })(MarkedString || (exports3.MarkedString = MarkedString = {}));
    var Hover;
    (function(Hover) {
      function is(value) {
        var candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === undefined || Range.is(value.range));
      }
      Hover.is = is;
    })(Hover || (exports3.Hover = Hover = {}));
    var ParameterInformation;
    (function(ParameterInformation) {
      function create(label, documentation) {
        return documentation ? { label, documentation } : { label };
      }
      ParameterInformation.create = create;
    })(ParameterInformation || (exports3.ParameterInformation = ParameterInformation = {}));
    var SignatureInformation;
    (function(SignatureInformation) {
      function create(label, documentation) {
        var parameters = [];
        for (var _i = 2;_i < arguments.length; _i++) {
          parameters[_i - 2] = arguments[_i];
        }
        var result = { label };
        if (Is.defined(documentation)) {
          result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
          result.parameters = parameters;
        } else {
          result.parameters = [];
        }
        return result;
      }
      SignatureInformation.create = create;
    })(SignatureInformation || (exports3.SignatureInformation = SignatureInformation = {}));
    var DocumentHighlightKind;
    (function(DocumentHighlightKind) {
      DocumentHighlightKind.Text = 1;
      DocumentHighlightKind.Read = 2;
      DocumentHighlightKind.Write = 3;
    })(DocumentHighlightKind || (exports3.DocumentHighlightKind = DocumentHighlightKind = {}));
    var DocumentHighlight;
    (function(DocumentHighlight) {
      function create(range, kind) {
        var result = { range };
        if (Is.number(kind)) {
          result.kind = kind;
        }
        return result;
      }
      DocumentHighlight.create = create;
    })(DocumentHighlight || (exports3.DocumentHighlight = DocumentHighlight = {}));
    var SymbolKind;
    (function(SymbolKind) {
      SymbolKind.File = 1;
      SymbolKind.Module = 2;
      SymbolKind.Namespace = 3;
      SymbolKind.Package = 4;
      SymbolKind.Class = 5;
      SymbolKind.Method = 6;
      SymbolKind.Property = 7;
      SymbolKind.Field = 8;
      SymbolKind.Constructor = 9;
      SymbolKind.Enum = 10;
      SymbolKind.Interface = 11;
      SymbolKind.Function = 12;
      SymbolKind.Variable = 13;
      SymbolKind.Constant = 14;
      SymbolKind.String = 15;
      SymbolKind.Number = 16;
      SymbolKind.Boolean = 17;
      SymbolKind.Array = 18;
      SymbolKind.Object = 19;
      SymbolKind.Key = 20;
      SymbolKind.Null = 21;
      SymbolKind.EnumMember = 22;
      SymbolKind.Struct = 23;
      SymbolKind.Event = 24;
      SymbolKind.Operator = 25;
      SymbolKind.TypeParameter = 26;
    })(SymbolKind || (exports3.SymbolKind = SymbolKind = {}));
    var SymbolTag;
    (function(SymbolTag) {
      SymbolTag.Deprecated = 1;
    })(SymbolTag || (exports3.SymbolTag = SymbolTag = {}));
    var SymbolInformation;
    (function(SymbolInformation) {
      function create(name, kind, range, uri, containerName) {
        var result = {
          name,
          kind,
          location: { uri, range }
        };
        if (containerName) {
          result.containerName = containerName;
        }
        return result;
      }
      SymbolInformation.create = create;
    })(SymbolInformation || (exports3.SymbolInformation = SymbolInformation = {}));
    var WorkspaceSymbol;
    (function(WorkspaceSymbol) {
      function create(name, kind, uri, range) {
        return range !== undefined ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
      }
      WorkspaceSymbol.create = create;
    })(WorkspaceSymbol || (exports3.WorkspaceSymbol = WorkspaceSymbol = {}));
    var DocumentSymbol;
    (function(DocumentSymbol) {
      function create(name, detail, kind, range, selectionRange, children) {
        var result = {
          name,
          detail,
          kind,
          range,
          selectionRange
        };
        if (children !== undefined) {
          result.children = children;
        }
        return result;
      }
      DocumentSymbol.create = create;
      function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === undefined || Is.string(candidate.detail)) && (candidate.deprecated === undefined || Is.boolean(candidate.deprecated)) && (candidate.children === undefined || Array.isArray(candidate.children)) && (candidate.tags === undefined || Array.isArray(candidate.tags));
      }
      DocumentSymbol.is = is;
    })(DocumentSymbol || (exports3.DocumentSymbol = DocumentSymbol = {}));
    var CodeActionKind;
    (function(CodeActionKind) {
      CodeActionKind.Empty = "";
      CodeActionKind.QuickFix = "quickfix";
      CodeActionKind.Refactor = "refactor";
      CodeActionKind.RefactorExtract = "refactor.extract";
      CodeActionKind.RefactorInline = "refactor.inline";
      CodeActionKind.RefactorRewrite = "refactor.rewrite";
      CodeActionKind.Source = "source";
      CodeActionKind.SourceOrganizeImports = "source.organizeImports";
      CodeActionKind.SourceFixAll = "source.fixAll";
    })(CodeActionKind || (exports3.CodeActionKind = CodeActionKind = {}));
    var CodeActionTriggerKind;
    (function(CodeActionTriggerKind) {
      CodeActionTriggerKind.Invoked = 1;
      CodeActionTriggerKind.Automatic = 2;
    })(CodeActionTriggerKind || (exports3.CodeActionTriggerKind = CodeActionTriggerKind = {}));
    var CodeActionContext;
    (function(CodeActionContext) {
      function create(diagnostics, only, triggerKind) {
        var result = { diagnostics };
        if (only !== undefined && only !== null) {
          result.only = only;
        }
        if (triggerKind !== undefined && triggerKind !== null) {
          result.triggerKind = triggerKind;
        }
        return result;
      }
      CodeActionContext.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === undefined || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === undefined || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
      }
      CodeActionContext.is = is;
    })(CodeActionContext || (exports3.CodeActionContext = CodeActionContext = {}));
    var CodeAction;
    (function(CodeAction) {
      function create(title, kindOrCommandOrEdit, kind) {
        var result = { title };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
          checkKind = false;
          result.kind = kindOrCommandOrEdit;
        } else if (Command.is(kindOrCommandOrEdit)) {
          result.command = kindOrCommandOrEdit;
        } else {
          result.edit = kindOrCommandOrEdit;
        }
        if (checkKind && kind !== undefined) {
          result.kind = kind;
        }
        return result;
      }
      CodeAction.create = create;
      function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.title) && (candidate.diagnostics === undefined || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === undefined || Is.string(candidate.kind)) && (candidate.edit !== undefined || candidate.command !== undefined) && (candidate.command === undefined || Command.is(candidate.command)) && (candidate.isPreferred === undefined || Is.boolean(candidate.isPreferred)) && (candidate.edit === undefined || WorkspaceEdit.is(candidate.edit));
      }
      CodeAction.is = is;
    })(CodeAction || (exports3.CodeAction = CodeAction = {}));
    var CodeLens;
    (function(CodeLens) {
      function create(range, data) {
        var result = { range };
        if (Is.defined(data)) {
          result.data = data;
        }
        return result;
      }
      CodeLens.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
      }
      CodeLens.is = is;
    })(CodeLens || (exports3.CodeLens = CodeLens = {}));
    var FormattingOptions;
    (function(FormattingOptions) {
      function create(tabSize, insertSpaces) {
        return { tabSize, insertSpaces };
      }
      FormattingOptions.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
      }
      FormattingOptions.is = is;
    })(FormattingOptions || (exports3.FormattingOptions = FormattingOptions = {}));
    var DocumentLink;
    (function(DocumentLink) {
      function create(range, target, data) {
        return { range, target, data };
      }
      DocumentLink.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
      }
      DocumentLink.is = is;
    })(DocumentLink || (exports3.DocumentLink = DocumentLink = {}));
    var SelectionRange;
    (function(SelectionRange) {
      function create(range, parent) {
        return { range, parent };
      }
      SelectionRange.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
      }
      SelectionRange.is = is;
    })(SelectionRange || (exports3.SelectionRange = SelectionRange = {}));
    var SemanticTokenTypes;
    (function(SemanticTokenTypes) {
      SemanticTokenTypes["namespace"] = "namespace";
      SemanticTokenTypes["type"] = "type";
      SemanticTokenTypes["class"] = "class";
      SemanticTokenTypes["enum"] = "enum";
      SemanticTokenTypes["interface"] = "interface";
      SemanticTokenTypes["struct"] = "struct";
      SemanticTokenTypes["typeParameter"] = "typeParameter";
      SemanticTokenTypes["parameter"] = "parameter";
      SemanticTokenTypes["variable"] = "variable";
      SemanticTokenTypes["property"] = "property";
      SemanticTokenTypes["enumMember"] = "enumMember";
      SemanticTokenTypes["event"] = "event";
      SemanticTokenTypes["function"] = "function";
      SemanticTokenTypes["method"] = "method";
      SemanticTokenTypes["macro"] = "macro";
      SemanticTokenTypes["keyword"] = "keyword";
      SemanticTokenTypes["modifier"] = "modifier";
      SemanticTokenTypes["comment"] = "comment";
      SemanticTokenTypes["string"] = "string";
      SemanticTokenTypes["number"] = "number";
      SemanticTokenTypes["regexp"] = "regexp";
      SemanticTokenTypes["operator"] = "operator";
      SemanticTokenTypes["decorator"] = "decorator";
    })(SemanticTokenTypes || (exports3.SemanticTokenTypes = SemanticTokenTypes = {}));
    var SemanticTokenModifiers;
    (function(SemanticTokenModifiers) {
      SemanticTokenModifiers["declaration"] = "declaration";
      SemanticTokenModifiers["definition"] = "definition";
      SemanticTokenModifiers["readonly"] = "readonly";
      SemanticTokenModifiers["static"] = "static";
      SemanticTokenModifiers["deprecated"] = "deprecated";
      SemanticTokenModifiers["abstract"] = "abstract";
      SemanticTokenModifiers["async"] = "async";
      SemanticTokenModifiers["modification"] = "modification";
      SemanticTokenModifiers["documentation"] = "documentation";
      SemanticTokenModifiers["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (exports3.SemanticTokenModifiers = SemanticTokenModifiers = {}));
    var SemanticTokens;
    (function(SemanticTokens) {
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && (candidate.resultId === undefined || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
      }
      SemanticTokens.is = is;
    })(SemanticTokens || (exports3.SemanticTokens = SemanticTokens = {}));
    var InlineValueText;
    (function(InlineValueText) {
      function create(range, text) {
        return { range, text };
      }
      InlineValueText.create = create;
      function is(value) {
        var candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
      }
      InlineValueText.is = is;
    })(InlineValueText || (exports3.InlineValueText = InlineValueText = {}));
    var InlineValueVariableLookup;
    (function(InlineValueVariableLookup) {
      function create(range, variableName, caseSensitiveLookup) {
        return { range, variableName, caseSensitiveLookup };
      }
      InlineValueVariableLookup.create = create;
      function is(value) {
        var candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === undefined);
      }
      InlineValueVariableLookup.is = is;
    })(InlineValueVariableLookup || (exports3.InlineValueVariableLookup = InlineValueVariableLookup = {}));
    var InlineValueEvaluatableExpression;
    (function(InlineValueEvaluatableExpression) {
      function create(range, expression) {
        return { range, expression };
      }
      InlineValueEvaluatableExpression.create = create;
      function is(value) {
        var candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === undefined);
      }
      InlineValueEvaluatableExpression.is = is;
    })(InlineValueEvaluatableExpression || (exports3.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
    var InlineValueContext;
    (function(InlineValueContext) {
      function create(frameId, stoppedLocation) {
        return { frameId, stoppedLocation };
      }
      InlineValueContext.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(value.stoppedLocation);
      }
      InlineValueContext.is = is;
    })(InlineValueContext || (exports3.InlineValueContext = InlineValueContext = {}));
    var InlayHintKind;
    (function(InlayHintKind) {
      InlayHintKind.Type = 1;
      InlayHintKind.Parameter = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      InlayHintKind.is = is;
    })(InlayHintKind || (exports3.InlayHintKind = InlayHintKind = {}));
    var InlayHintLabelPart;
    (function(InlayHintLabelPart) {
      function create(value) {
        return { value };
      }
      InlayHintLabelPart.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === undefined || Location.is(candidate.location)) && (candidate.command === undefined || Command.is(candidate.command));
      }
      InlayHintLabelPart.is = is;
    })(InlayHintLabelPart || (exports3.InlayHintLabelPart = InlayHintLabelPart = {}));
    var InlayHint;
    (function(InlayHint) {
      function create(position, label, kind) {
        var result = { position, label };
        if (kind !== undefined) {
          result.kind = kind;
        }
        return result;
      }
      InlayHint.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === undefined || InlayHintKind.is(candidate.kind)) && candidate.textEdits === undefined || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === undefined || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === undefined || Is.boolean(candidate.paddingRight));
      }
      InlayHint.is = is;
    })(InlayHint || (exports3.InlayHint = InlayHint = {}));
    var StringValue;
    (function(StringValue) {
      function createSnippet(value) {
        return { kind: "snippet", value };
      }
      StringValue.createSnippet = createSnippet;
    })(StringValue || (exports3.StringValue = StringValue = {}));
    var InlineCompletionItem;
    (function(InlineCompletionItem) {
      function create(insertText, filterText, range, command) {
        return { insertText, filterText, range, command };
      }
      InlineCompletionItem.create = create;
    })(InlineCompletionItem || (exports3.InlineCompletionItem = InlineCompletionItem = {}));
    var InlineCompletionList;
    (function(InlineCompletionList) {
      function create(items) {
        return { items };
      }
      InlineCompletionList.create = create;
    })(InlineCompletionList || (exports3.InlineCompletionList = InlineCompletionList = {}));
    var InlineCompletionTriggerKind;
    (function(InlineCompletionTriggerKind) {
      InlineCompletionTriggerKind.Invoked = 0;
      InlineCompletionTriggerKind.Automatic = 1;
    })(InlineCompletionTriggerKind || (exports3.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
    var SelectedCompletionInfo;
    (function(SelectedCompletionInfo) {
      function create(range, text) {
        return { range, text };
      }
      SelectedCompletionInfo.create = create;
    })(SelectedCompletionInfo || (exports3.SelectedCompletionInfo = SelectedCompletionInfo = {}));
    var InlineCompletionContext;
    (function(InlineCompletionContext) {
      function create(triggerKind, selectedCompletionInfo) {
        return { triggerKind, selectedCompletionInfo };
      }
      InlineCompletionContext.create = create;
    })(InlineCompletionContext || (exports3.InlineCompletionContext = InlineCompletionContext = {}));
    var WorkspaceFolder;
    (function(WorkspaceFolder) {
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
      }
      WorkspaceFolder.is = is;
    })(WorkspaceFolder || (exports3.WorkspaceFolder = WorkspaceFolder = {}));
    exports3.EOL = [`
`, `\r
`, "\r"];
    var TextDocument;
    (function(TextDocument) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
      }
      TextDocument.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
      }
      TextDocument.is = is;
      function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function(a, b) {
          var diff = a.range.start.line - b.range.start.line;
          if (diff === 0) {
            return a.range.start.character - b.range.start.character;
          }
          return diff;
        });
        var lastModifiedOffset = text.length;
        for (var i = sortedEdits.length - 1;i >= 0; i--) {
          var e = sortedEdits[i];
          var startOffset = document.offsetAt(e.range.start);
          var endOffset = document.offsetAt(e.range.end);
          if (endOffset <= lastModifiedOffset) {
            text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
          } else {
            throw new Error("Overlapping edit");
          }
          lastModifiedOffset = startOffset;
        }
        return text;
      }
      TextDocument.applyEdits = applyEdits;
      function mergeSort(data, compare) {
        if (data.length <= 1) {
          return data;
        }
        var p = data.length / 2 | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
          var ret = compare(left[leftIdx], right[rightIdx]);
          if (ret <= 0) {
            data[i++] = left[leftIdx++];
          } else {
            data[i++] = right[rightIdx++];
          }
        }
        while (leftIdx < left.length) {
          data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
          data[i++] = right[rightIdx++];
        }
        return data;
      }
    })(TextDocument || (exports3.TextDocument = TextDocument = {}));
    var FullTextDocument = function() {
      function FullTextDocument(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = undefined;
      }
      Object.defineProperty(FullTextDocument.prototype, "uri", {
        get: function() {
          return this._uri;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FullTextDocument.prototype, "languageId", {
        get: function() {
          return this._languageId;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FullTextDocument.prototype, "version", {
        get: function() {
          return this._version;
        },
        enumerable: false,
        configurable: true
      });
      FullTextDocument.prototype.getText = function(range) {
        if (range) {
          var start = this.offsetAt(range.start);
          var end = this.offsetAt(range.end);
          return this._content.substring(start, end);
        }
        return this._content;
      };
      FullTextDocument.prototype.update = function(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = undefined;
      };
      FullTextDocument.prototype.getLineOffsets = function() {
        if (this._lineOffsets === undefined) {
          var lineOffsets = [];
          var text = this._content;
          var isLineStart = true;
          for (var i = 0;i < text.length; i++) {
            if (isLineStart) {
              lineOffsets.push(i);
              isLineStart = false;
            }
            var ch = text.charAt(i);
            isLineStart = ch === "\r" || ch === `
`;
            if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === `
`) {
              i++;
            }
          }
          if (isLineStart && text.length > 0) {
            lineOffsets.push(text.length);
          }
          this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
      };
      FullTextDocument.prototype.positionAt = function(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
          return Position.create(0, offset);
        }
        while (low < high) {
          var mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        var line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
      };
      FullTextDocument.prototype.offsetAt = function(position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
      };
      Object.defineProperty(FullTextDocument.prototype, "lineCount", {
        get: function() {
          return this.getLineOffsets().length;
        },
        enumerable: false,
        configurable: true
      });
      return FullTextDocument;
    }();
    var Is;
    (function(Is) {
      var toString = Object.prototype.toString;
      function defined(value) {
        return typeof value !== "undefined";
      }
      Is.defined = defined;
      function undefined2(value) {
        return typeof value === "undefined";
      }
      Is.undefined = undefined2;
      function boolean(value) {
        return value === true || value === false;
      }
      Is.boolean = boolean;
      function string(value) {
        return toString.call(value) === "[object String]";
      }
      Is.string = string;
      function number(value) {
        return toString.call(value) === "[object Number]";
      }
      Is.number = number;
      function numberRange(value, min, max) {
        return toString.call(value) === "[object Number]" && min <= value && value <= max;
      }
      Is.numberRange = numberRange;
      function integer(value) {
        return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
      }
      Is.integer = integer;
      function uinteger(value) {
        return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
      }
      Is.uinteger = uinteger;
      function func(value) {
        return toString.call(value) === "[object Function]";
      }
      Is.func = func;
      function objectLiteral(value) {
        return value !== null && typeof value === "object";
      }
      Is.objectLiteral = objectLiteral;
      function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
      }
      Is.typedArray = typedArray;
    })(Is || (Is = {}));
  });
});

// node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ProtocolNotificationType = exports2.ProtocolNotificationType0 = exports2.ProtocolRequestType = exports2.ProtocolRequestType0 = exports2.RegistrationType = exports2.MessageDirection = undefined;
  var vscode_jsonrpc_1 = require_main();
  var MessageDirection;
  (function(MessageDirection) {
    MessageDirection["clientToServer"] = "clientToServer";
    MessageDirection["serverToClient"] = "serverToClient";
    MessageDirection["both"] = "both";
  })(MessageDirection || (exports2.MessageDirection = MessageDirection = {}));

  class RegistrationType {
    constructor(method) {
      this.method = method;
    }
  }
  exports2.RegistrationType = RegistrationType;

  class ProtocolRequestType0 extends vscode_jsonrpc_1.RequestType0 {
    constructor(method) {
      super(method);
    }
  }
  exports2.ProtocolRequestType0 = ProtocolRequestType0;

  class ProtocolRequestType extends vscode_jsonrpc_1.RequestType {
    constructor(method) {
      super(method, vscode_jsonrpc_1.ParameterStructures.byName);
    }
  }
  exports2.ProtocolRequestType = ProtocolRequestType;

  class ProtocolNotificationType0 extends vscode_jsonrpc_1.NotificationType0 {
    constructor(method) {
      super(method);
    }
  }
  exports2.ProtocolNotificationType0 = ProtocolNotificationType0;

  class ProtocolNotificationType extends vscode_jsonrpc_1.NotificationType {
    constructor(method) {
      super(method, vscode_jsonrpc_1.ParameterStructures.byName);
    }
  }
  exports2.ProtocolNotificationType = ProtocolNotificationType;
});

// node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.objectLiteral = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = undefined;
  function boolean(value) {
    return value === true || value === false;
  }
  exports2.boolean = boolean;
  function string(value) {
    return typeof value === "string" || value instanceof String;
  }
  exports2.string = string;
  function number(value) {
    return typeof value === "number" || value instanceof Number;
  }
  exports2.number = number;
  function error(value) {
    return value instanceof Error;
  }
  exports2.error = error;
  function func(value) {
    return typeof value === "function";
  }
  exports2.func = func;
  function array(value) {
    return Array.isArray(value);
  }
  exports2.array = array;
  function stringArray(value) {
    return array(value) && value.every((elem) => string(elem));
  }
  exports2.stringArray = stringArray;
  function typedArray(value, check) {
    return Array.isArray(value) && value.every(check);
  }
  exports2.typedArray = typedArray;
  function objectLiteral(value) {
    return value !== null && typeof value === "object";
  }
  exports2.objectLiteral = objectLiteral;
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ImplementationRequest = undefined;
  var messages_1 = require_messages2();
  var ImplementationRequest;
  (function(ImplementationRequest) {
    ImplementationRequest.method = "textDocument/implementation";
    ImplementationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ImplementationRequest.type = new messages_1.ProtocolRequestType(ImplementationRequest.method);
  })(ImplementationRequest || (exports2.ImplementationRequest = ImplementationRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.TypeDefinitionRequest = undefined;
  var messages_1 = require_messages2();
  var TypeDefinitionRequest;
  (function(TypeDefinitionRequest) {
    TypeDefinitionRequest.method = "textDocument/typeDefinition";
    TypeDefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeDefinitionRequest.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest.method);
  })(TypeDefinitionRequest || (exports2.TypeDefinitionRequest = TypeDefinitionRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = undefined;
  var messages_1 = require_messages2();
  var WorkspaceFoldersRequest;
  (function(WorkspaceFoldersRequest) {
    WorkspaceFoldersRequest.method = "workspace/workspaceFolders";
    WorkspaceFoldersRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    WorkspaceFoldersRequest.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest.method);
  })(WorkspaceFoldersRequest || (exports2.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
  var DidChangeWorkspaceFoldersNotification;
  (function(DidChangeWorkspaceFoldersNotification) {
    DidChangeWorkspaceFoldersNotification.method = "workspace/didChangeWorkspaceFolders";
    DidChangeWorkspaceFoldersNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeWorkspaceFoldersNotification.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification.method);
  })(DidChangeWorkspaceFoldersNotification || (exports2.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ConfigurationRequest = undefined;
  var messages_1 = require_messages2();
  var ConfigurationRequest;
  (function(ConfigurationRequest) {
    ConfigurationRequest.method = "workspace/configuration";
    ConfigurationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ConfigurationRequest.type = new messages_1.ProtocolRequestType(ConfigurationRequest.method);
  })(ConfigurationRequest || (exports2.ConfigurationRequest = ConfigurationRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ColorPresentationRequest = exports2.DocumentColorRequest = undefined;
  var messages_1 = require_messages2();
  var DocumentColorRequest;
  (function(DocumentColorRequest) {
    DocumentColorRequest.method = "textDocument/documentColor";
    DocumentColorRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentColorRequest.type = new messages_1.ProtocolRequestType(DocumentColorRequest.method);
  })(DocumentColorRequest || (exports2.DocumentColorRequest = DocumentColorRequest = {}));
  var ColorPresentationRequest;
  (function(ColorPresentationRequest) {
    ColorPresentationRequest.method = "textDocument/colorPresentation";
    ColorPresentationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ColorPresentationRequest.type = new messages_1.ProtocolRequestType(ColorPresentationRequest.method);
  })(ColorPresentationRequest || (exports2.ColorPresentationRequest = ColorPresentationRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = undefined;
  var messages_1 = require_messages2();
  var FoldingRangeRequest;
  (function(FoldingRangeRequest) {
    FoldingRangeRequest.method = "textDocument/foldingRange";
    FoldingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    FoldingRangeRequest.type = new messages_1.ProtocolRequestType(FoldingRangeRequest.method);
  })(FoldingRangeRequest || (exports2.FoldingRangeRequest = FoldingRangeRequest = {}));
  var FoldingRangeRefreshRequest;
  (function(FoldingRangeRefreshRequest) {
    FoldingRangeRefreshRequest.method = `workspace/foldingRange/refresh`;
    FoldingRangeRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    FoldingRangeRefreshRequest.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest.method);
  })(FoldingRangeRefreshRequest || (exports2.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DeclarationRequest = undefined;
  var messages_1 = require_messages2();
  var DeclarationRequest;
  (function(DeclarationRequest) {
    DeclarationRequest.method = "textDocument/declaration";
    DeclarationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DeclarationRequest.type = new messages_1.ProtocolRequestType(DeclarationRequest.method);
  })(DeclarationRequest || (exports2.DeclarationRequest = DeclarationRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.SelectionRangeRequest = undefined;
  var messages_1 = require_messages2();
  var SelectionRangeRequest;
  (function(SelectionRangeRequest) {
    SelectionRangeRequest.method = "textDocument/selectionRange";
    SelectionRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SelectionRangeRequest.type = new messages_1.ProtocolRequestType(SelectionRangeRequest.method);
  })(SelectionRangeRequest || (exports2.SelectionRangeRequest = SelectionRangeRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = undefined;
  var vscode_jsonrpc_1 = require_main();
  var messages_1 = require_messages2();
  var WorkDoneProgress;
  (function(WorkDoneProgress) {
    WorkDoneProgress.type = new vscode_jsonrpc_1.ProgressType;
    function is(value) {
      return value === WorkDoneProgress.type;
    }
    WorkDoneProgress.is = is;
  })(WorkDoneProgress || (exports2.WorkDoneProgress = WorkDoneProgress = {}));
  var WorkDoneProgressCreateRequest;
  (function(WorkDoneProgressCreateRequest) {
    WorkDoneProgressCreateRequest.method = "window/workDoneProgress/create";
    WorkDoneProgressCreateRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    WorkDoneProgressCreateRequest.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest.method);
  })(WorkDoneProgressCreateRequest || (exports2.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
  var WorkDoneProgressCancelNotification;
  (function(WorkDoneProgressCancelNotification) {
    WorkDoneProgressCancelNotification.method = "window/workDoneProgress/cancel";
    WorkDoneProgressCancelNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkDoneProgressCancelNotification.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification.method);
  })(WorkDoneProgressCancelNotification || (exports2.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.CallHierarchyPrepareRequest = undefined;
  var messages_1 = require_messages2();
  var CallHierarchyPrepareRequest;
  (function(CallHierarchyPrepareRequest) {
    CallHierarchyPrepareRequest.method = "textDocument/prepareCallHierarchy";
    CallHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest.method);
  })(CallHierarchyPrepareRequest || (exports2.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
  var CallHierarchyIncomingCallsRequest;
  (function(CallHierarchyIncomingCallsRequest) {
    CallHierarchyIncomingCallsRequest.method = "callHierarchy/incomingCalls";
    CallHierarchyIncomingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyIncomingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest.method);
  })(CallHierarchyIncomingCallsRequest || (exports2.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
  var CallHierarchyOutgoingCallsRequest;
  (function(CallHierarchyOutgoingCallsRequest) {
    CallHierarchyOutgoingCallsRequest.method = "callHierarchy/outgoingCalls";
    CallHierarchyOutgoingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyOutgoingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest.method);
  })(CallHierarchyOutgoingCallsRequest || (exports2.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.SemanticTokensRegistrationType = exports2.TokenFormat = undefined;
  var messages_1 = require_messages2();
  var TokenFormat;
  (function(TokenFormat) {
    TokenFormat.Relative = "relative";
  })(TokenFormat || (exports2.TokenFormat = TokenFormat = {}));
  var SemanticTokensRegistrationType;
  (function(SemanticTokensRegistrationType) {
    SemanticTokensRegistrationType.method = "textDocument/semanticTokens";
    SemanticTokensRegistrationType.type = new messages_1.RegistrationType(SemanticTokensRegistrationType.method);
  })(SemanticTokensRegistrationType || (exports2.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
  var SemanticTokensRequest;
  (function(SemanticTokensRequest) {
    SemanticTokensRequest.method = "textDocument/semanticTokens/full";
    SemanticTokensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRequest.method);
    SemanticTokensRequest.registrationMethod = SemanticTokensRegistrationType.method;
  })(SemanticTokensRequest || (exports2.SemanticTokensRequest = SemanticTokensRequest = {}));
  var SemanticTokensDeltaRequest;
  (function(SemanticTokensDeltaRequest) {
    SemanticTokensDeltaRequest.method = "textDocument/semanticTokens/full/delta";
    SemanticTokensDeltaRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensDeltaRequest.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest.method);
    SemanticTokensDeltaRequest.registrationMethod = SemanticTokensRegistrationType.method;
  })(SemanticTokensDeltaRequest || (exports2.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
  var SemanticTokensRangeRequest;
  (function(SemanticTokensRangeRequest) {
    SemanticTokensRangeRequest.method = "textDocument/semanticTokens/range";
    SemanticTokensRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensRangeRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest.method);
    SemanticTokensRangeRequest.registrationMethod = SemanticTokensRegistrationType.method;
  })(SemanticTokensRangeRequest || (exports2.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
  var SemanticTokensRefreshRequest;
  (function(SemanticTokensRefreshRequest) {
    SemanticTokensRefreshRequest.method = `workspace/semanticTokens/refresh`;
    SemanticTokensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    SemanticTokensRefreshRequest.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest.method);
  })(SemanticTokensRefreshRequest || (exports2.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ShowDocumentRequest = undefined;
  var messages_1 = require_messages2();
  var ShowDocumentRequest;
  (function(ShowDocumentRequest) {
    ShowDocumentRequest.method = "window/showDocument";
    ShowDocumentRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowDocumentRequest.type = new messages_1.ProtocolRequestType(ShowDocumentRequest.method);
  })(ShowDocumentRequest || (exports2.ShowDocumentRequest = ShowDocumentRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.LinkedEditingRangeRequest = undefined;
  var messages_1 = require_messages2();
  var LinkedEditingRangeRequest;
  (function(LinkedEditingRangeRequest) {
    LinkedEditingRangeRequest.method = "textDocument/linkedEditingRange";
    LinkedEditingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    LinkedEditingRangeRequest.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest.method);
  })(LinkedEditingRangeRequest || (exports2.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.DidRenameFilesNotification = exports2.WillRenameFilesRequest = exports2.DidCreateFilesNotification = exports2.WillCreateFilesRequest = exports2.FileOperationPatternKind = undefined;
  var messages_1 = require_messages2();
  var FileOperationPatternKind;
  (function(FileOperationPatternKind) {
    FileOperationPatternKind.file = "file";
    FileOperationPatternKind.folder = "folder";
  })(FileOperationPatternKind || (exports2.FileOperationPatternKind = FileOperationPatternKind = {}));
  var WillCreateFilesRequest;
  (function(WillCreateFilesRequest) {
    WillCreateFilesRequest.method = "workspace/willCreateFiles";
    WillCreateFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillCreateFilesRequest.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest.method);
  })(WillCreateFilesRequest || (exports2.WillCreateFilesRequest = WillCreateFilesRequest = {}));
  var DidCreateFilesNotification;
  (function(DidCreateFilesNotification) {
    DidCreateFilesNotification.method = "workspace/didCreateFiles";
    DidCreateFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCreateFilesNotification.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification.method);
  })(DidCreateFilesNotification || (exports2.DidCreateFilesNotification = DidCreateFilesNotification = {}));
  var WillRenameFilesRequest;
  (function(WillRenameFilesRequest) {
    WillRenameFilesRequest.method = "workspace/willRenameFiles";
    WillRenameFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillRenameFilesRequest.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest.method);
  })(WillRenameFilesRequest || (exports2.WillRenameFilesRequest = WillRenameFilesRequest = {}));
  var DidRenameFilesNotification;
  (function(DidRenameFilesNotification) {
    DidRenameFilesNotification.method = "workspace/didRenameFiles";
    DidRenameFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidRenameFilesNotification.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification.method);
  })(DidRenameFilesNotification || (exports2.DidRenameFilesNotification = DidRenameFilesNotification = {}));
  var DidDeleteFilesNotification;
  (function(DidDeleteFilesNotification) {
    DidDeleteFilesNotification.method = "workspace/didDeleteFiles";
    DidDeleteFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidDeleteFilesNotification.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification.method);
  })(DidDeleteFilesNotification || (exports2.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
  var WillDeleteFilesRequest;
  (function(WillDeleteFilesRequest) {
    WillDeleteFilesRequest.method = "workspace/willDeleteFiles";
    WillDeleteFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillDeleteFilesRequest.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest.method);
  })(WillDeleteFilesRequest || (exports2.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = undefined;
  var messages_1 = require_messages2();
  var UniquenessLevel;
  (function(UniquenessLevel) {
    UniquenessLevel.document = "document";
    UniquenessLevel.project = "project";
    UniquenessLevel.group = "group";
    UniquenessLevel.scheme = "scheme";
    UniquenessLevel.global = "global";
  })(UniquenessLevel || (exports2.UniquenessLevel = UniquenessLevel = {}));
  var MonikerKind;
  (function(MonikerKind) {
    MonikerKind.$import = "import";
    MonikerKind.$export = "export";
    MonikerKind.local = "local";
  })(MonikerKind || (exports2.MonikerKind = MonikerKind = {}));
  var MonikerRequest;
  (function(MonikerRequest) {
    MonikerRequest.method = "textDocument/moniker";
    MonikerRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    MonikerRequest.type = new messages_1.ProtocolRequestType(MonikerRequest.method);
  })(MonikerRequest || (exports2.MonikerRequest = MonikerRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchyPrepareRequest = undefined;
  var messages_1 = require_messages2();
  var TypeHierarchyPrepareRequest;
  (function(TypeHierarchyPrepareRequest) {
    TypeHierarchyPrepareRequest.method = "textDocument/prepareTypeHierarchy";
    TypeHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest.method);
  })(TypeHierarchyPrepareRequest || (exports2.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
  var TypeHierarchySupertypesRequest;
  (function(TypeHierarchySupertypesRequest) {
    TypeHierarchySupertypesRequest.method = "typeHierarchy/supertypes";
    TypeHierarchySupertypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchySupertypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest.method);
  })(TypeHierarchySupertypesRequest || (exports2.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
  var TypeHierarchySubtypesRequest;
  (function(TypeHierarchySubtypesRequest) {
    TypeHierarchySubtypesRequest.method = "typeHierarchy/subtypes";
    TypeHierarchySubtypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchySubtypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest.method);
  })(TypeHierarchySubtypesRequest || (exports2.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = undefined;
  var messages_1 = require_messages2();
  var InlineValueRequest;
  (function(InlineValueRequest) {
    InlineValueRequest.method = "textDocument/inlineValue";
    InlineValueRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlineValueRequest.type = new messages_1.ProtocolRequestType(InlineValueRequest.method);
  })(InlineValueRequest || (exports2.InlineValueRequest = InlineValueRequest = {}));
  var InlineValueRefreshRequest;
  (function(InlineValueRefreshRequest) {
    InlineValueRefreshRequest.method = `workspace/inlineValue/refresh`;
    InlineValueRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    InlineValueRefreshRequest.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest.method);
  })(InlineValueRefreshRequest || (exports2.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = undefined;
  var messages_1 = require_messages2();
  var InlayHintRequest;
  (function(InlayHintRequest) {
    InlayHintRequest.method = "textDocument/inlayHint";
    InlayHintRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlayHintRequest.type = new messages_1.ProtocolRequestType(InlayHintRequest.method);
  })(InlayHintRequest || (exports2.InlayHintRequest = InlayHintRequest = {}));
  var InlayHintResolveRequest;
  (function(InlayHintResolveRequest) {
    InlayHintResolveRequest.method = "inlayHint/resolve";
    InlayHintResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlayHintResolveRequest.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest.method);
  })(InlayHintResolveRequest || (exports2.InlayHintResolveRequest = InlayHintResolveRequest = {}));
  var InlayHintRefreshRequest;
  (function(InlayHintRefreshRequest) {
    InlayHintRefreshRequest.method = `workspace/inlayHint/refresh`;
    InlayHintRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    InlayHintRefreshRequest.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest.method);
  })(InlayHintRefreshRequest || (exports2.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = undefined;
  var vscode_jsonrpc_1 = require_main();
  var Is = require_is3();
  var messages_1 = require_messages2();
  var DiagnosticServerCancellationData;
  (function(DiagnosticServerCancellationData) {
    function is(value) {
      const candidate = value;
      return candidate && Is.boolean(candidate.retriggerRequest);
    }
    DiagnosticServerCancellationData.is = is;
  })(DiagnosticServerCancellationData || (exports2.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
  var DocumentDiagnosticReportKind;
  (function(DocumentDiagnosticReportKind) {
    DocumentDiagnosticReportKind.Full = "full";
    DocumentDiagnosticReportKind.Unchanged = "unchanged";
  })(DocumentDiagnosticReportKind || (exports2.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
  var DocumentDiagnosticRequest;
  (function(DocumentDiagnosticRequest) {
    DocumentDiagnosticRequest.method = "textDocument/diagnostic";
    DocumentDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentDiagnosticRequest.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest.method);
    DocumentDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType;
  })(DocumentDiagnosticRequest || (exports2.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
  var WorkspaceDiagnosticRequest;
  (function(WorkspaceDiagnosticRequest) {
    WorkspaceDiagnosticRequest.method = "workspace/diagnostic";
    WorkspaceDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceDiagnosticRequest.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest.method);
    WorkspaceDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType;
  })(WorkspaceDiagnosticRequest || (exports2.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
  var DiagnosticRefreshRequest;
  (function(DiagnosticRefreshRequest) {
    DiagnosticRefreshRequest.method = `workspace/diagnostic/refresh`;
    DiagnosticRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    DiagnosticRefreshRequest.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest.method);
  })(DiagnosticRefreshRequest || (exports2.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = undefined;
  var vscode_languageserver_types_1 = require_main2();
  var Is = require_is3();
  var messages_1 = require_messages2();
  var NotebookCellKind;
  (function(NotebookCellKind) {
    NotebookCellKind.Markup = 1;
    NotebookCellKind.Code = 2;
    function is(value) {
      return value === 1 || value === 2;
    }
    NotebookCellKind.is = is;
  })(NotebookCellKind || (exports2.NotebookCellKind = NotebookCellKind = {}));
  var ExecutionSummary;
  (function(ExecutionSummary) {
    function create(executionOrder, success) {
      const result = { executionOrder };
      if (success === true || success === false) {
        result.success = success;
      }
      return result;
    }
    ExecutionSummary.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === undefined || Is.boolean(candidate.success));
    }
    ExecutionSummary.is = is;
    function equals(one, other) {
      if (one === other) {
        return true;
      }
      if (one === null || one === undefined || other === null || other === undefined) {
        return false;
      }
      return one.executionOrder === other.executionOrder && one.success === other.success;
    }
    ExecutionSummary.equals = equals;
  })(ExecutionSummary || (exports2.ExecutionSummary = ExecutionSummary = {}));
  var NotebookCell;
  (function(NotebookCell) {
    function create(kind, document) {
      return { kind, document };
    }
    NotebookCell.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === undefined || Is.objectLiteral(candidate.metadata));
    }
    NotebookCell.is = is;
    function diff(one, two) {
      const result = new Set;
      if (one.document !== two.document) {
        result.add("document");
      }
      if (one.kind !== two.kind) {
        result.add("kind");
      }
      if (one.executionSummary !== two.executionSummary) {
        result.add("executionSummary");
      }
      if ((one.metadata !== undefined || two.metadata !== undefined) && !equalsMetadata(one.metadata, two.metadata)) {
        result.add("metadata");
      }
      if ((one.executionSummary !== undefined || two.executionSummary !== undefined) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
        result.add("executionSummary");
      }
      return result;
    }
    NotebookCell.diff = diff;
    function equalsMetadata(one, other) {
      if (one === other) {
        return true;
      }
      if (one === null || one === undefined || other === null || other === undefined) {
        return false;
      }
      if (typeof one !== typeof other) {
        return false;
      }
      if (typeof one !== "object") {
        return false;
      }
      const oneArray = Array.isArray(one);
      const otherArray = Array.isArray(other);
      if (oneArray !== otherArray) {
        return false;
      }
      if (oneArray && otherArray) {
        if (one.length !== other.length) {
          return false;
        }
        for (let i = 0;i < one.length; i++) {
          if (!equalsMetadata(one[i], other[i])) {
            return false;
          }
        }
      }
      if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
        const oneKeys = Object.keys(one);
        const otherKeys = Object.keys(other);
        if (oneKeys.length !== otherKeys.length) {
          return false;
        }
        oneKeys.sort();
        otherKeys.sort();
        if (!equalsMetadata(oneKeys, otherKeys)) {
          return false;
        }
        for (let i = 0;i < oneKeys.length; i++) {
          const prop = oneKeys[i];
          if (!equalsMetadata(one[prop], other[prop])) {
            return false;
          }
        }
      }
      return true;
    }
  })(NotebookCell || (exports2.NotebookCell = NotebookCell = {}));
  var NotebookDocument;
  (function(NotebookDocument) {
    function create(uri, notebookType, version, cells) {
      return { uri, notebookType, version, cells };
    }
    NotebookDocument.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
    }
    NotebookDocument.is = is;
  })(NotebookDocument || (exports2.NotebookDocument = NotebookDocument = {}));
  var NotebookDocumentSyncRegistrationType;
  (function(NotebookDocumentSyncRegistrationType) {
    NotebookDocumentSyncRegistrationType.method = "notebookDocument/sync";
    NotebookDocumentSyncRegistrationType.messageDirection = messages_1.MessageDirection.clientToServer;
    NotebookDocumentSyncRegistrationType.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType.method);
  })(NotebookDocumentSyncRegistrationType || (exports2.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
  var DidOpenNotebookDocumentNotification;
  (function(DidOpenNotebookDocumentNotification) {
    DidOpenNotebookDocumentNotification.method = "notebookDocument/didOpen";
    DidOpenNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidOpenNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification.method);
    DidOpenNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
  })(DidOpenNotebookDocumentNotification || (exports2.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
  var NotebookCellArrayChange;
  (function(NotebookCellArrayChange) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === undefined || Is.typedArray(candidate.cells, NotebookCell.is));
    }
    NotebookCellArrayChange.is = is;
    function create(start, deleteCount, cells) {
      const result = { start, deleteCount };
      if (cells !== undefined) {
        result.cells = cells;
      }
      return result;
    }
    NotebookCellArrayChange.create = create;
  })(NotebookCellArrayChange || (exports2.NotebookCellArrayChange = NotebookCellArrayChange = {}));
  var DidChangeNotebookDocumentNotification;
  (function(DidChangeNotebookDocumentNotification) {
    DidChangeNotebookDocumentNotification.method = "notebookDocument/didChange";
    DidChangeNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification.method);
    DidChangeNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
  })(DidChangeNotebookDocumentNotification || (exports2.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
  var DidSaveNotebookDocumentNotification;
  (function(DidSaveNotebookDocumentNotification) {
    DidSaveNotebookDocumentNotification.method = "notebookDocument/didSave";
    DidSaveNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidSaveNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification.method);
    DidSaveNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
  })(DidSaveNotebookDocumentNotification || (exports2.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
  var DidCloseNotebookDocumentNotification;
  (function(DidCloseNotebookDocumentNotification) {
    DidCloseNotebookDocumentNotification.method = "notebookDocument/didClose";
    DidCloseNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCloseNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification.method);
    DidCloseNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
  })(DidCloseNotebookDocumentNotification || (exports2.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.InlineCompletionRequest = undefined;
  var messages_1 = require_messages2();
  var InlineCompletionRequest;
  (function(InlineCompletionRequest) {
    InlineCompletionRequest.method = "textDocument/inlineCompletion";
    InlineCompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlineCompletionRequest.type = new messages_1.ProtocolRequestType(InlineCompletionRequest.method);
  })(InlineCompletionRequest || (exports2.InlineCompletionRequest = InlineCompletionRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WorkspaceSymbolRequest = exports2.CodeActionResolveRequest = exports2.CodeActionRequest = exports2.DocumentSymbolRequest = exports2.DocumentHighlightRequest = exports2.ReferencesRequest = exports2.DefinitionRequest = exports2.SignatureHelpRequest = exports2.SignatureHelpTriggerKind = exports2.HoverRequest = exports2.CompletionResolveRequest = exports2.CompletionRequest = exports2.CompletionTriggerKind = exports2.PublishDiagnosticsNotification = exports2.WatchKind = exports2.RelativePattern = exports2.FileChangeType = exports2.DidChangeWatchedFilesNotification = exports2.WillSaveTextDocumentWaitUntilRequest = exports2.WillSaveTextDocumentNotification = exports2.TextDocumentSaveReason = exports2.DidSaveTextDocumentNotification = exports2.DidCloseTextDocumentNotification = exports2.DidChangeTextDocumentNotification = exports2.TextDocumentContentChangeEvent = exports2.DidOpenTextDocumentNotification = exports2.TextDocumentSyncKind = exports2.TelemetryEventNotification = exports2.LogMessageNotification = exports2.ShowMessageRequest = exports2.ShowMessageNotification = exports2.MessageType = exports2.DidChangeConfigurationNotification = exports2.ExitNotification = exports2.ShutdownRequest = exports2.InitializedNotification = exports2.InitializeErrorCodes = exports2.InitializeRequest = exports2.WorkDoneProgressOptions = exports2.TextDocumentRegistrationOptions = exports2.StaticRegistrationOptions = exports2.PositionEncodingKind = exports2.FailureHandlingKind = exports2.ResourceOperationKind = exports2.UnregistrationRequest = exports2.RegistrationRequest = exports2.DocumentSelector = exports2.NotebookCellTextDocumentFilter = exports2.NotebookDocumentFilter = exports2.TextDocumentFilter = undefined;
  exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.WillRenameFilesRequest = exports2.DidRenameFilesNotification = exports2.WillCreateFilesRequest = exports2.DidCreateFilesNotification = exports2.FileOperationPatternKind = exports2.LinkedEditingRangeRequest = exports2.ShowDocumentRequest = exports2.SemanticTokensRegistrationType = exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.TokenFormat = exports2.CallHierarchyPrepareRequest = exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = exports2.SelectionRangeRequest = exports2.DeclarationRequest = exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = exports2.ColorPresentationRequest = exports2.DocumentColorRequest = exports2.ConfigurationRequest = exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = exports2.TypeDefinitionRequest = exports2.ImplementationRequest = exports2.ApplyWorkspaceEditRequest = exports2.ExecuteCommandRequest = exports2.PrepareRenameRequest = exports2.RenameRequest = exports2.PrepareSupportDefaultBehavior = exports2.DocumentOnTypeFormattingRequest = exports2.DocumentRangesFormattingRequest = exports2.DocumentRangeFormattingRequest = exports2.DocumentFormattingRequest = exports2.DocumentLinkResolveRequest = exports2.DocumentLinkRequest = exports2.CodeLensRefreshRequest = exports2.CodeLensResolveRequest = exports2.CodeLensRequest = exports2.WorkspaceSymbolResolveRequest = undefined;
  exports2.InlineCompletionRequest = exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchyPrepareRequest = undefined;
  var messages_1 = require_messages2();
  var vscode_languageserver_types_1 = require_main2();
  var Is = require_is3();
  var protocol_implementation_1 = require_protocol_implementation();
  Object.defineProperty(exports2, "ImplementationRequest", { enumerable: true, get: function() {
    return protocol_implementation_1.ImplementationRequest;
  } });
  var protocol_typeDefinition_1 = require_protocol_typeDefinition();
  Object.defineProperty(exports2, "TypeDefinitionRequest", { enumerable: true, get: function() {
    return protocol_typeDefinition_1.TypeDefinitionRequest;
  } });
  var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
  Object.defineProperty(exports2, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
    return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
  } });
  Object.defineProperty(exports2, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
    return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
  } });
  var protocol_configuration_1 = require_protocol_configuration();
  Object.defineProperty(exports2, "ConfigurationRequest", { enumerable: true, get: function() {
    return protocol_configuration_1.ConfigurationRequest;
  } });
  var protocol_colorProvider_1 = require_protocol_colorProvider();
  Object.defineProperty(exports2, "DocumentColorRequest", { enumerable: true, get: function() {
    return protocol_colorProvider_1.DocumentColorRequest;
  } });
  Object.defineProperty(exports2, "ColorPresentationRequest", { enumerable: true, get: function() {
    return protocol_colorProvider_1.ColorPresentationRequest;
  } });
  var protocol_foldingRange_1 = require_protocol_foldingRange();
  Object.defineProperty(exports2, "FoldingRangeRequest", { enumerable: true, get: function() {
    return protocol_foldingRange_1.FoldingRangeRequest;
  } });
  Object.defineProperty(exports2, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
    return protocol_foldingRange_1.FoldingRangeRefreshRequest;
  } });
  var protocol_declaration_1 = require_protocol_declaration();
  Object.defineProperty(exports2, "DeclarationRequest", { enumerable: true, get: function() {
    return protocol_declaration_1.DeclarationRequest;
  } });
  var protocol_selectionRange_1 = require_protocol_selectionRange();
  Object.defineProperty(exports2, "SelectionRangeRequest", { enumerable: true, get: function() {
    return protocol_selectionRange_1.SelectionRangeRequest;
  } });
  var protocol_progress_1 = require_protocol_progress();
  Object.defineProperty(exports2, "WorkDoneProgress", { enumerable: true, get: function() {
    return protocol_progress_1.WorkDoneProgress;
  } });
  Object.defineProperty(exports2, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
    return protocol_progress_1.WorkDoneProgressCreateRequest;
  } });
  Object.defineProperty(exports2, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
    return protocol_progress_1.WorkDoneProgressCancelNotification;
  } });
  var protocol_callHierarchy_1 = require_protocol_callHierarchy();
  Object.defineProperty(exports2, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
    return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
  } });
  Object.defineProperty(exports2, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
    return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
  } });
  Object.defineProperty(exports2, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
    return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
  } });
  var protocol_semanticTokens_1 = require_protocol_semanticTokens();
  Object.defineProperty(exports2, "TokenFormat", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.TokenFormat;
  } });
  Object.defineProperty(exports2, "SemanticTokensRequest", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensRequest;
  } });
  Object.defineProperty(exports2, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
  } });
  Object.defineProperty(exports2, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensRangeRequest;
  } });
  Object.defineProperty(exports2, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
  } });
  Object.defineProperty(exports2, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
    return protocol_semanticTokens_1.SemanticTokensRegistrationType;
  } });
  var protocol_showDocument_1 = require_protocol_showDocument();
  Object.defineProperty(exports2, "ShowDocumentRequest", { enumerable: true, get: function() {
    return protocol_showDocument_1.ShowDocumentRequest;
  } });
  var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
  Object.defineProperty(exports2, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
    return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
  } });
  var protocol_fileOperations_1 = require_protocol_fileOperations();
  Object.defineProperty(exports2, "FileOperationPatternKind", { enumerable: true, get: function() {
    return protocol_fileOperations_1.FileOperationPatternKind;
  } });
  Object.defineProperty(exports2, "DidCreateFilesNotification", { enumerable: true, get: function() {
    return protocol_fileOperations_1.DidCreateFilesNotification;
  } });
  Object.defineProperty(exports2, "WillCreateFilesRequest", { enumerable: true, get: function() {
    return protocol_fileOperations_1.WillCreateFilesRequest;
  } });
  Object.defineProperty(exports2, "DidRenameFilesNotification", { enumerable: true, get: function() {
    return protocol_fileOperations_1.DidRenameFilesNotification;
  } });
  Object.defineProperty(exports2, "WillRenameFilesRequest", { enumerable: true, get: function() {
    return protocol_fileOperations_1.WillRenameFilesRequest;
  } });
  Object.defineProperty(exports2, "DidDeleteFilesNotification", { enumerable: true, get: function() {
    return protocol_fileOperations_1.DidDeleteFilesNotification;
  } });
  Object.defineProperty(exports2, "WillDeleteFilesRequest", { enumerable: true, get: function() {
    return protocol_fileOperations_1.WillDeleteFilesRequest;
  } });
  var protocol_moniker_1 = require_protocol_moniker();
  Object.defineProperty(exports2, "UniquenessLevel", { enumerable: true, get: function() {
    return protocol_moniker_1.UniquenessLevel;
  } });
  Object.defineProperty(exports2, "MonikerKind", { enumerable: true, get: function() {
    return protocol_moniker_1.MonikerKind;
  } });
  Object.defineProperty(exports2, "MonikerRequest", { enumerable: true, get: function() {
    return protocol_moniker_1.MonikerRequest;
  } });
  var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
  Object.defineProperty(exports2, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
    return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
  } });
  Object.defineProperty(exports2, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
    return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
  } });
  Object.defineProperty(exports2, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
    return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
  } });
  var protocol_inlineValue_1 = require_protocol_inlineValue();
  Object.defineProperty(exports2, "InlineValueRequest", { enumerable: true, get: function() {
    return protocol_inlineValue_1.InlineValueRequest;
  } });
  Object.defineProperty(exports2, "InlineValueRefreshRequest", { enumerable: true, get: function() {
    return protocol_inlineValue_1.InlineValueRefreshRequest;
  } });
  var protocol_inlayHint_1 = require_protocol_inlayHint();
  Object.defineProperty(exports2, "InlayHintRequest", { enumerable: true, get: function() {
    return protocol_inlayHint_1.InlayHintRequest;
  } });
  Object.defineProperty(exports2, "InlayHintResolveRequest", { enumerable: true, get: function() {
    return protocol_inlayHint_1.InlayHintResolveRequest;
  } });
  Object.defineProperty(exports2, "InlayHintRefreshRequest", { enumerable: true, get: function() {
    return protocol_inlayHint_1.InlayHintRefreshRequest;
  } });
  var protocol_diagnostic_1 = require_protocol_diagnostic();
  Object.defineProperty(exports2, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
    return protocol_diagnostic_1.DiagnosticServerCancellationData;
  } });
  Object.defineProperty(exports2, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
    return protocol_diagnostic_1.DocumentDiagnosticReportKind;
  } });
  Object.defineProperty(exports2, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
    return protocol_diagnostic_1.DocumentDiagnosticRequest;
  } });
  Object.defineProperty(exports2, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
    return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
  } });
  Object.defineProperty(exports2, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
    return protocol_diagnostic_1.DiagnosticRefreshRequest;
  } });
  var protocol_notebook_1 = require_protocol_notebook();
  Object.defineProperty(exports2, "NotebookCellKind", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookCellKind;
  } });
  Object.defineProperty(exports2, "ExecutionSummary", { enumerable: true, get: function() {
    return protocol_notebook_1.ExecutionSummary;
  } });
  Object.defineProperty(exports2, "NotebookCell", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookCell;
  } });
  Object.defineProperty(exports2, "NotebookDocument", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookDocument;
  } });
  Object.defineProperty(exports2, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
  } });
  Object.defineProperty(exports2, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
    return protocol_notebook_1.DidOpenNotebookDocumentNotification;
  } });
  Object.defineProperty(exports2, "NotebookCellArrayChange", { enumerable: true, get: function() {
    return protocol_notebook_1.NotebookCellArrayChange;
  } });
  Object.defineProperty(exports2, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
    return protocol_notebook_1.DidChangeNotebookDocumentNotification;
  } });
  Object.defineProperty(exports2, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
    return protocol_notebook_1.DidSaveNotebookDocumentNotification;
  } });
  Object.defineProperty(exports2, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
    return protocol_notebook_1.DidCloseNotebookDocumentNotification;
  } });
  var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
  Object.defineProperty(exports2, "InlineCompletionRequest", { enumerable: true, get: function() {
    return protocol_inlineCompletion_1.InlineCompletionRequest;
  } });
  var TextDocumentFilter;
  (function(TextDocumentFilter) {
    function is(value) {
      const candidate = value;
      return Is.string(candidate) || (Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
    }
    TextDocumentFilter.is = is;
  })(TextDocumentFilter || (exports2.TextDocumentFilter = TextDocumentFilter = {}));
  var NotebookDocumentFilter;
  (function(NotebookDocumentFilter) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
    }
    NotebookDocumentFilter.is = is;
  })(NotebookDocumentFilter || (exports2.NotebookDocumentFilter = NotebookDocumentFilter = {}));
  var NotebookCellTextDocumentFilter;
  (function(NotebookCellTextDocumentFilter) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === undefined || Is.string(candidate.language));
    }
    NotebookCellTextDocumentFilter.is = is;
  })(NotebookCellTextDocumentFilter || (exports2.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
  var DocumentSelector;
  (function(DocumentSelector) {
    function is(value) {
      if (!Array.isArray(value)) {
        return false;
      }
      for (let elem of value) {
        if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
          return false;
        }
      }
      return true;
    }
    DocumentSelector.is = is;
  })(DocumentSelector || (exports2.DocumentSelector = DocumentSelector = {}));
  var RegistrationRequest;
  (function(RegistrationRequest) {
    RegistrationRequest.method = "client/registerCapability";
    RegistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    RegistrationRequest.type = new messages_1.ProtocolRequestType(RegistrationRequest.method);
  })(RegistrationRequest || (exports2.RegistrationRequest = RegistrationRequest = {}));
  var UnregistrationRequest;
  (function(UnregistrationRequest) {
    UnregistrationRequest.method = "client/unregisterCapability";
    UnregistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    UnregistrationRequest.type = new messages_1.ProtocolRequestType(UnregistrationRequest.method);
  })(UnregistrationRequest || (exports2.UnregistrationRequest = UnregistrationRequest = {}));
  var ResourceOperationKind;
  (function(ResourceOperationKind) {
    ResourceOperationKind.Create = "create";
    ResourceOperationKind.Rename = "rename";
    ResourceOperationKind.Delete = "delete";
  })(ResourceOperationKind || (exports2.ResourceOperationKind = ResourceOperationKind = {}));
  var FailureHandlingKind;
  (function(FailureHandlingKind) {
    FailureHandlingKind.Abort = "abort";
    FailureHandlingKind.Transactional = "transactional";
    FailureHandlingKind.TextOnlyTransactional = "textOnlyTransactional";
    FailureHandlingKind.Undo = "undo";
  })(FailureHandlingKind || (exports2.FailureHandlingKind = FailureHandlingKind = {}));
  var PositionEncodingKind;
  (function(PositionEncodingKind) {
    PositionEncodingKind.UTF8 = "utf-8";
    PositionEncodingKind.UTF16 = "utf-16";
    PositionEncodingKind.UTF32 = "utf-32";
  })(PositionEncodingKind || (exports2.PositionEncodingKind = PositionEncodingKind = {}));
  var StaticRegistrationOptions;
  (function(StaticRegistrationOptions) {
    function hasId(value) {
      const candidate = value;
      return candidate && Is.string(candidate.id) && candidate.id.length > 0;
    }
    StaticRegistrationOptions.hasId = hasId;
  })(StaticRegistrationOptions || (exports2.StaticRegistrationOptions = StaticRegistrationOptions = {}));
  var TextDocumentRegistrationOptions;
  (function(TextDocumentRegistrationOptions) {
    function is(value) {
      const candidate = value;
      return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
    }
    TextDocumentRegistrationOptions.is = is;
  })(TextDocumentRegistrationOptions || (exports2.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
  var WorkDoneProgressOptions;
  (function(WorkDoneProgressOptions) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && (candidate.workDoneProgress === undefined || Is.boolean(candidate.workDoneProgress));
    }
    WorkDoneProgressOptions.is = is;
    function hasWorkDoneProgress(value) {
      const candidate = value;
      return candidate && Is.boolean(candidate.workDoneProgress);
    }
    WorkDoneProgressOptions.hasWorkDoneProgress = hasWorkDoneProgress;
  })(WorkDoneProgressOptions || (exports2.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
  var InitializeRequest;
  (function(InitializeRequest) {
    InitializeRequest.method = "initialize";
    InitializeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InitializeRequest.type = new messages_1.ProtocolRequestType(InitializeRequest.method);
  })(InitializeRequest || (exports2.InitializeRequest = InitializeRequest = {}));
  var InitializeErrorCodes;
  (function(InitializeErrorCodes) {
    InitializeErrorCodes.unknownProtocolVersion = 1;
  })(InitializeErrorCodes || (exports2.InitializeErrorCodes = InitializeErrorCodes = {}));
  var InitializedNotification;
  (function(InitializedNotification) {
    InitializedNotification.method = "initialized";
    InitializedNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    InitializedNotification.type = new messages_1.ProtocolNotificationType(InitializedNotification.method);
  })(InitializedNotification || (exports2.InitializedNotification = InitializedNotification = {}));
  var ShutdownRequest;
  (function(ShutdownRequest) {
    ShutdownRequest.method = "shutdown";
    ShutdownRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ShutdownRequest.type = new messages_1.ProtocolRequestType0(ShutdownRequest.method);
  })(ShutdownRequest || (exports2.ShutdownRequest = ShutdownRequest = {}));
  var ExitNotification;
  (function(ExitNotification) {
    ExitNotification.method = "exit";
    ExitNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    ExitNotification.type = new messages_1.ProtocolNotificationType0(ExitNotification.method);
  })(ExitNotification || (exports2.ExitNotification = ExitNotification = {}));
  var DidChangeConfigurationNotification;
  (function(DidChangeConfigurationNotification) {
    DidChangeConfigurationNotification.method = "workspace/didChangeConfiguration";
    DidChangeConfigurationNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeConfigurationNotification.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification.method);
  })(DidChangeConfigurationNotification || (exports2.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
  var MessageType;
  (function(MessageType) {
    MessageType.Error = 1;
    MessageType.Warning = 2;
    MessageType.Info = 3;
    MessageType.Log = 4;
    MessageType.Debug = 5;
  })(MessageType || (exports2.MessageType = MessageType = {}));
  var ShowMessageNotification;
  (function(ShowMessageNotification) {
    ShowMessageNotification.method = "window/showMessage";
    ShowMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowMessageNotification.type = new messages_1.ProtocolNotificationType(ShowMessageNotification.method);
  })(ShowMessageNotification || (exports2.ShowMessageNotification = ShowMessageNotification = {}));
  var ShowMessageRequest;
  (function(ShowMessageRequest) {
    ShowMessageRequest.method = "window/showMessageRequest";
    ShowMessageRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowMessageRequest.type = new messages_1.ProtocolRequestType(ShowMessageRequest.method);
  })(ShowMessageRequest || (exports2.ShowMessageRequest = ShowMessageRequest = {}));
  var LogMessageNotification;
  (function(LogMessageNotification) {
    LogMessageNotification.method = "window/logMessage";
    LogMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    LogMessageNotification.type = new messages_1.ProtocolNotificationType(LogMessageNotification.method);
  })(LogMessageNotification || (exports2.LogMessageNotification = LogMessageNotification = {}));
  var TelemetryEventNotification;
  (function(TelemetryEventNotification) {
    TelemetryEventNotification.method = "telemetry/event";
    TelemetryEventNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    TelemetryEventNotification.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification.method);
  })(TelemetryEventNotification || (exports2.TelemetryEventNotification = TelemetryEventNotification = {}));
  var TextDocumentSyncKind;
  (function(TextDocumentSyncKind) {
    TextDocumentSyncKind.None = 0;
    TextDocumentSyncKind.Full = 1;
    TextDocumentSyncKind.Incremental = 2;
  })(TextDocumentSyncKind || (exports2.TextDocumentSyncKind = TextDocumentSyncKind = {}));
  var DidOpenTextDocumentNotification;
  (function(DidOpenTextDocumentNotification) {
    DidOpenTextDocumentNotification.method = "textDocument/didOpen";
    DidOpenTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidOpenTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification.method);
  })(DidOpenTextDocumentNotification || (exports2.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
  var TextDocumentContentChangeEvent;
  (function(TextDocumentContentChangeEvent) {
    function isIncremental(event) {
      let candidate = event;
      return candidate !== undefined && candidate !== null && typeof candidate.text === "string" && candidate.range !== undefined && (candidate.rangeLength === undefined || typeof candidate.rangeLength === "number");
    }
    TextDocumentContentChangeEvent.isIncremental = isIncremental;
    function isFull(event) {
      let candidate = event;
      return candidate !== undefined && candidate !== null && typeof candidate.text === "string" && candidate.range === undefined && candidate.rangeLength === undefined;
    }
    TextDocumentContentChangeEvent.isFull = isFull;
  })(TextDocumentContentChangeEvent || (exports2.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
  var DidChangeTextDocumentNotification;
  (function(DidChangeTextDocumentNotification) {
    DidChangeTextDocumentNotification.method = "textDocument/didChange";
    DidChangeTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification.method);
  })(DidChangeTextDocumentNotification || (exports2.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
  var DidCloseTextDocumentNotification;
  (function(DidCloseTextDocumentNotification) {
    DidCloseTextDocumentNotification.method = "textDocument/didClose";
    DidCloseTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCloseTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification.method);
  })(DidCloseTextDocumentNotification || (exports2.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
  var DidSaveTextDocumentNotification;
  (function(DidSaveTextDocumentNotification) {
    DidSaveTextDocumentNotification.method = "textDocument/didSave";
    DidSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification.method);
  })(DidSaveTextDocumentNotification || (exports2.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
  var TextDocumentSaveReason;
  (function(TextDocumentSaveReason) {
    TextDocumentSaveReason.Manual = 1;
    TextDocumentSaveReason.AfterDelay = 2;
    TextDocumentSaveReason.FocusOut = 3;
  })(TextDocumentSaveReason || (exports2.TextDocumentSaveReason = TextDocumentSaveReason = {}));
  var WillSaveTextDocumentNotification;
  (function(WillSaveTextDocumentNotification) {
    WillSaveTextDocumentNotification.method = "textDocument/willSave";
    WillSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    WillSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification.method);
  })(WillSaveTextDocumentNotification || (exports2.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
  var WillSaveTextDocumentWaitUntilRequest;
  (function(WillSaveTextDocumentWaitUntilRequest) {
    WillSaveTextDocumentWaitUntilRequest.method = "textDocument/willSaveWaitUntil";
    WillSaveTextDocumentWaitUntilRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillSaveTextDocumentWaitUntilRequest.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest.method);
  })(WillSaveTextDocumentWaitUntilRequest || (exports2.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
  var DidChangeWatchedFilesNotification;
  (function(DidChangeWatchedFilesNotification) {
    DidChangeWatchedFilesNotification.method = "workspace/didChangeWatchedFiles";
    DidChangeWatchedFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeWatchedFilesNotification.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification.method);
  })(DidChangeWatchedFilesNotification || (exports2.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
  var FileChangeType;
  (function(FileChangeType) {
    FileChangeType.Created = 1;
    FileChangeType.Changed = 2;
    FileChangeType.Deleted = 3;
  })(FileChangeType || (exports2.FileChangeType = FileChangeType = {}));
  var RelativePattern;
  (function(RelativePattern) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
    }
    RelativePattern.is = is;
  })(RelativePattern || (exports2.RelativePattern = RelativePattern = {}));
  var WatchKind;
  (function(WatchKind) {
    WatchKind.Create = 1;
    WatchKind.Change = 2;
    WatchKind.Delete = 4;
  })(WatchKind || (exports2.WatchKind = WatchKind = {}));
  var PublishDiagnosticsNotification;
  (function(PublishDiagnosticsNotification) {
    PublishDiagnosticsNotification.method = "textDocument/publishDiagnostics";
    PublishDiagnosticsNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    PublishDiagnosticsNotification.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification.method);
  })(PublishDiagnosticsNotification || (exports2.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
  var CompletionTriggerKind;
  (function(CompletionTriggerKind) {
    CompletionTriggerKind.Invoked = 1;
    CompletionTriggerKind.TriggerCharacter = 2;
    CompletionTriggerKind.TriggerForIncompleteCompletions = 3;
  })(CompletionTriggerKind || (exports2.CompletionTriggerKind = CompletionTriggerKind = {}));
  var CompletionRequest;
  (function(CompletionRequest) {
    CompletionRequest.method = "textDocument/completion";
    CompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CompletionRequest.type = new messages_1.ProtocolRequestType(CompletionRequest.method);
  })(CompletionRequest || (exports2.CompletionRequest = CompletionRequest = {}));
  var CompletionResolveRequest;
  (function(CompletionResolveRequest) {
    CompletionResolveRequest.method = "completionItem/resolve";
    CompletionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CompletionResolveRequest.type = new messages_1.ProtocolRequestType(CompletionResolveRequest.method);
  })(CompletionResolveRequest || (exports2.CompletionResolveRequest = CompletionResolveRequest = {}));
  var HoverRequest;
  (function(HoverRequest) {
    HoverRequest.method = "textDocument/hover";
    HoverRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    HoverRequest.type = new messages_1.ProtocolRequestType(HoverRequest.method);
  })(HoverRequest || (exports2.HoverRequest = HoverRequest = {}));
  var SignatureHelpTriggerKind;
  (function(SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind.Invoked = 1;
    SignatureHelpTriggerKind.TriggerCharacter = 2;
    SignatureHelpTriggerKind.ContentChange = 3;
  })(SignatureHelpTriggerKind || (exports2.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
  var SignatureHelpRequest;
  (function(SignatureHelpRequest) {
    SignatureHelpRequest.method = "textDocument/signatureHelp";
    SignatureHelpRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SignatureHelpRequest.type = new messages_1.ProtocolRequestType(SignatureHelpRequest.method);
  })(SignatureHelpRequest || (exports2.SignatureHelpRequest = SignatureHelpRequest = {}));
  var DefinitionRequest;
  (function(DefinitionRequest) {
    DefinitionRequest.method = "textDocument/definition";
    DefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DefinitionRequest.type = new messages_1.ProtocolRequestType(DefinitionRequest.method);
  })(DefinitionRequest || (exports2.DefinitionRequest = DefinitionRequest = {}));
  var ReferencesRequest;
  (function(ReferencesRequest) {
    ReferencesRequest.method = "textDocument/references";
    ReferencesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ReferencesRequest.type = new messages_1.ProtocolRequestType(ReferencesRequest.method);
  })(ReferencesRequest || (exports2.ReferencesRequest = ReferencesRequest = {}));
  var DocumentHighlightRequest;
  (function(DocumentHighlightRequest) {
    DocumentHighlightRequest.method = "textDocument/documentHighlight";
    DocumentHighlightRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentHighlightRequest.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest.method);
  })(DocumentHighlightRequest || (exports2.DocumentHighlightRequest = DocumentHighlightRequest = {}));
  var DocumentSymbolRequest;
  (function(DocumentSymbolRequest) {
    DocumentSymbolRequest.method = "textDocument/documentSymbol";
    DocumentSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentSymbolRequest.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest.method);
  })(DocumentSymbolRequest || (exports2.DocumentSymbolRequest = DocumentSymbolRequest = {}));
  var CodeActionRequest;
  (function(CodeActionRequest) {
    CodeActionRequest.method = "textDocument/codeAction";
    CodeActionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeActionRequest.type = new messages_1.ProtocolRequestType(CodeActionRequest.method);
  })(CodeActionRequest || (exports2.CodeActionRequest = CodeActionRequest = {}));
  var CodeActionResolveRequest;
  (function(CodeActionResolveRequest) {
    CodeActionResolveRequest.method = "codeAction/resolve";
    CodeActionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeActionResolveRequest.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest.method);
  })(CodeActionResolveRequest || (exports2.CodeActionResolveRequest = CodeActionResolveRequest = {}));
  var WorkspaceSymbolRequest;
  (function(WorkspaceSymbolRequest) {
    WorkspaceSymbolRequest.method = "workspace/symbol";
    WorkspaceSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceSymbolRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest.method);
  })(WorkspaceSymbolRequest || (exports2.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
  var WorkspaceSymbolResolveRequest;
  (function(WorkspaceSymbolResolveRequest) {
    WorkspaceSymbolResolveRequest.method = "workspaceSymbol/resolve";
    WorkspaceSymbolResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceSymbolResolveRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest.method);
  })(WorkspaceSymbolResolveRequest || (exports2.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
  var CodeLensRequest;
  (function(CodeLensRequest) {
    CodeLensRequest.method = "textDocument/codeLens";
    CodeLensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeLensRequest.type = new messages_1.ProtocolRequestType(CodeLensRequest.method);
  })(CodeLensRequest || (exports2.CodeLensRequest = CodeLensRequest = {}));
  var CodeLensResolveRequest;
  (function(CodeLensResolveRequest) {
    CodeLensResolveRequest.method = "codeLens/resolve";
    CodeLensResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeLensResolveRequest.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest.method);
  })(CodeLensResolveRequest || (exports2.CodeLensResolveRequest = CodeLensResolveRequest = {}));
  var CodeLensRefreshRequest;
  (function(CodeLensRefreshRequest) {
    CodeLensRefreshRequest.method = `workspace/codeLens/refresh`;
    CodeLensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    CodeLensRefreshRequest.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest.method);
  })(CodeLensRefreshRequest || (exports2.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
  var DocumentLinkRequest;
  (function(DocumentLinkRequest) {
    DocumentLinkRequest.method = "textDocument/documentLink";
    DocumentLinkRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentLinkRequest.type = new messages_1.ProtocolRequestType(DocumentLinkRequest.method);
  })(DocumentLinkRequest || (exports2.DocumentLinkRequest = DocumentLinkRequest = {}));
  var DocumentLinkResolveRequest;
  (function(DocumentLinkResolveRequest) {
    DocumentLinkResolveRequest.method = "documentLink/resolve";
    DocumentLinkResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentLinkResolveRequest.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest.method);
  })(DocumentLinkResolveRequest || (exports2.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
  var DocumentFormattingRequest;
  (function(DocumentFormattingRequest) {
    DocumentFormattingRequest.method = "textDocument/formatting";
    DocumentFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest.method);
  })(DocumentFormattingRequest || (exports2.DocumentFormattingRequest = DocumentFormattingRequest = {}));
  var DocumentRangeFormattingRequest;
  (function(DocumentRangeFormattingRequest) {
    DocumentRangeFormattingRequest.method = "textDocument/rangeFormatting";
    DocumentRangeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentRangeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest.method);
  })(DocumentRangeFormattingRequest || (exports2.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
  var DocumentRangesFormattingRequest;
  (function(DocumentRangesFormattingRequest) {
    DocumentRangesFormattingRequest.method = "textDocument/rangesFormatting";
    DocumentRangesFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentRangesFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest.method);
  })(DocumentRangesFormattingRequest || (exports2.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
  var DocumentOnTypeFormattingRequest;
  (function(DocumentOnTypeFormattingRequest) {
    DocumentOnTypeFormattingRequest.method = "textDocument/onTypeFormatting";
    DocumentOnTypeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentOnTypeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest.method);
  })(DocumentOnTypeFormattingRequest || (exports2.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
  var PrepareSupportDefaultBehavior;
  (function(PrepareSupportDefaultBehavior) {
    PrepareSupportDefaultBehavior.Identifier = 1;
  })(PrepareSupportDefaultBehavior || (exports2.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
  var RenameRequest;
  (function(RenameRequest) {
    RenameRequest.method = "textDocument/rename";
    RenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    RenameRequest.type = new messages_1.ProtocolRequestType(RenameRequest.method);
  })(RenameRequest || (exports2.RenameRequest = RenameRequest = {}));
  var PrepareRenameRequest;
  (function(PrepareRenameRequest) {
    PrepareRenameRequest.method = "textDocument/prepareRename";
    PrepareRenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    PrepareRenameRequest.type = new messages_1.ProtocolRequestType(PrepareRenameRequest.method);
  })(PrepareRenameRequest || (exports2.PrepareRenameRequest = PrepareRenameRequest = {}));
  var ExecuteCommandRequest;
  (function(ExecuteCommandRequest) {
    ExecuteCommandRequest.method = "workspace/executeCommand";
    ExecuteCommandRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ExecuteCommandRequest.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest.method);
  })(ExecuteCommandRequest || (exports2.ExecuteCommandRequest = ExecuteCommandRequest = {}));
  var ApplyWorkspaceEditRequest;
  (function(ApplyWorkspaceEditRequest) {
    ApplyWorkspaceEditRequest.method = "workspace/applyEdit";
    ApplyWorkspaceEditRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ApplyWorkspaceEditRequest.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
  })(ApplyWorkspaceEditRequest || (exports2.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
});

// node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.createProtocolConnection = undefined;
  var vscode_jsonrpc_1 = require_main();
  function createProtocolConnection(input, output, logger, options) {
    if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
      options = { connectionStrategy: options };
    }
    return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
  }
  exports2.createProtocolConnection = createProtocolConnection;
});

// node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS(function(exports2) {
  var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.LSPErrorCodes = exports2.createProtocolConnection = undefined;
  __exportStar(require_main(), exports2);
  __exportStar(require_main2(), exports2);
  __exportStar(require_messages2(), exports2);
  __exportStar(require_protocol(), exports2);
  var connection_1 = require_connection2();
  Object.defineProperty(exports2, "createProtocolConnection", { enumerable: true, get: function() {
    return connection_1.createProtocolConnection;
  } });
  var LSPErrorCodes;
  (function(LSPErrorCodes) {
    LSPErrorCodes.lspReservedErrorRangeStart = -32899;
    LSPErrorCodes.RequestFailed = -32803;
    LSPErrorCodes.ServerCancelled = -32802;
    LSPErrorCodes.ContentModified = -32801;
    LSPErrorCodes.RequestCancelled = -32800;
    LSPErrorCodes.lspReservedErrorRangeEnd = -32800;
  })(LSPErrorCodes || (exports2.LSPErrorCodes = LSPErrorCodes = {}));
});

// node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main3 = __commonJS(function(exports2) {
  var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.createProtocolConnection = undefined;
  var node_1 = require_node();
  __exportStar(require_node(), exports2);
  __exportStar(require_api2(), exports2);
  function createProtocolConnection(input, output, logger, options) {
    return (0, node_1.createMessageConnection)(input, output, logger, options);
  }
  exports2.createProtocolConnection = createProtocolConnection;
});

// node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.generateUuid = exports2.parse = exports2.isUUID = exports2.v4 = exports2.empty = undefined;

  class ValueUUID {
    constructor(_value) {
      this._value = _value;
    }
    asHex() {
      return this._value;
    }
    equals(other) {
      return this.asHex() === other.asHex();
    }
  }

  class V4UUID extends ValueUUID {
    static _oneOf(array) {
      return array[Math.floor(array.length * Math.random())];
    }
    static _randomHex() {
      return V4UUID._oneOf(V4UUID._chars);
    }
    constructor() {
      super([
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        "-",
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        "-",
        "4",
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        "-",
        V4UUID._oneOf(V4UUID._timeHighBits),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        "-",
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex(),
        V4UUID._randomHex()
      ].join(""));
    }
  }
  V4UUID._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  V4UUID._timeHighBits = ["8", "9", "a", "b"];
  exports2.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
  function v4() {
    return new V4UUID;
  }
  exports2.v4 = v4;
  var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function isUUID(value) {
    return _UUIDPattern.test(value);
  }
  exports2.isUUID = isUUID;
  function parse(value) {
    if (!isUUID(value)) {
      throw new Error("invalid uuid");
    }
    return new ValueUUID(value);
  }
  exports2.parse = parse;
  function generateUuid() {
    return v4().asHex();
  }
  exports2.generateUuid = generateUuid;
});

// node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.attachPartialResult = exports2.ProgressFeature = exports2.attachWorkDone = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var uuid_1 = require_uuid();

  class WorkDoneProgressReporterImpl {
    constructor(_connection, _token) {
      this._connection = _connection;
      this._token = _token;
      WorkDoneProgressReporterImpl.Instances.set(this._token, this);
    }
    begin(title, percentage, message, cancellable) {
      let param = {
        kind: "begin",
        title,
        percentage,
        message,
        cancellable
      };
      this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
    }
    report(arg0, arg1) {
      let param = {
        kind: "report"
      };
      if (typeof arg0 === "number") {
        param.percentage = arg0;
        if (arg1 !== undefined) {
          param.message = arg1;
        }
      } else {
        param.message = arg0;
      }
      this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
    }
    done() {
      WorkDoneProgressReporterImpl.Instances.delete(this._token);
      this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
    }
  }
  WorkDoneProgressReporterImpl.Instances = new Map;

  class WorkDoneProgressServerReporterImpl extends WorkDoneProgressReporterImpl {
    constructor(connection, token) {
      super(connection, token);
      this._source = new vscode_languageserver_protocol_1.CancellationTokenSource;
    }
    get token() {
      return this._source.token;
    }
    done() {
      this._source.dispose();
      super.done();
    }
    cancel() {
      this._source.cancel();
    }
  }

  class NullProgressReporter {
    constructor() {}
    begin() {}
    report() {}
    done() {}
  }

  class NullProgressServerReporter extends NullProgressReporter {
    constructor() {
      super();
      this._source = new vscode_languageserver_protocol_1.CancellationTokenSource;
    }
    get token() {
      return this._source.token;
    }
    done() {
      this._source.dispose();
    }
    cancel() {
      this._source.cancel();
    }
  }
  function attachWorkDone(connection, params) {
    if (params === undefined || params.workDoneToken === undefined) {
      return new NullProgressReporter;
    }
    const token = params.workDoneToken;
    delete params.workDoneToken;
    return new WorkDoneProgressReporterImpl(connection, token);
  }
  exports2.attachWorkDone = attachWorkDone;
  var ProgressFeature = (Base) => {
    return class extends Base {
      constructor() {
        super();
        this._progressSupported = false;
      }
      initialize(capabilities) {
        super.initialize(capabilities);
        if (capabilities?.window?.workDoneProgress === true) {
          this._progressSupported = true;
          this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
            let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
            if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
              progress.cancel();
            }
          });
        }
      }
      attachWorkDoneProgress(token) {
        if (token === undefined) {
          return new NullProgressReporter;
        } else {
          return new WorkDoneProgressReporterImpl(this.connection, token);
        }
      }
      createWorkDoneProgress() {
        if (this._progressSupported) {
          const token = (0, uuid_1.generateUuid)();
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
            const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
            return result;
          });
        } else {
          return Promise.resolve(new NullProgressServerReporter);
        }
      }
    };
  };
  exports2.ProgressFeature = ProgressFeature;
  var ResultProgress;
  (function(ResultProgress) {
    ResultProgress.type = new vscode_languageserver_protocol_1.ProgressType;
  })(ResultProgress || (ResultProgress = {}));

  class ResultProgressReporterImpl {
    constructor(_connection, _token) {
      this._connection = _connection;
      this._token = _token;
    }
    report(data) {
      this._connection.sendProgress(ResultProgress.type, this._token, data);
    }
  }
  function attachPartialResult(connection, params) {
    if (params === undefined || params.partialResultToken === undefined) {
      return;
    }
    const token = params.partialResultToken;
    delete params.partialResultToken;
    return new ResultProgressReporterImpl(connection, token);
  }
  exports2.attachPartialResult = attachPartialResult;
});

// node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ConfigurationFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var Is = require_is();
  var ConfigurationFeature = (Base) => {
    return class extends Base {
      getConfiguration(arg) {
        if (!arg) {
          return this._getConfiguration({});
        } else if (Is.string(arg)) {
          return this._getConfiguration({ section: arg });
        } else {
          return this._getConfiguration(arg);
        }
      }
      _getConfiguration(arg) {
        let params = {
          items: Array.isArray(arg) ? arg : [arg]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
          if (Array.isArray(result)) {
            return Array.isArray(arg) ? result : result[0];
          } else {
            return Array.isArray(arg) ? [] : null;
          }
        });
      }
    };
  };
  exports2.ConfigurationFeature = ConfigurationFeature;
});

// node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.WorkspaceFoldersFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var WorkspaceFoldersFeature = (Base) => {
    return class extends Base {
      constructor() {
        super();
        this._notificationIsAutoRegistered = false;
      }
      initialize(capabilities) {
        super.initialize(capabilities);
        let workspaceCapabilities = capabilities.workspace;
        if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
          this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter;
          this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
            this._onDidChangeWorkspaceFolders.fire(params.event);
          });
        }
      }
      fillServerCapabilities(capabilities) {
        super.fillServerCapabilities(capabilities);
        const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
        this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
      }
      getWorkspaceFolders() {
        return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
      }
      get onDidChangeWorkspaceFolders() {
        if (!this._onDidChangeWorkspaceFolders) {
          throw new Error("Client doesn't support sending workspace folder change events.");
        }
        if (!this._notificationIsAutoRegistered && !this._unregistration) {
          this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
        }
        return this._onDidChangeWorkspaceFolders.event;
      }
    };
  };
  exports2.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
});

// node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CallHierarchyFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var CallHierarchyFeature = (Base) => {
    return class extends Base {
      get callHierarchy() {
        return {
          onPrepare: (handler) => {
            return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
            });
          },
          onIncomingCalls: (handler) => {
            const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          },
          onOutgoingCalls: (handler) => {
            const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          }
        };
      }
    };
  };
  exports2.CallHierarchyFeature = CallHierarchyFeature;
});

// node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.SemanticTokensBuilder = exports2.SemanticTokensDiff = exports2.SemanticTokensFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var SemanticTokensFeature = (Base) => {
    return class extends Base {
      get semanticTokens() {
        return {
          refresh: () => {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
          },
          on: (handler) => {
            const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          },
          onDelta: (handler) => {
            const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          },
          onRange: (handler) => {
            const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          }
        };
      }
    };
  };
  exports2.SemanticTokensFeature = SemanticTokensFeature;

  class SemanticTokensDiff {
    constructor(originalSequence, modifiedSequence) {
      this.originalSequence = originalSequence;
      this.modifiedSequence = modifiedSequence;
    }
    computeDiff() {
      const originalLength = this.originalSequence.length;
      const modifiedLength = this.modifiedSequence.length;
      let startIndex = 0;
      while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
        startIndex++;
      }
      if (startIndex < modifiedLength && startIndex < originalLength) {
        let originalEndIndex = originalLength - 1;
        let modifiedEndIndex = modifiedLength - 1;
        while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
          originalEndIndex--;
          modifiedEndIndex--;
        }
        if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
          originalEndIndex++;
          modifiedEndIndex++;
        }
        const deleteCount = originalEndIndex - startIndex + 1;
        const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
        if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
          return [
            { start: startIndex, deleteCount: deleteCount - 1 }
          ];
        } else {
          return [
            { start: startIndex, deleteCount, data: newData }
          ];
        }
      } else if (startIndex < modifiedLength) {
        return [
          { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
        ];
      } else if (startIndex < originalLength) {
        return [
          { start: startIndex, deleteCount: originalLength - startIndex }
        ];
      } else {
        return [];
      }
    }
  }
  exports2.SemanticTokensDiff = SemanticTokensDiff;

  class SemanticTokensBuilder {
    constructor() {
      this._prevData = undefined;
      this.initialize();
    }
    initialize() {
      this._id = Date.now();
      this._prevLine = 0;
      this._prevChar = 0;
      this._data = [];
      this._dataLen = 0;
    }
    push(line, char, length, tokenType, tokenModifiers) {
      let pushLine = line;
      let pushChar = char;
      if (this._dataLen > 0) {
        pushLine -= this._prevLine;
        if (pushLine === 0) {
          pushChar -= this._prevChar;
        }
      }
      this._data[this._dataLen++] = pushLine;
      this._data[this._dataLen++] = pushChar;
      this._data[this._dataLen++] = length;
      this._data[this._dataLen++] = tokenType;
      this._data[this._dataLen++] = tokenModifiers;
      this._prevLine = line;
      this._prevChar = char;
    }
    get id() {
      return this._id.toString();
    }
    previousResult(id) {
      if (this.id === id) {
        this._prevData = this._data;
      }
      this.initialize();
    }
    build() {
      this._prevData = undefined;
      return {
        resultId: this.id,
        data: this._data
      };
    }
    canBuildEdits() {
      return this._prevData !== undefined;
    }
    buildEdits() {
      if (this._prevData !== undefined) {
        return {
          resultId: this.id,
          edits: new SemanticTokensDiff(this._prevData, this._data).computeDiff()
        };
      } else {
        return this.build();
      }
    }
  }
  exports2.SemanticTokensBuilder = SemanticTokensBuilder;
});

// node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ShowDocumentFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var ShowDocumentFeature = (Base) => {
    return class extends Base {
      showDocument(params) {
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
      }
    };
  };
  exports2.ShowDocumentFeature = ShowDocumentFeature;
});

// node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.FileOperationsFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var FileOperationsFeature = (Base) => {
    return class extends Base {
      onDidCreateFiles(handler) {
        return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
          handler(params);
        });
      }
      onDidRenameFiles(handler) {
        return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
          handler(params);
        });
      }
      onDidDeleteFiles(handler) {
        return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
          handler(params);
        });
      }
      onWillCreateFiles(handler) {
        return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
          return handler(params, cancel);
        });
      }
      onWillRenameFiles(handler) {
        return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
          return handler(params, cancel);
        });
      }
      onWillDeleteFiles(handler) {
        return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
          return handler(params, cancel);
        });
      }
    };
  };
  exports2.FileOperationsFeature = FileOperationsFeature;
});

// node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.LinkedEditingRangeFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var LinkedEditingRangeFeature = (Base) => {
    return class extends Base {
      onLinkedEditingRange(handler) {
        return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
        });
      }
    };
  };
  exports2.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
});

// node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.TypeHierarchyFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var TypeHierarchyFeature = (Base) => {
    return class extends Base {
      get typeHierarchy() {
        return {
          onPrepare: (handler) => {
            return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
            });
          },
          onSupertypes: (handler) => {
            const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          },
          onSubtypes: (handler) => {
            const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          }
        };
      }
    };
  };
  exports2.TypeHierarchyFeature = TypeHierarchyFeature;
});

// node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.InlineValueFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var InlineValueFeature = (Base) => {
    return class extends Base {
      get inlineValue() {
        return {
          refresh: () => {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
          },
          on: (handler) => {
            return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params));
            });
          }
        };
      }
    };
  };
  exports2.InlineValueFeature = InlineValueFeature;
});

// node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.FoldingRangeFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var FoldingRangeFeature = (Base) => {
    return class extends Base {
      get foldingRange() {
        return {
          refresh: () => {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
          },
          on: (handler) => {
            const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          }
        };
      }
    };
  };
  exports2.FoldingRangeFeature = FoldingRangeFeature;
});

// node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.InlayHintFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var InlayHintFeature = (Base) => {
    return class extends Base {
      get inlayHint() {
        return {
          refresh: () => {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
          },
          on: (handler) => {
            return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params));
            });
          },
          resolve: (handler) => {
            return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
              return handler(params, cancel);
            });
          }
        };
      }
    };
  };
  exports2.InlayHintFeature = InlayHintFeature;
});

// node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DiagnosticFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var DiagnosticFeature = (Base) => {
    return class extends Base {
      get diagnostics() {
        return {
          refresh: () => {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
          },
          on: (handler) => {
            return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
            });
          },
          onWorkspace: (handler) => {
            return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
            });
          }
        };
      }
    };
  };
  exports2.DiagnosticFeature = DiagnosticFeature;
});

// node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.TextDocuments = undefined;
  var vscode_languageserver_protocol_1 = require_main3();

  class TextDocuments {
    constructor(configuration) {
      this._configuration = configuration;
      this._syncedDocuments = new Map;
      this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter;
      this._onDidOpen = new vscode_languageserver_protocol_1.Emitter;
      this._onDidClose = new vscode_languageserver_protocol_1.Emitter;
      this._onDidSave = new vscode_languageserver_protocol_1.Emitter;
      this._onWillSave = new vscode_languageserver_protocol_1.Emitter;
    }
    get onDidOpen() {
      return this._onDidOpen.event;
    }
    get onDidChangeContent() {
      return this._onDidChangeContent.event;
    }
    get onWillSave() {
      return this._onWillSave.event;
    }
    onWillSaveWaitUntil(handler) {
      this._willSaveWaitUntil = handler;
    }
    get onDidSave() {
      return this._onDidSave.event;
    }
    get onDidClose() {
      return this._onDidClose.event;
    }
    get(uri) {
      return this._syncedDocuments.get(uri);
    }
    all() {
      return Array.from(this._syncedDocuments.values());
    }
    keys() {
      return Array.from(this._syncedDocuments.keys());
    }
    listen(connection) {
      connection.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
      const disposables = [];
      disposables.push(connection.onDidOpenTextDocument((event) => {
        const td = event.textDocument;
        const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
        this._syncedDocuments.set(td.uri, document);
        const toFire = Object.freeze({ document });
        this._onDidOpen.fire(toFire);
        this._onDidChangeContent.fire(toFire);
      }));
      disposables.push(connection.onDidChangeTextDocument((event) => {
        const td = event.textDocument;
        const changes = event.contentChanges;
        if (changes.length === 0) {
          return;
        }
        const { version } = td;
        if (version === null || version === undefined) {
          throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
        }
        let syncedDocument = this._syncedDocuments.get(td.uri);
        if (syncedDocument !== undefined) {
          syncedDocument = this._configuration.update(syncedDocument, changes, version);
          this._syncedDocuments.set(td.uri, syncedDocument);
          this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
        }
      }));
      disposables.push(connection.onDidCloseTextDocument((event) => {
        let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
        if (syncedDocument !== undefined) {
          this._syncedDocuments.delete(event.textDocument.uri);
          this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
        }
      }));
      disposables.push(connection.onWillSaveTextDocument((event) => {
        let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
        if (syncedDocument !== undefined) {
          this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
        }
      }));
      disposables.push(connection.onWillSaveTextDocumentWaitUntil((event, token) => {
        let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
        if (syncedDocument !== undefined && this._willSaveWaitUntil) {
          return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
        } else {
          return [];
        }
      }));
      disposables.push(connection.onDidSaveTextDocument((event) => {
        let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
        if (syncedDocument !== undefined) {
          this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
        }
      }));
      return vscode_languageserver_protocol_1.Disposable.create(() => {
        disposables.forEach((disposable) => disposable.dispose());
      });
    }
  }
  exports2.TextDocuments = TextDocuments;
});

// node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.NotebookDocuments = exports2.NotebookSyncFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var textDocuments_1 = require_textDocuments();
  var NotebookSyncFeature = (Base) => {
    return class extends Base {
      get synchronization() {
        return {
          onDidOpenNotebookDocument: (handler) => {
            return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
              handler(params);
            });
          },
          onDidChangeNotebookDocument: (handler) => {
            return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
              handler(params);
            });
          },
          onDidSaveNotebookDocument: (handler) => {
            return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
              handler(params);
            });
          },
          onDidCloseNotebookDocument: (handler) => {
            return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
              handler(params);
            });
          }
        };
      }
    };
  };
  exports2.NotebookSyncFeature = NotebookSyncFeature;

  class CellTextDocumentConnection {
    onDidOpenTextDocument(handler) {
      this.openHandler = handler;
      return vscode_languageserver_protocol_1.Disposable.create(() => {
        this.openHandler = undefined;
      });
    }
    openTextDocument(params) {
      this.openHandler && this.openHandler(params);
    }
    onDidChangeTextDocument(handler) {
      this.changeHandler = handler;
      return vscode_languageserver_protocol_1.Disposable.create(() => {
        this.changeHandler = handler;
      });
    }
    changeTextDocument(params) {
      this.changeHandler && this.changeHandler(params);
    }
    onDidCloseTextDocument(handler) {
      this.closeHandler = handler;
      return vscode_languageserver_protocol_1.Disposable.create(() => {
        this.closeHandler = undefined;
      });
    }
    closeTextDocument(params) {
      this.closeHandler && this.closeHandler(params);
    }
    onWillSaveTextDocument() {
      return CellTextDocumentConnection.NULL_DISPOSE;
    }
    onWillSaveTextDocumentWaitUntil() {
      return CellTextDocumentConnection.NULL_DISPOSE;
    }
    onDidSaveTextDocument() {
      return CellTextDocumentConnection.NULL_DISPOSE;
    }
  }
  CellTextDocumentConnection.NULL_DISPOSE = Object.freeze({ dispose: () => {} });

  class NotebookDocuments {
    constructor(configurationOrTextDocuments) {
      if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
        this._cellTextDocuments = configurationOrTextDocuments;
      } else {
        this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
      }
      this.notebookDocuments = new Map;
      this.notebookCellMap = new Map;
      this._onDidOpen = new vscode_languageserver_protocol_1.Emitter;
      this._onDidChange = new vscode_languageserver_protocol_1.Emitter;
      this._onDidSave = new vscode_languageserver_protocol_1.Emitter;
      this._onDidClose = new vscode_languageserver_protocol_1.Emitter;
    }
    get cellTextDocuments() {
      return this._cellTextDocuments;
    }
    getCellTextDocument(cell) {
      return this._cellTextDocuments.get(cell.document);
    }
    getNotebookDocument(uri) {
      return this.notebookDocuments.get(uri);
    }
    getNotebookCell(uri) {
      const value = this.notebookCellMap.get(uri);
      return value && value[0];
    }
    findNotebookDocumentForCell(cell) {
      const key = typeof cell === "string" ? cell : cell.document;
      const value = this.notebookCellMap.get(key);
      return value && value[1];
    }
    get onDidOpen() {
      return this._onDidOpen.event;
    }
    get onDidSave() {
      return this._onDidSave.event;
    }
    get onDidChange() {
      return this._onDidChange.event;
    }
    get onDidClose() {
      return this._onDidClose.event;
    }
    listen(connection) {
      const cellTextDocumentConnection = new CellTextDocumentConnection;
      const disposables = [];
      disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
      disposables.push(connection.notebooks.synchronization.onDidOpenNotebookDocument((params) => {
        this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
        for (const cellTextDocument of params.cellTextDocuments) {
          cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
        }
        this.updateCellMap(params.notebookDocument);
        this._onDidOpen.fire(params.notebookDocument);
      }));
      disposables.push(connection.notebooks.synchronization.onDidChangeNotebookDocument((params) => {
        const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
        if (notebookDocument === undefined) {
          return;
        }
        notebookDocument.version = params.notebookDocument.version;
        const oldMetadata = notebookDocument.metadata;
        let metadataChanged = false;
        const change = params.change;
        if (change.metadata !== undefined) {
          metadataChanged = true;
          notebookDocument.metadata = change.metadata;
        }
        const opened = [];
        const closed = [];
        const data = [];
        const text = [];
        if (change.cells !== undefined) {
          const changedCells = change.cells;
          if (changedCells.structure !== undefined) {
            const array = changedCells.structure.array;
            notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== undefined ? array.cells : []);
            if (changedCells.structure.didOpen !== undefined) {
              for (const open of changedCells.structure.didOpen) {
                cellTextDocumentConnection.openTextDocument({ textDocument: open });
                opened.push(open.uri);
              }
            }
            if (changedCells.structure.didClose) {
              for (const close of changedCells.structure.didClose) {
                cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                closed.push(close.uri);
              }
            }
          }
          if (changedCells.data !== undefined) {
            const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
            for (let i = 0;i <= notebookDocument.cells.length; i++) {
              const change = cellUpdates.get(notebookDocument.cells[i].document);
              if (change !== undefined) {
                const old = notebookDocument.cells.splice(i, 1, change);
                data.push({ old: old[0], new: change });
                cellUpdates.delete(change.document);
                if (cellUpdates.size === 0) {
                  break;
                }
              }
            }
          }
          if (changedCells.textContent !== undefined) {
            for (const cellTextDocument of changedCells.textContent) {
              cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
              text.push(cellTextDocument.document.uri);
            }
          }
        }
        this.updateCellMap(notebookDocument);
        const changeEvent = { notebookDocument };
        if (metadataChanged) {
          changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
        }
        const added = [];
        for (const open of opened) {
          added.push(this.getNotebookCell(open));
        }
        const removed = [];
        for (const close of closed) {
          removed.push(this.getNotebookCell(close));
        }
        const textContent = [];
        for (const change of text) {
          textContent.push(this.getNotebookCell(change));
        }
        if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
          changeEvent.cells = { added, removed, changed: { data, textContent } };
        }
        if (changeEvent.metadata !== undefined || changeEvent.cells !== undefined) {
          this._onDidChange.fire(changeEvent);
        }
      }));
      disposables.push(connection.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
        const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
        if (notebookDocument === undefined) {
          return;
        }
        this._onDidSave.fire(notebookDocument);
      }));
      disposables.push(connection.notebooks.synchronization.onDidCloseNotebookDocument((params) => {
        const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
        if (notebookDocument === undefined) {
          return;
        }
        this._onDidClose.fire(notebookDocument);
        for (const cellTextDocument of params.cellTextDocuments) {
          cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
        }
        this.notebookDocuments.delete(params.notebookDocument.uri);
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.delete(cell.document);
        }
      }));
      return vscode_languageserver_protocol_1.Disposable.create(() => {
        disposables.forEach((disposable) => disposable.dispose());
      });
    }
    updateCellMap(notebookDocument) {
      for (const cell of notebookDocument.cells) {
        this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
      }
    }
  }
  exports2.NotebookDocuments = NotebookDocuments;
});

// node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.MonikerFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var MonikerFeature = (Base) => {
    return class extends Base {
      get moniker() {
        return {
          on: (handler) => {
            const type = vscode_languageserver_protocol_1.MonikerRequest.type;
            return this.connection.onRequest(type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
            });
          }
        };
      }
    };
  };
  exports2.MonikerFeature = MonikerFeature;
});

// node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.createConnection = exports2.combineFeatures = exports2.combineNotebooksFeatures = exports2.combineLanguagesFeatures = exports2.combineWorkspaceFeatures = exports2.combineWindowFeatures = exports2.combineClientFeatures = exports2.combineTracerFeatures = exports2.combineTelemetryFeatures = exports2.combineConsoleFeatures = exports2._NotebooksImpl = exports2._LanguagesImpl = exports2.BulkUnregistration = exports2.BulkRegistration = exports2.ErrorMessageTracker = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var Is = require_is();
  var UUID = require_uuid();
  var progress_1 = require_progress();
  var configuration_1 = require_configuration();
  var workspaceFolder_1 = require_workspaceFolder();
  var callHierarchy_1 = require_callHierarchy();
  var semanticTokens_1 = require_semanticTokens();
  var showDocument_1 = require_showDocument();
  var fileOperations_1 = require_fileOperations();
  var linkedEditingRange_1 = require_linkedEditingRange();
  var typeHierarchy_1 = require_typeHierarchy();
  var inlineValue_1 = require_inlineValue();
  var foldingRange_1 = require_foldingRange();
  var inlayHint_1 = require_inlayHint();
  var diagnostic_1 = require_diagnostic();
  var notebook_1 = require_notebook();
  var moniker_1 = require_moniker();
  function null2Undefined(value) {
    if (value === null) {
      return;
    }
    return value;
  }

  class ErrorMessageTracker {
    constructor() {
      this._messages = Object.create(null);
    }
    add(message) {
      let count = this._messages[message];
      if (!count) {
        count = 0;
      }
      count++;
      this._messages[message] = count;
    }
    sendErrors(connection) {
      Object.keys(this._messages).forEach((message) => {
        connection.window.showErrorMessage(message);
      });
    }
  }
  exports2.ErrorMessageTracker = ErrorMessageTracker;

  class RemoteConsoleImpl {
    constructor() {}
    rawAttach(connection) {
      this._rawConnection = connection;
    }
    attach(connection) {
      this._connection = connection;
    }
    get connection() {
      if (!this._connection) {
        throw new Error("Remote is not attached to a connection yet.");
      }
      return this._connection;
    }
    fillServerCapabilities(_capabilities) {}
    initialize(_capabilities) {}
    error(message) {
      this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
    }
    warn(message) {
      this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
    }
    info(message) {
      this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
    }
    log(message) {
      this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
    }
    debug(message) {
      this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
    }
    send(type, message) {
      if (this._rawConnection) {
        this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
          (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
        });
      }
    }
  }

  class _RemoteWindowImpl {
    constructor() {}
    attach(connection) {
      this._connection = connection;
    }
    get connection() {
      if (!this._connection) {
        throw new Error("Remote is not attached to a connection yet.");
      }
      return this._connection;
    }
    initialize(_capabilities) {}
    fillServerCapabilities(_capabilities) {}
    showErrorMessage(message, ...actions) {
      let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
      return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
    }
    showWarningMessage(message, ...actions) {
      let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
      return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
    }
    showInformationMessage(message, ...actions) {
      let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
      return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
    }
  }
  var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
  var BulkRegistration;
  (function(BulkRegistration) {
    function create() {
      return new BulkRegistrationImpl;
    }
    BulkRegistration.create = create;
  })(BulkRegistration || (exports2.BulkRegistration = BulkRegistration = {}));

  class BulkRegistrationImpl {
    constructor() {
      this._registrations = [];
      this._registered = new Set;
    }
    add(type, registerOptions) {
      const method = Is.string(type) ? type : type.method;
      if (this._registered.has(method)) {
        throw new Error(`${method} is already added to this registration`);
      }
      const id = UUID.generateUuid();
      this._registrations.push({
        id,
        method,
        registerOptions: registerOptions || {}
      });
      this._registered.add(method);
    }
    asRegistrationParams() {
      return {
        registrations: this._registrations
      };
    }
  }
  var BulkUnregistration;
  (function(BulkUnregistration) {
    function create() {
      return new BulkUnregistrationImpl(undefined, []);
    }
    BulkUnregistration.create = create;
  })(BulkUnregistration || (exports2.BulkUnregistration = BulkUnregistration = {}));

  class BulkUnregistrationImpl {
    constructor(_connection, unregistrations) {
      this._connection = _connection;
      this._unregistrations = new Map;
      unregistrations.forEach((unregistration) => {
        this._unregistrations.set(unregistration.method, unregistration);
      });
    }
    get isAttached() {
      return !!this._connection;
    }
    attach(connection) {
      this._connection = connection;
    }
    add(unregistration) {
      this._unregistrations.set(unregistration.method, unregistration);
    }
    dispose() {
      let unregistrations = [];
      for (let unregistration of this._unregistrations.values()) {
        unregistrations.push(unregistration);
      }
      let params = {
        unregisterations: unregistrations
      };
      this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
        this._connection.console.info(`Bulk unregistration failed.`);
      });
    }
    disposeSingle(arg) {
      const method = Is.string(arg) ? arg : arg.method;
      const unregistration = this._unregistrations.get(method);
      if (!unregistration) {
        return false;
      }
      let params = {
        unregisterations: [unregistration]
      };
      this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
        this._unregistrations.delete(method);
      }, (_error) => {
        this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
      });
      return true;
    }
  }

  class RemoteClientImpl {
    attach(connection) {
      this._connection = connection;
    }
    get connection() {
      if (!this._connection) {
        throw new Error("Remote is not attached to a connection yet.");
      }
      return this._connection;
    }
    initialize(_capabilities) {}
    fillServerCapabilities(_capabilities) {}
    register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
      if (typeOrRegistrations instanceof BulkRegistrationImpl) {
        return this.registerMany(typeOrRegistrations);
      } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
        return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
      } else {
        return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
      }
    }
    registerSingle1(unregistration, type, registerOptions) {
      const method = Is.string(type) ? type : type.method;
      const id = UUID.generateUuid();
      let params = {
        registrations: [{ id, method, registerOptions: registerOptions || {} }]
      };
      if (!unregistration.isAttached) {
        unregistration.attach(this.connection);
      }
      return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
        unregistration.add({ id, method });
        return unregistration;
      }, (_error) => {
        this.connection.console.info(`Registering request handler for ${method} failed.`);
        return Promise.reject(_error);
      });
    }
    registerSingle2(type, registerOptions) {
      const method = Is.string(type) ? type : type.method;
      const id = UUID.generateUuid();
      let params = {
        registrations: [{ id, method, registerOptions: registerOptions || {} }]
      };
      return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.unregisterSingle(id, method).catch(() => {
            this.connection.console.info(`Un-registering capability with id ${id} failed.`);
          });
        });
      }, (_error) => {
        this.connection.console.info(`Registering request handler for ${method} failed.`);
        return Promise.reject(_error);
      });
    }
    unregisterSingle(id, method) {
      let params = {
        unregisterations: [{ id, method }]
      };
      return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
        this.connection.console.info(`Un-registering request handler for ${id} failed.`);
      });
    }
    registerMany(registrations) {
      let params = registrations.asRegistrationParams();
      return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
        return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
          return { id: registration.id, method: registration.method };
        }));
      }, (_error) => {
        this.connection.console.info(`Bulk registration failed.`);
        return Promise.reject(_error);
      });
    }
  }

  class _RemoteWorkspaceImpl {
    constructor() {}
    attach(connection) {
      this._connection = connection;
    }
    get connection() {
      if (!this._connection) {
        throw new Error("Remote is not attached to a connection yet.");
      }
      return this._connection;
    }
    initialize(_capabilities) {}
    fillServerCapabilities(_capabilities) {}
    applyEdit(paramOrEdit) {
      function isApplyWorkspaceEditParams(value) {
        return value && !!value.edit;
      }
      let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
      return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
    }
  }
  var RemoteWorkspaceImpl = (0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl)));

  class TracerImpl {
    constructor() {
      this._trace = vscode_languageserver_protocol_1.Trace.Off;
    }
    attach(connection) {
      this._connection = connection;
    }
    get connection() {
      if (!this._connection) {
        throw new Error("Remote is not attached to a connection yet.");
      }
      return this._connection;
    }
    initialize(_capabilities) {}
    fillServerCapabilities(_capabilities) {}
    set trace(value) {
      this._trace = value;
    }
    log(message, verbose) {
      if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
        return;
      }
      this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
        message,
        verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : undefined
      }).catch(() => {});
    }
  }

  class TelemetryImpl {
    constructor() {}
    attach(connection) {
      this._connection = connection;
    }
    get connection() {
      if (!this._connection) {
        throw new Error("Remote is not attached to a connection yet.");
      }
      return this._connection;
    }
    initialize(_capabilities) {}
    fillServerCapabilities(_capabilities) {}
    logEvent(data) {
      this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
        this.connection.console.log(`Sending TelemetryEventNotification failed`);
      });
    }
  }

  class _LanguagesImpl {
    constructor() {}
    attach(connection) {
      this._connection = connection;
    }
    get connection() {
      if (!this._connection) {
        throw new Error("Remote is not attached to a connection yet.");
      }
      return this._connection;
    }
    initialize(_capabilities) {}
    fillServerCapabilities(_capabilities) {}
    attachWorkDoneProgress(params) {
      return (0, progress_1.attachWorkDone)(this.connection, params);
    }
    attachPartialResultProgress(_type, params) {
      return (0, progress_1.attachPartialResult)(this.connection, params);
    }
  }
  exports2._LanguagesImpl = _LanguagesImpl;
  var LanguagesImpl = (0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl)))))))));

  class _NotebooksImpl {
    constructor() {}
    attach(connection) {
      this._connection = connection;
    }
    get connection() {
      if (!this._connection) {
        throw new Error("Remote is not attached to a connection yet.");
      }
      return this._connection;
    }
    initialize(_capabilities) {}
    fillServerCapabilities(_capabilities) {}
    attachWorkDoneProgress(params) {
      return (0, progress_1.attachWorkDone)(this.connection, params);
    }
    attachPartialResultProgress(_type, params) {
      return (0, progress_1.attachPartialResult)(this.connection, params);
    }
  }
  exports2._NotebooksImpl = _NotebooksImpl;
  var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
  function combineConsoleFeatures(one, two) {
    return function(Base) {
      return two(one(Base));
    };
  }
  exports2.combineConsoleFeatures = combineConsoleFeatures;
  function combineTelemetryFeatures(one, two) {
    return function(Base) {
      return two(one(Base));
    };
  }
  exports2.combineTelemetryFeatures = combineTelemetryFeatures;
  function combineTracerFeatures(one, two) {
    return function(Base) {
      return two(one(Base));
    };
  }
  exports2.combineTracerFeatures = combineTracerFeatures;
  function combineClientFeatures(one, two) {
    return function(Base) {
      return two(one(Base));
    };
  }
  exports2.combineClientFeatures = combineClientFeatures;
  function combineWindowFeatures(one, two) {
    return function(Base) {
      return two(one(Base));
    };
  }
  exports2.combineWindowFeatures = combineWindowFeatures;
  function combineWorkspaceFeatures(one, two) {
    return function(Base) {
      return two(one(Base));
    };
  }
  exports2.combineWorkspaceFeatures = combineWorkspaceFeatures;
  function combineLanguagesFeatures(one, two) {
    return function(Base) {
      return two(one(Base));
    };
  }
  exports2.combineLanguagesFeatures = combineLanguagesFeatures;
  function combineNotebooksFeatures(one, two) {
    return function(Base) {
      return two(one(Base));
    };
  }
  exports2.combineNotebooksFeatures = combineNotebooksFeatures;
  function combineFeatures(one, two) {
    function combine(one, two, func) {
      if (one && two) {
        return func(one, two);
      } else if (one) {
        return one;
      } else {
        return two;
      }
    }
    let result = {
      __brand: "features",
      console: combine(one.console, two.console, combineConsoleFeatures),
      tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
      telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
      client: combine(one.client, two.client, combineClientFeatures),
      window: combine(one.window, two.window, combineWindowFeatures),
      workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
      languages: combine(one.languages, two.languages, combineLanguagesFeatures),
      notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
    };
    return result;
  }
  exports2.combineFeatures = combineFeatures;
  function createConnection(connectionFactory, watchDog, factories) {
    const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl)) : new RemoteConsoleImpl;
    const connection = connectionFactory(logger);
    logger.rawAttach(connection);
    const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl)) : new TracerImpl;
    const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl)) : new TelemetryImpl;
    const client = factories && factories.client ? new (factories.client(RemoteClientImpl)) : new RemoteClientImpl;
    const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl)) : new RemoteWindowImpl;
    const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl)) : new RemoteWorkspaceImpl;
    const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl)) : new LanguagesImpl;
    const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl)) : new NotebooksImpl;
    const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
    function asPromise(value) {
      if (value instanceof Promise) {
        return value;
      } else if (Is.thenable(value)) {
        return new Promise((resolve, reject) => {
          value.then((resolved) => resolve(resolved), (error) => reject(error));
        });
      } else {
        return Promise.resolve(value);
      }
    }
    let shutdownHandler = undefined;
    let initializeHandler = undefined;
    let exitHandler = undefined;
    let protocolConnection = {
      listen: () => connection.listen(),
      sendRequest: (type, ...params) => connection.sendRequest(Is.string(type) ? type : type.method, ...params),
      onRequest: (type, handler) => connection.onRequest(type, handler),
      sendNotification: (type, param) => {
        const method = Is.string(type) ? type : type.method;
        return connection.sendNotification(method, param);
      },
      onNotification: (type, handler) => connection.onNotification(type, handler),
      onProgress: connection.onProgress,
      sendProgress: connection.sendProgress,
      onInitialize: (handler) => {
        initializeHandler = handler;
        return {
          dispose: () => {
            initializeHandler = undefined;
          }
        };
      },
      onInitialized: (handler) => connection.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
      onShutdown: (handler) => {
        shutdownHandler = handler;
        return {
          dispose: () => {
            shutdownHandler = undefined;
          }
        };
      },
      onExit: (handler) => {
        exitHandler = handler;
        return {
          dispose: () => {
            exitHandler = undefined;
          }
        };
      },
      get console() {
        return logger;
      },
      get telemetry() {
        return telemetry;
      },
      get tracer() {
        return tracer;
      },
      get client() {
        return client;
      },
      get window() {
        return remoteWindow;
      },
      get workspace() {
        return workspace;
      },
      get languages() {
        return languages;
      },
      get notebooks() {
        return notebooks;
      },
      onDidChangeConfiguration: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
      onDidChangeWatchedFiles: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
      __textDocumentSync: undefined,
      onDidOpenTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
      onDidChangeTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
      onDidCloseTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
      onWillSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
      onWillSaveTextDocumentWaitUntil: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
      onDidSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
      sendDiagnostics: (params) => connection.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
      onHover: (handler) => connection.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
      }),
      onCompletion: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onCompletionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
      onSignatureHelp: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
      }),
      onDeclaration: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onTypeDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onImplementation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onReferences: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onDocumentHighlight: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onDocumentSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onWorkspaceSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onWorkspaceSymbolResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
      onCodeAction: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onCodeActionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
        return handler(params, cancel);
      }),
      onCodeLens: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onCodeLensResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
        return handler(params, cancel);
      }),
      onDocumentFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
      }),
      onDocumentRangeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
      }),
      onDocumentOnTypeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
        return handler(params, cancel);
      }),
      onRenameRequest: (handler) => connection.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
      }),
      onPrepareRename: (handler) => connection.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
        return handler(params, cancel);
      }),
      onDocumentLinks: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onDocumentLinkResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
        return handler(params, cancel);
      }),
      onDocumentColor: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onColorPresentation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onFoldingRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onSelectionRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
      }),
      onExecuteCommand: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
        return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
      }),
      dispose: () => connection.dispose()
    };
    for (let remote of allRemotes) {
      remote.attach(protocolConnection);
    }
    connection.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
      watchDog.initialize(params);
      if (Is.string(params.trace)) {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
      }
      for (let remote of allRemotes) {
        remote.initialize(params.capabilities);
      }
      if (initializeHandler) {
        let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection, params), undefined);
        return asPromise(result).then((value) => {
          if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
            return value;
          }
          let result = value;
          if (!result) {
            result = { capabilities: {} };
          }
          let capabilities = result.capabilities;
          if (!capabilities) {
            capabilities = {};
            result.capabilities = capabilities;
          }
          if (capabilities.textDocumentSync === undefined || capabilities.textDocumentSync === null) {
            capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
          } else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
            capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
          }
          for (let remote of allRemotes) {
            remote.fillServerCapabilities(capabilities);
          }
          return result;
        });
      } else {
        let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
        for (let remote of allRemotes) {
          remote.fillServerCapabilities(result.capabilities);
        }
        return result;
      }
    });
    connection.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
      watchDog.shutdownReceived = true;
      if (shutdownHandler) {
        return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
      } else {
        return;
      }
    });
    connection.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
      try {
        if (exitHandler) {
          exitHandler();
        }
      } finally {
        if (watchDog.shutdownReceived) {
          watchDog.exit(0);
        } else {
          watchDog.exit(1);
        }
      }
    });
    connection.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
      tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
    });
    return protocolConnection;
  }
  exports2.createConnection = createConnection;
});

// node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS(function(exports2) {
  var __filename = "/Users/nepjua/code/yu/github/yasinuslu/zed-ai-lens/server/node_modules/vscode-languageserver/lib/node/files.js";
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.resolveModulePath = exports2.FileSystem = exports2.resolveGlobalYarnPath = exports2.resolveGlobalNodePath = exports2.resolve = exports2.uriToFilePath = undefined;
  var url = require("url");
  var path = require("path");
  var fs = require("fs");
  var child_process_1 = require("child_process");
  function uriToFilePath(uri) {
    let parsed = url.parse(uri);
    if (parsed.protocol !== "file:" || !parsed.path) {
      return;
    }
    let segments = parsed.path.split("/");
    for (var i = 0, len = segments.length;i < len; i++) {
      segments[i] = decodeURIComponent(segments[i]);
    }
    if (process.platform === "win32" && segments.length > 1) {
      let first = segments[0];
      let second = segments[1];
      if (first.length === 0 && second.length > 1 && second[1] === ":") {
        segments.shift();
      }
    }
    return path.normalize(segments.join("/"));
  }
  exports2.uriToFilePath = uriToFilePath;
  function isWindows() {
    return process.platform === "win32";
  }
  function resolve(moduleName, nodePath, cwd, tracer) {
    const nodePathKey = "NODE_PATH";
    const app = [
      "var p = process;",
      "p.on('message',function(m){",
      "if(m.c==='e'){",
      "p.exit(0);",
      "}",
      "else if(m.c==='rs'){",
      "try{",
      "var r=require.resolve(m.a);",
      "p.send({c:'r',s:true,r:r});",
      "}",
      "catch(err){",
      "p.send({c:'r',s:false});",
      "}",
      "}",
      "});"
    ].join("");
    return new Promise((resolve, reject) => {
      let env = process.env;
      let newEnv = Object.create(null);
      Object.keys(env).forEach((key) => newEnv[key] = env[key]);
      if (nodePath && fs.existsSync(nodePath)) {
        if (newEnv[nodePathKey]) {
          newEnv[nodePathKey] = nodePath + path.delimiter + newEnv[nodePathKey];
        } else {
          newEnv[nodePathKey] = nodePath;
        }
        if (tracer) {
          tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
        }
      }
      newEnv["ELECTRON_RUN_AS_NODE"] = "1";
      try {
        let cp = (0, child_process_1.fork)("", [], {
          cwd,
          env: newEnv,
          execArgv: ["-e", app]
        });
        if (cp.pid === undefined) {
          reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
          return;
        }
        cp.on("error", (error) => {
          reject(error);
        });
        cp.on("message", (message) => {
          if (message.c === "r") {
            cp.send({ c: "e" });
            if (message.s) {
              resolve(message.r);
            } else {
              reject(new Error(`Failed to resolve module: ${moduleName}`));
            }
          }
        });
        let message = {
          c: "rs",
          a: moduleName
        };
        cp.send(message);
      } catch (error) {
        reject(error);
      }
    });
  }
  exports2.resolve = resolve;
  function resolveGlobalNodePath(tracer) {
    let npmCommand = "npm";
    const env = Object.create(null);
    Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
    env["NO_UPDATE_NOTIFIER"] = "true";
    const options = {
      encoding: "utf8",
      env
    };
    if (isWindows()) {
      npmCommand = "npm.cmd";
      options.shell = true;
    }
    let handler = () => {};
    try {
      process.on("SIGPIPE", handler);
      let stdout = (0, child_process_1.spawnSync)(npmCommand, ["config", "get", "prefix"], options).stdout;
      if (!stdout) {
        if (tracer) {
          tracer(`'npm config get prefix' didn't return a value.`);
        }
        return;
      }
      let prefix = stdout.trim();
      if (tracer) {
        tracer(`'npm config get prefix' value is: ${prefix}`);
      }
      if (prefix.length > 0) {
        if (isWindows()) {
          return path.join(prefix, "node_modules");
        } else {
          return path.join(prefix, "lib", "node_modules");
        }
      }
      return;
    } catch (err) {
      return;
    } finally {
      process.removeListener("SIGPIPE", handler);
    }
  }
  exports2.resolveGlobalNodePath = resolveGlobalNodePath;
  function resolveGlobalYarnPath(tracer) {
    let yarnCommand = "yarn";
    let options = {
      encoding: "utf8"
    };
    if (isWindows()) {
      yarnCommand = "yarn.cmd";
      options.shell = true;
    }
    let handler = () => {};
    try {
      process.on("SIGPIPE", handler);
      let results = (0, child_process_1.spawnSync)(yarnCommand, ["global", "dir", "--json"], options);
      let stdout = results.stdout;
      if (!stdout) {
        if (tracer) {
          tracer(`'yarn global dir' didn't return a value.`);
          if (results.stderr) {
            tracer(results.stderr);
          }
        }
        return;
      }
      let lines = stdout.trim().split(/\r?\n/);
      for (let line of lines) {
        try {
          let yarn = JSON.parse(line);
          if (yarn.type === "log") {
            return path.join(yarn.data, "node_modules");
          }
        } catch (e) {}
      }
      return;
    } catch (err) {
      return;
    } finally {
      process.removeListener("SIGPIPE", handler);
    }
  }
  exports2.resolveGlobalYarnPath = resolveGlobalYarnPath;
  var FileSystem;
  (function(FileSystem) {
    let _isCaseSensitive = undefined;
    function isCaseSensitive() {
      if (_isCaseSensitive !== undefined) {
        return _isCaseSensitive;
      }
      if (process.platform === "win32") {
        _isCaseSensitive = false;
      } else {
        _isCaseSensitive = !fs.existsSync(__filename.toUpperCase()) || !fs.existsSync(__filename.toLowerCase());
      }
      return _isCaseSensitive;
    }
    FileSystem.isCaseSensitive = isCaseSensitive;
    function isParent(parent, child) {
      if (isCaseSensitive()) {
        return path.normalize(child).indexOf(path.normalize(parent)) === 0;
      } else {
        return path.normalize(child).toLowerCase().indexOf(path.normalize(parent).toLowerCase()) === 0;
      }
    }
    FileSystem.isParent = isParent;
  })(FileSystem || (exports2.FileSystem = FileSystem = {}));
  function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
    if (nodePath) {
      if (!path.isAbsolute(nodePath)) {
        nodePath = path.join(workspaceRoot, nodePath);
      }
      return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
        if (FileSystem.isParent(nodePath, value)) {
          return value;
        } else {
          return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
        }
      }).then(undefined, (_error) => {
        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
      });
    } else {
      return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
    }
  }
  exports2.resolveModulePath = resolveModulePath;
});

// node_modules/vscode-languageserver-protocol/node.js
var require_node2 = __commonJS(function(exports2, module2) {
  module2.exports = require_main3();
});

// node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js
var require_inlineCompletion_proposed = __commonJS(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.InlineCompletionFeature = undefined;
  var vscode_languageserver_protocol_1 = require_main3();
  var InlineCompletionFeature = (Base) => {
    return class extends Base {
      get inlineCompletion() {
        return {
          on: (handler) => {
            return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params));
            });
          }
        };
      }
    };
  };
  exports2.InlineCompletionFeature = InlineCompletionFeature;
});

// node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS(function(exports2) {
  var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ProposedFeatures = exports2.NotebookDocuments = exports2.TextDocuments = exports2.SemanticTokensBuilder = undefined;
  var semanticTokens_1 = require_semanticTokens();
  Object.defineProperty(exports2, "SemanticTokensBuilder", { enumerable: true, get: function() {
    return semanticTokens_1.SemanticTokensBuilder;
  } });
  var ic = require_inlineCompletion_proposed();
  __exportStar(require_main3(), exports2);
  var textDocuments_1 = require_textDocuments();
  Object.defineProperty(exports2, "TextDocuments", { enumerable: true, get: function() {
    return textDocuments_1.TextDocuments;
  } });
  var notebook_1 = require_notebook();
  Object.defineProperty(exports2, "NotebookDocuments", { enumerable: true, get: function() {
    return notebook_1.NotebookDocuments;
  } });
  __exportStar(require_server(), exports2);
  var ProposedFeatures;
  (function(ProposedFeatures) {
    ProposedFeatures.all = {
      __brand: "features",
      languages: ic.InlineCompletionFeature
    };
  })(ProposedFeatures || (exports2.ProposedFeatures = ProposedFeatures = {}));
});

// node_modules/vscode-languageserver/lib/node/main.js
var require_main4 = __commonJS(function(exports2) {
  var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.createConnection = exports2.Files = undefined;
  var node_util_1 = require("node:util");
  var Is = require_is();
  var server_1 = require_server();
  var fm = require_files();
  var node_1 = require_node2();
  __exportStar(require_node2(), exports2);
  __exportStar(require_api3(), exports2);
  var Files;
  (function(Files) {
    Files.uriToFilePath = fm.uriToFilePath;
    Files.resolveGlobalNodePath = fm.resolveGlobalNodePath;
    Files.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
    Files.resolve = fm.resolve;
    Files.resolveModulePath = fm.resolveModulePath;
  })(Files || (exports2.Files = Files = {}));
  var _protocolConnection;
  function endProtocolConnection() {
    if (_protocolConnection === undefined) {
      return;
    }
    try {
      _protocolConnection.end();
    } catch (_err) {}
  }
  var _shutdownReceived = false;
  var exitTimer = undefined;
  function setupExitTimer() {
    const argName = "--clientProcessId";
    function runTimer(value) {
      try {
        let processId = parseInt(value);
        if (!isNaN(processId)) {
          exitTimer = setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              endProtocolConnection();
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3000);
        }
      } catch (e) {}
    }
    for (let i = 2;i < process.argv.length; i++) {
      let arg = process.argv[i];
      if (arg === argName && i + 1 < process.argv.length) {
        runTimer(process.argv[i + 1]);
        return;
      } else {
        let args = arg.split("=");
        if (args[0] === argName) {
          runTimer(args[1]);
        }
      }
    }
  }
  setupExitTimer();
  var watchDog = {
    initialize: (params) => {
      const processId = params.processId;
      if (Is.number(processId) && exitTimer === undefined) {
        setInterval(() => {
          try {
            process.kill(processId, 0);
          } catch (ex) {
            process.exit(_shutdownReceived ? 0 : 1);
          }
        }, 3000);
      }
    },
    get shutdownReceived() {
      return _shutdownReceived;
    },
    set shutdownReceived(value) {
      _shutdownReceived = value;
    },
    exit: (code) => {
      endProtocolConnection();
      process.exit(code);
    }
  };
  function createConnection(arg1, arg2, arg3, arg4) {
    let factories;
    let input;
    let output;
    let options;
    if (arg1 !== undefined && arg1.__brand === "features") {
      factories = arg1;
      arg1 = arg2;
      arg2 = arg3;
      arg3 = arg4;
    }
    if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
      options = arg1;
    } else {
      input = arg1;
      output = arg2;
      options = arg3;
    }
    return _createConnection(input, output, options, factories);
  }
  exports2.createConnection = createConnection;
  function _createConnection(input, output, options, factories) {
    let stdio = false;
    if (!input && !output && process.argv.length > 2) {
      let port = undefined;
      let pipeName = undefined;
      let argv = process.argv.slice(2);
      for (let i = 0;i < argv.length; i++) {
        let arg = argv[i];
        if (arg === "--node-ipc") {
          input = new node_1.IPCMessageReader(process);
          output = new node_1.IPCMessageWriter(process);
          break;
        } else if (arg === "--stdio") {
          stdio = true;
          input = process.stdin;
          output = process.stdout;
          break;
        } else if (arg === "--socket") {
          port = parseInt(argv[i + 1]);
          break;
        } else if (arg === "--pipe") {
          pipeName = argv[i + 1];
          break;
        } else {
          var args = arg.split("=");
          if (args[0] === "--socket") {
            port = parseInt(args[1]);
            break;
          } else if (args[0] === "--pipe") {
            pipeName = args[1];
            break;
          }
        }
      }
      if (port) {
        let transport = (0, node_1.createServerSocketTransport)(port);
        input = transport[0];
        output = transport[1];
      } else if (pipeName) {
        let transport = (0, node_1.createServerPipeTransport)(pipeName);
        input = transport[0];
        output = transport[1];
      }
    }
    var commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
    if (!input) {
      throw new Error("Connection input stream is not set. " + commandLineMessage);
    }
    if (!output) {
      throw new Error("Connection output stream is not set. " + commandLineMessage);
    }
    if (Is.func(input.read) && Is.func(input.on)) {
      let inputStream = input;
      inputStream.on("end", () => {
        endProtocolConnection();
        process.exit(_shutdownReceived ? 0 : 1);
      });
      inputStream.on("close", () => {
        endProtocolConnection();
        process.exit(_shutdownReceived ? 0 : 1);
      });
    }
    const connectionFactory = (logger) => {
      const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
      if (stdio) {
        patchConsole(logger);
      }
      return result;
    };
    return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
  }
  function patchConsole(logger) {
    function serialize(args) {
      return args.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
    }
    const counters = new Map;
    console.assert = function assert(assertion, ...args) {
      if (assertion) {
        return;
      }
      if (args.length === 0) {
        logger.error("Assertion failed");
      } else {
        const [message, ...rest] = args;
        logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
      }
    };
    console.count = function count(label = "default") {
      const message = String(label);
      let counter = counters.get(message) ?? 0;
      counter += 1;
      counters.set(message, counter);
      logger.log(`${message}: ${message}`);
    };
    console.countReset = function countReset(label) {
      if (label === undefined) {
        counters.clear();
      } else {
        counters.delete(String(label));
      }
    };
    console.debug = function debug(...args) {
      logger.log(serialize(args));
    };
    console.dir = function dir(arg, options) {
      logger.log((0, node_util_1.inspect)(arg, options));
    };
    console.log = function log(...args) {
      logger.log(serialize(args));
    };
    console.error = function error(...args) {
      logger.error(serialize(args));
    };
    console.trace = function trace(...args) {
      const stack = new Error().stack.replace(/(.+\n){2}/, "");
      let message = "Trace";
      if (args.length !== 0) {
        message += `: ${serialize(args)}`;
      }
      logger.log(`${message}
${stack}`);
    };
    console.warn = function warn(...args) {
      logger.warn(serialize(args));
    };
  }
});

// node_modules/vscode-languageserver/node.js
var require_node3 = __commonJS(function(exports2, module2) {
  module2.exports = require_main4();
});

// node_modules/picomatch/lib/constants.js
var require_constants = __commonJS(function(exports2, module2) {
  var WIN_SLASH = "\\\\/";
  var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
  var DEFAULT_MAX_EXTGLOB_RECURSION = 0;
  var DOT_LITERAL = "\\.";
  var PLUS_LITERAL = "\\+";
  var QMARK_LITERAL = "\\?";
  var SLASH_LITERAL = "\\/";
  var ONE_CHAR = "(?=.)";
  var QMARK = "[^/]";
  var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
  var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
  var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
  var NO_DOT = `(?!${DOT_LITERAL})`;
  var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
  var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
  var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
  var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
  var STAR = `${QMARK}*?`;
  var SEP = "/";
  var POSIX_CHARS = {
    DOT_LITERAL,
    PLUS_LITERAL,
    QMARK_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    QMARK,
    END_ANCHOR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR,
    SEP
  };
  var WINDOWS_CHARS = {
    ...POSIX_CHARS,
    SLASH_LITERAL: `[${WIN_SLASH}]`,
    QMARK: WIN_NO_SLASH,
    STAR: `${WIN_NO_SLASH}*?`,
    DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
    NO_DOT: `(?!${DOT_LITERAL})`,
    NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
    NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
    START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
    END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
    SEP: "\\"
  };
  var POSIX_REGEX_SOURCE = {
    __proto__: null,
    alnum: "a-zA-Z0-9",
    alpha: "a-zA-Z",
    ascii: "\\x00-\\x7F",
    blank: " \\t",
    cntrl: "\\x00-\\x1F\\x7F",
    digit: "0-9",
    graph: "\\x21-\\x7E",
    lower: "a-z",
    print: "\\x20-\\x7E ",
    punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
    space: " \\t\\r\\n\\v\\f",
    upper: "A-Z",
    word: "A-Za-z0-9_",
    xdigit: "A-Fa-f0-9"
  };
  module2.exports = {
    DEFAULT_MAX_EXTGLOB_RECURSION,
    MAX_LENGTH: 1024 * 64,
    POSIX_REGEX_SOURCE,
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    REPLACEMENTS: {
      __proto__: null,
      "***": "*",
      "**/**": "**",
      "**/**/**": "**"
    },
    CHAR_0: 48,
    CHAR_9: 57,
    CHAR_UPPERCASE_A: 65,
    CHAR_LOWERCASE_A: 97,
    CHAR_UPPERCASE_Z: 90,
    CHAR_LOWERCASE_Z: 122,
    CHAR_LEFT_PARENTHESES: 40,
    CHAR_RIGHT_PARENTHESES: 41,
    CHAR_ASTERISK: 42,
    CHAR_AMPERSAND: 38,
    CHAR_AT: 64,
    CHAR_BACKWARD_SLASH: 92,
    CHAR_CARRIAGE_RETURN: 13,
    CHAR_CIRCUMFLEX_ACCENT: 94,
    CHAR_COLON: 58,
    CHAR_COMMA: 44,
    CHAR_DOT: 46,
    CHAR_DOUBLE_QUOTE: 34,
    CHAR_EQUAL: 61,
    CHAR_EXCLAMATION_MARK: 33,
    CHAR_FORM_FEED: 12,
    CHAR_FORWARD_SLASH: 47,
    CHAR_GRAVE_ACCENT: 96,
    CHAR_HASH: 35,
    CHAR_HYPHEN_MINUS: 45,
    CHAR_LEFT_ANGLE_BRACKET: 60,
    CHAR_LEFT_CURLY_BRACE: 123,
    CHAR_LEFT_SQUARE_BRACKET: 91,
    CHAR_LINE_FEED: 10,
    CHAR_NO_BREAK_SPACE: 160,
    CHAR_PERCENT: 37,
    CHAR_PLUS: 43,
    CHAR_QUESTION_MARK: 63,
    CHAR_RIGHT_ANGLE_BRACKET: 62,
    CHAR_RIGHT_CURLY_BRACE: 125,
    CHAR_RIGHT_SQUARE_BRACKET: 93,
    CHAR_SEMICOLON: 59,
    CHAR_SINGLE_QUOTE: 39,
    CHAR_SPACE: 32,
    CHAR_TAB: 9,
    CHAR_UNDERSCORE: 95,
    CHAR_VERTICAL_LINE: 124,
    CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    extglobChars(chars) {
      return {
        "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
        "?": { type: "qmark", open: "(?:", close: ")?" },
        "+": { type: "plus", open: "(?:", close: ")+" },
        "*": { type: "star", open: "(?:", close: ")*" },
        "@": { type: "at", open: "(?:", close: ")" }
      };
    },
    globChars(win32) {
      return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
    }
  };
});

// node_modules/picomatch/lib/utils.js
var require_utils = __commonJS(function(exports2) {
  var {
    REGEX_BACKSLASH,
    REGEX_REMOVE_BACKSLASH,
    REGEX_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_GLOBAL
  } = require_constants();
  exports2.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
  exports2.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
  exports2.isRegexChar = (str) => str.length === 1 && exports2.hasRegexChars(str);
  exports2.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
  exports2.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
  exports2.isWindows = () => {
    if (typeof navigator !== "undefined" && navigator.platform) {
      const platform = navigator.platform.toLowerCase();
      return platform === "win32" || platform === "windows";
    }
    if (typeof process !== "undefined" && process.platform) {
      return process.platform === "win32";
    }
    return false;
  };
  exports2.removeBackslashes = (str) => {
    return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
      return match === "\\" ? "" : match;
    });
  };
  exports2.escapeLast = (input, char, lastIdx) => {
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1)
      return input;
    if (input[idx - 1] === "\\")
      return exports2.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
  };
  exports2.removePrefix = (input, state = {}) => {
    let output = input;
    if (output.startsWith("./")) {
      output = output.slice(2);
      state.prefix = "./";
    }
    return output;
  };
  exports2.wrapOutput = (input, state = {}, options = {}) => {
    const prepend = options.contains ? "" : "^";
    const append = options.contains ? "" : "$";
    let output = `${prepend}(?:${input})${append}`;
    if (state.negated === true) {
      output = `(?:^(?!${output}).*$)`;
    }
    return output;
  };
  exports2.basename = (path, { windows } = {}) => {
    const segs = path.split(windows ? /[\\/]/ : "/");
    const last = segs[segs.length - 1];
    if (last === "") {
      return segs[segs.length - 2];
    }
    return last;
  };
});

// node_modules/picomatch/lib/scan.js
var require_scan = __commonJS(function(exports2, module2) {
  var utils = require_utils();
  var {
    CHAR_ASTERISK,
    CHAR_AT,
    CHAR_BACKWARD_SLASH,
    CHAR_COMMA,
    CHAR_DOT,
    CHAR_EXCLAMATION_MARK,
    CHAR_FORWARD_SLASH,
    CHAR_LEFT_CURLY_BRACE,
    CHAR_LEFT_PARENTHESES,
    CHAR_LEFT_SQUARE_BRACKET,
    CHAR_PLUS,
    CHAR_QUESTION_MARK,
    CHAR_RIGHT_CURLY_BRACE,
    CHAR_RIGHT_PARENTHESES,
    CHAR_RIGHT_SQUARE_BRACKET
  } = require_constants();
  var isPathSeparator = (code) => {
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
  };
  var depth = (token) => {
    if (token.isPrefix !== true) {
      token.depth = token.isGlobstar ? Infinity : 1;
    }
  };
  var scan = (input, options) => {
    const opts = options || {};
    const length = input.length - 1;
    const scanToEnd = opts.parts === true || opts.tokens === true || opts.scanToEnd === true;
    const slashes = [];
    const tokens = [];
    const parts = [];
    let str = input;
    let index = -1;
    let start = 0;
    let lastIndex = 0;
    let isBrace = false;
    let isBracket = false;
    let isGlob = false;
    let isExtglob = false;
    let isGlobstar = false;
    let braceEscaped = false;
    let backslashes = false;
    let negated = false;
    let negatedExtglob = false;
    let finished = false;
    let braces = 0;
    let prev;
    let code;
    let token = { value: "", depth: 0, isGlob: false };
    const eos = () => index >= length;
    const peek = () => str.charCodeAt(index + 1);
    const advance = () => {
      prev = code;
      return str.charCodeAt(++index);
    };
    while (index < length) {
      code = advance();
      let next;
      if (code === CHAR_BACKWARD_SLASH) {
        backslashes = token.backslashes = true;
        code = advance();
        if (code === CHAR_LEFT_CURLY_BRACE) {
          braceEscaped = true;
        }
        continue;
      }
      if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
        braces++;
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            advance();
            continue;
          }
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            continue;
          }
          if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
            isBrace = token.isBrace = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (braceEscaped !== true && code === CHAR_COMMA) {
            isBrace = token.isBrace = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_RIGHT_CURLY_BRACE) {
            braces--;
            if (braces === 0) {
              braceEscaped = false;
              isBrace = token.isBrace = true;
              finished = true;
              break;
            }
          }
        }
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_FORWARD_SLASH) {
        slashes.push(index);
        tokens.push(token);
        token = { value: "", depth: 0, isGlob: false };
        if (finished === true)
          continue;
        if (prev === CHAR_DOT && index === start + 1) {
          start += 2;
          continue;
        }
        lastIndex = index + 1;
        continue;
      }
      if (opts.noext !== true) {
        const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
        if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          isExtglob = token.isExtglob = true;
          finished = true;
          if (code === CHAR_EXCLAMATION_MARK && index === start) {
            negatedExtglob = true;
          }
          if (scanToEnd === true) {
            let parens = 0;
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance();
                continue;
              }
              if (code === CHAR_LEFT_PARENTHESES) {
                parens++;
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES && --parens === 0) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
      }
      if (code === CHAR_ASTERISK) {
        if (prev === CHAR_ASTERISK)
          isGlobstar = token.isGlobstar = true;
        isGlob = token.isGlob = true;
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_QUESTION_MARK) {
        isGlob = token.isGlob = true;
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_LEFT_SQUARE_BRACKET) {
        while (eos() !== true && (next = advance())) {
          if (next === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            advance();
            continue;
          }
          if (next === CHAR_RIGHT_SQUARE_BRACKET) {
            isBracket = token.isBracket = true;
            isGlob = token.isGlob = true;
            finished = true;
            break;
          }
        }
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
        negated = token.negated = true;
        start++;
        continue;
      }
      if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
        isGlob = token.isGlob = true;
        if (scanToEnd === true) {
          let parens = 1;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_PARENTHESES) {
              parens++;
              continue;
            }
            if (code === CHAR_RIGHT_PARENTHESES && --parens === 0) {
              finished = true;
              break;
            }
          }
          continue;
        }
        break;
      }
      if (isGlob === true) {
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
    }
    if (opts.noext === true) {
      isExtglob = false;
      isGlob = false;
    }
    let base = str;
    let prefix = "";
    let glob = "";
    if (start > 0) {
      prefix = str.slice(0, start);
      str = str.slice(start);
      lastIndex -= start;
    }
    if (base && isGlob === true && lastIndex > 0) {
      base = str.slice(0, lastIndex);
      glob = str.slice(lastIndex);
    } else if (isGlob === true) {
      base = "";
      glob = str;
    } else {
      base = str;
    }
    if (base && base !== "" && base !== "/" && base !== str) {
      if (isPathSeparator(base.charCodeAt(base.length - 1))) {
        base = base.slice(0, -1);
      }
    }
    if (opts.unescape === true) {
      if (glob)
        glob = utils.removeBackslashes(glob);
      if (base && backslashes === true) {
        base = utils.removeBackslashes(base);
      }
    }
    const state = {
      prefix,
      input,
      start,
      base,
      glob,
      isBrace,
      isBracket,
      isGlob,
      isExtglob,
      isGlobstar,
      negated,
      negatedExtglob
    };
    if (opts.tokens === true) {
      state.maxDepth = 0;
      if (!isPathSeparator(code)) {
        tokens.push(token);
      }
      state.tokens = tokens;
    }
    if (opts.parts === true || opts.tokens === true) {
      let prevIndex;
      for (let idx = 0;idx < slashes.length; idx++) {
        const n = prevIndex !== undefined ? prevIndex + 1 : start;
        const i = slashes[idx];
        const value = input.slice(n, i);
        if (opts.tokens) {
          if (idx === 0 && start !== 0) {
            tokens[idx].isPrefix = true;
            tokens[idx].value = prefix;
          } else {
            tokens[idx].value = value;
          }
          depth(tokens[idx]);
          state.maxDepth += tokens[idx].depth;
        }
        if (i >= start) {
          parts.push(value);
          prevIndex = i;
        }
      }
      const n = prevIndex !== undefined ? prevIndex + 1 : start;
      const value = input.slice(n);
      parts.push(value);
      if (opts.tokens && prevIndex && prevIndex + 1 < input.length) {
        tokens[tokens.length - 1].value = value;
        depth(tokens[tokens.length - 1]);
        state.maxDepth += tokens[tokens.length - 1].depth;
      }
      state.slashes = slashes;
      state.parts = parts;
    }
    return state;
  };
  module2.exports = scan;
});

// node_modules/picomatch/lib/parse.js
var require_parse = __commonJS(function(exports2, module2) {
  var constants = require_constants();
  var utils = require_utils();
  var {
    MAX_LENGTH,
    POSIX_REGEX_SOURCE,
    REGEX_NON_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_BACKREF,
    REPLACEMENTS
  } = constants;
  var expandRange = (args, options) => {
    if (typeof options.expandRange === "function") {
      return options.expandRange(...args, options);
    }
    args.sort();
    const value = `[${args.join("-")}]`;
    try {
      new RegExp(value);
    } catch (ex) {
      return args.map((v) => utils.escapeRegex(v)).join("..");
    }
    return value;
  };
  var syntaxError = (type, char) => {
    return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
  };
  var splitTopLevel = (input) => {
    const parts = [];
    let bracket = 0;
    let paren = 0;
    let quote = 0;
    let value = "";
    let escaped = false;
    for (const ch of input) {
      if (escaped === true) {
        value += ch;
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        value += ch;
        escaped = true;
        continue;
      }
      if (ch === '"') {
        quote = quote === 1 ? 0 : 1;
        value += ch;
        continue;
      }
      if (quote === 0) {
        if (ch === "[") {
          bracket++;
        } else if (ch === "]" && bracket > 0) {
          bracket--;
        } else if (bracket === 0) {
          if (ch === "(") {
            paren++;
          } else if (ch === ")" && paren > 0) {
            paren--;
          } else if (ch === "|" && paren === 0) {
            parts.push(value);
            value = "";
            continue;
          }
        }
      }
      value += ch;
    }
    parts.push(value);
    return parts;
  };
  var isPlainBranch = (branch) => {
    let escaped = false;
    for (const ch of branch) {
      if (escaped === true) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (/[?*+@!()[\]{}]/.test(ch)) {
        return false;
      }
    }
    return true;
  };
  var normalizeSimpleBranch = (branch) => {
    let value = branch.trim();
    let changed = true;
    while (changed === true) {
      changed = false;
      if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
        value = value.slice(2, -1);
        changed = true;
      }
    }
    if (!isPlainBranch(value)) {
      return;
    }
    return value.replace(/\\(.)/g, "$1");
  };
  var hasRepeatedCharPrefixOverlap = (branches) => {
    const values = branches.map(normalizeSimpleBranch).filter(Boolean);
    for (let i = 0;i < values.length; i++) {
      for (let j = i + 1;j < values.length; j++) {
        const a = values[i];
        const b = values[j];
        const char = a[0];
        if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
          continue;
        }
        if (a === b || a.startsWith(b) || b.startsWith(a)) {
          return true;
        }
      }
    }
    return false;
  };
  var parseRepeatedExtglob = (pattern, requireEnd = true) => {
    if (pattern[0] !== "+" && pattern[0] !== "*" || pattern[1] !== "(") {
      return;
    }
    let bracket = 0;
    let paren = 0;
    let quote = 0;
    let escaped = false;
    for (let i = 1;i < pattern.length; i++) {
      const ch = pattern[i];
      if (escaped === true) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === '"') {
        quote = quote === 1 ? 0 : 1;
        continue;
      }
      if (quote === 1) {
        continue;
      }
      if (ch === "[") {
        bracket++;
        continue;
      }
      if (ch === "]" && bracket > 0) {
        bracket--;
        continue;
      }
      if (bracket > 0) {
        continue;
      }
      if (ch === "(") {
        paren++;
        continue;
      }
      if (ch === ")") {
        paren--;
        if (paren === 0) {
          if (requireEnd === true && i !== pattern.length - 1) {
            return;
          }
          return {
            type: pattern[0],
            body: pattern.slice(2, i),
            end: i
          };
        }
      }
    }
  };
  var buildCharClassStar = (chars) => {
    const source = chars.length === 1 ? utils.escapeRegex(chars[0]) : `[${chars.map((ch) => utils.escapeRegex(ch)).join("")}]`;
    return `${source}*`;
  };
  var getStarExtglobSequenceChars = (pattern) => {
    let index = 0;
    const chars = [];
    while (index < pattern.length) {
      const match = parseRepeatedExtglob(pattern.slice(index), false);
      if (!match || match.type !== "*") {
        return;
      }
      const branches = splitTopLevel(match.body).map((branch) => branch.trim());
      if (branches.length !== 1) {
        return;
      }
      const branch = normalizeSimpleBranch(branches[0]);
      if (!branch || branch.length !== 1) {
        return;
      }
      chars.push(branch);
      index += match.end + 1;
    }
    if (chars.length < 1) {
      return;
    }
    return chars;
  };
  var repeatedExtglobRecursion = (pattern) => {
    let depth = 0;
    let value = pattern.trim();
    let match = parseRepeatedExtglob(value);
    while (match) {
      depth++;
      value = match.body.trim();
      match = parseRepeatedExtglob(value);
    }
    return depth;
  };
  var analyzeRepeatedExtglob = (body, options) => {
    if (options.maxExtglobRecursion === false) {
      return { risky: false };
    }
    const max = typeof options.maxExtglobRecursion === "number" ? options.maxExtglobRecursion : constants.DEFAULT_MAX_EXTGLOB_RECURSION;
    const branches = splitTopLevel(body).map((branch) => branch.trim());
    if (branches.length > 1) {
      if (branches.some((branch) => branch === "") || branches.some((branch) => /^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) {
        return { risky: true };
      }
    }
    const safeChars = [];
    let sawStarSequence = false;
    let combinable = true;
    for (const branch of branches) {
      const chars = getStarExtglobSequenceChars(branch);
      if (chars) {
        sawStarSequence = true;
        safeChars.push(...chars);
        continue;
      }
      const literal = normalizeSimpleBranch(branch);
      if (literal && literal.length === 1) {
        safeChars.push(literal);
        continue;
      }
      combinable = false;
      if (repeatedExtglobRecursion(branch) > max) {
        return { risky: true };
      }
    }
    if (sawStarSequence) {
      return combinable ? { risky: true, safeOutput: buildCharClassStar([...new Set(safeChars)]) } : { risky: true };
    }
    return { risky: false };
  };
  var parse = (input, options) => {
    if (typeof input !== "string") {
      throw new TypeError("Expected a string");
    }
    input = REPLACEMENTS[input] || input;
    const opts = { ...options };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    let len = input.length;
    if (len > max) {
      throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    const bos = { type: "bos", value: "", output: opts.prepend || "" };
    const tokens = [bos];
    const capture = opts.capture ? "" : "?:";
    const PLATFORM_CHARS = constants.globChars(opts.windows);
    const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
    const {
      DOT_LITERAL,
      PLUS_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    } = PLATFORM_CHARS;
    const globstar = (opts) => {
      return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const nodot = opts.dot ? "" : NO_DOT;
    const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
    let star = opts.bash === true ? globstar(opts) : STAR;
    if (opts.capture) {
      star = `(${star})`;
    }
    if (typeof opts.noext === "boolean") {
      opts.noextglob = opts.noext;
    }
    const state = {
      input,
      index: -1,
      start: 0,
      dot: opts.dot === true,
      consumed: "",
      output: "",
      prefix: "",
      backtrack: false,
      negated: false,
      brackets: 0,
      braces: 0,
      parens: 0,
      quotes: 0,
      globstar: false,
      tokens
    };
    input = utils.removePrefix(input, state);
    len = input.length;
    const extglobs = [];
    const braces = [];
    const stack = [];
    let prev = bos;
    let value;
    const eos = () => state.index === len - 1;
    const peek = state.peek = (n = 1) => input[state.index + n];
    const advance = state.advance = () => input[++state.index] || "";
    const remaining = () => input.slice(state.index + 1);
    const consume = (value = "", num = 0) => {
      state.consumed += value;
      state.index += num;
    };
    const append = (token) => {
      state.output += token.output != null ? token.output : token.value;
      consume(token.value);
    };
    const negate = () => {
      let count = 1;
      while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
        advance();
        state.start++;
        count++;
      }
      if (count % 2 === 0) {
        return false;
      }
      state.negated = true;
      state.start++;
      return true;
    };
    const increment = (type) => {
      state[type]++;
      stack.push(type);
    };
    const decrement = (type) => {
      state[type]--;
      stack.pop();
    };
    const push = (tok) => {
      if (prev.type === "globstar") {
        const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
        const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
        if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "star";
          prev.value = "*";
          prev.output = star;
          state.output += prev.output;
        }
      }
      if (extglobs.length && tok.type !== "paren") {
        extglobs[extglobs.length - 1].inner += tok.value;
      }
      if (tok.value || tok.output)
        append(tok);
      if (prev && prev.type === "text" && tok.type === "text") {
        prev.output = (prev.output || prev.value) + tok.value;
        prev.value += tok.value;
        return;
      }
      tok.prev = prev;
      tokens.push(tok);
      prev = tok;
    };
    const extglobOpen = (type, value) => {
      const token = { ...EXTGLOB_CHARS[value], conditions: 1, inner: "" };
      token.prev = prev;
      token.parens = state.parens;
      token.output = state.output;
      token.startIndex = state.index;
      token.tokensIndex = tokens.length;
      const output = (opts.capture ? "(" : "") + token.open;
      increment("parens");
      push({ type, value, output: state.output ? "" : ONE_CHAR });
      push({ type: "paren", extglob: true, value: advance(), output });
      extglobs.push(token);
    };
    const extglobClose = (token) => {
      const literal = input.slice(token.startIndex, state.index + 1);
      const body = input.slice(token.startIndex + 2, state.index);
      const analysis = analyzeRepeatedExtglob(body, opts);
      if ((token.type === "plus" || token.type === "star") && analysis.risky) {
        const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : undefined;
        const open = tokens[token.tokensIndex];
        open.type = "text";
        open.value = literal;
        open.output = safeOutput || utils.escapeRegex(literal);
        for (let i = token.tokensIndex + 1;i < tokens.length; i++) {
          tokens[i].value = "";
          tokens[i].output = "";
          delete tokens[i].suffix;
        }
        state.output = token.output + open.output;
        state.backtrack = true;
        push({ type: "paren", extglob: true, value, output: "" });
        decrement("parens");
        return;
      }
      let output = token.close + (opts.capture ? ")" : "");
      let rest;
      if (token.type === "negate") {
        let extglobStar = star;
        if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
          extglobStar = globstar(opts);
        }
        if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
          output = token.close = `)$))${extglobStar}`;
        }
        if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
          const expression = parse(rest, { ...options, fastpaths: false }).output;
          output = token.close = `)${expression})${extglobStar})`;
        }
        if (token.prev.type === "bos") {
          state.negatedExtglob = true;
        }
      }
      push({ type: "paren", extglob: true, value, output });
      decrement("parens");
    };
    if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
      let backslashes = false;
      let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
        if (first === "\\") {
          backslashes = true;
          return m;
        }
        if (first === "?") {
          if (esc) {
            return esc + first + (rest ? QMARK.repeat(rest.length) : "");
          }
          if (index === 0) {
            return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
          }
          return QMARK.repeat(chars.length);
        }
        if (first === ".") {
          return DOT_LITERAL.repeat(chars.length);
        }
        if (first === "*") {
          if (esc) {
            return esc + first + (rest ? star : "");
          }
          return star;
        }
        return esc ? m : `\\${m}`;
      });
      if (backslashes === true) {
        if (opts.unescape === true) {
          output = output.replace(/\\/g, "");
        } else {
          output = output.replace(/\\+/g, (m) => {
            return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
          });
        }
      }
      if (output === input && opts.contains === true) {
        state.output = input;
        return state;
      }
      state.output = utils.wrapOutput(output, state, options);
      return state;
    }
    while (!eos()) {
      value = advance();
      if (value === "\x00") {
        continue;
      }
      if (value === "\\") {
        const next = peek();
        if (next === "/" && opts.bash !== true) {
          continue;
        }
        if (next === "." || next === ";") {
          continue;
        }
        if (!next) {
          value += "\\";
          push({ type: "text", value });
          continue;
        }
        const match = /^\\+/.exec(remaining());
        let slashes = 0;
        if (match && match[0].length > 2) {
          slashes = match[0].length;
          state.index += slashes;
          if (slashes % 2 !== 0) {
            value += "\\";
          }
        }
        if (opts.unescape === true) {
          value = advance();
        } else {
          value += advance();
        }
        if (state.brackets === 0) {
          push({ type: "text", value });
          continue;
        }
      }
      if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
        if (opts.posix !== false && value === ":") {
          const inner = prev.value.slice(1);
          if (inner.includes("[")) {
            prev.posix = true;
            if (inner.includes(":")) {
              const idx = prev.value.lastIndexOf("[");
              const pre = prev.value.slice(0, idx);
              const rest = prev.value.slice(idx + 2);
              const posix = POSIX_REGEX_SOURCE[rest];
              if (posix) {
                prev.value = pre + posix;
                state.backtrack = true;
                advance();
                if (!bos.output && tokens.indexOf(prev) === 1) {
                  bos.output = ONE_CHAR;
                }
                continue;
              }
            }
          }
        }
        if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
          value = `\\${value}`;
        }
        if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
          value = `\\${value}`;
        }
        if (opts.posix === true && value === "!" && prev.value === "[") {
          value = "^";
        }
        prev.value += value;
        append({ value });
        continue;
      }
      if (state.quotes === 1 && value !== '"') {
        value = utils.escapeRegex(value);
        prev.value += value;
        append({ value });
        continue;
      }
      if (value === '"') {
        state.quotes = state.quotes === 1 ? 0 : 1;
        if (opts.keepQuotes === true) {
          push({ type: "text", value });
        }
        continue;
      }
      if (value === "(") {
        increment("parens");
        push({ type: "paren", value });
        continue;
      }
      if (value === ")") {
        if (state.parens === 0 && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError("opening", "("));
        }
        const extglob = extglobs[extglobs.length - 1];
        if (extglob && state.parens === extglob.parens + 1) {
          extglobClose(extglobs.pop());
          continue;
        }
        push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
        decrement("parens");
        continue;
      }
      if (value === "[") {
        if (opts.nobracket === true || !remaining().includes("]")) {
          if (opts.nobracket !== true && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("closing", "]"));
          }
          value = `\\${value}`;
        } else {
          increment("brackets");
        }
        push({ type: "bracket", value });
        continue;
      }
      if (value === "]") {
        if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
          push({ type: "text", value, output: `\\${value}` });
          continue;
        }
        if (state.brackets === 0) {
          if (opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "["));
          }
          push({ type: "text", value, output: `\\${value}` });
          continue;
        }
        decrement("brackets");
        const prevValue = prev.value.slice(1);
        if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
          value = `/${value}`;
        }
        prev.value += value;
        append({ value });
        if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
          continue;
        }
        const escaped = utils.escapeRegex(prev.value);
        state.output = state.output.slice(0, -prev.value.length);
        if (opts.literalBrackets === true) {
          state.output += escaped;
          prev.value = escaped;
          continue;
        }
        prev.value = `(${capture}${escaped}|${prev.value})`;
        state.output += prev.value;
        continue;
      }
      if (value === "{" && opts.nobrace !== true) {
        increment("braces");
        const open = {
          type: "brace",
          value,
          output: "(",
          outputIndex: state.output.length,
          tokensIndex: state.tokens.length
        };
        braces.push(open);
        push(open);
        continue;
      }
      if (value === "}") {
        const brace = braces[braces.length - 1];
        if (opts.nobrace === true || !brace) {
          push({ type: "text", value, output: value });
          continue;
        }
        let output = ")";
        if (brace.dots === true) {
          const arr = tokens.slice();
          const range = [];
          for (let i = arr.length - 1;i >= 0; i--) {
            tokens.pop();
            if (arr[i].type === "brace") {
              break;
            }
            if (arr[i].type !== "dots") {
              range.unshift(arr[i].value);
            }
          }
          output = expandRange(range, opts);
          state.backtrack = true;
        }
        if (brace.comma !== true && brace.dots !== true) {
          const out = state.output.slice(0, brace.outputIndex);
          const toks = state.tokens.slice(brace.tokensIndex);
          brace.value = brace.output = "\\{";
          value = output = "\\}";
          state.output = out;
          for (const t of toks) {
            state.output += t.output || t.value;
          }
        }
        push({ type: "brace", value, output });
        decrement("braces");
        braces.pop();
        continue;
      }
      if (value === "|") {
        if (extglobs.length > 0) {
          extglobs[extglobs.length - 1].conditions++;
        }
        push({ type: "text", value });
        continue;
      }
      if (value === ",") {
        let output = value;
        const brace = braces[braces.length - 1];
        if (brace && stack[stack.length - 1] === "braces") {
          brace.comma = true;
          output = "|";
        }
        push({ type: "comma", value, output });
        continue;
      }
      if (value === "/") {
        if (prev.type === "dot" && state.index === state.start + 1) {
          state.start = state.index + 1;
          state.consumed = "";
          state.output = "";
          tokens.pop();
          prev = bos;
          continue;
        }
        push({ type: "slash", value, output: SLASH_LITERAL });
        continue;
      }
      if (value === ".") {
        if (state.braces > 0 && prev.type === "dot") {
          if (prev.value === ".")
            prev.output = DOT_LITERAL;
          const brace = braces[braces.length - 1];
          prev.type = "dots";
          prev.output += value;
          prev.value += value;
          brace.dots = true;
          continue;
        }
        if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
          push({ type: "text", value, output: DOT_LITERAL });
          continue;
        }
        push({ type: "dot", value, output: DOT_LITERAL });
        continue;
      }
      if (value === "?") {
        const isGroup = prev && prev.value === "(";
        if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          extglobOpen("qmark", value);
          continue;
        }
        if (prev && prev.type === "paren") {
          const next = peek();
          let output = value;
          if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
            output = `\\${value}`;
          }
          push({ type: "text", value, output });
          continue;
        }
        if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
          push({ type: "qmark", value, output: QMARK_NO_DOT });
          continue;
        }
        push({ type: "qmark", value, output: QMARK });
        continue;
      }
      if (value === "!") {
        if (opts.noextglob !== true && peek() === "(") {
          if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
            extglobOpen("negate", value);
            continue;
          }
        }
        if (opts.nonegate !== true && state.index === 0) {
          negate();
          continue;
        }
      }
      if (value === "+") {
        if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          extglobOpen("plus", value);
          continue;
        }
        if (prev && prev.value === "(" || opts.regex === false) {
          push({ type: "plus", value, output: PLUS_LITERAL });
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
          push({ type: "plus", value });
          continue;
        }
        push({ type: "plus", value: PLUS_LITERAL });
        continue;
      }
      if (value === "@") {
        if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          push({ type: "at", extglob: true, value, output: "" });
          continue;
        }
        push({ type: "text", value });
        continue;
      }
      if (value !== "*") {
        if (value === "$" || value === "^") {
          value = `\\${value}`;
        }
        const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
        if (match) {
          value += match[0];
          state.index += match[0].length;
        }
        push({ type: "text", value });
        continue;
      }
      if (prev && (prev.type === "globstar" || prev.star === true)) {
        prev.type = "star";
        prev.star = true;
        prev.value += value;
        prev.output = star;
        state.backtrack = true;
        state.globstar = true;
        consume(value);
        continue;
      }
      let rest = remaining();
      if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
        extglobOpen("star", value);
        continue;
      }
      if (prev.type === "star") {
        if (opts.noglobstar === true) {
          consume(value);
          continue;
        }
        const prior = prev.prev;
        const before = prior.prev;
        const isStart = prior.type === "slash" || prior.type === "bos";
        const afterStar = before && (before.type === "star" || before.type === "globstar");
        if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
          push({ type: "star", value, output: "" });
          continue;
        }
        const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
        const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
        if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
          push({ type: "star", value, output: "" });
          continue;
        }
        while (rest.slice(0, 3) === "/**") {
          const after = input[state.index + 4];
          if (after && after !== "/") {
            break;
          }
          rest = rest.slice(3);
          consume("/**", 3);
        }
        const isEnd = eos() || state.parens > 0 && rest === ")".repeat(state.parens) && !extglobs.some((extglob) => extglob.type === "negate");
        if (prior.type === "bos" && eos()) {
          prev.type = "globstar";
          prev.value += value;
          prev.output = globstar(opts);
          state.output = prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && isEnd) {
          state.output = state.output.slice(0, -(prior.output + prev.output).length);
          prior.output = `(?:${prior.output}`;
          prev.type = "globstar";
          prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
          prev.value += value;
          state.globstar = true;
          state.output += prior.output + prev.output;
          consume(value);
          continue;
        }
        if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
          const end = rest[1] !== undefined ? "|$" : "";
          state.output = state.output.slice(0, -(prior.output + prev.output).length);
          prior.output = `(?:${prior.output}`;
          prev.type = "globstar";
          prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
          prev.value += value;
          state.output += prior.output + prev.output;
          state.globstar = true;
          consume(value + advance());
          push({ type: "slash", value: "/", output: "" });
          continue;
        }
        if (prior.type === "bos" && rest[0] === "/") {
          prev.type = "globstar";
          prev.value += value;
          prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
          state.output = prev.output;
          state.globstar = true;
          consume(value + advance());
          push({ type: "slash", value: "/", output: "" });
          continue;
        }
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = "globstar";
        prev.output = globstar(opts);
        prev.value += value;
        state.output += prev.output;
        state.globstar = true;
        consume(value);
        continue;
      }
      const token = { type: "star", value, output: star };
      if (opts.bash === true) {
        token.output = ".*?";
        if (prev.type === "bos" || prev.type === "slash") {
          token.output = nodot + token.output;
        }
        push(token);
        continue;
      }
      if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
        token.output = value;
        push(token);
        continue;
      }
      if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
        if (prev.type === "dot") {
          state.output += NO_DOT_SLASH;
          prev.output += NO_DOT_SLASH;
        } else if (opts.dot === true) {
          state.output += NO_DOTS_SLASH;
          prev.output += NO_DOTS_SLASH;
        } else {
          state.output += nodot;
          prev.output += nodot;
        }
        if (peek() !== "*") {
          state.output += ONE_CHAR;
          prev.output += ONE_CHAR;
        }
      }
      push(token);
    }
    while (state.brackets > 0) {
      if (opts.strictBrackets === true)
        throw new SyntaxError(syntaxError("closing", "]"));
      state.output = utils.escapeLast(state.output, "[");
      decrement("brackets");
    }
    while (state.parens > 0) {
      if (opts.strictBrackets === true)
        throw new SyntaxError(syntaxError("closing", ")"));
      state.output = utils.escapeLast(state.output, "(");
      decrement("parens");
    }
    while (state.braces > 0) {
      if (opts.strictBrackets === true)
        throw new SyntaxError(syntaxError("closing", "}"));
      state.output = utils.escapeLast(state.output, "{");
      decrement("braces");
    }
    if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
      push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
    }
    if (state.backtrack === true) {
      state.output = "";
      for (const token of state.tokens) {
        state.output += token.output != null ? token.output : token.value;
        if (token.suffix) {
          state.output += token.suffix;
        }
      }
    }
    return state;
  };
  parse.fastpaths = (input, options) => {
    const opts = { ...options };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    const len = input.length;
    if (len > max) {
      throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    input = REPLACEMENTS[input] || input;
    const {
      DOT_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOTS_SLASH,
      STAR,
      START_ANCHOR
    } = constants.globChars(opts.windows);
    const nodot = opts.dot ? NO_DOTS : NO_DOT;
    const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
    const capture = opts.capture ? "" : "?:";
    const state = { negated: false, prefix: "" };
    let star = opts.bash === true ? ".*?" : STAR;
    if (opts.capture) {
      star = `(${star})`;
    }
    const globstar = (opts) => {
      if (opts.noglobstar === true)
        return star;
      return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const create = (str) => {
      switch (str) {
        case "*":
          return `${nodot}${ONE_CHAR}${star}`;
        case ".*":
          return `${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "*.*":
          return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "*/*":
          return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
        case "**":
          return nodot + globstar(opts);
        case "**/*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
        case "**/*.*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "**/.*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
        default: {
          const match = /^(.*?)\.(\w+)$/.exec(str);
          if (!match)
            return;
          const source = create(match[1]);
          if (!source)
            return;
          return source + DOT_LITERAL + match[2];
        }
      }
    };
    const output = utils.removePrefix(input, state);
    let source = create(output);
    if (source && opts.strictSlashes !== true) {
      source += `${SLASH_LITERAL}?`;
    }
    return source;
  };
  module2.exports = parse;
});

// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS(function(exports2, module2) {
  var scan = require_scan();
  var parse = require_parse();
  var utils = require_utils();
  var constants = require_constants();
  var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
  var picomatch = (glob, options, returnState = false) => {
    if (Array.isArray(glob)) {
      const fns = glob.map((input) => picomatch(input, options, returnState));
      const arrayMatcher = (str) => {
        for (const isMatch of fns) {
          const state = isMatch(str);
          if (state)
            return state;
        }
        return false;
      };
      return arrayMatcher;
    }
    const isState = isObject(glob) && glob.tokens && glob.input;
    if (glob === "" || typeof glob !== "string" && !isState) {
      throw new TypeError("Expected pattern to be a non-empty string");
    }
    const opts = options || {};
    const posix = opts.windows;
    const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
    const state = regex.state;
    delete regex.state;
    let isIgnored = () => false;
    if (opts.ignore) {
      const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
      isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
    }
    const matcher = (input, returnObject = false) => {
      const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
      const result = { glob, state, regex, posix, input, output, match, isMatch };
      if (typeof opts.onResult === "function") {
        opts.onResult(result);
      }
      if (isMatch === false) {
        result.isMatch = false;
        return returnObject ? result : false;
      }
      if (isIgnored(input)) {
        if (typeof opts.onIgnore === "function") {
          opts.onIgnore(result);
        }
        result.isMatch = false;
        return returnObject ? result : false;
      }
      if (typeof opts.onMatch === "function") {
        opts.onMatch(result);
      }
      return returnObject ? result : true;
    };
    if (returnState) {
      matcher.state = state;
    }
    return matcher;
  };
  picomatch.test = (input, regex, options, { glob, posix } = {}) => {
    if (typeof input !== "string") {
      throw new TypeError("Expected input to be a string");
    }
    if (input === "") {
      return { isMatch: false, output: "" };
    }
    const opts = options || {};
    const format = opts.format || (posix ? utils.toPosixSlashes : null);
    let match = input === glob;
    let output = match && format ? format(input) : input;
    if (match === false) {
      output = format ? format(input) : input;
      match = output === glob;
    }
    if (match === false || opts.capture === true) {
      if (opts.matchBase === true || opts.basename === true) {
        match = picomatch.matchBase(input, regex, options, posix);
      } else {
        match = regex.exec(output);
      }
    }
    return { isMatch: Boolean(match), match, output };
  };
  picomatch.matchBase = (input, glob, options, posix = options && options.windows) => {
    const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
    return regex.test(utils.basename(input, { windows: posix }));
  };
  picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
  picomatch.parse = (pattern, options) => {
    if (Array.isArray(pattern))
      return pattern.map((p) => picomatch.parse(p, options));
    return parse(pattern, { ...options, fastpaths: false });
  };
  picomatch.scan = (input, options) => scan(input, options);
  picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
    if (returnOutput === true) {
      return state.output;
    }
    const opts = options || {};
    const prepend = opts.contains ? "" : "^";
    const append = opts.contains ? "" : "$";
    let source = `${prepend}(?:${state.output})${append}`;
    if (state && state.negated === true) {
      source = `^(?!${source}).*$`;
    }
    const regex = picomatch.toRegex(source, options);
    if (returnState === true) {
      regex.state = state;
    }
    return regex;
  };
  picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
    if (!input || typeof input !== "string") {
      throw new TypeError("Expected a non-empty string");
    }
    let parsed = { negated: false, fastpaths: true };
    if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
      parsed.output = parse.fastpaths(input, options);
    }
    if (!parsed.output) {
      parsed = parse(input, options);
    }
    return picomatch.compileRe(parsed, options, returnOutput, returnState);
  };
  picomatch.toRegex = (source, options) => {
    try {
      const opts = options || {};
      return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
    } catch (err) {
      if (options && options.debug === true)
        throw err;
      return /$^/;
    }
  };
  picomatch.constants = constants;
  module2.exports = picomatch;
});

// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS(function(exports2, module2) {
  var pico = require_picomatch();
  var utils = require_utils();
  function picomatch(glob, options, returnState = false) {
    if (options && (options.windows === null || options.windows === undefined)) {
      options = { ...options, windows: utils.isWindows() };
    }
    return pico(glob, options, returnState);
  }
  Object.assign(picomatch, pico);
  module2.exports = picomatch;
});

// src/index.ts
var import_node = __toESM(require_node3(), 1);

// node_modules/vscode-languageserver-textdocument/lib/esm/main.js
class FullTextDocument {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = undefined;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      const start = this.offsetAt(range.start);
      const end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }
    return this._content;
  }
  update(changes, version) {
    for (const change of changes) {
      if (FullTextDocument.isIncremental(change)) {
        const range = getWellformedRange(change.range);
        const startOffset = this.offsetAt(range.start);
        const endOffset = this.offsetAt(range.end);
        this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
        const startLine = Math.max(range.start.line, 0);
        const endLine = Math.max(range.end.line, 0);
        let lineOffsets = this._lineOffsets;
        const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
        if (endLine - startLine === addedLineOffsets.length) {
          for (let i = 0, len = addedLineOffsets.length;i < len; i++) {
            lineOffsets[i + startLine + 1] = addedLineOffsets[i];
          }
        } else {
          if (addedLineOffsets.length < 1e4) {
            lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
          } else {
            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
          }
        }
        const diff = change.text.length - (endOffset - startOffset);
        if (diff !== 0) {
          for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length;i < len; i++) {
            lineOffsets[i] = lineOffsets[i] + diff;
          }
        }
      } else if (FullTextDocument.isFull(change)) {
        this._content = change.text;
        this._lineOffsets = undefined;
      } else {
        throw new Error("Unknown change event received");
      }
    }
    this._version = version;
  }
  getLineOffsets() {
    if (this._lineOffsets === undefined) {
      this._lineOffsets = computeLineOffsets(this._content, true);
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    const lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return { line: 0, character: offset };
    }
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    const line = low - 1;
    offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
    return { line, character: offset - lineOffsets[line] };
  }
  offsetAt(position) {
    const lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    const lineOffset = lineOffsets[position.line];
    if (position.character <= 0) {
      return lineOffset;
    }
    const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    const offset = Math.min(lineOffset + position.character, nextLineOffset);
    return this.ensureBeforeEOL(offset, lineOffset);
  }
  getLineRange(line) {
    const lineOffsets = this.getLineOffsets();
    if (line >= lineOffsets.length) {
      const lastLine = lineOffsets.length - 1;
      return { start: { line: lastLine, character: 0 }, end: { line: lastLine, character: this._content.length - lineOffsets[lastLine] } };
    } else if (line < 0) {
      return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
    }
    const startOffset = lineOffsets[line];
    const nextLineOffset = line + 1 < lineOffsets.length ? lineOffsets[line + 1] : this._content.length;
    const endOffset = this.ensureBeforeEOL(nextLineOffset, startOffset);
    return { start: { line, character: 0 }, end: { line, character: endOffset - startOffset } };
  }
  getEOLCharacters(line) {
    const lineOffsets = this.getLineOffsets();
    if (line >= lineOffsets.length) {
      return "";
    } else if (line < 0) {
      return "";
    }
    const nextLineOffset = line + 1 < lineOffsets.length ? lineOffsets[line + 1] : this._content.length;
    const eolOffset = this.ensureBeforeEOL(nextLineOffset, lineOffsets[line]);
    return this._content.substring(eolOffset, nextLineOffset);
  }
  ensureBeforeEOL(offset, lineOffset) {
    while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
      offset--;
    }
    return offset;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(event) {
    const candidate = event;
    return candidate !== undefined && candidate !== null && typeof candidate.text === "string" && candidate.range !== undefined && (candidate.rangeLength === undefined || typeof candidate.rangeLength === "number");
  }
  static isFull(event) {
    const candidate = event;
    return candidate !== undefined && candidate !== null && typeof candidate.text === "string" && candidate.range === undefined && candidate.rangeLength === undefined;
  }
}
var TextDocument;
(function(TextDocument) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }
  TextDocument.create = create;
  function update(document, changes, version) {
    if (document instanceof FullTextDocument) {
      document.update(changes, version);
      return document;
    } else {
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
  }
  TextDocument.update = update;
  function applyEdits(document, edits) {
    const text = document.getText();
    const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
      const diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = 0;
    const spans = [];
    for (const e of sortedEdits) {
      const startOffset = document.offsetAt(e.range.start);
      if (startOffset < lastModifiedOffset) {
        throw new Error("Overlapping edit");
      } else if (startOffset > lastModifiedOffset) {
        spans.push(text.substring(lastModifiedOffset, startOffset));
      }
      if (e.newText.length) {
        spans.push(e.newText);
      }
      lastModifiedOffset = document.offsetAt(e.range.end);
    }
    spans.push(text.substr(lastModifiedOffset));
    return spans.join("");
  }
  TextDocument.applyEdits = applyEdits;
})(TextDocument || (TextDocument = {}));
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i++] = left[leftIdx++];
    } else {
      data[i++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i = 0;i < text.length; i++) {
    const ch = text.charCodeAt(i);
    if (isEOL(ch)) {
      if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
        i++;
      }
      result.push(textOffset + i + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start = range.start;
  const end = range.end;
  if (start.line > end.line || start.line === end.line && start.character > end.character) {
    return { start: end, end: start };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}

// src/index.ts
var import_picomatch = __toESM(require_picomatch2(), 1);
var fsSync = __toESM(require("fs"), 1);
var path4 = __toESM(require("path"), 1);
var import_url = require("url");

// src/config.ts
var os = __toESM(require("os"), 1);
var path = __toESM(require("path"), 1);
var DEFAULT_PROMPT = [
  "Determine the natural language the file below is written in.",
  "If its prose is already in {{targetLanguage}}, output exactly {{skipSentinel}}",
  "and nothing else.",
  "Otherwise translate it into {{targetLanguage}}:",
  "preserve all formatting, markup, and code blocks exactly,",
  "translate only prose, and leave code, identifiers, and URLs untouched.",
  "Output only the translated file, with no commentary or fences.",
  "A file with no prose at all counts as already in {{targetLanguage}}."
].join(" ");
var DEFAULT_AGENTS = {
  pi: {
    command: "pi",
    args: ["--print", "--mode", "text", "--", "{{prompt}}", "@{{file}}"],
    modelArgs: ["--model", "{{model}}"],
    stdin: "none"
  },
  claude: {
    command: "claude",
    args: ["-p", "{{prompt}}"],
    modelArgs: ["--model", "{{model}}"],
    stdin: "content"
  },
  antigravity: {
    command: "agy",
    args: [
      "-p",
      `{{prompt}}

---
{{content}}`,
      "--disable-slash-commands"
    ],
    modelArgs: ["--model", "{{model}}"],
    defaultModel: "gemini-3.8-flash-low",
    stdin: "none"
  }
};
var DEFAULTS = {
  agent: "pi",
  model: null,
  targetLanguage: "English",
  prompt: DEFAULT_PROMPT,
  skipSentinel: "AI-LENS-NO-CHANGE",
  include: [],
  exclude: ["**/node_modules/**", "**/.git/**", "**/target/**", "**/dist/**"],
  cacheDir: path.join(os.homedir(), ".cache", "zed-ai-lens"),
  maxCacheEntries: 50,
  zedBinary: "zed",
  preview: { enabled: false, port: 7391, open: false },
  openInEditor: true,
  readOnlyOutput: true,
  maxAutoBytes: 20000,
  timeoutMs: 300000,
  agents: DEFAULT_AGENTS
};
function expandHome(p) {
  if (p === "~")
    return os.homedir();
  if (p.startsWith("~/"))
    return path.join(os.homedir(), p.slice(2));
  return p;
}
function asStringArray(value, fallback) {
  if (!Array.isArray(value))
    return fallback;
  return value.filter((v) => typeof v === "string");
}
function resolveConfig(raw) {
  const opts = raw ?? {};
  const agents = { ...DEFAULT_AGENTS };
  const rawAgents = opts.agents;
  if (rawAgents && typeof rawAgents === "object") {
    for (const [name, spec] of Object.entries(rawAgents)) {
      if (!spec || typeof spec !== "object")
        continue;
      const base = agents[name] ?? { command: name, args: [], stdin: "content" };
      agents[name] = { ...base, ...spec };
    }
  }
  return {
    agent: typeof opts.agent === "string" ? opts.agent : DEFAULTS.agent,
    model: typeof opts.model === "string" && opts.model ? opts.model : DEFAULTS.model,
    targetLanguage: typeof opts.targetLanguage === "string" ? opts.targetLanguage : DEFAULTS.targetLanguage,
    prompt: typeof opts.prompt === "string" ? opts.prompt : DEFAULTS.prompt,
    skipSentinel: typeof opts.skipSentinel === "string" && opts.skipSentinel ? opts.skipSentinel : DEFAULTS.skipSentinel,
    include: asStringArray(opts.include, DEFAULTS.include),
    exclude: asStringArray(opts.exclude, DEFAULTS.exclude),
    cacheDir: expandHome(typeof opts.cacheDir === "string" ? opts.cacheDir : DEFAULTS.cacheDir),
    zedBinary: typeof opts.zedBinary === "string" && opts.zedBinary ? opts.zedBinary : DEFAULTS.zedBinary,
    maxCacheEntries: typeof opts.maxCacheEntries === "number" ? opts.maxCacheEntries : DEFAULTS.maxCacheEntries,
    preview: {
      ...DEFAULTS.preview,
      ...opts.preview ?? {}
    },
    openInEditor: typeof opts.openInEditor === "boolean" ? opts.openInEditor : DEFAULTS.openInEditor,
    readOnlyOutput: typeof opts.readOnlyOutput === "boolean" ? opts.readOnlyOutput : DEFAULTS.readOnlyOutput,
    maxAutoBytes: typeof opts.maxAutoBytes === "number" ? opts.maxAutoBytes : DEFAULTS.maxAutoBytes,
    timeoutMs: typeof opts.timeoutMs === "number" ? opts.timeoutMs : DEFAULTS.timeoutMs,
    agents
  };
}
function template(input, vars) {
  return input.replace(/\{\{(\w+)\}\}/g, (match, key) => (key in vars) ? vars[key] : match);
}

// src/agent.ts
var import_child_process = require("child_process");
function buildArgs(opts) {
  const model = opts.model ?? opts.spec.defaultModel ?? null;
  const vars = {
    prompt: opts.prompt,
    file: opts.filePath,
    filename: opts.fileName,
    content: opts.content,
    model: model ?? ""
  };
  const modelArgs = model ? opts.spec.modelArgs ?? [] : [];
  return [...modelArgs, ...opts.spec.args].map((arg) => template(arg, vars));
}
function runAgent(opts) {
  const args = buildArgs(opts);
  return new Promise((resolve, reject) => {
    const child = import_child_process.spawn(opts.spec.command, args, {
      cwd: opts.cwd,
      env: opts.env,
      stdio: ["pipe", "pipe", "pipe"]
    });
    let stdout = "";
    let stderr = "";
    let settled = false;
    const timer = setTimeout(() => {
      if (settled)
        return;
      settled = true;
      child.kill("SIGKILL");
      reject(new Error(`agent timed out after ${opts.timeoutMs}ms`));
    }, opts.timeoutMs);
    const finish = (err, value) => {
      if (settled)
        return;
      settled = true;
      clearTimeout(timer);
      if (err)
        reject(err);
      else
        resolve(value);
    };
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("error", (err) => {
      finish(new Error(`failed to run '${opts.spec.command}': ${err.message}. Is it installed and on PATH?`));
    });
    child.on("close", (code) => {
      if (code === 0) {
        finish(null, stdout);
      } else {
        const detail = stderr.trim() || stdout.trim() || "(no output)";
        finish(new Error(`'${opts.spec.command}' exited with ${code}: ${detail}`));
      }
    });
    if (opts.spec.stdin === "content") {
      child.stdin.end(opts.content);
    } else {
      child.stdin.end();
    }
  });
}

// src/backend.ts
class SubprocessBackend {
  name;
  spec;
  constructor(name, spec) {
    this.name = name;
    this.spec = spec;
  }
  translate(req) {
    return runAgent({ spec: this.spec, ...req });
  }
}
function resolveBackend(config) {
  const spec = config.agents[config.agent];
  if (!spec) {
    const known = Object.keys(config.agents).join(", ");
    throw new Error(`unknown agent '${config.agent}'. Configured agents: ${known}`);
  }
  return new SubprocessBackend(config.agent, spec);
}

// node_modules/n-gram/index.js
var bigram = nGram(2);
var trigram = nGram(3);
function nGram(n) {
  if (typeof n !== "number" || Number.isNaN(n) || n < 1 || n === Number.POSITIVE_INFINITY) {
    throw new Error("`" + n + "` is not a valid argument for `n-gram`");
  }
  return grams;
  function grams(value) {
    const nGrams = [];
    if (value === null || value === undefined) {
      return nGrams;
    }
    const source = typeof value.slice === "function" ? value : String(value);
    let index = source.length - n + 1;
    if (index < 1) {
      return nGrams;
    }
    while (index--) {
      nGrams[index] = source.slice(index, index + n);
    }
    return nGrams;
  }
}

// node_modules/collapse-white-space/index.js
var js = /\s+/g;
var html = /[\t\n\v\f\r ]+/g;
function collapseWhiteSpace(value, options) {
  if (!options) {
    options = {};
  } else if (typeof options === "string") {
    options = { style: options };
  }
  const replace = options.preserveLineEndings ? replaceLineEnding : replaceSpace;
  return String(value).replace(options.style === "html" ? html : js, options.trim ? trimFactory(replace) : replace);
}
function replaceLineEnding(value) {
  const match = /\r?\n|\r/.exec(value);
  return match ? match[0] : " ";
}
function replaceSpace() {
  return " ";
}
function trimFactory(replace) {
  return dropOrReplace;
  function dropOrReplace(value, index, all) {
    return index === 0 || index + value.length === all.length ? "" : replace(value);
  }
}

// node_modules/trigram-utils/index.js
var own = {}.hasOwnProperty;
function clean(value) {
  if (value === null || value === undefined) {
    return "";
  }
  return collapseWhiteSpace(String(value).replace(/[\u0021-\u0040]+/g, " ")).trim().toLowerCase();
}
function trigrams(value) {
  return trigram(" " + clean(value) + " ");
}
function asDictionary(value) {
  const values = trigrams(value);
  const dictionary = {};
  let index = -1;
  while (++index < values.length) {
    if (own.call(dictionary, values[index])) {
      dictionary[values[index]]++;
    } else {
      dictionary[values[index]] = 1;
    }
  }
  return dictionary;
}
function asTuples(value) {
  const dictionary = asDictionary(value);
  const tuples = [];
  let trigram;
  for (trigram in dictionary) {
    if (own.call(dictionary, trigram)) {
      tuples.push([trigram, dictionary[trigram]]);
    }
  }
  tuples.sort(sort);
  return tuples;
}
function sort(a, b) {
  return a[1] - b[1];
}

// node_modules/franc-min/expressions.js
var expressions = {
  cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,
  Latin: /[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,
  Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,
  Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
  ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,
  Devanagari: /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,
  jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[\u3400-\u4DB5\u4E00-\u9FAF]/g,
  jav: /[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,
  kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
  tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,
  tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,
  guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,
  kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,
  mal: /[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,
  mya: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
  pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,
  amh: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,
  tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
  sin: /[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
  ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g
};

// node_modules/franc-min/data.js
var data = {
  Latin: {
    spa: " de|de |os | la| a |la | y |ón |ión|es |ere|rec|ien|o a|der|ció|cho|ech|en |a p|ent|a l|aci|el |na |ona|e d| co|as |da | to|al |ene| en|tod| pe|e l| el|ho |nte| su|per|a t|ad | ti|ers|tie| se|rso|son|e s| pr|o d|oda|te |cia|n d| es|dad|ida| in|ne |est|ion|cio|s d|con|a e| po|men| li|n e|nci|res|su |to |tra| re| lo|tad| na|los|a s| o |ia |que| pa|rá |pro| un|s y|ual|s e|lib|nac|do |ra |er |a d|ue | qu|e e|sta|nal|ar |nes|ica|a c|ser|or |ter|se |por|cci|io |del|l d|des|ado|les|one|a a|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|dos|e a|imi|o s|e c|ert|las|o p|ant|dic|nto| al|ara|ibe|enc|o e|s l|cas| as|e p|ten|ali|o t|soc|y l|n c|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar|l t| ma|l e|pre| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|ta |cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|y d|nid|e i|odo|ios|o y|esp|iva|y e|mat|bli|r a|drá|tri|cti|tal|rim|ont|erá|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|n l|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",
    eng: "the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",
    por: "de | de| se|ão |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|ção| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| à |ual| em| su|açã|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|rá |qua|a d| pa|com|ais|o c|ame|erá| po|uer|sta|ber|ter| o |ess|ra |e e|das|o à|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|ênc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|uçã|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|ém |ime|tic|dis|raç|eci|ara| ca|nid|tru|ões|ass|seu|por|a a|m p| ex|so |r i|eçã|teç|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|ça |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ruç|ins|çõe|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|uém|gué|ngu|nin| ni|gur|la |pen|nça|na |içã|ião|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|á a|rem|ei |omo|rec|for|s f|esc|ant|à s| vi|o q|ver|a u|nda|und|fun",
    ind: "an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",
    fra: " de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | à |t d|roi|dro| dr| le|té |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l’|t à| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |à l|nne|ons|ité|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d’| re|é d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| dé|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|és | na|us |com|our|ali|tra| ce|al |e o|e n|rté|ber|ibe|tes|r d|e r|its| di|êtr|pou|été|s c|à u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |éga| êt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| ét|t ê|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|ée |ser|l n| pl|anc|lig|t s|n e|s i|t e| ég|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pré|peu|rit|é e|t é|bre|sen|ill|l’a|d’a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l’e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|rés|cla|tés|oir|eut|e f|utr|doi|ibr|ais|ins|éra|’en|iét|l e|s é|nté| ré|ssi| as|nse|ces|é a",
    deu: "en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ieß| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|für| fü|gel|öff| öf|owi|ill|wil|e v|ric|f e",
    jav: "ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",
    vie: "ng |̣c |́c | qu|à | th|nh | ng|̣i |̀n |và| va| nh|uyê| ph|quy| ca|ền|yề|̀nh|̀i |̣t | ch|ó | tr|ngư|i n| gi|gươ|ời|ườ|́t | co|ượ| cu|ác|ự |ợc| kh| đư|đươ| tư|có| ha|ông|c t| đê|n t|i đ|ìn|̀u |cá|gia|́i |ọi|mọ| mo|ều|iệ|đề|u c|như|pha| ba| bi|ất|̉a |ủa|củ|hôn| đô|g t|́ q|̃ng| ti|tự|t c|̣n | la|n đ|n c|n n|hiê|ch |ay |hay| vi|ân | đi| na|bả| ho|do | do| tô| hi|ội|há|ị |nà|̀ t|ới|hân| mô|́p |àn|̣ d|́ch|̣p |̀o |ào|khô|́n |ột|mộ| hô|ia |ốc|c h|hữ|i v|g n|́ng|uố|quô|h t|ôn |ên |n v|nhâ|̣ t| bâ|i c|g v|̉ng|iế|c c|ật|thư|hư |ướ|̉n | vơ| cô|c đ| đo| sư|t t|ộc|ữn|vớ| vê|ả |̣ng|g đ|̉o |ảo|uậ| đa|bị|là|sự|bấ|hà|hộ|i t|ản|hươ|̀ng|tro|̉m |o v| mi|ể |ục|i h|ức|áp|g c|̃ h|iá|n b|̉i |a m|h c|côn|ện|ớc|hạ|độ| du| cư|a c|n h|tha|ã | xa|́o |áo|ín|̀y |g b| hư|g h|ong|ron|̀ c|cho|̀ n|mì|ực|h v|c b| lu|i b|ệ |ai |ế |̣ c|xã|kha|c q|iể|tộ|ối|đố|á |hoa|o h|h đ|cả|n l|họ|tiê|y t|̉ c|ại|án|̀ đ|oà|y đ|chi|̉ n|phâ|ề |thu|iên|dụ|o c|i m|luâ|c p|ốn|c l|́ c|ũn|cũ|c g|c n|qua|n g|c m|o n|ải|hả|́ t|ho |về| tâ| hơ|o t|ở |hứ|hì|viê|̀m |̉ t|đó|thô|ứ |cứ|hí|́nh|ày|ởn|ưở| bă|tri| ta|m v|c v|ợp|hợ|h m| nư|ết|thi|ặc|ngh|uy ",
    ita: " di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |tà |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|à e|ità|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rtà|ert|anz|eri|tut|à d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|rà |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|trà|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",
    tur: " ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kkı|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|ın |ır |nda|arı|esi|ını|dır| ta|tle|e h|ası|etl|e k| va|ı v|sın|ile|ne |rke|erk|ard|ine| sa|ınd|ini|k h|kın|ama|le |tin|rdı|var|a v| me|e m|na |sin|ere|k v| şa| bu|lan|kes|dir|rin|dan| ma|kı |mak|şah|da | te|mek| ge|nı | hi|nin|en |n h| se|lik|rle|ana|lma|e a|ı h|r ş|ill|si | de|aya|zdi|izd|aiz|hai|ret|hiç|ına| iş|e b| ba|kla|et | hü|rın|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|hür|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|ürr|bu | mi|i v|dil| il| eş|n i|la |el |mal| mü| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| iç|n s|din| di|es |mel|eke|tir|şit|eşi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |tür|a k|eye|ık |ken|uğu| uy|eml|erd|ede|ame| gö|e s|i m|tim|i b|rde|rşı|arş|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |alı| an|ndi|end|hsı|unm|rı |kor|nın| ce|maz|mse|ims|kim|iç | ay|a m|lam|ri |sız|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|ğre|öğr| öğ|al |ıyl|olm|vle|şma|i s|ger|me | da|ind|lem|i o|may|cak|çin|içi|nun|kan|ye |e y|r t|az |ç k|ece|sı |eni| mu|ulu|und|den|lun| fa|şı |ahi|l v|r a|san|kat| so|enm| ev|iş ",
    pol: " pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|ści|ci |ej | cz| za| w |ych|ośc|rze|prz| ka|wa |eni| na| je|ażd|każ|ma |zło|czł|noś|o d|łow|y c|dy |żdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|ają|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|ać |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|ńst|o s|a i|awa|e p|yst|pos|pow| ró|o o|jąc|ony|nej|owo|dow|ów | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|eńs|no |zne|a s|lwi|olw|ez |odn|rów|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|ówn|zie| ws|aln|orz|nik|o n|icz|zyn|łec|ołe|poł|aro|nar|a j|i z|tęp|stę|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|ełn|peł|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|ą p|ją |zeń|iec|pie|st |jes| to|sob|któ|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|ię |się| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|tór| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| wł|ian| dz| mo|e m|awi|ć s|gan|zez|mu |taw|dst|wią|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",
    swh: "a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",
    sun: "an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",
    ron: " de|re | în|și |are|de | și|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |în |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|nă |ă a|rea|ers|i s| li|sau| ca|rso|ent|lor|ați|al |a d|e o|men|l l|ei |e c|pri|ană| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| să|tea|lă |car|tăț|să |tur|i a|i d|nal| ni|ri |ita|e î|e ș|se |ilo|in |ia |ție|pre|fie|ții|ăți|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i î|a c|i n|a l|pen|ui |nu |ări|ală|ona|l d|ră |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|tă |că |ile|ă d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|inț|a î|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|ă î|leg|u d|e l|nde|int|a f|n a| so|naț|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i ș|rec|dep| că| o | îm|bui|ebu|reb| eg| na|mân|ntu|ili|văț|ând|iei|r ș|bil|pli|od |mod|res|din|e e|cți| au|ali|ă p|ă f|împ|ial|cia|ion|ă c|dec|nta| om|ită| fa|ță |cu |tra|ăță|nvă|înv|ât |ite|i i|lic| pu| ex|riv|tri|rot|ța |ți |l c|rta|imi|ulu|țio|ică|lig|rel|ta |cla|t î|nt |nit|e m|ânt|ămâ|țăm|ger|nța|ru |tru|gur|u c|bli|abi|ată|art|par|ar |rim|iva|l ș| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",
    hau: "da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| ƙa|cik|ne |ana|i k|ci |kki|e d|a ƙ| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|‘ya|tar| do|ɗan|ars| ‘y|sam|ƙas|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | ɗa|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |aɗa| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a ɗ|wat|ari| ƙu|on |ans|waɗ|ame|ake|kar|din|zam| fa|a l|ƙun|buw|r d| hu|oki|kok|a ‘|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n ƙ|aya|fi |n r|she|uni|bay|riy|n ‘|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|ɗin|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|aɗi",
    fuv: "de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|ɗo |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|eɗɗ|neɗ|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|ɗɗo|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|ɓe |ti |fot|aan|eyd|ydi|ɗe |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|ñaa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| ña|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| ɓe|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|ɗee|ita|ira|aaɗ|e p|nng|ma |ank|yan|nda|oo |e ɓ|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|ɗi |und| hu|inn|ŋde|aŋd|jaŋ|a d|den| fe| te|go | su|a h|haa|tal|eɗe|e b|y g|baa|tde| yi|ɗɗa|o h|iiɗ|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|aɗe|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aaɓ|daa|ind|dew|i j|jey| je|ent|tan|o ɗ|geɗ| ge|ñee|a l| ɗu|kko|mak|a s| ga",
    bos: " pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|žav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|ičn| sa|u n| dj|a t|ija|čno|jem|rža|drž|elj|stu|dna|odn|eni|za |iva|olj|šti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|ašt|zaš|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vič|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|živ|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|nič|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",
    hrv: " pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|žav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|rža|drž|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|šti|ašt|zaš|itk|živ|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|nič|kak|vni|ugi| ro|mov|ven|štv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|ći |juč|klj|nic|u k|nap|obi|atn",
    nld: "en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",
    srp: " pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|žav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|rža|drž|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|ičn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|šti|ku |nom|bit|e d|me |iko|čno|oji|lo |vno|nik|e n|đen|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|ašt|zaš|nju| sm|ani| li|dno|eđu|aln|la |akv|oj |šen|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vič|tav|itu|ude|bud| bu|pot|odu|živ|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|štv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |beđ|ist|pun|en |te |dst|rot|zak|ao |kao|i k|juć|o s|st |sam|ter|nar| me|i m|kol|e r|ušt|ruš|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",
    ckb: " he| û |ên | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |yên|e b|er |afê|tin|ke | an|iyê|eye|rke|erk|we | be|e h|de | we|hey|fê |i b|yê |ina| bê| li|diy|ber|li |re |î û|nê |ê d| se| ci|eke|di |wî | na|î y|af |ete|hem| wî|sti| ki|rî |kî |î a|yek|n d|kar| te|ne |yî |i h|e k|tî |tê |a w|e d|î b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|û b|n k|adi|ev |zad| az|ras|est|anê| ya|n h|n û|wed| tê|wek|bat|bo | bo| yê|st |n n|ê k|dan|ê h|ema|ê b|iye|î h|din|bûn|r k|ekî| me|par|ûna|ta |wle|ewl|î m| ke|nav|ewe|man|ê t|dî |û m|mû |emû|a m|ika|e û|n w|a x|ê m|e n| ta|ela|n j|eyê|n x|civ|wey|ana| re|khe|ekh|bik|kê |jî |f h|erî| pa|îna|bin|erb|vak|iva|a s| ni|cih|vê |e j|ari| pê|î d|nên|ike|e t|a k|ê x| ye|n a|eyî|n e|ama|bê |ar |ewa|atê|bes|rbe|av |ibe|ist|mî |tem|awa|are|hî |geh|nge|ing|nek|nûn|anû|qan| qa|vî |rti|uke|tuk| şe|eza| da|u d|û a|f û|edi| ra|tu |tiy|tên| mi|xeb| ge|hîn| hî|etê|î j|stî|mal|bib|ra |i d|e m|mam|i a|nik|i m|î k| wi|ûn | ko|a ş|ê j|riy|lat|wel|e e|ine|ane|û h|în |a d|siy|end|aye| za|ija|a n|î n|ek |tek|yet|mbe|emb|û d|rov|iro|mir|eba| xe|mên| ên| hu|nîn|anî|t û|ten|n m|dem|ê û|enê|te |art|i r| jî|u j|ekê|dew",
    yor: " ní|ti |ọ́ |ní | lá| ẹ̀|àn |ẹ́ |kan|tí | tí|an |ẹ̀ |tọ́|ọ̀ | ẹn|ọn |wọn|í ẹ|bí |áti|lát|̀tọ|ẹ̀t| gb| àt| àw|n l|àti| a |lẹ̀|ẹnì| ó |kọ̀| ló|ì k|sí |ọ̀k| kọ|ra |ni |àbí|tàb| tà|nì | sí|̀ka|ọ̀ọ|n ẹ|àwọ|n t|ó n|̀ọ̀|ílẹ|orí|ló | wọ|tó |dè |ìyà|ún | tó| or|í ì|èdè|kò |‐èd|̀‐è|ẹ̀‐|ríl|í ó|rẹ̀|í à| sì|yàn|gbo|ṣe | kò|í a| rẹ| jẹ|sì | bá|ràn| ṣe|wọ́|nìy|fún| fú|n à|ba |n n|gbà|gbọ|jẹ́|un |ìí | kí|gba|ènì| èn|bá |́ l|a k| ka|dọ̀|kí | òm|in | fi|bò |fi |bẹ́|ọdọ|bọd|́ s|hun|nú |nín|wà |ira|nir|òmì|ìgb| ìg|́ t|ẹni|ínú|i l|ìni|mìn|bà |áà |i ì|ohu| oh|í i|ara| ti|bo |ò l| pé|rú |írà| ọ̀|í ò|ogb|kọ́|pọ̀|ó b|à t|i n|lọ́|ẹ́n| ìb|yìí|gbé|gẹ́|bog|óò |yóò| yó|n k|pé |dá |́wọ|ọ́w|à l|í k| wà|n o|jọ | ir|ọ̀r|ú ì|́ à|ó s|i t|ṣẹ́|̀kọ|í t|yé |lè | lè|fin|àbò| lọ|à n|ùjọ|wùj|irú|ó j| ar|í w|a w| ìm|ú à|̀ t|òfi| òf| àà|fẹ́|àwù|́ni|wù |ìír|mìí| mì|láì| yì|í g|ọ́n|n s|i ẹ|ẹ̀k|àgb|ígb|níg|a n| kú|láà|í o|náà| ná|kẹ́|ípa|níp|ìn | ìk|bé |i g|ọmọ| ọm|i à|iṣẹ|̀ à|ìmọ|n a|n f|jẹ |yí |́ ọ|ó d|́ ò| dá| mú|ààb|ábẹ|láb|ìbá|ò g|jú |i o|lú | èt|̀ ẹ|tọ̀|de |̀ n|i ò| ìy|kàn|́n | bí| iṣ|mọ̀|e ẹ|̀ l| fà|èyí| èy| ìd|mọ́|dé |̀ k|́ p|ò t|mú | fẹ| ìj|rí |ìkẹ|nìk|ìní|n ì|n è|sìn|è ẹ| i |rọ̀| àn|́ b|ùn |́gb|ọ́g|dọ́| dọ|í n|rin|̀ j",
    uzn: "ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|oʻl|har|ari| oʻ|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|boʻ| eg|oʻz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|taʼ|ham|gi |ib |ʻli|mla|h v|ʻz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|gʻi|uql|n q|oda|ʼli|aʼl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|ʻzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|ʻlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",
    zlm: "an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",
    ibo: "a n|e n|ke | na| ọ |na | bụ|ọ b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e ọ| ya| ik|a o|a ọ|ma |ụla|bụl|ike| on|nke|e i|a m|ony|ụ n|kik|iki|bụ | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga‐|ha |dụ | mm|ndi|ọ n|wa |rụ |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| dị| ez|ara|we | ih|a‐e|hị |ri |n o|zi |mma|chi|dị |ghi|ụta|iri|ihe| an| oh|a y|gba|ụ ọ| ọz| ak| iw|nya|te |iwu| nt|ro |oro|e ị|zọ |ezi|me |e e|u n|her|ohe| si|a‐a|i m|ala|ụ i| ka|akw| in|ghị|kpe|n e|pụt| e |i i|i o|ide|inw|ụ o|hụ |ahụ|weg|ra |o i|kpa|adụ|mad|si |sit|a s| me|sor|i ọ|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |ụ m|ụrụ|ọrụ| ọr|mak|uso|ama|de |ị o| ọn|ọzọ|chị|egh|enw|apụ|ru | to|i a|a ụ|osi|rị |wet|hed|nch| nc| eb| al|nọd|ọnọ|uru|sir| kw|yer|ji |eny| mk|ịrị|eta| us|tu |ọ d|u ọ| o |ba | mb|ọdụ|ịch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n ọ|o m|kwu|nkw|nwa|obi| ịk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|chọ|o y|asị|otu| ot|ram|u m|ịgh|dịg|zu |nọ |mba| gb|e g|ị m|ọch|ich|pe |agb|i ị|uch|zụz|uny|wun|ọrọ| nn|na‐| di|ge |oge|iji| ij|ọha| ọh|ikp|egi|meg|o o|ụhụ|hụh|mah|n ụ|ọ g|ọta|ekọ|ị n|kwụ|agh|ụmụ|ban|kpu|okp| ah|ịkp|a k|ime| im|zụ |ụzụ|ọzụ| ụz|lit|ali|nat",
    ceb: "sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",
    tgl: "ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",
    hun: "en | sz| va| a |és |min|ek | és| mi|jog| jo|an |ind|nek|sze|ság|nde|a v|den|oga|sza|val|ga |mél|ala|emé|gy |n a|van|zem|ele| me|egy|ély| eg|zab|tás| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|ény|ség|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |eté|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|atá|z a| le|yen|es |ra |tés|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|ásá|i m|ban|kin|k m|szt| ál|ame|köz|k a|dsá|ads|ló | kö|ás |ly |on |ébe|tat|a t|n v|áll|mén| vé|nye|kül|lő |a n| cs|i é|ok |ész|ért|lla|lap|ágo|gok|nyi|tek| ke|nd |éte|ami|zés|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k é|mbe|emb|elé|ot |lis|vet|kor|ág |olg| am|szá|ehe|leh|ogo|ott|ül |nte|éle|i v|ogy|hog| ho|kel|n k|tes|nlő|enl|ssá|áza|ház|ég |vel|ába|lek|ége| ha|a h|rés| fe|ány|del|elő|át |alá|art|tar|zto|zás|tő |yil|koz|tko|aló|s k|i e|árs|tár|mze|emz| ny|más|ett|ny |fej|ass|zas| há|d a|t é|is |ésé|ezé|téb| mu|áso|sít|lye|elm|éde|véd|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|nél|t n|ti | má|ai |lás|eve|nev|zte| bá|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s é| ér|ána| es|s t|got|sül| be|vál|csa|se |ése|ad |ges|tos|ja | gy|asz|ten|lmé| tá|eze|árm|bár|ess|l s|üle",
    azj: " və|və |ər |ir | hə| bi| hü| ol|üqu|hüq|quq|na |in |lar|hər|də | şə|bir|lər|lik|mal|r b|lma|r h| tə|əxs|şəx|ən |dir|uqu|una|an |ali|a m| ma|ikd|ini|r ş|dən|ar |ilə|qun|aq |ası| ya|mək|yət| mə| mü|kdi|əsi|ək |ilm|nin|ndə|olm|əti|ə y|sin|xs |nda|lmə|yyə|i v| qa| az|olu|iyy|ya |ind|zad|qla|ün |ni |lə |tin|n m|aza|arı|ət |n t|maq|lun|lıq|ə b|un |nun|q v|n h|dan|ın | et|tmə|ərə| öz|da |ə v| on|ə a|ına|ını|bil|a b|sı |il |əmi|ara|si | di|ə m|əri|rlə| va|ə h|etm|ığı|ama|dlı|adl|rin|bər|rın|n i|müd|nın| he|mas|ik |n a|dil|alı|irl|ələ|üda|sın|ınd|xsi|li |ə d|nə | bə|əya| in|ə i|lət| sə|nı | iş|anı|eç |heç|q h|eyn|ə e|dır| da|asi|rı |iş |ifa|lığ|i s|fiə|afi|daf| ed|məz|u v|kil| ha|ola|n v|əni|ır |uq |unm| bu| as|sia|osi|sos|ili|ıdı|lıd|nma|ıq |inə|əra|sil|xil|axi|dax|adə|man|a h|ə o|onu|a q|əz | ki|seç| se|ı h|min|lan|ədə|bu |raq|lı |ılı|al |ə q|r v|nla|hsi|əhs|təh|öz |ist| is|məs| əs|ina|ə t|ətl|a v|iə |n b|tər| ta| cə|edi|ala|kim|qu |i t|ulm|məh|n o|aya|ı o|ial| so|ill|siy| də|var|ins|mi |ğı |nik|r i|aql|k h|təm|tam|çün|üçü| üç|ğın|sas|əsa|z h|əmə|zam| za|sti|rəf|n e|r a|ild|həm|ıql|yan|may|n ə|mən|mil| mi|əqi|din|n d|tün| dö|miy|kah|ika| ni|fad|tif|l o|sər|yni| ey|ana|lən|am |ril|ayə|aşı",
    ces: " pr|ní | a | ne|prá|ráv|na |ost| po|ho | sv|o n| na|vo |neb|ávo|bo |ebo|nos|má | má|ažd|kaž| ka| ro|ch |dý |ždý|ti |ou |a s| př| za|ání|á p| je| v |svo|ého| st|ý m|sti|ně | by|obo|vob|ter|pro|ení|bod| zá| sp|í a|rod|kte|by |mu |u p|o p| ná|ván|jak| ja|a p|o v|í n|ová|oli|ví |spo|roz| kt|mi |í p|ny | ma|ím |i a|do | so|odn|áro|nár|li |né |tví|at |ých|a z| vy|byl|vol|en |ýt |být| bý|t s|tní|stn|o s|í b|to | do|své|vé |ran|ejn|zák|eho|jeh|nes|pří|mí |čin|kol|ají|sou| vš|ích|it |ným|ým |nu |hra|nou|u s|ému| k |du |žen|pod| ze|kla|a v|stv|pol|dní|eré|m p|stá|je |ci |ečn| ni|néh|a n|aké|áva|maj|em |rov|í m|ké |ole|nýc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|í v|smí|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|jí |o d|sob|se | se|í s|ými|i s| i |i v| vz|ním|pra|lně|při|tát|ste|a j|aby| ab| s |oln|a o|m n|čen|slu|řís| os|zem|mez| či|lní|áln|oci|jin| ji|y b|í z|y s|va |vše|t v|ovn|chn|děl|níc|leč| pl|vat| vo|vin|rav|vou|lad|inn|é v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|ném|nez|iál|ího|len|ens|ože|oko|kéh|rac|ven|í k|e s|lán|ělá|zdě|vzd|t k|din|odi|tí | od|ré |tup|pov|pln|ště|ákl|nno|tak|erá|řed|o a|a t|res|jíc| mu|u z|rok| ob|čno|u a|y k|i j|é n|luš|ísl|oso|ciá|soc|níh|o j|cké",
    run: "ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",
    plt: "ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",
    qug: "ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ayñ|yñi|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|ñit|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| ña|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |iñi| iñ|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|ñik|uk |iña|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wiñ|ati|ska| ll|kit|n h|uti|kic|mat",
    mad: "an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",
    nya: "ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",
    zyb: "bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",
    kin: "ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",
    zul: "nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",
    swe: "ar |er |tt |ch |och| oc|ing|ätt|ill|rät|en | ti|til|för|ll | rä|nde| fö|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|ör |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| är|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| må|nge|n s|vis|lan|må |ati|nat| åt|an |nna| li| al|t f|ans|nsk|sni|gru|äll|tio|ad | me|isk|kli|s f|t i|stä|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|är |kap|a i|a r|änd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|äns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|män|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| hä|ets|häl|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|rän| pe|ilk|t l|ern|på | på|täl|d e|dom|ege|g e|tni|r a|lit|ras| så|lln|kil|ski|enn|i o|a d|erä|n a|ara| ge|äro|a m| ar|t d|ilj|els|yck| ve|g o|frå|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|öra",
    lin: "na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|’te| ’t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",
    som: " ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",
    hms: "ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",
    hnj: "it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",
    ilo: "ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw "
  },
  Cyrillic: {
    rus: " пр| и |рав| на|пра|ств|го |ени|во |ове| ка|на |ть | по|ия |о н| об|ет | в |сво| св|аво|ани|ост|ого|ый |ажд|лов|т п| им|ния| че| со|ело|име| не|льн|ли |чел|каж|ест|век|ать|ова|или| ра|ек |й ч|дый|жды| до|ие |еет|мее|но | ил|ии |ся |его|обо|и п|ние|к и| бы|и с|и и|ми |бод|воб|ван| за|ой |ых |ом |лен|аци|енн|о с|о п|ьно|тва|тво|при|ног|аль|ако|ва |и н|сти|ных|то |бра|олж|дол|сто|и в|ным|ое | ег|нов|их |ель|тел|ти |нос|не |пол|раз| вс|и о| ли|и р|ыть|быт|вле|ред|ию |тор| ос|ься|тьс|оди|щес|я и|как|про|жен|ым |пре|а с|сно|е д|нно|о и|ий | ко|о в| ни| де|сту|лжн|сов|е в|ном|оль|ран|оже|иче|ей |аст|нны| от|туп|м и|одн|зов|рес| мо|осу|ля |осн|а о|вен| то|о б|шен|тве|общ|а и|е м|ьны|обр|вер|чен|я н|жно|чес|ак |лич|нии|е и|все|бще|ват|есп|мож|й и|ное|о д|бес| во|я в|ду | ст|дно|она|нац|ден|ежд|х и| бе|и д|ны |дос|для| дл| та|льс|ате|ции|я п|ую |ите|е о|ной|под|ото|стр|ста| ме|ели| ре|я к|тоя|ами|ен |ь в|ю и|азо|гос|м п|ь п|т б|жет|уча|суд|ьст|дст|щит|ащи|защ|кон|нию|ам |оду|ере|гра|печ|о о|оро|кот|и к|тра|ник|уще|циа|оци|соц|нал|еск|о р|ког|дру| др|ни |ава|нст|ем |авн|ыми|едс|дин|дов| го| вы|в к|ые |обе|му |я е|слу|уда|так|кой|ту |иту|зак|ход|вол|раб|кто|икт|ичн|нич|от |ина| к |тер|род|нар",
    ukr: "на | пр|пра| і |рав| на| по|ня |ння| за|ого|ти |во |го | ко|аво| ма|люд|о н| не| лю|юди|ожн|кож|льн|жна|дин|ати|ає |их |ина|пов|сво| св|анн|є п|має|або|а л| бу|не |енн|бо | аб|а м|ови|ні | ви| ос|аці|вин| та|без|обо| ві| як|ере| до|і п|ува|о п|аль|них|ом |ми |іль|ног|та |ий |при|ою |ть |ста| об|ван|инн|ті |ост| у |ся |ват|бут|ист| мо|езп|ути|нов|пер|ії |и п|бод|воб|ств| в |о в|від| бе|ако|під|тис|кон|но |ва |нні|і с|а п|сті| сп|ний|ду |ьно|она| ін|дно|ним|ій |а з|ну |мож|її | її|ля |соб|му |ої |яко| пе| ра|ід | де|і в|и і|чин|вно|ому|ном|у п|і н|а с| су|а о|нен|ися|ово|нан|одн|у в|і д|ава|ідн|рів| рі|і р|ими|віл|им |ції|о д|а в|сту|оду|буд|ова| пі| ні|я н|е п|нац|и с|нна| од| ро|нос|ьни|ють|и з|ки |і з|а б|спр|чен|же |оже|е м|овн|рим|е б|то |ніх|осо|удь|ві | ре| ст|рац|до | со|роз|лен|вни|івн|род| вс|спі|ков|зпе|ів |для| дл|ї о|хис|ахи|зах|‐як|ь‐я|дь‐|я і|так|зна|заб|сть|ту |ною|а н|тор|сно|о с|жен|ціа|оці|соц|інш|і м|кла|и в|тер| ді|іст|ові|у с|я в|аро|сі |віт|сві|осв|роб|піл|рес|за |печ|абе|ку |лив|ерж|дер|в і|авн|тав|ав |ами|ком|вле|о б|ь п| що|їх |тво|хто|іхт|ког| кр|ано|тан|іал|нал|нь |х п|жно|леж|але|про|тва|рат|о о|х в|нар|льс|цій|кор|час|ржа|ї с|ину|дст|о з|раз|мін|а р|зак",
    bos: " пр| и |рав|на |ма |пра| на|има| св|а с|да |а п|во |је |ко |ако|о и| по|аво|е с|а и|ти | им| да| у |сва|но | за|о н|ва |и п|или|вак|ли | ко|не | ил|кој| не| др|ост| сл|ња |им |и с|у с|и и|ава|ије|а у| би|ств|се |вањ|а д|ом |јед|бод|обо|лоб|сло| се| ра|их |сти|а н|ње | об| је|при|дру|у и|ју |о д|ити|вој|раз|ање|ова|дје| ос|е и|ло |е п|ања|ује|и д|бра|тре| тр| су|у з|а к|ог |у п|оје|циј|реб|а о|а б| ње|и у|миј|ни |нос|ба |едн|сво|њег| из|про|е д|жав|бит| ни|и о|ста|а з|авн|вје| ка|бил|ово|а ј|ају|ист|и н|них|јел|ту |ред|гов| од|е о|оји| см|ја |о к|ило|аци|е у|пре|о п|еба|у о|су |вим|ичн| са| дј|а т|ија|шти|чно|ржа|држ|сту|дна|одн|ени|за |ива|ном|ем |ду |ран|вно|сми|јер|е б|е н|де |пос|м и| до|у д|нак|а р|обр| мо|ним|его| кр|тит|кри|ве |ан |ико|ник|ну |и м|ног|ено|сно|е к|туп|руг|ка |ода|рив|вољ|алн|м с|иту|ашт|заш|ани|сам| ст|акв|ови|осн|род|аро| ми|ји |тва|дно|нст|ак |ите|љу |вич|рад|у н|у м| та|дст|тив|нац|рим|кон|ку |њу |оду|жив|амо|тво|тељ|под|ећу|г п|нов|ина|нар| вј|и б|ој | ов|аве|ву |анс|оја|зов|азо|уде|буд| бу|е т|и в|ења|еди|ниц|нап|мје| ис|слу|едс|о о|зак|и к|м п|тно|иво|ере|нич|как|ада|вни|уги| ро|мов|вен|о с|то |те | вр| бе|ара|кла| бр|у б|у у|и т|она| он|ави|јал|дни| ск",
    srp: " пр| и |рав|на |пра| на|ма | св|има|да |а п|во |ко |ти |аво| по|а и|ако|а с| за| у |о и| им|и п|ва |сва|вак| да|о н|е с|ост| ко|ња |ли |или|не |ом | не|а н| сл| ил|је | др|и с|но |кој|у с|ава| ра|ог |сло|ју |им |сти|бод|обо|лоб|ити|а о|ств|и у|а д|ни |јед|у п|при|едн| би|и и|а к|о д|ста|их |дру|а у| је|ања| ос| ни|нос|про|ају|и о| де| су|у и|се |ње |ја |ова|и д|циј| об|ује|ред|жав|е и|е п|а ј|дна| се| од|ве | ка|ени|ржа|држ|а з|авн|ења|аци|вој|ово|у у|м и|оја|вањ| из|ија|у з|ање|ран|е о|род|и н|е б|раз|за | ње|гов|ичн| ст|нов|сно|осн|ду |пре| тр|су |ву |одн|а б|сво|њег|ним|них|ту |тит|шти|ку |ном|бит|е д|ме |ико|чно|оји|ло |вно|ник|ика|без|ара|де |у о|вим|нак| са|рив|аве|ан |вољ| кр|о п|сме|е к|ног|ји | ов|е у|тва|бра|руг|реб|тре|у д|ода| мо| вр|ављ|у н|его|дел|м с|кри|о к|ашт|заш|њу | см|ани| ли|дно|еђу|алн|ла |акв|ој |ком|сту|уги|ави|а р|ка |рад|оди|вич|тав|иту|уде|буд| бу|пот|оду|жив|ере|тво|ило|бил|аро|е н|ови|пор|ено|штв|нац|ове|м п|туп|пос|рем|дни|ба |нст|а т|оју|аст|ива|е м|вре|вља|ну |беђ|ист|ен |те |дст|рот|зак|ао |као|и к|јућ|о с|ст |сам|м н|тер|нар| ме|и м|кол|е р|ушт|руш|вер|как| бе|и б|кла|ада|еба|ена|она| он|тву|анс| до|рак|слу|и в|ниц|у к|мен|врш|еме|едс|иви|о о|јав",
    uzn: "ан |лар|га |ир | би|ар | ва|да |ига| ҳу|ва |бир|уқу|қуқ|ҳуқ| ҳа|р б|ган|иш |ида| та|а э|ини|ади|нг |дир|иши|лик|лиш|ий |или|ари|уқи|ҳар|лан|инг|ши |дан|нин|инс|кин|сон|нсо| ин| му|қиг| ма|он |р и| бў|эга| эг| ўз|ни |бўл|гад|и б|ки |ила|ёки| ёк|а б|н б|ин |р ҳ|ала|эрк| эр|лга| қа|рки|ш ҳ|и ҳ|н м| бо| ба|ик |ара|иги|лиг|ри |қил|а т|бил| эт|ниш|нли|кла|и в|бош|эти|ани|им |и м|оли|қла|а ҳ|лаш|атл|тил|а қ| ол|оси|мас|қар|инл|лат| қи|таъ|ҳам|ги |иб |мла|ўз |н э|мум| да| бу|ат |ш в|ун |ати|мки|умк|тла|иро|ўли|бар|ири|риш|ият|али| бе| қо|а ш|аро| ке|и т|рла| те|ча |рча|арч|а ў| шу|тиш|н ҳ|тга| са|аси| ха|рак|лин|ола|имо|шқа|ли | ту|амл|лла|сид|н ў| ас|нид|а и| ки|н т|нда|к б|ера|ошқ|сиз|ор |а м|р в|енг|тен|мат|мда|амд|лим|й т|ят |и а|ино|илг| то|тни|ана|ас |эма| эм|а ё| ша|аш |а а|тар|кат|ака|ак | де|аза|илл|сий| си| со|уқл|н қ|ода|ъли|аъл|ник|ада| ни|тда|гин|уни|сит|ай |қон|н о| жа|ким|еч |ҳеч| ҳе|ўзи|лак|кер|икл|лли|ур |зар|шла|риг|ирл|дам|коҳ|ико|а д|ам |н в|рти|тиб|тал| иш|чун|учу| уч|сла|а у|рин|сос|асо| ун|на | ка|муҳ|диг|ч к|асл|лма|ра |бу |хал|ўлг|и к|екл|р д|қат|ага|и қ|оий|мил| ми|қа |и с|жин| жи|син|рор|а в|лад|а о|тли|мия|н и|аб |тир|з м|дав|рга|аги|а к|нла|ақт|вақ|арт|аёт|лаб",
    azj: " вә|вә |әр |ир | һә| би| һү| ол|үгу|һүг|гуг|на |ин |лар|һәр|дә | шә|бир|ләр|лик|мал|р б|лма|р һ| тә|әхс|шәх|ән |дир|угу|уна|ан |али|а м| ма|икд|ини|р ш|дән|ар |илә|гун|аг |асы| ја|мәк|јәт| мә| мү|кди|әси|әк |илм|нин|ндә|олм|әти|ә ј|син|хс |нда|лмә|јјә|и в| га| аз|олу|ијј|ја |инд|зад|гла|үн |ни |лә |тин|н м|аза|ары|әт |н т|маг|лун|лыг|ә б|ун |нун|г в|н һ|дан|ын | ет|тмә|әрә| өз|да |ә в| он|ә а|ына|ыны|бил|а б|сы |ил |әми|ара|си | ди|ә м|әри|рлә| ва|ә һ|етм|ығы|ама|длы|адл|рин|бәр|рын|н и|мүд|нын| һе|мас|ик |н а|дил|алы|ирл|әлә|үда|сын|ынд|хси|ли |ә д|нә | бә|әја| ин|ә и|ләт| сә|ны | иш|аны|еч |һеч|г һ|ејн|ә е|дыр| да|аси|ры |иш |ифа|лығ|и с|фиә|афи|даф| ед|мәз|у в|кил| һа|ола|н в|әни|ыр |уг |унм| бу| ас|сиа|оси|сос|или|ыды|лыд|нма|ыг |инә|әра|сил|хил|ахи|дах|адә|ман|а һ|ә о|ону|а г|әз | ки|сеч| се|ы һ|мин|лан|әдә|бу |раг|лы |ылы|ал |ә г|р в|нла|һси|әһс|тәһ|өз |ист| ис|мәс| әс|ина|ә т|әтл|а в|иә |н б|тәр| та| ҹә|еди|ала|ким|гу |и т|улм|мәһ|н о|аја|ы о|иал| со|илл|сиј| дә|вар|инс|ми |ғы |ник|р и|агл|к һ|тәм|там|чүн|үчү| үч|ғын|сас|әса|з һ|әмә|зам| за|сти|рәф|н е|р а|илд|һәм|ыгл|јан|мај|н ә|мән|мил| ми|әги|дин|н д|түн| дө|миј|каһ|ика| ни|фад|тиф|л о|сәр|јни| еј|ана|лән|ам |рил|ајә|ашы",
    koi: "ны |ӧн | бы|да | пр|лӧн|рав| мо|пра| да|быд| ве|орт|лӧ |ӧй |мор|ӧм |аво| не|во |ыд |ыс |нӧй|ын |м п|д м|ыны|тны| ас|тӧм|льн| эм|вер|сь |ьнӧ|эм |н э|тлӧ| кы|сӧ | по|ерм|сьӧ|ртл|аль| кӧ|эз | ӧт|ӧ в|то |ето|нет|ылӧ| ко|тшӧ| от| и |ы с|бы |ӧ б|ств|кӧр| вӧ|шӧм|кыт|та |на |з в| се| до|вол|ӧс | сы|ы а|ола|рмӧ|ас |оз | оз| сі|а с|тво|с о| вы|ліс|ӧ к|ытш|ӧ д|ис |ісь|ӧтн|ась| ол| на|аци| эт|а в|злӧ|сет| во| чу|лас|лан|мӧ |тыс|рты|ӧрт|ы п|ӧтл|о с|эта|дз |кӧт|ӧдн|вны| мы|н н|удж| уд|выл|ӧ м|рті|орй|ись| со|воэ|ыдӧ|й о|кол| го|с с|сси|сыл|ысл|йын|кин|олӧ|тӧн| сь|ана|ӧр |ция|а д|ӧмӧ| ви|з к| эз|ы б|тӧг|ӧт |мӧд|ест|ост|ӧны|тир|оти|укӧ|чук|н п|онд|пон|слӧ|кер| ке| об|сис|суд|а н|дор|кон|нек|н б|лӧт|с в|ті |ьӧр|тра| ст|нал|она|нац|н к|кӧд|ӧг |скӧ|ть |етӧ|дӧс|быт|рны|ӧ н|тсӧ|рре|а б|нда|с д|асс|ы к|асл| ло|ьны|сьн|ы м|еки|ы д| мӧ|ь м|ы н|ытӧ| ме|рйӧ|иал|й д|итӧ|а к|ӧсь|мӧс|овн|зын|а п|отс| ли|оля|ӧ а|осу|ӧя |нӧя|езл|рез|мед|с м| сэ|ь к|рйы|ако|зак| за|ьын|ннё|мӧл|умӧ| ум|ы у|н в|м д|н с| дз|н о|ран|стр|озь|поз|з п|о д|циа|оци|соц|ион|а м|еск|чес|нӧ |з д|тсь|бӧр| бӧ| ов|вес|кыд|ӧ с|воы|код|тко|ӧтк|оль|дбы|едб|сьы|чын|тчы|ӧтч|тла|мӧн|сла|йӧз| йӧ|т в|ы и|ез |о в|оны|йӧ |анн|ӧль| пы|ан |нӧс|нит| су|м с",
    bel: " пр|пра| і |ава|на |рав| на| па|ны |ва |або|ць | аб|ае | ма|аве|анн|ацы|сва| св|е п|льн| ча|не |ння|ала|а н|ай |лав|чал| ко| ад| не|га |ожн|кож|век|ня | як|жны|ы ч|мае|а п|ага|бо |ек |а а|ца |цца| ў | за|ых |пав|а с|го |він|дна|бод|мі |ваб|ван|ам | вы| са| да|ста|аві|нне|асц|най|цыя|наг|ара|і н|к м|яго| яг|ьна|пры|аць|і п|одн|ств|ама|ных| бы|тва|дзе|аль| ра|ні |і с|і а|ыць|а б|енн|лен|ці |оўн|ым |рац|інн|іх | ас| та|то |нас|які| дз|чын|оль|і д|аво|ад | ні|сці|ымі|ным|быц|я п|ьны|ыя |аро|ана|іна|і і|рад| гр|ля |ўле|о п|а ў|рым|пад|ыі | ін|амі|дзя|рам|цыі|аба|а і|ду |жна|ўна|нал|нац|ры |эта|гэт| гэ|нен|да |ах |гра|кац|ука|а з|кі |адс|ў і|нст|энн|я а|нні|оду|а р|нна|ход|нан|пер|х п| у |адз|і р|мад|м п|е м|аду|дст|для| дл|оў |нае|і м|ако| ка|ы ў|бар|е а|ацц|ую |ыцц|сам|яўл|але|род|раб| пе|што| ўс|адн| су|роў| ро|дук|люб|ь с| шл|раз|нав|зна|вол|удз|ада|жыц|чна|ве |а т|асн|сац|ера| рэ|яко|кла|аны| шт|ь у|аюц|нар| ус|соб|асо|пам|я ў|авя|чэн|воў|так|ну |ю а|ь п|зак|кар|е і|ь а|бес|ія |кія|х і|заб|аса|ім |жав|і з|леж|тан|ахо|яль|ыял|о с|яна|кан|ака|інш|алі|вы | мо|нах|я я|м н|ога| бе|й д|о а| ст|ены|і ў|а д|есп|шлю|цця|ы і|ыст|рыс|люч|клю|тац|уль|ынс|ачы|спр| сп|аў |ыма|ары|кам|е ў|і к|кон",
    bul: " на|на | пр|то | и |рав|да | да|пра|ств|ва |а с|а п|во |но |ите|та |о и|ени| за|не | не|а н| вс|ван|аво|ото|е н|о н|а и|ки |ие |те |ни |има| им|ли |или|ия | по|ове|ане|чов|ма | чо|и ч|а д|ние|и д|ест| ил|ани|век|все| об|ек |еки|сек|ава|тво|сво| св|вот|а в|и с|ост| ра|ова|а о|е и|ват|и н|е п|к и|а б| в |и п|лно|о д| се|раз|ето|ъде|бъд| бъ|при|ата| ко| тр| ос| съ|бод|обо|воб|ат |за |тел| е |аци|о с|де |о п|ен |бра|и в| от|се |ния|алн| де|его|нег| из|от |ран|ята|как|оди|е с|и и|ден|пре|бва|ябв|ряб|тря|нит| ка|ява|про|ст |а з|гов|вен|тве|о о|а р|акв|о в|и з|ред|нос|ият|е д|щес|нов| ни|ция| до|йст|о т|е т|ржа|ърж|дър|ено|пол| с |обр|тва|нот|рес|ейс|и о|е в|кой|общ|лен|она|нац|иче|ез |без| бе|ежд|ува|вит|ри |зак|и к| ли|а е|под|ели|ник|си |е о|а т|авн|и р|т с|ка |оет|елн|нен|ой |гра|жен|дру| ре|а к|сно|осн|лич|зи | та|са |нст|вни|чки|ичк|сич|вси|люч|клю|дно| мо|еме|а у|изв|тви|дей|я н|кри|ато|о р|й н|ико|ичн|жав| дъ| то|бще|иал| со|лит|т н| си|т и|одн|жда|зов|азо|уча| гр|кое|тъп|стъ|вол|лни|сре| ср|ква|кон|тно|ака|и у|ко |ган|ода|чен|лст|елс|стр| къ|ста|род|нар|и м|нал|руг| др|чес|въз|ди | са| те|сто|дос|раж|рез|чре|гат|еоб|а м|о е|ине|аст|ово|чно|аве|му | му|ано|ита|ими|ако|нак|лаг|ови",
    kaz: "не | құ|ен |ұқы| ба| қа|құқ|ық |ға | жә|әне|жән| не| бо|де |дам|ада|а қ|тар|ына| ад|ылы| әр|ың |ан |ін |қыл|ар |еме|на |р а|лық|уға|ала|ықт| өз|мес|әр | жа|мен|ығы|лы | де|қта|ның|н қ|ған|іне|бас|ары| ме| қо|еке|ын |да |е қ|ды |асы|се |есе|ам |бол|анд|нем| бі|ара|ы б|ста|тан|нды|н б|ің |е б|ілі|тиі| ти|бар|ғы |нде|етт|иіс|қығ|іс |лар|ге |ы т|інд|ік |бір| бе| ке|алу|е а|алы|луы|а ж|ері|олы| те|қық|н к| та|н ж|ғын|тті|іні|тын| ер|нда|ім | са|е ж|аты| ар|рға|еті|ана|ы ә|уын|лға|өзі|ост|егі|тік|қа |сқа|рын|кін|луғ|ң қ|нің|уы |бос|асқ|қар|дық|нан|мыс|мны|амн|ы м|айд|ке | же|зін|рде|рін|е т|ген|ып |ры |ті |сын|қам|ден|і б|гіз|рал|е ө|лан|сы |ама|тта|тық|бер|ді |біл|ркі|өз |зде|кет|қор|дай|уге|ы е|ынд|нег|оны|ей |мет|аны|а т|жас|ауы|лге|аса|еге|дар|ру |ау |ерк|ы ж|рыл| то|н н|е н|тін|ір |сіз|тер|лма|і т|кім| ал|р м|лік| мү|е м|түр| тү|кел|лып|ең |тең|рлы|лім|рды|ард|атт|с б|ыры|сыз|ыс |елг|дал|йда|орғ|рқы|арқ| жү|тал|ылм|а б|ігі|лде|із |қты| еш|дей|ай |жағ|кті|ікт|гін| әл|тты|ұлт| ұл|е д|ыны|лін|р б|еле|кұқ| кұ|амд|м б| ет|оға|құр| кө|аға|тол|шін|айы| қы|қал|жек|і н|ес |ағы|е о|елі| ел|н е|зі |шкі|ешк|олу|ция|мас|ғда|ағд|лтт|імд|ным| да|а д|әсі|с ә|қат|ірі| со|ң б|аза|мда|айл| ас|ғам|қоғ"
  },
  Arabic: {
    arb: " ال|ية |في | في|الح| أو|أو | وا|وال|حق |ة ا|لحق|الت|كل |الم|لكل| لك|لى |ق ف|ته |و ا|ة و|شخص|ة ل|ات |الأ|ي أ|ون | شخ|م ا|أي | أي|ان |أن |مة |ي ا|الا|لا |ها |اء | أن| عل|خص |ن ا| لل|د ا|من |فرد|ما |الع|ت ا|حري|على|ل ف|رد |ل ش| لا|رية| إل|ة أ|ا ا|ن ي| ول|ا ل|ا ي| فر| من|ة م|الق|جتم|ن أ|ق ا|الإ| حر|له |ه ل|اية|لك |ه ا| دو|دة |اً |ين |ه و|لة |ي ح| عن|ماع|ي ت|ذا | حق|قوق|حقو|، و|ن ت|مع |ص ا|ام |د أ| كا|هذا|الو| إن|مل |امة|ع ا|إلى|ة ع|ماي|حما|ن و|لتع| وي|ير |نون|ي و|اسي|الج| هذ|نسا|وق |ترا|عية|ه أ| له|سية| يج| با|دول|انو|قان|لقا|ة ب|ة ت|تما|الد|يات|ع ب|سان|إنس|هم |علي| مت|لمج|ذلك|عمل|لأس|وز |جوز|يجو|بال|غير|ك ا|كان|ساس|أسا|دم |لاد|اعي|الر|تمي|دون|تمت|لتم| يع|ليه|ساو|اجت|ي م|لعا|لجم|تعل|ر و|تمع|مجت| مع|يه |ى أ|فيه|ى ا| كل|لات|ملا|ود |انت|الف|يها|ي إ|تي |الب|لي |قدم|ال |اد |ل ا|يز |ييز|ميي| تم|لحر|تع |متع|ا ب|عام|ا و|ق و|رام|ل ل|لاج|را |الش| وإ|يم |ليم|شتر|ا ح|واج|لزو|ول |ا ف|ولة|لحم|أسر| ذل|ه ف|اته|مسا|لمس| تع|عن |ه ع|وله|يته|ن ل|رة | وس|اة |يد | تح| مس|ي ي|لتي|عة |ولي|لدو| أس| وف|ل و|أية|ني |الس|لان|لإع|ة ف|ريا|ل إ|م ب|امل|كرا|تسا|ميع|جمي| جم|أول|بية|عيش|تحق|ادة|س ا| مم|معي|جما|عات|اعا|ارس|مار|مما|م و|راك|اشت|الط|اج |زوا|الز| وم|حدة|تحد|لمت|مم |لأم|ده |بلا| بل|ار |يار|تيا|ختي|اخت|ن م| مر",
    urd: "ور | او|اور|کے | کے| کی| کا|یں | حق|کی |کا | کو|ئے |ے ک|یا |سے |کو |شخص| شخ|نے | اس| ہے|میں|حق | ہو| می|خص |ے ا| جا|اس | سے| یا|ہر |ی ا| کر| ہر|ے۔ |سی |ہیں|ا ح|ص ک|وں |ے م| ان|ر ش|۔ ہ|ائے|زاد|آزا| آز|ام |ر ا|ق ہ|ادی|جائ|ں ک|ہے۔|م ک| کس|ا ج|ی ک|س ک|کسی| پر|ے گ|ہے |ار |ت ک|دی |پر |و ا| حا| جو| ہی|ان |ی ج|ری | نہ| مع|جو |ل ک|ی ت|ن ک|کرن|ئی |ل ہ|تی |ہو |ہ ا| ای|صل |اصل|حاص|رنے|ی ش|نہ |۔ ا|ں۔ |یں۔|ر ک|ر م| مل|وہ |معا|رے |ں ا|نہی|ے ہ|ے ب|ایس|ے ل| تع| گا|یت |ی ح|ا ا|ی م|اپن| اپ|کیا|می |ی س| جس|ہ ک|نی |اشر|عاش| دو|لئے| لئ|انہ|وق |قوق|حقو|مل | قا|کہ | گی|ر ب|ہ م| وہ| بن|ی ب|ملک|جس |ا۔ |ریق|ر ن|ے ج|اد |ات |گی |د ک|ے ح|دار|ر ہ|گا۔|قوم| قو|ے، |ا س|دوس|ر پ| و | شا|ی آ|ں م|ق ح| پو| با|خلا|انے|یم |لیم|و ت|ون | کہ|ی، |۔ ک|ا پ|ن ا|لک |علا|ا م|ق ک|ائی|وسر|ی ہ|وئی|یر |ا ہ|علی|و گ|وری|دگی|ندگ|و ک|یسے| من|ائد|رائ| مر|پور| طر|ومی|ے خ|سب |نون|انو|قان| سک|وام|ین | رک|تعل|لاق|غیر|دان|، ا| بی| مس|یوں|نا | بھ| بر|رتی|ادا|امل|یہ | یہ|ہ و| عا|ی پ| بچ|اف |لاف| خل|ی۔ |گی۔| دی|ھی |بھی|دہ |جا |پنی|قوا|اقو|رکھ|ے ی| عل|کوئ|، م| چا|ے س|ر ع| پی|برا|ر س|ر ح|سان|م ا|کام|شرت| را|شام|من |زند| زن|ب ک|ت م|اہ |اری|س م|ر ج| مح|ورا|ے پ|طری|ہوں|ال |ں س|ی ن|کرے| مق|ت س|تحف| تح|و۔ |ہو۔|بند| اق|د ہ| ام|امی|الا|لت |شرے|ے ع|ا ک|فری",
    pes: " و | حق| با|ند |رد |دار| دا|که |هر | در| که|در | هر|ر ک|حق |د ه|از |یت | از|یا |کس |ود |ارد| یا| کس|ای |د و| بر| خو|ق د|باش|شد |د ک|ار |د ب| را|ه ب|ان |آزا| آز|را |اشد|ی و|ه ا|ین |ید |زاد|س ح|خود|ی ب| اس|ده |دی |ور |اید|ه د|ری |و ا|تما|ات | نم|ی ک|ادی|نه |رای|د ا| آن|است|ر ا|ر م| اج|مای|ون |قوق|حقو|و م| ان|انه| هم|وق |ایت| شو|ی ا| مو| بی|با | تا|ورد|انو|ست |وان|برا|ام |شود|آن |جتم|ی ی| کن|ر ب|کند| مر|ت م|های|ت ا| مس|ی، |ماع|اجت|توا|یگر|و ب|دان|ت و|ا م| بد|عی |کار| من|مور| مق|ی د| زن|ی م|ن ب|ر خ|اه |ا ب|اری|د آ|مل | به|اعی|د، |دیگ|ت ب|بای|این| می|ن و|ق م| عم| کا|ن ا|و آ| حم|نون|ه و|و د|د ش| ای|شور|کشو| کش|لی |نی |ه م|بعی|ر ش|یه | مل|میت|ی ر|رند| شر|می |وی |ساو|قان| قا|مقا|او | او|د م|گی |نمی| اح| مح|مین|ئی |ادا| آم|خوا|گرد| گر|مند| شد|ائی| دی|ز ح|هیچ| هی|اده| مت|نما|ت ک|ران| بم|ن ح|ر ت|حما|ارن|مسا|دگی|ومی|ن ت|ملل|بر |هد |واه|بهر| اع|‌ها|ق و|، ا|عیت|یتو|ا ر|ن م| عق|همه|ا ه|زش |وزش|موز|آمو|انت|تی |جام|موم|عمو|تخا| فر|طور|د د|ه ح|ردا|اوی|نوا|انی|رار| مج|ی ن|حدی|احد|ندگ|زند|شخص| شخ|‌من|ه‌م|ره‌|هره|شده|ع ا|و ه|اسی|هٔ |یده|عقی|ا ا|مه | بش|اد |دیه|ا د|دوا|ی ح|ابع|ی ت|خاب|نتخ|رور|و ر|شرا| خا|ٔمی|أم|تأ|اً |امل|له |د ر|اسا|خور|بل |ابل|قاب|یک |سان|قرا|ا ن|خصی| ام| بو|یر |الم|بین|اهد|تبع| تب",
    zlm: " دا|ان |دان| بر| او|ن س|رڠ |دال| ڤر|له |كن | كڤ|ن ا|ن ك|ن د|يڠ | يڠ|ڤد |حق |ورڠ|تيا|ياڤ|ارا|كڤد|اور|رحق|برح|اله|أن |ولي| ات|اتا|ڠن |تاو|اڤ |ستي|ليه|او | ست|ڤ ا|يه |را |ه ب|ه د|عدا| عد|ن ڤ|ن ب|ين | تر|ق ك|ن ي|يبس|بيب| تي| سو| كب| سا|ن م|ن ت|لم |الم|د س|ڠ ع| من|چار|د ڤ|رن |سام| ما|ڽ س|ن، | بو| اي|ندق| حق|ڬار|نڬا|بول|سبا| سب|اتو|ا س|قله| ڤم| مم|وان|سچا| سچ| كس|ا ب|سن | سم|ڤرل|اون|نڽ |تن | با|هن |سيا|ا ڤ|ارڠ|بار|ڤا |بسن|كبي|ام |يند|ي د|اڬي|ڠ ب|باڬ|ي ا|مان| لا| د |دقل|هند| هن|ت د|ادي|وين|يكن| نڬ|، ك|ن٢ | ڤو|بڠس|ق٢ |ات |اول|اكن|اڽ | سس|ون |اد | كو|اين|دڠن| دڠ|ائن|تو |تي |ن ه|ڬي |سي |ق م|وڠن|دوڠ|ندو|لين|رلي|نتو|ڤون|وات|ياد|تيك|ڠسا|ڤمب|ترم|٢ د|حق٢|وا |لوا|ماس|وق |ه م|ل د| مل|وند| ڤڠ|ا، |، ت|لائ|اي |مڤو|يك |ي ك|رات|مرا| بي|سمو|و ك|، د|سوا|ڠ م|ڠ س|ڠ٢ |ڤري|يري|دير|ا ا|اسا|ڤ٢ |تا |سوس|، س|جوا|ڠ ت|رأن| ان|سأن|ريك|يأن|ري | در|امر|كرج| ڤل|ا د|جرن|اجر|ارك|لاج|د ك|وار|برس|ونت|منو|سال|ينڠ|دڠ٢|ندڠ| مڠ|اڤا|سسي|ساس|نن |ڤول|اڬا| بڠ| سڤ|مبي| اڤ|ڠ ا|ارأ|ڤرا|ي س|بس | دل|ا م|موا|ڤلا|ملا|ڤرك|كور|وبو| كأ|وكن|أنڽ|كسا|ڠڬو|ادڤ|هاد|رها|تره|كوم|توق|م س|ڠ د|دي | دي|٢ س|ندي|اس |ادا|بوا| دب|ڠ ڤ|ڽ، |اڤ٢|رتا|ال |يال|وسي| كت|أن،|نڤا|تنڤ| تن|م ڤ|رسا|ممڤ| مر|ن ح| كم|نسي|جأن|ؤي |لؤي|الؤ|لال|كڤر|كت |ركت|شار|مشا| مش|جاد|رڬا",
    skr: "تے |اں |دی |دے | ۔ |وں | تے| دا| کو|کوں| حق|دا | دی|یاں| دے|یں |ے ا|شخص| شخ|ہر |ے ۔|اصل| حا|حق |خص | ہر|صل |حاص|ہے | ہے|ال |ق ح|ل ہ| نا| کی| وچ|۔ ہ|یا |سی |ے م| او|وچ |اتے|کیت|ا ح|ادی|نال|ص ک| ات|ر ش|ہیں| یا|ں د| ای|یسی| مل|وند|کہی| کہ|ی ت|زاد|ازا| از|ندے|ں ک|ار | وی|ے ک|ئے | ان|ڻ د|نہ | کر|اون|ے و|دیا|ی د|ں ا|ے ب|ویس|وڻ |ی ن| ہو|تی |ی ۔| نہ|ی ا|یند|و ڄ|آپڻ| آپ|ا و|ے ج| کن|ے ن|ندی|ت د|ے ح|ی ک|ئی |ملک|یتے|ن ۔|تھی| تھ|ون |ں م| بچ|۔ ا|نوں|کنو|ڻے |اری|ا ا|ے ہ|ل ت| ڄئ|وق |قوق|حقو|ل ک|خلا| جی|لک |دار|یت |کرڻ|انہ|کو |ہکو| ہک|ن ا|مل | وس|ں و|پڻے| تع|ی م|اف |ے خ|نون|قنو| قن| لو|۔ ک|ری |لے |تا |یتا| قو| چا|ہاں|ڄئے|ق ت|ایہ|رڻ |ے د|ر ک| و |لاف| خل| جو|ی و|او |ہو |ئو |چئو|بچئ|یر |ہوو|ا م|ی ج|الا|ین | جا|می |نہا|ان |ات |سڱد| سڱ|یب |سیب|وسی| شا|ب د|یوڻ|ام |اوڻ|ے ت|ڻ ک| مط|ں ت| ون| کم|ن د|رکھ| رک|ڻی |ں آ|ریا|ی ہ|اد |یاد|علا|ر ہ|ں س|ی ح|جھی|ائد|ہی |لوک| ڋو| سم| سا| من| مع|بق |ابق|طاب|مطا|ھیو|ں ف|ہن | ہن|جو |و ک|ں ش|ر ت|کار|م د|ھیا| ٻا|غیر|و ل|وئی|جیا|وام|قوا|ی س| جھ|ل ا|قوم| سی|ذہب|مذہ| مذ|اے | اے|دن |ا ت|سان|نسا|انس|رے |لیم|علی|تعل|امل|ہ د|ے ر|د ا|کم |یہو|فائ|چ ا| کھ|م ت|را |ورا|پور|ں ب|ق د|ے ق|وکو|کھی|ا ک|و د|ے ذ|پڻی|بند| فر|کوئ|امی|ی ی|ائی|لاق|ایں|ہ ا| نظ|سما|ومی|ی، |ے س|ت و|ھین|ے ع|یم |سہو| سہ",
    pbu: " د | او|او |په | په|ي۔ | حق|چې | چې|ره |ي ا|ې د| هر|نه |هر |حق | څو|وک |څوک|و ا|ه د|ه ا|۔ ه|ه و| شي| لر|ي چ|و د|ري |لري|ق ل| کښ|وي |ښې |کښې|ه ک|غه |لو |ر څ|سره| سر|ه پ| ټو|و پ|له |يت |ټول|يا |کړي| کو|خه |ي، |دي | له| از|د م| هي| وا| يا| څخ|ازا|د ا|ولو|ه ت|څخه| کړ|ول |هغه|ه ش|ي د| هغ|کول|زاد|نو | وي|و ي|ه ب|شي۔|دې |يو | دي|ته |خپل| پر|اد |د د|ک ح| تو|ه م|ګه |ه ه|قوق|حقو|و م|ه ح|د ه| تر| مس|شي | نه|ړي۔|ني |د پ|واد|ې پ|ادي|ولن| يو|د ت|ونو|وګه|ي و|لي | دا|يد | با|تون| خپ|ي پ|توګ|ار |اند|يوا|ې و|دان| بر|ړي | عم|انه| ده|يڅ |هيڅ|امي|لني|بعي|ډول| ډو|ه ل|ايد|باي|اتو|ه ګ| تا|پل | مل|ايت|وم |ون | لا|هيو| شو| دغ|م د|ده |ې ا|ان | ته|کار|تو |مي |اره|اوي|ساو|مسا|نون|دهغ|و ت|ي ش|انو| مح|ين |اخل| ګټ|شوي|دغه|و ح|وي،|نيز|سي |اسي|وند|قو |وقو|و ک|ونه|ومي| وک|ي ت| ان|قان|ندې|و ر|ک د|ه ي|مين|پر |ټه |لام|غو |هغو|د ټ|و ه|ل ت|لے |ولے|وون|کي |رو |ن ک|موم|وکړ|پار|ن ش|من | نو| وړ| قا|ې چ| وس|څ څ|شخص| شخ|ژون| ژو|تر |ګټه|و څ|هم |عقي|رته| ور|بل | بل|و ب|ه س|ښوو| ښو| کا|ې ک|و س|اده|ونک| غو|دو |و ن|ت ک|مل |عمو|ل ه| پي|وسي|ړان|وړا|يز |خصي|ي م|ا ب|ادا|ه ن|خلي|واخ|ديو|، د|د ق| هم|ا د| بي|تبع| تب|ه چ| عق|پلو|و ل| را|د ب|راي| دخ|نې |نکي|ت د|ابع| مق|د خ|وره|شرا| شر|ر م|رسر|تام|ه ټ| من|طه |سطه|اسط|واس|لې | اس|۔ د|برخ|ې ن"
  },
  Devanagari: {
    hin: "के |प्र| प्| का| के| । |और | और|का | को|कार|ार |ति |या |को |ने |ों |िका|्रत| है| कि|ं क|है |धिक|व्य|अधि| अध|्ति| सम|्यक|ि क|क्त|ा अ|की |ा क| व्|ें | हो|यक्|सी |से |े क| या| की|में|न्त| मे|त्य|ै ।|ता |रत्|क्ष|ेक |येक|्ये|िक |र ह|भी |किस| जा| स्|क व|ा ज|िसी|मान| वि|र स|त्र|ी स|। प| कर|्रा|गा |ित | अप| पर|स्व|ी क| से|ा स|्य | अन|्त्|िया|ा ह| सा|ना |्त |प्त|समा|ान |र क|ाप्|तन्| भी| उस|राप|वतन|्वत|रों|वार|े स|था |हो |े अ|ा ।|न क| न |देश| रा|षा |अन्|त ह|्षा|्वा|जाए|ी प|करन|ा प|अपन|ष्ट| सं|े व|होग|िवा|ट्र|्ट्|ाष्|राष|सके| मा|ओं |ाओं|री |क स|े प| नि|ीय |रक्|ो स|ाएग|रने| इस|व क|पर |रता|र अ| सभ|तथा| तथ| ऐस|रा |पने|्री|िक्|किय|ा व|माज|ं औ|र उ|द्ध|सभी|श्य| जि|ाने|ार्|ारा|द्व| द्|एगा|सम्|ेश |िए |ाव |र प| दे|्तर|ा औ|ारो|यों|परा|पूर|चित|्ध |रूप| रू| सु| लि|त क|ो प|ं स|े ल|शिक| शि|वाह|े औ|जो |राध|जिस|ूर्|ी भ|ूप |ोगा|स्थ|रीय|तिक|्र |। इ|इस | उन|ले |े म|लिए|म क|कता|े य| जो|न म|अपर| पू|ो क|ा उ|ाह |नून|ानू|गी |दी |ारी|ं म|। क|तर्|ी र|श क|परि|स्त|ोई |कोई|र्य|ी अ|हित|भाव| भा|ताओ|ास |साम|विक|विव|म्म| सक|कर |ाना|ध क|निक|य क|उसक|कृत| क़ा|न स|जीव|्या|रका|्रक|ाज |न्य|्म |र्ण|क़ ह|हक़ | हक़|ी म|जिक|ाजि|ामा|क औ|मिल|ेने|लेन| ले|ये |ो अ|े ज|रिव|मय |समय|वश्|आवश| आव|ऐसी|ाध |र द|र्व|सार|प स|बन्| सह|िधा|विध|ी न|ून |क़ान",
    mar: "्या|या |त्य|याच|चा |ण्य|ाचा| व |कार|प्र| प्|िका|धिक|ार | अध|अधि|च्य|आहे| आह|ा अ|हे |ा क|ास |वा |्ये|्रत| स्|ता |ा स| अस| कर|स्व| का|ल्य|रत्|ाहि|कोण| को|िक |येक|्वा|ा व| त्|र आ|्य |त्र|ेका|क्ष|ा न| सं|ामा|ाच्|ंवा|िंव|किं| कि|ात |ष्ट|कास| या|यां|ांच|र्य|मिळ| मि| सा|व्य|ोणत|ने |े प|काम| सम|ंत्|ये | रा|समा|तंत|करण|ा आ|े क|हि |े स|ना |िळण|ून |ा प|ट्र|्ट्|ाष्|राष|ीय |व स|क्त|मान|र्व| आप|ळण्|्र्|ातं|वात|चे | वि|्षण|रण्| दे| व्|आपल|ही |ार्|नये| नय|मा |यास| जा|लेल| नि|े अ| पा|ा म|ले |ाही|बंध|े व|्यक| मा|शिक| शि|देश|ा द|माज|्री|ली |ान |ांन|पल्| हो|ा ह|षण |जे |िजे|हिज|पाह|ारा|यात|सर्| सर|रां|असल|ंबं|संब|िक्|ी प|ंच्|रक्|णत्| आण|ला |स्थ|रीय|ीत |ंना|त व|्व |क व|णे |ाचे|न क|त क|रता|्रा|याह|्त |ची |य क|द्ध|्वत|यक्|णि |आणि|स स|ंधा|क स|च्छ|य अ|त स|ीने|ोणा|करत|त्व|ील |ी अ|सार|र व|भाव|व त|थवा|अथव| अथ|े त|े ज|याय|ंचा|ेल्|ाने|ेण्|क आ|क्क|हक्| हक|ण म|ंरक|संर|न्य|ायद|ा त|त आ| उप|वस्|िवा|ेशा|साम|े य|े आ|ी व|व म|तीन|व आ|ध्य| अश|धात|कृत|्क |द्य|ित |सले|ेश |तो |ेल |ती |्ती|असे|इतर| इत|स्त|र्ण|ा ब|ेले| के|हीर|जाह|ा ज|ेत |ूर्|पूर|ेच | वा|ाजा|ी स|शा |य व| न्|याव|द्द|्ध |रून|यद्|काय|ा श|गण्|क क|राध| शा|यत्|ल अ|्यव|ी क|ाव |ा य|त्त|जिक|ाजि|रणा| धर|ा ध|भेद| बा|रका|्रक|केल|ि व|िष्|तील|योग|साध|ांत|विव|श्र| धे| मु|वतः",
    mai: "ाक |प्र|कार| प्|ार |िका|्यक|धिक|क अ|्रत|्ति|व्य| अध|ेँ |अधि|िक | व्|आʼ | आʼ|क्त|यक्|तिक|केँ|क व|बाक|क स|छैक| छै|त्य|मे |ेक | सम|क्ष|हि |रत्|र छ|येक|्ये|न्त|वा |िके|क। |ैक।|। प| अप| स्| वि| जा|ित |सँ | हो|कोन| को|त्र|स्व| वा|क आ|ष्ट| कर|अपन|मान| का| अन|ति |्त्|नो |नहि| पर|ट्र|्य | एह|ि क|्ट्|ाष्|राष| रा|समा|ोनो|ल ज| नह|ताक|ार्|पन |तन्|वतन|्वत|्षा| कए| सा|्री| नि|ा आ|िवा| सं| दे|जाए|ीय |करब|था |एबा|ा प|ना |्वा|देश|त। |रक |क ह|ँ अ| सभ| आ |त क|चित|्त |वार|ता |ारक|माज|ा स|रीय|न्य|रता|ान |्रा|्या|रक्|ारण|परि|एल |कएल|अन्|रबा|क प|ओर |आओर| आओ|अछि| अछ|िर्|ान्|नक |होए|कर |धार|स्थ|ा अ|िमे|र आ|एहि| एक|े स|तथा| तथ| मा|िक्|शिक| शि|प्त|र्व|निर|च्छ|र्य|ँ स|क क|हो |ाहि|एत।|र प|ामा|साम|षा |ʼ स|ँ ए|ैक |द्ध|र अ|क ज|स्त|ाप्|ँ क| सक|यक |कान|हन |एहन|ेल |ोएत|त आ|ा व|। क|्तर|ाएत|्रक|हु |क उ|पूर|विव|ʼ अ|छि | ले|न प|ास |राप|धक |पएब| पए|रा |यता|रूप|न व| के|षाक|य प|त ह|जाह| ओ |भाव|पर |थवा|अथव| अथ|सम्|जिक|ाजि|ूर्|रति| दो|सभक|। स| जन|सभ |बाध|अनु|िसँ| सह|ँ व|ए स|रिव|तु |ेतु|हेत| हे|ाध |ेबा|न स|िष्|राध| अव|ित्|वास|चार| उच|ारा|न क|वक |ा क|नून|ानू|एत |री |ेओ |केओ|रण |्रस|ि द|ओ व| भे|नहु|ोनह|्थि|पत्|म्प|राज| भा|हिम| हक|ामे|्ण |र्ण|हार|ि स|क द|न अ|त अ|लेब| अभ|िश्|जक |ाजक|न आ|वाह|काज|श्य|वस्|ओहि| ओह|योग|। ए|कए |े ओ|अपर",
    bho: " के|के |े क|ार |कार|िका|धिक|अधि| अध|ओर |आओर| आओ|े अ|े स|ा क| सं|िक |र ह|ा स| हो|र स|ें |में| मे| कर| से|नो |क्ष|से | का|। स|खे |ा। |रा | सम| सब|्रा| सक|र क|न क|वे |ौनो|कौन| कौ|चाह| चा| बा|प्र| प्|था |ि क|ति | जा| सा|े आ|पन |करे|ता |होख|त क|े। |े ब|तथा| तथ| आप|केल|सके| स्|रे |सबह|कर |आपन|े ओ|जा | पर|ष्ट| रा|ना |हवे| हव|ला |ेला|बहि| ओक|ोखे|र ब|ह। | ह।|न स|ाष्|राष|्त | और|े च|। क|संग|र आ|ट्र|्ट्|षा |मान|ा आ|ं क|ा प|्षा|रक्|हे |ाहे|ाति|ावे| जे|ही |ओकर|मिल|ित |ो स|ल ज|इखे|नइख| नइ|त्र|माज| बि|वे।|े ज|क स|िं |हिं|करा|और |े म|समा|हु | ओ |पर |े न|स्थ|रीय|्री|ला।|ाज |ान |कान|े त|िर |तिर|खात| खा|े उ|नून|ानू|ाम | सु| दे|ी क| मा|र म|प्त|िया|ाही|बा।|योग|ी स|ल ह|ून |व्य|ु क|ए क|े व|ंत्|स्व|केह|ीय |खल |साम|यता|तिक|े ह|ाप्|राप|र प|र अ| लो| सह|जे |ोग |म क|ले | नि|ेकर|ा ह|पूर|र न|ेहु|्य |या | या|देश|दी |ा म|ाव | दो|े द| पा|हि |िक्|शिक| शि|बा |िल | उप|्रत| वि| ही| ले|रो |े ख|ठन |गठन|ंगठ| मि|षण |्षण|ंरक|संर| आद| एक|ने | अप|तंत|वतं|्वत|्तर|्या|ेश |ादी|्ति|जिक|ाजि|क आ|्म |चार| उच| शा|री |ाह |याह|बिय|चित|क्त|पयो|उपय|रता|र व|न म|लोग|ह क|न प|काम| पू| इ |आदि|ईल | कई| व्|मी |ुरक|सुर| जी|धार|य स|तर्|भे |सभे| सभ|भाव|्थि|ामा|सर |र्म| को| बे|ोसर|दोस|ण क|ास |े प|जाद|आजा| आज|उचि|ग क|ारी| जर|गे |ज क|ी ब|सन |हो |ा त",
    npi: "को |ने | र |ार |क्त|कार|प्र| प्|्यक|व्य| गर|िका| व्|्रत|धिक|्ति|यक्|अधि| अध|ाई |मा |लाई|त्य|िक | । | सम|वा | वा|क व|्ने|र्न|गर्|न्त|छ ।|तिल|रत्|त्र|ेक |येक|्ये|िला|र स|ो स| स्|मान|क्ष| वि|हुन|ा स| हु| छ |र छ|्त्|समा|स्व|। प| सं|नेछ|ुने|हरु|तन्|वतन|े अ|िने|ो अ|्वत| का|े छ|गरि| रा|्र |ति |ाको| कु|ष्ट|ना |स्त|क स|ुनै|कुन|ट्र|ले | नि|ान |छैन| छै|्ट्|ाष्|राष|तिक|छ। |ार्|ता |ित |नै |ा अ| सा|ा व|रु | मा| अन|ा र|रता|र र|हरू|ेछ |ा प|रक्|्त | पर|था | ला|परि|देश|सको| यस|माज|ामा|्रा|िवा|ाहर|ो प|्य |वार|न स|। क|नि |्षा| त्|द्ध|र ह|तथा| तथ|यस्|्यस|री |र व|पनि|रिन|ंरक|संर|भाव|ै व|सबै| सब| शि| सह|ताक|े र|त र|लाग| सु|्षण|द्द| अप|ैन |ो व|िक्|ाव |धार|्या|्रि|ा भ|एको|र म|न अ|ो ल| उस|शिक|ात्|स्थ|वाह|ूर्|श्य|ित्|रको|ारक|ुद्|तो |्तो|ाउन|कान|िएक|ा न| पन|न। |ैन।|का |ेछ।| भे|र्य|सम्|त्प|साम|रिय|चार|निज|ुन |गि |ागि|उसक| मत| अभ|पूर|र त| सक|सार|राध|परा|अपर|ुक्|जको| उप|रा |ारा|्वा|विध|्न |ा त|न ग|णको| पा| दि|क र|र प|अन्|भेद|ारम|ो आ| अर|जिक|ाजि|िय |षा |ाट |बाट| बा|ि र| छ।|त्व|त स|रू |छ र|रका|विक|र उ|ोग |्दे|रिव|सकि|ै प|रति|अनु| आव|युक|ा ग|नमा|योग|ग ग|क अ|द्व|्ध |रुद| बि|। स|उने|ान्|ा म|िको|र्द|ारी|्तर|ो ह|हित| दे|रिक|ा क| आध|राज|र्म|्ण |र्ण|ि व|्यव|विच|बै |सहि|रोज|र्स|ई उ|्प |रात|निक|मिक|च्छ|्था|विव|कता|अभि|्धा",
    mag: " के|के |ार | हई|कार|ई। |हई।|िका|े अ|धिक|अधि| अध|र ह|े क|और | और|ा क|े स|सब | सब| कर|ें |था |में| मे|तथा| तथ|िक | हो| सम|क्ष|ना |ब क|र स| सं|ा स|कर | भी|। स| सा| से| का| अप|्रा|प्र| प्|से |भी | को|त क| पर|रा |क ह|पन |अपन| सक|या |ति |र क|ी क| या|करे| जा|रे | ओक|्त |सक |नो |ान |मान|ओकर|ा प|न क|ेल | ना|। क|रक्| स्|ही |होए| एक|पर |दी |ट्र|ता |व्य|हई | शा|े उ| दे|त्र|ादी| रा| ही|कान|ित |म क|ल ज|ाम |ी स|े भ|न स|माज|ष्ट|षा | ले|क स|बे |वे |ावे|मिल|र म|्य |ा ह|ला |प्त|नून|ानू|जा |ेकर|्षा|्रत|ंत्|र औ|ोई |कोई|्ट्|ाष्|राष| मा|रो | जे|करा|ोए |ाप्|राप|समा|ून |ो स|स्व|्ति|साम|ोनो|कोन| व्|र अ|्म | वि| सह|े म|क्त|योग|र व|काम|ल ह| नि|देश|पूर|वार| इ |ंरक|संर|ए क|र प| सु|तंत|वतं|्वत|ा म|व क|े व|ाथ |साथ| दो|होब| पा|ो क|े ब|ोग | उप|स्त|परि|न प|े त|्तर|लेल|े ओ|चाह| चा|य क|वा |ेश |य स|न ह|षण |ा ब|। त|एक |एल |ीय |केक|े ह|र आ|ि क|स्थ|जिक|ाजि|ामा|रीय|्री|तिक|ाति| बि|चार|े आ|ास | उच|ा त|यक्|्यक|िल |मय |समय|शाद|पयो|उपय|े ख|रिव| पू|े ल|े च|ौनो|कौन| कौ|ं क|संग|न द|ं स|ण प|्षण|र न|े न|ो भ|करो|ा औ|रता|ाव |भाव|क औ|र्म|ोसर|दोस|ण क|े प|न औ|ब ह|िक्|शिक| शि|ाबे|निय|चित|उचि|ित्|ग क|े। |त स|ी श|ं श|एकर|। ए|तन | ओ |री |्र |जे |क क| सी|सन |िवा| अन|ूरा| बच|ए। | बे|त ह| तक| मि|धार|थवा|अथव| अथ|िला|्वा|ि म| आद|ने |कएल| कए|्या"
  }
};

// node_modules/franc-min/index.js
var MAX_LENGTH = 2048;
var MIN_LENGTH = 10;
var MAX_DIFFERENCE = 300;
var own2 = {}.hasOwnProperty;
var script;
var numericData = {};
for (script in data) {
  if (own2.call(data, script)) {
    const languages = data[script];
    let name;
    numericData[script] = {};
    for (name in languages) {
      if (own2.call(languages, name)) {
        const model = languages[name].split("|");
        const trigrams = {};
        let weight = model.length;
        while (weight--) {
          trigrams[model[weight]] = weight;
        }
        numericData[script][name] = trigrams;
      }
    }
  }
}
function franc(value, options) {
  return francAll(value, options)[0][0];
}
function francAll(value, options = {}) {
  const only = [...options.whitelist || [], ...options.only || []];
  const ignore = [...options.blacklist || [], ...options.ignore || []];
  const minLength = options.minLength !== null && options.minLength !== undefined ? options.minLength : MIN_LENGTH;
  if (!value || value.length < minLength) {
    return und();
  }
  value = value.slice(0, MAX_LENGTH);
  const script = getTopScript(value, expressions);
  if (!script[0] || !(script[0] in numericData)) {
    if (!script[0] || script[1] === 0 || !allow(script[0], only, ignore)) {
      return und();
    }
    return singleLanguageTuples(script[0]);
  }
  return normalize(value, getDistances(asTuples(value), numericData[script[0]], only, ignore));
}
function normalize(value, distances) {
  const min = distances[0][1];
  const max = value.length * MAX_DIFFERENCE - min;
  let index = -1;
  while (++index < distances.length) {
    distances[index][1] = 1 - (distances[index][1] - min) / max || 0;
  }
  return distances;
}
function getTopScript(value, scripts) {
  let topCount = -1;
  let topScript;
  let script;
  for (script in scripts) {
    if (own2.call(scripts, script)) {
      const count = getOccurrence(value, scripts[script]);
      if (count > topCount) {
        topCount = count;
        topScript = script;
      }
    }
  }
  return [topScript, topCount];
}
function getOccurrence(value, expression) {
  const count = value.match(expression);
  return (count ? count.length : 0) / value.length || 0;
}
function getDistances(trigrams, languages, only, ignore) {
  languages = filterLanguages(languages, only, ignore);
  const distances = [];
  let language;
  if (languages) {
    for (language in languages) {
      if (own2.call(languages, language)) {
        distances.push([language, getDistance(trigrams, languages[language])]);
      }
    }
  }
  return distances.length === 0 ? und() : distances.sort(sort2);
}
function getDistance(trigrams, model) {
  let distance = 0;
  let index = -1;
  while (++index < trigrams.length) {
    const trigram = trigrams[index];
    let difference = MAX_DIFFERENCE;
    if (trigram[0] in model) {
      difference = trigram[1] - model[trigram[0]] - 1;
      if (difference < 0) {
        difference = -difference;
      }
    }
    distance += difference;
  }
  return distance;
}
function filterLanguages(languages, only, ignore) {
  if (only.length === 0 && ignore.length === 0) {
    return languages;
  }
  const filteredLanguages = {};
  let language;
  for (language in languages) {
    if (allow(language, only, ignore)) {
      filteredLanguages[language] = languages[language];
    }
  }
  return filteredLanguages;
}
function allow(language, only, ignore) {
  if (only.length === 0 && ignore.length === 0) {
    return true;
  }
  return (only.length === 0 || only.includes(language)) && !ignore.includes(language);
}
function und() {
  return singleLanguageTuples("und");
}
function singleLanguageTuples(language) {
  return [[language, 1]];
}
function sort2(a, b) {
  return a[1] - b[1];
}

// src/detect.ts
var ENGLISH = "eng";
var MIN_PROSE = 80;
var NON_LATIN_RATIO = 0.02;
function proseOf(markdown) {
  return markdown.replace(/```[\s\S]*?```/g, " ").replace(/~~~[\s\S]*?~~~/g, " ").replace(/`[^`\n]*`/g, " ").replace(/^\s{4,}\S.*$/gm, " ").replace(/<[^>]+>/g, " ").replace(/\]\([^)]*\)/g, "] ").replace(/\b[a-z][a-z0-9+.-]*:\/\/\S+/gi, " ").replace(/^[>#\-*+\s|]+/gm, " ").replace(/\s+/g, " ").trim();
}
function nonLatinRatio(prose) {
  const letters = prose.match(/\p{L}/gu);
  if (!letters || letters.length === 0)
    return 0;
  const latin = prose.match(/\p{Script=Latin}/gu)?.length ?? 0;
  return (letters.length - latin) / letters.length;
}
function detect(content, targetLanguage) {
  if (targetLanguage.trim().toLowerCase() !== "english") {
    return { needsTranslation: true, reason: `target is ${targetLanguage}, not decided locally` };
  }
  const prose = proseOf(content);
  const ratio = nonLatinRatio(prose);
  if (ratio > NON_LATIN_RATIO) {
    return { needsTranslation: true, reason: `non-latin ratio ${ratio.toFixed(3)}` };
  }
  if (prose.length < MIN_PROSE) {
    return { needsTranslation: false, reason: `only ${prose.length} chars of prose` };
  }
  const lang = franc(prose, { minLength: 10 });
  if (lang === ENGLISH)
    return { needsTranslation: false, reason: "detected english" };
  if (lang === "und")
    return { needsTranslation: false, reason: "no language detected" };
  return { needsTranslation: true, reason: `detected ${lang}` };
}

// src/preview.ts
var fs2 = __toESM(require("fs/promises"), 1);
var http = __toESM(require("http"), 1);
var path3 = __toESM(require("path"), 1);

// node_modules/marked/lib/marked.esm.js
function A() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var R = A();
function j(l) {
  R = l;
}
var z = { exec: () => null };
function I(l) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), s = e[n];
    return s || (s = l(n), e[n] = s), s;
  };
}
function k(l, e = "") {
  let t = typeof l == "string" ? l : l.source, n = { replace: (s, r) => {
    let i = typeof r == "string" ? r : r.source;
    return i = i.replace(m.caret, "$1"), t = t.replace(s, i), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var Oe = ((l = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + l);
  } catch {
    return false;
  }
})();
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l) => new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: I((l) => new RegExp(`^ {0,${l}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: I((l) => new RegExp(`^ {0,${l}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: I((l) => new RegExp(`^ {0,${l}}(?:\`\`\`|~~~)`)), headingBeginRegex: I((l) => new RegExp(`^ {0,${l}}#`)), htmlBeginRegex: I((l) => new RegExp(`^ {0,${l}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: I((l) => new RegExp(`^ {0,${l}}>`)) };
var Te = /^(?:[ \t]*(?:\n|$))+/;
var we = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var ye = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var q = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Pe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var U = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
var oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ae = k(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Se = k(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var K = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
var _e = /^[^\n]+/;
var W = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var $e = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", W).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Le = k(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, U).getRegex();
var Q = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var X = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Ee = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))", "i").replace("comment", X).replace("tag", Q).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var le = (l) => k(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", l).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex();
var ze = le(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
var Me = le(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
var Ae = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Me).getRegex();
var J = { blockquote: Ae, code: we, def: $e, fences: ye, heading: Pe, hr: q, html: Ee, lheading: ae, list: Le, newline: Te, paragraph: ze, table: z, text: _e };
var se = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}\t)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex();
var Ie = { ...J, lheading: Se, table: se, paragraph: k(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", se).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex() };
var Ce = { ...J, html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", X).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: z, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: k(K).replace("hr", q).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ae).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Be = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var De = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var ue = /^( {2,}|\\)\n(?!\s*$)/;
var qe = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _ = /[\p{P}\p{S}]/u;
var C = /[\s\p{P}\p{S}]/u;
var v = /[^\s\p{P}\p{S}]/u;
var ve = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, C).getRegex();
var He = /[\p{Pi}\p{Ps}"']/u;
var pe = /(?!~)[\p{P}\p{S}]/u;
var Ze = /(?!~)[\s\p{P}\p{S}]/u;
var Ge = /(?:[^\s\p{P}\p{S}]|~)/u;
var Qe = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Oe ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ce = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
var Ne = k(ce, "u").replace(/punct/g, _).getRegex();
var je = k(ce, "u").replace(/punct/g, pe).getRegex();
var Fe = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/;
var Ue = k(Fe, "u").replace(/openQuote/g, He).replace(/punct/g, _).getRegex();
var he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var Ke = k(he, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
var We = k(he, "gu").replace(/notPunctSpace/g, Ge).replace(/punctSpace/g, Ze).replace(/punct/g, pe).getRegex();
var Xe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)";
var Je = k(Xe, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
var Ve = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
var Ye = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)";
var et = k(Ye, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
var tt = k(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, _).getRegex();
var nt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
var rt = k(nt, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
var st = k(/\\(punct)/, "gu").replace(/punct/g, _).getRegex();
var it = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var ot = k(X).replace("(?:-->|$)", "-->").getRegex();
var at = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ot).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var G = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/;
var lt = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", G).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var ke = k(/^!?\[(label)\]\[(ref)\]/).replace("label", G).replace("ref", W).getRegex();
var de = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", W).getRegex();
var ut = k("reflink|nolink(?!\\()", "g").replace("reflink", ke).replace("nolink", de).getRegex();
var ie = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var V = { _backpedal: z, anyPunctuation: st, autolink: it, blockSkip: Qe, br: ue, code: De, del: z, delLDelim: z, delRDelim: z, emStrongLDelim: Ne, emStrongRDelimAst: Ke, emStrongRDelimUnd: Ve, escape: Be, link: lt, nolink: de, punctuation: ve, reflink: ke, reflinkSearch: ut, tag: at, text: qe, url: z };
var pt = { ...V, emStrongLDelim: Ue, emStrongRDelimAst: Je, emStrongRDelimUnd: et, link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", G).getRegex(), reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G).getRegex() };
var F = { ...V, emStrongRDelimAst: We, emStrongLDelim: je, delLDelim: tt, delRDelim: rt, url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ie).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: k(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ie).getRegex() };
var ct = { ...F, br: k(ue).replace("{2,}", "*").getRegex(), text: k(F.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var H = { normal: J, gfm: Ie, pedantic: Ce };
var B = { normal: V, gfm: F, breaks: ct, pedantic: pt };
var ht = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = (l) => ht[l];
function T(l, e) {
  if (e) {
    if (m.escapeTest.test(l))
      return l.replace(m.escapeReplace, ge);
  } else if (m.escapeTestNoEncode.test(l))
    return l.replace(m.escapeReplaceNoEncode, ge);
  return l;
}
function Y(l) {
  try {
    l = encodeURI(l).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return l;
}
function ee(l, e) {
  let t = l.replace(m.findPipe, (r, i, o) => {
    let u = false, a = i;
    for (;--a >= 0 && o[a] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), n = t.split(m.splitPipe), s = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e)
    if (n.length > e)
      n.splice(e);
    else
      for (;n.length < e; )
        n.push("");
  for (;s < n.length; s++)
    n[s] = n[s].trim().replace(m.slashPipe, "|");
  return n;
}
function $(l, e, t) {
  let n = l.length;
  if (n === 0)
    return "";
  let s = 0;
  for (;s < n; ) {
    let r = l.charAt(n - s - 1);
    if (r === e && !t)
      s++;
    else if (r !== e && t)
      s++;
    else
      break;
  }
  return l.slice(0, n - s);
}
function te(l) {
  let e = l.split(`
`), t = e.length - 1;
  for (;t >= 0 && m.blankLine.test(e[t]); )
    t--;
  return e.length - t <= 2 ? l : e.slice(0, t + 1).join(`
`);
}
function fe(l, e) {
  if (l.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let n = 0;n < l.length; n++)
    if (l[n] === "\\")
      n++;
    else if (l[n] === e[0])
      t++;
    else if (l[n] === e[1] && (t--, t < 0))
      return n;
  return t > 0 ? -2 : -1;
}
function me(l, e = 0) {
  let t = e, n = "";
  for (let s of l)
    if (s === "\t") {
      let r = 4 - t % 4;
      n += " ".repeat(r), t += r;
    } else
      n += s, t++;
  return n;
}
function xe(l, e, t, n, s) {
  let r = e.href, i = e.title || null, o = l[1].replace(s.other.outputLinkReplace, "$1"), u = l[0].charAt(0) === "!";
  n.state.inLink = true;
  let a = n.state.linkEmitted, p = n.state.inRawBlock;
  n.state.linkEmitted = false;
  let c = n.inlineTokens(o), h = n.state.linkEmitted;
  if (n.state.linkEmitted = a, n.state.inLink = false, !u) {
    if (h) {
      n.state.inRawBlock = p;
      return;
    }
    n.state.linkEmitted = true;
  }
  return { type: u ? "image" : "link", raw: t, href: r, title: i, text: o, tokens: c };
}
function kt(l, e, t) {
  let n = l.match(t.other.indentCodeCompensation);
  if (n === null)
    return e;
  let s = n[1];
  return e.split(`
`).map((r) => {
    let i = r.match(t.other.beginningSpace);
    if (i === null)
      return r;
    let [o] = i;
    return o.length >= s.length ? r.slice(s.length) : r;
  }).join(`
`);
}
var y = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || R;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = this.options.pedantic ? t[0] : te(t[0]), s = n.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n, codeBlockStyle: "indented", text: s };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], s = kt(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let s = $(n, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (n = s.trim());
      }
      return { type: "heading", raw: $(t[0], `
`), depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t)
      return { type: "hr", raw: $(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = $(t[0], `
`).split(`
`), s = "", r = "", i = [];
      for (;n.length > 0; ) {
        let o = false, u = [], a;
        for (a = 0;a < n.length; a++)
          if (this.rules.other.blockquoteStart.test(n[a]))
            u.push(n[a]), o = true;
          else if (!o)
            u.push(n[a]);
          else
            break;
        n = n.slice(a);
        let p = u.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${p}` : p, r = r ? `${r}
${c}` : c;
        let h = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, i, true), this.lexer.state.top = h, n.length === 0)
          break;
        let d = i.at(-1);
        if (d?.type === "code")
          break;
        if (d?.type === "blockquote") {
          let O = d, g = n.join(`
`), w = O.raw + `
` + g.replace(this.rules.other.blockquoteSetextReplace2, ""), E = this.blockquote(w);
          i[i.length - 1] = E, s = `${s}
${g}`, r = r.substring(0, r.length - O.text.length) + E.text;
          break;
        } else if (d?.type === "list") {
          let O = d, g = O.raw + `
` + n.join(`
`), w = this.list(g);
          i[i.length - 1] = w, s = s.substring(0, s.length - d.raw.length) + w.raw, r = r.substring(0, r.length - O.raw.length) + w.raw, n = g.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: i, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), s = n.length > 1, r = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      let i = this.rules.other.listItemRegex(n), o = false;
      for (;e; ) {
        let a = false, p = "", c = "";
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e))
          break;
        p = t[0], e = e.substring(p.length);
        let h = me(t[2].split(`
`, 1)[0], t[1].length), d = e.split(`
`, 1)[0], O = !h.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, c = h.trimStart()) : O ? g = t[1].length + 1 : (g = h.search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c = h.slice(g), g += t[1].length), O && this.rules.other.blankLine.test(d) && (p += d + `
`, e = e.substring(d.length + 1), a = true), !a) {
          let w = this.rules.other.nextBulletRegex(g), E = this.rules.other.hrRegex(g), ne = this.rules.other.fencesBeginRegex(g), re = this.rules.other.headingBeginRegex(g), be = this.rules.other.htmlBeginRegex(g), Re = this.rules.other.blockquoteBeginRegex(g);
          for (;e; ) {
            let N = e.split(`
`, 1)[0], D;
            if (d = N, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), D = d) : D = d.replace(this.rules.other.tabCharGlobal, "    "), ne.test(d) || re.test(d) || be.test(d) || Re.test(d) || w.test(d) || E.test(d))
              break;
            if (D.search(this.rules.other.nonSpaceChar) >= g || !d.trim())
              c += `
` + D.slice(g);
            else {
              if (O || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ne.test(h) || re.test(h) || E.test(h))
                break;
              c += `
` + d;
            }
            O = !d.trim(), p += N + `
`, e = e.substring(N.length + 1), h = D.slice(g);
          }
        }
        r.loose || (o ? r.loose = true : this.rules.other.doubleBlankLine.test(p) && (o = true)), r.items.push({ type: "list_item", raw: p, task: !!this.options.gfm && this.rules.other.listIsTask.test(c), loose: false, text: c, tokens: [] }), r.raw += p;
      }
      let u = r.items.at(-1);
      if (u)
        u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
      else
        return;
      r.raw = r.raw.trimEnd();
      for (let a of r.items)
        if (this.lexer.state.top = false, a.tokens = this.lexer.blockTokens(a.text, []), !r.loose) {
          let p = a.tokens.filter((h) => h.type === "space"), c = p.length > 0 && p.some((h) => this.rules.other.anyLine.test(h.raw));
          r.loose = c;
        }
      for (let a of r.items) {
        let p = a.tokens[0];
        if (a.task && (p?.type === "text" || p?.type === "paragraph")) {
          a.text = a.text.replace(this.rules.other.listReplaceTask, ""), p.raw = p.raw.replace(this.rules.other.listReplaceTask, ""), p.text = p.text.replace(this.rules.other.listReplaceTask, "");
          for (let h = this.lexer.inlineQueue.length - 1;h >= 0; h--)
            if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)) {
              this.lexer.inlineQueue[h].src = this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          let c = this.rules.other.listTaskCheckbox.exec(a.raw);
          if (c) {
            let h = { type: "checkbox", raw: c[0] + " ", checked: c[0] !== "[ ]" };
            a.checked = h.checked, r.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = h.raw + a.tokens[0].raw, a.tokens[0].text = h.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(h)) : a.tokens.unshift({ type: "paragraph", raw: h.raw, text: h.raw, tokens: [h] }) : a.tokens.unshift(h);
          }
        } else
          a.task && (a.task = false);
      }
      if (r.loose)
        for (let a of r.items) {
          a.loose = true;
          for (let p of a.tokens)
            p.type === "text" && (p.type = "paragraph");
        }
      return r;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) {
      let n = te(t[0]);
      return { type: "html", block: true, raw: n, pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: n };
    }
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: $(t[0], `
`), href: s, title: r };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2]))
      return;
    let n = ee(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: $(t[0], `
`), header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (let o of s)
        this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
      for (let o = 0;o < n.length; o++)
        i.header.push({ text: n[o], tokens: this.lexer.inline(n[o]), header: true, align: i.align[o] });
      for (let o of r)
        i.rows.push(ee(o, i.header.length).map((u, a) => ({ text: u, tokens: this.lexer.inline(u), header: false, align: i.align[a] })));
      return i;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) {
      let n = t[1].trim();
      return { type: "heading", raw: $(t[0], `
`), depth: t[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
    }
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t)
      return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t)
      return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n))
          return;
        let i = $(n.slice(0, -1), "\\");
        if ((n.length - i.length) % 2 === 0)
          return;
      } else {
        let i = fe(t[2], "()");
        if (i === -2)
          return;
        if (i > -1) {
          let u = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, u).trim(), t[3] = "";
        }
      }
      let s = t[2], r = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(s);
        i && (s = i[1], r = i[3]);
      } else
        r = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? s = s.slice(1) : s = s.slice(1, -1)), xe(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let s = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[s.toLowerCase()];
      if (!r) {
        let i = n[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return xe(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || !s[1] && !s[2] && !s[3] && !s[4] || s[4] && n.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(s[1] || s[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let i = [...s[0]].length - 1, o, u, a = i, p = 0, c = s[0][0], h = n === c, d = c === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + i);(s = d.exec(t)) !== null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o)
          continue;
        if (u = [...o].length, s[3] || s[4]) {
          a += u;
          continue;
        } else if (s[5] || s[6]) {
          if (i % 3 && !((i + u) % 3)) {
            p += u;
            continue;
          }
          if (h)
            break;
        }
        if (a -= u, a > 0)
          continue;
        u = Math.min(u, u + a + p);
        let O = [...s[0]][0].length, g = e.slice(0, i + s.index + O + u);
        if (Math.min(i, u) % 2) {
          let E = g.slice(1, -1);
          return { type: "em", raw: g, text: E, tokens: this.lexer.inlineTokens(E) };
        }
        let w = g.slice(2, -2);
        return { type: "strong", raw: g, text: w, tokens: this.lexer.inlineTokens(w) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return s && r && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t)
      return { type: "br", raw: t[0] };
  }
  del(e, t, n = "") {
    let s = this.rules.inline.delLDelim.exec(e);
    if (!s)
      return;
    if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let i = [...s[0]].length - 1, o, u, a = i, p = this.rules.inline.delRDelim;
      for (p.lastIndex = 0, t = t.slice(-1 * e.length + i);(s = p.exec(t)) !== null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o || (u = [...o].length, u !== i))
          continue;
        if (s[3] || s[4]) {
          a += u;
          continue;
        }
        if (a -= u, a > 0)
          continue;
        u = Math.min(u, u + a);
        let c = [...s[0]][0].length, h = e.slice(0, i + s.index + c + u), d = h.slice(i, -i);
        return { type: "del", raw: h, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, s;
      if (t[2] === "@")
        n = t[0], s = "mailto:" + n;
      else {
        let r;
        do
          r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (r !== t[0]);
        n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
};
var x = class l {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e) {
    this.tokens = [], this.tokens.links = Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new y, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, linkEmitted: false, top: true };
    let t = { other: m, block: H.normal, inline: B.normal };
    this.options.pedantic ? (t.block = H.pedantic, t.inline = B.pedantic) : this.options.gfm && (t.block = H.gfm, this.options.breaks ? t.inline = B.breaks : t.inline = B.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: H, inline: B };
  }
  static lex(e, t) {
    return new l(t).lex(e);
  }
  static lexInline(e, t) {
    return new l(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0;t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, ""));
    let s = 1 / 0;
    for (;e; ) {
      if (e.length < s)
        s = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let r;
      if (this.options.extensions?.block?.some((o) => (r = o.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false))
        continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        r.raw.length === 1 && o !== undefined ? o.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.at(-1).src = o.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let o = 1 / 0, u = e.slice(1), a;
        this.options.extensions.startBlock.forEach((p) => {
          a = p.call({ lexer: this }, u), typeof a == "number" && a >= 0 && (o = Math.min(o, a));
        }), o < 1 / 0 && o >= 0 && (i = e.substring(0, o + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let o = t.at(-1);
        n && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  linkInText(e) {
    if (!e.includes("["))
      return false;
    let t = this.tokenizer.rules.inline.link;
    for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))
      if (t.test(n[0]) && e.charAt(n.index - 1) !== "!")
        return true;
    for (let n of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
      let s = n[0], r = s.lastIndexOf("[");
      if (!(s.charAt(0) === "!" || !Object.hasOwn(this.tokens.links, s.slice(r + 1, -1))) && !(r > 1 && this.linkInText(s.slice(1, r - 1))))
        return true;
    }
    return false;
  }
  inlineTokens(e, t = []) {
    this.tokenizer.lexer = this;
    let n = e;
    if (this.tokens.links && e.includes("[")) {
      let o = this.tokenizer.rules.inline.reflinkSearch, u = (a) => {
        let p = a.lastIndexOf("[");
        if (!Object.hasOwn(this.tokens.links, a.slice(p + 1, -1)))
          return a;
        if (p > 1 && a.charAt(0) !== "!") {
          let c = a.slice(1, p - 1);
          if (this.linkInText(c))
            return "[" + c.replace(o, u) + "][" + "a".repeat(a.length - p - 2) + "]";
        }
        return "[" + "a".repeat(a.length - 2) + "]";
      };
      n = n.replace(o, u);
    }
    n = n.replace(this.tokenizer.rules.inline.anyPunctuation, (o) => "+".repeat(o.length)), n = n.replace(this.tokenizer.rules.inline.blockSkip, (o, u, a) => {
      let p = a ? a.length : 0;
      return o.slice(0, p) + "[" + "a".repeat(o.length - p - 2) + "]";
    }), n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let s = false, r = "", i = 1 / 0;
    for (;e; ) {
      if (e.length < i)
        i = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (r = ""), s = false;
      let o;
      if (this.options.extensions?.inline?.some((a) => (o = a.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), true) : false))
        continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let a = t.at(-1);
        o.type === "text" && a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, r)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e, n, r)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let u = e;
      if (this.options.extensions?.startInline) {
        let a = 1 / 0, p = e.slice(1), c;
        this.options.extensions.startInline.forEach((h) => {
          c = h.call({ lexer: this }, p), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
        }), a < 1 / 0 && a >= 0 && (u = e.substring(0, a + 1));
      }
      if (o = this.tokenizer.inlineText(u)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (r = o.raw.slice(-1)), s = true;
        let a = t.at(-1);
        a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t.push(o);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return t;
  }
  infiniteLoopError(e) {
    let t = "Infinite loop on byte: " + e;
    if (this.options.silent)
      console.error(t);
    else
      throw new Error(t);
  }
};
var P = class {
  options;
  parser;
  constructor(e) {
    this.options = e || R;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let s = (t || "").match(m.notSpaceStart)?.[0], r = e.replace(m.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + T(s) + '">' + (n ? r : T(r, true)) + `</code></pre>
` : "<pre><code>" + (n ? r : T(r, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let { ordered: t, start: n } = e, s = "";
    for (let o = 0;o < e.items.length; o++) {
      let u = e.items[o];
      s += this.listitem(u);
    }
    let r = t ? "ol" : "ul", i = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + i + `>
` + s + "</" + r + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let r = 0;r < e.header.length; r++)
      n += this.tablecell(e.header[r]);
    t += this.tablerow({ text: n });
    let s = "";
    for (let r = 0;r < e.rows.length; r++) {
      let i = e.rows[r];
      n = "";
      for (let o = 0;o < i.length; o++)
        n += this.tablecell(i[o]);
      s += this.tablerow({ text: n });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${T(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let s = this.parser.parseInline(n), r = Y(e);
    if (r === null)
      return s;
    e = r;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + T(t) + '"'), i += ">" + s + "</a>", i;
  }
  image({ href: e, title: t, text: n, tokens: s }) {
    s && (n = this.parser.parseInline(s, this.parser.textRenderer));
    let r = Y(e);
    if (r === null)
      return T(n);
    e = r;
    let i = `<img src="${e}" alt="${T(n)}"`;
    return t && (i += ` title="${T(t)}"`), i += ">", i;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : ("escaped" in e) && e.escaped ? e.text : T(e.text);
  }
};
var L = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
  checkbox({ raw: e }) {
    return e;
  }
};
var b = class l {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || R, this.options.renderer = this.options.renderer || new P, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L;
  }
  static parse(e, t) {
    return new l(t).parse(e);
  }
  static parseInline(e, t) {
    return new l(t).parseInline(e);
  }
  parse(e) {
    this.renderer.parser = this;
    let t = "";
    for (let n = 0;n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let i = s, o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "checkbox", "html", "def", "paragraph", "text"].includes(i.type)) {
          t += o || "";
          continue;
        }
      }
      let r = s;
      switch (r.type) {
        case "space": {
          t += this.renderer.space(r);
          break;
        }
        case "hr": {
          t += this.renderer.hr(r);
          break;
        }
        case "heading": {
          t += this.renderer.heading(r);
          break;
        }
        case "code": {
          t += this.renderer.code(r);
          break;
        }
        case "table": {
          t += this.renderer.table(r);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(r);
          break;
        }
        case "list": {
          t += this.renderer.list(r);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(r);
          break;
        }
        case "html": {
          t += this.renderer.html(r);
          break;
        }
        case "def": {
          t += this.renderer.def(r);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(r);
          break;
        }
        case "text": {
          t += this.renderer.text(r);
          break;
        }
        default: {
          let i = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent)
            return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    this.renderer.parser = this;
    let n = "";
    for (let s = 0;s < e.length; s++) {
      let r = e[s];
      if (this.options.extensions?.renderers?.[r.type]) {
        let o = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (o !== false || !["escape", "html", "link", "image", "checkbox", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          n += o || "";
          continue;
        }
      }
      let i = r;
      switch (i.type) {
        case "escape": {
          n += t.text(i);
          break;
        }
        case "html": {
          n += t.html(i);
          break;
        }
        case "link": {
          n += t.link(i);
          break;
        }
        case "image": {
          n += t.image(i);
          break;
        }
        case "checkbox": {
          n += t.checkbox(i);
          break;
        }
        case "strong": {
          n += t.strong(i);
          break;
        }
        case "em": {
          n += t.em(i);
          break;
        }
        case "codespan": {
          n += t.codespan(i);
          break;
        }
        case "br": {
          n += t.br(i);
          break;
        }
        case "del": {
          n += t.del(i);
          break;
        }
        case "text": {
          n += t.text(i);
          break;
        }
        default: {
          let o = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
};
var S = class {
  options;
  block;
  constructor(e) {
    this.options = e || R;
  }
  static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer(e = this.block) {
    return e ? x.lex : x.lexInline;
  }
  provideParser(e = this.block) {
    return e ? b.parse : b.parseInline;
  }
};
var Z = class {
  defaults = A();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = b;
  Renderer = P;
  TextRenderer = L;
  Lexer = x;
  Tokenizer = y;
  Hooks = S;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let s of e)
      switch (n = n.concat(t.call(this, s)), s.type) {
        case "table": {
          let r = s;
          for (let i of r.header)
            n = n.concat(this.walkTokens(i.tokens, t));
          for (let i of r.rows)
            for (let o of i)
              n = n.concat(this.walkTokens(o.tokens, t));
          break;
        }
        case "list": {
          let r = s;
          n = n.concat(this.walkTokens(r.items, t));
          break;
        }
        default: {
          let r = s;
          this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((i) => {
            let o = r[i].flat(1 / 0);
            n = n.concat(this.walkTokens(o, t));
          }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let s = { ...n };
      if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name)
          throw new Error("extension name required");
        if ("renderer" in r) {
          let i = t.renderers[r.name];
          i ? t.renderers[r.name] = function(...o) {
            let u = r.renderer.apply(this, o);
            return u === false && (u = i.apply(this, o)), u;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          let i = t[r.level];
          i ? i.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), s.extensions = t), n.renderer) {
        let r = this.defaults.renderer || new P(this.defaults);
        for (let i in n.renderer) {
          if (!(i in r))
            throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i))
            continue;
          let o = i, u = n.renderer[o], a = r[o];
          r[o] = (...p) => {
            let c = u.apply(r, p);
            return c === false && (c = a.apply(r, p)), c || "";
          };
        }
        s.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new y(this.defaults);
        for (let i in n.tokenizer) {
          if (!(i in r))
            throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i))
            continue;
          let o = i, u = n.tokenizer[o], a = r[o];
          r[o] = (...p) => {
            let c = u.apply(r, p);
            return c === false && (c = a.apply(r, p)), c;
          };
        }
        s.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new S;
        for (let i in n.hooks) {
          if (!(i in r))
            throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i))
            continue;
          let o = i, u = n.hooks[o], a = r[o];
          S.passThroughHooks.has(i) ? r[o] = (p) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(i))
              return (async () => {
                let h = await u.call(r, p);
                return a.call(r, h);
              })();
            let c = u.call(r, p);
            return a.call(r, c);
          } : r[o] = (...p) => {
            if (this.defaults.async)
              return (async () => {
                let h = await u.apply(r, p);
                return h === false && (h = await a.apply(r, p)), h;
              })();
            let c = u.apply(r, p);
            return c === false && (c = a.apply(r, p)), c;
          };
        }
        s.hooks = r;
      }
      if (n.walkTokens) {
        let r = this.defaults.walkTokens, i = n.walkTokens;
        s.walkTokens = function(o) {
          let u = [];
          return u.push(i.call(this, o)), r && (u = u.concat(r.call(this, o))), u;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return x.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return b.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, s) => {
      let r = { ...s }, i = { ...this.defaults, ...r }, o = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === true && r.async === false)
        return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null)
        return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async)
        return (async () => {
          let u = i.hooks ? await i.hooks.preprocess(n) : n, p = await (i.hooks ? await i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(u, i), c = i.hooks ? await i.hooks.processAllTokens(p) : p;
          i.walkTokens && await Promise.all(this.walkTokens(c, i.walkTokens));
          let d = await (i.hooks ? await i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(c, i);
          return i.hooks ? await i.hooks.postprocess(d) : d;
        })().catch(o);
      try {
        i.hooks && (n = i.hooks.preprocess(n));
        let a = (i.hooks ? i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, i);
        i.hooks && (a = i.hooks.processAllTokens(a)), i.walkTokens && this.walkTokens(a, i.walkTokens);
        let c = (i.hooks ? i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(a, i);
        return i.hooks && (c = i.hooks.postprocess(c)), c;
      } catch (u) {
        return o(u);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let s = "<p>An error occurred:</p><pre>" + T(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t)
        return Promise.reject(n);
      throw n;
    };
  }
};
var M = new Z;
function f(l, e) {
  return M.parse(l, e);
}
f.options = f.setOptions = function(l) {
  return M.setOptions(l), f.defaults = M.defaults, j(f.defaults), f;
};
f.getDefaults = A;
f.defaults = R;
function dt(...l) {
  return M.use(...l), f.defaults = M.defaults, j(f.defaults), f;
}
f.use = dt;
f.walkTokens = function(l, e) {
  return M.walkTokens(l, e);
};
f.parseInline = M.parseInline;
f.Parser = b;
f.parser = b.parse;
f.Renderer = P;
f.TextRenderer = L;
f.Lexer = x;
f.lexer = x.lex;
f.Tokenizer = y;
f.Hooks = S;
f.parse = f;
var nn = f.options;
var rn = f.setOptions;
var sn = f.walkTokens;
var on = f.parseInline;
var ln = b.parse;
var un = x.lex;

// src/cache.ts
var crypto = __toESM(require("crypto"), 1);
var fs = __toESM(require("fs/promises"), 1);
var path2 = __toESM(require("path"), 1);
async function writeGuarded(filePath, content, readOnly) {
  await fs.mkdir(path2.dirname(filePath), { recursive: true });
  await fs.rm(filePath, { force: true });
  await fs.writeFile(filePath, content, { mode: readOnly ? 292 : 420 });
}
function sha256(input) {
  return crypto.createHash("sha256").update(input).digest("hex");
}
function cacheKey(parts) {
  return sha256([parts.content, parts.prompt, parts.agent, parts.model ?? ""].join("\x00"));
}
function cachePaths(cacheDir, sourcePath) {
  const slug = sha256(sourcePath).slice(0, 16);
  const base = path2.basename(sourcePath);
  return {
    outPath: path2.join(cacheDir, "out", slug, base),
    metaPath: path2.join(cacheDir, "meta", `${slug}.json`)
  };
}
async function readFresh(entry, key) {
  try {
    const meta = JSON.parse(await fs.readFile(entry.metaPath, "utf-8"));
    if (meta.key !== key)
      return null;
    if (meta.skipped)
      return meta;
    await fs.access(entry.outPath);
    return meta;
  } catch {
    return null;
  }
}
async function writeOutput(entry, content, meta, readOnly = false) {
  await fs.mkdir(path2.dirname(entry.metaPath), { recursive: true });
  await writeGuarded(entry.outPath, content, readOnly);
  await fs.writeFile(entry.metaPath, JSON.stringify({ ...meta, processedAt: new Date().toISOString() }, null, 2), "utf-8");
}
async function writeSkip(entry, meta) {
  await fs.mkdir(path2.dirname(entry.metaPath), { recursive: true });
  await fs.rm(path2.dirname(entry.outPath), { recursive: true, force: true });
  await fs.writeFile(entry.metaPath, JSON.stringify({ ...meta, skipped: true, processedAt: new Date().toISOString() }, null, 2), "utf-8");
}
async function writePlaceholder(entry, content) {
  await writeGuarded(entry.outPath, content, false);
  await fs.rm(entry.metaPath, { force: true });
}
async function pruneCache(cacheDir, maxEntries) {
  if (maxEntries <= 0)
    return 0;
  const metaDir = path2.join(cacheDir, "meta");
  let names;
  try {
    names = (await fs.readdir(metaDir)).filter((n) => n.endsWith(".json"));
  } catch {
    return 0;
  }
  if (names.length <= maxEntries)
    return 0;
  const entries = await Promise.all(names.map(async (name) => {
    const metaPath = path2.join(metaDir, name);
    try {
      const meta = JSON.parse(await fs.readFile(metaPath, "utf-8"));
      const at = Date.parse(meta.processedAt);
      return { metaPath, source: meta.source, at: Number.isNaN(at) ? 0 : at };
    } catch {
      return { metaPath, source: null, at: 0 };
    }
  }));
  entries.sort((a, b) => a.at - b.at);
  const doomed = entries.slice(0, entries.length - maxEntries);
  for (const entry of doomed) {
    if (entry.source) {
      const outPath = cachePaths(cacheDir, entry.source).outPath;
      await fs.rm(path2.dirname(outPath), { recursive: true, force: true });
    }
    await fs.rm(entry.metaPath, { force: true });
  }
  return doomed.length;
}

// src/preview.ts
var POLL_MS = 1200;
async function latestEntry(cacheDir) {
  const metaDir = path3.join(cacheDir, "meta");
  let names;
  try {
    names = (await fs2.readdir(metaDir)).filter((n) => n.endsWith(".json"));
  } catch {
    return null;
  }
  let best = null;
  for (const name of names) {
    try {
      const meta = JSON.parse(await fs2.readFile(path3.join(metaDir, name), "utf-8"));
      if (meta.skipped)
        continue;
      if (!best || Date.parse(meta.processedAt) > Date.parse(best.processedAt)) {
        best = meta;
      }
    } catch {}
  }
  if (!best)
    return null;
  try {
    const markdown = await fs2.readFile(cachePaths(cacheDir, best.source).outPath, "utf-8");
    return { meta: best, markdown };
  } catch {
    return null;
  }
}
function defang(html) {
  return html.replace(/<\s*(script|iframe|object|embed)\b[\s\S]*?<\s*\/\s*\1\s*>/gi, "").replace(/<\s*(script|iframe|object|embed)\b[^>]*>/gi, "").replace(/\son[a-z]+\s*=\s*"[^"]*"/gi, "").replace(/\son[a-z]+\s*=\s*'[^']*'/gi, "").replace(/\son[a-z]+\s*=\s*[^\s>]+/gi, "").replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"');
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
var PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI Lens</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #ffffff; --fg: #1f2328; --muted: #59636e; --rule: #d1d9e0;
    --code-bg: #f6f8fa; --accent: #0969da;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0d1117; --fg: #e6edf3; --muted: #9198a1; --rule: #3d444d;
      --code-bg: #161b22; --accent: #4493f8;
    }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--bg); color: var(--fg);
    font: 16px/1.65 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }
  header {
    position: sticky; top: 0; z-index: 5; background: var(--bg);
    border-bottom: 1px solid var(--rule); padding: 10px 24px;
    display: flex; gap: 12px; align-items: baseline;
  }
  header .name { font-weight: 600; }
  header .path, header .meta { color: var(--muted); font-size: 12px; }
  header .meta { margin-left: auto; }
  main { max-width: 860px; margin: 0 auto; padding: 28px 24px 96px; }
  main :first-child { margin-top: 0; }
  h1, h2, h3, h4 { line-height: 1.3; margin: 1.6em 0 .6em; }
  h1, h2 { border-bottom: 1px solid var(--rule); padding-bottom: .3em; }
  a { color: var(--accent); }
  code {
    background: var(--code-bg); padding: .2em .4em; border-radius: 6px;
    font: 13px/1.5 ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  }
  pre {
    background: var(--code-bg); padding: 14px 16px; border-radius: 8px;
    overflow-x: auto;
  }
  pre code { background: none; padding: 0; }
  blockquote {
    margin: 1em 0; padding: 0 1em; color: var(--muted);
    border-left: 3px solid var(--rule);
  }
  table { border-collapse: collapse; display: block; overflow-x: auto; }
  th, td { border: 1px solid var(--rule); padding: 6px 13px; }
  img { max-width: 100%; }
  .empty { color: var(--muted); padding: 64px 24px; text-align: center; }
</style>
</head>
<body>
<header>
  <span class="name" id="name">AI Lens</span>
  <span class="path" id="path"></span>
  <span class="meta" id="meta">waiting…</span>
</header>
<main id="content"><div class="empty">No translation yet. Open a non-English Markdown file in Zed.</div></main>
<script>
  let currentId = null;
  async function poll() {
    try {
      const res = await fetch("/latest", { cache: "no-store" });
      const data = await res.json();
      if (data.id && data.id !== currentId) {
        currentId = data.id;
        document.getElementById("name").textContent = data.title;
        document.getElementById("path").textContent = data.source;
        document.getElementById("meta").textContent = data.agent + " · " + data.processedAt;
        document.getElementById("content").innerHTML = data.html;
        document.title = data.title + " — AI Lens";
        window.scrollTo(0, 0);
      }
    } catch (e) {
      document.getElementById("meta").textContent = "disconnected";
    }
    setTimeout(poll, __POLL_MS__);
  }
  poll();
</script>
</body>
</html>`;
function startPreviewServer(opts) {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      try {
        const url = (req.url ?? "/").split("?")[0];
        if (url === "/latest") {
          const found = await latestEntry(opts.cacheDir);
          res.writeHead(200, {
            "Content-Type": "application/json",
            "Cache-Control": "no-store"
          });
          if (!found) {
            res.end(JSON.stringify({ id: null }));
            return;
          }
          const isMarkdown = /\.(md|markdown|mdx)$/i.test(found.meta.source);
          const html = isMarkdown ? defang(await f.parse(found.markdown, { async: true, gfm: true })) : `<pre><code>${escapeHtml(found.markdown)}</code></pre>`;
          res.end(JSON.stringify({
            id: found.meta.key,
            title: path3.basename(found.meta.source),
            source: found.meta.source,
            agent: found.meta.agent,
            processedAt: found.meta.processedAt,
            html
          }));
          return;
        }
        if (url === "/" || url === "/index.html") {
          res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store"
          });
          res.end(PAGE.replace("__POLL_MS__", String(POLL_MS)));
          return;
        }
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("not found");
      } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(escapeHtml(error instanceof Error ? error.message : String(error)));
      }
    });
    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        opts.log(`preview: port ${opts.port} already served by another instance`);
      } else {
        opts.log(`preview: failed to start: ${error.message}`);
      }
      resolve(null);
    });
    server.listen(opts.port, "127.0.0.1", () => {
      resolve(`http://127.0.0.1:${opts.port}/`);
    });
    if (!opts.keepAlive)
      server.unref();
  });
}

// src/open.ts
var import_child_process2 = require("child_process");
function openInZed(filePath, binary = "zed") {
  return new Promise((resolve) => {
    try {
      const child = import_child_process2.spawn(binary, ["--add", filePath], {
        detached: true,
        stdio: "ignore"
      });
      child.on("error", () => resolve(false));
      child.on("spawn", () => {
        child.unref();
        resolve(true);
      });
    } catch {
      resolve(false);
    }
  });
}

// src/index.ts
var import_child_process3 = require("child_process");
function debugLog(message) {
  try {
    const dir = config?.cacheDir ?? path4.join(process.env.HOME ?? "/tmp", ".cache", "zed-ai-lens");
    fsSync.mkdirSync(dir, { recursive: true });
    fsSync.appendFileSync(path4.join(dir, "ai-lens.log"), `${new Date().toISOString()} ${message}
`);
  } catch {}
}
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});
var connection = import_node.createConnection(import_node.ProposedFeatures.all);
var documents = new import_node.TextDocuments(TextDocument);
var config;
var isIncluded;
var isExcluded;
var inFlight = new Set;
var queue = Promise.resolve();
var queued = 0;
function enqueue(task) {
  queued++;
  const run = queue.then(task, task);
  queue = run.then(() => {
    queued--;
  }, () => {
    queued--;
  });
  return run;
}
var initOptions;
var supportsProgress = false;
var previewUrl = null;
var previewOpened = false;
function applyConfig(raw) {
  config = resolveConfig(raw);
  isIncluded = config.include.length ? import_picomatch.default(config.include, { dot: true }) : () => false;
  isExcluded = config.exclude.length ? import_picomatch.default(config.exclude, { dot: true }) : () => false;
}
connection.onInitialize((params) => {
  initOptions = params.initializationOptions ?? {};
  applyConfig(initOptions);
  supportsProgress = params.capabilities.window?.workDoneProgress === true;
  debugLog(`initialize: rootUri=${params.rootUri} initializationOptions=${JSON.stringify(params.initializationOptions)}`);
  debugLog(`resolved: agent=${config.agent} include=${JSON.stringify(config.include)} workDoneProgress=${supportsProgress}`);
  return {
    capabilities: {
      textDocumentSync: {
        openClose: true,
        change: import_node.TextDocumentSyncKind.Full,
        save: false
      }
    }
  };
});
connection.onInitialized(async () => {
  connection.console.log(`AI Lens ready — agent=${config.agent} include=${JSON.stringify(config.include)}`);
  if (config.include.length === 0) {
    connection.console.log("AI Lens: no `include` globs configured, so nothing will be processed.");
  }
  if (config.preview.enabled) {
    previewUrl = await startPreviewServer({
      port: config.preview.port,
      cacheDir: config.cacheDir,
      log: debugLog
    });
    if (previewUrl)
      debugLog(`preview: serving ${previewUrl}`);
  }
});
function revealPreview() {
  if (!previewUrl || previewOpened || !config.preview.open)
    return;
  previewOpened = true;
  try {
    const opener = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
    import_child_process3.spawn(opener, [previewUrl], { detached: true, stdio: "ignore" }).unref();
    debugLog(`preview: opened ${previewUrl}`);
  } catch (error) {
    debugLog(`preview: could not open browser: ${describe(error)}`);
  }
}
connection.onDidChangeConfiguration((params) => {
  const settings = params.settings;
  if (!settings || typeof settings !== "object")
    return;
  const scoped = settings["ai-lens"] ?? settings;
  if (!scoped || typeof scoped !== "object" || Object.keys(scoped).length === 0) {
    debugLog("didChangeConfiguration: empty payload, keeping initialization options");
    return;
  }
  applyConfig({ ...initOptions ?? {}, ...scoped });
  debugLog(`didChangeConfiguration: merged, include=${JSON.stringify(config.include)}`);
});
function uriToPath(uri) {
  return uri.startsWith("file://") ? import_url.fileURLToPath(uri) : uri;
}
function shouldProcess(filePath) {
  const rel = path4.relative(config.cacheDir, filePath);
  const insideCache = rel !== "" && !rel.startsWith("..") && !path4.isAbsolute(rel);
  if (insideCache)
    return false;
  if (isExcluded(filePath))
    return false;
  return isIncluded(filePath);
}
async function reveal(outPath) {
  const opened = await openInZed(outPath, config.zedBinary);
  debugLog(opened ? `opened ${path4.basename(outPath)} in Zed (read-only)` : `could not run '${config.zedBinary}'; output at ${outPath}`);
  if (!opened) {
    connection.window.showWarningMessage(`AI Lens: '${config.zedBinary}' is not on PATH. Translation saved to ${outPath}`);
  }
}
function describe(error) {
  return error instanceof Error ? error.message : String(error);
}
async function withProgress(title, fn) {
  if (!supportsProgress)
    return fn();
  let reporter;
  try {
    reporter = await connection.window.createWorkDoneProgress();
  } catch (error) {
    debugLog(`progress unavailable: ${describe(error)}`);
    return fn();
  }
  reporter.begin("AI Lens", undefined, title, false);
  try {
    return await fn();
  } finally {
    reporter.done();
  }
}
async function prune() {
  try {
    const removed = await pruneCache(config.cacheDir, config.maxCacheEntries);
    if (removed)
      debugLog(`pruned ${removed} cache entr${removed === 1 ? "y" : "ies"}`);
  } catch (error) {
    debugLog(`prune failed: ${describe(error)}`);
  }
}
documents.onDidOpen(async (event) => {
  const { document } = event;
  const filePath = uriToPath(document.uri);
  const willProcess = shouldProcess(filePath);
  debugLog(`didOpen: ${filePath} -> ${willProcess ? "process" : "skip"}`);
  if (!willProcess)
    return;
  if (inFlight.has(filePath))
    return;
  const content = document.getText();
  const fileName = path4.basename(filePath);
  let backend;
  try {
    backend = resolveBackend(config);
  } catch (error) {
    connection.window.showErrorMessage(`AI Lens: ${describe(error)}`);
    return;
  }
  const prompt = template(config.prompt, {
    targetLanguage: config.targetLanguage,
    skipSentinel: config.skipSentinel,
    file: filePath,
    filename: fileName
  });
  const key = cacheKey({ content, prompt, agent: config.agent, model: config.model });
  const entry = cachePaths(config.cacheDir, filePath);
  const cachedMeta = await readFresh(entry, key);
  if (cachedMeta) {
    if (cachedMeta.skipped) {
      debugLog(`cache hit (no change needed): ${fileName}`);
      return;
    }
    if (config.openInEditor)
      await reveal(entry.outPath);
    revealPreview();
    connection.console.log(`AI Lens: cache hit for ${fileName}`);
    debugLog(`cache hit: ${fileName}`);
    return;
  }
  const verdict = detect(content, config.targetLanguage);
  if (!verdict.needsTranslation) {
    debugLog(`no change needed (local): ${fileName} — ${verdict.reason}`);
    return;
  }
  debugLog(`needs translation (local): ${fileName} — ${verdict.reason}`);
  const bytes = Buffer.byteLength(content, "utf-8");
  if (config.maxAutoBytes > 0 && bytes > config.maxAutoBytes) {
    const kb = (n) => `${Math.round(n / 1024)} KB`;
    debugLog(`too large to auto-translate: ${fileName} (${bytes}B > ${config.maxAutoBytes}B) — use the command palette action`);
    connection.window.showWarningMessage(`AI Lens: ${fileName} is ${kb(bytes)}, over the ${kb(config.maxAutoBytes)} auto-translate limit. ` + `Run "task: spawn" → "AI Lens: translate this file" to translate it.`);
    return;
  }
  inFlight.add(filePath);
  try {
    debugLog(`queued ${fileName} (${queued} ahead)`);
    const started = Date.now();
    const stdout = await withProgress(`${fileName} — ${backend.name}`, () => enqueue(() => backend.translate({
      prompt,
      filePath,
      fileName,
      content,
      model: config.model,
      cwd: path4.dirname(filePath),
      timeoutMs: config.timeoutMs,
      env: process.env
    })));
    const elapsed = ((Date.now() - started) / 1000).toFixed(1);
    const trimmed = stdout.trim();
    const meta = {
      key,
      source: filePath,
      agent: config.agent,
      model: config.model
    };
    if (trimmed === config.skipSentinel || trimmed.length === 0) {
      await writeSkip(entry, meta);
      await prune();
      connection.console.log(`AI Lens: ${fileName} needs no translation`);
      debugLog(`no change needed: ${fileName} (${elapsed}s)`);
      return;
    }
    await writeOutput(entry, stdout, meta, config.readOnlyOutput);
    await prune();
    if (config.openInEditor)
      await reveal(entry.outPath);
    revealPreview();
    connection.console.log(`AI Lens: translated ${fileName}`);
    debugLog(`translated: ${fileName} (${stdout.length} bytes, ${elapsed}s)`);
  } catch (error) {
    const message = describe(error);
    const report = `AI Lens failed for ${fileName}:

${message}
`;
    await writePlaceholder(entry, report);
    debugLog(`failed: ${fileName}: ${message}`);
    connection.window.showErrorMessage(`AI Lens: ${message}`);
    connection.console.error(`AI Lens: ${message}`);
  } finally {
    inFlight.delete(filePath);
  }
});
documents.listen(connection);
connection.listen();
