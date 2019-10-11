(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.StringPixelater = factory());
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var DEFALUT_OPTIONS = {
        fontSize: 12,
        fontName: "'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic'",
        transpose: false,
    };
    var StringPixelater = /** @class */ (function () {
        function StringPixelater(str, options) {
            if (options === void 0) { options = {}; }
            this.str = str;
            this.options = __assign(__assign({}, DEFALUT_OPTIONS), options);
            this.canvas = document.createElement('canvas');
            this.context = this.canvas.getContext('2d');
            if (!str) {
                return;
            }
            if (!this.context) {
                console.warn('canvas is not available in this environment.');
                return;
            }
            this.canvas.height = Math.ceil(this.options.fontSize * 1.5); // To take margin to render ascenders/descenders
            this.context.font = this.fontStyle; // Set font before measuring width
            this.canvas.width = Math.ceil(this.context.measureText(this.str).width);
            this.context.font = this.fontStyle; // Need to reset font after setting width
            this.context.textBaseline = "top";
            this.context.fillText(this.str, 0, 0); // render text
        }
        StringPixelater.pixelate = function (str, options) {
            if (options === void 0) { options = {}; }
            var instance = new StringPixelater(str, options);
            return instance.pixelate();
        };
        StringPixelater.prototype.pixelate = function () {
            var table = new Array(this.canvas.height);
            var imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            var topRow = 0;
            var bottomRow = 0;
            for (var row = 0; row < this.canvas.height; row++) {
                table[row] = new Array(this.canvas.width);
                for (var col = 0; col < this.canvas.width; col++) {
                    var alpha = imageData.data[(this.canvas.width * row + col) * 4 + 3];
                    if (alpha >= 64) {
                        table[row][col] = 1;
                        // Note row number
                        if (topRow === 0)
                            topRow = row;
                        if (bottomRow < row)
                            bottomRow = row;
                    }
                    else {
                        table[row][col] = 0;
                    }
                }
            }
            table = this.options.transpose ? this.transpose(table) : table;
            return this.removeMargin(table, topRow, bottomRow);
        };
        Object.defineProperty(StringPixelater.prototype, "fontStyle", {
            get: function () {
                return this.options.fontSize + "px " + this.options.fontName;
            },
            enumerable: true,
            configurable: true
        });
        StringPixelater.prototype.transpose = function (table) {
            return table[0].map(function (col, i) {
                return table.map(function (row) { return row[i]; });
            });
        };
        StringPixelater.prototype.removeMargin = function (table, topRow, bottomRow) {
            if (this.options.transpose) {
                return table.map(function (row) { return row.slice(topRow, bottomRow + 1); });
            }
            else {
                return table.slice(topRow, bottomRow + 1);
            }
        };
        return StringPixelater;
    }());

    return StringPixelater;

}));
