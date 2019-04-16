"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _clear = require("clear");

var _clear2 = _interopRequireDefault(_clear);

var _figlet = require("figlet");

var _figlet2 = _interopRequireDefault(_figlet);

var _shelljs = require("shelljs");

var _shelljs2 = _interopRequireDefault(_shelljs);

var _inquirer = require("inquirer");

var _inquirer2 = _interopRequireDefault(_inquirer);

var _constant = require("./data/constant.js");

var CONST = _interopRequireWildcard(_constant);

var _data = require("./data/data.js");

var DATA = _interopRequireWildcard(_data);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var error = _chalk2.default.bold.red;
var warning = _chalk2.default.keyword('orange');
var success = _chalk2.default.greenBright;
var info = _chalk2.default.bold.blue;

var Project = function () {
    function Project(app) {
        _classCallCheck(this, Project);

        this.app = app;
        this.info = this.app.projectInfo;

        this.newFile = [];
        this.modifiedFile = [];
        this.allFile = [];

        this.init();
    }

    _createClass(Project, [{
        key: "init",
        value: function init() {}
    }, {
        key: "initMethod",
        value: function initMethod() {
            console.log('initMethod', Date.now());
        }
    }, {
        key: "getChangeFiles",
        value: function getChangeFiles() {
            var info = this.info;

            var gitStatus = _shelljs2.default.exec("cd '" + info.currentRoot + "' && git status", { silent: true });

            var lines = gitStatus.stdout.split('\n');

            var p = this;

            lines.map(function (item, index) {
                item = item.trim();
                item.replace(/new[\s]+file:[\s]+(.*)/, function ($0, $1) {
                    var fullpath = _path2.default.join(info.currentRoot, $1);
                    var filepath = fullpath.replace(info.projectRoot, '');
                    if (info.feuid.extension.test($1) && info.feuid.dir.test(filepath)) {
                        //console.log( 'find new file:', $1 );
                        p.newFile.push(fullpath);
                        p.allFile.push(fullpath);
                    }
                });
                item.replace(/modified:[\s]+(.*)/, function ($0, $1) {
                    var fullpath = _path2.default.join(info.currentRoot, $1);
                    var filepath = fullpath.replace(info.projectRoot, '');
                    if (info.feuid.extension.test($1) && info.feuid.dir.test(filepath)) {
                        //console.log( 'find new modified:', $1 );
                        p.modifiedFile.push(fullpath);
                        p.allFile.push(fullpath);
                    }
                });
            });
        }
    }]);

    return Project;
}();

exports.default = Project;