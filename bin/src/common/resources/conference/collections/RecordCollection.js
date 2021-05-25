'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecordCollection = function () {
  function RecordCollection() {
    _classCallCheck(this, RecordCollection);

    this._instance = null;
  }

  _createClass(RecordCollection, [{
    key: 'fetch',


    /**
     * 获取列表
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.record.list(null, { query: query });

              case 2:
                result = _context.sent;

                if (!(0, _lodash.isObject)(result)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt('return', result);

              case 7:
                return _context.abrupt('return', {});

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x) {
        return _ref.apply(this, arguments);
      }

      return fetch;
    }()

    /**
     * 获取会议详情
     */

  }, {
    key: 'fetchInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.record.info(null, { params: params });

              case 2:
                result = _context2.sent;

                if (!(0, _lodash.isObject)(result)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt('return', result);

              case 7:
                return _context2.abrupt('return', {});

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchInfo(_x2) {
        return _ref2.apply(this, arguments);
      }

      return fetchInfo;
    }()

    /**
     * 导出会议记录
     */

  }, {
    key: 'export',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query) {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.record.export(null, { query: query });

              case 2:
                result = _context3.sent;

                if (!(0, _lodash.isObject)(result)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', result);

              case 7:
                return _context3.abrupt('return', {});

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _export(_x3) {
        return _ref3.apply(this, arguments);
      }

      return _export;
    }()
  }], [{
    key: 'getInstance',
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new RecordCollection();
      }
      return this._instance;
    }
  }]);

  return RecordCollection;
}();

exports.default = RecordCollection;