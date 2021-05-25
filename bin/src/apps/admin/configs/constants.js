'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VIDEO_EN_FORCE_OPTIO, _AUDIO_EN_FORCE_OPTIO, _AUDIO_ALL_ENFORCE_OP, _ABILITY_AUTHROIZATIO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RECORD_FLAG = {
  OPEN: 1,
  CLOST: 0
};

var CONFERENCE_SETTING = {
  // 强制开启视频
  VIDEO_EN_FORCE: {
    ENABLE: 1,
    DISABLE: 0
  },
  // 强制开启语音
  AUDIO_EN_FORCE: {
    ENABLE: 1,
    DISABLE: 0
  },
  AUDIO_ALL_ENFORCE: {
    ENABLE: 1,
    DISABLE: 0
  },
  VIDEO_RECORD_ALLOWED_FLAG: {
    ENABLE: 0,
    DISABLE: 1
  },
  VIDEO_RECORD_DEFAULT_FLAG: {
    ENABLE: 1,
    DISABLE: 0,
    FORCE: 2
  },
  FORCE_RECORD_FLAG: {
    ENABLE: 1,
    DISABLE: 0
  },
  // 权限管理-全员可用
  ALL_ALLOWED_FLAG: {
    ENABLE: 0,
    DISABLE: 1
  }
};
var CONFERENCE_SETTING_OPTIONS = {
  VIDEO_EN_FORCE_OPTIONS: (_VIDEO_EN_FORCE_OPTIO = {}, _defineProperty(_VIDEO_EN_FORCE_OPTIO, CONFERENCE_SETTING.VIDEO_EN_FORCE.ENABLE, '允许'), _defineProperty(_VIDEO_EN_FORCE_OPTIO, CONFERENCE_SETTING.VIDEO_EN_FORCE.DISABLE, '禁止'), _VIDEO_EN_FORCE_OPTIO),
  AUDIO_EN_FORCE_OPTIONS: (_AUDIO_EN_FORCE_OPTIO = {}, _defineProperty(_AUDIO_EN_FORCE_OPTIO, CONFERENCE_SETTING.AUDIO_EN_FORCE.ENABLE, '允许'), _defineProperty(_AUDIO_EN_FORCE_OPTIO, CONFERENCE_SETTING.AUDIO_EN_FORCE.DISABLE, '禁止'), _AUDIO_EN_FORCE_OPTIO),
  AUDIO_ALL_ENFORCE_OPTIONS: (_AUDIO_ALL_ENFORCE_OP = {}, _defineProperty(_AUDIO_ALL_ENFORCE_OP, CONFERENCE_SETTING.AUDIO_ALL_ENFORCE.ENABLE, '允许'), _defineProperty(_AUDIO_ALL_ENFORCE_OP, CONFERENCE_SETTING.AUDIO_ALL_ENFORCE.DISABLE, '禁止'), _AUDIO_ALL_ENFORCE_OP)
};

var ABILITY_AUTHROIZATION_STATUS = {
  ENABLE: 1,
  ALL: 0,
  DISABLE: -1,
  DELETE: 2
};
var ABILITY_AUTHROIZATION_STATUS_TEXT = (_ABILITY_AUTHROIZATIO = {}, _defineProperty(_ABILITY_AUTHROIZATIO, ABILITY_AUTHROIZATION_STATUS.ENABLE, '启用'), _defineProperty(_ABILITY_AUTHROIZATIO, ABILITY_AUTHROIZATION_STATUS.DISABLE, '禁用'), _defineProperty(_ABILITY_AUTHROIZATIO, ABILITY_AUTHROIZATION_STATUS.DELETE, '删除'), _defineProperty(_ABILITY_AUTHROIZATIO, ABILITY_AUTHROIZATION_STATUS.ALL, '全部'), _ABILITY_AUTHROIZATIO);

exports.RECORD_FLAG = RECORD_FLAG;
exports.CONFERENCE_SETTING = CONFERENCE_SETTING;
exports.CONFERENCE_SETTING_OPTIONS = CONFERENCE_SETTING_OPTIONS;
exports.ABILITY_AUTHROIZATION_STATUS = ABILITY_AUTHROIZATION_STATUS;
exports.ABILITY_AUTHROIZATION_STATUS_TEXT = ABILITY_AUTHROIZATION_STATUS_TEXT;