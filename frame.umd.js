(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Frame = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var inversify = {};

    var metadata_keys = {};

    (function (exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NON_CUSTOM_TAG_KEYS = exports.POST_CONSTRUCT = exports.DESIGN_PARAM_TYPES = exports.PARAM_TYPES = exports.TAGGED_PROP = exports.TAGGED = exports.MULTI_INJECT_TAG = exports.INJECT_TAG = exports.OPTIONAL_TAG = exports.UNMANAGED_TAG = exports.NAME_TAG = exports.NAMED_TAG = void 0;
    exports.NAMED_TAG = "named";
    exports.NAME_TAG = "name";
    exports.UNMANAGED_TAG = "unmanaged";
    exports.OPTIONAL_TAG = "optional";
    exports.INJECT_TAG = "inject";
    exports.MULTI_INJECT_TAG = "multi_inject";
    exports.TAGGED = "inversify:tagged";
    exports.TAGGED_PROP = "inversify:tagged_props";
    exports.PARAM_TYPES = "inversify:paramtypes";
    exports.DESIGN_PARAM_TYPES = "design:paramtypes";
    exports.POST_CONSTRUCT = "post_construct";
    function getNonCustomTagKeys() {
        return [
            exports.INJECT_TAG,
            exports.MULTI_INJECT_TAG,
            exports.NAME_TAG,
            exports.UNMANAGED_TAG,
            exports.NAMED_TAG,
            exports.OPTIONAL_TAG,
        ];
    }
    exports.NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();

    }(metadata_keys));

    var container = {};

    var binding = {};

    var literal_types = {};

    Object.defineProperty(literal_types, "__esModule", { value: true });
    literal_types.TargetTypeEnum = literal_types.BindingTypeEnum = literal_types.BindingScopeEnum = void 0;
    var BindingScopeEnum = {
        Request: "Request",
        Singleton: "Singleton",
        Transient: "Transient"
    };
    literal_types.BindingScopeEnum = BindingScopeEnum;
    var BindingTypeEnum = {
        ConstantValue: "ConstantValue",
        Constructor: "Constructor",
        DynamicValue: "DynamicValue",
        Factory: "Factory",
        Function: "Function",
        Instance: "Instance",
        Invalid: "Invalid",
        Provider: "Provider"
    };
    literal_types.BindingTypeEnum = BindingTypeEnum;
    var TargetTypeEnum = {
        ClassProperty: "ClassProperty",
        ConstructorArgument: "ConstructorArgument",
        Variable: "Variable"
    };
    literal_types.TargetTypeEnum = TargetTypeEnum;

    var id$1 = {};

    Object.defineProperty(id$1, "__esModule", { value: true });
    id$1.id = void 0;
    var idCounter = 0;
    function id() {
        return idCounter++;
    }
    id$1.id = id;

    Object.defineProperty(binding, "__esModule", { value: true });
    binding.Binding = void 0;
    var literal_types_1$6 = literal_types;
    var id_1$5 = id$1;
    var Binding = (function () {
        function Binding(serviceIdentifier, scope) {
            this.id = id_1$5.id();
            this.activated = false;
            this.serviceIdentifier = serviceIdentifier;
            this.scope = scope;
            this.type = literal_types_1$6.BindingTypeEnum.Invalid;
            this.constraint = function (request) { return true; };
            this.implementationType = null;
            this.cache = null;
            this.factory = null;
            this.provider = null;
            this.onActivation = null;
            this.dynamicValue = null;
        }
        Binding.prototype.clone = function () {
            var clone = new Binding(this.serviceIdentifier, this.scope);
            clone.activated = (clone.scope === literal_types_1$6.BindingScopeEnum.Singleton) ? this.activated : false;
            clone.implementationType = this.implementationType;
            clone.dynamicValue = this.dynamicValue;
            clone.scope = this.scope;
            clone.type = this.type;
            clone.factory = this.factory;
            clone.provider = this.provider;
            clone.constraint = this.constraint;
            clone.onActivation = this.onActivation;
            clone.cache = this.cache;
            return clone;
        };
        return Binding;
    }());
    binding.Binding = Binding;

    var error_msgs = {};

    Object.defineProperty(error_msgs, "__esModule", { value: true });
    error_msgs.STACK_OVERFLOW = error_msgs.CIRCULAR_DEPENDENCY_IN_FACTORY = error_msgs.POST_CONSTRUCT_ERROR = error_msgs.MULTIPLE_POST_CONSTRUCT_METHODS = error_msgs.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = error_msgs.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = error_msgs.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = error_msgs.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = error_msgs.ARGUMENTS_LENGTH_MISMATCH = error_msgs.INVALID_DECORATOR_OPERATION = error_msgs.INVALID_TO_SELF_VALUE = error_msgs.INVALID_FUNCTION_BINDING = error_msgs.INVALID_MIDDLEWARE_RETURN = error_msgs.NO_MORE_SNAPSHOTS_AVAILABLE = error_msgs.INVALID_BINDING_TYPE = error_msgs.NOT_IMPLEMENTED = error_msgs.CIRCULAR_DEPENDENCY = error_msgs.UNDEFINED_INJECT_ANNOTATION = error_msgs.MISSING_INJECT_ANNOTATION = error_msgs.MISSING_INJECTABLE_ANNOTATION = error_msgs.NOT_REGISTERED = error_msgs.CANNOT_UNBIND = error_msgs.AMBIGUOUS_MATCH = error_msgs.KEY_NOT_FOUND = error_msgs.NULL_ARGUMENT = error_msgs.DUPLICATED_METADATA = error_msgs.DUPLICATED_INJECTABLE_DECORATOR = void 0;
    error_msgs.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
    error_msgs.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
    error_msgs.NULL_ARGUMENT = "NULL argument";
    error_msgs.KEY_NOT_FOUND = "Key Not Found";
    error_msgs.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
    error_msgs.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
    error_msgs.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
    error_msgs.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
    error_msgs.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
    var UNDEFINED_INJECT_ANNOTATION = function (name) {
        return "@inject called with undefined this could mean that the class " + name + " has " +
            "a circular dependency problem. You can use a LazyServiceIdentifer to  " +
            "overcome this limitation.";
    };
    error_msgs.UNDEFINED_INJECT_ANNOTATION = UNDEFINED_INJECT_ANNOTATION;
    error_msgs.CIRCULAR_DEPENDENCY = "Circular dependency found:";
    error_msgs.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
    error_msgs.INVALID_BINDING_TYPE = "Invalid binding type:";
    error_msgs.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
    error_msgs.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
    error_msgs.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
    error_msgs.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " +
        "used as service identifier";
    error_msgs.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " +
        "must be applied to the parameters of a class constructor or a class property.";
    var ARGUMENTS_LENGTH_MISMATCH = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return "The number of constructor arguments in the derived class " +
            (values[0] + " must be >= than the number of constructor arguments of its base class.");
    };
    error_msgs.ARGUMENTS_LENGTH_MISMATCH = ARGUMENTS_LENGTH_MISMATCH;
    error_msgs.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " +
        "must be an object.";
    error_msgs.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " +
        "be a string ('singleton' or 'transient').";
    error_msgs.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must " +
        "be a boolean";
    error_msgs.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must " +
        "be a boolean";
    error_msgs.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
    var POST_CONSTRUCT_ERROR = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return "@postConstruct error in class " + values[0] + ": " + values[1];
    };
    error_msgs.POST_CONSTRUCT_ERROR = POST_CONSTRUCT_ERROR;
    var CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return "It looks like there is a circular dependency " +
            ("in one of the '" + values[0] + "' bindings. Please investigate bindings with") +
            ("service identifier '" + values[1] + "'.");
    };
    error_msgs.CIRCULAR_DEPENDENCY_IN_FACTORY = CIRCULAR_DEPENDENCY_IN_FACTORY;
    error_msgs.STACK_OVERFLOW = "Maximum call stack size exceeded";

    var metadata_reader = {};

    Object.defineProperty(metadata_reader, "__esModule", { value: true });
    metadata_reader.MetadataReader = void 0;
    var METADATA_KEY$g = metadata_keys;
    var MetadataReader = (function () {
        function MetadataReader() {
        }
        MetadataReader.prototype.getConstructorMetadata = function (constructorFunc) {
            var compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY$g.PARAM_TYPES, constructorFunc);
            var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY$g.TAGGED, constructorFunc);
            return {
                compilerGeneratedMetadata: compilerGeneratedMetadata,
                userGeneratedMetadata: userGeneratedMetadata || {}
            };
        };
        MetadataReader.prototype.getPropertiesMetadata = function (constructorFunc) {
            var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY$g.TAGGED_PROP, constructorFunc) || [];
            return userGeneratedMetadata;
        };
        return MetadataReader;
    }());
    metadata_reader.MetadataReader = MetadataReader;

    var planner = {};

    var binding_count = {};

    Object.defineProperty(binding_count, "__esModule", { value: true });
    binding_count.BindingCount = void 0;
    var BindingCount = {
        MultipleBindingsAvailable: 2,
        NoBindingsAvailable: 0,
        OnlyOneBindingAvailable: 1
    };
    binding_count.BindingCount = BindingCount;

    var exceptions = {};

    Object.defineProperty(exceptions, "__esModule", { value: true });
    exceptions.isStackOverflowExeption = void 0;
    var ERROR_MSGS$7 = error_msgs;
    function isStackOverflowExeption(error) {
        return (error instanceof RangeError ||
            error.message === ERROR_MSGS$7.STACK_OVERFLOW);
    }
    exceptions.isStackOverflowExeption = isStackOverflowExeption;

    var serialization = {};

    Object.defineProperty(serialization, "__esModule", { value: true });
    serialization.circularDependencyToException = serialization.listMetadataForTarget = serialization.listRegisteredBindingsForServiceIdentifier = serialization.getServiceIdentifierAsString = serialization.getFunctionName = void 0;
    var ERROR_MSGS$6 = error_msgs;
    function getServiceIdentifierAsString(serviceIdentifier) {
        if (typeof serviceIdentifier === "function") {
            var _serviceIdentifier = serviceIdentifier;
            return _serviceIdentifier.name;
        }
        else if (typeof serviceIdentifier === "symbol") {
            return serviceIdentifier.toString();
        }
        else {
            var _serviceIdentifier = serviceIdentifier;
            return _serviceIdentifier;
        }
    }
    serialization.getServiceIdentifierAsString = getServiceIdentifierAsString;
    function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
        var registeredBindingsList = "";
        var registeredBindings = getBindings(container, serviceIdentifier);
        if (registeredBindings.length !== 0) {
            registeredBindingsList = "\nRegistered bindings:";
            registeredBindings.forEach(function (binding) {
                var name = "Object";
                if (binding.implementationType !== null) {
                    name = getFunctionName(binding.implementationType);
                }
                registeredBindingsList = registeredBindingsList + "\n " + name;
                if (binding.constraint.metaData) {
                    registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
                }
            });
        }
        return registeredBindingsList;
    }
    serialization.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
    function alreadyDependencyChain(request, serviceIdentifier) {
        if (request.parentRequest === null) {
            return false;
        }
        else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
            return true;
        }
        else {
            return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
        }
    }
    function dependencyChainToString(request) {
        function _createStringArr(req, result) {
            if (result === void 0) { result = []; }
            var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
            result.push(serviceIdentifier);
            if (req.parentRequest !== null) {
                return _createStringArr(req.parentRequest, result);
            }
            return result;
        }
        var stringArr = _createStringArr(request);
        return stringArr.reverse().join(" --> ");
    }
    function circularDependencyToException(request) {
        request.childRequests.forEach(function (childRequest) {
            if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
                var services = dependencyChainToString(childRequest);
                throw new Error(ERROR_MSGS$6.CIRCULAR_DEPENDENCY + " " + services);
            }
            else {
                circularDependencyToException(childRequest);
            }
        });
    }
    serialization.circularDependencyToException = circularDependencyToException;
    function listMetadataForTarget(serviceIdentifierString, target) {
        if (target.isTagged() || target.isNamed()) {
            var m_1 = "";
            var namedTag = target.getNamedTag();
            var otherTags = target.getCustomTags();
            if (namedTag !== null) {
                m_1 += namedTag.toString() + "\n";
            }
            if (otherTags !== null) {
                otherTags.forEach(function (tag) {
                    m_1 += tag.toString() + "\n";
                });
            }
            return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
        }
        else {
            return " " + serviceIdentifierString;
        }
    }
    serialization.listMetadataForTarget = listMetadataForTarget;
    function getFunctionName(v) {
        if (v.name) {
            return v.name;
        }
        else {
            var name_1 = v.toString();
            var match = name_1.match(/^function\s*([^\s(]+)/);
            return match ? match[1] : "Anonymous function: " + name_1;
        }
    }
    serialization.getFunctionName = getFunctionName;

    var context = {};

    Object.defineProperty(context, "__esModule", { value: true });
    context.Context = void 0;
    var id_1$4 = id$1;
    var Context = (function () {
        function Context(container) {
            this.id = id_1$4.id();
            this.container = container;
        }
        Context.prototype.addPlan = function (plan) {
            this.plan = plan;
        };
        Context.prototype.setCurrentRequest = function (currentRequest) {
            this.currentRequest = currentRequest;
        };
        return Context;
    }());
    context.Context = Context;

    var metadata = {};

    Object.defineProperty(metadata, "__esModule", { value: true });
    metadata.Metadata = void 0;
    var METADATA_KEY$f = metadata_keys;
    var Metadata = (function () {
        function Metadata(key, value) {
            this.key = key;
            this.value = value;
        }
        Metadata.prototype.toString = function () {
            if (this.key === METADATA_KEY$f.NAMED_TAG) {
                return "named: " + this.value.toString() + " ";
            }
            else {
                return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
            }
        };
        return Metadata;
    }());
    metadata.Metadata = Metadata;

    var plan$1 = {};

    Object.defineProperty(plan$1, "__esModule", { value: true });
    plan$1.Plan = void 0;
    var Plan = (function () {
        function Plan(parentContext, rootRequest) {
            this.parentContext = parentContext;
            this.rootRequest = rootRequest;
        }
        return Plan;
    }());
    plan$1.Plan = Plan;

    var reflection_utils = {};

    var inject$1 = {};

    var decorator_utils = {};

    Object.defineProperty(decorator_utils, "__esModule", { value: true });
    decorator_utils.tagProperty = decorator_utils.tagParameter = decorator_utils.decorate = void 0;
    var ERROR_MSGS$5 = error_msgs;
    var METADATA_KEY$e = metadata_keys;
    function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
        var metadataKey = METADATA_KEY$e.TAGGED;
        _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
    }
    decorator_utils.tagParameter = tagParameter;
    function tagProperty(annotationTarget, propertyName, metadata) {
        var metadataKey = METADATA_KEY$e.TAGGED_PROP;
        _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
    }
    decorator_utils.tagProperty = tagProperty;
    function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
        var paramsOrPropertiesMetadata = {};
        var isParameterDecorator = (typeof parameterIndex === "number");
        var key = (parameterIndex !== undefined && isParameterDecorator) ? parameterIndex.toString() : propertyName;
        if (isParameterDecorator && propertyName !== undefined) {
            throw new Error(ERROR_MSGS$5.INVALID_DECORATOR_OPERATION);
        }
        if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
            paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
        }
        var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
        if (!Array.isArray(paramOrPropertyMetadata)) {
            paramOrPropertyMetadata = [];
        }
        else {
            for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
                var m = paramOrPropertyMetadata_1[_i];
                if (m.key === metadata.key) {
                    throw new Error(ERROR_MSGS$5.DUPLICATED_METADATA + " " + m.key.toString());
                }
            }
        }
        paramOrPropertyMetadata.push(metadata);
        paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
        Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
    }
    function _decorate(decorators, target) {
        Reflect.decorate(decorators, target);
    }
    function _param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function decorate(decorator, target, parameterIndex) {
        if (typeof parameterIndex === "number") {
            _decorate([_param(parameterIndex, decorator)], target);
        }
        else if (typeof parameterIndex === "string") {
            Reflect.decorate([decorator], target, parameterIndex);
        }
        else {
            _decorate([decorator], target);
        }
    }
    decorator_utils.decorate = decorate;

    Object.defineProperty(inject$1, "__esModule", { value: true });
    inject$1.inject = inject$1.LazyServiceIdentifer = void 0;
    var error_msgs_1$1 = error_msgs;
    var METADATA_KEY$d = metadata_keys;
    var metadata_1$a = metadata;
    var decorator_utils_1$6 = decorator_utils;
    var LazyServiceIdentifer = (function () {
        function LazyServiceIdentifer(cb) {
            this._cb = cb;
        }
        LazyServiceIdentifer.prototype.unwrap = function () {
            return this._cb();
        };
        return LazyServiceIdentifer;
    }());
    inject$1.LazyServiceIdentifer = LazyServiceIdentifer;
    function inject(serviceIdentifier) {
        return function (target, targetKey, index) {
            if (serviceIdentifier === undefined) {
                throw new Error(error_msgs_1$1.UNDEFINED_INJECT_ANNOTATION(target.name));
            }
            var metadata = new metadata_1$a.Metadata(METADATA_KEY$d.INJECT_TAG, serviceIdentifier);
            if (typeof index === "number") {
                decorator_utils_1$6.tagParameter(target, targetKey, index, metadata);
            }
            else {
                decorator_utils_1$6.tagProperty(target, targetKey, metadata);
            }
        };
    }
    inject$1.inject = inject;

    var target = {};

    var queryable_string = {};

    Object.defineProperty(queryable_string, "__esModule", { value: true });
    queryable_string.QueryableString = void 0;
    var QueryableString = (function () {
        function QueryableString(str) {
            this.str = str;
        }
        QueryableString.prototype.startsWith = function (searchString) {
            return this.str.indexOf(searchString) === 0;
        };
        QueryableString.prototype.endsWith = function (searchString) {
            var reverseString = "";
            var reverseSearchString = searchString.split("").reverse().join("");
            reverseString = this.str.split("").reverse().join("");
            return this.startsWith.call({ str: reverseString }, reverseSearchString);
        };
        QueryableString.prototype.contains = function (searchString) {
            return (this.str.indexOf(searchString) !== -1);
        };
        QueryableString.prototype.equals = function (compareString) {
            return this.str === compareString;
        };
        QueryableString.prototype.value = function () {
            return this.str;
        };
        return QueryableString;
    }());
    queryable_string.QueryableString = QueryableString;

    Object.defineProperty(target, "__esModule", { value: true });
    target.Target = void 0;
    var METADATA_KEY$c = metadata_keys;
    var id_1$3 = id$1;
    var metadata_1$9 = metadata;
    var queryable_string_1 = queryable_string;
    var Target = (function () {
        function Target(type, name, serviceIdentifier, namedOrTagged) {
            this.id = id_1$3.id();
            this.type = type;
            this.serviceIdentifier = serviceIdentifier;
            this.name = new queryable_string_1.QueryableString(name || "");
            this.metadata = new Array();
            var metadataItem = null;
            if (typeof namedOrTagged === "string") {
                metadataItem = new metadata_1$9.Metadata(METADATA_KEY$c.NAMED_TAG, namedOrTagged);
            }
            else if (namedOrTagged instanceof metadata_1$9.Metadata) {
                metadataItem = namedOrTagged;
            }
            if (metadataItem !== null) {
                this.metadata.push(metadataItem);
            }
        }
        Target.prototype.hasTag = function (key) {
            for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.key === key) {
                    return true;
                }
            }
            return false;
        };
        Target.prototype.isArray = function () {
            return this.hasTag(METADATA_KEY$c.MULTI_INJECT_TAG);
        };
        Target.prototype.matchesArray = function (name) {
            return this.matchesTag(METADATA_KEY$c.MULTI_INJECT_TAG)(name);
        };
        Target.prototype.isNamed = function () {
            return this.hasTag(METADATA_KEY$c.NAMED_TAG);
        };
        Target.prototype.isTagged = function () {
            return this.metadata.some(function (metadata) { return METADATA_KEY$c.NON_CUSTOM_TAG_KEYS.every(function (key) { return metadata.key !== key; }); });
        };
        Target.prototype.isOptional = function () {
            return this.matchesTag(METADATA_KEY$c.OPTIONAL_TAG)(true);
        };
        Target.prototype.getNamedTag = function () {
            if (this.isNamed()) {
                return this.metadata.filter(function (m) { return m.key === METADATA_KEY$c.NAMED_TAG; })[0];
            }
            return null;
        };
        Target.prototype.getCustomTags = function () {
            if (this.isTagged()) {
                return this.metadata.filter(function (metadata) { return METADATA_KEY$c.NON_CUSTOM_TAG_KEYS.every(function (key) { return metadata.key !== key; }); });
            }
            else {
                return null;
            }
        };
        Target.prototype.matchesNamedTag = function (name) {
            return this.matchesTag(METADATA_KEY$c.NAMED_TAG)(name);
        };
        Target.prototype.matchesTag = function (key) {
            var _this = this;
            return function (value) {
                for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
                    var m = _a[_i];
                    if (m.key === key && m.value === value) {
                        return true;
                    }
                }
                return false;
            };
        };
        return Target;
    }());
    target.Target = Target;

    (function (exports) {
    var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFunctionName = exports.getBaseClassDependencyCount = exports.getDependencies = void 0;
    var inject_1 = inject$1;
    var ERROR_MSGS = error_msgs;
    var literal_types_1 = literal_types;
    var METADATA_KEY = metadata_keys;
    var serialization_1 = serialization;
    Object.defineProperty(exports, "getFunctionName", { enumerable: true, get: function () { return serialization_1.getFunctionName; } });
    var target_1 = target;
    function getDependencies(metadataReader, func) {
        var constructorName = serialization_1.getFunctionName(func);
        var targets = getTargets(metadataReader, constructorName, func, false);
        return targets;
    }
    exports.getDependencies = getDependencies;
    function getTargets(metadataReader, constructorName, func, isBaseClass) {
        var metadata = metadataReader.getConstructorMetadata(func);
        var serviceIdentifiers = metadata.compilerGeneratedMetadata;
        if (serviceIdentifiers === undefined) {
            var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
            throw new Error(msg);
        }
        var constructorArgsMetadata = metadata.userGeneratedMetadata;
        var keys = Object.keys(constructorArgsMetadata);
        var hasUserDeclaredUnknownInjections = (func.length === 0 && keys.length > 0);
        var hasOptionalParameters = keys.length > func.length;
        var iterations = (hasUserDeclaredUnknownInjections || hasOptionalParameters) ? keys.length : func.length;
        var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
        var propertyTargets = getClassPropsAsTargets(metadataReader, func);
        var targets = __spreadArray(__spreadArray([], constructorTargets), propertyTargets);
        return targets;
    }
    function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
        var targetMetadata = constructorArgsMetadata[index.toString()] || [];
        var metadata = formatTargetMetadata(targetMetadata);
        var isManaged = metadata.unmanaged !== true;
        var serviceIdentifier = serviceIdentifiers[index];
        var injectIdentifier = (metadata.inject || metadata.multiInject);
        serviceIdentifier = (injectIdentifier) ? (injectIdentifier) : serviceIdentifier;
        if (serviceIdentifier instanceof inject_1.LazyServiceIdentifer) {
            serviceIdentifier = serviceIdentifier.unwrap();
        }
        if (isManaged) {
            var isObject = serviceIdentifier === Object;
            var isFunction = serviceIdentifier === Function;
            var isUndefined = serviceIdentifier === undefined;
            var isUnknownType = (isObject || isFunction || isUndefined);
            if (!isBaseClass && isUnknownType) {
                var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
                throw new Error(msg);
            }
            var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
            target.metadata = targetMetadata;
            return target;
        }
        return null;
    }
    function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
        var targets = [];
        for (var i = 0; i < iterations; i++) {
            var index = i;
            var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
            if (target !== null) {
                targets.push(target);
            }
        }
        return targets;
    }
    function getClassPropsAsTargets(metadataReader, constructorFunc) {
        var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
        var targets = [];
        var keys = Object.keys(classPropsMetadata);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var targetMetadata = classPropsMetadata[key];
            var metadata = formatTargetMetadata(classPropsMetadata[key]);
            var targetName = metadata.targetName || key;
            var serviceIdentifier = (metadata.inject || metadata.multiInject);
            var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, targetName, serviceIdentifier);
            target.metadata = targetMetadata;
            targets.push(target);
        }
        var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
        if (baseConstructor !== Object) {
            var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor);
            targets = __spreadArray(__spreadArray([], targets), baseTargets);
        }
        return targets;
    }
    function getBaseClassDependencyCount(metadataReader, func) {
        var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
        if (baseConstructor !== Object) {
            var baseConstructorName = serialization_1.getFunctionName(baseConstructor);
            var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
            var metadata = targets.map(function (t) {
                return t.metadata.filter(function (m) {
                    return m.key === METADATA_KEY.UNMANAGED_TAG;
                });
            });
            var unmanagedCount = [].concat.apply([], metadata).length;
            var dependencyCount = targets.length - unmanagedCount;
            if (dependencyCount > 0) {
                return dependencyCount;
            }
            else {
                return getBaseClassDependencyCount(metadataReader, baseConstructor);
            }
        }
        else {
            return 0;
        }
    }
    exports.getBaseClassDependencyCount = getBaseClassDependencyCount;
    function formatTargetMetadata(targetMetadata) {
        var targetMetadataMap = {};
        targetMetadata.forEach(function (m) {
            targetMetadataMap[m.key.toString()] = m.value;
        });
        return {
            inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
            multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
            targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
            unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
        };
    }

    }(reflection_utils));

    var request = {};

    Object.defineProperty(request, "__esModule", { value: true });
    request.Request = void 0;
    var id_1$2 = id$1;
    var Request = (function () {
        function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
            this.id = id_1$2.id();
            this.serviceIdentifier = serviceIdentifier;
            this.parentContext = parentContext;
            this.parentRequest = parentRequest;
            this.target = target;
            this.childRequests = [];
            this.bindings = (Array.isArray(bindings) ? bindings : [bindings]);
            this.requestScope = parentRequest === null
                ? new Map()
                : null;
        }
        Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
            var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
            this.childRequests.push(child);
            return child;
        };
        return Request;
    }());
    request.Request = Request;

    Object.defineProperty(planner, "__esModule", { value: true });
    planner.getBindingDictionary = planner.createMockRequest = planner.plan = void 0;
    var binding_count_1 = binding_count;
    var ERROR_MSGS$4 = error_msgs;
    var literal_types_1$5 = literal_types;
    var METADATA_KEY$b = metadata_keys;
    var exceptions_1$1 = exceptions;
    var serialization_1$2 = serialization;
    var context_1 = context;
    var metadata_1$8 = metadata;
    var plan_1 = plan$1;
    var reflection_utils_1 = reflection_utils;
    var request_1 = request;
    var target_1 = target;
    function getBindingDictionary(cntnr) {
        return cntnr._bindingDictionary;
    }
    planner.getBindingDictionary = getBindingDictionary;
    function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
        var metadataKey = isMultiInject ? METADATA_KEY$b.MULTI_INJECT_TAG : METADATA_KEY$b.INJECT_TAG;
        var injectMetadata = new metadata_1$8.Metadata(metadataKey, serviceIdentifier);
        var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
        if (key !== undefined) {
            var tagMetadata = new metadata_1$8.Metadata(key, value);
            target.metadata.push(tagMetadata);
        }
        return target;
    }
    function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
        var bindings = getBindings(context.container, target.serviceIdentifier);
        var activeBindings = [];
        if (bindings.length === binding_count_1.BindingCount.NoBindingsAvailable &&
            context.container.options.autoBindInjectable &&
            typeof target.serviceIdentifier === "function" &&
            metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
            context.container.bind(target.serviceIdentifier).toSelf();
            bindings = getBindings(context.container, target.serviceIdentifier);
        }
        if (!avoidConstraints) {
            activeBindings = bindings.filter(function (binding) {
                var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
                return binding.constraint(request);
            });
        }
        else {
            activeBindings = bindings;
        }
        _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
        return activeBindings;
    }
    function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
        switch (bindings.length) {
            case binding_count_1.BindingCount.NoBindingsAvailable:
                if (target.isOptional()) {
                    return bindings;
                }
                else {
                    var serviceIdentifierString = serialization_1$2.getServiceIdentifierAsString(serviceIdentifier);
                    var msg = ERROR_MSGS$4.NOT_REGISTERED;
                    msg += serialization_1$2.listMetadataForTarget(serviceIdentifierString, target);
                    msg += serialization_1$2.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
                    throw new Error(msg);
                }
            case binding_count_1.BindingCount.OnlyOneBindingAvailable:
                if (!target.isArray()) {
                    return bindings;
                }
            case binding_count_1.BindingCount.MultipleBindingsAvailable:
            default:
                if (!target.isArray()) {
                    var serviceIdentifierString = serialization_1$2.getServiceIdentifierAsString(serviceIdentifier);
                    var msg = ERROR_MSGS$4.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
                    msg += serialization_1$2.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
                    throw new Error(msg);
                }
                else {
                    return bindings;
                }
        }
    }
    function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
        var activeBindings;
        var childRequest;
        if (parentRequest === null) {
            activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
            childRequest = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
            var thePlan = new plan_1.Plan(context, childRequest);
            context.addPlan(thePlan);
        }
        else {
            activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
            childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
        }
        activeBindings.forEach(function (binding) {
            var subChildRequest = null;
            if (target.isArray()) {
                subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
            }
            else {
                if (binding.cache) {
                    return;
                }
                subChildRequest = childRequest;
            }
            if (binding.type === literal_types_1$5.BindingTypeEnum.Instance && binding.implementationType !== null) {
                var dependencies = reflection_utils_1.getDependencies(metadataReader, binding.implementationType);
                if (!context.container.options.skipBaseClassChecks) {
                    var baseClassDependencyCount = reflection_utils_1.getBaseClassDependencyCount(metadataReader, binding.implementationType);
                    if (dependencies.length < baseClassDependencyCount) {
                        var error = ERROR_MSGS$4.ARGUMENTS_LENGTH_MISMATCH(reflection_utils_1.getFunctionName(binding.implementationType));
                        throw new Error(error);
                    }
                }
                dependencies.forEach(function (dependency) {
                    _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
                });
            }
        });
    }
    function getBindings(container, serviceIdentifier) {
        var bindings = [];
        var bindingDictionary = getBindingDictionary(container);
        if (bindingDictionary.hasKey(serviceIdentifier)) {
            bindings = bindingDictionary.get(serviceIdentifier);
        }
        else if (container.parent !== null) {
            bindings = getBindings(container.parent, serviceIdentifier);
        }
        return bindings;
    }
    function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
        if (avoidConstraints === void 0) { avoidConstraints = false; }
        var context = new context_1.Context(container);
        var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
        try {
            _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
            return context;
        }
        catch (error) {
            if (exceptions_1$1.isStackOverflowExeption(error)) {
                if (context.plan) {
                    serialization_1$2.circularDependencyToException(context.plan.rootRequest);
                }
            }
            throw error;
        }
    }
    planner.plan = plan;
    function createMockRequest(container, serviceIdentifier, key, value) {
        var target = new target_1.Target(literal_types_1$5.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1$8.Metadata(key, value));
        var context = new context_1.Context(container);
        var request = new request_1.Request(serviceIdentifier, context, null, [], target);
        return request;
    }
    planner.createMockRequest = createMockRequest;

    var resolver = {};

    var instantiation = {};

    var __spreadArray$1 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    };
    Object.defineProperty(instantiation, "__esModule", { value: true });
    instantiation.resolveInstance = void 0;
    var error_msgs_1 = error_msgs;
    var literal_types_1$4 = literal_types;
    var METADATA_KEY$a = metadata_keys;
    function _injectProperties(instance, childRequests, resolveRequest) {
        var propertyInjectionsRequests = childRequests.filter(function (childRequest) {
            return (childRequest.target !== null &&
                childRequest.target.type === literal_types_1$4.TargetTypeEnum.ClassProperty);
        });
        var propertyInjections = propertyInjectionsRequests.map(resolveRequest);
        propertyInjectionsRequests.forEach(function (r, index) {
            var propertyName = "";
            propertyName = r.target.name.value();
            var injection = propertyInjections[index];
            instance[propertyName] = injection;
        });
        return instance;
    }
    function _createInstance(Func, injections) {
        return new (Func.bind.apply(Func, __spreadArray$1([void 0], injections)))();
    }
    function _postConstruct(constr, result) {
        if (Reflect.hasMetadata(METADATA_KEY$a.POST_CONSTRUCT, constr)) {
            var data = Reflect.getMetadata(METADATA_KEY$a.POST_CONSTRUCT, constr);
            try {
                result[data.value]();
            }
            catch (e) {
                throw new Error(error_msgs_1.POST_CONSTRUCT_ERROR(constr.name, e.message));
            }
        }
    }
    function resolveInstance(constr, childRequests, resolveRequest) {
        var result = null;
        if (childRequests.length > 0) {
            var constructorInjectionsRequests = childRequests.filter(function (childRequest) {
                return (childRequest.target !== null && childRequest.target.type === literal_types_1$4.TargetTypeEnum.ConstructorArgument);
            });
            var constructorInjections = constructorInjectionsRequests.map(resolveRequest);
            result = _createInstance(constr, constructorInjections);
            result = _injectProperties(result, childRequests, resolveRequest);
        }
        else {
            result = new constr();
        }
        _postConstruct(constr, result);
        return result;
    }
    instantiation.resolveInstance = resolveInstance;

    Object.defineProperty(resolver, "__esModule", { value: true });
    resolver.resolve = void 0;
    var ERROR_MSGS$3 = error_msgs;
    var literal_types_1$3 = literal_types;
    var exceptions_1 = exceptions;
    var serialization_1$1 = serialization;
    var instantiation_1 = instantiation;
    var invokeFactory = function (factoryType, serviceIdentifier, fn) {
        try {
            return fn();
        }
        catch (error) {
            if (exceptions_1.isStackOverflowExeption(error)) {
                throw new Error(ERROR_MSGS$3.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryType, serviceIdentifier.toString()));
            }
            else {
                throw error;
            }
        }
    };
    var _resolveRequest = function (requestScope) {
        return function (request) {
            request.parentContext.setCurrentRequest(request);
            var bindings = request.bindings;
            var childRequests = request.childRequests;
            var targetIsAnArray = request.target && request.target.isArray();
            var targetParentIsNotAnArray = !request.parentRequest ||
                !request.parentRequest.target ||
                !request.target ||
                !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
            if (targetIsAnArray && targetParentIsNotAnArray) {
                return childRequests.map(function (childRequest) {
                    var _f = _resolveRequest(requestScope);
                    return _f(childRequest);
                });
            }
            else {
                var result = null;
                if (request.target.isOptional() && bindings.length === 0) {
                    return undefined;
                }
                var binding_1 = bindings[0];
                var isSingleton = binding_1.scope === literal_types_1$3.BindingScopeEnum.Singleton;
                var isRequestSingleton = binding_1.scope === literal_types_1$3.BindingScopeEnum.Request;
                if (isSingleton && binding_1.activated) {
                    return binding_1.cache;
                }
                if (isRequestSingleton &&
                    requestScope !== null &&
                    requestScope.has(binding_1.id)) {
                    return requestScope.get(binding_1.id);
                }
                if (binding_1.type === literal_types_1$3.BindingTypeEnum.ConstantValue) {
                    result = binding_1.cache;
                    binding_1.activated = true;
                }
                else if (binding_1.type === literal_types_1$3.BindingTypeEnum.Function) {
                    result = binding_1.cache;
                    binding_1.activated = true;
                }
                else if (binding_1.type === literal_types_1$3.BindingTypeEnum.Constructor) {
                    result = binding_1.implementationType;
                }
                else if (binding_1.type === literal_types_1$3.BindingTypeEnum.DynamicValue && binding_1.dynamicValue !== null) {
                    result = invokeFactory("toDynamicValue", binding_1.serviceIdentifier, function () { return binding_1.dynamicValue(request.parentContext); });
                }
                else if (binding_1.type === literal_types_1$3.BindingTypeEnum.Factory && binding_1.factory !== null) {
                    result = invokeFactory("toFactory", binding_1.serviceIdentifier, function () { return binding_1.factory(request.parentContext); });
                }
                else if (binding_1.type === literal_types_1$3.BindingTypeEnum.Provider && binding_1.provider !== null) {
                    result = invokeFactory("toProvider", binding_1.serviceIdentifier, function () { return binding_1.provider(request.parentContext); });
                }
                else if (binding_1.type === literal_types_1$3.BindingTypeEnum.Instance && binding_1.implementationType !== null) {
                    result = instantiation_1.resolveInstance(binding_1.implementationType, childRequests, _resolveRequest(requestScope));
                }
                else {
                    var serviceIdentifier = serialization_1$1.getServiceIdentifierAsString(request.serviceIdentifier);
                    throw new Error(ERROR_MSGS$3.INVALID_BINDING_TYPE + " " + serviceIdentifier);
                }
                if (typeof binding_1.onActivation === "function") {
                    result = binding_1.onActivation(request.parentContext, result);
                }
                if (isSingleton) {
                    binding_1.cache = result;
                    binding_1.activated = true;
                }
                if (isRequestSingleton &&
                    requestScope !== null &&
                    !requestScope.has(binding_1.id)) {
                    requestScope.set(binding_1.id, result);
                }
                return result;
            }
        };
    };
    function resolve$1(context) {
        var _f = _resolveRequest(context.plan.rootRequest.requestScope);
        return _f(context.plan.rootRequest);
    }
    resolver.resolve = resolve$1;

    var binding_to_syntax = {};

    var binding_in_when_on_syntax = {};

    var binding_in_syntax = {};

    var binding_when_on_syntax = {};

    var binding_on_syntax = {};

    var binding_when_syntax = {};

    var constraint_helpers = {};

    Object.defineProperty(constraint_helpers, "__esModule", { value: true });
    constraint_helpers.typeConstraint = constraint_helpers.namedConstraint = constraint_helpers.taggedConstraint = constraint_helpers.traverseAncerstors = void 0;
    var METADATA_KEY$9 = metadata_keys;
    var metadata_1$7 = metadata;
    var traverseAncerstors = function (request, constraint) {
        var parent = request.parentRequest;
        if (parent !== null) {
            return constraint(parent) ? true : traverseAncerstors(parent, constraint);
        }
        else {
            return false;
        }
    };
    constraint_helpers.traverseAncerstors = traverseAncerstors;
    var taggedConstraint = function (key) { return function (value) {
        var constraint = function (request) {
            return request !== null && request.target !== null && request.target.matchesTag(key)(value);
        };
        constraint.metaData = new metadata_1$7.Metadata(key, value);
        return constraint;
    }; };
    constraint_helpers.taggedConstraint = taggedConstraint;
    var namedConstraint = taggedConstraint(METADATA_KEY$9.NAMED_TAG);
    constraint_helpers.namedConstraint = namedConstraint;
    var typeConstraint = function (type) { return function (request) {
        var binding = null;
        if (request !== null) {
            binding = request.bindings[0];
            if (typeof type === "string") {
                var serviceIdentifier = binding.serviceIdentifier;
                return serviceIdentifier === type;
            }
            else {
                var constructor = request.bindings[0].implementationType;
                return type === constructor;
            }
        }
        return false;
    }; };
    constraint_helpers.typeConstraint = typeConstraint;

    Object.defineProperty(binding_when_syntax, "__esModule", { value: true });
    binding_when_syntax.BindingWhenSyntax = void 0;
    var binding_on_syntax_1$2 = binding_on_syntax;
    var constraint_helpers_1 = constraint_helpers;
    var BindingWhenSyntax = (function () {
        function BindingWhenSyntax(binding) {
            this._binding = binding;
        }
        BindingWhenSyntax.prototype.when = function (constraint) {
            this._binding.constraint = constraint;
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
            this._binding.constraint = constraint_helpers_1.namedConstraint(name);
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
            this._binding.constraint = function (request) {
                var targetIsDefault = (request.target !== null) &&
                    (!request.target.isNamed()) &&
                    (!request.target.isTagged());
                return targetIsDefault;
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
            this._binding.constraint = constraint_helpers_1.taggedConstraint(tag)(value);
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
            this._binding.constraint = function (request) {
                return constraint_helpers_1.typeConstraint(parent)(request.parentRequest);
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenParentNamed = function (name) {
            this._binding.constraint = function (request) {
                return constraint_helpers_1.namedConstraint(name)(request.parentRequest);
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
            this._binding.constraint = function (request) {
                return constraint_helpers_1.taggedConstraint(tag)(value)(request.parentRequest);
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
            this._binding.constraint = function (request) {
                return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
            this._binding.constraint = function (request) {
                return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
            this._binding.constraint = function (request) {
                return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
            this._binding.constraint = function (request) {
                return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
            this._binding.constraint = function (request) {
                return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
            this._binding.constraint = function (request) {
                return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
            this._binding.constraint = function (request) {
                return constraint_helpers_1.traverseAncerstors(request, constraint);
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
            this._binding.constraint = function (request) {
                return !constraint_helpers_1.traverseAncerstors(request, constraint);
            };
            return new binding_on_syntax_1$2.BindingOnSyntax(this._binding);
        };
        return BindingWhenSyntax;
    }());
    binding_when_syntax.BindingWhenSyntax = BindingWhenSyntax;

    Object.defineProperty(binding_on_syntax, "__esModule", { value: true });
    binding_on_syntax.BindingOnSyntax = void 0;
    var binding_when_syntax_1$2 = binding_when_syntax;
    var BindingOnSyntax = (function () {
        function BindingOnSyntax(binding) {
            this._binding = binding;
        }
        BindingOnSyntax.prototype.onActivation = function (handler) {
            this._binding.onActivation = handler;
            return new binding_when_syntax_1$2.BindingWhenSyntax(this._binding);
        };
        return BindingOnSyntax;
    }());
    binding_on_syntax.BindingOnSyntax = BindingOnSyntax;

    Object.defineProperty(binding_when_on_syntax, "__esModule", { value: true });
    binding_when_on_syntax.BindingWhenOnSyntax = void 0;
    var binding_on_syntax_1$1 = binding_on_syntax;
    var binding_when_syntax_1$1 = binding_when_syntax;
    var BindingWhenOnSyntax = (function () {
        function BindingWhenOnSyntax(binding) {
            this._binding = binding;
            this._bindingWhenSyntax = new binding_when_syntax_1$1.BindingWhenSyntax(this._binding);
            this._bindingOnSyntax = new binding_on_syntax_1$1.BindingOnSyntax(this._binding);
        }
        BindingWhenOnSyntax.prototype.when = function (constraint) {
            return this._bindingWhenSyntax.when(constraint);
        };
        BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
            return this._bindingWhenSyntax.whenTargetNamed(name);
        };
        BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
            return this._bindingWhenSyntax.whenTargetIsDefault();
        };
        BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
            return this._bindingWhenSyntax.whenTargetTagged(tag, value);
        };
        BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
            return this._bindingWhenSyntax.whenInjectedInto(parent);
        };
        BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
            return this._bindingWhenSyntax.whenParentNamed(name);
        };
        BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
            return this._bindingWhenSyntax.whenParentTagged(tag, value);
        };
        BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
            return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
        };
        BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
            return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
        };
        BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
            return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
        };
        BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
            return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
        };
        BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
            return this._bindingWhenSyntax.whenNoAncestorNamed(name);
        };
        BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
            return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
        };
        BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
            return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
        };
        BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
            return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
        };
        BindingWhenOnSyntax.prototype.onActivation = function (handler) {
            return this._bindingOnSyntax.onActivation(handler);
        };
        return BindingWhenOnSyntax;
    }());
    binding_when_on_syntax.BindingWhenOnSyntax = BindingWhenOnSyntax;

    Object.defineProperty(binding_in_syntax, "__esModule", { value: true });
    binding_in_syntax.BindingInSyntax = void 0;
    var literal_types_1$2 = literal_types;
    var binding_when_on_syntax_1$1 = binding_when_on_syntax;
    var BindingInSyntax = (function () {
        function BindingInSyntax(binding) {
            this._binding = binding;
        }
        BindingInSyntax.prototype.inRequestScope = function () {
            this._binding.scope = literal_types_1$2.BindingScopeEnum.Request;
            return new binding_when_on_syntax_1$1.BindingWhenOnSyntax(this._binding);
        };
        BindingInSyntax.prototype.inSingletonScope = function () {
            this._binding.scope = literal_types_1$2.BindingScopeEnum.Singleton;
            return new binding_when_on_syntax_1$1.BindingWhenOnSyntax(this._binding);
        };
        BindingInSyntax.prototype.inTransientScope = function () {
            this._binding.scope = literal_types_1$2.BindingScopeEnum.Transient;
            return new binding_when_on_syntax_1$1.BindingWhenOnSyntax(this._binding);
        };
        return BindingInSyntax;
    }());
    binding_in_syntax.BindingInSyntax = BindingInSyntax;

    Object.defineProperty(binding_in_when_on_syntax, "__esModule", { value: true });
    binding_in_when_on_syntax.BindingInWhenOnSyntax = void 0;
    var binding_in_syntax_1 = binding_in_syntax;
    var binding_on_syntax_1 = binding_on_syntax;
    var binding_when_syntax_1 = binding_when_syntax;
    var BindingInWhenOnSyntax = (function () {
        function BindingInWhenOnSyntax(binding) {
            this._binding = binding;
            this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
            this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
            this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
        }
        BindingInWhenOnSyntax.prototype.inRequestScope = function () {
            return this._bindingInSyntax.inRequestScope();
        };
        BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
            return this._bindingInSyntax.inSingletonScope();
        };
        BindingInWhenOnSyntax.prototype.inTransientScope = function () {
            return this._bindingInSyntax.inTransientScope();
        };
        BindingInWhenOnSyntax.prototype.when = function (constraint) {
            return this._bindingWhenSyntax.when(constraint);
        };
        BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
            return this._bindingWhenSyntax.whenTargetNamed(name);
        };
        BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
            return this._bindingWhenSyntax.whenTargetIsDefault();
        };
        BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
            return this._bindingWhenSyntax.whenTargetTagged(tag, value);
        };
        BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
            return this._bindingWhenSyntax.whenInjectedInto(parent);
        };
        BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
            return this._bindingWhenSyntax.whenParentNamed(name);
        };
        BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
            return this._bindingWhenSyntax.whenParentTagged(tag, value);
        };
        BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
            return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
        };
        BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
            return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
        };
        BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
            return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
        };
        BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
            return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
        };
        BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
            return this._bindingWhenSyntax.whenNoAncestorNamed(name);
        };
        BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
            return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
        };
        BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
            return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
        };
        BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
            return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
        };
        BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
            return this._bindingOnSyntax.onActivation(handler);
        };
        return BindingInWhenOnSyntax;
    }());
    binding_in_when_on_syntax.BindingInWhenOnSyntax = BindingInWhenOnSyntax;

    Object.defineProperty(binding_to_syntax, "__esModule", { value: true });
    binding_to_syntax.BindingToSyntax = void 0;
    var ERROR_MSGS$2 = error_msgs;
    var literal_types_1$1 = literal_types;
    var binding_in_when_on_syntax_1 = binding_in_when_on_syntax;
    var binding_when_on_syntax_1 = binding_when_on_syntax;
    var BindingToSyntax = (function () {
        function BindingToSyntax(binding) {
            this._binding = binding;
        }
        BindingToSyntax.prototype.to = function (constructor) {
            this._binding.type = literal_types_1$1.BindingTypeEnum.Instance;
            this._binding.implementationType = constructor;
            return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
        };
        BindingToSyntax.prototype.toSelf = function () {
            if (typeof this._binding.serviceIdentifier !== "function") {
                throw new Error("" + ERROR_MSGS$2.INVALID_TO_SELF_VALUE);
            }
            var self = this._binding.serviceIdentifier;
            return this.to(self);
        };
        BindingToSyntax.prototype.toConstantValue = function (value) {
            this._binding.type = literal_types_1$1.BindingTypeEnum.ConstantValue;
            this._binding.cache = value;
            this._binding.dynamicValue = null;
            this._binding.implementationType = null;
            this._binding.scope = literal_types_1$1.BindingScopeEnum.Singleton;
            return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax.prototype.toDynamicValue = function (func) {
            this._binding.type = literal_types_1$1.BindingTypeEnum.DynamicValue;
            this._binding.cache = null;
            this._binding.dynamicValue = func;
            this._binding.implementationType = null;
            return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
        };
        BindingToSyntax.prototype.toConstructor = function (constructor) {
            this._binding.type = literal_types_1$1.BindingTypeEnum.Constructor;
            this._binding.implementationType = constructor;
            this._binding.scope = literal_types_1$1.BindingScopeEnum.Singleton;
            return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax.prototype.toFactory = function (factory) {
            this._binding.type = literal_types_1$1.BindingTypeEnum.Factory;
            this._binding.factory = factory;
            this._binding.scope = literal_types_1$1.BindingScopeEnum.Singleton;
            return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax.prototype.toFunction = function (func) {
            if (typeof func !== "function") {
                throw new Error(ERROR_MSGS$2.INVALID_FUNCTION_BINDING);
            }
            var bindingWhenOnSyntax = this.toConstantValue(func);
            this._binding.type = literal_types_1$1.BindingTypeEnum.Function;
            this._binding.scope = literal_types_1$1.BindingScopeEnum.Singleton;
            return bindingWhenOnSyntax;
        };
        BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
            this._binding.type = literal_types_1$1.BindingTypeEnum.Factory;
            this._binding.factory = function (context) {
                var autofactory = function () { return context.container.get(serviceIdentifier); };
                return autofactory;
            };
            this._binding.scope = literal_types_1$1.BindingScopeEnum.Singleton;
            return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax.prototype.toProvider = function (provider) {
            this._binding.type = literal_types_1$1.BindingTypeEnum.Provider;
            this._binding.provider = provider;
            this._binding.scope = literal_types_1$1.BindingScopeEnum.Singleton;
            return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax.prototype.toService = function (service) {
            this.toDynamicValue(function (context) { return context.container.get(service); });
        };
        return BindingToSyntax;
    }());
    binding_to_syntax.BindingToSyntax = BindingToSyntax;

    var container_snapshot = {};

    Object.defineProperty(container_snapshot, "__esModule", { value: true });
    container_snapshot.ContainerSnapshot = void 0;
    var ContainerSnapshot = (function () {
        function ContainerSnapshot() {
        }
        ContainerSnapshot.of = function (bindings, middleware) {
            var snapshot = new ContainerSnapshot();
            snapshot.bindings = bindings;
            snapshot.middleware = middleware;
            return snapshot;
        };
        return ContainerSnapshot;
    }());
    container_snapshot.ContainerSnapshot = ContainerSnapshot;

    var lookup = {};

    Object.defineProperty(lookup, "__esModule", { value: true });
    lookup.Lookup = void 0;
    var ERROR_MSGS$1 = error_msgs;
    var Lookup = (function () {
        function Lookup() {
            this._map = new Map();
        }
        Lookup.prototype.getMap = function () {
            return this._map;
        };
        Lookup.prototype.add = function (serviceIdentifier, value) {
            if (serviceIdentifier === null || serviceIdentifier === undefined) {
                throw new Error(ERROR_MSGS$1.NULL_ARGUMENT);
            }
            if (value === null || value === undefined) {
                throw new Error(ERROR_MSGS$1.NULL_ARGUMENT);
            }
            var entry = this._map.get(serviceIdentifier);
            if (entry !== undefined) {
                entry.push(value);
                this._map.set(serviceIdentifier, entry);
            }
            else {
                this._map.set(serviceIdentifier, [value]);
            }
        };
        Lookup.prototype.get = function (serviceIdentifier) {
            if (serviceIdentifier === null || serviceIdentifier === undefined) {
                throw new Error(ERROR_MSGS$1.NULL_ARGUMENT);
            }
            var entry = this._map.get(serviceIdentifier);
            if (entry !== undefined) {
                return entry;
            }
            else {
                throw new Error(ERROR_MSGS$1.KEY_NOT_FOUND);
            }
        };
        Lookup.prototype.remove = function (serviceIdentifier) {
            if (serviceIdentifier === null || serviceIdentifier === undefined) {
                throw new Error(ERROR_MSGS$1.NULL_ARGUMENT);
            }
            if (!this._map.delete(serviceIdentifier)) {
                throw new Error(ERROR_MSGS$1.KEY_NOT_FOUND);
            }
        };
        Lookup.prototype.removeByCondition = function (condition) {
            var _this = this;
            this._map.forEach(function (entries, key) {
                var updatedEntries = entries.filter(function (entry) { return !condition(entry); });
                if (updatedEntries.length > 0) {
                    _this._map.set(key, updatedEntries);
                }
                else {
                    _this._map.delete(key);
                }
            });
        };
        Lookup.prototype.hasKey = function (serviceIdentifier) {
            if (serviceIdentifier === null || serviceIdentifier === undefined) {
                throw new Error(ERROR_MSGS$1.NULL_ARGUMENT);
            }
            return this._map.has(serviceIdentifier);
        };
        Lookup.prototype.clone = function () {
            var copy = new Lookup();
            this._map.forEach(function (value, key) {
                value.forEach(function (b) { return copy.add(key, b.clone()); });
            });
            return copy;
        };
        Lookup.prototype.traverse = function (func) {
            this._map.forEach(function (value, key) {
                func(key, value);
            });
        };
        return Lookup;
    }());
    lookup.Lookup = Lookup;

    var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    };
    Object.defineProperty(container, "__esModule", { value: true });
    container.Container = void 0;
    var binding_1 = binding;
    var ERROR_MSGS = error_msgs;
    var literal_types_1 = literal_types;
    var METADATA_KEY$8 = metadata_keys;
    var metadata_reader_1 = metadata_reader;
    var planner_1 = planner;
    var resolver_1 = resolver;
    var binding_to_syntax_1 = binding_to_syntax;
    var id_1$1 = id$1;
    var serialization_1 = serialization;
    var container_snapshot_1 = container_snapshot;
    var lookup_1 = lookup;
    var Container = (function () {
        function Container(containerOptions) {
            this._appliedMiddleware = [];
            var options = containerOptions || {};
            if (typeof options !== "object") {
                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
            }
            if (options.defaultScope === undefined) {
                options.defaultScope = literal_types_1.BindingScopeEnum.Transient;
            }
            else if (options.defaultScope !== literal_types_1.BindingScopeEnum.Singleton &&
                options.defaultScope !== literal_types_1.BindingScopeEnum.Transient &&
                options.defaultScope !== literal_types_1.BindingScopeEnum.Request) {
                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
            }
            if (options.autoBindInjectable === undefined) {
                options.autoBindInjectable = false;
            }
            else if (typeof options.autoBindInjectable !== "boolean") {
                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
            }
            if (options.skipBaseClassChecks === undefined) {
                options.skipBaseClassChecks = false;
            }
            else if (typeof options.skipBaseClassChecks !== "boolean") {
                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
            }
            this.options = {
                autoBindInjectable: options.autoBindInjectable,
                defaultScope: options.defaultScope,
                skipBaseClassChecks: options.skipBaseClassChecks
            };
            this.id = id_1$1.id();
            this._bindingDictionary = new lookup_1.Lookup();
            this._snapshots = [];
            this._middleware = null;
            this.parent = null;
            this._metadataReader = new metadata_reader_1.MetadataReader();
        }
        Container.merge = function (container1, container2) {
            var container3 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                container3[_i - 2] = arguments[_i];
            }
            var container = new Container();
            var targetContainers = __spreadArray([container1, container2], container3).map(function (targetContainer) { return planner_1.getBindingDictionary(targetContainer); });
            var bindingDictionary = planner_1.getBindingDictionary(container);
            function copyDictionary(origin, destination) {
                origin.traverse(function (key, value) {
                    value.forEach(function (binding) {
                        destination.add(binding.serviceIdentifier, binding.clone());
                    });
                });
            }
            targetContainers.forEach(function (targetBindingDictionary) {
                copyDictionary(targetBindingDictionary, bindingDictionary);
            });
            return container;
        };
        Container.prototype.load = function () {
            var modules = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                modules[_i] = arguments[_i];
            }
            var getHelpers = this._getContainerModuleHelpersFactory();
            for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
                var currentModule = modules_1[_a];
                var containerModuleHelpers = getHelpers(currentModule.id);
                currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction);
            }
        };
        Container.prototype.loadAsync = function () {
            var modules = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                modules[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            getHelpers = this._getContainerModuleHelpersFactory();
                            _a = 0, modules_2 = modules;
                            _b.label = 1;
                        case 1:
                            if (!(_a < modules_2.length)) return [3, 4];
                            currentModule = modules_2[_a];
                            containerModuleHelpers = getHelpers(currentModule.id);
                            return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _a++;
                            return [3, 1];
                        case 4: return [2];
                    }
                });
            });
        };
        Container.prototype.unload = function () {
            var _this = this;
            var modules = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                modules[_i] = arguments[_i];
            }
            var conditionFactory = function (expected) { return function (item) {
                return item.moduleId === expected;
            }; };
            modules.forEach(function (module) {
                var condition = conditionFactory(module.id);
                _this._bindingDictionary.removeByCondition(condition);
            });
        };
        Container.prototype.bind = function (serviceIdentifier) {
            var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient;
            var binding = new binding_1.Binding(serviceIdentifier, scope);
            this._bindingDictionary.add(serviceIdentifier, binding);
            return new binding_to_syntax_1.BindingToSyntax(binding);
        };
        Container.prototype.rebind = function (serviceIdentifier) {
            this.unbind(serviceIdentifier);
            return this.bind(serviceIdentifier);
        };
        Container.prototype.unbind = function (serviceIdentifier) {
            try {
                this._bindingDictionary.remove(serviceIdentifier);
            }
            catch (e) {
                throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + serialization_1.getServiceIdentifierAsString(serviceIdentifier));
            }
        };
        Container.prototype.unbindAll = function () {
            this._bindingDictionary = new lookup_1.Lookup();
        };
        Container.prototype.isBound = function (serviceIdentifier) {
            var bound = this._bindingDictionary.hasKey(serviceIdentifier);
            if (!bound && this.parent) {
                bound = this.parent.isBound(serviceIdentifier);
            }
            return bound;
        };
        Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
            return this.isBoundTagged(serviceIdentifier, METADATA_KEY$8.NAMED_TAG, named);
        };
        Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
            var bound = false;
            if (this._bindingDictionary.hasKey(serviceIdentifier)) {
                var bindings = this._bindingDictionary.get(serviceIdentifier);
                var request_1 = planner_1.createMockRequest(this, serviceIdentifier, key, value);
                bound = bindings.some(function (b) { return b.constraint(request_1); });
            }
            if (!bound && this.parent) {
                bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
            }
            return bound;
        };
        Container.prototype.snapshot = function () {
            this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
        };
        Container.prototype.restore = function () {
            var snapshot = this._snapshots.pop();
            if (snapshot === undefined) {
                throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
            }
            this._bindingDictionary = snapshot.bindings;
            this._middleware = snapshot.middleware;
        };
        Container.prototype.createChild = function (containerOptions) {
            var child = new Container(containerOptions || this.options);
            child.parent = this;
            return child;
        };
        Container.prototype.applyMiddleware = function () {
            var middlewares = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                middlewares[_i] = arguments[_i];
            }
            this._appliedMiddleware = this._appliedMiddleware.concat(middlewares);
            var initial = (this._middleware) ? this._middleware : this._planAndResolve();
            this._middleware = middlewares.reduce(function (prev, curr) { return curr(prev); }, initial);
        };
        Container.prototype.applyCustomMetadataReader = function (metadataReader) {
            this._metadataReader = metadataReader;
        };
        Container.prototype.get = function (serviceIdentifier) {
            return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
        };
        Container.prototype.getTagged = function (serviceIdentifier, key, value) {
            return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
        };
        Container.prototype.getNamed = function (serviceIdentifier, named) {
            return this.getTagged(serviceIdentifier, METADATA_KEY$8.NAMED_TAG, named);
        };
        Container.prototype.getAll = function (serviceIdentifier) {
            return this._get(true, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
        };
        Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
            return this._get(false, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
        };
        Container.prototype.getAllNamed = function (serviceIdentifier, named) {
            return this.getAllTagged(serviceIdentifier, METADATA_KEY$8.NAMED_TAG, named);
        };
        Container.prototype.resolve = function (constructorFunction) {
            var tempContainer = this.createChild();
            tempContainer.bind(constructorFunction).toSelf();
            this._appliedMiddleware.forEach(function (m) {
                tempContainer.applyMiddleware(m);
            });
            return tempContainer.get(constructorFunction);
        };
        Container.prototype._getContainerModuleHelpersFactory = function () {
            var _this = this;
            var setModuleId = function (bindingToSyntax, moduleId) {
                bindingToSyntax._binding.moduleId = moduleId;
            };
            var getBindFunction = function (moduleId) {
                return function (serviceIdentifier) {
                    var _bind = _this.bind.bind(_this);
                    var bindingToSyntax = _bind(serviceIdentifier);
                    setModuleId(bindingToSyntax, moduleId);
                    return bindingToSyntax;
                };
            };
            var getUnbindFunction = function (moduleId) {
                return function (serviceIdentifier) {
                    var _unbind = _this.unbind.bind(_this);
                    _unbind(serviceIdentifier);
                };
            };
            var getIsboundFunction = function (moduleId) {
                return function (serviceIdentifier) {
                    var _isBound = _this.isBound.bind(_this);
                    return _isBound(serviceIdentifier);
                };
            };
            var getRebindFunction = function (moduleId) {
                return function (serviceIdentifier) {
                    var _rebind = _this.rebind.bind(_this);
                    var bindingToSyntax = _rebind(serviceIdentifier);
                    setModuleId(bindingToSyntax, moduleId);
                    return bindingToSyntax;
                };
            };
            return function (mId) { return ({
                bindFunction: getBindFunction(mId),
                isboundFunction: getIsboundFunction(mId),
                rebindFunction: getRebindFunction(mId),
                unbindFunction: getUnbindFunction(mId)
            }); };
        };
        Container.prototype._get = function (avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
            var result = null;
            var defaultArgs = {
                avoidConstraints: avoidConstraints,
                contextInterceptor: function (context) { return context; },
                isMultiInject: isMultiInject,
                key: key,
                serviceIdentifier: serviceIdentifier,
                targetType: targetType,
                value: value
            };
            if (this._middleware) {
                result = this._middleware(defaultArgs);
                if (result === undefined || result === null) {
                    throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
                }
            }
            else {
                result = this._planAndResolve()(defaultArgs);
            }
            return result;
        };
        Container.prototype._planAndResolve = function () {
            var _this = this;
            return function (args) {
                var context = planner_1.plan(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
                context = args.contextInterceptor(context);
                var result = resolver_1.resolve(context);
                return result;
            };
        };
        return Container;
    }());
    container.Container = Container;

    var container_module = {};

    Object.defineProperty(container_module, "__esModule", { value: true });
    container_module.AsyncContainerModule = container_module.ContainerModule = void 0;
    var id_1 = id$1;
    var ContainerModule = (function () {
        function ContainerModule(registry) {
            this.id = id_1.id();
            this.registry = registry;
        }
        return ContainerModule;
    }());
    container_module.ContainerModule = ContainerModule;
    var AsyncContainerModule = (function () {
        function AsyncContainerModule(registry) {
            this.id = id_1.id();
            this.registry = registry;
        }
        return AsyncContainerModule;
    }());
    container_module.AsyncContainerModule = AsyncContainerModule;

    var injectable$1 = {};

    Object.defineProperty(injectable$1, "__esModule", { value: true });
    injectable$1.injectable = void 0;
    var ERRORS_MSGS$1 = error_msgs;
    var METADATA_KEY$7 = metadata_keys;
    function injectable() {
        return function (target) {
            if (Reflect.hasOwnMetadata(METADATA_KEY$7.PARAM_TYPES, target)) {
                throw new Error(ERRORS_MSGS$1.DUPLICATED_INJECTABLE_DECORATOR);
            }
            var types = Reflect.getMetadata(METADATA_KEY$7.DESIGN_PARAM_TYPES, target) || [];
            Reflect.defineMetadata(METADATA_KEY$7.PARAM_TYPES, types, target);
            return target;
        };
    }
    injectable$1.injectable = injectable;

    var tagged$1 = {};

    Object.defineProperty(tagged$1, "__esModule", { value: true });
    tagged$1.tagged = void 0;
    var metadata_1$6 = metadata;
    var decorator_utils_1$5 = decorator_utils;
    function tagged(metadataKey, metadataValue) {
        return function (target, targetKey, index) {
            var metadata = new metadata_1$6.Metadata(metadataKey, metadataValue);
            if (typeof index === "number") {
                decorator_utils_1$5.tagParameter(target, targetKey, index, metadata);
            }
            else {
                decorator_utils_1$5.tagProperty(target, targetKey, metadata);
            }
        };
    }
    tagged$1.tagged = tagged;

    var named$1 = {};

    Object.defineProperty(named$1, "__esModule", { value: true });
    named$1.named = void 0;
    var METADATA_KEY$6 = metadata_keys;
    var metadata_1$5 = metadata;
    var decorator_utils_1$4 = decorator_utils;
    function named(name) {
        return function (target, targetKey, index) {
            var metadata = new metadata_1$5.Metadata(METADATA_KEY$6.NAMED_TAG, name);
            if (typeof index === "number") {
                decorator_utils_1$4.tagParameter(target, targetKey, index, metadata);
            }
            else {
                decorator_utils_1$4.tagProperty(target, targetKey, metadata);
            }
        };
    }
    named$1.named = named;

    var optional$1 = {};

    Object.defineProperty(optional$1, "__esModule", { value: true });
    optional$1.optional = void 0;
    var METADATA_KEY$5 = metadata_keys;
    var metadata_1$4 = metadata;
    var decorator_utils_1$3 = decorator_utils;
    function optional() {
        return function (target, targetKey, index) {
            var metadata = new metadata_1$4.Metadata(METADATA_KEY$5.OPTIONAL_TAG, true);
            if (typeof index === "number") {
                decorator_utils_1$3.tagParameter(target, targetKey, index, metadata);
            }
            else {
                decorator_utils_1$3.tagProperty(target, targetKey, metadata);
            }
        };
    }
    optional$1.optional = optional;

    var unmanaged$1 = {};

    Object.defineProperty(unmanaged$1, "__esModule", { value: true });
    unmanaged$1.unmanaged = void 0;
    var METADATA_KEY$4 = metadata_keys;
    var metadata_1$3 = metadata;
    var decorator_utils_1$2 = decorator_utils;
    function unmanaged() {
        return function (target, targetKey, index) {
            var metadata = new metadata_1$3.Metadata(METADATA_KEY$4.UNMANAGED_TAG, true);
            decorator_utils_1$2.tagParameter(target, targetKey, index, metadata);
        };
    }
    unmanaged$1.unmanaged = unmanaged;

    var multi_inject = {};

    Object.defineProperty(multi_inject, "__esModule", { value: true });
    multi_inject.multiInject = void 0;
    var METADATA_KEY$3 = metadata_keys;
    var metadata_1$2 = metadata;
    var decorator_utils_1$1 = decorator_utils;
    function multiInject(serviceIdentifier) {
        return function (target, targetKey, index) {
            var metadata = new metadata_1$2.Metadata(METADATA_KEY$3.MULTI_INJECT_TAG, serviceIdentifier);
            if (typeof index === "number") {
                decorator_utils_1$1.tagParameter(target, targetKey, index, metadata);
            }
            else {
                decorator_utils_1$1.tagProperty(target, targetKey, metadata);
            }
        };
    }
    multi_inject.multiInject = multiInject;

    var target_name = {};

    Object.defineProperty(target_name, "__esModule", { value: true });
    target_name.targetName = void 0;
    var METADATA_KEY$2 = metadata_keys;
    var metadata_1$1 = metadata;
    var decorator_utils_1 = decorator_utils;
    function targetName(name) {
        return function (target, targetKey, index) {
            var metadata = new metadata_1$1.Metadata(METADATA_KEY$2.NAME_TAG, name);
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        };
    }
    target_name.targetName = targetName;

    var post_construct = {};

    Object.defineProperty(post_construct, "__esModule", { value: true });
    post_construct.postConstruct = void 0;
    var ERRORS_MSGS = error_msgs;
    var METADATA_KEY$1 = metadata_keys;
    var metadata_1 = metadata;
    function postConstruct() {
        return function (target, propertyKey, descriptor) {
            var metadata = new metadata_1.Metadata(METADATA_KEY$1.POST_CONSTRUCT, propertyKey);
            if (Reflect.hasOwnMetadata(METADATA_KEY$1.POST_CONSTRUCT, target.constructor)) {
                throw new Error(ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
            }
            Reflect.defineMetadata(METADATA_KEY$1.POST_CONSTRUCT, metadata, target.constructor);
        };
    }
    post_construct.postConstruct = postConstruct;

    var binding_utils = {};

    Object.defineProperty(binding_utils, "__esModule", { value: true });
    binding_utils.multiBindToService = void 0;
    var multiBindToService = function (container) {
        return function (service) {
            return function () {
                var types = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    types[_i] = arguments[_i];
                }
                return types.forEach(function (t) { return container.bind(t).toService(service); });
            };
        };
    };
    binding_utils.multiBindToService = multiBindToService;

    (function (exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiBindToService = exports.getServiceIdentifierAsString = exports.typeConstraint = exports.namedConstraint = exports.taggedConstraint = exports.traverseAncerstors = exports.decorate = exports.id = exports.MetadataReader = exports.postConstruct = exports.targetName = exports.multiInject = exports.unmanaged = exports.optional = exports.LazyServiceIdentifer = exports.inject = exports.named = exports.tagged = exports.injectable = exports.ContainerModule = exports.AsyncContainerModule = exports.TargetTypeEnum = exports.BindingTypeEnum = exports.BindingScopeEnum = exports.Container = exports.METADATA_KEY = void 0;
    var keys = metadata_keys;
    exports.METADATA_KEY = keys;
    var container_1 = container;
    Object.defineProperty(exports, "Container", { enumerable: true, get: function () { return container_1.Container; } });
    var literal_types_1 = literal_types;
    Object.defineProperty(exports, "BindingScopeEnum", { enumerable: true, get: function () { return literal_types_1.BindingScopeEnum; } });
    Object.defineProperty(exports, "BindingTypeEnum", { enumerable: true, get: function () { return literal_types_1.BindingTypeEnum; } });
    Object.defineProperty(exports, "TargetTypeEnum", { enumerable: true, get: function () { return literal_types_1.TargetTypeEnum; } });
    var container_module_1 = container_module;
    Object.defineProperty(exports, "AsyncContainerModule", { enumerable: true, get: function () { return container_module_1.AsyncContainerModule; } });
    Object.defineProperty(exports, "ContainerModule", { enumerable: true, get: function () { return container_module_1.ContainerModule; } });
    var injectable_1 = injectable$1;
    Object.defineProperty(exports, "injectable", { enumerable: true, get: function () { return injectable_1.injectable; } });
    var tagged_1 = tagged$1;
    Object.defineProperty(exports, "tagged", { enumerable: true, get: function () { return tagged_1.tagged; } });
    var named_1 = named$1;
    Object.defineProperty(exports, "named", { enumerable: true, get: function () { return named_1.named; } });
    var inject_1 = inject$1;
    Object.defineProperty(exports, "inject", { enumerable: true, get: function () { return inject_1.inject; } });
    Object.defineProperty(exports, "LazyServiceIdentifer", { enumerable: true, get: function () { return inject_1.LazyServiceIdentifer; } });
    var optional_1 = optional$1;
    Object.defineProperty(exports, "optional", { enumerable: true, get: function () { return optional_1.optional; } });
    var unmanaged_1 = unmanaged$1;
    Object.defineProperty(exports, "unmanaged", { enumerable: true, get: function () { return unmanaged_1.unmanaged; } });
    var multi_inject_1 = multi_inject;
    Object.defineProperty(exports, "multiInject", { enumerable: true, get: function () { return multi_inject_1.multiInject; } });
    var target_name_1 = target_name;
    Object.defineProperty(exports, "targetName", { enumerable: true, get: function () { return target_name_1.targetName; } });
    var post_construct_1 = post_construct;
    Object.defineProperty(exports, "postConstruct", { enumerable: true, get: function () { return post_construct_1.postConstruct; } });
    var metadata_reader_1 = metadata_reader;
    Object.defineProperty(exports, "MetadataReader", { enumerable: true, get: function () { return metadata_reader_1.MetadataReader; } });
    var id_1 = id$1;
    Object.defineProperty(exports, "id", { enumerable: true, get: function () { return id_1.id; } });
    var decorator_utils_1 = decorator_utils;
    Object.defineProperty(exports, "decorate", { enumerable: true, get: function () { return decorator_utils_1.decorate; } });
    var constraint_helpers_1 = constraint_helpers;
    Object.defineProperty(exports, "traverseAncerstors", { enumerable: true, get: function () { return constraint_helpers_1.traverseAncerstors; } });
    Object.defineProperty(exports, "taggedConstraint", { enumerable: true, get: function () { return constraint_helpers_1.taggedConstraint; } });
    Object.defineProperty(exports, "namedConstraint", { enumerable: true, get: function () { return constraint_helpers_1.namedConstraint; } });
    Object.defineProperty(exports, "typeConstraint", { enumerable: true, get: function () { return constraint_helpers_1.typeConstraint; } });
    var serialization_1 = serialization;
    Object.defineProperty(exports, "getServiceIdentifierAsString", { enumerable: true, get: function () { return serialization_1.getServiceIdentifierAsString; } });
    var binding_utils_1 = binding_utils;
    Object.defineProperty(exports, "multiBindToService", { enumerable: true, get: function () { return binding_utils_1.multiBindToService; } });

    }(inversify));

    var lib$1 = {};

    var auto_wire = {};

    var provide$2 = {};

    var constants = {};

    Object.defineProperty(constants, "__esModule", { value: true });
    var METADATA_KEY = {
        provide: "inversify-binding-decorators:provide",
    };
    constants.METADATA_KEY = METADATA_KEY;

    Object.defineProperty(provide$2, "__esModule", { value: true });
    var inversify_1$3 = inversify;
    var constants_1$2 = constants;
    function provide$1(serviceIdentifier, force) {
        return function (target) {
            var isAlreadyDecorated = Reflect.hasOwnMetadata(inversify_1$3.METADATA_KEY.PARAM_TYPES, target);
            var redecorateWithInject = force === true;
            if (redecorateWithInject === true && isAlreadyDecorated === false) {
                inversify_1$3.decorate(inversify_1$3.injectable(), target);
            }
            else if (redecorateWithInject === true && isAlreadyDecorated === true) ;
            else {
                try {
                    inversify_1$3.decorate(inversify_1$3.injectable(), target);
                }
                catch (e) {
                    throw new Error("Cannot apply @provide decorator multiple times but is has been used " +
                        ("multiple times in " + target.name + " ") +
                        "Please use @provide(ID, true) if you are trying to declare multiple bindings!");
                }
            }
            var currentMetadata = {
                constraint: function (bind, bindTarget) { return bind(serviceIdentifier).to(bindTarget); },
                implementationType: target
            };
            var previousMetadata = Reflect.getMetadata(constants_1$2.METADATA_KEY.provide, Reflect) || [];
            var newMetadata = [currentMetadata].concat(previousMetadata);
            Reflect.defineMetadata(constants_1$2.METADATA_KEY.provide, newMetadata, Reflect);
            return target;
        };
    }
    provide$2.default = provide$1;

    Object.defineProperty(auto_wire, "__esModule", { value: true });
    var inversify_1$2 = inversify;
    var provide_1$1 = provide$2;
    function autoProvide(container) {
        var modules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            modules[_i - 1] = arguments[_i];
        }
        modules.forEach(function (module) {
            Object.keys(module).forEach(function (key) {
                var entity = module[key];
                var decorator = provide_1$1.default(entity);
                inversify_1$2.decorate(decorator, entity);
            });
        });
    }
    auto_wire.default = autoProvide;

    var fluent_provide = {};

    var provide_in_when_on_syntax = {};

    Object.defineProperty(provide_in_when_on_syntax, "__esModule", { value: true });
    var ProvideInWhenOnSyntax = /** @class */ (function () {
        function ProvideInWhenOnSyntax(provideInSyntax, provideWhenSyntax, provideOnSyntax) {
            this._provideInSyntax = provideInSyntax;
            this._provideWhenSyntax = provideWhenSyntax;
            this._provideOnSyntax = provideOnSyntax;
        }
        ProvideInWhenOnSyntax.prototype.when = function (constraint) {
            return this._provideWhenSyntax.when(constraint);
        };
        ProvideInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
            return this._provideWhenSyntax.whenTargetNamed(name);
        };
        ProvideInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
            return this._provideWhenSyntax.whenTargetTagged(tag, value);
        };
        ProvideInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
            return this._provideWhenSyntax.whenInjectedInto(parent);
        };
        ProvideInWhenOnSyntax.prototype.whenParentNamed = function (name) {
            return this._provideWhenSyntax.whenParentNamed(name);
        };
        ProvideInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
            return this._provideWhenSyntax.whenParentTagged(tag, value);
        };
        ProvideInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
            return this._provideWhenSyntax.whenAnyAncestorIs(ancestor);
        };
        ProvideInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
            return this._provideWhenSyntax.whenNoAncestorIs(ancestor);
        };
        ProvideInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
            return this._provideWhenSyntax.whenAnyAncestorNamed(name);
        };
        ProvideInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
            return this._provideWhenSyntax.whenAnyAncestorTagged(tag, value);
        };
        ProvideInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
            return this._provideWhenSyntax.whenNoAncestorNamed(name);
        };
        ProvideInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
            return this._provideWhenSyntax.whenNoAncestorTagged(tag, value);
        };
        ProvideInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
            return this._provideWhenSyntax.whenAnyAncestorMatches(constraint);
        };
        ProvideInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
            return this._provideWhenSyntax.whenNoAncestorMatches(constraint);
        };
        ProvideInWhenOnSyntax.prototype.onActivation = function (fn) {
            return this._provideOnSyntax.onActivation(fn);
        };
        ProvideInWhenOnSyntax.prototype.inSingletonScope = function () {
            return this._provideInSyntax.inSingletonScope();
        };
        ProvideInWhenOnSyntax.prototype.inTransientScope = function () {
            return this._provideInSyntax.inTransientScope();
        };
        ProvideInWhenOnSyntax.prototype.done = function (force) {
            return this._provideInSyntax.done(force);
        };
        return ProvideInWhenOnSyntax;
    }());
    provide_in_when_on_syntax.default = ProvideInWhenOnSyntax;

    var provide_when_syntax = {};

    var provide_on_syntax = {};

    var provide_done_syntax = {};

    Object.defineProperty(provide_done_syntax, "__esModule", { value: true });
    var inversify_1$1 = inversify;
    var inversify_2 = inversify;
    var constants_1$1 = constants;
    var ProvideDoneSyntax = /** @class */ (function () {
        function ProvideDoneSyntax(binding) {
            this._binding = binding;
        }
        ProvideDoneSyntax.prototype.done = function (force) {
            var that = this;
            return function (target) {
                var isAlreadyDecorated = Reflect.hasOwnMetadata(inversify_2.METADATA_KEY.PARAM_TYPES, target);
                var redecorateWithInject = force === true;
                if (redecorateWithInject === true && isAlreadyDecorated === false) {
                    inversify_1$1.decorate(inversify_1$1.injectable(), target);
                }
                else if (redecorateWithInject === true && isAlreadyDecorated === true) ;
                else {
                    try {
                        inversify_1$1.decorate(inversify_1$1.injectable(), target);
                    }
                    catch (e) {
                        throw new Error("Cannot apply @provideFluent decorator multiple times but is has been used " +
                            ("multiple times in " + target.name + " ") +
                            "Please use done(true) if you are trying to declare multiple bindings!");
                    }
                }
                var currentMetadata = {
                    constraint: that._binding,
                    implementationType: target
                };
                var previousMetadata = Reflect.getMetadata(constants_1$1.METADATA_KEY.provide, Reflect) || [];
                var newMetadata = [currentMetadata].concat(previousMetadata);
                Reflect.defineMetadata(constants_1$1.METADATA_KEY.provide, newMetadata, Reflect);
                return target;
            };
        };
        return ProvideDoneSyntax;
    }());
    provide_done_syntax.default = ProvideDoneSyntax;

    Object.defineProperty(provide_on_syntax, "__esModule", { value: true });
    var provide_when_syntax_1$2 = provide_when_syntax;
    var provide_done_syntax_1$3 = provide_done_syntax;
    var ProvideOnSyntax = /** @class */ (function () {
        function ProvideOnSyntax(bindingOnSyntax, provideDoneSyntax) {
            this._bindingOnSyntax = bindingOnSyntax;
            this._provideDoneSyntax = provideDoneSyntax;
        }
        ProvideOnSyntax.prototype.onActivation = function (fn) {
            var _this = this;
            var bindingWhenSyntax = function (bind, target) { return _this._bindingOnSyntax(bind, target).onActivation(fn); };
            var onDoneSyntax = new provide_done_syntax_1$3.default(bindingWhenSyntax);
            return new provide_when_syntax_1$2.default(bindingWhenSyntax, onDoneSyntax);
        };
        ProvideOnSyntax.prototype.done = function (force) {
            return this._provideDoneSyntax.done(force);
        };
        return ProvideOnSyntax;
    }());
    provide_on_syntax.default = ProvideOnSyntax;

    Object.defineProperty(provide_when_syntax, "__esModule", { value: true });
    var provide_on_syntax_1$2 = provide_on_syntax;
    var provide_done_syntax_1$2 = provide_done_syntax;
    var ProvideWhenSyntax = /** @class */ (function () {
        function ProvideWhenSyntax(bindingWhenSyntax, provideDoneSyntax) {
            this._bindingWhenSyntax = bindingWhenSyntax;
            this._provideDoneSyntax = provideDoneSyntax;
        }
        ProvideWhenSyntax.prototype.when = function (constraint) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).when(constraint);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenTargetNamed = function (name) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenTargetNamed(name);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenTargetTagged(tag, value);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenInjectedInto = function (parent) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenInjectedInto(parent);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenParentNamed = function (name) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenParentNamed(name);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenParentTagged = function (tag, value) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenParentTagged(tag, value);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenAnyAncestorIs(ancestor);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenNoAncestorIs(ancestor);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenAnyAncestorNamed(name);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenAnyAncestorTagged(tag, value);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenNoAncestorNamed(name);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenNoAncestorTagged(tag, value);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenAnyAncestorMatches(constraint);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
            var _this = this;
            var bindingOnSyntax = function (bind, target) {
                return _this._bindingWhenSyntax(bind, target).whenNoAncestorMatches(constraint);
            };
            var whenDoneSyntax = new provide_done_syntax_1$2.default(bindingOnSyntax);
            return new provide_on_syntax_1$2.default(bindingOnSyntax, whenDoneSyntax);
        };
        ProvideWhenSyntax.prototype.done = function (force) {
            return this._provideDoneSyntax.done(force);
        };
        return ProvideWhenSyntax;
    }());
    provide_when_syntax.default = ProvideWhenSyntax;

    var provide_in_syntax = {};

    var provide_when_on_syntax = {};

    Object.defineProperty(provide_when_on_syntax, "__esModule", { value: true });
    var ProvideWhenOnSyntax = /** @class */ (function () {
        function ProvideWhenOnSyntax(provideWhenSyntax, provideOnSyntax) {
            this._provideWhenSyntax = provideWhenSyntax;
            this._provideOnSyntax = provideOnSyntax;
        }
        ProvideWhenOnSyntax.prototype.when = function (constraint) {
            return this._provideWhenSyntax.when(constraint);
        };
        ProvideWhenOnSyntax.prototype.whenTargetNamed = function (name) {
            return this._provideWhenSyntax.whenTargetNamed(name);
        };
        ProvideWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
            return this._provideWhenSyntax.whenTargetTagged(tag, value);
        };
        ProvideWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
            return this._provideWhenSyntax.whenInjectedInto(parent);
        };
        ProvideWhenOnSyntax.prototype.whenParentNamed = function (name) {
            return this._provideWhenSyntax.whenParentNamed(name);
        };
        ProvideWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
            return this._provideWhenSyntax.whenParentTagged(tag, value);
        };
        ProvideWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
            return this._provideWhenSyntax.whenAnyAncestorIs(ancestor);
        };
        ProvideWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
            return this._provideWhenSyntax.whenNoAncestorIs(ancestor);
        };
        ProvideWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
            return this._provideWhenSyntax.whenAnyAncestorNamed(name);
        };
        ProvideWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
            return this._provideWhenSyntax.whenAnyAncestorTagged(tag, value);
        };
        ProvideWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
            return this._provideWhenSyntax.whenNoAncestorNamed(name);
        };
        ProvideWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
            return this._provideWhenSyntax.whenNoAncestorTagged(tag, value);
        };
        ProvideWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
            return this._provideWhenSyntax.whenAnyAncestorMatches(constraint);
        };
        ProvideWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
            return this._provideWhenSyntax.whenNoAncestorMatches(constraint);
        };
        ProvideWhenOnSyntax.prototype.onActivation = function (fn) {
            return this._provideOnSyntax.onActivation(fn);
        };
        ProvideWhenOnSyntax.prototype.done = function (force) {
            return this._provideWhenSyntax.done(force);
        };
        return ProvideWhenOnSyntax;
    }());
    provide_when_on_syntax.default = ProvideWhenOnSyntax;

    Object.defineProperty(provide_in_syntax, "__esModule", { value: true });
    var provide_when_on_syntax_1 = provide_when_on_syntax;
    var provide_when_syntax_1$1 = provide_when_syntax;
    var provide_on_syntax_1$1 = provide_on_syntax;
    var provide_done_syntax_1$1 = provide_done_syntax;
    var ProvideInSyntax = /** @class */ (function () {
        function ProvideInSyntax(bindingInSyntax, provideDoneSyntax) {
            this._bindingInSyntax = bindingInSyntax;
            this._provideDoneSyntax = provideDoneSyntax;
        }
        ProvideInSyntax.prototype.inSingletonScope = function () {
            var _this = this;
            var bindingWhenOnSyntax = function (bind, target) {
                return _this._bindingInSyntax(bind, target).inSingletonScope();
            };
            var inDoneSyntax = new provide_done_syntax_1$1.default(bindingWhenOnSyntax);
            var provideWhenSyntax = new provide_when_syntax_1$1.default(bindingWhenOnSyntax, inDoneSyntax);
            var provideOnSyntax = new provide_on_syntax_1$1.default(bindingWhenOnSyntax, inDoneSyntax);
            return new provide_when_on_syntax_1.default(provideWhenSyntax, provideOnSyntax);
        };
        ProvideInSyntax.prototype.inTransientScope = function () {
            var _this = this;
            var bindingWhenOnSyntax = function (bind, target) { return _this._bindingInSyntax(bind, target).inTransientScope(); };
            var inDoneSyntax = new provide_done_syntax_1$1.default(bindingWhenOnSyntax);
            var provideWhenSyntax = new provide_when_syntax_1$1.default(bindingWhenOnSyntax, inDoneSyntax);
            var provideOnSyntax = new provide_on_syntax_1$1.default(bindingWhenOnSyntax, inDoneSyntax);
            return new provide_when_on_syntax_1.default(provideWhenSyntax, provideOnSyntax);
        };
        ProvideInSyntax.prototype.done = function (force) {
            return this._provideDoneSyntax.done(force);
        };
        return ProvideInSyntax;
    }());
    provide_in_syntax.default = ProvideInSyntax;

    Object.defineProperty(fluent_provide, "__esModule", { value: true });
    var provide_in_when_on_syntax_1 = provide_in_when_on_syntax;
    var provide_when_syntax_1 = provide_when_syntax;
    var provide_on_syntax_1 = provide_on_syntax;
    var provide_in_syntax_1 = provide_in_syntax;
    var provide_done_syntax_1 = provide_done_syntax;
    function fluentProvide$1(serviceIdentifier) {
        var bindingWhenOnSyntax = function (bind, target) { return bind(serviceIdentifier).to(target); };
        var bindingConstraintFunction = function (bind, target) { return bindingWhenOnSyntax(bind, target)._binding; };
        var provideDoneSyntax = new provide_done_syntax_1.default(bindingConstraintFunction);
        var provideInWhenOnSyntax = new provide_in_when_on_syntax_1.default(new provide_in_syntax_1.default(function (bind, target) { return bindingWhenOnSyntax(bind, target); }, provideDoneSyntax), new provide_when_syntax_1.default(bindingWhenOnSyntax, provideDoneSyntax), new provide_on_syntax_1.default(bindingWhenOnSyntax, provideDoneSyntax));
        return provideInWhenOnSyntax;
    }
    fluent_provide.default = fluentProvide$1;

    var module_factory = {};

    Object.defineProperty(module_factory, "__esModule", { value: true });
    var constants_1 = constants;
    var inversify_1 = inversify;
    function buildProviderModule$1() {
        return new inversify_1.ContainerModule(function (bind, unbind) {
            var provideMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.provide, Reflect) || [];
            provideMetadata.map(function (metadata) { return resolve(metadata, bind); });
        });
    }
    function resolve(metadata, bind) {
        return metadata.constraint(bind, metadata.implementationType);
    }
    module_factory.default = buildProviderModule$1;

    Object.defineProperty(lib$1, "__esModule", { value: true });
    var auto_wire_1 = auto_wire;
    lib$1.autoProvide = auto_wire_1.default;
    var provide_1 = provide$2;
    lib$1.provide = provide_1.default;
    var fluent_provide_1 = fluent_provide;
    var fluentProvide = lib$1.fluentProvide = fluent_provide_1.default;
    var module_factory_1 = module_factory;
    var buildProviderModule = lib$1.buildProviderModule = module_factory_1.default;

    var lib = {};

    var decorators = {};

    Object.defineProperty(decorators, "__esModule", { value: true });
    var INJECTION = Symbol.for("INJECTION");
    function _proxyGetter(proto, key, resolve, doCache) {
        function getter() {
            if (doCache && !Reflect.hasMetadata(INJECTION, this, key)) {
                Reflect.defineMetadata(INJECTION, resolve(), this, key);
            }
            if (Reflect.hasMetadata(INJECTION, this, key)) {
                return Reflect.getMetadata(INJECTION, this, key);
            }
            else {
                return resolve();
            }
        }
        function setter(newVal) {
            Reflect.defineMetadata(INJECTION, newVal, this, key);
        }
        Object.defineProperty(proto, key, {
            configurable: true,
            enumerable: true,
            get: getter,
            set: setter
        });
    }
    function makePropertyInjectDecorator(container, doCache) {
        return function (serviceIdentifier) {
            return function (proto, key) {
                var resolve = function () {
                    return container.get(serviceIdentifier);
                };
                _proxyGetter(proto, key, resolve, doCache);
            };
        };
    }
    decorators.makePropertyInjectDecorator = makePropertyInjectDecorator;
    function makePropertyInjectNamedDecorator(container, doCache) {
        return function (serviceIdentifier, named) {
            return function (proto, key) {
                var resolve = function () {
                    return container.getNamed(serviceIdentifier, named);
                };
                _proxyGetter(proto, key, resolve, doCache);
            };
        };
    }
    decorators.makePropertyInjectNamedDecorator = makePropertyInjectNamedDecorator;
    function makePropertyInjectTaggedDecorator(container, doCache) {
        return function (serviceIdentifier, key, value) {
            return function (proto, propertyName) {
                var resolve = function () {
                    return container.getTagged(serviceIdentifier, key, value);
                };
                _proxyGetter(proto, propertyName, resolve, doCache);
            };
        };
    }
    decorators.makePropertyInjectTaggedDecorator = makePropertyInjectTaggedDecorator;
    function makePropertyMultiInjectDecorator(container, doCache) {
        return function (serviceIdentifier) {
            return function (proto, key) {
                var resolve = function () {
                    return container.getAll(serviceIdentifier);
                };
                _proxyGetter(proto, key, resolve, doCache);
            };
        };
    }
    decorators.makePropertyMultiInjectDecorator = makePropertyMultiInjectDecorator;

    Object.defineProperty(lib, "__esModule", { value: true });
    var decorators_1 = decorators;
    function getDecorators(container, doCache) {
        if (doCache === void 0) { doCache = true; }
        var lazyInject = decorators_1.makePropertyInjectDecorator(container, doCache);
        var lazyInjectNamed = decorators_1.makePropertyInjectNamedDecorator(container, doCache);
        var lazyInjectTagged = decorators_1.makePropertyInjectTaggedDecorator(container, doCache);
        var lazyMultiInject = decorators_1.makePropertyMultiInjectDecorator(container, doCache);
        return {
            lazyInject: lazyInject,
            lazyInjectNamed: lazyInjectNamed,
            lazyInjectTagged: lazyInjectTagged,
            lazyMultiInject: lazyMultiInject
        };
    }
    var _default = lib.default = getDecorators;

    /*! *****************************************************************************
    Copyright (C) Microsoft. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var Reflect$1;
    (function (Reflect) {
        // Metadata Proposal
        // https://rbuckton.github.io/reflect-metadata/
        (function (factory) {
            var root = typeof commonjsGlobal === "object" ? commonjsGlobal :
                typeof self === "object" ? self :
                    typeof this === "object" ? this :
                        Function("return this;")();
            var exporter = makeExporter(Reflect);
            if (typeof root.Reflect === "undefined") {
                root.Reflect = Reflect;
            }
            else {
                exporter = makeExporter(root.Reflect, exporter);
            }
            factory(exporter);
            function makeExporter(target, previous) {
                return function (key, value) {
                    if (typeof target[key] !== "function") {
                        Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                    }
                    if (previous)
                        previous(key, value);
                };
            }
        })(function (exporter) {
            var hasOwn = Object.prototype.hasOwnProperty;
            // feature test for Symbol support
            var supportsSymbol = typeof Symbol === "function";
            var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
            var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
            var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
            var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
            var downLevel = !supportsCreate && !supportsProto;
            var HashMap = {
                // create an object in dictionary mode (a.k.a. "slow" mode in v8)
                create: supportsCreate
                    ? function () { return MakeDictionary(Object.create(null)); }
                    : supportsProto
                        ? function () { return MakeDictionary({ __proto__: null }); }
                        : function () { return MakeDictionary({}); },
                has: downLevel
                    ? function (map, key) { return hasOwn.call(map, key); }
                    : function (map, key) { return key in map; },
                get: downLevel
                    ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                    : function (map, key) { return map[key]; },
            };
            // Load global or shim versions of Map, Set, and WeakMap
            var functionPrototype = Object.getPrototypeOf(Function);
            var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
            var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
            var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
            var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
            // [[Metadata]] internal slot
            // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
            var Metadata = new _WeakMap();
            /**
             * Applies a set of decorators to a property of a target object.
             * @param decorators An array of decorators.
             * @param target The target object.
             * @param propertyKey (Optional) The property key to decorate.
             * @param attributes (Optional) The property descriptor for the target key.
             * @remarks Decorators are applied in reverse order.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     Example = Reflect.decorate(decoratorsArray, Example);
             *
             *     // property (on constructor)
             *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
             *
             *     // property (on prototype)
             *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
             *
             *     // method (on constructor)
             *     Object.defineProperty(Example, "staticMethod",
             *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
             *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
             *
             *     // method (on prototype)
             *     Object.defineProperty(Example.prototype, "method",
             *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
             *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
             *
             */
            function decorate(decorators, target, propertyKey, attributes) {
                if (!IsUndefined(propertyKey)) {
                    if (!IsArray(decorators))
                        throw new TypeError();
                    if (!IsObject(target))
                        throw new TypeError();
                    if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                        throw new TypeError();
                    if (IsNull(attributes))
                        attributes = undefined;
                    propertyKey = ToPropertyKey(propertyKey);
                    return DecorateProperty(decorators, target, propertyKey, attributes);
                }
                else {
                    if (!IsArray(decorators))
                        throw new TypeError();
                    if (!IsConstructor(target))
                        throw new TypeError();
                    return DecorateConstructor(decorators, target);
                }
            }
            exporter("decorate", decorate);
            // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
            // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
            /**
             * A default metadata decorator factory that can be used on a class, class member, or parameter.
             * @param metadataKey The key for the metadata entry.
             * @param metadataValue The value for the metadata entry.
             * @returns A decorator function.
             * @remarks
             * If `metadataKey` is already defined for the target and target key, the
             * metadataValue for that key will be overwritten.
             * @example
             *
             *     // constructor
             *     @Reflect.metadata(key, value)
             *     class Example {
             *     }
             *
             *     // property (on constructor, TypeScript only)
             *     class Example {
             *         @Reflect.metadata(key, value)
             *         static staticProperty;
             *     }
             *
             *     // property (on prototype, TypeScript only)
             *     class Example {
             *         @Reflect.metadata(key, value)
             *         property;
             *     }
             *
             *     // method (on constructor)
             *     class Example {
             *         @Reflect.metadata(key, value)
             *         static staticMethod() { }
             *     }
             *
             *     // method (on prototype)
             *     class Example {
             *         @Reflect.metadata(key, value)
             *         method() { }
             *     }
             *
             */
            function metadata(metadataKey, metadataValue) {
                function decorator(target, propertyKey) {
                    if (!IsObject(target))
                        throw new TypeError();
                    if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                        throw new TypeError();
                    OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                }
                return decorator;
            }
            exporter("metadata", metadata);
            /**
             * Define a unique metadata entry on the target.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param metadataValue A value that contains attached metadata.
             * @param target The target object on which to define metadata.
             * @param propertyKey (Optional) The property key for the target.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     Reflect.defineMetadata("custom:annotation", options, Example);
             *
             *     // property (on constructor)
             *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
             *
             *     // property (on prototype)
             *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
             *
             *     // method (on constructor)
             *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
             *
             *     // method (on prototype)
             *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
             *
             *     // decorator factory as metadata-producing annotation.
             *     function MyAnnotation(options): Decorator {
             *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
             *     }
             *
             */
            function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            exporter("defineMetadata", defineMetadata);
            /**
             * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.hasMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function hasMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasMetadata(metadataKey, target, propertyKey);
            }
            exporter("hasMetadata", hasMetadata);
            /**
             * Gets a value indicating whether the target object has the provided metadata key defined.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function hasOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
            }
            exporter("hasOwnMetadata", hasOwnMetadata);
            /**
             * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.getMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function getMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetMetadata(metadataKey, target, propertyKey);
            }
            exporter("getMetadata", getMetadata);
            /**
             * Gets the metadata value for the provided metadata key on the target object.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.getOwnMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function getOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
            }
            exporter("getOwnMetadata", getOwnMetadata);
            /**
             * Gets the metadata keys defined on the target object or its prototype chain.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns An array of unique metadata keys.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.getMetadataKeys(Example);
             *
             *     // property (on constructor)
             *     result = Reflect.getMetadataKeys(Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.getMetadataKeys(Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.getMetadataKeys(Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.getMetadataKeys(Example.prototype, "method");
             *
             */
            function getMetadataKeys(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryMetadataKeys(target, propertyKey);
            }
            exporter("getMetadataKeys", getMetadataKeys);
            /**
             * Gets the unique metadata keys defined on the target object.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns An array of unique metadata keys.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.getOwnMetadataKeys(Example);
             *
             *     // property (on constructor)
             *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
             *
             */
            function getOwnMetadataKeys(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryOwnMetadataKeys(target, propertyKey);
            }
            exporter("getOwnMetadataKeys", getOwnMetadataKeys);
            /**
             * Deletes the metadata entry from the target object with the provided key.
             * @param metadataKey A key used to store and retrieve metadata.
             * @param target The target object on which the metadata is defined.
             * @param propertyKey (Optional) The property key for the target.
             * @returns `true` if the metadata entry was found and deleted; otherwise, false.
             * @example
             *
             *     class Example {
             *         // property declarations are not part of ES6, though they are valid in TypeScript:
             *         // static staticProperty;
             *         // property;
             *
             *         constructor(p) { }
             *         static staticMethod(p) { }
             *         method(p) { }
             *     }
             *
             *     // constructor
             *     result = Reflect.deleteMetadata("custom:annotation", Example);
             *
             *     // property (on constructor)
             *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
             *
             *     // property (on prototype)
             *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
             *
             *     // method (on constructor)
             *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
             *
             *     // method (on prototype)
             *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
             *
             */
            function deleteMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return false;
                if (!metadataMap.delete(metadataKey))
                    return false;
                if (metadataMap.size > 0)
                    return true;
                var targetMetadata = Metadata.get(target);
                targetMetadata.delete(propertyKey);
                if (targetMetadata.size > 0)
                    return true;
                Metadata.delete(target);
                return true;
            }
            exporter("deleteMetadata", deleteMetadata);
            function DecorateConstructor(decorators, target) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsConstructor(decorated))
                            throw new TypeError();
                        target = decorated;
                    }
                }
                return target;
            }
            function DecorateProperty(decorators, target, propertyKey, descriptor) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target, propertyKey, descriptor);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsObject(decorated))
                            throw new TypeError();
                        descriptor = decorated;
                    }
                }
                return descriptor;
            }
            function GetOrCreateMetadataMap(O, P, Create) {
                var targetMetadata = Metadata.get(O);
                if (IsUndefined(targetMetadata)) {
                    if (!Create)
                        return undefined;
                    targetMetadata = new _Map();
                    Metadata.set(O, targetMetadata);
                }
                var metadataMap = targetMetadata.get(P);
                if (IsUndefined(metadataMap)) {
                    if (!Create)
                        return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                }
                return metadataMap;
            }
            // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
            function OrdinaryHasMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn)
                    return true;
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent))
                    return OrdinaryHasMetadata(MetadataKey, parent, P);
                return false;
            }
            // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return false;
                return ToBoolean(metadataMap.has(MetadataKey));
            }
            // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
            function OrdinaryGetMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn)
                    return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent))
                    return OrdinaryGetMetadata(MetadataKey, parent, P);
                return undefined;
            }
            // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return undefined;
                return metadataMap.get(MetadataKey);
            }
            // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
                metadataMap.set(MetadataKey, MetadataValue);
            }
            // 3.1.6.1 OrdinaryMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
            function OrdinaryMetadataKeys(O, P) {
                var ownKeys = OrdinaryOwnMetadataKeys(O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (parent === null)
                    return ownKeys;
                var parentKeys = OrdinaryMetadataKeys(parent, P);
                if (parentKeys.length <= 0)
                    return ownKeys;
                if (ownKeys.length <= 0)
                    return parentKeys;
                var set = new _Set();
                var keys = [];
                for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                    var key = ownKeys_1[_i];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                    var key = parentKeys_1[_a];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                return keys;
            }
            // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
            function OrdinaryOwnMetadataKeys(O, P) {
                var keys = [];
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return keys;
                var keysObj = metadataMap.keys();
                var iterator = GetIterator(keysObj);
                var k = 0;
                while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                        keys.length = k;
                        return keys;
                    }
                    var nextValue = IteratorValue(next);
                    try {
                        keys[k] = nextValue;
                    }
                    catch (e) {
                        try {
                            IteratorClose(iterator);
                        }
                        finally {
                            throw e;
                        }
                    }
                    k++;
                }
            }
            // 6 ECMAScript Data Typ0es and Values
            // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
            function Type(x) {
                if (x === null)
                    return 1 /* Null */;
                switch (typeof x) {
                    case "undefined": return 0 /* Undefined */;
                    case "boolean": return 2 /* Boolean */;
                    case "string": return 3 /* String */;
                    case "symbol": return 4 /* Symbol */;
                    case "number": return 5 /* Number */;
                    case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                    default: return 6 /* Object */;
                }
            }
            // 6.1.1 The Undefined Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
            function IsUndefined(x) {
                return x === undefined;
            }
            // 6.1.2 The Null Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
            function IsNull(x) {
                return x === null;
            }
            // 6.1.5 The Symbol Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
            function IsSymbol(x) {
                return typeof x === "symbol";
            }
            // 6.1.7 The Object Type
            // https://tc39.github.io/ecma262/#sec-object-type
            function IsObject(x) {
                return typeof x === "object" ? x !== null : typeof x === "function";
            }
            // 7.1 Type Conversion
            // https://tc39.github.io/ecma262/#sec-type-conversion
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // https://tc39.github.io/ecma262/#sec-toprimitive
            function ToPrimitive(input, PreferredType) {
                switch (Type(input)) {
                    case 0 /* Undefined */: return input;
                    case 1 /* Null */: return input;
                    case 2 /* Boolean */: return input;
                    case 3 /* String */: return input;
                    case 4 /* Symbol */: return input;
                    case 5 /* Number */: return input;
                }
                var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
                var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                if (exoticToPrim !== undefined) {
                    var result = exoticToPrim.call(input, hint);
                    if (IsObject(result))
                        throw new TypeError();
                    return result;
                }
                return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
            }
            // 7.1.1.1 OrdinaryToPrimitive(O, hint)
            // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
            function OrdinaryToPrimitive(O, hint) {
                if (hint === "string") {
                    var toString_1 = O.toString;
                    if (IsCallable(toString_1)) {
                        var result = toString_1.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                }
                else {
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                    var toString_2 = O.toString;
                    if (IsCallable(toString_2)) {
                        var result = toString_2.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                }
                throw new TypeError();
            }
            // 7.1.2 ToBoolean(argument)
            // https://tc39.github.io/ecma262/2016/#sec-toboolean
            function ToBoolean(argument) {
                return !!argument;
            }
            // 7.1.12 ToString(argument)
            // https://tc39.github.io/ecma262/#sec-tostring
            function ToString(argument) {
                return "" + argument;
            }
            // 7.1.14 ToPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-topropertykey
            function ToPropertyKey(argument) {
                var key = ToPrimitive(argument, 3 /* String */);
                if (IsSymbol(key))
                    return key;
                return ToString(key);
            }
            // 7.2 Testing and Comparison Operations
            // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
            // 7.2.2 IsArray(argument)
            // https://tc39.github.io/ecma262/#sec-isarray
            function IsArray(argument) {
                return Array.isArray
                    ? Array.isArray(argument)
                    : argument instanceof Object
                        ? argument instanceof Array
                        : Object.prototype.toString.call(argument) === "[object Array]";
            }
            // 7.2.3 IsCallable(argument)
            // https://tc39.github.io/ecma262/#sec-iscallable
            function IsCallable(argument) {
                // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
                return typeof argument === "function";
            }
            // 7.2.4 IsConstructor(argument)
            // https://tc39.github.io/ecma262/#sec-isconstructor
            function IsConstructor(argument) {
                // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
                return typeof argument === "function";
            }
            // 7.2.7 IsPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-ispropertykey
            function IsPropertyKey(argument) {
                switch (Type(argument)) {
                    case 3 /* String */: return true;
                    case 4 /* Symbol */: return true;
                    default: return false;
                }
            }
            // 7.3 Operations on Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-objects
            // 7.3.9 GetMethod(V, P)
            // https://tc39.github.io/ecma262/#sec-getmethod
            function GetMethod(V, P) {
                var func = V[P];
                if (func === undefined || func === null)
                    return undefined;
                if (!IsCallable(func))
                    throw new TypeError();
                return func;
            }
            // 7.4 Operations on Iterator Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
            function GetIterator(obj) {
                var method = GetMethod(obj, iteratorSymbol);
                if (!IsCallable(method))
                    throw new TypeError(); // from Call
                var iterator = method.call(obj);
                if (!IsObject(iterator))
                    throw new TypeError();
                return iterator;
            }
            // 7.4.4 IteratorValue(iterResult)
            // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
            function IteratorValue(iterResult) {
                return iterResult.value;
            }
            // 7.4.5 IteratorStep(iterator)
            // https://tc39.github.io/ecma262/#sec-iteratorstep
            function IteratorStep(iterator) {
                var result = iterator.next();
                return result.done ? false : result;
            }
            // 7.4.6 IteratorClose(iterator, completion)
            // https://tc39.github.io/ecma262/#sec-iteratorclose
            function IteratorClose(iterator) {
                var f = iterator["return"];
                if (f)
                    f.call(iterator);
            }
            // 9.1 Ordinary Object Internal Methods and Internal Slots
            // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
            // 9.1.1.1 OrdinaryGetPrototypeOf(O)
            // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
            function OrdinaryGetPrototypeOf(O) {
                var proto = Object.getPrototypeOf(O);
                if (typeof O !== "function" || O === functionPrototype)
                    return proto;
                // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
                // Try to determine the superclass constructor. Compatible implementations
                // must either set __proto__ on a subclass constructor to the superclass constructor,
                // or ensure each class has a valid `constructor` property on its prototype that
                // points back to the constructor.
                // If this is not the same as Function.[[Prototype]], then this is definately inherited.
                // This is the case when in ES6 or when using __proto__ in a compatible browser.
                if (proto !== functionPrototype)
                    return proto;
                // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
                var prototype = O.prototype;
                var prototypeProto = prototype && Object.getPrototypeOf(prototype);
                if (prototypeProto == null || prototypeProto === Object.prototype)
                    return proto;
                // If the constructor was not a function, then we cannot determine the heritage.
                var constructor = prototypeProto.constructor;
                if (typeof constructor !== "function")
                    return proto;
                // If we have some kind of self-reference, then we cannot determine the heritage.
                if (constructor === O)
                    return proto;
                // we have a pretty good guess at the heritage.
                return constructor;
            }
            // naive Map shim
            function CreateMapPolyfill() {
                var cacheSentinel = {};
                var arraySentinel = [];
                var MapIterator = /** @class */ (function () {
                    function MapIterator(keys, values, selector) {
                        this._index = 0;
                        this._keys = keys;
                        this._values = values;
                        this._selector = selector;
                    }
                    MapIterator.prototype["@@iterator"] = function () { return this; };
                    MapIterator.prototype[iteratorSymbol] = function () { return this; };
                    MapIterator.prototype.next = function () {
                        var index = this._index;
                        if (index >= 0 && index < this._keys.length) {
                            var result = this._selector(this._keys[index], this._values[index]);
                            if (index + 1 >= this._keys.length) {
                                this._index = -1;
                                this._keys = arraySentinel;
                                this._values = arraySentinel;
                            }
                            else {
                                this._index++;
                            }
                            return { value: result, done: false };
                        }
                        return { value: undefined, done: true };
                    };
                    MapIterator.prototype.throw = function (error) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        throw error;
                    };
                    MapIterator.prototype.return = function (value) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        return { value: value, done: true };
                    };
                    return MapIterator;
                }());
                return /** @class */ (function () {
                    function Map() {
                        this._keys = [];
                        this._values = [];
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    Object.defineProperty(Map.prototype, "size", {
                        get: function () { return this._keys.length; },
                        enumerable: true,
                        configurable: true
                    });
                    Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                    Map.prototype.get = function (key) {
                        var index = this._find(key, /*insert*/ false);
                        return index >= 0 ? this._values[index] : undefined;
                    };
                    Map.prototype.set = function (key, value) {
                        var index = this._find(key, /*insert*/ true);
                        this._values[index] = value;
                        return this;
                    };
                    Map.prototype.delete = function (key) {
                        var index = this._find(key, /*insert*/ false);
                        if (index >= 0) {
                            var size = this._keys.length;
                            for (var i = index + 1; i < size; i++) {
                                this._keys[i - 1] = this._keys[i];
                                this._values[i - 1] = this._values[i];
                            }
                            this._keys.length--;
                            this._values.length--;
                            if (key === this._cacheKey) {
                                this._cacheKey = cacheSentinel;
                                this._cacheIndex = -2;
                            }
                            return true;
                        }
                        return false;
                    };
                    Map.prototype.clear = function () {
                        this._keys.length = 0;
                        this._values.length = 0;
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    };
                    Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                    Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                    Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                    Map.prototype["@@iterator"] = function () { return this.entries(); };
                    Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                    Map.prototype._find = function (key, insert) {
                        if (this._cacheKey !== key) {
                            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                        }
                        if (this._cacheIndex < 0 && insert) {
                            this._cacheIndex = this._keys.length;
                            this._keys.push(key);
                            this._values.push(undefined);
                        }
                        return this._cacheIndex;
                    };
                    return Map;
                }());
                function getKey(key, _) {
                    return key;
                }
                function getValue(_, value) {
                    return value;
                }
                function getEntry(key, value) {
                    return [key, value];
                }
            }
            // naive Set shim
            function CreateSetPolyfill() {
                return /** @class */ (function () {
                    function Set() {
                        this._map = new _Map();
                    }
                    Object.defineProperty(Set.prototype, "size", {
                        get: function () { return this._map.size; },
                        enumerable: true,
                        configurable: true
                    });
                    Set.prototype.has = function (value) { return this._map.has(value); };
                    Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                    Set.prototype.delete = function (value) { return this._map.delete(value); };
                    Set.prototype.clear = function () { this._map.clear(); };
                    Set.prototype.keys = function () { return this._map.keys(); };
                    Set.prototype.values = function () { return this._map.values(); };
                    Set.prototype.entries = function () { return this._map.entries(); };
                    Set.prototype["@@iterator"] = function () { return this.keys(); };
                    Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                    return Set;
                }());
            }
            // naive WeakMap shim
            function CreateWeakMapPolyfill() {
                var UUID_SIZE = 16;
                var keys = HashMap.create();
                var rootKey = CreateUniqueKey();
                return /** @class */ (function () {
                    function WeakMap() {
                        this._key = CreateUniqueKey();
                    }
                    WeakMap.prototype.has = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                        return table !== undefined ? HashMap.has(table, this._key) : false;
                    };
                    WeakMap.prototype.get = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                        return table !== undefined ? HashMap.get(table, this._key) : undefined;
                    };
                    WeakMap.prototype.set = function (target, value) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                        table[this._key] = value;
                        return this;
                    };
                    WeakMap.prototype.delete = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                        return table !== undefined ? delete table[this._key] : false;
                    };
                    WeakMap.prototype.clear = function () {
                        // NOTE: not a real clear, just makes the previous data unreachable
                        this._key = CreateUniqueKey();
                    };
                    return WeakMap;
                }());
                function CreateUniqueKey() {
                    var key;
                    do
                        key = "@@WeakMap@@" + CreateUUID();
                    while (HashMap.has(keys, key));
                    keys[key] = true;
                    return key;
                }
                function GetOrCreateWeakMapTable(target, create) {
                    if (!hasOwn.call(target, rootKey)) {
                        if (!create)
                            return undefined;
                        Object.defineProperty(target, rootKey, { value: HashMap.create() });
                    }
                    return target[rootKey];
                }
                function FillRandomBytes(buffer, size) {
                    for (var i = 0; i < size; ++i)
                        buffer[i] = Math.random() * 0xff | 0;
                    return buffer;
                }
                function GenRandomBytes(size) {
                    if (typeof Uint8Array === "function") {
                        if (typeof crypto !== "undefined")
                            return crypto.getRandomValues(new Uint8Array(size));
                        if (typeof msCrypto !== "undefined")
                            return msCrypto.getRandomValues(new Uint8Array(size));
                        return FillRandomBytes(new Uint8Array(size), size);
                    }
                    return FillRandomBytes(new Array(size), size);
                }
                function CreateUUID() {
                    var data = GenRandomBytes(UUID_SIZE);
                    // mark as random - RFC 4122 § 4.4
                    data[6] = data[6] & 0x4f | 0x40;
                    data[8] = data[8] & 0xbf | 0x80;
                    var result = "";
                    for (var offset = 0; offset < UUID_SIZE; ++offset) {
                        var byte = data[offset];
                        if (offset === 4 || offset === 6 || offset === 8)
                            result += "-";
                        if (byte < 16)
                            result += "0";
                        result += byte.toString(16).toLowerCase();
                    }
                    return result;
                }
            }
            // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
            function MakeDictionary(obj) {
                obj.__ = undefined;
                delete obj.__;
                return obj;
            }
        });
    })(Reflect$1 || (Reflect$1 = {}));

    function createManagerDecorator(managerId) {
        const symbol = Symbol(managerId);
        const c = createContainer();
        const { lazyInject } = _default(c);
        return Object.assign(lazyInject(symbol), { symbol });
    }
    function provide(managerDecorator) {
        const { symbol } = managerDecorator;
        const inversifyDecorator = fluentProvide(symbol).inTransientScope().done();
        return (target) => {
            inversifyDecorator(target);
        };
    }
    function createContainer() {
        class FrameContainer extends inversify.Container {
            construct(ctor, ...args) {
                const identifiers = Reflect.getMetadata(inversify.METADATA_KEY.TAGGED, ctor);
                const argsToInject = Object.values(identifiers).map(([{ value }]) => this.get(value));
                return new ctor(...args, ...argsToInject);
            }
        }
        const container = new FrameContainer();
        container.load(buildProviderModule());
        return container;
    }

    const IStoreManager = createManagerDecorator('IStoreManager');
    let StoreManager = class StoreManager {
        constructor() {
            this.managerBrand = 'IStoreManager';
            this.template = '';
            this.data = {};
            this.prop = {};
            this.style = {};
            this.method = {};
            this.component = {};
            this.beforeMount = {};
            this.afterMount = {};
            this.util = {};
            this._data = {};
            this.store = {};
            this.forStore = {};
            this.propStore = {};
            this.componentStore = [];
            this.root = [];
        }
    };
    StoreManager = __decorate([
        provide(IStoreManager)
    ], StoreManager);

    const ITypeManager = createManagerDecorator('ITypeManager');
    let TypeManager = class TypeManager {
        constructor() {
            this.managerBrand = 'ITypeManager';
        }
        isArray(input) {
            return Array.isArray(input);
        }
        isObject(input) {
            return Object.prototype.toString.call(input) === '[object Object]';
        }
        isObjectOrArray(input) {
            return this.isArray(input) || this.isObject(input);
        }
        isObjectType(input) {
            return typeof input === 'object';
        }
        isEmptyObject(input) {
            return Object.keys(input).length === 0;
        }
        isFunction(input) {
            return typeof input === 'function';
        }
        isString(input) {
            return typeof input === 'string';
        }
        isNumber(input) {
            return typeof input === 'number';
        }
        isSymbol(input) {
            return typeof input === 'symbol';
        }
    };
    TypeManager = __decorate([
        provide(ITypeManager)
    ], TypeManager);

    var _a$7;
    const IUtilManager = createManagerDecorator('IUtilManager');
    let UtilManager = class UtilManager {
        constructor(_typeManager) {
            this._typeManager = _typeManager;
            this.managerBrand = 'IUtilManager';
        }
        deepClone(originObj) {
            if (!this._typeManager.isObjectOrArray(originObj))
                return originObj;
            const obj = Array.isArray(originObj) ? [] : {};
            for (const key in originObj) {
                if (this._typeManager.isObjectOrArray(originObj[key])) {
                    obj[key] = this.deepClone(originObj[key]);
                }
                else if (this._typeManager.isFunction(originObj)) {
                    obj[key] = originObj[key].bind(obj);
                }
                else {
                    obj[key] = originObj[key];
                }
            }
            return obj;
        }
        transfer(contain) {
            const array = [];
            const containArray = contain.split('.');
            containArray.forEach((i) => array.push(`['${i}']`));
            return array.join('');
        }
    };
    UtilManager = __decorate([
        provide(IUtilManager),
        __param(0, ITypeManager),
        __metadata("design:paramtypes", [typeof (_a$7 = typeof TypeManager !== "undefined" && TypeManager) === "function" ? _a$7 : Object])
    ], UtilManager);

    var _a$6, _b$4;
    const IAllotManager = createManagerDecorator('IAllotManager');
    let AllotManager = class AllotManager {
        constructor(_storeManager, _utilManager) {
            this._storeManager = _storeManager;
            this._utilManager = _utilManager;
            this.managerBrand = 'IAllotManager';
        }
        allotFromData(contain) {
            const chain = this._getChain(contain);
            return [eval(`this._storeManager.data${chain}`), chain];
        }
        allotFromMethod(contain) {
            const chain = this._getChain(contain);
            return [eval(`this._storeManager.method${chain}`), chain];
        }
        allotFromComponent(contain) {
            const chain = this._getChain(contain);
            if (!eval(`this._storeManager.component${chain}`))
                return [null, null];
            return [eval(`new Frame(this._storeManager.component${chain})`), chain];
        }
        allotFromArray(contain, arrayObj) {
            const chain = this._getChain(contain);
            const implement = `${this._getChain(arrayObj.forsArrayName)}[${arrayObj.index}]`;
            return [eval(`this._storeManager.data${implement}${chain}`), `${implement}${chain}`];
        }
        _getChain(contain) {
            return this._utilManager.transfer(contain);
        }
    };
    AllotManager = __decorate([
        provide(IAllotManager),
        __param(0, IStoreManager),
        __param(1, IUtilManager),
        __metadata("design:paramtypes", [typeof (_a$6 = typeof StoreManager !== "undefined" && StoreManager) === "function" ? _a$6 : Object, typeof (_b$4 = typeof UtilManager !== "undefined" && UtilManager) === "function" ? _b$4 : Object])
    ], AllotManager);

    var _a$5;
    const IRegExpManager = createManagerDecorator('IRegExpManager');
    let RegExpManager = class RegExpManager {
        constructor(_typeManager) {
            this._typeManager = _typeManager;
            this.managerBrand = 'IRegExpManager';
            this.notSpacePattern = /[^\s]/g;
            this.numberPattern = /\['\d+'\]/;
            this.elementTagPattern = /\b\w+(?=\s)/;
            this.testClassPattern = /(?<=\s+\.)(\w|\d|_|-)+\s+/g;
            this.testIdPattern = /(?<=\s+#).+\s+/g;
            this.idPattern = this.testIdPattern;
            this.testOnPattern = /(?<=@)[^\s]+(?=\s+|\b)/;
            this.onPattern = this.testOnPattern;
            this.testForPattern = /(?<=\*)[^\s]+(?=\s+|\b)/;
            this.forPattern = this.testForPattern;
            this.arrowLeftPattern = /(?<=\s*).+(?=\=)/;
            this.arrowRightPattern = /(?<=>).+(?=\s*)/;
            this.testTextPattern = /(?<=\s+){{.+}}/;
            this.textPatternFirst = /(?<=[\s+]{{)[^{}]+}}/;
            this.textPatternSecond = /[^}}]+/;
            this.testAttributePattern = /\s+\S+{{[^{}]+}}/g;
            this.attributeKeyPattern = /.+(?={{)/;
            this.attributeValuePattern = /(?<={{).+(?=}})/;
            this.doubleArrowBracketPattern = /(?<=<<).+(?=>>)/;
            this.arrowBracketPattern = /(?<=<).+(?=>)/;
            this.outsideArrowBracketPattern = /<.+>/;
        }
        getArrowBracket(str) {
            if (!this._typeManager.isString(str))
                return ['0', null];
            if (this.doubleArrowBracketPattern.test(str))
                return [str, null];
            const result = str.match(this.arrowBracketPattern);
            const resultWithOutArrow = str.match(this.outsideArrowBracketPattern);
            if (result && resultWithOutArrow)
                return [result.join(''), resultWithOutArrow.join('')];
            return [str, null];
        }
        separateArrowSide(arrowExpression) {
            const arrowLeft = arrowExpression.match(this.arrowLeftPattern);
            const arrowRight = arrowExpression.match(this.arrowRightPattern);
            if (arrowLeft && arrowRight)
                return [arrowLeft[0], arrowRight[0]];
            return ['', ''];
        }
        removeSpace(str) {
            const withoutSpaceString = str.match(this.notSpacePattern);
            return withoutSpaceString ? withoutSpaceString[0] : '';
        }
        replaceStringToNumber(str) {
            var _a;
            const num = str.match(/\['\d+'\]/);
            if (num)
                return str.replace(num[0], `[${(_a = num[0].match(/d+/)) === null || _a === void 0 ? void 0 : _a[0]}]`);
            return str;
        }
    };
    RegExpManager = __decorate([
        provide(IRegExpManager),
        __param(0, ITypeManager),
        __metadata("design:paramtypes", [typeof (_a$5 = typeof TypeManager !== "undefined" && TypeManager) === "function" ? _a$5 : Object])
    ], RegExpManager);

    var _a$4, _b$3, _c$3, _d$1, _e$1, _f$1;
    const ICreateManager = createManagerDecorator('ICreateManager');
    let CreateManager = class CreateManager {
        constructor(_regExpManager, _allotManager, _utilManager, _typeManager, _storeManager, _recordManager) {
            this._regExpManager = _regExpManager;
            this._allotManager = _allotManager;
            this._utilManager = _utilManager;
            this._typeManager = _typeManager;
            this._storeManager = _storeManager;
            this._recordManager = _recordManager;
            this.managerBrand = 'ICreateManager';
        }
        traverseCreate(arr, parent, arrayObj = {}) {
            for (const tagObj of arr) {
                if (tagObj.for) {
                    const forStatement = tagObj.for;
                    const forsArrayName = this._regExpManager.separateArrowSide(forStatement)[1];
                    const forsItem = this._regExpManager.separateArrowSide(forStatement)[0];
                    const realArray = this._allotManager.allotFromData(forsArrayName)[0];
                    for (var index = 0; index < realArray.length; index++) {
                        arrayObj = {
                            forsArrayName,
                            forsItem,
                            realArray,
                            index
                        };
                        const el = this._createAndAddValue(tagObj, arrayObj);
                        parent.appendChild(el);
                        const forObj = { el, tagObj, parent };
                        this._recordManager.recordFor(this._utilManager.transfer(forsArrayName), forObj);
                        if (tagObj.children.length === 0) {
                            continue;
                        }
                        else {
                            this.traverseCreate(tagObj.children, el, arrayObj);
                        }
                    }
                }
                else {
                    const el = this._createAndAddValue(tagObj, arrayObj);
                    parent.appendChild(el);
                    if (tagObj.children.length !== 0) {
                        this.traverseCreate(tagObj.children, el, arrayObj);
                    }
                    else {
                        continue;
                    }
                }
            }
        }
        addValueToElement(el, prop, toAdd) {
            const implement = {
                text: () => {
                    if (['INPUT'].includes(el.tagName)) {
                        el.nodeValue = toAdd;
                    }
                    else {
                        if (['I'].includes(el.tagName)) {
                            el.innerHTML = toAdd;
                        }
                        else {
                            el.innerText = toAdd;
                        }
                    }
                },
                class: () => {
                    if (this._typeManager.isArray(toAdd)) {
                        toAdd.forEach((each) => el.classList.add(each));
                    }
                    else {
                        el.setAttribute(prop, toAdd);
                    }
                },
                html: () => {
                    el.innerHTML = toAdd;
                }
            }[prop];
            implement ? implement() : (() => {
                el.setAttribute(prop, toAdd);
                el.removeAttribute('on');
            })();
            this._addStyleToElement(el);
        }
        _createAndAddValue(tagObj, arrayObj) {
            const el = document.createElement(tagObj['tag']);
            for (const prop in tagObj) {
                if (['for', 'tag', 'children', 'tabNum', 'pretabNum'].includes(prop))
                    continue;
                let toAdd = tagObj[prop];
                if (this._regExpManager.getArrowBracket(tagObj[prop])[1]) {
                    const contain = this._regExpManager.getArrowBracket(tagObj[prop])[0];
                    const origin = this._regExpManager.getArrowBracket(tagObj[prop])[1];
                    toAdd = this._ifHaveForsItem(contain, arrayObj, { el, prop, textNode: tagObj[prop] });
                    if (toAdd.prop && this._typeManager.isArray(toAdd.prop)) {
                        const conponent = this._storeManager.componentStore.find((i) => i.el === el);
                        if (conponent)
                            conponent.propValue = toAdd;
                    }
                    else {
                        toAdd = tagObj[prop].replace(origin, toAdd);
                    }
                }
                if (prop === 'on') {
                    const onStatement = tagObj.on;
                    const functionName = this._regExpManager.separateArrowSide(onStatement)[1];
                    const Event = this._regExpManager.separateArrowSide(onStatement)[0];
                    if (Event == 'component') {
                        const Component = this._allotManager.allotFromComponent(functionName)[0];
                        if (Component) {
                            const componentObj = { el, name: functionName, component: Component };
                            this._storeManager.componentStore.push(componentObj);
                        }
                    }
                    else {
                        const Function = this._allotManager.allotFromMethod(functionName)[0];
                        el.addEventListener(Event, () => { this._storeManager.current = el; });
                        el.addEventListener(Event, Function.bind(this));
                    }
                }
                this.addValueToElement(el, prop, toAdd);
            }
            return el;
        }
        _ifHaveForsItem(contain, arrayObj, elPropObj) {
            let result, toAdd, chain;
            const itemName = RegExp('(?=\s*)' + arrayObj.forsItem + '\.');
            if (contain.match(itemName)) {
                const newContain = contain.match(/(?<=\.).+(?=\s*)/);
                if (newContain) {
                    result = this._allotManager.allotFromArray(newContain[0], arrayObj);
                    toAdd = result[0];
                    chain = result[1];
                    if (elPropObj.prop === 'prop') {
                        toAdd = { prop: [chain, toAdd] };
                        this._recordManager.recordProp(chain, elPropObj.el);
                    }
                    else {
                        this._recordManager.record(chain, elPropObj);
                    }
                    return toAdd;
                }
            }
            result = this._allotManager.allotFromData(contain);
            toAdd = result[0];
            chain = result[1];
            if (elPropObj.prop == 'prop') {
                toAdd = { prop: [chain, toAdd] };
                this._recordManager.recordProp(chain, elPropObj.el);
            }
            else {
                this._recordManager.record(chain, elPropObj);
            }
            return toAdd;
        }
        _addStyleToElement(el) {
            const addStyle = (key) => {
                let oldStyle = el.getAttribute('style');
                oldStyle = oldStyle !== null ? oldStyle : '';
                if (oldStyle)
                    oldStyle = oldStyle.match(/;$/) ? oldStyle : oldStyle + ';';
                let newStyle = oldStyle + this._storeManager.style[key];
                el.setAttribute('style', newStyle);
            };
            let keyList = Object.keys(this._storeManager.style);
            el.classList.forEach((i) => {
                i = `.${i}`;
                if (keyList.includes(i)) {
                    addStyle(i);
                }
            });
            if (keyList.includes(`${el.id}`)) {
                addStyle(`${el.id}`);
            }
            if (keyList.includes(el.tagName.toLowerCase())) {
                addStyle(el.tagName.toLowerCase());
            }
        }
    };
    CreateManager = __decorate([
        provide(ICreateManager),
        __param(0, IRegExpManager),
        __param(1, IAllotManager),
        __param(2, IUtilManager),
        __param(3, ITypeManager),
        __param(4, IStoreManager),
        __param(5, IRecordManager),
        __metadata("design:paramtypes", [typeof (_a$4 = typeof RegExpManager !== "undefined" && RegExpManager) === "function" ? _a$4 : Object, typeof (_b$3 = typeof AllotManager !== "undefined" && AllotManager) === "function" ? _b$3 : Object, typeof (_c$3 = typeof UtilManager !== "undefined" && UtilManager) === "function" ? _c$3 : Object, typeof (_d$1 = typeof TypeManager !== "undefined" && TypeManager) === "function" ? _d$1 : Object, typeof (_e$1 = typeof StoreManager !== "undefined" && StoreManager) === "function" ? _e$1 : Object, typeof (_f$1 = typeof RecordManager !== "undefined" && RecordManager) === "function" ? _f$1 : Object])
    ], CreateManager);

    var _a$3, _b$2, _c$2;
    const IRecordManager = createManagerDecorator('IRecordManager');
    let RecordManager = class RecordManager {
        constructor(_storeManager, _createManager, _regExpManager) {
            this._storeManager = _storeManager;
            this._createManager = _createManager;
            this._regExpManager = _regExpManager;
            this.managerBrand = 'IRecordManager';
        }
        record(chain, elPropObj) {
            if (this._storeManager.store[chain]) {
                this._storeManager.store[chain].push(elPropObj);
            }
            else {
                this._storeManager.store[chain] = [elPropObj];
            }
        }
        recordProp(chain, el) {
            if (this._storeManager.propStore[chain]) {
                this._storeManager.propStore[chain].push(el);
            }
            else {
                this._storeManager.propStore[chain] = [el];
            }
        }
        recordFor(chain, obj) {
            if (this._storeManager.forStore[chain]) {
                for (const each of this._storeManager.forStore[chain]) {
                    if (each.el === obj.el)
                        return;
                }
                this._storeManager.forStore[chain].push(obj);
            }
            else {
                this._storeManager.forStore[chain] = [obj];
            }
        }
        findRecord(chain, value) {
            if (!chain)
                return false;
            chain = this._regExpManager.replaceStringToNumber(chain);
            value = typeof value == 'number' ? Number(value) : value;
            const array = this._storeManager.store[chain];
            array.forEach((each) => {
                const newValue = each.textNode.replace(each.origin, value);
                this._createManager.addValueToElement(each.el, each.prop, newValue);
            });
            return true;
        }
        findRecordProp(chain) {
            if (!chain)
                return void 0;
            chain = this._regExpManager.replaceStringToNumber(chain);
            const _chain = "['" + chain.match(/\[.+\]/)[0].match(/[^\[''\]]+/)[0] + "']";
            const array = this._storeManager.propStore[_chain];
            array.forEach((each) => {
                const component = this._storeManager.componentStore.find((i) => i.el === each);
                if (component) {
                    component.component.data;
                    eval(`data${chain} = this._storeManager.data${chain}`);
                }
            });
        }
        findRecordFor(chain, value) {
            if (!chain)
                return false;
            chain = this._regExpManager.replaceStringToNumber(chain);
            const array = this._storeManager.forStore[chain];
            let nextSibling = null;
            for (let i = 0; i < array.length; i++) {
                if (i === array.length - 1) {
                    nextSibling = array[i].el.nextElementSibling;
                }
                array[i].el.remove();
            }
            const frag = document.createDocumentFragment();
            this._createManager.traverseCreate([array[0].tagObj], frag);
            if (!nextSibling)
                array[0].parent.appendChild(frag);
            array[0].parent.insertBefore(frag, nextSibling);
            return true;
        }
    };
    RecordManager = __decorate([
        provide(IRecordManager),
        __param(0, IStoreManager),
        __param(1, ICreateManager),
        __param(2, IRegExpManager),
        __metadata("design:paramtypes", [typeof (_a$3 = typeof StoreManager !== "undefined" && StoreManager) === "function" ? _a$3 : Object, typeof (_b$2 = typeof CreateManager !== "undefined" && CreateManager) === "function" ? _b$2 : Object, typeof (_c$2 = typeof RegExpManager !== "undefined" && RegExpManager) === "function" ? _c$2 : Object])
    ], RecordManager);

    var _a$2, _b$1, _c$1;
    const IObserveManager = createManagerDecorator('IObserveManager');
    let ObserveManager = class ObserveManager {
        constructor(_typeManager, _storeManager, _recordManager) {
            this._typeManager = _typeManager;
            this._storeManager = _storeManager;
            this._recordManager = _recordManager;
            this.managerBrand = 'IObserveManager';
            this._data = {};
        }
        observe(data) {
            if (this._typeManager.isEmptyObject(this._data))
                this._data = data;
            for (const key in data) {
                if (this._typeManager.isObjectOrArray(data[key])) {
                    data[key] = this.observe(data[key]);
                }
            }
            return new Proxy(data, {
                set: (target, key, val) => {
                    const _val = val;
                    const res = this._findChain(this._data, key, target[key]);
                    if (this._typeManager.isObjectOrArray(val))
                        val = this.observe(val);
                    Reflect.set(target, key, val);
                    const result = this._recordManager.findRecord(res, _val);
                    if (!result) {
                        if (Object.keys(this._storeManager.component).length !== 0)
                            this._recordManager.findRecordProp(res);
                        this._recordManager.findRecordFor(res, _val);
                    }
                    this._updateData();
                    return true;
                }
            });
        }
        _findChain(data, key, val, parentKey = '') {
            if (!this._typeManager.isObjectOrArray(data))
                return;
            for (const i in data) {
                if (i === key && data[i] === val) {
                    return `['${i}']`;
                }
                else {
                    let res = this._findChain(data[i], key, val, i);
                    if (!res) {
                        continue;
                    }
                    else {
                        return `['${i}']${res}`;
                    }
                }
            }
        }
        _updateData() {
            this._storeManager._data = this._storeManager.data;
        }
    };
    ObserveManager = __decorate([
        provide(IObserveManager),
        __param(0, ITypeManager),
        __param(1, IStoreManager),
        __param(2, IRecordManager),
        __metadata("design:paramtypes", [typeof (_a$2 = typeof TypeManager !== "undefined" && TypeManager) === "function" ? _a$2 : Object, typeof (_b$1 = typeof StoreManager !== "undefined" && StoreManager) === "function" ? _b$1 : Object, typeof (_c$1 = typeof RecordManager !== "undefined" && RecordManager) === "function" ? _c$1 : Object])
    ], ObserveManager);

    var _a$1;
    const ITemplateManager = createManagerDecorator('ITemplateManager');
    let TemplateManager = class TemplateManager {
        constructor(_regExpManager) {
            this._regExpManager = _regExpManager;
            this.managerBrand = 'ITemplateManager';
        }
        parse(template) {
            const array = this._breakTemplateByLine(template);
            const root = this._findSuperior(this._allotDiscriptionToTagObj(array));
            return root;
        }
        _breakTemplateByLine(template) {
            var _a, _b, _c;
            const array = [];
            const templateArray = template.split('\n');
            for (const i in templateArray) {
                if (this._regExpManager.notSpacePattern.test(templateArray[i]))
                    continue;
                const tabNum = ((_a = templateArray[i].match(/\s*/)) === null || _a === void 0 ? void 0 : _a[0].length) || 0;
                const preTabNum = i === '0' ? 0 : ((_b = templateArray[parseInt(i) - 1].match(/\s*/)) === null || _b === void 0 ? void 0 : _b[0].length) || 0;
                const tag = (_c = templateArray[i].match(this._regExpManager.elementTagPattern)) === null || _c === void 0 ? void 0 : _c[0];
                if (!tag)
                    throw new Error(`模板第${i}行没有 tag 标签`);
                const testDiscription = templateArray[i].match(RegExp('(?<=' + tag + ').+'));
                const discription = testDiscription ? testDiscription[0] : '';
                const obj = { tag, tabNum, preTabNum, discription, children: [] };
                array.push(obj);
            }
            return array;
        }
        _getRawAttribute(discription) {
            const res = {};
            res.class = [];
            const classList = discription.match(this._regExpManager.testClassPattern);
            if (classList)
                classList === null || classList === void 0 ? void 0 : classList.forEach((i) => { var _a; (_a = res.class) === null || _a === void 0 ? void 0 : _a.push(i.trim()); });
            const id = discription.match(this._regExpManager.idPattern);
            if (id)
                res.id = id[0].trim();
            const on = discription.match(this._regExpManager.onPattern);
            if (on)
                res.on = on[0].trim();
            const For = discription.match(this._regExpManager.forPattern);
            if (For)
                res.for = For[0].trim();
            const textFirst = discription.match(this._regExpManager.textPatternFirst);
            if (textFirst) {
                const text = textFirst[0].match(this._regExpManager.textPatternSecond);
                if (text)
                    res.text = text[0].trim();
            }
            const attributes = discription.match(this._regExpManager.testAttributePattern);
            if (Array.isArray(attributes)) {
                attributes.forEach((each) => {
                    var _a, _b;
                    const key = (_a = each.match(this._regExpManager.attributeKeyPattern)) === null || _a === void 0 ? void 0 : _a[0].trim();
                    const value = (_b = each.match(this._regExpManager.attributeValuePattern)) === null || _b === void 0 ? void 0 : _b[0].trim();
                    res[key] = value;
                });
            }
            return res;
        }
        _allotDiscriptionToTagObj(rootObjectArray) {
            for (const rawTemplateObject of rootObjectArray) {
                const attributeObj = this._getRawAttribute(rawTemplateObject.discription);
                for (const attribute in attributeObj) {
                    rawTemplateObject[attribute] = attributeObj[attribute];
                }
                delete rawTemplateObject['discription'];
            }
            return rootObjectArray;
        }
        _findSuperior(arr) {
            const rootObject = [arr[0]];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i].tabNum > (arr[i].preTabNum || 0)) {
                    arr[i - 1].children.push(arr[i]);
                }
                else {
                    for (let j = i - 1; j >= 0; j--) {
                        if (arr[j].tabNum < arr[i].tabNum) {
                            arr[j].children.push(arr[i]);
                            break;
                        }
                        else {
                            if (arr[i].tabNum === 0) {
                                rootObject.push(arr[i]);
                                break;
                            }
                            else {
                                continue;
                            }
                        }
                    }
                }
            }
            return rootObject;
        }
    };
    TemplateManager = __decorate([
        provide(ITemplateManager),
        __param(0, IRegExpManager),
        __metadata("design:paramtypes", [typeof (_a$1 = typeof RegExpManager !== "undefined" && RegExpManager) === "function" ? _a$1 : Object])
    ], TemplateManager);

    var _a, _b, _c, _d, _e, _f;
    let ConstructManager = class ConstructManager {
        constructor(option, _storeManager, _templateManager, _observeManager, _typeManager, _createManager, _utilManager) {
            this._storeManager = _storeManager;
            this._templateManager = _templateManager;
            this._observeManager = _observeManager;
            this._typeManager = _typeManager;
            this._createManager = _createManager;
            this._utilManager = _utilManager;
            this.managerBrand = 'IConstructManager';
            this._storeManager.template = option.template;
            this._storeManager.data = !option.data ? {}
                : this._typeManager.isFunction(option.data) ? option.data()
                    : option.data;
            this._storeManager.prop = option.prop || {};
            this._storeManager.style = option.style || {};
            this._storeManager.method = option.method || {};
            this._storeManager.component = option.component || {};
            this._storeManager.beforeMount = option.beforeMount || {};
            this._storeManager.afterMount = option.afterMount || {};
            this._storeManager.util = option.util || {};
            this._storeManager._data = this._storeManager.data;
            this._storeManager.store = {};
            this._storeManager.forStore = {};
            this._storeManager.propStore = {};
            this._storeManager.componentStore = [];
            this._storeManager.root = this._templateManager.parse(this._storeManager.template);
            this._observeManager.observe(this._storeManager.data);
        }
        mount(toMountElement) {
            var _a, _b;
            const frag = document.createDocumentFragment();
            this._createManager.traverseCreate(this._storeManager.root, frag);
            (_a = toMountElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(frag, toMountElement);
            toMountElement.parentNode;
            (_b = toMountElement.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(toMountElement);
            this._componentMount();
        }
        _componentMount() {
            if (this._storeManager.componentStore.length > 0) {
                this._storeManager.componentStore.forEach((each) => {
                    if (each.propValue)
                        this._deliverProp(each, each.propValue);
                    this.mount(each.el);
                });
            }
        }
        _deliverProp(each, toAdd) {
            const chain = toAdd.prop[0].match(/(?<=\[').+(?='\])/)[0].trim();
            const data = each.component.data;
            data[chain] = this._utilManager.deepClone(toAdd.prop[1]);
        }
    };
    ConstructManager = __decorate([
        __param(1, IStoreManager),
        __param(2, ITemplateManager),
        __param(3, IObserveManager),
        __param(4, ITypeManager),
        __param(5, ICreateManager),
        __param(6, IUtilManager),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof StoreManager !== "undefined" && StoreManager) === "function" ? _a : Object, typeof (_b = typeof TemplateManager !== "undefined" && TemplateManager) === "function" ? _b : Object, typeof (_c = typeof ObserveManager !== "undefined" && ObserveManager) === "function" ? _c : Object, typeof (_d = typeof TypeManager !== "undefined" && TypeManager) === "function" ? _d : Object, typeof (_e = typeof CreateManager !== "undefined" && CreateManager) === "function" ? _e : Object, typeof (_f = typeof UtilManager !== "undefined" && UtilManager) === "function" ? _f : Object])
    ], ConstructManager);

    class Frame {
        constructor(option) {
            const container = createContainer();
            return container.construct(ConstructManager, option);
        }
    }

    return Frame;

})));
//# sourceMappingURL=frame.umd.js.map
