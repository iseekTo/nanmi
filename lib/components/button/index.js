"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
require("./style/p-btn.less");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        return _super.call(this, props) || this;
    }
    Button.prototype.render = function () {
        var _a;
        var _b = this.props, type = _b.type, size = _b.size, defaultclass = _b.defaultclass, click = _b.click, text = _b.text;
        var btnclass = classnames_1.default((_a = {},
            _a["" + defaultclass] = defaultclass,
            _a[defaultclass + "-" + type] = type,
            _a[defaultclass + "-" + size] = size,
            _a));
        return React.createElement("button", { type: "button", className: btnclass, onClick: click }, text);
    };
    Button.defaultProps = {
        type: 'none',
        size: 'middle',
        defaultclass: 'p-btn'
    };
    return Button;
}(React.Component));
exports.default = Button;
