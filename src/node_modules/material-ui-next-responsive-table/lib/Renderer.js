"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CellRenderer = exports.CellRenderer = function CellRenderer(_ref) {
  var column = _ref.column,
      row = _ref.row,
      data = _ref.data;
  return column.render ? column.render(row[column.key], row, data) : row[column.key];
};

var LabelRenderer = exports.LabelRenderer = function LabelRenderer(_ref2) {
  var column = _ref2.column,
      data = _ref2.data;
  return column.renderLabel ? column.renderLabel(column, data) : column.label.toUpperCase();
};